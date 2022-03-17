<template>
  <v-simple-table fixed-header
    :height="height"
    :dense="dense"
    :dark="dark"
    ref="vstable"
  >
    <template v-slot:default>
      <thead ref="thead">
        <tr>
          <th v-if="showSelect" style="width: 1px; min-width: 1px;">
            <template v-if="!singleSelect">
              <slot name="header.data-table-select" v-bind:props="{ value: isSelectedAll, indeterminate: indeterminateSelectedAll }" v-bind:on="selectAll">
                <v-simple-checkbox :value="isSelectedAll" :indeterminate="indeterminateSelectedAll" @input="selectAll" :ripple="false"></v-simple-checkbox>
              </slot>
            </template>
          </th>
          <th v-for="(header, index) in headers"
            :key="index" @click="toggleSortOrder(index)" @mouseover="headerMouseOver(index)" @mouseleave="headerMouseLeave(index)"
            :class="[header.align ? 'text-' + header.align : 'text-start', header.class ? header.class : '']"
            :style="header.width ? (typeof header.width === 'string' ? 'width: ' + header.width + '; min-width: ' + header.width + ';' : 'width: ' + header.width + 'px; min-width:' + header.width + 'px;') : ''"
          ><slot :name="'header.' + header.value" v-bind:header="header">{{ header.text }}</slot>
            <template v-if="header.filterable != null ? header.filterable : true">
            <v-menu left offset-y :close-on-content-click="false" :dark="dark">
              <template v-slot:activator="{ on, attrs }">
                <v-icon :color="0 < filterValues[index].length ? 'blue darken-4' : 'blue-grey lighten-2'" dense v-bind="attrs" v-on="on">{{ svgFilterVariant }}</v-icon>
              </template>
              <v-card outlined>
                <v-autocomplete clearable deletable-chips multiple small-chips v-model="filterValues[index]" :items="filterSelectOptions[index]" dense class="mx-1" :dark="dark"></v-autocomplete>
              </v-card>
            </v-menu>
            </template>
            <template v-if="header.sortable != null ? header.sortable : true">
            <v-icon :color="-1 < sortIdxs.findIndex(v => v === index) ? 'blue darken-4' : 'blue-grey lighten-2'" :style="-1 < sortIdxs.findIndex(v => v === index) || hoveredHeaderIdx === index ? 'visibility:visible;' : 'visibility:hidden;'">
              <template v-if="-1 < sortIdxs.findIndex(v => v === index)">
                <template v-if="sortOrders[sortIdxs.findIndex(v => v === index)] == -1">{{ svgChevronDown }}</template>
                <template v-else-if="sortOrders[sortIdxs.findIndex(v => v === index)] == 1">{{ svgChevronUp }}</template>
              </template>
              <template v-else>{{ svgChevronUp }}</template>
            </v-icon>
            <v-chip color="blue-grey lighten-4" small class="px-2" v-if="-1 < sortIdxs.findIndex(v => v === index)">{{ sortIdxs.findIndex(v => v === index) + 1 }}</v-chip>
            </template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="0 < paddingtop">
          <td
            :colspan="showSelect ? headers.length + 1 : headers.length"
            :style="'padding-top:' + paddingtop + 'px'">
          </td>
        </tr>
        <tr v-for="(vitem, viidx) in vitems"
          :key="viidx">
          <td v-if="showSelect">
            <slot name="item.data-table-select" v-bind:index="vitem.orgIndex" v-bind:item="vitem.item" v-bind:isSelected="vitem.isSelected">
              <v-simple-checkbox :value="vitem.isSelected" @input="selectRow(viidx)" :ripple="false"></v-simple-checkbox>
            </slot>
          </td>
          <td v-for="(header, hidx) in headers"
            :class="[header.align ? 'text-' + header.align : 'text-start', header.cellClass ? header.cellClass : '']"
            :key="hidx">
            <slot :name="'item.' + header.value" v-bind:item="vitem.item" v-bind:value="vitem.item[header.value]">{{ vitem.item[header.value] }}</slot>
          </td>
        </tr>
        <tr v-if="0 < paddingbottom">
          <td
            :colspan="showSelect ? headers.length + 1 : headers.length"
            :style="'padding-bottom:' + paddingbottom + 'px'"
          >
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mdiFilterVariant, mdiChevronDown, mdiChevronUp, mdiSortVariant } from '@mdi/js';

