(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{31:function(e,t,r){e.exports=r(42)},32:function(e,t,r){"use strict";function n(e,t,r,n,a,o,c){try{var i=e[o](c),l=i.value}catch(u){return void r(u)}i.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var c=e.apply(t,r);function i(e){n(c,a,o,i,l,"next",e)}function l(e){n(c,a,o,i,l,"throw",e)}i(void 0)}))}}r.d(t,"a",(function(){return a}))},33:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(4);r(39);t.a=function(e){return e.href?a.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?a.a.createElement(o.b,{to:e.to,exact:e.end,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):a.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},34:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(35),c=r(33);t.a=function(e){return"Could not find places for the provided user id."===e.error?a.a.createElement(o.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:a.a.createElement(c.a,{to:"/",onClick:e.onClear},"Okay")},a.a.createElement("p",null,e.error)):a.a.createElement(o.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:a.a.createElement(c.a,{onClick:e.onClear},"Okay")},a.a.createElement("p",null,e.error))}},35:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(5),c=r.n(o),i=r(30),l=r(10),u=(r(38),function(e){var t=a.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},a.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},a.a.createElement("h2",null,e.header)),a.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},a.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),a.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return c.a.createPortal(t,document.getElementById("modal-hook"))});t.a=function(e){return a.a.createElement(a.a.Fragment,null,e.show&&a.a.createElement(l.a,{onClick:e.onCancel}),a.a.createElement(i.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},a.a.createElement(u,e)))}},36:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(31),a=r.n(n),o=r(32),c=r(3),i=r(0),l=function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),r=t[0],n=t[1],l=Object(i.useState)(),u=Object(c.a)(l,2),s=u[0],f=u[1],h=Object(i.useRef)([]),d=Object(i.useCallback)(function(){var e=Object(o.a)(a.a.mark((function e(t){var r,o,c,i,l,u,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,c=s.length>3&&void 0!==s[3]?s[3]:{},n(!0),i=new AbortController,h.current.push(i),e.prev=6,e.next=9,fetch(t,{method:r,body:o,headers:c,signal:i.signal});case 9:return l=e.sent,e.next=12,l.json();case 12:if(u=e.sent,h.current=h.current.filter((function(e){return e!==i})),l.ok){e.next=16;break}throw new Error(u.message);case 16:return n(!1),e.abrupt("return",u);case 20:throw e.prev=20,e.t0=e.catch(6),f(e.t0.message),n(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(i.useEffect)((function(){return function(){h.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:r,error:s,sendRequest:d,clearError:function(){f(null)}}}},37:function(e,t,r){"use strict";var n=r(0),a=r.n(n);r(43);t.a=function(e){return a.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},38:function(e,t,r){},39:function(e,t,r){},42:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(L){i=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),c=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=b(c,r);if(i){if(i===s)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,c),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var s={};function f(){}function h(){}function d(){}var m={};i(m,a,(function(){return this}));var p=Object.getPrototypeOf,v=p&&p(p(k([])));v&&v!==t&&r.call(v,a)&&(m=v);var y=d.prototype=f.prototype=Object.create(m);function E(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var n;this._invoke=function(a,o){function c(){return new t((function(n,c){!function n(a,o,c,i){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}(a,o,n,c)}))}return n=n?n.then(c,c):c()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=d,i(y,"constructor",d),i(d,"constructor",h),h.displayName=i(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(g.prototype),i(g.prototype,o,(function(){return this})),e.AsyncIterator=g,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new g(l(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},E(y),i(y,c,"Generator"),i(y,a,(function(){return this})),i(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},43:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){},57:function(e,t,r){},63:function(e,t,r){"use strict";r.r(t);var n=r(31),a=r.n(n),o=r(32),c=r(3),i=r(0),l=r.n(i),u=r(1),s=r(37),f=r(33),h=r(35),d=(r(55),function(e){var t=Object(i.useRef)(),r=e.center,n=e.zoom;return Object(i.useEffect)((function(){var e=new window.google.maps.Map(t.current,{center:r,zoom:n});new window.google.maps.Marker({position:r,map:e})}),[r,n]),l.a.createElement("div",{ref:t,className:"map ".concat(e.className),style:e.style})}),m=r(34),p=r(9),v=r(7),y=r(36),E=(r(56),function(e){var t=Object(y.a)(),r=t.isLoading,n=t.error,u=t.sendRequest,E=t.clearError,g=Object(i.useContext)(v.a),b=Object(i.useState)(!1),w=Object(c.a)(b,2),O=w[0],x=w[1],k=Object(i.useState)(!1),j=Object(c.a)(k,2),L=j[0],_=j[1],C=function(){return x(!1)},N=function(){_(!1)},S=function(){var t=Object(o.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!1),t.prev=1,t.next=4,u("".concat("https://place-book.herokuapp.com/api","/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+g.token});case 4:e.onDelete(e.id),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{error:n,onClear:E}),l.a.createElement(h.a,{show:O,onCancel:C,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:l.a.createElement(f.a,{onClick:C},"CLOSE")},l.a.createElement("div",{className:"map-container"},l.a.createElement(d,{center:e.coordinates,zoom:16}))),l.a.createElement(h.a,{show:L,onCancel:N,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{inverse:!0,onClick:N},"CANCEL"),l.a.createElement(f.a,{danger:!0,onClick:S},"DELETE"))},l.a.createElement("p",null,"Do you want to proceed and delete this place? Please note that it can't be undone thereafter.")),l.a.createElement("li",{className:"place-item"},l.a.createElement(s.a,{className:"place-item__content"},r&&l.a.createElement(p.a,{asOverlay:!0}),l.a.createElement("div",{className:"place-item__image"},l.a.createElement("img",{src:e.image,alt:e.title})),l.a.createElement("div",{className:"place-item__info"},l.a.createElement("h2",null,e.title),l.a.createElement("h3",null,e.address),l.a.createElement("p",null,e.description)),l.a.createElement("div",{className:"place-item__actions"},l.a.createElement(f.a,{inverse:!0,onClick:function(){return x(!0)}},"VIEW ON MAP"),g.userId===e.creatorId&&l.a.createElement(f.a,{to:"/places/".concat(e.id)},"EDIT"),g.userId===e.creatorId&&l.a.createElement(f.a,{danger:!0,onClick:function(){_(!0)}},"DELETE")))))}),g=(r(57),function(e){return 0===e.items.length?l.a.createElement("div",{className:"place-list center"},l.a.createElement(s.a,null,l.a.createElement("h2",null,"No places found. Maybe create one?"),l.a.createElement(f.a,{to:"/places/new"},"Share Place"))):l.a.createElement("ul",{className:"place-list"},e.items.map((function(t){return l.a.createElement(E,{key:t.id,id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace})})))});t.default=function(){var e=Object(i.useState)(),t=Object(c.a)(e,2),r=t[0],n=t[1],s=Object(y.a)(),f=s.isLoading,h=s.error,d=s.sendRequest,v=s.clearError,E=Object(u.g)().userId;Object(i.useEffect)((function(){(function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("".concat("https://place-book.herokuapp.com/api","/places/user/").concat(E));case 3:t=e.sent,n(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[d,E]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{error:h,onClear:v}),f&&l.a.createElement("div",{className:"center"},l.a.createElement(p.a,null)),!f&&r&&l.a.createElement(g,{items:r,onDeletePlace:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}}))}}}]);
//# sourceMappingURL=5.dfe4d227.chunk.js.map