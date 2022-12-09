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
         <template v-slot:[`item.chips`]="{ item }">
            <v-chip :color="getGradeColor(item.chips)">{{ item.chips }}</v-chip>
         </template>
         <template v-slot:[`item.price`]="{ value }">
            {{
               value.toLocaleString('ja', {
                  style: 'currency',
                  currency: 'JPY'
               })
            }}
         </template>
         <template v-slot:[`item.date`]="{ value }">
            {{
               getFormatedDate(value)
            }}
         </template>
         <template v-slot:[`item.time`]="{ value }">
            {{
               getFormatedTime(value)
            }}
         </template>
         <template v-slot:[`item.datetime`]="{ value }">
            {{
               getFormatedDateTime(value)
            }}
         </template>
         <template v-slot:[`item.flag`]="{ item }">
            <v-simple-checkbox
               v-model="item.flag"
               disabled
            ></v-simple-checkbox>
        </template>
         <template v-slot:[`item.remarks`]="{ value }">
           <v-tooltip bottom :open-on-click="false" :open-on-focus="false" :open-on-hover="true">
             <template #activator="{ on, attrs }">
               <span class="to-ellipsis" v-bind="attrs" @mouseenter="showElliptedTooltip($event, on.mouseenter)" v-on="{ ...on, ...{ mouseenter: () => true } }">{{ value }}</span>
             </template>
             <span>{{ value }}</span>
           </v-tooltip>
         </template>
         <template v-slot:[`item.actions`]="{ item }">
           <v-icon
             small
             class="mr-2"
             @click="editItem(item)"
           >mdi-pencil</v-icon>
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
               text: '名前',
               value: 'name',
               sortable: false,
            },
            {
               text: 'コード',
               value: 'code',
            },
            {
               text: '支払方法',
               value: 'payment'
            },
            {
               text: '価格',
               value: 'price',
               align: 'end',
            },
            {
               text: '日付',
               value: 'date',
               filterTextFromatter: this.getFormatedDate,
            },
            {
               text: '時刻',
               value: 'time',
               filterTextFromatter: this.getFormatedTime,
            },
            {
               text: '日時',
               value: 'datetime',
               filterTextFromatter: this.getFormatedDateTime,
            },
            {
               text: 'フラグ',
               value: 'flag',
               align: 'center',
               filterTextFromatter: (v) => v ? 'ON' : 'OFF',
            },
            {
               text: 'チップス',
               value: 'chips',
               align: 'center',
            },
            {
               text: '備考',
               value: 'remarks',
            },
            {
               text: '',
               value: 'actions',
               sortable: false,
               filterable: false,
            },
         ],
         items: [],
         types: [
            '現金',
            '振込',
            'クレジットカード',
            'クーポン',
            'コンビニ'
         ],
         grades: ['A', 'B', 'C', 'D', 'E'],
         selected: [],
         lastnames: ['佐藤','鈴木','高橋','田中','伊藤','渡辺','山本','中村','小林','加藤','吉田','山田','佐々木','山口','松本','井上','木村','林','斎藤','清水','山崎','森','池田','橋本','阿部','石川','山下','中島','石井','小川','前田','岡田','長谷川','藤田','後藤','近藤','村上','遠藤','青木','坂本','斉藤','福田','太田','西村','藤井','金子','岡本','藤原','中野','三浦','原田','中川','松田','竹内','小野','田村','中山','和田','石田','森田','上田','原','内田','柴田','酒井','宮崎','横山','高木','安藤','宮本','大野','小島','谷口','今井','工藤','高田','増田','丸山','杉山','村田','大塚','新井','小山','平野','藤本','河野','上野','野口','武田','松井','千葉','岩崎','菅原','木下','久保','佐野','野村','松尾','市川','菊地'],
         firstnames: ['蒼','凪','蓮','陽翔','湊','颯真','碧','樹','大和','悠真','暖','大翔','陽斗','蒼空','陽向','颯','湊斗','新','陽','伊織','結翔','蒼真','悠','奏汰','朔','律','琉生','晴','奏太','朝陽','碧斗','陽大','結斗','碧人','悠人','陽太','大雅','歩','凌久','葵','旭','蒼生','悠生','悠斗','陸','海斗','迅','奏翔','蒼大','湊翔','陽葵','凛','詩','陽菜','結菜','杏','澪','結愛','芽依','莉子','さくら','咲茉','乃愛','琴音','葵','琴葉','楓','翠','凪咲','結月','心陽','凪','ひなた','紬希','美桜','依茉','朱莉','心結','茉白','一華','結','咲良','紗奈','紬','蘭','愛','結衣','彩葉','柚希','あかり','芽生','心春','陽菜乃','莉緒','花音','結心','心晴','柚葉','陽咲','莉愛'],
         kana: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐうゑをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰウヱヲンがぎぐげござじずぜぞだぢづでどばびぶべぼヴガギグゲゴザジズゼゾダヂヅデドバビブベボぱぴぷぺぽパピプペポぁぃぅぇぉっゃゅょゎァィゥェォヵヶッャュョー',
      }
   },
   methods: {
      getFormatedDate: function (dt) {
         return new Intl.DateTimeFormat('ja', { dateStyle: 'short' }).format(dt) + '(' + new Intl.DateTimeFormat('ja', { weekday: 'narrow' }).format(dt) + ')'
      },
      getFormatedTime: function (dt) {
         return new Intl.DateTimeFormat('ja', { timeStyle: 'short' }).format(dt)
      },
      getFormatedDateTime: function (dt) {
         return this.getFormatedDate(dt) + ' ' + this.getFormatedTime(dt)
      },
      refreshItems: function (val) {
         let temp = []
         let b = Date.now()
         let prfmdt = new Date(Date.now() + Math.floor(Math.random() * 31 * 24 * 60 * 60 * 1000))
         prfmdt.setHours(12)
         prfmdt.setMinutes(34)
         prfmdt.setSeconds(56)
         prfmdt.setMilliseconds(789)
         console.debug('start generate data ...')
         for (let i = 1; i <= val; i++) {
            const ja = Array(2 + Math.floor(Math.random() * 100))
                  .fill()
                  .map(() => {
                     let s = Math.floor(Math.random() * this.kana.length)
                     return this.kana.substring(s, s + 1)
                  })
                  .join('');
            temp.push({
               id: i,
               name: this.lastnames[Math.floor(Math.random() * this.lastnames.length)] + ' ' + this.firstnames[Math.floor(Math.random() * this.firstnames.length)],
               code: Math.random().toString(36).slice(-8),
               payment: this.types[Math.floor(Math.random() * this.types.length)],
               chips: this.grades[
                  Math.floor(Math.random() * this.grades.length)
               ],
               remarks: ja,
               date: new Date(prfmdt.getFullYear(), prfmdt.getMonth(), prfmdt.getDate(), 0, 0, 0, 0),
               time: new Date(1970, 0, 1, prfmdt.getHours(), prfmdt.getMinutes(), 0, 0),
               datetime: new Date(prfmdt),
               price: Math.floor(Math.random() * 999 + 1) * 100,
               flag: 0.5 < Math.random(),
               actions: '',
            })
            prfmdt = new Date(prfmdt.getTime() + Math.random() * 24 * 60 * 60 * 1000)
         }
         console.debug('complete', (Date.now() - b) / 1000.0, 'sec')
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
  max-width: 400px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>