export default {
  name: 'VirtualScrollTable',
  props: {
    height: Number,
    headers: Array,
    items: Array,
    bench: {
      type: Number,
      default: 0,
    },
    singleSelect: {
      type: Boolean,
      default: false,
    },
    showSelect: {
      type: Boolean,
      default: false,
    },
    multiSort: {
      type: Boolean,
      default: false,
    },
    locale: String,
    dense: {
      type: Boolean,
      default: false,
      required: false,
    },
    dark: {
      type: Boolean,
      default: false,
      required: false,
    },
    value: Array,
  },
  data () {
    return {
      start: 0,
      timeout: null,
      headerHeight: 48,
      rowHeight: 48,
      scrollHeight: 0,
      svgChevronDown: mdiChevronDown,
      svgChevronUp: mdiChevronUp,
      svgFilterVariant: mdiFilterVariant,
      svgSortVariant : mdiSortVariant,
      hoveredHeaderIdx: null,
      refItems: [],
      filteredItems: [],
      filterSelectOptions: [],
      filterValues: [],
      sortIdxs: [],
      sortOrders: [],
      isSelectedAll: false,
      indeterminateSelectedAll: false,
      collator: null,
    }
  },
  created() {
    this.initItems(this.items);
  },
  mounted() {
    this.$refs.vstable.$el.childNodes[0].addEventListener("scroll", this.onScroll);
    this.headerHeight = this.$refs.thead.getBoundingClientRect().height;
    this.rowHeight = this.$refs.thead.getBoundingClientRect().height; // ホントならtbodyの一行から取得？でも一行の高さを固定にしないとおかしなことになるから、とりあえずはヘッダーの高さで。
    this.scrollHeight = this.$refs.vstable.$el.childNodes[0].scrollHeight;
  },
  methods: {
    initItems(items) {
      this.refItems = items.map((item, index) => {
        return {
          item: item,
          orgIndex: index,
          isSelected: false,
        }
      });
      Object.freeze(this.refItems);
      this.filteredItems = this.refItems.slice();
      Object.freeze(this.filteredItems);
      this.filterSelectOptions = this.headers.map((header, index) => Array.from(new Set(this.refItems.map(item => item[index]))));
      this.filterValues = this.headers.map(() => []);
    },
    onScroll(e) {
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        const { scrollTop } = e.target;
        let rows = Math.ceil((scrollTop - this.rowHeight) / this.rowHeight) - Math.floor(this.bench / 2);
        if (rows < 0) rows = 0;
        this.start = rows + this.rowsPerPage > this.filteredItems.length ?
          this.filteredItems.length - this.rowsPerPage: rows;
        this.$nextTick(() => {
          e.target.scrollTop = scrollTop;
          this.scrollHeight = this.$refs.vstable.$el.childNodes[0].scrollHeight;
        });
      }, 2);
    },
    headerMouseOver(index){
      this.hoveredHeaderIdx = index;
    },
    headerMouseLeave(){
      this.hoveredHeaderIdx = null;    
    },
    toggleSortOrder(idx){
      if (this.headers[idx].sortable === false) return;
      if (this.multiSort) {
        let targetIdx = this.sortIdxs.findIndex(v => v === idx);
        if (targetIdx === -1) {
          this.sortIdxs.push(idx);
          this.sortOrders.push(1);
        } else {
          if (this.sortOrders[targetIdx] === -1) {
            this.sortIdxs.splice(targetIdx, 1);
            this.sortOrders.splice(targetIdx, 1);
            if (this.sortIdxs.length === 0) {
              this.filter(this.filterValues);
              return;
            }
          } else if (this.sortOrders[targetIdx] === 1) {
            this.sortOrders[targetIdx] = -1;
          }
        }
      } else {
        if (this.sortIdxs && 0 < this.sortIdxs.length && this.sortIdxs[0] === idx) {
          if (this.sortOrders[0] === -1) {
            this.sortIdxs = [];
            this.sortOrders = [];
            this.filter(this.filterValues);
            return;
          } else if (this.sortOrders[0] === 1) {
            this.sortOrders = [-1];
          } else {
            this.sortOrders = [1];
          }
        } else {
          this.sortIdxs = [idx];
          this.sortOrders = [1];
        }
      }
      this.sort();
    },
    filter(vals){
      this.filteredItems = this.refItems.filter(refItem => {
        for (let i = 0; i < vals.length; i++) {
          if (vals[i] && 0 < vals[i].length) {
            if (vals[i].findIndex(v => v === refItem.item[this.headers[i].value]) === -1) return false;
          }
        }
        return true;
      });
      this.refreshSelectAll(this.filteredItems);
      this.refreshFilterSelections(this.filteredItems);
      this.sort(this.sortOrders);
    },
    refreshFilterSelections(filteredItems){
      this.filterSelectOptions = this.headers.map((header, index) => {
        if (this.filterValues[index] && 0 < this.filterValues[index].length) return this.filterSelectOptions[index];
        return Array.from(new Set(filteredItems.map(filteredItem => filteredItem.item[this.headers[index].value])));
      });
    },
    refreshSelectAll(){
      if (this.singleSelect) return;

      let firstVal = this.filteredItems[0].isSelected;
      
      if (this.filteredItems.findIndex(v => v.isSelected !== firstVal) === -1) {
        this.isSelectedAll = firstVal;
        this.indeterminateSelectedAll = false;
      } else {
        this.isSelectedAll = false;
        this.indeterminateSelectedAll = true;
      }
    },
    sort() {
      if (!this.sortIdxs || this.sortIdxs.length < 1 || this.sortOrders[0] === 0) return;
      if (!this.collator) this.collator = this.locale ? new Intl.Collator(this.locale) : new Intl.Collator('ja');
      this.filteredItems = this.filteredItems.sort((a, b) => {
        for (let i = 0; i < this.sortIdxs.length; i++) {
          let name = this.headers[this.sortIdxs[i]].value;
          if (this.headers[this.sortIdxs[i]].sort) {
            return this.headers[this.sortIdxs[i]].sort(a.item[name], b.item[name]) * this.sortOrders[i];
          } else if (typeof a.item[name] === 'string' && typeof b.item[name] === 'string') {
            let c = this.collator.compare(a.item[name], b.item[name]);
            if (c !== 0) {
              return c * this.sortOrders[i];
            }
          } else {
            if (a.item[name] !== b.item[name]) return (a.item[name] - b.item[name]) * this.sortOrders[i];
          }
        }
        return 0;
      });
    },
    selectAll(){
      if (this.singleSelect) return;

      let newVal = this.indeterminateSelectedAll ? true : !this.isSelectedAll;

      this.isSelectedAll = newVal;
      this.indeterminateSelectedAll = false;
      this.filteredItems = this.filteredItems.map(filteredItem => {
        this.refItems[filteredItem.orgIndex].isSelected = newVal;
        filteredItem.isSelected = newVal;
        return filteredItem;
      });
      this.$emit('input', this.items.filter((item, index) => this.refItems[index].isSelected));
    },
    selectRow(vindex) {
      let targetOrgIndex = this.vitems[vindex].orgIndex;

      if (this.singleSelect) {
        this.refItems.forEach(refItem => {
          if (refItem.orgIndex !== targetOrgIndex) refItem.isSelected = false;
        });
        this.filteredItems.forEach(filteredItem => {
          if (filteredItem.orgIndex !== targetOrgIndex) filteredItem.isSelected = false;
        });
      }
      
      let newVal = !this.refItems[targetOrgIndex].isSelected;

      this.refItems[targetOrgIndex].isSelected = newVal;
      this.filteredItems[this.start + vindex].isSelected = newVal;

      if (!this.singleSelect) {
        this.refreshSelectAll();
      }

      this.filteredItems.splice();
      this.$emit('input', this.items.filter((item, index) => this.refItems[index].isSelected));
    },
  },
  watch: {
    items: function(value) {
      this.initItems(value);
    },
    locale: function(val) {
      this.collator = val ? new Intl.Collator(val) : new Intl.Collator();
    },
    filterValues: function(val) {
      this.filter(val);
    },
  },
  computed: {
    rowsPerPage() {
      return Math.floor(this.height / this.rowHeight) - 1;
    },
    vitems() {
/*
      let s = Date.now();
      console.log('vitems start');
*/
      let r = this.filteredItems.slice(this.start, this.start + this.rowsPerPage + this.bench);
      Object.freeze(r);
/*
      console.log('vitems end', (Date.now() - s) / 1000.0, "sec");
*/
      return r;
    },
    paddingtop() {
      return this.start * this.rowHeight;
    },
    paddingbottom() {
      return this.rowHeight * (this.filteredItems.length - (this.start + this.rowsPerPage + this.bench));
    },
  },
}
</script>
