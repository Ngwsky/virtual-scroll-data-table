(function(e){function t(t){for(var r,n,a=t[0],o=t[1],h=t[2],c=0,u=[];c<a.length;c++)n=a[c],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(t);while(u.length)u.shift()();return l.push.apply(l,h||[]),i()}function i(){for(var e,t=0;t<l.length;t++){for(var i=l[t],r=!0,a=1;a<i.length;a++){var o=i[a];0!==s[o]&&(r=!1)}r&&(l.splice(t--,1),e=n(n.s=i[0]))}return e}var r={},s={app:0},l=[];function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=r,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/virtual-scroll-data-table/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var h=0;h<a.length;h++)t(a[h]);var d=o;l.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0940":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);var r=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-main",[i("router-view")],1)],1)},l=[],n={name:"App",data:()=>({})},a=n,o=i("2877"),h=i("6544"),d=i.n(h),c=i("7496"),u=i("f6c4"),f=Object(o["a"])(a,s,l,!1,null,null,null),m=f.exports;d()(f,{VApp:c["a"],VMain:u["a"]});var p=i("8c4f"),g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{fluid:""}},[i("v-switch",{attrs:{label:"Vuetify Theme Dark"},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}}),i("v-slider",{staticClass:"align-center",attrs:{max:1e5,min:0,label:"Number of rows","hide-details":""},scopedSlots:e._u([{key:"append",fn:function(){return[i("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:e.slider,callback:function(t){e.slider=t},expression:"slider"}})]},proxy:!0}]),model:{value:e.slider,callback:function(t){e.slider=t},expression:"slider"}}),i("v-row",[i("v-col",[i("v-slider",{staticClass:"align-center",attrs:{label:"Bench",max:99,min:0,"hide-details":""},scopedSlots:e._u([{key:"append",fn:function(){return[i("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:e.bench,callback:function(t){e.bench=t},expression:"bench"}})]},proxy:!0}]),model:{value:e.bench,callback:function(t){e.bench=t},expression:"bench"}})],1),i("v-col",[i("v-switch",{attrs:{label:"Single select"},model:{value:e.singleSelect,callback:function(t){e.singleSelect=t},expression:"singleSelect"}})],1),i("v-col",[i("v-switch",{attrs:{label:"Dense"},model:{value:e.dense,callback:function(t){e.dense=t},expression:"dense"}})],1),i("v-col",[i("v-switch",{attrs:{label:"Dark"},model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}})],1),i("v-col",[i("v-switch",{attrs:{label:"Light"},model:{value:e.light,callback:function(t){e.light=t},expression:"light"}})],1)],1),i("VirtualScrollTable",{attrs:{height:480,bench:e.bench,headers:e.headers,items:e.items,"single-select":e.singleSelect,"show-select":"","multi-sort":"",dense:e.dense,dark:e.dark,light:e.light},scopedSlots:e._u([{key:"header.grade",fn:function(t){var i=t.header;return[e._v(" "+e._s(i.text.toUpperCase())+" ")]}},{key:"item.chips",fn:function(t){var r=t.item;return[i("v-chip",{attrs:{color:e.getGradeColor(r.chips)}},[e._v(e._s(r.chips))])]}},{key:"item.price",fn:function(t){var i=t.value;return[e._v(" "+e._s(i.toLocaleString("ja",{style:"currency",currency:"JPY"}))+" ")]}},{key:"item.date",fn:function(t){var i=t.value;return[e._v(" "+e._s(e.getFormatedDate(i))+" ")]}},{key:"item.time",fn:function(t){var i=t.value;return[e._v(" "+e._s(e.getFormatedTime(i))+" ")]}},{key:"item.datetime",fn:function(t){var i=t.value;return[e._v(" "+e._s(e.getFormatedDateTime(i))+" ")]}},{key:"item.flag",fn:function(t){var r=t.item;return[i("v-simple-checkbox",{attrs:{disabled:""},model:{value:r.flag,callback:function(t){e.$set(r,"flag",t)},expression:"item.flag"}})]}},{key:"item.remarks",fn:function(t){var r=t.value;return[i("v-tooltip",{attrs:{bottom:"","open-on-click":!1,"open-on-focus":!1,"open-on-hover":!0},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,l=t.attrs;return[i("span",e._g(e._b({staticClass:"to-ellipsis",on:{mouseenter:function(t){return e.showElliptedTooltip(t,s.mouseenter)}}},"span",l,!1),Object.assign({},s,{mouseenter:function(){return!0}})),[e._v(e._s(r))])]}}],null,!0)},[i("span",[e._v(e._s(r))])])]}},{key:"item.actions",fn:function(t){var r=t.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("mdi-pencil")])]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},v=[],S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-simple-table",{ref:"vstable",staticClass:"vsdt",attrs:{"fixed-header":"",height:e.height,light:e.light,dark:e.dark,dense:e.dense},scopedSlots:e._u([{key:"default",fn:function(){return[i("thead",{ref:"thead"},[i("tr",[e.showSelect?i("th",{staticStyle:{width:"1px","min-width":"1px"}},[e.singleSelect?e._e():[e._t("header.data-table-select",(function(){return[i("v-simple-checkbox",{attrs:{value:e.isSelectedAll,indeterminate:e.indeterminateSelectedAll,ripple:!1},on:{input:e.selectAll}})]}),{props:{value:e.isSelectedAll,indeterminate:e.indeterminateSelectedAll},on:e.selectAll})]],2):e._e(),e._l(e.headers,(function(t,r){return i("th",{key:r,class:[t.align?"text-"+t.align:"text-start",t.class?t.class:""],style:t.width?"string"===typeof t.width?"width: "+t.width+"; min-width: "+t.width+";":"width: "+t.width+"px; min-width:"+t.width+"px;":"",on:{click:function(t){return e.toggleSortOrder(r)},mouseover:function(t){return e.headerMouseOver(r)},mouseleave:function(t){return e.headerMouseLeave(r)}}},[i("div",{staticStyle:{"min-width":"max-content"}},[e._t("header."+t.value,(function(){return[e._v(" "+e._s(t.text)+" ")]}),{header:t}),null==t.filterable||t.filterable?[i("v-menu",{attrs:{left:"","offset-y":"","close-on-content-click":!1,light:e.light,dark:e.dark},on:{input:function(t){return e.filterInput(t,r)}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,l=t.attrs;return[i("v-icon",e._g(e._b({staticClass:"text--secondary",attrs:{dense:""},on:{click:function(e){e.stopPropagation(),e.preventDefault()}}},"v-icon",l,!1),s),[e._v(" "+e._s(e.filterValues[r].length>0?e.svgFilter:e.svgFilterVariant)+" ")])]}}],null,!0)},[i("v-card",{attrs:{outlined:""}},[i("v-autocomplete",{staticClass:"mx-1",attrs:{dense:"",clearable:"","deletable-chips":"",multiple:"","small-chips":"",items:e.filterSelectOptions[r],"search-input":e.filterSelectSearchInput,"hide-details":"",dark:e.dark,"no-data-text":e.noDataText},on:{"update:searchInput":function(t){e.filterSelectSearchInput=t},"update:search-input":function(t){e.filterSelectSearchInput=t}},scopedSlots:e._u([{key:"prepend-item",fn:function(){return[i("v-list-item-group",{attrs:{color:"primary"}},[i("v-list-item",{attrs:{ripple:"","input-value":e.filterSelectOptions[r].length===e.filterValues[r].length},on:{click:function(t){return e.filterSelectAllToggle(r)}}},[i("v-list-item-action",[i("v-simple-checkbox",{attrs:{color:"primary",value:e.isFilterSelectedAll(r),indeterminate:!e.isFilterSelectedAll(r)&&0<e.filterValues[r].length&&e.filterValues[r].length<e.filterSelectOptions[r].length},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.filterSelectAllToggle(r)}}})],1),i("v-list-item-content",[i("v-list-item-title",[e._v(" "+e._s(e.filterSelectSearchInput&&e.filterSelectSearchInput.length>0?"検索結果をすべて選択":"すべて選択")+" ")])],1)],1)],1),i("v-divider")]},proxy:!0}],null,!0),model:{value:e.filterValues[r],callback:function(t){e.$set(e.filterValues,r,t)},expression:"filterValues[index]"}})],1)],1)]:e._e(),null==t.sortable||t.sortable?[i("v-icon",{class:{"text--primary":!0,"text--disabled":-1===e.sortIdxs.findIndex((function(e){return e===r}))},style:-1<e.sortIdxs.findIndex((function(e){return e===r}))||e.hoveredHeaderIdx===r?"visibility:visible;":"visibility:hidden;",attrs:{dense:""}},[-1<e.sortIdxs.findIndex((function(e){return e===r}))?[-1==e.sortOrders[e.sortIdxs.findIndex((function(e){return e===r}))]?[e._v(" "+e._s(e.svgArrowDown)+" ")]:1==e.sortOrders[e.sortIdxs.findIndex((function(e){return e===r}))]?[e._v(" "+e._s(e.svgArrowUp)+" ")]:e._e()]:[e._v(e._s(e.svgArrowUp))]],2),-1<e.sortIdxs.findIndex((function(e){return e===r}))?i("v-chip",{staticClass:"px-2",attrs:{small:""}},[e._v(" "+e._s(e.sortIdxs.findIndex((function(e){return e===r}))+1)+" ")]):e._e()]:e._e()],2)])}))],2)]),i("tbody",{ref:"tbody"},[0<e.paddingtop?i("tr",[i("td",{style:"padding-top:"+e.paddingtop+"px",attrs:{colspan:e.showSelect?e.headers.length+1:e.headers.length}})]):e._e(),e._l(e.vitems,(function(t,r){return i("tr",{key:r},[e.showSelect?i("td",[e._t("item.data-table-select",(function(){return[i("v-simple-checkbox",{attrs:{value:t.isSelected,ripple:!1},on:{input:function(t){return e.selectRow(r)}}})]}),{index:t.orgIndex,item:t.item,isSelected:t.isSelected})],2):e._e(),e._l(e.headers,(function(r,s){return i("td",{key:s,class:[r.align?"text-"+r.align:"text-start",r.cellClass?r.cellClass:""]},[i("div",{staticStyle:{"min-width":"max-content",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[e._t("item."+r.value,(function(){return[e._v(" "+e._s(t.item[r.value])+" ")]}),{item:t.item,value:t.item[r.value]})],2)])}))],2)})),0<e.paddingbottom?i("tr",[i("td",{style:"padding-bottom:"+e.paddingbottom+"px",attrs:{colspan:e.showSelect?e.headers.length+1:e.headers.length}})]):e._e()],2)]},proxy:!0}],null,!0)})},x=[],b={name:"VirtualScrollTable",props:{height:{type:Number,default:0},headers:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]},bench:{type:Number,default:0},singleSelect:{type:Boolean,default:!1},showSelect:{type:Boolean,default:!1},multiSort:{type:Boolean,default:!1},locale:{type:String,default:"ja-JP"},noDataText:{type:String,default:"該当なし"},dense:{type:Boolean,default:!1,required:!1},dark:{type:Boolean,default:!1,required:!1},light:{type:Boolean,default:!1,required:!1},value:{type:Array,default:()=>[]}},data(){return{start:0,timeout:null,headerHeight:48,rowHeight:48,scrollHeight:0,svgArrowDown:"mdi-arrow-down",svgArrowUp:"mdi-arrow-up",svgFilterVariant:"mdi-filter-variant",svgSortVariant:"mdi-sort-variant",svgFilter:"mdi-filter",hoveredHeaderIdx:null,refItems:[],filteredItems:[],filterSelectOptions:[],filterValues:[],isFilterValuesChanged:!1,filterOpenIndex:void 0,filterSelectSearchInput:"",sortIdxs:[],sortOrders:[],filterAndSortedItems:[],isSelectedAll:!1,indeterminateSelectedAll:!1,collator:null,conditions:["=","≠","<","≦",">","≧"]}},created(){this.collator=this.locale?new Intl.Collator(this.locale):new Intl.Collator("ja"),this.initItems(this.items)},mounted(){this.$refs.vstable.$el.childNodes[0].addEventListener("scroll",this.onScroll),this.$nextTick(()=>{this.refreshSize()})},methods:{refreshSize(){if(!this.filteredItems||this.filteredItems.length<1||!this.$refs.tbody.children[0===this.start?0:1])return;const e=this.$refs.tbody.children[0===this.start?0:1].getBoundingClientRect().height;if(this.rowHeight!==e&&(this.rowHeight=e),this.$refs.thead.firstElementChild){const e=this.$refs.thead.firstElementChild.getBoundingClientRect().height;this.headerHeight!==e&&(this.headerHeight=e)}if(this.$refs.vstable.$el.children[0]){const e=this.$refs.vstable.$el.children[0].scrollHeight;this.scrollHeight!==e&&(this.scrollHeight=e)}},initItems(e){this.refItems=e.map((e,t)=>({item:e,orgIndex:t,isSelected:!1})),Object.freeze(this.refItems),this.filteredItems=this.refItems.slice(),Object.freeze(this.filteredItems),this.filterAndSortedItems=this.refItems.slice(),Object.freeze(this.filterAndSortedItems),this.filterValues=this.headers.map(()=>[]),this.refreshFilterSelections(this.filteredItems)},onScroll(e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{const{scrollTop:t}=e.target;let i=Math.ceil((t-this.headerHeight)/this.rowHeight)-Math.floor(this.bench/2);i<0&&(i=0),this.start=i+this.rowsPerPage>this.filteredItems.length?this.filteredItems.length-this.rowsPerPage:i,this.$nextTick(()=>{e.target.scrollTop=t,this.scrollHeight=this.$refs.vstable.$el.childNodes[0].scrollHeight})},2)},headerMouseOver(e){this.hoveredHeaderIdx=e},headerMouseLeave(){this.hoveredHeaderIdx=null},toggleSortOrder(e){if(!1!==this.headers[e].sortable){if(this.multiSort){let t=this.sortIdxs.findIndex(t=>t===e);-1===t?(this.sortIdxs.push(e),this.sortOrders.push(1)):-1===this.sortOrders[t]?(this.sortIdxs.splice(t,1),this.sortOrders.splice(t,1)):1===this.sortOrders[t]&&(this.sortOrders[t]=-1)}else this.sortIdxs&&0<this.sortIdxs.length&&this.sortIdxs[0]===e?-1===this.sortOrders[0]?(this.sortIdxs=[],this.sortOrders=[]):1===this.sortOrders[0]?this.sortOrders=[-1]:this.sortOrders=[1]:(this.sortIdxs=[e],this.sortOrders=[1]);this.sort()}},filter(e){console.debug("filter",e),this.filteredItems=this.refItems.filter(t=>{for(let i=0;i<e.length;i++)if(e[i]&&0<e[i].length){const r=this.headers[i],s=t.item[r.value];if(-1===e[i].findIndex(e=>"object"===typeof e&&"value"in e?e.value===s:e===s))return!1}return!0}),this.refreshSelectAll(this.filteredItems),this.refreshFilterSelections(this.filteredItems),this.sort(this.sortOrders)},uniqueArray(e){if(!e||!Array.isArray(e))return[];let t=[...new Set(e)];return t.some(e=>"object"===typeof e)?t.filter((e,t,i)=>"[object Date]"!==Object.prototype.toString.call(e)||i.findIndex(t=>"[object Date]"===Object.prototype.toString.call(t)&&t.getTime()===e.getTime())===t):t},refreshFilterSelections(e){this.filterSelectOptions=this.headers.map((t,i)=>{if(this.filterSelectOptions[i]&&0<this.filterSelectOptions[i].length&&this.filterValues[i]&&0<this.filterValues[i].length)return this.filterSelectOptions[i];{const i=this.uniqueArray(e.map(e=>e.item[t.value])).sort((e,i)=>{const r=t.sort;return r?r(e,i):"string"===typeof e&&"string"===typeof i?this.collator.compare(e,i):e!==i?e-i:0});return t.filterTextFromatter&&"function"===typeof t.filterTextFromatter?i.map(e=>({value:e,text:t.filterTextFromatter(e)})):i.map(e=>({value:e,text:"string"===typeof e?e:(null===e||void 0===e?void 0:e.toLocaleString(this.locale))||""}))}})},refreshSelectAll(){if(this.singleSelect||!this.filteredItems||this.filteredItems.length<1)return;let e=this.filteredItems[0].isSelected;-1===this.filteredItems.findIndex(t=>t.isSelected!==e)?(this.isSelectedAll=e,this.indeterminateSelectedAll=!1):(this.isSelectedAll=!1,this.indeterminateSelectedAll=!0)},sort(){console.debug("sort",this.sortIdxs,this.sortOrders),!this.sortIdxs||this.sortIdxs.length<1||0===this.sortOrders[0]?this.filterAndSortedItems=this.filteredItems.slice():this.filterAndSortedItems=this.filteredItems.slice().sort((e,t)=>{for(let i=0;i<this.sortIdxs.length;i++){const r=this.headers[this.sortIdxs[i]].value,s=this.headers[this.sortIdxs[i]].sort;if(s)return s(e.item[r],t.item[r])*this.sortOrders[i];if("string"===typeof e.item[r]&&"string"===typeof t.item[r]){const s=this.collator.compare(e.item[r],t.item[r]);if(0!==s)return s*this.sortOrders[i]}else{const s=e.item[r]-t.item[r];if(0!==s)return s*this.sortOrders[i]}}return 0})},selectAll(){if(this.singleSelect)return;let e=!!this.indeterminateSelectedAll||!this.isSelectedAll;this.isSelectedAll=e,this.indeterminateSelectedAll=!1,this.filteredItems=this.filteredItems.map(t=>(this.refItems[t.orgIndex].isSelected=e,t.isSelected=e,t)),this.$emit("input",this.items.filter((e,t)=>this.refItems[t].isSelected))},selectRow(e){let t=this.vitems[e].orgIndex;this.singleSelect&&(this.refItems.forEach(e=>{e.orgIndex!==t&&(e.isSelected=!1)}),this.filteredItems.forEach(e=>{e.orgIndex!==t&&(e.isSelected=!1)}));let i=!this.refItems[t].isSelected;this.refItems[t].isSelected=i,this.filteredItems[this.start+e].isSelected=i,this.singleSelect||this.refreshSelectAll(),this.filteredItems.splice(),this.$emit("input",this.items.filter((e,t)=>this.refItems[t].isSelected))},filterInput(e,t){console.debug("filterInput",e,t),this.filterOpenIndex=t,e?(this.isFilterValuesChanged=!1,this.filterSelectSearchInput=""):this.isFilterValuesChanged&&this.filter(this.filterValues)},isFilterSelectedAll(e){if(this.filterOpenIndex!==e)return!1;const t=this.filterSelectSearchInput;if(t&&0<t.length){const i=this.filterSelectOptions[e].filter(e=>e.text.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1);return i.length<=this.filterValues[e].length&&this.filterValues[e].filter(e=>i.some(t=>t.text===e)).length===i.length}return this.filterSelectOptions[e].length===this.filterValues[e].length},filterSelectAllToggle(e){const t=this.filterSelectSearchInput;if(t&&0<t.length){const i=this.filterSelectOptions[e].filter(e=>e.text.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1);i.length<=this.filterValues[e].length&&this.filterValues[e].filter(e=>i.some(t=>t.text===e)).length===i.length?this.filterValues[e]=this.filterValues[e].filter(e=>!i.some(t=>t.text===e)):this.filterValues[e]=i.map(e=>e.value)}else this.filterSelectOptions[e].length===this.filterValues[e].length?this.filterValues[e]=[]:this.filterValues[e]=this.filterSelectOptions[e].map(e=>e.value);this.filterValues.splice()}},watch:{items:function(e){this.initItems(e)},dense:function(){this.$nextTick(()=>{this.refreshSize()})},locale:function(e){this.collator=e?new Intl.Collator(e):new Intl.Collator},filterValues:function(){this.isFilterValuesChanged=!0}},computed:{rowsPerPage(){return Math.ceil((this.height-this.headerHeight)/this.rowHeight)},vitems(){let e=this.filterAndSortedItems.slice(this.start,this.start+this.rowsPerPage+this.bench);return Object.freeze(e),this.filterAndSortedItems&&0<this.filterAndSortedItems.length&&this.$nextTick(()=>{this.refreshSize()}),e},paddingtop(){return this.start*this.rowHeight},paddingbottom(){return this.rowHeight*(this.filteredItems.length-(this.start+this.rowsPerPage+this.bench))}}},I=b,y=(i("eeda"),i("c6a6")),w=i("b0af"),k=i("cc20"),_=i("ce7e"),O=i("132d"),V=i("da13"),A=i("1800"),T=i("5d23"),M=i("1baa"),C=i("e449"),F=i("9e88"),D=i("1f4f"),j=Object(o["a"])(I,S,x,!1,null,null,null),$=j.exports;d()(j,{VAutocomplete:y["a"],VCard:w["a"],VChip:k["a"],VDivider:_["a"],VIcon:O["a"],VListItem:V["a"],VListItemAction:A["a"],VListItemContent:T["a"],VListItemGroup:M["a"],VListItemTitle:T["b"],VMenu:C["a"],VSimpleCheckbox:F["a"],VSimpleTable:D["a"]});var H={name:"Home",components:{VirtualScrollTable:$},data(){return{slider:2e4,bench:28,dense:!0,dark:!1,light:!1,singleSelect:!1,headers:[{text:"ID",value:"id",align:"end",filterable:!1,width:"80"},{text:"名前",value:"name",sortable:!1},{text:"コード",value:"code"},{text:"支払方法",value:"payment"},{text:"価格",value:"price",align:"end"},{text:"日付",value:"date",filterTextFromatter:this.getFormatedDate},{text:"時刻",value:"time",filterTextFromatter:this.getFormatedTime},{text:"日時",value:"datetime",filterTextFromatter:this.getFormatedDateTime},{text:"フラグ",value:"flag",align:"center",filterTextFromatter:e=>e?"ON":"OFF"},{text:"チップス",value:"chips",align:"center"},{text:"備考",value:"remarks"},{text:"",value:"actions",sortable:!1,filterable:!1}],items:[],types:["現金","振込","クレジットカード","クーポン","コンビニ"],grades:["A","B","C","D","E"],selected:[],lastnames:["佐藤","鈴木","高橋","田中","伊藤","渡辺","山本","中村","小林","加藤","吉田","山田","佐々木","山口","松本","井上","木村","林","斎藤","清水","山崎","森","池田","橋本","阿部","石川","山下","中島","石井","小川","前田","岡田","長谷川","藤田","後藤","近藤","村上","遠藤","青木","坂本","斉藤","福田","太田","西村","藤井","金子","岡本","藤原","中野","三浦","原田","中川","松田","竹内","小野","田村","中山","和田","石田","森田","上田","原","内田","柴田","酒井","宮崎","横山","高木","安藤","宮本","大野","小島","谷口","今井","工藤","高田","増田","丸山","杉山","村田","大塚","新井","小山","平野","藤本","河野","上野","野口","武田","松井","千葉","岩崎","菅原","木下","久保","佐野","野村","松尾","市川","菊地"],firstnames:["蒼","凪","蓮","陽翔","湊","颯真","碧","樹","大和","悠真","暖","大翔","陽斗","蒼空","陽向","颯","湊斗","新","陽","伊織","結翔","蒼真","悠","奏汰","朔","律","琉生","晴","奏太","朝陽","碧斗","陽大","結斗","碧人","悠人","陽太","大雅","歩","凌久","葵","旭","蒼生","悠生","悠斗","陸","海斗","迅","奏翔","蒼大","湊翔","陽葵","凛","詩","陽菜","結菜","杏","澪","結愛","芽依","莉子","さくら","咲茉","乃愛","琴音","葵","琴葉","楓","翠","凪咲","結月","心陽","凪","ひなた","紬希","美桜","依茉","朱莉","心結","茉白","一華","結","咲良","紗奈","紬","蘭","愛","結衣","彩葉","柚希","あかり","芽生","心春","陽菜乃","莉緒","花音","結心","心晴","柚葉","陽咲","莉愛"],kana:"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐうゑをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰウヱヲンがぎぐげござじずぜぞだぢづでどばびぶべぼヴガギグゲゴザジズゼゾダヂヅデドバビブベボぱぴぷぺぽパピプペポぁぃぅぇぉっゃゅょゎァィゥェォヵヶッャュョー"}},methods:{getFormatedDate:function(e){return new Intl.DateTimeFormat("ja",{dateStyle:"short"}).format(e)+"("+new Intl.DateTimeFormat("ja",{weekday:"narrow"}).format(e)+")"},getFormatedTime:function(e){return new Intl.DateTimeFormat("ja",{timeStyle:"short"}).format(e)},getFormatedDateTime:function(e){return this.getFormatedDate(e)+" "+this.getFormatedTime(e)},refreshItems:function(e){let t=[],i=Date.now(),r=new Date(Date.now()+Math.floor(31*Math.random()*24*60*60*1e3));r.setHours(12),r.setMinutes(34),r.setSeconds(56),r.setMilliseconds(789),console.debug("start generate data ...");for(let s=1;s<=e;s++){const e=Array(2+Math.floor(100*Math.random())).fill().map(()=>{let e=Math.floor(Math.random()*this.kana.length);return this.kana.substring(e,e+1)}).join("");t.push({id:s,name:this.lastnames[Math.floor(Math.random()*this.lastnames.length)]+" "+this.firstnames[Math.floor(Math.random()*this.firstnames.length)],code:Math.random().toString(36).slice(-8),payment:this.types[Math.floor(Math.random()*this.types.length)],chips:this.grades[Math.floor(Math.random()*this.grades.length)],remarks:e,date:new Date(r.getFullYear(),r.getMonth(),r.getDate(),0,0,0,0),time:new Date(1970,0,1,r.getHours(),r.getMinutes(),0,0),datetime:new Date(r),price:100*Math.floor(999*Math.random()+1),flag:.5<Math.random(),actions:""}),r=new Date(r.getTime()+24*Math.random()*60*60*1e3)}console.debug("complete",(Date.now()-i)/1e3,"sec"),this.items=t},getGradeColor(e){let t=[102,187,106],i=[255,238,88],r=[239,83,80],s=this.grades.findIndex(t=>t===e),l=s/(this.grades.length-1);return l<.5?"rgb("+Math.floor((i[0]-t[0])*l+t[0])+","+Math.floor((i[1]-t[1])*l+t[1])+","+Math.floor((i[2]-t[2])*l+t[2])+")":"rgb("+Math.floor((r[0]-i[0])*l+i[0])+","+Math.floor((r[1]-i[1])*l+i[1])+","+Math.floor((r[2]-i[2])*l+i[2])+")"},isEllipted(e){return e instanceof HTMLElement?e.offsetWidth<e.scrollWidth:null},showElliptedTooltip(e,t){e&&t&&this.isEllipted(e.target)&&t(e)}},created(){this.refreshItems(this.slider)},watch:{slider:function(e){this.refreshItems(e)},selected:function(e){console.log("selected",e)}}},P=H,L=(i("bc0e"),i("62ad")),E=i("a523"),B=i("0fd9"),z=i("ba0d"),N=i("b73d"),q=i("8654"),R=i("3a2f"),J=Object(o["a"])(P,g,v,!1,null,"78bcb892",null),U=J.exports;d()(J,{VChip:k["a"],VCol:L["a"],VContainer:E["a"],VIcon:O["a"],VRow:B["a"],VSimpleCheckbox:F["a"],VSlider:z["a"],VSwitch:N["a"],VTextField:q["a"],VTooltip:R["a"]}),r["default"].use(p["a"]);const G=[{path:"/",name:"Home",component:U}],W=new p["a"]({mode:"history",base:"/virtual-scroll-data-table/",routes:G});var Y=W,K=i("2f62");r["default"].use(K["a"]);var Q=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}}),X=i("ce5b"),Z=i.n(X);i("5363"),i("bf40");r["default"].use(Z.a);var ee=new Z.a({icons:{iconfont:"mdi"}});r["default"].config.productionTip=!1,new r["default"]({router:Y,store:Q,vuetify:ee,render:e=>e(m)}).$mount("#app")},bc0e:function(e,t,i){"use strict";i("d49b")},d49b:function(e,t,i){},eeda:function(e,t,i){"use strict";i("0940")}});
//# sourceMappingURL=app.f73204de.js.map