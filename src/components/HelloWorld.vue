<template>
   <v-container>
      <v-slider
         v-model="slider"
         class="align-center"
         :max="100000"
         :min="0"
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
      <VirtualScrollTable
         v-model="selected"
         :height="480"
         :bench="28"
         :headers="headers"
         :items="items"
         show-select
         multi-sort
         dense
      />
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
         slider: 10000,
         headers: [
            {
               text: 'ID',
               value: 'id'
            },
            {
               text: 'Name',
               value: 'name'
            },
            {
               text: 'Type',
               value: 'type'
            },
            {
               text: 'Value',
               value: 'value'
            },
            {
               text: '日本語',
               value: 'valueJa'
            }
         ],
         items: [],
         types: [
            'Bank transfer',
            'Cash',
            'Credit card',
            'Coupon',
            'Family mart'
         ],
         selected: []
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
            temp.push({
               id: i,
               name: Math.random().toString(36).slice(-8),
               type: this.types[Math.floor(Math.random() * this.types.length)],
               value: Math.floor(Math.random() * 999999),
               valueJa: Array(2 + Math.floor(Math.random() * 5))
                  .fill()
                  .map(() => {
                     let s = Math.floor(Math.random() * kana.length)
                     return kana.substring(s, s + 1)
                  })
                  .join('')
            })
         }
         console.log('complete', (Date.now() - b) / 1000.0, 'sec')
         this.items = temp
      }
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
