<template>
   <v-container fluid>
      <v-switch v-model="$vuetify.theme.dark" label="Vuetify Theme Dark">
      </v-switch>
      <v-slider
         v-model="slider"
         class="align-center"
         :max="100000"
         :min="0"
         label="Number of rows"
         hide-details
      >
         <template v-slot:append>
            <v-text-field
               v-model="slider"
               class="mt-0 pt-0"
               hide-details
               single-line
               type="number"
               style="width: 60px"
            ></v-text-field>
         </template>
      </v-slider>
      <v-row>
         <v-col>
            <v-slider
               v-model="bench"
               label="Bench"
               class="align-center"
               :max="99"
               :min="0"
               hide-details
            >
               <template v-slot:append>
                  <v-text-field
                     v-model="bench"
                     class="mt-0 pt-0"
                     hide-details
                     single-line
                     type="number"
                     style="width: 60px"
                  ></v-text-field>
               </template>
            </v-slider>
         </v-col>
         <v-col>
            <v-switch v-model="singleSelect" label="Single select"></v-switch>
         </v-col>
         <v-col>
            <v-switch v-model="dense" label="Dense"></v-switch>
         </v-col>
         <v-col>
            <v-switch v-model="dark" label="Dark"></v-switch>
         </v-col>
         <v-col>
            <v-switch v-model="light" label="Light"></v-switch>
         </v-col>
      </v-row>
      <VirtualScrollTable
         v-model="selected"
         :height="480"
         :bench="bench"
         :headers="headers"
         :items="items"
         :single-select="singleSelect"
         show-select
         multi-sort
         :dense="dense"
         :dark="dark"
         :light="light"
      >
         <template v-slot:[`header.grade`]="{ header }">
            {{ header.text.toUpperCase() }}
         </template>
         <template v-slot:[`item.grade`]="{ item }">
            <v-chip :color="getGradeColor(item.grade)">{{ item.grade }}</v-chip>
         </template>
         <template v-slot:[`item.price`]="{ value }">
            {{
               value.toLocaleString('ja', {
                  style: 'currency',
                  currency: 'JPY'
               })
            }}
         </template>
         <template v-slot:[`item.valueJa`]="{ value }">
<!-- 文字数オーバーで省略表記する場合
            <template v-if="value && 25 < value.length">
               <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                     <span icon v-bind="attrs" v-on="on">
                        {{ value.substring(0, 24) + '…' }}
                     </span>
                  </template>
                  <span>{{ value }}</span>
               </v-tooltip>
            </template>
            <template v-else>{{ value }}</template>
以下は幅で省略表記 -->
           <v-tooltip bottom :open-on-click="false" :open-on-focus="false" :open-on-hover="true">
             <template #activator="{ on, attrs }">
               <span class="to-ellipsis" v-bind="attrs" @mouseenter="showElliptedTooltip($event, on.mouseenter)" v-on="{ ...on, ...{ mouseenter: () => true } }">{{ value }}</span>
             </template>
             <span>{{ value }}</span>
           </v-tooltip>
         </template>
      </VirtualScrollTable>
   </v-container>
</template>

<script>
import VirtualScrollTable from '../components/VirtualScrollTable'

export default {
   name: 'Home',
   components: {
      VirtualScrollTable
   },
   data() {
      return {
         slider: 20000,
         bench: 28,
         dense: true,
         dark: false,
         light: false,
         singleSelect: false,
         headers: [
            {
               text: 'ID',
               value: 'id',
               align: 'end',
               filterable: false,
               width: '80'
            },
            {
               text: 'Name',
               value: 'name',
               sortable: false,
               filterable: false
            },
            {
               text: 'Type',
               value: 'type'
            },
            {
               text: 'Grade',
               value: 'grade',
               align: 'center',
               class: 'rounded-xl',
               cellClass: 'rounded-xl',
               width: '128pt'
            },
            {
               text: 'Value',
               value: 'value'
            },
            {
               text: '日本語',
               value: 'valueJa'
            },
            {
               text: '文字数',
               value: 'valueJaLen',
               align: 'end'
            },
            {
               text: 'Date time',
               value: 'datetime',
               sort: (a, b) => Date.parse(a) - Date.parse(b)
            },
            {
               text: '価格',
               value: 'price',
               align: 'end'
            },
         ],
         items: [],
         types: [
            'Bank transfer',
            'Cash',
            'Credit card',
            'Coupon',
            'Family mart'
         ],
         grades: ['A', 'B', 'C', 'D', 'E'],
         selected: [],
      }
   },
   methods: {
      refreshItems: function (val) {
         let temp = []
         let b = Date.now()
         let kana =
            'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐうゑをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰウヱヲンがぎぐげござじずぜぞだぢづでどばびぶべぼヴガギグゲゴザジズゼゾダヂヅデドバビブベボぱぴぷぺぽパピプペポぁぃぅぇぉっゃゅょゎァィゥェォヵヶッャュョー'
         console.log('start generate data ...')
         for (let i = 1; i <= val; i++) {
            const ja = Array(2 + Math.floor(Math.random() * 100))
                  .fill()
                  .map(() => {
                     let s = Math.floor(Math.random() * kana.length)
                     return kana.substring(s, s + 1)
                  })
                  .join('');
            temp.push({
               id: i,
               name: Math.random().toString(36).slice(-8),
               type: this.types[Math.floor(Math.random() * this.types.length)],
               grade: this.grades[
                  Math.floor(Math.random() * this.grades.length)
               ],
               value: Math.floor(Math.random() * 999999),
               valueJa: ja,
               valueJaLen: ja.length,
               datetime: new Intl.DateTimeFormat('en', {
                  dateStyle: 'short',
                  timeStyle: 'short'
               }).format(
                  new Date(
                     (1577804400 + Math.floor(Math.random() * 200000000)) * 1000
                  )
               ),
               price: Math.floor(Math.random() * 999 + 1) * 100
            })
         }
         console.log('complete', (Date.now() - b) / 1000.0, 'sec')
         this.items = temp
      },
      getGradeColor(grade) {
         let c0 = [102, 187, 106]
         let c1 = [255, 238, 88]
         let c2 = [239, 83, 80]
         let i = this.grades.findIndex((g) => g === grade)
         let p = i / (this.grades.length - 1)

         if (p < 0.5)
            return (
               'rgb(' +
               Math.floor((c1[0] - c0[0]) * p + c0[0]) +
               ',' +
               Math.floor((c1[1] - c0[1]) * p + c0[1]) +
               ',' +
               Math.floor((c1[2] - c0[2]) * p + c0[2]) +
               ')'
            )
         else
            return (
               'rgb(' +
               Math.floor((c2[0] - c1[0]) * p + c1[0]) +
               ',' +
               Math.floor((c2[1] - c1[1]) * p + c1[1]) +
               ',' +
               Math.floor((c2[2] - c1[2]) * p + c1[2]) +
               ')'
            )
      },
      isEllipted(element) {
        if (!(element instanceof HTMLElement)) return null;
        return element.offsetWidth < element.scrollWidth;
      },
      showElliptedTooltip(e, f) {
        if (!e || !f) return;
        if (this.isEllipted(e.target)) f(e);
      },
   },
   created() {
      this.refreshItems(this.slider)
   },
   watch: {
      slider: function (val) {
         this.refreshItems(val)
      },
      selected: function (val) {
         console.log('selected', val)
      }
   }
}
</script>

<style scoped>
.to-ellipsis {
  display: inline-block;
  max-width: 800px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>