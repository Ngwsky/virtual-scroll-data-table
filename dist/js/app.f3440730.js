(function(e){function t(t){for(var i,l,a=t[0],o=t[1],d=t[2],h=0,u=[];h<a.length;h++)l=a[h],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&u.push(s[l][0]),s[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);c&&c(t);while(u.length)u.shift()();return n.push.apply(n,d||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],i=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(i=!1)}i&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var i={},s={app:0},n=[];function l(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=i,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(r,i,function(t){return e[t]}.bind(null,i));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var c=o;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1719:function(e,t,r){},"45e4":function(e,t,r){"use strict";r("1719")},"4e67":function(e,t,r){"use strict";r("dfd0")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",[r("router-view")],1)],1)},n=[],l={name:"App",data:function(){return{}}},a=l,o=r("2877"),d=r("6544"),c=r.n(d),h=r("7496"),u=r("f6c4"),f=Object(o["a"])(a,s,n,!1,null,null,null),m=f.exports;c()(f,{VApp:h["a"],VMain:u["a"]});var p=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-switch",{attrs:{label:"Vuetify Theme Dark"},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}}),r("v-slider",{staticClass:"align-center",attrs:{max:1e5,min:0,label:"Number of rows","hide-details":""},scopedSlots:e._u([{key:"append",fn:function(){return[r("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:e.slider,callback:function(t){e.slider=t},expression:"slider"}})]},proxy:!0}]),model:{value:e.slider,callback:function(t){e.slider=t},expression:"slider"}}),r("v-row",[r("v-col",[r("v-slider",{staticClass:"align-center",attrs:{label:"Bench",max:99,min:0,"hide-details":""},scopedSlots:e._u([{key:"append",fn:function(){return[r("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:e.bench,callback:function(t){e.bench=t},expression:"bench"}})]},proxy:!0}]),model:{value:e.bench,callback:function(t){e.bench=t},expression:"bench"}})],1),r("v-col",[r("v-switch",{attrs:{label:"Single select"},model:{value:e.singleSelect,callback:function(t){e.singleSelect=t},expression:"singleSelect"}})],1),r("v-col",[r("v-switch",{attrs:{label:"Dense"},model:{value:e.dense,callback:function(t){e.dense=t},expression:"dense"}})],1),r("v-col",[r("v-switch",{attrs:{label:"Dark"},model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}})],1),r("v-col",[r("v-switch",{attrs:{label:"Light"},model:{value:e.light,callback:function(t){e.light=t},expression:"light"}})],1)],1),r("VirtualScrollTable",{attrs:{height:480,bench:e.bench,headers:e.headers,items:e.items,"single-select":e.singleSelect,"show-select":"","multi-sort":"",dense:e.dense,dark:e.dark,light:e.light},scopedSlots:e._u([{key:"header.grade",fn:function(t){var r=t.header;return[e._v(" "+e._s(r.text.toUpperCase())+" ")]}},{key:"item.grade",fn:function(t){var i=t.item;return[r("v-chip",{attrs:{color:e.getGradeColor(i.grade)}},[e._v(e._s(i.grade))])]}},{key:"item.price",fn:function(t){var r=t.value;return[e._v(" "+e._s(r.toLocaleString("ja",{style:"currency",currency:"JPY"}))+" ")]}},{key:"item.valueJa",fn:function(t){var i=t.value;return[r("v-tooltip",{attrs:{bottom:"","open-on-click":!1,"open-on-focus":!1,"open-on-hover":!0},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,n=t.attrs;return[r("span",e._g(e._b({staticClass:"to-ellipsis",on:{mouseenter:function(t){return e.showElliptedTooltip(t,s.mouseenter)}}},"span",n,!1),Object.assign({},s,{mouseenter:function(){return!0}})),[e._v(e._s(i))])]}}],null,!0)},[r("span",[e._v(e._s(i))])])]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},g=[],b=(r("a15b"),r("d81d"),r("cb29"),r("fb6a"),r("d3b7"),r("25f0"),r("c740"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-simple-table",{ref:"vstable",staticClass:"vsdt",attrs:{"fixed-header":"",height:e.height,light:e.light,dark:e.dark,dense:e.dense},scopedSlots:e._u([{key:"default",fn:function(){return[r("thead",{ref:"thead"},[r("tr",[e.showSelect?r("th",{staticStyle:{width:"1px","min-width":"1px"}},[e.singleSelect?e._e():[e._t("header.data-table-select",(function(){return[r("v-simple-checkbox",{attrs:{value:e.isSelectedAll,indeterminate:e.indeterminateSelectedAll,ripple:!1},on:{input:e.selectAll}})]}),{props:{value:e.isSelectedAll,indeterminate:e.indeterminateSelectedAll},on:e.selectAll})]],2):e._e(),e._l(e.headers,(function(t,i){return r("th",{key:i,class:[t.align?"text-"+t.align:"text-start",t.class?t.class:""],style:t.width?"string"===typeof t.width?"width: "+t.width+"; min-width: "+t.width+";":"width: "+t.width+"px; min-width:"+t.width+"px;":"",on:{click:function(t){return e.toggleSortOrder(i)},mouseover:function(t){return e.headerMouseOver(i)},mouseleave:function(t){return e.headerMouseLeave(i)}}},[r("div",{staticStyle:{"min-width":"max-content"}},[e._t("header."+t.value,(function(){return[e._v(" "+e._s(t.text)+" ")]}),{header:t}),null==t.filterable||t.filterable?[r("v-menu",{attrs:{left:"","offset-y":"","close-on-content-click":!1,light:e.light,dark:e.dark},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,n=t.attrs;return[r("v-icon",e._g(e._b({class:{"text--primary":!0,"text--disabled":!e.filterValues||!e.filterValues[i]||e.filterValues[i].length<1},attrs:{dense:e.dense},on:{click:function(e){e.stopPropagation(),e.preventDefault()}}},"v-icon",n,!1),s),[e._v(" "+e._s(e.svgFilterVariant)+" ")])]}}],null,!0)},[r("v-card",{attrs:{outlined:""}},[r("v-autocomplete",{staticClass:"mx-1",attrs:{dense:e.dense,clearable:"","deletable-chips":"",multiple:"","small-chips":"",items:e.filterSelectOptions[i],"hide-details":"",dark:e.dark},model:{value:e.filterValues[i],callback:function(t){e.$set(e.filterValues,i,t)},expression:"filterValues[index]"}})],1)],1)]:e._e(),null==t.sortable||t.sortable?[r("v-icon",{class:{"text--primary":!0,"text--disabled":-1===e.sortIdxs.findIndex((function(e){return e===i}))},style:-1<e.sortIdxs.findIndex((function(e){return e===i}))||e.hoveredHeaderIdx===i?"visibility:visible;":"visibility:hidden;",attrs:{dense:e.dense}},[-1<e.sortIdxs.findIndex((function(e){return e===i}))?[-1==e.sortOrders[e.sortIdxs.findIndex((function(e){return e===i}))]?[e._v(" "+e._s(e.svgArrowDown)+" ")]:1==e.sortOrders[e.sortIdxs.findIndex((function(e){return e===i}))]?[e._v(" "+e._s(e.svgArrowUp)+" ")]:e._e()]:[e._v(e._s(e.svgArrowUp))]],2),-1<e.sortIdxs.findIndex((function(e){return e===i}))?r("v-chip",{staticClass:"px-2",attrs:{small:""}},[e._v(" "+e._s(e.sortIdxs.findIndex((function(e){return e===i}))+1)+" ")]):e._e()]:e._e()],2)])}))],2)]),r("tbody",{ref:"tbody"},[0<e.paddingtop?r("tr",[r("td",{style:"padding-top:"+e.paddingtop+"px",attrs:{colspan:e.showSelect?e.headers.length+1:e.headers.length}})]):e._e(),e._l(e.vitems,(function(t,i){return r("tr",{key:i},[e.showSelect?r("td",[e._t("item.data-table-select",(function(){return[r("v-simple-checkbox",{attrs:{value:t.isSelected,ripple:!1},on:{input:function(t){return e.selectRow(i)}}})]}),{index:t.orgIndex,item:t.item,isSelected:t.isSelected})],2):e._e(),e._l(e.headers,(function(i,s){return r("td",{key:s,class:[i.align?"text-"+i.align:"text-start",i.cellClass?i.cellClass:""]},[r("div",{staticStyle:{"min-width":"max-content",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[e._t("item."+i.value,(function(){return[e._v(" "+e._s(t.item[i.value])+" ")]}),{item:t.item,value:t.item[i.value]})],2)])}))],2)})),0<e.paddingbottom?r("tr",[r("td",{style:"padding-bottom:"+e.paddingbottom+"px",attrs:{colspan:e.showSelect?e.headers.length+1:e.headers.length}})]):e._e()],2)]},proxy:!0}],null,!0)})}),x=[],S=r("53ca"),I=(r("a9e3"),r("dca8"),r("a434"),r("4de4"),r("4e827"),r("a630"),r("3ca3"),r("6062"),r("ddb0"),r("159b"),{name:"VirtualScrollTable",props:{height:{type:Number,default:0},headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},bench:{type:Number,default:0},singleSelect:{type:Boolean,default:!1},showSelect:{type:Boolean,default:!1},multiSort:{type:Boolean,default:!1},locale:{type:String,default:""},dense:{type:Boolean,default:!1,required:!1},dark:{type:Boolean,default:!1,required:!1},light:{type:Boolean,default:!1,required:!1},value:{type:Array,default:function(){return[]}}},data:function(){return{start:0,timeout:null,headerHeight:48,rowHeight:48,scrollHeight:0,svgArrowDown:"mdi-arrow-down",svgArrowUp:"mdi-arrow-up",svgFilterVariant:"mdi-filter-variant",svgSortVariant:"mdi-sort-variant",hoveredHeaderIdx:null,refItems:[],filteredItems:[],filterSelectOptions:[],filterValues:[],sortIdxs:[],sortOrders:[],isSelectedAll:!1,indeterminateSelectedAll:!1,collator:null}},created:function(){this.collator=this.locale?new Intl.Collator(this.locale):new Intl.Collator("ja"),this.initItems(this.items)},mounted:function(){var e=this;this.$refs.vstable.$el.childNodes[0].addEventListener("scroll",this.onScroll),this.$nextTick((function(){e.refreshSize()}))},methods:{refreshSize:function(){if(this.filteredItems&&!(this.filteredItems.length<1)){var e=this.$refs.tbody.children[0===this.start?0:1].getBoundingClientRect().height;if(this.rowHeight!==e&&(this.rowHeight=e),this.$refs.thead.firstElementChild){var t=this.$refs.thead.firstElementChild.getBoundingClientRect().height;this.headerHeight!==t&&(this.headerHeight=t)}if(this.$refs.vstable.$el.children[0]){var r=this.$refs.vstable.$el.children[0].scrollHeight;this.scrollHeight!==r&&(this.scrollHeight=r)}}},initItems:function(e){this.refItems=e.map((function(e,t){return{item:e,orgIndex:t,isSelected:!1}})),Object.freeze(this.refItems),this.filteredItems=this.refItems.slice(),Object.freeze(this.filteredItems),this.filterValues=this.headers.map((function(){return[]})),this.refreshFilterSelections(this.filteredItems)},onScroll:function(e){var t=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){var r=e.target.scrollTop,i=Math.ceil((r-t.headerHeight)/t.rowHeight)-Math.floor(t.bench/2);i<0&&(i=0),t.start=i+t.rowsPerPage>t.filteredItems.length?t.filteredItems.length-t.rowsPerPage:i,t.$nextTick((function(){e.target.scrollTop=r,t.scrollHeight=t.$refs.vstable.$el.childNodes[0].scrollHeight}))}),2)},headerMouseOver:function(e){this.hoveredHeaderIdx=e},headerMouseLeave:function(){this.hoveredHeaderIdx=null},toggleSortOrder:function(e){if(!1!==this.headers[e].sortable){if(this.multiSort){var t=this.sortIdxs.findIndex((function(t){return t===e}));if(-1===t)this.sortIdxs.push(e),this.sortOrders.push(1);else if(-1===this.sortOrders[t]){if(this.sortIdxs.splice(t,1),this.sortOrders.splice(t,1),0===this.sortIdxs.length)return void this.filter(this.filterValues)}else 1===this.sortOrders[t]&&(this.sortOrders[t]=-1)}else if(this.sortIdxs&&0<this.sortIdxs.length&&this.sortIdxs[0]===e){if(-1===this.sortOrders[0])return this.sortIdxs=[],this.sortOrders=[],void this.filter(this.filterValues);1===this.sortOrders[0]?this.sortOrders=[-1]:this.sortOrders=[1]}else this.sortIdxs=[e],this.sortOrders=[1];this.sort()}},filter:function(e){var t=this;this.filteredItems=this.refItems.filter((function(r){for(var i=function(i){if(e[i]&&0<e[i].length&&-1===e[i].findIndex((function(e){return e===r.item[t.headers[i].value]})))return{v:!1}},s=0;s<e.length;s++){var n=i(s);if("object"===Object(S["a"])(n))return n.v}return!0})),this.refreshSelectAll(this.filteredItems),this.refreshFilterSelections(this.filteredItems),this.sort(this.sortOrders)},refreshFilterSelections:function(e){var t=this;this.filterSelectOptions=this.headers.map((function(r,i){return t.filterSelectOptions[i]&&0<t.filterSelectOptions[i].length&&t.filterValues[i]&&0<t.filterValues[i].length?t.filterSelectOptions[i]:Array.from(new Set(e.map((function(e){return e.item[r.value]})))).sort((function(e,i){var s=r.sort;return s?s(e,i):"string"===typeof e&&"string"===typeof i?t.collator.compare(e,i):e!==i?e-i:0}))}))},refreshSelectAll:function(){if(!(this.singleSelect||!this.filteredItems||this.filteredItems.length<1)){var e=this.filteredItems[0].isSelected;-1===this.filteredItems.findIndex((function(t){return t.isSelected!==e}))?(this.isSelectedAll=e,this.indeterminateSelectedAll=!1):(this.isSelectedAll=!1,this.indeterminateSelectedAll=!0)}},sort:function(){var e=this;!this.sortIdxs||this.sortIdxs.length<1||0===this.sortOrders[0]||(this.filteredItems=this.filteredItems.sort((function(t,r){for(var i=0;i<e.sortIdxs.length;i++){var s=e.headers[e.sortIdxs[i]].value,n=e.headers[e.sortIdxs[i]].sort;if(n)return n(t.item[s],r.item[s])*e.sortOrders[i];if("string"===typeof t.item[s]&&"string"===typeof r.item[s]){var l=e.collator.compare(t.item[s],r.item[s]);if(0!==l)return l*e.sortOrders[i]}else if(t.item[s]!==r.item[s])return(t.item[s]-r.item[s])*e.sortOrders[i]}return 0})))},selectAll:function(){var e=this;if(!this.singleSelect){var t=!!this.indeterminateSelectedAll||!this.isSelectedAll;this.isSelectedAll=t,this.indeterminateSelectedAll=!1,this.filteredItems=this.filteredItems.map((function(r){return e.refItems[r.orgIndex].isSelected=t,r.isSelected=t,r})),this.$emit("input",this.items.filter((function(t,r){return e.refItems[r].isSelected})))}},selectRow:function(e){var t=this,r=this.vitems[e].orgIndex;this.singleSelect&&(this.refItems.forEach((function(e){e.orgIndex!==r&&(e.isSelected=!1)})),this.filteredItems.forEach((function(e){e.orgIndex!==r&&(e.isSelected=!1)})));var i=!this.refItems[r].isSelected;this.refItems[r].isSelected=i,this.filteredItems[this.start+e].isSelected=i,this.singleSelect||this.refreshSelectAll(),this.filteredItems.splice(),this.$emit("input",this.items.filter((function(e,r){return t.refItems[r].isSelected})))}},watch:{items:function(e){this.initItems(e)},dense:function(){var e=this;this.$nextTick((function(){e.refreshSize()}))},locale:function(e){this.collator=e?new Intl.Collator(e):new Intl.Collator},filterValues:function(e){this.filter(e)}},computed:{rowsPerPage:function(){return Math.ceil((this.height-this.headerHeight)/this.rowHeight)},vitems:function(){var e=this,t=this.filteredItems.slice(this.start,this.start+this.rowsPerPage+this.bench);return Object.freeze(t),this.filteredItems&&0<this.filteredItems.length&&this.$nextTick((function(){e.refreshSize()})),t},paddingtop:function(){return this.start*this.rowHeight},paddingbottom:function(){return this.rowHeight*(this.filteredItems.length-(this.start+this.rowsPerPage+this.bench))}}}),y=I,w=(r("4e67"),r("c6a6")),_=r("b0af"),k=r("cc20"),O=r("132d"),V=r("e449"),M=r("9e88"),A=r("1f4f"),C=Object(o["a"])(y,b,x,!1,null,null,null),$=C.exports;c()(C,{VAutocomplete:w["a"],VCard:_["a"],VChip:k["a"],VIcon:O["a"],VMenu:V["a"],VSimpleCheckbox:M["a"],VSimpleTable:A["a"]});var H={name:"Home",components:{VirtualScrollTable:$},data:function(){return{slider:2e4,bench:28,dense:!0,dark:!1,light:!1,singleSelect:!1,headers:[{text:"ID",value:"id",align:"end",filterable:!1,width:"80"},{text:"Name",value:"name",sortable:!1,filterable:!1},{text:"Type",value:"type"},{text:"Grade",value:"grade",align:"center",class:"rounded-xl",cellClass:"rounded-xl",width:"128pt"},{text:"Value",value:"value"},{text:"日本語",value:"valueJa"},{text:"文字数",value:"valueJaLen",align:"end"},{text:"Date time",value:"datetime",sort:function(e,t){return Date.parse(e)-Date.parse(t)}},{text:"価格",value:"price",align:"end"}],items:[],types:["Bank transfer","Cash","Credit card","Coupon","Family mart"],grades:["A","B","C","D","E"],selected:[]}},methods:{refreshItems:function(e){var t=[],r=Date.now(),i="あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐうゑをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰウヱヲンがぎぐげござじずぜぞだぢづでどばびぶべぼヴガギグゲゴザジズゼゾダヂヅデドバビブベボぱぴぷぺぽパピプペポぁぃぅぇぉっゃゅょゎァィゥェォヵヶッャュョー";console.log("start generate data ...");for(var s=1;s<=e;s++){var n=Array(2+Math.floor(100*Math.random())).fill().map((function(){var e=Math.floor(Math.random()*i.length);return i.substring(e,e+1)})).join("");t.push({id:s,name:Math.random().toString(36).slice(-8),type:this.types[Math.floor(Math.random()*this.types.length)],grade:this.grades[Math.floor(Math.random()*this.grades.length)],value:Math.floor(999999*Math.random()),valueJa:n,valueJaLen:n.length,datetime:new Intl.DateTimeFormat("en",{dateStyle:"short",timeStyle:"short"}).format(new Date(1e3*(1577804400+Math.floor(2e8*Math.random())))),price:100*Math.floor(999*Math.random()+1)})}console.log("complete",(Date.now()-r)/1e3,"sec"),this.items=t},getGradeColor:function(e){var t=[102,187,106],r=[255,238,88],i=[239,83,80],s=this.grades.findIndex((function(t){return t===e})),n=s/(this.grades.length-1);return n<.5?"rgb("+Math.floor((r[0]-t[0])*n+t[0])+","+Math.floor((r[1]-t[1])*n+t[1])+","+Math.floor((r[2]-t[2])*n+t[2])+")":"rgb("+Math.floor((i[0]-r[0])*n+r[0])+","+Math.floor((i[1]-r[1])*n+r[1])+","+Math.floor((i[2]-r[2])*n+r[2])+")"},isEllipted:function(e){return e instanceof HTMLElement?e.offsetWidth<e.scrollWidth:null},showElliptedTooltip:function(e,t){e&&t&&this.isEllipted(e.target)&&t(e)}},created:function(){this.refreshItems(this.slider)},watch:{slider:function(e){this.refreshItems(e)},selected:function(e){console.log("selected",e)}}},T=H,j=(r("45e4"),r("62ad")),P=r("a523"),D=r("0fd9"),E=r("ba0d"),B=r("b73d"),F=r("8654"),J=r("3a2f"),L=Object(o["a"])(T,v,g,!1,null,"31245294",null),z=L.exports;c()(L,{VChip:k["a"],VCol:j["a"],VContainer:P["a"],VRow:D["a"],VSlider:E["a"],VSwitch:B["a"],VTextField:F["a"],VTooltip:J["a"]}),i["default"].use(p["a"]);var N=[{path:"/",name:"Home",component:z}],R=new p["a"]({mode:"history",base:"/",routes:N}),U=R,q=r("2f62");i["default"].use(q["a"]);var G=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),W=r("ce5b"),Y=r.n(W);r("5363"),r("bf40");i["default"].use(Y.a);var K=new Y.a({icons:{iconfont:"mdi"}});i["default"].config.productionTip=!1,new i["default"]({router:U,store:G,vuetify:K,render:function(e){return e(m)}}).$mount("#app")},dfd0:function(e,t,r){}});
//# sourceMappingURL=app.f3440730.js.map