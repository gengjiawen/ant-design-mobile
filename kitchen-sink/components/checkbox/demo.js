webpackJsonp([18,141],{6:function(n,t,a){"use strict";a(14),a(13),a(12)},11:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var s=a(15),o=e(s);t["default"]=function(n){if(Array.isArray(n)){for(var t=0,a=Array(n.length);t<n.length;t++)a[t]=n[t];return a}return(0,o["default"])(n)}},12:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}var s=a(11);e(s)},13:function(n,t){},14:function(n,t){},15:function(n,t,a){n.exports={"default":a(16),__esModule:!0}},16:function(n,t,a){a(30),a(18),n.exports=a(20).Array.from},17:function(n,t,a){"use strict";var e=a(25),s=a(29);n.exports=function(n,t,a){t in n?e.f(n,t,s(0,a)):n[t]=a}},18:function(n,t,a){"use strict";var e=a(28),s=a(22),o=a(26),p=a(34),u=a(33),c=a(31),l=a(17),r=a(32);s(s.S+s.F*!a(35)(function(n){Array.from(n)}),"Array",{from:function(n){var t,a,s,i,f=o(n),d="function"==typeof this?this:Array,k=arguments.length,g=k>1?arguments[1]:void 0,y=void 0!==g,h=0,b=r(f);if(y&&(g=e(g,k>2?arguments[2]:void 0,2)),void 0==b||d==Array&&u(b))for(t=c(f.length),a=new d(t);t>h;h++)l(a,h,y?g(f[h],h):f[h]);else for(i=b.call(f),a=new d;!(s=i.next()).done;h++)l(a,h,y?p(i,g,[s.value,h],!0):s.value);return a.length=h,a}})},24:function(n,t,a){"use strict";a(6),a(38)},38:function(n,t){},67:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(2),o=e(s),p=a(10),u=e(p),c=a(3),l=e(c),r=a(5),i=e(r),f=a(4),d=e(f),k=a(1),g=e(k),y=a(7),h=e(y),b=function(n,t){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)t.indexOf(e[s])<0&&(a[e[s]]=n[e[s]]);return a},m=function(n){function t(){return(0,l["default"])(this,t),(0,i["default"])(this,n.apply(this,arguments))}return(0,d["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.direction,e=t.wrap,s=t.justify,p=t.align,c=t.alignContent,l=t.className,r=t.children,i=t.prefixCls,f=t.style,d=b(t,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),k=(0,h["default"])(i,l,(n={},(0,u["default"])(n,i+"-dir-row","row"===a),(0,u["default"])(n,i+"-dir-row-reverse","row-reverse"===a),(0,u["default"])(n,i+"-dir-column","column"===a),(0,u["default"])(n,i+"-dir-column-reverse","column-reverse"===a),(0,u["default"])(n,i+"-nowrap","nowrap"===e),(0,u["default"])(n,i+"-wrap","wrap"===e),(0,u["default"])(n,i+"-wrap-reverse","wrap-reverse"===e),(0,u["default"])(n,i+"-justify-start","start"===s),(0,u["default"])(n,i+"-justify-end","end"===s),(0,u["default"])(n,i+"-justify-center","center"===s),(0,u["default"])(n,i+"-justify-between","between"===s),(0,u["default"])(n,i+"-justify-around","around"===s),(0,u["default"])(n,i+"-align-start","start"===p),(0,u["default"])(n,i+"-align-center","center"===p),(0,u["default"])(n,i+"-align-end","end"===p),(0,u["default"])(n,i+"-align-baseline","baseline"===p),(0,u["default"])(n,i+"-align-stretch","stretch"===p),(0,u["default"])(n,i+"-align-content-start","start"===c),(0,u["default"])(n,i+"-align-content-end","end"===c),(0,u["default"])(n,i+"-align-content-center","center"===c),(0,u["default"])(n,i+"-align-content-between","between"===c),(0,u["default"])(n,i+"-align-content-around","around"===c),(0,u["default"])(n,i+"-align-content-stretch","stretch"===c),n));return g["default"].createElement("div",(0,o["default"])({className:k,style:f},d),r)},t}(g["default"].Component);t["default"]=m,m.defaultProps={prefixCls:"am-flexbox",align:"center"},n.exports=t["default"]},68:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(2),o=e(s),p=a(3),u=e(p),c=a(5),l=e(c),r=a(4),i=e(r),f=a(1),d=e(f),k=a(7),g=e(k),y=function(n,t){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)t.indexOf(e[s])<0&&(a[e[s]]=n[e[s]]);return a},h=function(n){function t(){return(0,u["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,i["default"])(t,n),t.prototype.render=function(){var n=this.props,t=n.children,a=n.className,e=n.prefixCls,s=n.style,p=y(n,["children","className","prefixCls","style"]),u=(0,g["default"])(e+"-item",a);return d["default"].createElement("div",(0,o["default"])({className:u,style:s},p),t)},t}(d["default"].Component);t["default"]=h,h.defaultProps={prefixCls:"am-flexbox"},n.exports=t["default"]},69:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(67),o=e(s),p=a(68),u=e(p);o["default"].Item=u["default"],t["default"]=o["default"],n.exports=t["default"]},70:function(n,t,a){"use strict";a(6),a(71)},71:function(n,t){},79:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(n){return Object.keys(n).reduce(function(t,a){return"aria-"!==a.substr(0,5)&&"data-"!==a.substr(0,5)&&"role"!==a||(t[a]=n[a]),t},{})},n.exports=t["default"]},192:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(3),o=e(s),p=a(5),u=e(p),c=a(4),l=e(c),r=a(1),i=e(r),f=a(224),d=e(f),k=a(7),g=e(k),y=function(n,t){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)t.indexOf(e[s])<0&&(a[e[s]]=n[e[s]]);return a},h=function(n){function t(){return(0,o["default"])(this,t),(0,u["default"])(this,n.apply(this,arguments))}return(0,l["default"])(t,n),t.prototype.render=function(){var n=this.props,t=n.className,a=n.style,e=y(n,["className","style"]),s=e.prefixCls,o=e.children,p=(0,g["default"])(s+"-wrapper",t);"class"in e&&delete e["class"];var u=i["default"].createElement("label",{className:p,style:a},i["default"].createElement(d["default"],e),o);return this.props.wrapLabel?u:i["default"].createElement(d["default"],this.props)},t}(i["default"].Component);t["default"]=h,h.defaultProps={prefixCls:"am-checkbox",wrapLabel:!0},n.exports=t["default"]},224:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(253);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e(s)["default"]}}),n.exports=t["default"]},248:function(n,t){function a(n){return!!n&&"object"==typeof n}function e(n,t){var a=null==n?void 0:n[t];return p(a)?a:void 0}function s(n){return o(n)&&f.call(n)==u}function o(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function p(n){return null!=n&&(s(n)?d.test(r.call(n)):a(n)&&c.test(n))}var u="[object Function]",c=/^\[object .+?Constructor\]$/,l=Object.prototype,r=Function.prototype.toString,i=l.hasOwnProperty,f=l.toString,d=RegExp("^"+r.call(i).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=e},249:function(n,t){function a(n){return s(n)&&k.call(n,"callee")&&(!y.call(n,"callee")||g.call(n)==r)}function e(n){return null!=n&&p(n.length)&&!o(n)}function s(n){return c(n)&&e(n)}function o(n){var t=u(n)?g.call(n):"";return t==i||t==f}function p(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=l}function u(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function c(n){return!!n&&"object"==typeof n}var l=9007199254740991,r="[object Arguments]",i="[object Function]",f="[object GeneratorFunction]",d=Object.prototype,k=d.hasOwnProperty,g=d.toString,y=d.propertyIsEnumerable;n.exports=a},250:function(n,t){function a(n){return!!n&&"object"==typeof n}function e(n,t){var a=null==n?void 0:n[t];return u(a)?a:void 0}function s(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=h}function o(n){return p(n)&&k.call(n)==l}function p(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function u(n){return null!=n&&(o(n)?g.test(f.call(n)):a(n)&&r.test(n))}var c="[object Array]",l="[object Function]",r=/^\[object .+?Constructor\]$/,i=Object.prototype,f=Function.prototype.toString,d=i.hasOwnProperty,k=i.toString,g=RegExp("^"+f.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),y=e(Array,"isArray"),h=9007199254740991,b=y||function(n){return a(n)&&s(n.length)&&k.call(n)==c};n.exports=b},251:function(n,t,a){function e(n){return function(t){return null==t?void 0:t[n]}}function s(n){return null!=n&&p(b(n))}function o(n,t){return n="number"==typeof n||d.test(n)?+n:-1,t=null==t?h:t,n>-1&&n%1==0&&n<t}function p(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=h}function u(n){for(var t=l(n),a=t.length,e=a&&n.length,s=!!e&&p(e)&&(f(n)||i(n)),u=-1,c=[];++u<a;){var r=t[u];(s&&o(r,e)||g.call(n,r))&&c.push(r)}return c}function c(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function l(n){if(null==n)return[];c(n)||(n=Object(n));var t=n.length;t=t&&p(t)&&(f(n)||i(n))&&t||0;for(var a=n.constructor,e=-1,s="function"==typeof a&&a.prototype===n,u=Array(t),l=t>0;++e<t;)u[e]=e+"";for(var r in n)l&&o(r,t)||"constructor"==r&&(s||!g.call(n,r))||u.push(r);return u}var r=a(248),i=a(249),f=a(250),d=/^\d+$/,k=Object.prototype,g=k.hasOwnProperty,y=r(Object,"keys"),h=9007199254740991,b=e("length"),m=y?function(n){var t=null==n?void 0:n.constructor;return"function"==typeof t&&t.prototype===n||"function"!=typeof n&&s(n)?u(n):c(n)?y(n):[]}:u;n.exports=m},253:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),o=e(s),p=a(10),u=e(p),c=a(52),l=e(c),r=a(3),i=e(r),f=a(8),d=e(f),k=a(5),g=e(k),y=a(4),h=e(y),b=a(1),m=e(b),v=a(21),x=e(v),O=a(261),C=e(O),j=a(7),w=e(j),P=function(n){function t(n){(0,i["default"])(this,t);var a=(0,g["default"])(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));_.call(a);var e="checked"in n?n.checked:n.defaultChecked;return a.state={checked:e},a}return(0,h["default"])(t,n),(0,d["default"])(t,[{key:"componentWillReceiveProps",value:function(n){"checked"in n&&this.setState({checked:n.checked})}},{key:"shouldComponentUpdate",value:function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];return C["default"].shouldComponentUpdate.apply(this,t)}},{key:"render",value:function(){var n,t=this.props,a=t.prefixCls,e=t.className,s=t.style,p=t.name,c=t.type,r=t.disabled,i=t.readOnly,f=t.tabIndex,d=t.onClick,k=t.onFocus,g=t.onBlur,y=(0,l["default"])(t,["prefixCls","className","style","name","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur"]),h=Object.keys(y).reduce(function(n,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(n[t]=y[t]),n},{}),b=this.state.checked,v=(0,w["default"])(a,e,(n={},(0,u["default"])(n,a+"-checked",b),(0,u["default"])(n,a+"-disabled",r),n));return m["default"].createElement("span",{className:v,style:s},m["default"].createElement("input",(0,o["default"])({name:p,type:c,readOnly:i,disabled:r,tabIndex:f,className:a+"-input",checked:!!b,onClick:d,onFocus:k,onBlur:g,onChange:this.handleChange},h)),m["default"].createElement("span",{className:a+"-inner"}))}}]),t}(m["default"].Component);P.propTypes={prefixCls:x["default"].string,className:x["default"].string,style:x["default"].object,name:x["default"].string,type:x["default"].string,defaultChecked:x["default"].oneOfType([x["default"].number,x["default"].bool]),checked:x["default"].oneOfType([x["default"].number,x["default"].bool]),disabled:x["default"].bool,onFocus:x["default"].func,onBlur:x["default"].func,onChange:x["default"].func,onClick:x["default"].func,tabIndex:x["default"].string,readOnly:x["default"].bool},P.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var _=function(){var n=this;this.handleChange=function(t){var a=n.props;a.disabled||("checked"in a||n.setState({checked:t.target.checked}),a.onChange({target:(0,o["default"])({},a,{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()}}))}};t["default"]=P,n.exports=t["default"]},261:function(n,t,a){"use strict";function e(n,t,a){return!s(n.props,t)||!s(n.state,a)}var s=a(274),o={shouldComponentUpdate:function(n,t){return e(this,n,t)}};n.exports=o},274:function(n,t,a){"use strict";var e=a(251);n.exports=function(n,t,a,s){var o=a?a.call(s,n,t):void 0;if(void 0!==o)return!!o;if(n===t)return!0;if("object"!=typeof n||null===n||"object"!=typeof t||null===t)return!1;var p=e(n),u=e(t),c=p.length;if(c!==u.length)return!1;s=s||null;for(var l=Object.prototype.hasOwnProperty.bind(t),r=0;r<c;r++){var i=p[r];if(!l(i))return!1;var f=n[i],d=t[i],k=a?a.call(s,f,d,i):void 0;if(k===!1||void 0===k&&f!==d)return!1}return!0}},301:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(2),o=e(s),p=a(3),u=e(p),c=a(5),l=e(c),r=a(4),i=e(r),f=a(1),d=e(f),k=a(7),g=e(k),y=a(192),h=e(y),b=a(79),m=e(b),v=function(n,t){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)t.indexOf(e[s])<0&&(a[e[s]]=n[e[s]]);return a},x=function(n){function t(){return(0,u["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,i["default"])(t,n),t.prototype.render=function(){var n=this.props,t=n.style,a=v(n,["style"]),e=a.prefixCls,s=a.className,p=(0,g["default"])(e+"-agree",s);return d["default"].createElement("div",(0,o["default"])({},(0,m["default"])(a),{className:p,style:t}),d["default"].createElement(h["default"],(0,o["default"])({},a,{className:e+"-agree-label"})))},t}(d["default"].Component);t["default"]=x,x.defaultProps={prefixCls:"am-checkbox"},n.exports=t["default"]},302:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=a(2),p=e(o),u=a(10),c=e(u),l=a(3),r=e(l),i=a(5),f=e(i),d=a(4),k=e(d),g=a(1),y=e(g),h=a(7),b=e(h),m=a(40),v=e(m),x=a(192),O=e(x),C=function(n,t){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(a[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)t.indexOf(e[s])<0&&(a[e[s]]=n[e[s]]);return a},j=v["default"].Item,w=function(n){function t(){return(0,r["default"])(this,t),(0,f["default"])(this,n.apply(this,arguments))}return(0,k["default"])(t,n),t.prototype.render=function(){var n=this,t=this.props,a=t.listPrefixCls,e=(t.onChange,t.disabled),o=t.checkboxProps,u=t.onClick,l=C(t,["listPrefixCls","onChange","disabled","checkboxProps","onClick"]),r=l.prefixCls,i=l.className,f=l.children,d=(0,b["default"])(r+"-item",i,(0,c["default"])({},r+"-item-disabled",e===!0));e||(l.onClick=u||s);var k={};return["name","defaultChecked","checked","onChange","disabled"].forEach(function(t){t in n.props&&(k[t]=n.props[t])}),y["default"].createElement(j,(0,p["default"])({},l,{prefixCls:a,className:d,thumb:y["default"].createElement(O["default"],(0,p["default"])({},o,k))}),f)},t}(y["default"].Component);t["default"]=w,w.defaultProps={prefixCls:"am-checkbox",listPrefixCls:"am-list",checkboxProps:{}},n.exports=t["default"]},303:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(192),o=e(s),p=a(302),u=e(p),c=a(301),l=e(c);o["default"].CheckboxItem=u["default"],o["default"].AgreeItem=l["default"],t["default"]=o["default"],n.exports=t["default"]},304:function(n,t,a){"use strict";a(6),a(24),a(328)},328:function(n,t){},592:function(n,t,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/checkbox/demo/basic.md",id:"components-checkbox-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> Flex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> CheckboxItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>CheckboxItem<span class="token punctuation">;</span>\n<span class="token keyword">const</span> AgreeItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>AgreeItem<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Ph.D.\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'Bachelor\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'College diploma\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'CheckboxItem demo\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>i<span class="token punctuation">.</span>label<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">defaultChecked</span> <span class="token attr-name">multipleLine</span><span class="token punctuation">></span></span>\n          Undergraduate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>Auxiliary text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgreeItem</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'checkbox\'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            Agree <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'agree it\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>agreement<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgreeItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function t(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function s(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function o(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):t(n,a))}var p=a(1),u=(a(1),a(70),a(69)),c=n(u),l=(a(24),a(40)),r=n(l),i=(a(304),a(303)),f=n(i),d=f["default"].CheckboxItem,k=f["default"].AgreeItem,g=function(n){function t(){var a,o,p;e(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return a=o=s(this,n.call.apply(n,[this].concat(c))),o.onChange=function(n){console.log(n)},p=a,s(o,p)}return o(t,n),t.prototype.render=function(){var n=this,t=[{value:0,label:"Ph.D."},{value:1,label:"Bachelor"},{value:2,label:"College diploma"}];return p.createElement("div",null,p.createElement(r["default"],{renderHeader:function(){return"CheckboxItem demo"}},t.map(function(t){return p.createElement(d,{key:t.value,onChange:function(){return n.onChange(t.value)}},t.label)}),p.createElement(d,{key:"disabled","data-seed":"logId",disabled:!0,defaultChecked:!0,multipleLine:!0},"Undergraduate",p.createElement(r["default"].Item.Brief,null,"Auxiliary text"))),p.createElement(c["default"],null,p.createElement(c["default"].Item,null,p.createElement(k,{"data-seed":"logId",onChange:function(n){return console.log("checkbox",n)}},"Agree ",p.createElement("a",{onClick:function(n){n.preventDefault(),alert("agree it")}},"agreement")))))},t}(p.Component);return p.createElement(g,null)}}},741:function(n,t,a){n.exports={basic:a(592)}}});