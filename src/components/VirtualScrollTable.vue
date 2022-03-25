<template>
  <v-simple-table
    fixed-header
    :height="height"
    :light="light"
    :dark="dark"
    :dense="dense"
    ref="vstable"
    class="vsdt"
  >
    <template v-slot:default>
      <thead ref="thead">
        <tr>
          <th v-if="showSelect" style="width: 1px; min-width: 1px;">
            <template v-if="!singleSelect">
              <slot
                name="header.data-table-select"
                v-bind:props="{
                  value: isSelectedAll,
                  indeterminate: indeterminateSelectedAll
                }"
                v-bind:on="selectAll"
              >
                <v-simple-checkbox
                  :value="isSelectedAll"
                  :indeterminate="indeterminateSelectedAll"
                  @input="selectAll"
                  :ripple="false"
                ></v-simple-checkbox>
              </slot>
            </template>
          </th>
          <th
            v-for="(header, index) in headers"
            :key="index"
            @click="toggleSortOrder(index)"
            @mouseover="headerMouseOver(index)"
            @mouseleave="headerMouseLeave(index)"
            :class="[
              header.align ? 'text-' + header.align : 'text-start',
              header.class ? header.class : ''
            ]"
            :style="
              header.width
                ? typeof header.width === 'string'
                  ? 'width: ' +
                    header.width +
                    '; min-width: ' +
                    header.width +
                    ';'
                  : 'width: ' +
                    header.width +
                    'px; min-width:' +
                    header.width +
                    'px;'
                : ''
            "
          >
            <div style="min-width: max-content;">
              <slot :name="'header.' + header.value" v-bind:header="header">
                {{ header.text }}
              </slot>
              <template
                v-if="header.filterable != null ? header.filterable : true"
              >
                <v-menu
                  left
                  offset-y
                  :close-on-content-click="false"
                  :light="light"
                  :dark="dark"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      :dense="dense"
                      :class="{'text--primary': true, 'text--disabled': (!filterValues || !filterValues[index] || filterValues[index].length < 1)}"
                      v-bind="attrs"
                      v-on="on"
                      @click.stop.prevent
                    >
                      {{ svgFilterVariant }}
                    </v-icon>
                  </template>
                  <v-card outlined>
                    <v-autocomplete
                      :dense="dense"
                      clearable
                      deletable-chips
                      multiple
                      small-chips
                      v-model="filterValues[index]"
                      :items="filterSelectOptions[index]"
                      class="mx-1"
                      hide-details
                      :dark="dark"
                    ></v-autocomplete>
                  </v-card>
                </v-menu>
              </template>
              <template v-if="header.sortable != null ? header.sortable : true">
                <v-icon
                  :dense="dense"
                  :class="{'text--primary': true, 'text--disabled': (-1 === sortIdxs.findIndex(v => v === index))}"
                  :style="
                    -1 < sortIdxs.findIndex(v => v === index) ||
                    hoveredHeaderIdx === index
                      ? 'visibility:visible;'
                      : 'visibility:hidden;'
                  "
                >
                  <template v-if="-1 < sortIdxs.findIndex(v => v === index)">
                    <template
                      v-if="
                        sortOrders[sortIdxs.findIndex(v => v === index)] == -1
                      "
                    >
                      {{ svgArrowDown }}
                    </template>
                    <template
                      v-else-if="
                        sortOrders[sortIdxs.findIndex(v => v === index)] == 1
                      "
                    >
                      {{ svgArrowUp }}
                    </template>
                  </template>
                  <template v-else>{{ svgArrowUp }}</template>
                </v-icon>
                <v-chip
                  v-if="-1 < sortIdxs.findIndex(v => v === index)"
                  class="px-2"
                  small
                >
                  {{ sortIdxs.findIndex(v => v === index) + 1 }}
                </v-chip>
              </template>
            </div>
          </th>
        </tr>
      </thead>
      <tbody ref="tbody">
        <tr v-if="0 < paddingtop">
          <td
            :colspan="showSelect ? headers.length + 1 : headers.length"
            :style="'padding-top:' + paddingtop + 'px'"
          ></td>
        </tr>
        <tr v-for="(vitem, viidx) in vitems" :key="viidx">
          <td v-if="showSelect">
            <slot
              name="item.data-table-select"
              v-bind:index="vitem.orgIndex"
              v-bind:item="vitem.item"
              v-bind:isSelected="vitem.isSelected"
            >
              <v-simple-checkbox
                :value="vitem.isSelected"
                @input="selectRow(viidx)"
                :ripple="false"
              ></v-simple-checkbox>
            </slot>
          </td>
          <td
            v-for="(header, hidx) in headers"
            :class="[
              header.align ? 'text-' + header.align : 'text-start',
              header.cellClass ? header.cellClass : ''
            ]"
            :key="hidx"
          >
            <div style="min-width: max-content;">
              <slot
                :name="'item.' + header.value"
                v-bind:item="vitem.item"
                v-bind:value="vitem.item[header.value]"
              >
                {{ vitem.item[header.value] }}
              </slot>
            </div>
          </td>
        </tr>
        <tr v-if="0 < paddingbottom">
          <td
            :colspan="showSelect ? headers.length + 1 : headers.length"
            :style="'padding-bottom:' + paddingbottom + 'px'"
          ></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "VirtualScrollTable",
  props: {
    height: { type: Number, default: 0 },
    headers: { type: Array, default: () => [] },
    items: { type: Array, default: () => [] },
    bench: { type: Number, default: 0 },
    singleSelect: { type: Boolean, default: false },
    showSelect: { type: Boolean, default: false },
    multiSort: { type: Boolean, default: false },
    locale: { type: String, default: "" },
    dense: { type: Boolean, default: false, required: false },
    dark: { type: Boolean, default: false, required: false },
    light: { type: Boolean, default: false, required: false },
    value: { type: Array, default: () => [] }
  },
  data() {
    return {
      start: 0,
      timeout: null,
      headerHeight: 48,
      rowHeight: 48,
      scrollHeight: 0,
      svgArrowDown: "mdi-arrow-down",
      svgArrowUp: "mdi-arrow-up",
      svgFilterVariant: "mdi-filter-variant",
      svgSortVariant: "mdi-sort-variant",
      hoveredHeaderIdx: null,
      refItems: [],
      filteredItems: [],
      filterSelectOptions: [],
      filterValues: [],
      sortIdxs: [],
      sortOrders: [],
      isSelectedAll: false,
      indeterminateSelectedAll: false,
      collator: null
    };
  },
  created() {
    this.collator = this.locale
      ? new Intl.Collator(this.locale)
      : new Intl.Collator("ja");
    this.initItems(this.items);
  },
  mounted() {
    this.$refs.vstable.$el.childNodes[0].addEventListener(
      "scroll",
      this.onScroll
    );
    this.$nextTick(() => {
      this.refreshSize();
    });
  },
  methods: {
    refreshSize() {
      if (!this.filteredItems || this.filteredItems.length < 1) return;
      const bh = this.$refs.tbody.children[this.start === 0 ? 0 : 1].getBoundingClientRect().height;
      if (this.rowHeight !== bh) this.rowHeight = bh;
      if (this.$refs.thead.firstElementChild) {
        const hh = this.$refs.thead.firstElementChild.getBoundingClientRect()
          .height;
        if (this.headerHeight !== hh) this.headerHeight = hh;
      }
      if (this.$refs.vstable.$el.children[0]) {
        const sh = this.$refs.vstable.$el.children[0].scrollHeight;
        if (this.scrollHeight !== sh) this.scrollHeight = sh;
      }
    },
    initItems(items) {
      this.refItems = items.map((item, index) => {
        return {
          item: item,
          orgIndex: index,
          isSelected: false
        };
      });
      Object.freeze(this.refItems);
      this.filteredItems = this.refItems.slice();
      Object.freeze(this.filteredItems);
      this.filterValues = this.headers.map(() => []);
      this.refreshFilterSelections(this.filteredItems);
    },
    onScroll(e) {
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        const { scrollTop } = e.target;
        let rows =
          Math.ceil((scrollTop - this.headerHeight) / this.rowHeight) -
          Math.floor(this.bench / 2);
        if (rows < 0) rows = 0;
        this.start =
          rows + this.rowsPerPage > this.filteredItems.length
            ? this.filteredItems.length - this.rowsPerPage
            : rows;
        this.$nextTick(() => {
          e.target.scrollTop = scrollTop;
          this.scrollHeight = this.$refs.vstable.$el.childNodes[0].scrollHeight;
        });
      }, 2);
    },
    headerMouseOver(index) {
      this.hoveredHeaderIdx = index;
    },
    headerMouseLeave() {
      this.hoveredHeaderIdx = null;
    },
    toggleSortOrder(idx) {
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
        if (
          this.sortIdxs &&
          0 < this.sortIdxs.length &&
          this.sortIdxs[0] === idx
        ) {
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
    filter(vals) {
      this.filteredItems = this.refItems.filter(refItem => {
        for (let i = 0; i < vals.length; i++) {
          if (vals[i] && 0 < vals[i].length) {
            if (
              vals[i].findIndex(
                v => v === refItem.item[this.headers[i].value]
              ) === -1
            )
              return false;
          }
        }
        return true;
      });
      this.refreshSelectAll(this.filteredItems);
      this.refreshFilterSelections(this.filteredItems);
      this.sort(this.sortOrders);
    },
    refreshFilterSelections(filteredItems) {
      this.filterSelectOptions = this.headers.map((header, index) => {
        if (
          this.filterSelectOptions[index] &&
          0 < this.filterSelectOptions[index].length &&
          this.filterValues[index] &&
          0 < this.filterValues[index].length
        ) {
          return this.filterSelectOptions[index];
        } else {
          return Array.from(
            new Set(
              filteredItems.map(filteredItem => filteredItem.item[header.value])
            )
          ).sort((a, b) => {
            const sortfunc = header.sort;
            if (sortfunc) {
              return sortfunc(a, b);
            } else if (typeof a === "string" && typeof b === "string") {
              return this.collator.compare(a, b);
            } else {
              if (a !== b) return a - b;
            }
            return 0;
          });
        }
      });
    },
    refreshSelectAll() {
      if (
        this.singleSelect ||
        !this.filteredItems ||
        this.filteredItems.length < 1
      )
        return;

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
      if (
        !this.sortIdxs ||
        this.sortIdxs.length < 1 ||
        this.sortOrders[0] === 0
      )
        return;
      this.filteredItems = this.filteredItems.sort((a, b) => {
        for (let i = 0; i < this.sortIdxs.length; i++) {
          const name = this.headers[this.sortIdxs[i]].value;
          const sortfunc = this.headers[this.sortIdxs[i]].sort;
          if (sortfunc) {
            return sortfunc(a.item[name], b.item[name]) * this.sortOrders[i];
          } else if (
            typeof a.item[name] === "string" &&
            typeof b.item[name] === "string"
          ) {
            const c = this.collator.compare(a.item[name], b.item[name]);
            if (c !== 0) {
              return c * this.sortOrders[i];
            }
          } else {
            if (a.item[name] !== b.item[name])
              return (a.item[name] - b.item[name]) * this.sortOrders[i];
          }
        }
        return 0;
      });
    },
    selectAll() {
      if (this.singleSelect) return;

      let newVal = this.indeterminateSelectedAll ? true : !this.isSelectedAll;

      this.isSelectedAll = newVal;
      this.indeterminateSelectedAll = false;
      this.filteredItems = this.filteredItems.map(filteredItem => {
        this.refItems[filteredItem.orgIndex].isSelected = newVal;
        filteredItem.isSelected = newVal;
        return filteredItem;
      });
      this.$emit(
        "input",
        this.items.filter((item, index) => this.refItems[index].isSelected)
      );
    },
    selectRow(vindex) {
      let targetOrgIndex = this.vitems[vindex].orgIndex;

      if (this.singleSelect) {
        this.refItems.forEach(refItem => {
          if (refItem.orgIndex !== targetOrgIndex) refItem.isSelected = false;
        });
        this.filteredItems.forEach(filteredItem => {
          if (filteredItem.orgIndex !== targetOrgIndex)
            filteredItem.isSelected = false;
        });
      }

      let newVal = !this.refItems[targetOrgIndex].isSelected;

      this.refItems[targetOrgIndex].isSelected = newVal;
      this.filteredItems[this.start + vindex].isSelected = newVal;

      if (!this.singleSelect) {
        this.refreshSelectAll();
      }

      this.filteredItems.splice();
      this.$emit(
        "input",
        this.items.filter((item, index) => this.refItems[index].isSelected)
      );
    }
  },
  watch: {
    items: function(value) {
      this.initItems(value);
    },
    dense: function() {
      this.$nextTick(() => {
        this.refreshSize();
      });
    },
    locale: function(val) {
      this.collator = val ? new Intl.Collator(val) : new Intl.Collator();
    },
    filterValues: function(val) {
      this.filter(val);
    }
  },
  computed: {
    rowsPerPage() {
      return Math.ceil((this.height - this.headerHeight) / this.rowHeight);
    },
    vitems() {
      /*
      let s = Date.now();
      console.log('vitems start');
      */
      let r = this.filteredItems.slice(
        this.start,
        this.start + this.rowsPerPage + this.bench
      );
      Object.freeze(r);
      /*
      console.log('vitems end', (Date.now() - s) / 1000.0, "sec");
      */

      if (
        this.filteredItems &&
        0 < this.filteredItems.length
      ) {
        this.$nextTick(() => {
          this.refreshSize();
        });
      }

      return r;
    },
    paddingtop() {
      return this.start * this.rowHeight;
    },
    paddingbottom() {
      return (
        this.rowHeight *
        (this.filteredItems.length -
          (this.start + this.rowsPerPage + this.bench))
      );
    }
  }
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/styles.sass'

.vsdt
  .v-icon.theme--light.text--primary
    color: map-get(map-get($material-light, 'text'), 'primary') !important
  .v-icon.theme--dark.text--primary
    color: map-get(map-get($material-dark, 'text'), 'primary') !important
  .v-icon.theme--light.text--disabled
    color: map-get(map-get($material-light, 'text'), 'disabled') !important
  .v-icon.theme--dark.text--disabled
    color: map-get(map-get($material-dark, 'text'), 'disabled') !important
</style>
