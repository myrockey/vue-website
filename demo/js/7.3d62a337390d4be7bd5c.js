webpackJsonp([7],{518:function(t,e,n){function i(t){n(573)}var s=n(11)(n(553),n(607),i,null,null);t.exports=s.exports},552:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String},linkdemo:{type:String},linkproject:{type:String}}}},553:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(59),s=n(600),r=n.n(s);e.default={data:function(){return{works_list:[]}},computed:{},methods:{back:function(){this.$router.go(-1)},initData:function(){var t=this;i.a.get("http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getWorksList").then(function(e){t.works_list=e.data},function(t){alert(t)})}},components:{workList:r.a},mounted:function(){this.initData()}}},573:function(t,e){},593:function(t,e){},600:function(t,e,n){function i(t){n(593)}var s=n(11)(n(552),n(627),i,null,null);t.exports=s.exports},607:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"works"},[n("div",{staticClass:"div_back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("div",{staticClass:"works_content"},t._l(t.works_list,function(e,i){return t.works_list?n("div",{key:e.id,staticClass:"type_content"},[n("h3",{staticClass:"type_name",attrs:{"type-index":i}},[t._v(t._s(e.name))]),t._v(" "),t._l(e.detail,function(t,e){return n("workList",{key:t.id,attrs:{"data-index":e,title:t.name,linkdemo:t.link,linkproject:t.codelink}})})],2):t._e()}))])},staticRenderFns:[]}},627:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"workslist border-1px"},[n("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("a",{staticClass:"link_info",attrs:{href:t.linkdemo,target:"_black"}},[t._v("演示地址")]),t._v(" "),n("a",{staticClass:"link_info",attrs:{href:t.linkproject,target:"_black"}},[t._v("项目地址")])])},staticRenderFns:[]}}});
//# sourceMappingURL=7.3d62a337390d4be7bd5c.js.map