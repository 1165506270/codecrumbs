(window.webpackJsonpcodecrumbs=window.webpackJsonpcodecrumbs||[]).push([[11],{144:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return y});var o=t(1),r=t.n(o),i=t(95),c=t.n(i),u=t(508),a=t.n(u),l=t(509);t(455);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,n){return!n||"object"!==s(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var y=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),p(this,d(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,r.a.Component),function(e,n,t){n&&f(e.prototype,n),t&&f(e,t)}(n,[{key:"fixScroll",value:function(){var e=this.props,n=e.dependenciesLines,t=void 0===n?[]:n,o=e.crumbedLines,r=void 0===o?[]:o;if(this.codeRef&&this.codeRef.scrollTo){var i=t.length?t:r.length?r:null;i&&this.codeRef.scrollTo(0,15*i[0][0]-5)}}},{key:"componentDidUpdate",value:function(e){this.fixScroll()}},{key:"componentDidMount",value:function(){this.fixScroll()}},{key:"render",value:function(){var e=this,n=this.props,t=n.code,o=n.crumbedLines,i=void 0===o?[]:o,u=n.dependenciesLines,s=void 0===u?[]:u,f=n.limitedHeight;return r.a.createElement("div",{className:c()("Code",{limitedHeight:f}),ref:function(n){return e.codeRef=n}},r.a.createElement(a.a,{language:"javascript",style:l.atomOneLight,showLineNumbers:!0,wrapLines:!0,customStyle:{fontSize:"12px"},lineProps:function(e){return m(i,e)?{className:"crumbedLine"}:m(s,e)?{className:"importedDependencyLine"}:{}}},t))}}]),n}(),m=function(e,n){return!!e.find(function(e){return e[0]===n&&e[1]===n||e[0]<=n&&e[1]>=n})}},455:function(e,n,t){var o=t(456);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(97)(o,r);o.locals&&(e.exports=o.locals)},456:function(e,n,t){(e.exports=t(96)(!1)).push([e.i,".Code {\n  height: 100%;\n  position: relative;\n  overflow: auto; }\n  .Code .crumbedLine {\n    display: block;\n    background-color: rgba(255, 225, 244, 0.8); }\n  .Code .importedDependencyLine {\n    display: block;\n    background-color: rgba(0, 148, 249, 0.1); }\n  .Code.limitedHeight {\n    max-height: 200px; }\n",""])}}]);