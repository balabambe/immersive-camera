(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6616)}])},8769:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),o=n(9008),u=n.n(o),i=n(5697),l=n.n(i);function a(e){let{children:t}=e;return(0,r.jsxs)("div",{className:l().container,children:[(0,r.jsxs)(u(),{children:[(0,r.jsx)("title",{children:"新北市議會類 AR 合照系統"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),t]})}},8530:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return r}});class n{disable(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}getStore(){}run(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}exit(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}enterWith(){throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")}}function r(){return globalThis.AsyncLocalStorage?new globalThis.AsyncLocalStorage:new n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5182:function(e,t,n){"use strict";function r(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return r}}),n(8754),n(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ReadonlyURLSearchParams:function(){return p},useSearchParams:function(){return _},usePathname:function(){return b},ServerInsertedHTMLContext:function(){return a.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return a.useServerInsertedHTML},useRouter:function(){return h},useParams:function(){return y},useSelectedLayoutSegments:function(){return v},useSelectedLayoutSegment:function(){return g},redirect:function(){return c.redirect},notFound:function(){return s.notFound}});let r=n(7294),o=n(4224),u=n(8463),i=n(5182),l=n(2526),a=n(3014),c=n(8781),s=n(8147),f=Symbol("internal for urlsearchparams readonly");function d(){return Error("ReadonlyURLSearchParams cannot be modified")}class p{[Symbol.iterator](){return this[f][Symbol.iterator]()}append(){throw d()}delete(){throw d()}set(){throw d()}sort(){throw d()}constructor(e){this[f]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function _(){(0,i.clientHookInServerComponentError)("useSearchParams");let e=(0,r.useContext)(u.SearchParamsContext),t=(0,r.useMemo)(()=>e?new p(e):null,[e]);return t}function b(){return(0,i.clientHookInServerComponentError)("usePathname"),(0,r.useContext)(u.PathnameContext)}function h(){(0,i.clientHookInServerComponentError)("useRouter");let e=(0,r.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function y(){(0,i.clientHookInServerComponentError)("useParams");let e=(0,r.useContext)(o.GlobalLayoutRouterContext);return e?function e(t,n){void 0===n&&(n={});let r=t[1];for(let t of Object.values(r)){let r=t[0],o=Array.isArray(r),u=o?r[1]:r;!u||u.startsWith("__PAGE__")||(o&&(n[r[0]]=r[1]),n=e(t,n))}return n}(e.tree):null}function v(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,r.useContext)(o.LayoutRouterContext);return function e(t,n,r,o){let u;if(void 0===r&&(r=!0),void 0===o&&(o=[]),r)u=t[1][n];else{var i;let e=t[1];u=null!=(i=e.children)?i:Object.values(e)[0]}if(!u)return o;let a=u[0],c=(0,l.getSegmentValue)(a);return!c||c.startsWith("__PAGE__")?o:(o.push(c),e(u,n,!1,o))}(t,e)}function g(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=v(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{notFound:function(){return r},isNotFoundError:function(){return o}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function o(e){return(null==e?void 0:e.digest)===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8781:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{RedirectType:function(){return r},getRedirectError:function(){return l},redirect:function(){return a},isRedirectError:function(){return c},getURLFromRedirectError:function(){return s},getRedirectTypeFromError:function(){return f}});let u=n(4505),i="NEXT_REDIRECT";function l(e,t){let n=Error(i);n.digest=i+";"+t+";"+e;let r=u.requestAsyncStorage.getStore();return r&&(n.mutableCookies=r.mutableCookies),n}function a(e,t){throw void 0===t&&(t="replace"),l(e,t)}function c(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,n,r]=e.digest.split(";",3);return t===i&&("replace"===n||"push"===n)&&"string"==typeof r}function s(e){return c(e)?e.digest.split(";",3)[2]:null}function f(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=r||(r={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let r=n(8530),o=(0,r.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2526:function(e,t){"use strict";function n(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ServerInsertedHTMLContext:function(){return u},useServerInsertedHTML:function(){return i}});let r=n(1757),o=r._(n(7294)),u=o.default.createContext(null);function i(e){let t=(0,o.useContext)(u);t&&t(e)}},6616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893),o=n(9332),u=n(5697),i=n.n(u),l=n(8769);function a(){let e=(0,o.useRouter)();return(0,r.jsx)(l.Z,{children:(0,r.jsx)("main",{className:i().main,children:(0,r.jsxs)("div",{className:i().func,children:[(0,r.jsx)("img",{src:"/images/logo.png"}),(0,r.jsxs)("p",{children:["歡迎使用新北市議會",(0,r.jsx)("br",{}),"類 AR 合照系統"]}),(0,r.jsx)("button",{type:"button",onClick:()=>e.push("/list/ar"),children:"ENTER"})]})})})}},5697:function(e){e.exports={container:"home_container__U_vei",main:"home_main__yuqk2",func:"home_func__uVVrR",list:"home_list__xGS3_"}},9008:function(e,t,n){e.exports=n(2636)},9332:function(e,t,n){e.exports=n(1414)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);