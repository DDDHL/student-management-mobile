(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/uview-ui/components/u-loadmore/u-loadmore"],{"11dd":function(t,n,e){"use strict";e.r(n);var o=e("f80d"),i=e("e4e8");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("7e35");var a,r=e("f0c5"),d=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"2d515874",null,!1,o["a"],a);n["default"]=d.exports},"7e35":function(t,n,e){"use strict";var o=e("a19e"),i=e.n(o);i.a},a19e:function(t,n,e){},e4e8:function(t,n,e){"use strict";e.r(n);var o=e("ff84"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=i.a},f80d:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var o={uLine:function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/uview-ui/components/u-line/u-line")]).then(e.bind(null,"f706"))},uLoadingIcon:function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(e.bind(null,"5a35"))}},i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__get_style([t.$u.addStyle(t.customStyle),{backgroundColor:t.bgColor,marginBottom:t.$u.addUnit(t.marginBottom),marginTop:t.$u.addUnit(t.marginTop),height:t.$u.addUnit(t.height)}])),o=t.__get_style([t.loadTextStyle]);t.$mp.data=Object.assign({},{$root:{s0:e,s1:o}})},u=[]},ff84:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("f47d"));function i(t){return t&&t.__esModule?t:{default:t}}var u={name:"u-loadmore",mixins:[t.$u.mpMixin,t.$u.mixin,o.default],data:function(){return{dotText:"●"}},computed:{loadTextStyle:function(){return{color:this.color,fontSize:t.$u.addUnit(this.fontSize),lineHeight:t.$u.addUnit(this.fontSize),backgroundColor:this.bgColor}},showText:function(){var t="";return t="loadmore"==this.status?this.loadmoreText:"loading"==this.status?this.loadingText:"nomore"==this.status&&this.isDot?this.dotText:this.nomoreText,t}},methods:{loadMore:function(){"loadmore"==this.status&&this.$emit("loadmore")}}};n.default=u}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/uview-ui/components/u-loadmore/u-loadmore-create-component',
    {
        'node-modules/uview-ui/components/u-loadmore/u-loadmore-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("11dd"))
        })
    },
    [['node-modules/uview-ui/components/u-loadmore/u-loadmore-create-component']]
]);
