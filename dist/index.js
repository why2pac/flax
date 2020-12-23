var e=p(require("query-string")),t=p(require("lru-cache")),r=p(require("axios")),n=require("react-dom"),o=p(n),u=n.render,i=require("react"),a=p(i),c=i.Component,s=i.useState,l=i.useEffect,f=i.Suspense;function p(e){return e&&e.__esModule?e.default:e}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return"string"==typeof t&&t?e.push(t):Array.isArray(t)?e.push(y(t)):t&&"object"===d(t)&&Object.keys(t).forEach((function(r){t[r]&&e.push(r)})),e}),[]).join(" ")}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function v(e){var t,r={container:document.getElementById("fx-notification-container")||((t=document.createElement("div")).id="fx-notification-container",t.classList.add("flax"),t.classList.add("fx-notification-container"),document.body.appendChild(t),t)}.container;return{container:r,alert:function(e){var t=e.delay,n=b(e,["delay"]),i=document.createElement("div");i.classList.add("fx-notification-wrapper"),r.appendChild(i),u(a.createElement(m,n),i),setTimeout((function(){i.classList.add("--hide"),setTimeout((function(){o.unmountComponentAtNode(i),i.remove()}),450)}),t||3e3)}}}function m(e){var t=e.type,r=e.title,n=e.message;return l((function(){return function(){}})),a.createElement(a.Fragment,null,a.createElement("div",{className:y("flax fx-notification","--".concat((t||"info").toLocaleLowerCase()))},t&&function(e){return e&&"INFO"!==e?a.createElement("div",{className:"--icon"},"SUCC"===e&&a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})),"WARN"===e&&a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})),"ERROR"===e&&a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))):null}(t),r&&a.createElement("strong",null,r),n))}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=new t({max:100,maxAge:6e5}),O=function(e,t,r,n,o){if(o){var u,i,a;if(null===(u=o.response)||void 0===u?void 0:u.data)if(r.errReducer)o.response.reduced=r.errReducer(null===(i=o.response)||void 0===i?void 0:i.data,o);else o.response.reduced=null===(a=o.response)||void 0===a?void 0:a.data;t(o)}else e({data:null==n?void 0:n.data,reduced:r.reducer?r.reducer(null==n?void 0:n.data):null==n?void 0:n.data,response:n})},j={},w=function(e,t,r,n,o,u){if(u&&e.props.cacheMaxAge&&g.set(u,{data:null==r?void 0:r.data},e.props.cacheMaxAge),t){j[t].splice(0,j[t].length).forEach((function(e){var t=e.resolve,u=e.reject,i=e.props,a=(i.delay||0)-((new Date).getTime()-o.getTime());setTimeout((function(){O(t,u,i,r,n)}),Math.max(a,0))}))}else{var i=(e.props.delay||0)-((new Date).getTime()-o.getTime());setTimeout((function(){O(e.resolve,e.reject,e.props,r,n)}),Math.max(i,0))}},E=function(e){return e?"object"!==h(e)||Array.isArray(e)?e:Object.keys(e).reduce((function(t,r){return"object"===h(e[r])?e[r].current instanceof HTMLElement?t[r]=e[r].current.value:t[r]=E(e[r]):t[r]=e[r],t}),{}):e};function S(t){return new Promise((function(n,o){setTimeout((function(){var u,i,a,c=(u=t.url,i=t.query||{},a=e.stringify(i),u+(a?(u.includes("?")?"&":"?")+a:"")),s="GET"===t.method&&t.cacheMaxAge&&t.cacheMaxAge>0?"".concat(t.method," ").concat(t.url," ").concat(t.cacheMaxAge):null,l=s&&g.get(s);if(l)w({resolve:n,reject:o,props:t},null,l,null,new Date,null);else{var f="GET"===t.method&&t.throttle?"".concat(t.method," ").concat(c," ").concat(t.delay||0):null;if(!(f&&(j[f]=j[f]||[],j[f].push({resolve:n,reject:o,props:t}),j[f].length>1))){var p=new Date;r.request({method:t.method,url:c,headers:t.headers,responseType:t.responseType,data:E("function"==typeof t.data?t.data():t.data)}).then((function(e){w({resolve:n,reject:o,props:t},f,e,null,p,s)})).catch((function(e){w({resolve:n,reject:o,props:t},f,null,e,p,null)}))}}}),25)}))}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}exports.setDefaultHeaders=function(e){r.defaults.headers.common=Object.assign(r.defaults.headers.common,e)},exports.setBaseUrl=function(e){r.defaults.baseURL=e};var I=function(e,t){e&&("string"==typeof e&&(e={message:e}),e.message&&(e.type=e.type||t,(0,v().alert)(e)))};function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var o=M(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return F(this,r)}}function F(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}exports.notify=I,exports.useRequest=function(e,t){var r=R(s({busy:!1,response:void 0,errorResponse:void 0}),2),n=r[0],o=r[1],u=t||{},i=u.success,a=u.done,c=u.error;return{request:function(){return!n.busy&&(o({busy:!0,response:void 0,errorResponse:void 0}),S(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)).then((function(e){I(i&&i(e.reduced,e.response),"SUCC"),I(a&&a(e.data,null,e.response),"INFO"),o({busy:!1,response:e.reduced,errorResponse:void 0})})).catch((function(e){var t,r,n,u,i,s="number"==typeof(null===(t=e.response)||void 0===t?void 0:t.status)&&(null===(r=e.response)||void 0===r?void 0:r.status)<500?"WARN":"ERROR";I(c&&c(null===(n=e.response)||void 0===n?void 0:n.reduced,e),s),I(a&&a(null===(u=e.response)||void 0===u?void 0:u.data,e,e.response),s),o({busy:!1,response:null===(i=e.response)||void 0===i?void 0:i.reduced,errorResponse:void 0})})),!0)},response:n}};var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(u,c);var t,r,n,o=_(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=o.call(this,e)).state={busy:!1},t}return t=u,(r=[{key:"noti",value:function(e,t){I(e,t)}},{key:"handleClick",value:function(){var e=this;if(!this.state.busy){this.setState(D(D({},this.state),{},{busy:!0}));var t=this.props,r=t.success,n=t.error,o=t.done;S(D({},this.props.api)).then((function(t){e.noti(r&&r(t.reduced,t.response),"SUCC"),e.noti(o&&o(t.data,null,t.response),"INFO"),e.setState(D(D({},e.state),{},{busy:!1}))})).catch((function(t){var r,u,i,a,c="number"==typeof(null===(r=t.response)||void 0===r?void 0:r.status)&&(null===(u=t.response)||void 0===u?void 0:u.status)<500?"WARN":"ERROR";e.noti(n&&n(null===(i=t.response)||void 0===i?void 0:i.reduced,t),c),e.noti(o&&o(null===(a=t.response)||void 0===a?void 0:a.data,t,t.response),c),e.setState(D(D({},e.state),{},{busy:!1}))}))}}},{key:"render",value:function(){var e=this,t="".concat(this.props.tag||"button");return a.createElement(t,{className:"flax fx-button ".concat(this.state.busy?"--busy":""," ").concat(this.props.className||""),onClick:function(){return e.handleClick()},disabled:this.state.busy},this.props.children||this.props.label)}}])&&T(t.prototype,r),n&&T(t,n),u}();function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=K(e);if(t){var o=K(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return J(this,r)}}function J(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return V(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function X(e,t){return function(){return{status:t?"ERROR":"SUCCESS",result:e,error:t}}}exports.FxButton=B;function Y(e){var t=Q(s(),2),r=t[0],n=t[1],o=e.api,u=e.refreshId,i=e.reloadId,c=e.error,f=e.naked,p=function(){return S(Object.assign({throttle:!1!==o.throttle,refreshId:u},e.api,{reducer:void 0,errReducer:void 0}))};if(l((function(){i>0&&p().then((function(t){n((function(){return X(t,null)})),e.releaseBusy(!0)})).catch((function(t){n((function(){return X(null,t)})),e.releaseBusy(!1)}))}),[i]),l((function(){n((function(){return function(e,t){var r,n,o="PENDING";return t.then((function(t){var u=X(t,null)();n=u.result,o=u.status,r=u.error,e(!0)})).catch((function(t){var u=X(null,t)();n=u.result,o=u.status,r=u.error,e(!1)})),function(){if("PENDING"===o)throw t;return{status:o,error:r,result:n}}}(e.releaseBusy,p())}))}),[o.method,o.url,u]),!r)return a.createElement(a.Fragment,null);var d=r();if("ERROR"===d.status){var y=function(){var t,r,n,o,u;return a.createElement(a.Fragment,null,c&&c((null===(r=d.error)||void 0===r||null===(n=r.response)||void 0===n?void 0:n.data)?e.api.errReducer?e.api.errReducer(null===(o=d.error)||void 0===o?void 0:o.response.data,d.error):null===(u=d.error)||void 0===u?void 0:u.response.data:null,d.error),!c&&a.createElement("div",null,"Error (",null===(t=d.error)||void 0===t?void 0:t.message,")"))};return a.createElement(a.Fragment,null,f&&y(),!f&&a.createElement("div",{className:"flax fx-guard-error"},y()))}var b,v,m;return a.createElement(a.Fragment,null,e.render((null===(b=d.result)||void 0===b?void 0:b.data)?e.api.reducer?e.api.reducer(null===(v=d.result)||void 0===v?void 0:v.data):null===(m=d.result)||void 0===m?void 0:m.data:null,e.refreshId>0))}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(u,c);var t,r,n,o=z(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=o.call(this,e)).state={refreshId:0,reloadId:0,busy:!1},t}return t=u,(r=[{key:"reload",value:function(e){this.state.busy||(e?this.setState(W(W({},this.state),{},{reloadId:this.state.reloadId+1,busy:!0})):this.setState(W(W({},this.state),{},{refreshId:this.state.refreshId+1,busy:!0})))}},{key:"releaseBusy",value:function(e){this.props.done&&this.props.done(e),this.setState(W(W({},this.state),{},{busy:!1}))}},{key:"render",value:function(){var e=this,t=function(){var t=function(){return a.createElement(a.Fragment,null,e.props.disableLoading&&a.createElement(a.Fragment,null,e.props.render(null,e.state.refreshId>0)),e.props.loading&&e.props.loading(),!e.props.loading&&!e.props.disableLoading&&a.createElement("div",{className:"flax fx-guard-loader"},"Loading .."))};return a.createElement(a.Fragment,null,a.createElement(f,{fallback:a.createElement(a.Fragment,null,e.props.naked&&t(),!e.props.naked&&a.createElement("div",{className:"flax fx-guard-loading"},t()))},a.createElement(Y,{releaseBusy:function(t){return e.releaseBusy(t)},refreshId:e.state.refreshId,reloadId:e.state.reloadId,api:e.props.api,render:e.props.render,error:e.props.error,naked:e.props.naked})))};return a.createElement(a.Fragment,null,this.props.naked&&t(),!this.props.naked&&a.createElement("div",{className:y("flax fx-guard",{"--loading":this.state.busy})},t()))}}])&&H(t.prototype,r),n&&H(t,n),u}();exports.FxGuard=Z;
//# sourceMappingURL=index.js.map
