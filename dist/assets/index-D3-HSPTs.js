const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WorkSection-DfevfJDM.js","assets/SectionHeading-Cipfw8tS.js","assets/ProductsSection-D9ji9-ts.js","assets/AboutSection-npldCIqM.js","assets/ContactSection-qLfnPYx4.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function A(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var j=/\/+/g;function M(e,t){return typeof e==`object`&&e&&e.key!=null?A(``+e.key):t.toString(36)}function ee(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+M(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(j,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(j,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+M(a,u),c+=N(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+M(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(ee(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function te(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ne(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var re=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ie(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,re)}catch(e){re(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function ae(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ie(ae.bind(null,e))}var oe={map:te,forEach:function(e,t,n){te(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return te(e,function(){t++}),t},toArray:function(e){return te(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=oe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=ae,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ne}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ie,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),k=Symbol.for(`react.transitional.element`),A=Symbol.for(`react.portal`),j=Symbol.for(`react.fragment`),M=Symbol.for(`react.strict_mode`),ee=Symbol.for(`react.profiler`),N=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),ne=Symbol.for(`react.forward_ref`),re=Symbol.for(`react.suspense`),ie=Symbol.for(`react.suspense_list`),ae=Symbol.for(`react.memo`),oe=Symbol.for(`react.lazy`),se=Symbol.for(`react.activity`),ce=Symbol.for(`react.legacy_hidden`),le=Symbol.for(`react.memo_cache_sentinel`),ue=Symbol.for(`react.view_transition`),de=Symbol.for(`react.recoverable`),fe=Symbol.iterator;function P(e){return typeof e!=`object`||!e?null:(e=fe&&e[fe]||e[`@@iterator`],typeof e==`function`?e:null)}var pe=Symbol.for(`react.client.reference`);function me(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case j:return`Fragment`;case ee:return`Profiler`;case M:return`StrictMode`;case re:return`Suspense`;case ie:return`SuspenseList`;case se:return`Activity`;case ue:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case A:return`Portal`;case te:return e.displayName||`Context`;case N:return(e._context.displayName||`Context`)+`.Consumer`;case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||``,e=e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ae:return t=e.displayName||null,t===null?me(e.type)||`Memo`:t;case oe:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var F=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},ge=[],_e=-1;function ve(e){return{current:e}}function ye(e){0>_e||(e.current=ge[_e],ge[_e]=null,_e--)}function R(e,t){_e++,ge[_e]=e.current,e.current=t}var be=ve(null),z=ve(null),xe=ve(null),B=ve(null);function Se(e,t){switch(R(xe,t),R(z,e),R(be,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ye(be),R(be,e)}function Ce(){ye(be),ye(z),ye(xe)}function we(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,R(B,e)),t=be.current;var n=dp(t,e.type);t!==n&&(R(z,e),R(be,n))}function Te(e){z.current===e&&(ye(be),ye(z)),B.current===e&&(ye(B),sh._currentValue=he)}var Ee,De;function Oe(e){if(Ee===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ee=t&&t[1]||``,De=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ee+e+De}var ke=!1;function Ae(e,t){if(!e||ke)return``;ke=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ke=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Oe(n):``}function je(e,t){switch(e.tag){case 26:case 27:case 5:return Oe(e.type);case 16:return Oe(`Lazy`);case 13:return e.child!==t&&t!==null?Oe(`Suspense Fallback`):Oe(`Suspense`);case 19:return Oe(`SuspenseList`);case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return Oe(`Activity`);case 30:return Oe(`ViewTransition`);default:return``}}function V(e){try{var t=``,n=null;do t+=je(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Me=Object.prototype.hasOwnProperty,Ne=t.unstable_scheduleCallback,Pe=t.unstable_cancelCallback,Fe=t.unstable_shouldYield,Ie=t.unstable_requestPaint,Le=t.unstable_now,Re=t.unstable_getCurrentPriorityLevel,ze=t.unstable_ImmediatePriority,Be=t.unstable_UserBlockingPriority,Ve=t.unstable_NormalPriority,He=t.unstable_LowPriority,Ue=t.unstable_IdlePriority,We=t.log,Ge=t.unstable_setDisableYieldValue,Ke=null,qe=null;function Je(e){if(typeof We==`function`&&Ge(e),qe&&typeof qe.setStrictMode==`function`)try{qe.setStrictMode(Ke,e)}catch{}}var Ye=Math.clz32?Math.clz32:Qe,Xe=Math.log,Ze=Math.LN2;function Qe(e){return e>>>=0,e===0?32:31-(Xe(e)/Ze|0)|0}var $e=256,et=262144,tt=4194304;function nt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function rt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=nt(n))):i=nt(o):i=nt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=nt(n))):i=nt(o)):i=nt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function it(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function at(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Ye(n),i=1<<r;t|=e[r],n&=~i}return t}function ot(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function st(){var e=tt;return tt<<=1,!(tt&62914560)&&(tt=4194304),e}function ct(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ut(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ye(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&dt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function dt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ye(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ft(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function pt(e,t){var n=t&-t;return n=n&42?1:mt(n),(n&(e.suspendedLanes|t))===0?n:0}function mt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ht(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function gt(){var e=L.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function _t(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var vt=Math.random().toString(36).slice(2),yt=`__reactFiber$`+vt,bt=`__reactProps$`+vt,xt=`__reactContainer$`+vt,St=`__reactEvents$`+vt,Ct=`__reactListeners$`+vt,wt=`__reactHandles$`+vt,Tt=`__reactResources$`+vt,Et=`__reactMarker$`+vt,Dt=`__reactLoad$`+vt;function Ot(e){delete e[yt],delete e[bt],delete e[Ct],delete e[wt]}function kt(e){var t;if(t=e[yt])return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[yt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function At(e){if(e=e[yt]||e[xt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function jt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Mt(e){var t=e[Tt];return t||(t=e[Tt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Nt(e){e[Et]=!0}function Pt(e){e[Dt]=void 0}var Ft=new Set,It={};function Lt(e,t){Rt(e,t),Rt(e+`Capture`,t)}function Rt(e,t){for(It[e]=t,e=0;e<t.length;e++)Ft.add(t[e])}var zt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Bt={},Vt={};function Ht(e){return Me.call(Vt,e)?!0:Me.call(Bt,e)?!1:zt.test(e)?Vt[e]=!0:(Bt[e]=!0,!1)}var Ut=!1;function Wt(){var e=Ut;return Ut=!1,e}function Gt(e,t,n){if(Ht(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function qt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Yt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Xt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zt(e){if(!e._valueTracker){var t=Yt(e)?`checked`:`value`;e._valueTracker=Xt(e,t,``+e[t])}}function Qt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Yt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var $t=/[\n"\\]/g;function en(e){return e.replace($t,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function tn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Jt(t)):e.value!==``+Jt(t)&&(e.value=``+Jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):rn(e,Jt(n)):o===`number`&&e.value==t?rn(e,Jt(e.value)):rn(e,Jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Jt(s):e.removeAttribute(`name`)}function nn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Zt(e);return}n=n==null?``:``+Jt(n),t=t==null?n:``+Jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r=r??i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Zt(e)}function rn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function an(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function on(e,t,n){t!=null&&(t=``+Jt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Jt(n)}function sn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(F(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??(n=``),t=n}n=Jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Zt(e)}function cn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ln=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function un(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||ln.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function dn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Ut=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(un(e,a,r),Ut=!0)}else for(var o in t)t.hasOwnProperty(o)&&un(e,o,t[o])}function fn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var pn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),mn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hn(e){return mn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function gn(){}var _n=null;function vn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yn=null,bn=null;function xn(e){var t=At(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(tn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+en(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[bt]||null;if(!a)throw Error(i(90));tn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Qt(r)}break a;case`textarea`:on(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}}}var Sn=!1;function Cn(e,t,n){if(Sn)return e(t,n);Sn=!0;try{return e(t)}finally{if(Sn=!1,(yn!==null||bn!==null)&&(Ld(),yn&&(t=yn,e=bn,bn=yn=null,xn(t),e)))for(t=0;t<e.length;t++)xn(e[t])}}function wn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[bt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Tn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,En=!1;if(Tn)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){En=!0}}),window.addEventListener(`test`,Dn,Dn),window.removeEventListener(`test`,Dn,Dn)}catch{En=!1}var On=null,kn=null,An=null;function jn(){if(An)return An;var e,t=kn,n=t.length,r,i=`value`in On?On.value:On.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return An=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Pn(){return!1}function Fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:Pn,this.isPropagationStopped=Pn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Fn(In),Rn=D({},In,{view:0,detail:0}),zn=Fn(Rn),Bn,Vn,Hn,Un=D({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Hn&&(Hn&&e.type===`mousemove`?(Bn=e.screenX-Hn.screenX,Vn=e.screenY-Hn.screenY):Vn=Bn=0,Hn=e),Bn)},movementY:function(e){return`movementY`in e?e.movementY:Vn}}),Wn=Fn(Un),Gn=Fn(D({},Un,{dataTransfer:0})),Kn=Fn(D({},Rn,{relatedTarget:0})),qn=Fn(D({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),Jn=Fn(D({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Yn=Fn(D({},In,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=Fn(D({},Rn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=Fn(D({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=Fn(D({},In,{submitter:0})),ir=Fn(D({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ar=Fn(D({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),or=Fn(D({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),sr=Fn(D({},In,{newState:0,oldState:0,source:0})),cr=[9,13,27,32],lr=Tn&&`CompositionEvent`in window,ur=null;Tn&&`documentMode`in document&&(ur=document.documentMode);var dr=Tn&&`TextEvent`in window&&!ur,fr=Tn&&(!lr||ur&&8<ur&&11>=ur),pr=` `,mr=!1;function hr(e,t){switch(e){case`keyup`:return cr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function gr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var _r=!1;function vr(e,t){switch(e){case`compositionend`:return gr(t);case`keypress`:return t.which===32?(mr=!0,pr):null;case`textInput`:return e=t.data,e===pr&&mr?null:e;default:return null}}function yr(e,t){if(_r)return e===`compositionend`||!lr&&hr(e,t)?(e=jn(),An=kn=On=null,_r=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return fr&&t.locale!==`ko`?null:t.data;default:return null}}var br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!br[e.type]:t===`textarea`}function Sr(e,t,n,r){yn?bn?bn.push(r):bn=[r]:yn=r,t=qf(t,`onChange`),0<t.length&&(n=new Ln(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Cr=null,wr=null;function Tr(e){Bf(e,0)}function Er(e){if(Qt(jt(e)))return e}function Dr(e,t){if(e===`change`)return t}var H=!1;if(Tn){var Or;if(Tn){var kr=`oninput`in document;if(!kr){var Ar=document.createElement(`div`);Ar.setAttribute(`oninput`,`return;`),kr=typeof Ar.oninput==`function`}Or=kr}else Or=!1;H=Or&&(!document.documentMode||9<document.documentMode)}function jr(){Cr&&(Cr.detachEvent(`onpropertychange`,Mr),wr=Cr=null)}function Mr(e){if(e.propertyName===`value`&&Er(wr)){var t=[];Sr(t,wr,e,vn(e)),Cn(Tr,t)}}function Nr(e,t,n){e===`focusin`?(jr(),Cr=t,wr=n,Cr.attachEvent(`onpropertychange`,Mr)):e===`focusout`&&jr()}function Pr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Er(wr)}function Fr(e,t){if(e===`click`)return Er(t)}function Ir(e,t){if(e===`input`||e===`change`)return Er(t)}function Lr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Rr=typeof Object.is==`function`?Object.is:Lr;function zr(e,t){if(Rr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Me.call(t,i)||!Rr(e[i],t[i]))return!1}return!0}function Br(e){if(e=e||(typeof document<`u`?document:void 0),e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hr(e,t){var n=Vr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Vr(n)}}function Ur(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ur(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Br(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function Gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Kr=Tn&&`documentMode`in document&&11>=document.documentMode,qr=null,Jr=null,Yr=null,Xr=!1;function Zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xr||qr==null||qr!==Br(r)||(r=qr,`selectionStart`in r&&Gr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&zr(Yr,r)||(Yr=r,r=qf(Jr,`onSelect`),0<r.length&&(t=new Ln(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=qr)))}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var $r={animationend:Qr(`Animation`,`AnimationEnd`),animationiteration:Qr(`Animation`,`AnimationIteration`),animationstart:Qr(`Animation`,`AnimationStart`),transitionrun:Qr(`Transition`,`TransitionRun`),transitionstart:Qr(`Transition`,`TransitionStart`),transitioncancel:Qr(`Transition`,`TransitionCancel`),transitionend:Qr(`Transition`,`TransitionEnd`)},ei={},ti={};Tn&&(ti=document.createElement(`div`).style,`AnimationEvent`in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),`TransitionEvent`in window||delete $r.transitionend.transition);function ni(e){if(ei[e])return ei[e];if(!$r[e])return e;var t=$r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ti)return ei[e]=t[n];return e}var ri=ni(`animationend`),ii=ni(`animationiteration`),ai=ni(`animationstart`),oi=ni(`transitionrun`),si=ni(`transitionstart`),ci=ni(`transitioncancel`),li=ni(`transitionend`),ui=new Map,di=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);di.push(`scrollEnd`);function fi(e,t){ui.set(e,t),Lt(t,[e])}var pi=0;function mi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=vd.identifierPrefix;var n=pi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function hi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Ed;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function gi(e,t){return e=hi(e),t=hi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var _i=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},vi=[],yi=0,bi=0;function xi(){for(var e=yi,t=bi=yi=0;t<e;){var n=vi[t];vi[t++]=null;var r=vi[t];vi[t++]=null;var i=vi[t];vi[t++]=null;var a=vi[t];if(vi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ti(n,i,a)}}function Si(e,t,n,r){vi[yi++]=e,vi[yi++]=t,vi[yi++]=n,vi[yi++]=r,bi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ci(e,t,n,r){return Si(e,t,n,r),Ei(e)}function wi(e,t){return Si(e,null,null,t),Ei(e)}function Ti(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ye(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ei(e){if(50<Dd)throw Dd=0,Od=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Di={};function Oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(e,t,n,r){return new Oi(e,t,n,r)}function Ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,t){var n=e.alternate;return n===null?(n=ki(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Mi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ni(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Ai(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,be.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case se:return e=ki(31,n,t,a),e.elementType=se,e.lanes=o,e;case j:return Pi(n.children,a,o,t);case M:s=8,a|=24;break;case ee:return e=ki(12,n,t,a|2),e.elementType=ee,e.lanes=o,e;case re:return e=ki(13,n,t,a),e.elementType=re,e.lanes=o,e;case ie:return e=ki(19,n,t,a),e.elementType=ie,e.lanes=o,e;case ce:case ue:return e=a|32,e=ki(30,n,t,e),e.elementType=ue,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case te:s=10;break a;case N:s=9;break a;case ne:s=11;break a;case ae:s=14;break a;case oe:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ki(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Pi(e,t,n,r){return e=ki(7,e,r,t),e.lanes=n,e}function Fi(e,t,n){return e=ki(6,e,null,t),e.lanes=n,e}function Ii(e){var t=ki(18,null,null,0);return t.stateNode=e,t}function Li(e,t,n){return t=ki(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ri=new WeakMap;function zi(e,t){if(typeof e==`object`&&e){var n=Ri.get(e);return n===void 0?(t={value:e,source:t,stack:V(t)},Ri.set(e,t),t):n}return{value:e,source:t,stack:V(t)}}var Bi=[],Vi=0,Hi=null,Ui=0,Wi=[],Gi=0,Ki=null,qi=1,Ji=``;function Yi(e,t){Bi[Vi++]=Ui,Bi[Vi++]=Hi,Hi=e,Ui=t}function Xi(e,t,n){Wi[Gi++]=qi,Wi[Gi++]=Ji,Wi[Gi++]=Ki,Ki=e;var r=qi;e=Ji;var i=32-Ye(r)-1;r&=~(1<<i),n+=1;var a=32-Ye(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qi=1<<32-Ye(t)+i|n<<i|r,Ji=a+e}else qi=1<<a|n<<i|r,Ji=e}function Zi(e){e.return!==null&&(Yi(e,1),Xi(e,1,0))}function Qi(e){for(;e===Hi;)Hi=Bi[--Vi],Bi[Vi]=null,Ui=Bi[--Vi],Bi[Vi]=null;for(;e===Ki;)Ki=Wi[--Gi],Wi[Gi]=null,Ji=Wi[--Gi],Wi[Gi]=null,qi=Wi[--Gi],Wi[Gi]=null}function $i(e,t){Wi[Gi++]=qi,Wi[Gi++]=Ji,Wi[Gi++]=Ki,qi=t.id,Ji=t.overflow,Ki=e}var ea=null,ta=null,U=!1,na=null,ra=!1,ia=Error(i(519));function aa(e){throw da(zi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ia}function oa(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[yt]=e,t[bt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<Rf.length;n++)$(Rf[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),nn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),sn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||$f(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||aa(e,!0)}function sa(e){for(ea=e.return;ea;)switch(ea.tag){case 5:case 31:case 13:ra=!1;return;case 27:case 3:ra=!0;return;default:ea=ea.return}}function ca(e){if(e!==ea)return!1;if(!U)return sa(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&ta&&aa(e),sa(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ta=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ta=dm(e)}else t===27?(t=ta,Sp(e.type)?(e=um,um=null,ta=e):ta=t):ta=ea?lm(e.stateNode.nextSibling):null;return!0}function la(){ta=ea=null,U=!1}function ua(){var e=na;return e!==null&&(ud===null?ud=e:ud.push.apply(ud,e),na=null),e}function da(e){na===null?na=[e]:na.push(e)}var fa=ve(null),pa=null,ma=null;function ha(e,t,n){R(fa,t._currentValue),t._currentValue=n}function ga(e){e._currentValue=fa.current,ye(fa)}function _a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function va(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),_a(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),_a(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),_a(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ya(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Rr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===B.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&va(t,e,n,r),t.flags|=262144,e!==null}function ba(e){for(e=e.firstContext;e!==null;){if(!Rr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xa(e){pa=e,ma=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sa(e){return wa(pa,e)}function Ca(e,t){return pa===null&&xa(e),wa(e,t)}function wa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ma===null){if(e===null)throw Error(i(308));ma=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ma=ma.next=t;return n}var Ta=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ea=t.unstable_scheduleCallback,Da=t.unstable_NormalPriority,Oa={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ka(){return{controller:new Ta,data:new Map,refCount:0}}function Aa(e){e.refCount--,e.refCount===0&&Ea(Da,function(){e.controller.abort()})}function ja(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ma=null;function Na(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Pa=null,Fa=0,Ia=0,La=null;function Ra(e,t){if(Pa===null){var n=Pa=[];Fa=0,Ia=Nf(),La={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Fa++,t.then(za,za),t}function za(){if(--Fa===0&&(Ma=null,Pa!==null)){La!==null&&(La.status=`fulfilled`);var e=Pa;Pa=null,Ia=0,La=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Va=I.S;I.S=function(e,t){if(pd=Le(),typeof t==`object`&&t&&typeof t.then==`function`&&Ra(e,t),Ma!==null)for(var n=yf;n!==null;)ja(n,Ma),n=n.next;if(n=e.types,n!==null){for(var r=yf;r!==null;)ja(r,n),r=r.next;if(Ia!==0){r=Ma,r===null&&(r=Ma=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Va!==null&&Va(e,t)};var Ha=ve(null);function Ua(){var e=Ha.current;return e===null?Xu.pooledCache:e}function Wa(e,t){t===null?R(Ha,Ha.current):R(Ha,t.pool)}function Ga(){var e=Ua();return e===null?null:{parent:Oa._currentValue,pool:e}}var Ka=Error(i(460)),qa=Error(i(474)),Ja=Error(i(542)),Ya={then:function(){}};function Xa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Za(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,to(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(gn,gn);else{if(e=Xu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,to(e),e}throw $a=t,Ka}}function Qa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?($a=e,Ka):e}}var $a=null;function eo(){if($a===null)throw Error(i(459));var e=$a;return $a=null,e}function to(e){if(e===Ka||e===Ja)throw Error(i(483))}var no=null,ro=0;function io(e){var t=ro;return ro+=1,no===null&&(no=[]),Za(no,e,t)}function ao(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function oo(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function so(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ji(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Fi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===j?(e=d(e,t,n.props.children,r,n.key),ao(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===oe&&Qa(i)===t.type)?(t=a(t,n.props),ao(t,n),t.return=e,t):(t=Ni(n.type,n.key,n.props,null,e.mode,r),ao(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Li(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Pi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Fi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case k:return n=Ni(t.type,t.key,t.props,null,e.mode,n),ao(n,t),n.return=e,n;case A:return t=Li(t,e.mode,n),t.return=e,t;case oe:return t=Qa(t),f(e,t,n)}if(F(t)||P(t))return t=Pi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,io(t),n);if(t.$$typeof===te)return f(e,Ca(e,t),n);oo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case k:return n.key===i?l(e,t,n,r):null;case A:return n.key===i?u(e,t,n,r):null;case oe:return n=Qa(n),p(e,t,n,r)}if(F(n)||P(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,io(n),r);if(n.$$typeof===te)return p(e,t,Ca(e,n),r);oo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case k:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case A:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case oe:return r=Qa(r),m(e,t,n,r,i)}if(F(r)||P(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,io(r),i);if(r.$$typeof===te)return m(e,t,n,Ca(t,r),i);oo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&Yi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&Yi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&Yi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&Yi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&Yi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&Yi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===j&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case k:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===j){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),ao(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===oe&&Qa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ao(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===j?(c=Pi(o.props.children,e.mode,c,o.key),ao(c,o),c.return=e,e=c):(c=Ni(o.type,o.key,o.props,null,e.mode,c),ao(c,o),c.return=e,e=c)}return s(e);case A:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Li(o,e.mode,c),c.return=e,e=c}return s(e);case oe:return o=Qa(o),_(e,r,o,c)}if(F(o))return h(e,r,o,c);if(P(o)){if(l=P(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,io(o),c);if(o.$$typeof===te)return _(e,r,Ca(e,o),c);oo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Fi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ro=0;var i=_(e,t,n,r);return no=null,i}catch(t){if(t===Ka||t===Ja)throw t;var a=ki(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var co=so(!0),lo=so(!1),uo=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function po(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function mo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ho(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Yu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ei(e),Ti(e,null,n),t}return Si(e,r,t,n),Ei(e)}function go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ft(e,n)}}function W(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var _o=!1;function vo(){if(_o){var e=La;if(e!==null)throw e}}function yo(e,t,n,r){_o=!1;var i=e.updateQueue;uo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===Ia&&(_o=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:uo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),id|=o,e.lanes=o,e.memoizedState=d}}function bo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function xo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)bo(n[e],t)}var So=ve(null),Co=ve(0);function wo(e,t){e=nd,R(Co,e),R(So,t),nd=e|t.baseLanes}function To(){R(Co,nd),R(So,So.current)}function Eo(){nd=Co.current,ye(So),ye(Co)}var Do=ve(null),Oo=null;function ko(e){var t=e.alternate;R(Po,Po.current&1),R(Do,e),Oo===null&&(t===null||So.current!==null||t.memoizedState!==null)&&(Oo=e)}function Ao(e){R(Po,Po.current),R(Do,e),Oo===null&&(Oo=e)}function jo(e){e.tag===22?(R(Po,Po.current),R(Do,e),Oo===null&&(Oo=e)):Mo()}function Mo(){R(Po,Po.current),R(Do,Do.current)}function No(e){ye(Do),Oo===e&&(Oo=null),ye(Po)}var Po=ve(0);function Fo(e,t){R(Do,Do.current),R(Po,t)}function Io(e){ye(Po),ye(Do),Oo===e&&(Oo=null)}function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ro=0,G=null,K=null,zo=null,q=!1,J=!1,Bo=!1,Vo=0,Ho=0,Uo=null,Wo=0;function Go(){throw Error(i(321))}function Ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rr(e[n],t[n]))return!1;return!0}function qo(e,t,n,r,i,a){return Ro=a,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?uc:dc,Bo=!1,a=n(r,i),Bo=!1,J&&(a=Yo(t,n,r,i)),Jo(e),a}function Jo(e){I.H=lc;var t=K!==null&&K.next!==null;if(Ro=0,zo=K=G=null,q=!1,Ho=0,Uo=null,t)throw Error(i(300));e===null||Dc||(e=e.dependencies,e!==null&&ba(e)&&(Dc=!0))}function Yo(e,t,n,r){G=e;var a=0;do{if(J&&(Uo=null),Ho=0,J=!1,25<=a)throw Error(i(301));if(a+=1,zo=K=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}I.H=fc,o=t(n,r)}while(J);return o}function Xo(){var e=I.H,t=e.useState()[0];return t=typeof t.then==`function`?rs(t):t,e=e.useState()[0],(K===null?null:K.memoizedState)!==e&&(G.flags|=1024),t}function Zo(){var e=Vo!==0;return Vo=0,e}function Qo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function $o(e){if(q){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}q=!1}Ro=0,zo=K=G=null,J=!1,Ho=Vo=0,Uo=null}function es(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zo===null?G.memoizedState=zo=e:zo=zo.next=e,zo}function ts(){if(K===null){var e=G.alternate;e=e===null?null:e.memoizedState}else e=K.next;var t=zo===null?G.memoizedState:zo.next;if(t!==null)zo=t,K=e;else{if(e===null)throw G.alternate===null?Error(i(467)):Error(i(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},zo===null?G.memoizedState=zo=e:zo=zo.next=e}return zo}function ns(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rs(e){var t=Ho;return Ho+=1,Uo===null&&(Uo=[]),e=Za(Uo,e,t),t=G,(zo===null?t.memoizedState:zo.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?uc:dc),e}function is(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return rs(e);if(e.$$typeof===de)return;if(e.$$typeof===te)return Sa(e)}throw Error(i(438,String(e)))}function as(e){var t=null,n=G.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=G.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??(t={data:[],index:0}),n===null&&(n=ns(),G.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=le;return t.index++,n}function os(e,t){return typeof t==`function`?t(e):t}function ss(e){return cs(ts(),K,e)}function cs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Ro&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ia&&(d=!0);else if((Ro&p)===p){u=u.next,p===Ia&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,G.lanes|=p,id|=p;f=u.action,Bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,G.lanes|=f,id|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Rr(o,e.memoizedState)&&(Dc=!0,d&&(n=La,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ls(e){var t=ts(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Rr(o,t.memoizedState)||(Dc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function us(e,t,n){var r=G,a=ts(),o=U;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Rr((K||a).memoizedState,n);if(s&&(a.memoizedState=n,Dc=!0),a=a.queue,Fs(ps.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||zo!==null&&!!(zo.memoizedState.tag&1),As(e?9:8,{destroy:void 0},fs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Xu===null)throw Error(i(349));o||Ro&127||ds(r,t,n)}return n}function ds(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t=ns(),G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fs(e,t,n,r){t.value=n,t.getSnapshot=r,ms(t)&&hs(e)}function ps(e,t,n){return n(function(){ms(t)&&hs(e)})}function ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rr(e,n)}catch{return!0}}function hs(e){var t=wi(e,2);t!==null&&Md(t,e,2)}function gs(e){var t=es();if(typeof e==`function`){var n=e;if(e=n(),Bo){Je(!0);try{n()}finally{Je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:e},t}function _s(e,t,n,r){return e.baseState=n,cs(e,K,typeof r==`function`?r:os)}function vs(e,t,n,r,a){if(oc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};I.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ys(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ys(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=I.T,o={};o.types=a===null?null:a.types,I.T=o;try{var s=n(i,r),c=I.S;c!==null&&c(o,s),bs(e,t,s)}catch(n){Ss(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),I.T=a}}else try{a=n(i,r),bs(e,t,a)}catch(n){Ss(e,t,n)}}function bs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){xs(e,t,n)},function(n){return Ss(e,t,n)}):xs(e,t,n)}function xs(e,t,n){t.status=`fulfilled`,t.value=n,Cs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ys(e,n)))}function Ss(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Cs(t),t=t.next;while(t!==r)}e.action=null}function Cs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ws(e,t){return t}function Ts(e,t){if(U){var n=Xu.formState;if(n!==null){a:{var r=G;if(U){if(ta){b:{for(var i=ta,a=ra;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){ta=lm(i.nextSibling),r=i.data===`F!`;break a}}aa(r)}r=!1}r&&(t=n[0])}}return n=es(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:t},n.queue=r,n=rc.bind(null,G,r),r.dispatch=n,r=gs(!1),a=ac.bind(null,G,!1,r.queue),r=es(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=vs.bind(null,G,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Es(e){return Ds(ts(),K,e)}function Ds(e,t,n){if(t=cs(e,t,ws)[0],e=ss(os)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=rs(t)}catch(e){throw e===Ka?Ja:e}else r=t;t=ts();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(G.flags|=2048,As(9,{destroy:void 0},Os.bind(null,i,n),null)),[r,a,e]}function Os(e,t){e.action=t}function ks(e){var t=ts(),n=K;if(n!==null)return Ds(t,n,e);ts(),t=t.memoizedState,n=ts();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function As(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=G.updateQueue,t===null&&(t=ns(),G.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function js(){return ts().memoizedState}function Ms(e,t,n,r){var i=es();G.flags|=e,i.memoizedState=As(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ns(e,t,n,r){var i=ts();r=r===void 0?null:r;var a=i.memoizedState.inst;K!==null&&r!==null&&Ko(r,K.memoizedState.deps)?i.memoizedState=As(t,a,n,r):(G.flags|=e,i.memoizedState=As(1|t,a,n,r))}function Ps(e,t){Ms(8390656,8,e,t)}function Fs(e,t){Ns(2048,8,e,t)}function Is(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=ns(),G.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ls(e){var t=ts().memoizedState;return Is({ref:t,nextImpl:e}),function(){if(Yu&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Rs(e,t){return Ns(4,2,e,t)}function zs(e,t){return Ns(4,4,e,t)}function Bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vs(e,t,n){n=n==null?null:n.concat([e]),Ns(4,4,Bs.bind(null,t,e),n)}function Hs(){}function Us(e,t){var n=ts();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ws(e,t){var n=ts();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Ko(t,r[1]))return r[0];if(r=e(),Bo){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[r,t],r}function Gs(e,t,n){return n===void 0||Ro&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ad(),G.lanes|=e,id|=e,n)}function Ks(e,t,n,r){return Rr(n,t)?n:So.current===null?!(Ro&106)||Ro&1073741824&&!(Q&261930)?(Dc=!0,e.memoizedState=n):(e=Ad(),G.lanes|=e,id|=e,t):(e=Gs(e,n,r),Rr(e,t)||(Dc=!0),e)}function qs(e,t,n,r,i){var a=L.p;L.p=a!==0&&8>a?a:8;var o=I.T,s={};s.types=o===null?null:o.types,I.T=s,ac(e,!1,t,n);try{var c=i(),l=I.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?ic(e,t,Ba(c,r),kd(e)):ic(e,t,r,kd(e))}catch(n){ic(e,t,{then:function(){},status:`rejected`,reason:n},kd())}finally{L.p=a,o!==null&&s.types!==null&&(o.types=s.types),I.T=o}}function Js(){}function Ys(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Xs(e).queue;qs(e,a,t,he,n===null?Js:function(){return Zs(e),n(r)})}function Xs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:he},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zs(e){var t=Xs(e);t.next===null&&(t=e.alternate.memoizedState),ic(e,t.next.queue,{},kd())}function Qs(){return Sa(sh)}function $s(){return ts().memoizedState}function ec(){return ts().memoizedState}function tc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kd();e=mo(n);var r=ho(t,e,n);r!==null&&(Md(r,t,n),go(r,t,n)),t={cache:ka()},e.payload=t;return}t=t.return}}function nc(e,t,n){var r=kd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},oc(e)?sc(t,n):(n=Ci(e,t,n,r),n!==null&&(Md(n,e,r),cc(n,t,r)))}function rc(e,t,n){ic(e,t,n,kd())}function ic(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(oc(e))sc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Rr(s,o))return Si(e,t,i,0),Xu===null&&xi(),!1}catch{}if(n=Ci(e,t,i,r),n!==null)return Md(n,e,r),cc(n,t,r),!0}return!1}function ac(e,t,n,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},oc(e)){if(t)throw Error(i(479))}else t=Ci(e,n,r,2),t!==null&&Md(t,e,2)}function oc(e){var t=e.alternate;return e===G||t!==null&&t===G}function sc(e,t){J=q=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ft(e,n)}}var lc={readContext:Sa,use:is,useCallback:Go,useContext:Go,useEffect:Go,useImperativeHandle:Go,useLayoutEffect:Go,useInsertionEffect:Go,useMemo:Go,useReducer:Go,useRef:Go,useState:Go,useDebugValue:Go,useDeferredValue:Go,useTransition:Go,useSyncExternalStore:Go,useId:Go,useHostTransitionStatus:Go,useFormState:Go,useActionState:Go,useOptimistic:Go,useMemoCache:Go,useCacheRefresh:Go,useEffectEvent:Go},uc={readContext:Sa,use:is,useCallback:function(e,t){return es().memoizedState=[e,t===void 0?null:t],e},useContext:Sa,useEffect:Ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ms(4194308,4,Bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){Ms(4,2,e,t)},useMemo:function(e,t){var n=es();t=t===void 0?null:t;var r=e();if(Bo){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=es();if(n!==void 0){var i=n(t);if(Bo){Je(!0);try{n(t)}finally{Je(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=nc.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=es();return e={current:e},t.memoizedState=e},useState:function(e){e=gs(e);var t=e.queue,n=rc.bind(null,G,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Hs,useDeferredValue:function(e,t){return Gs(es(),e,t)},useTransition:function(){var e=gs(!1);return e=qs.bind(null,G,e.queue,!0,!1),es().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=G,a=es();if(U){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Xu===null)throw Error(i(349));Q&127||ds(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ps(ps.bind(null,r,o,e),[e]),r.flags|=2048,As(9,{destroy:void 0},fs.bind(null,r,o,n,t),null),n},useId:function(){var e=es(),t=Xu.identifierPrefix;if(U){var n=Ji,r=qi;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Qs,useFormState:Ts,useActionState:Ts,useOptimistic:function(e){var t=es();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ac.bind(null,G,!0,n),n.dispatch=t,[e,t]},useMemoCache:as,useCacheRefresh:function(){return es().memoizedState=tc.bind(null,G)},useEffectEvent:function(e){var t=es(),n={impl:e};return t.memoizedState=n,function(){if(Yu&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},dc={readContext:Sa,use:is,useCallback:Us,useContext:Sa,useEffect:Fs,useImperativeHandle:Vs,useInsertionEffect:Rs,useLayoutEffect:zs,useMemo:Ws,useReducer:ss,useRef:js,useState:function(){return ss(os)},useDebugValue:Hs,useDeferredValue:function(e,t){return Ks(ts(),K.memoizedState,e,t)},useTransition:function(){var e=ss(os)[0],t=ts().memoizedState;return[typeof e==`boolean`?e:rs(e),t]},useSyncExternalStore:us,useId:$s,useHostTransitionStatus:Qs,useFormState:Es,useActionState:Es,useOptimistic:function(e,t){return _s(ts(),K,e,t)},useMemoCache:as,useCacheRefresh:ec,useEffectEvent:Ls},fc={readContext:Sa,use:is,useCallback:Us,useContext:Sa,useEffect:Fs,useImperativeHandle:Vs,useInsertionEffect:Rs,useLayoutEffect:zs,useMemo:Ws,useReducer:ls,useRef:js,useState:function(){return ls(os)},useDebugValue:Hs,useDeferredValue:function(e,t){var n=ts();return K===null?Gs(n,e,t):Ks(n,K.memoizedState,e,t)},useTransition:function(){var e=ls(os)[0],t=ts().memoizedState;return[typeof e==`boolean`?e:rs(e),t]},useSyncExternalStore:us,useId:$s,useHostTransitionStatus:Qs,useFormState:ks,useActionState:ks,useOptimistic:function(e,t){var n=ts();return K===null?(n.baseState=e,[e,n.queue.dispatch]):_s(n,K,e,t)},useMemoCache:as,useCacheRefresh:ec,useEffectEvent:Ls};function pc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kd(),i=mo(r);i.payload=t,n!=null&&(i.callback=n),t=ho(e,i,r),t!==null&&(Md(t,e,r),go(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kd(),i=mo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ho(e,i,r),t!==null&&(Md(t,e,r),go(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kd(),r=mo(n);r.tag=2,t!=null&&(r.callback=t),t=ho(e,r,n),t!==null&&(Md(t,e,n),go(t,e,n))}};function hc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(i,a):!0}function gc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mc.enqueueReplaceState(t,t.state,null)}function _c(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function vc(e){_i(e)}function yc(e){console.error(e)}function bc(e){_i(e)}function xc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Sc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Cc(e,t,n){return n=mo(n),n.tag=3,n.payload={element:null},n.callback=function(){xc(e,t)},n}function Y(e){return e=mo(e),e.tag=3,e}function wc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Sc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Sc(t,n,r),typeof i!=`function`&&(gd===null?gd=new Set([this]):gd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Tc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ya(t,n,a,!0),n=Do.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Oo===null?Wd():n.alternate===null&&rd===0&&(rd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ya?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),pf(e,r,a)),!1;case 22:return n.flags|=65536,r===Ya?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),pf(e,r,a)),!1}throw Error(i(435,n.tag))}return pf(e,r,a),Wd(),!1}if(U)return t=Do.current,t===null?(r!==ia&&(t=Error(i(423),{cause:r}),da(zi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=zi(r,n),a=Cc(e.stateNode,r,a),W(e,a),rd!==4&&(rd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ia&&(e=Error(i(422),{cause:r}),da(zi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=zi(o,n),ld===null?ld=[o]:ld.push(o),rd!==4&&(rd=2),t===null)return!0;r=zi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Cc(n.stateNode,r,e),W(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gd===null||!gd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Y(a),wc(a,e,n,r),W(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Ec=Error(i(461)),Dc=!1;function Oc(e,t,n,r){t.child=e===null?lo(t,null,n,r):co(t,e.child,n,r)}function kc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return xa(t),r=qo(e,t,n,o,a,i),s=Zo(),e!==null&&!Dc?(Qo(e,t,i),rl(e,t,i)):(U&&s&&Zi(t),t.flags|=1,Oc(e,t,r,i),t.child)}function Ac(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ai(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,jc(e,t,a,r,i)):(e=Ni(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!il(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?zr:n,n(o,r)&&e.ref===t.ref)return rl(e,t,i)}return t.flags|=1,e=ji(a,r),e.ref=t.ref,e.return=t,t.child=e}function jc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(zr(a,r)&&e.ref===t.ref){if(Dc=!1,t.pendingProps=r=a,il(e,i))e.flags&131072&&(Dc=!0);else return t.lanes=e.lanes,rl(e,t,i)}}return zc(e,t,n,r,i)}function Mc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wa(t,a===null?null:a.cachePool),a===null?To():wo(t,a),jo(t);else return r=t.lanes=536870912,Pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Wa(t,null),To(),Mo()):(Wa(t,a.cachePool),wo(t,a),Mo(),t.memoizedState=null);return Oc(e,t,i,n),t.child}function Nc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Pc(e,t,n,r,i){var a=Ua();return a=a===null?null:{parent:Oa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Wa(t,null),To(),jo(t),e!==null&&ya(e,t,r,!0),t.childLanes=i,null}function Fc(e,t){return t=Jc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ic(e,t,n){return co(t,e.child,null,n),e=Fc(t,t.pendingProps),e.flags|=2,No(t),t.memoizedState=null,e}function Lc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=Fc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Nc(null,e);if(Ao(t),(e=ta)?(e=am(e,ra),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ki===null?null:{id:qi,overflow:Ji},retryLane:536870912,hydrationErrors:null},n=Ii(e),n.return=t,t.child=n,ea=t,ta=null)):e=null,e===null)throw aa(t);return t.lanes=536870912,null}return Fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Ao(t),a){if(t.flags&256)t.flags&=-257,t=Ic(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Dc||ya(e,t,n,!1),a=(n&e.childLanes)!==0,Dc||a){if(So.current===null){if(r=Xu,r!==null&&(s=pt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,wi(e,s),Md(r,e,s),Ec;Wd()}t=Ic(e,t,n)}else e=o.treeContext,ta=lm(s.nextSibling),ea=t,U=!0,na=null,ra=!1,e!==null&&$i(t,e),t=Fc(t,r),t.flags|=134221824;return t}return e=ji(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Rc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zc(e,t,n,r,i){return xa(t),n=qo(e,t,n,r,void 0,i),r=Zo(),e!==null&&!Dc?(Qo(e,t,i),rl(e,t,i)):(U&&r&&Zi(t),t.flags|=1,Oc(e,t,n,i),t.child)}function Bc(e,t,n,r,i,a){return xa(t),t.updateQueue=null,n=Yo(t,r,n,i),Jo(e),r=Zo(),e!==null&&!Dc?(Qo(e,t,a),rl(e,t,a)):(U&&r&&Zi(t),t.flags|=1,Oc(e,t,n,a),t.child)}function Vc(e,t,n,r,i){if(xa(t),t.stateNode===null){var a=Di,o=n.contextType;typeof o==`object`&&o&&(a=Sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=mc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},fo(t),o=n.contextType,a.context=typeof o==`object`&&o?Sa(o):Di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(pc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&mc.enqueueReplaceState(a,a.state,null),yo(t,r,a,i),vo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=_c(n,s);a.props=c;var l=a.context,u=n.contextType;o=Di,typeof u==`object`&&u&&(o=Sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&gc(t,a,r,o),uo=!1;var f=t.memoizedState;a.state=f,yo(t,r,a,i),vo(),l=t.memoizedState,s||f!==l||uo?(typeof d==`function`&&(pc(t,n,d,r),l=t.memoizedState),(c=uo||hc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,po(e,t),o=t.memoizedProps,u=_c(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Di,typeof l==`object`&&l&&(c=Sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&gc(t,a,r,c),uo=!1,f=t.memoizedState,a.state=f,yo(t,r,a,i),vo();var p=t.memoizedState;o!==d||f!==p||uo||e!==null&&e.dependencies!==null&&ba(e.dependencies)?(typeof s==`function`&&(pc(t,n,s,r),p=t.memoizedState),(u=uo||hc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ba(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Rc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=co(t,e.child,null,i),t.child=co(t,null,n,i)):Oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=rl(e,t,i),e}function Hc(e,t,n,r){return la(),t.flags|=256,Oc(e,t,n,r),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wc(e){return{baseLanes:e,cachePool:Ga()}}function Gc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=sd),e}function Kc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Po.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(U){if(i?ko(t):Mo(),(e=ta)?(e=am(e,ra),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ki===null?null:{id:qi,overflow:Ji},retryLane:536870912,hydrationErrors:null},n=Ii(e),n.return=t,t.child=n,ea=t,ta=null)):e=null,e===null)throw aa(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Mo(),i=t.mode,a=Jc({mode:`hidden`,children:a},i),r=Pi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Wc(n),r.childLanes=Gc(e,o,n),t.memoizedState=Uc,Nc(null,r)):(ko(t),qc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Xc(e,t,a,o,r,c,s,n)}return i?(Mo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=ji(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Pi(i,a,n,null),i.flags|=2):i=ji(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Nc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Wc(n):(a=i.cachePool,a===null?a=Ga():(s=Oa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Gc(e,o,n),t.memoizedState=Uc,Nc(e.child,r)):(ko(t),n=e.child,e=n.sibling,n=ji(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function qc(e,t){return t=Jc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Jc(e,t){return e=ki(22,e,null,t),e.lanes=0,e}function Yc(e,t,n){return co(t,e.child,null,n),e=qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(ko(t),t.flags&=-257,Yc(e,t,c)):t.memoizedState===null?(Mo(),o=a.fallback,s=t.mode,a=Jc({mode:`visible`,children:a.children},s),o=Pi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,co(t,e.child,null,c),a=t.child,a.memoizedState=Wc(c),a.childLanes=Gc(e,r,c),t.memoizedState=Uc,Nc(null,a)):(Mo(),t.child=e.child,t.flags|=128,null);if(ko(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,da({value:a,source:null,stack:null})),Yc(e,t,c)}if(Dc||ya(e,t,c,!1),r=(c&e.childLanes)!==0,Dc||r){if(So.current!==null)return Yc(e,t,c);if(r=Xu,r!==null&&(a=pt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,wi(e,a),Md(r,e,a),Ec;return om(o)||Wd(),Yc(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,ta=lm(o.nextSibling),ea=t,U=!0,na=null,ra=!1,e!==null&&$i(t,e),t=qc(t,a.children),t.flags|=134221824,t)}function Zc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_a(e.return,t,n)}function Qc(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Lo(n)===null&&(t=e),e=e.sibling}return t}function $c(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function el(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function tl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Po.current;if(t.flags&128)return Fo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Fo(t,o),i===`backwards`&&e!==null?(el(e),Oc(e,t,r,n),el(e)):Oc(e,t,r,n),r=U?Ui:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,n,t);else if(e.tag===19)Zc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Qc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,el(t)),$c(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$c(t,!0,n,null,a,r);break;case`together`:$c(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=Qc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$c(t,!1,i,n,a,r)}return t.child}function nl(e,t,n){var r=t.pendingProps;return ha(t,t.type,r.value),Oc(e,t,r.children,n),t.child}function rl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),id|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ya(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ji(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ji(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function il(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ba(e)))}function al(e,t,n){switch(t.tag){case 3:Se(t,t.stateNode.containerInfo),ha(t,Oa,e.memoizedState.cache),la();break;case 27:case 5:we(t);break;case 4:Se(t,t.stateNode.containerInfo);break;case 10:ha(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ao(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return ko(t),t.flags|=128,null;r=ya(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Kc(e,t,n):(ko(t),e=rl(e,t,n),e===null?null:e.sibling)}ko(t);break;case 19:if(t.flags&128)return tl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||(ya(e,t,n,!1),r=(n&t.childLanes)!==0),i){if(r)return tl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Fo(t,Po.current),r)break;return null;case 22:return t.lanes=0,Mc(e,t,n,t.pendingProps);case 24:ha(t,Oa,e.memoizedState.cache)}return rl(e,t,n)}function ol(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Dc=!0;else{if(!il(e,n)&&!(t.flags&128))return Dc=!1,al(e,t,n);Dc=!!(e.flags&131072)}}else Dc=!1,U&&t.flags&1048576&&Xi(t,Ui,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Qa(t.elementType),t.type=e,typeof e==`function`)Ai(e)?(r=_c(e,r),t.tag=1,t=Vc(null,t,e,r,n)):(t.tag=0,t=zc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ne){t.tag=11,t=kc(null,t,e,r,n);break a}if(a===ae){t.tag=14,t=Ac(null,t,e,r,n);break a}if(a===te){t.tag=10,t.type=e,t=nl(null,t,n);break a}}throw t=me(e)||e,Error(i(306,t,``))}}return t;case 0:return zc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=_c(r,t.pendingProps),Vc(e,t,r,a,n);case 3:a:{if(Se(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,po(e,t),yo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ha(t,Oa,r),r!==o.cache&&va(t,[Oa],n,!0),vo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Hc(e,t,r,n);break a}if(r!==a){a=zi(Error(i(424)),t),da(a),t=Hc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(ta=lm(e.firstChild),ea=t,U=!0,na=null,ra=!0,n=lo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(la(),r===a){t=rl(e,t,n);break a}Oc(e,t,r,n)}t=t.child}return t;case 26:return Rc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(t.stateNode=fp(t.type,t.pendingProps,xe.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return we(t),e===null&&U&&(r=t.stateNode=hm(t.type,t.pendingProps,xe.current),ea=t,ra=!0,a=ta,Sp(t.type)?(um=a,ta=lm(r.firstChild)):ta=a),Oc(e,t,t.pendingProps.children,n),Rc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((a=r=ta)&&(r=rm(r,t.type,t.pendingProps,ra),r===null?a=!1:(t.stateNode=r,ea=t,ta=lm(r.firstChild),ra=!1,a=!0)),a||aa(t)),we(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=qo(e,t,Xo,null,null,n),sh._currentValue=a),Rc(e,t),Oc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=ta)&&(n=im(n,t.pendingProps,ra),n===null?e=!1:(t.stateNode=n,ea=t,ta=null,e=!0)),e||aa(t)),null;case 13:return Kc(e,t,n);case 4:return Se(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=co(t,null,r,n):Oc(e,t,r,n),t.child;case 11:return kc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Rc(e,t),Oc(e,t,r,n),t.child;case 8:return Oc(e,t,t.pendingProps.children,n),t.child;case 12:return Oc(e,t,t.pendingProps.children,n),t.child;case 10:return nl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,xa(t),a=Sa(a),r=r(a),t.flags|=1,Oc(e,t,r,n),t.child;case 14:return Ac(e,t,t.type,t.pendingProps,n);case 15:return jc(e,t,t.type,t.pendingProps,n);case 19:return tl(e,t,n);case 31:return Lc(e,t,n);case 22:return Mc(e,t,n,t.pendingProps);case 24:return xa(t),r=Sa(Oa),e===null?(a=Ua(),a===null&&(a=Xu,o=ka(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},fo(t),ha(t,Oa,a)):((e.lanes&n)!==0&&(po(e,t),yo(t,null,null,n),vo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ha(t,Oa,r),r!==a.cache&&va(t,[Oa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ha(t,Oa,r))),Oc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:U&&Zi(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Rc(e,t),Oc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function sl(e){e.flags|=4}function cl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Vd())e.flags|=8192;else throw $a=Ya,qa}}else e.flags&=-16777217}function ll(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Vd())e.flags|=8192;else throw $a=Ya,qa}}function ul(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:st(),e.lanes|=t,cd|=t)}function X(e,t){if(!U)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function dl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fl(e,t,n){var r=t.pendingProps;switch(Qi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dl(t),null;case 1:return dl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ga(Oa),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ca(t)?sl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ua())),dl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(sl(t),o===null?(dl(t),cl(t,a,null,r,n)):(dl(t),ll(t,o))):o?o===e.memoizedState?(dl(t),t.flags&=-16777217):(sl(t),dl(t),ll(t,o)):(e=e.memoizedProps,e!==r&&sl(t),dl(t),cl(t,a,e,r,n)),null;case 27:if(Te(t),n=xe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&sl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return dl(t),t.subtreeFlags&=-33554433,null}e=be.current,ca(t)?oa(t,e):(e=hm(a,r,n),t.stateNode=e,sl(t))}return dl(t),t.subtreeFlags&=-33554433,null;case 5:if(Te(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&sl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return dl(t),t.subtreeFlags&=-33554433,null}if(o=be.current,ca(t))oa(t,o);else{var s=lp(xe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[yt]=t,o[bt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&sl(t)}}return dl(t),t.subtreeFlags&=-33554433,cl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&sl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=xe.current,ca(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ea,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[yt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||$f(e.nodeValue,n)),e||aa(t,!0)}else e=lp(e).createTextNode(r),e[yt]=t,t.stateNode=e}return dl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ca(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[yt]=t}else la(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dl(t),e=!1}else n=ua(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(No(t),t):(No(t),null);if(t.flags&128)throw Error(i(558))}return dl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ca(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[yt]=t}else la(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dl(t),a=!1}else a=ua(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(No(t),t):(No(t),null)}return No(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ul(t,t.updateQueue),dl(t),null);case 4:return Ce(),e===null&&Uf(t.stateNode.containerInfo),t.flags|=67108864,dl(t),null;case 10:return ga(t.type),dl(t),null;case 19:if(Io(t),r=t.memoizedState,r===null)return dl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)X(r,!1);else{if(rd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Lo(e),o!==null){for(t.flags|=128,X(r,!1),e=o.updateQueue,t.updateQueue=e,ul(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Mi(n,e),n=n.sibling;return Fo(t,Po.current&1|2),U&&Yi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Le()>md&&(t.flags|=128,a=!0,X(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Lo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ul(t,e),X(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!U)return dl(t),null}else 2*Le()-r.renderingStartTime>md&&n!==536870912&&(t.flags|=128,a=!0,X(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Le(),e.sibling=null,o=Po.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||U?Fo(t,o):(n=o,R(Do,t),R(Po,n),Oo===null&&(Oo=t)),U&&Yi(t,r.treeForkCount),e}return dl(t),null;case 22:case 23:return No(t),Eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(dl(t),t.subtreeFlags&6&&(t.flags|=8192)):dl(t),n=t.updateQueue,n!==null&&ul(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ye(Ha),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ga(Oa),dl(t),null;case 25:return null;case 30:return t.flags|=33554432,dl(t),null}throw Error(i(156,t.tag))}function pl(e,t){switch(Qi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ga(Oa),Ce(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Te(t),null;case 31:if(t.memoizedState!==null){if(No(t),t.alternate===null)throw Error(i(340));la()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(No(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));la()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Io(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ce(),null;case 10:return ga(t.type),null;case 22:case 23:return No(t),Eo(),e!==null&&ye(Ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ga(Oa),null;case 25:return null;default:return null}}function ml(e,t){switch(Qi(t),t.tag){case 3:ga(Oa),Ce();break;case 26:case 27:case 5:Te(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&No(t);break;case 13:No(t);break;case 19:Io(t);break;case 10:ga(t.type);break;case 22:case 23:No(t),Eo(),e!==null&&ye(Ha);break;case 24:ga(Oa)}}function hl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){ff(t,t.return,e)}}function gl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){ff(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){ff(t,t.return,e)}}function _l(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{xo(t,n)}catch(t){ff(e,e.return,t)}}}function vl(e,t,n){n.props=_c(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){ff(e,t,n)}}function yl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=mi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){ff(e,t,n)}}function bl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){ff(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){ff(e,t,n)}else n.current=null}}function xl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Sl(e){for(var t=e.return;t!==null&&(Tl(t)&&em(e.stateNode,t.stateNode),!wl(t));)t=t.return}function Cl(e){for(var t=e.return;t!==null&&(Tl(t)&&tm(e.stateNode,t.stateNode),!wl(t));)t=t.return}function wl(e){return e.tag===5||e.tag===3||e.tag===27}function Tl(e){return e&&e.tag===7&&e.stateNode!==null}function El(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){ff(e,e.return,t)}}function Dl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[bt]=t}catch(t){ff(e,e.return,t)}}function Ol(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function kl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn)),xl(e,r),Ut=!0;else if(i!==4&&(i===27&&(xl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Al(e,t,n,r),e=e.sibling;e!==null;)Al(e,t,n,r),e=e.sibling}function jl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),xl(e,r),Ut=!0;else if(i!==4&&(i===27&&(xl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(jl(e,t,n,r),e=e.sibling;e!==null;)jl(e,t,n,r),e=e.sibling}function Ml(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[yt]=e,t[bt]=n}catch(t){ff(e,e.return,t)}}var Nl=!1,Pl=null;function Fl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Nl=!0)}var Il=null;function Ll(){var e=Il;return Il=null,e}var Rl=0;function zl(e,t,n,r,i){return Rl=0,Bl(e.child,t,n,r,i)}function Bl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Nl=!0,Tp(o,Rl===0?t:t+`_`+Rl,n),Rl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Bl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Vl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Vl(e.child,t),e=e.sibling}function Hl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Hl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=gi(t.default,t.share),t!==`none`&&(zl(e,n,t,null,!1)||Vl(e.child,!1))}e=e.sibling}}function Ul(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=mi(r,n),a=gi(r.default,n.paired?r.share:r.enter);a===`none`?Hl(e):zl(e,i,a,null,!1)?(Hl(e),n.paired||t||jd(e,r.onEnter)):Vl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ul(e,t),e=e.sibling;else Hl(e)}function Wl(e){if(Pl!==null&&Pl.size!==0){var t=Pl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=gi(n.default,n.share);if(a!==`none`&&(zl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,jd(e,n.onShare)):Vl(e.child,!1)),t.delete(r),t.size===0)break}}}Wl(e)}e=e.sibling}}}function Gl(e){if(e.tag===30){var t=e.memoizedProps,n=mi(t,e.stateNode),r=Pl===null?void 0:Pl.get(n),i=gi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(zl(e,n,i,null,!1)?r===void 0?jd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Pl.delete(n),jd(e,t.onShare)):Vl(e.child,!1)),Pl!==null&&Wl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Gl(e),e=e.sibling;else Pl!==null&&Wl(e)}function Kl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=mi(t,e.stateNode);t=gi(t.default,t.update),e.flags&=-5,t!==`none`&&zl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Kl(e);e=e.sibling}}function ql(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Vl(e.child,!1))}ql(e)}e=e.sibling}}function Jl(e){if(e.tag===30)e.stateNode.paired=null,Vl(e.child,!1),ql(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jl(e),e=e.sibling;else ql(e)}function Yl(e){for(e=e.child;e!==null;)e.tag===30?Vl(e.child,!1):e.subtreeFlags&33554432&&Yl(e),e=e.sibling}function Xl(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Rl<a.length){var l=a[Rl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Rl===0?n:n+`_`+Rl,i),s&&e.flags&4||(Il===null&&(Il=[]),Il.push(c,Rl===0?r:r+`_`+Rl,t.memoizedProps)),Rl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Xl(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function Zl(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=mi(n,r),a=gi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Rl=0,i=Xl(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||jd(e,n.onUpdate))}else e.subtreeFlags&33554432&&Zl(e,t);e=e.sibling}}var Ql=!1,$l=!1,eu=!1,tu=!1,nu=typeof WeakSet==`function`?WeakSet:Set,ru=null,iu=!1,au=!1,ou=!1,su=!1;function cu(e,t,n){if(e=e.containerInfo,sp=gh,e=Wr(e),Gr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,ru=t,t=n?9270:1024;ru!==null;){if(e=ru,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Gl(r[a]);if(e.alternate===null&&e.flags&2)n&&Fl(e),lu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Gl(r),lu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Fl(e),lu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,ru=r):(n&&Kl(e),lu(n))}}Pl=null}function lu(e){for(;ru!==null;){var t=ru,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=_c(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){ff(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=mi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=gi(a.default,a.update),a!==`none`&&zl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,ru=r;break}ru=t.return}}function uu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Au(e,n),r&4&&hl(5,n);break;case 1:if(Au(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){ff(n,n.return,e)}else{var i=_c(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){ff(n,n.return,e)}}}r&64&&_l(n),r&512&&yl(n,n.return);break;case 3:if(Au(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{xo(e,t)}catch(e){ff(n,n.return,e)}}break;case 27:t===null&&r&4&&Ml(n);case 26:case 5:Au(e,n),t===null&&r&4&&El(n),r&512&&yl(n,n.return);break;case 12:Au(e,n);break;case 31:Au(e,n),r&4&&yu(e,n);break;case 13:Au(e,n),r&4&&bu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||Ql,!r){var a=t!==null&&t.memoizedState!==null||$l;t=Ql,i=$l,Ql=r,($l=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Mu(e,n,r)):Au(e,n),Ql=t,$l=i}break;case 30:Au(e,n),r&512&&yl(n,n.return);break;case 7:r&512&&yl(n,n.return);default:Au(e,n)}}function du(e,t){for(e=e.child;e!==null;)fu(e,t),e=e.sibling}function fu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){ff(e,e.return,t)}pu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Ut=!0}catch(t){ff(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){ff(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&du(e,t);break;default:du(e,t)}}function pu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:fu(n,r);break a;case 22:n.memoizedState===null&&pu(n,r);break a;default:pu(n,r)}}e=e.sibling}}function mu(e){var t=e.alternate;t!==null&&(e.alternate=null,mu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ot(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hu=null,gu=!1;function _u(e,t,n){for(n=n.child;n!==null;)vu(e,t,n),n=n.sibling}function vu(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount==`function`)try{qe.onCommitFiberUnmount(Ke,n)}catch{}switch(n.tag){case 26:$l||bl(n,t),_u(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!$l&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$l||bl(n,t),Cl(n);var r=hu,i=gu;Sp(n.type)&&(hu=n.stateNode,gu=!1),_u(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),hu=r,gu=i;break;case 5:$l||bl(n,t),Cl(n);case 6:if(n.tag===6&&Cl(n),r=hu,i=gu,hu=null,_u(e,t,n),hu=r,gu=i,hu!==null){if(gu)try{(hu.nodeType===9?hu.body:hu.nodeName===`HTML`?hu.ownerDocument.body:hu).removeChild(n.stateNode),Ut=!0}catch(e){ff(n,t,e)}else try{hu.removeChild(n.stateNode),Ut=!0}catch(e){ff(n,t,e)}}break;case 18:hu!==null&&(gu?(e=hu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(hu,n.stateNode));break;case 4:r=hu,i=gu,hu=n.stateNode.containerInfo,gu=!0,_u(e,t,n),hu=r,gu=i;break;case 0:case 11:case 14:case 15:gl(2,n,t),$l||gl(4,n,t),_u(e,t,n);break;case 1:$l||(bl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&vl(n,t,r)),_u(e,t,n);break;case 21:_u(e,t,n);break;case 22:$l=(r=$l)||n.memoizedState!==null,_u(e,t,n),$l=r;break;case 30:bl(n,t),_u(e,t,n);break;case 7:$l||bl(n,t),_u(e,t,n);break;default:_u(e,t,n)}}function yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){ff(t,t.return,e)}}}function bu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){ff(t,t.return,e)}}function xu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nu),t;default:throw Error(i(435,e.tag))}}function Su(e,t){var n=xu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=_f.bind(null,e,t);t.then(r,r)}})}function Cu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){hu=l.stateNode,gu=!1;break a}break;case 5:hu=l.stateNode,gu=!1;break a;case 3:case 4:hu=l.stateNode.containerInfo,gu=!0;break a}l=l.return}if(hu===null)throw Error(i(160));vu(s,c,o),hu=null,gu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tu(t,e,n),t=t.sibling}var wu=null;function Tu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Cu(t,e,n),Eu(e),a&4&&(gl(3,e,e.return),hl(3,e),gl(5,e,e.return));break;case 1:Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),a&64&&Ql&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=wu,Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(Ql)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Et]||r[yt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[yt]=e,Nt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[yt]=e,Nt(r),t=r}e.stateNode=t}}else Ql||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Dl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||$l||t.parentNode.removeChild(t)):a.count--,n===null?Ql||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),r!==null&&a&4&&Dl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=eu,eu=!1,Cu(t,e,n),eu=o,Eu(e),a&512&&($l||r===null||bl(r,r.return)),e.flags&32){t=e.stateNode;try{cn(t,``),Ut=!0}catch(t){ff(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Dl(e,t,r===null?t:r.memoizedProps)),a&1024&&(tu=!0);break;case 6:if(Cu(t,e,n),Eu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Ut=!0}catch(t){ff(e,e.return,t)}}break;case 3:if(Ut=!1,Wm=null,o=wu,wu=bm(t.containerInfo),Cu(t,e,n),wu=o,Eu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){ff(e,e.return,t)}tu&&(tu=!1,Du(e)),Ut=!1;break;case 4:a=eu,eu=Ql,r=Wt(),o=wu,wu=bm(e.stateNode.containerInfo),Cu(t,e,n),Eu(e),wu=o,Ut&&au&&(ou=!0),Ut=r,eu=a;break;case 12:Cu(t,e,n),Eu(e);break;case 31:Cu(t,e,n),Eu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 13:Cu(t,e,n),Eu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fd=Le()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=Ql,l=$l,u=eu;Ql=c||o,eu=u||o,$l=l||s,Cu(t,e,n),$l=l,eu=u,Ql=c,Eu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||Ql||$l||(t=s||$l,n=Ql,r=$l,Ql=o||Ql,$l=t,ju(e,2),Ql=n,$l=r),!o&&eu||du(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Su(e,n))));break;case 19:Cu(t,e,n),Eu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 30:a&512&&($l||r===null||bl(r,r.return)),a=Wt(),o=au,s=(n&335544064)===n,c=e.memoizedProps,au=s&&gi(c.default,c.update)!==`none`,Cu(t,e,n),Eu(e),s&&r!==null&&Ut&&(e.flags|=4),au=o,Ut=a;break;case 21:break;case 7:a&512&&($l||r===null||bl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Cu(t,e,n),Eu(e)}}function Eu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ol(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Tl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(wl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;jl(e,kl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(cn(l,``),n.flags&=-33),jl(e,kl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Al(e,kl(e),u,s);break;default:throw Error(i(161))}}catch(t){ff(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Du(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Du(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Ou(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)ku(t,e),t=t.sibling;else Zl(t,!1)}function ku(e,t){var n=e.alternate;if(n===null)Ul(e,!1);else switch(e.tag){case 3:if(su=iu=!1,Ll(),Ou(t,e),!iu&&!ou){if(e=Il,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),su=!0}Il=null;break;case 5:Ou(t,e);break;case 4:r=iu,iu=!1,Ou(t,e),iu&&(ou=!0),iu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Ou(t,e):Ul(e,!1));break;case 30:r=iu,i=Ll(),iu=!1,Ou(t,e),iu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=mi(a,o),o=mi(n.memoizedProps,o);var s=gi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Rl=0,t=Xl(e,n,t,o,s,a,!0),Rl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(jd(e,e.memoizedProps.onUpdate),Il=i):i!==null&&(i.push.apply(i,Il),Il=i),iu=e.flags&32?!0:r;break;default:Ou(t,e)}}function Au(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uu(e,t.alternate,t),t=t.sibling}function ju(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:gl(4,n,n.return),ju(n,r);break;case 1:bl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&vl(n,n.return,i),ju(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:bl(n,n.return),n.tag!==5&&n.tag!==27||Cl(n),ju(n,r);break;case 6:Cl(n);break;case 26:bl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||$l||i.parentNode.removeChild(i),ju(n,r);break;case 22:n.memoizedState===null&&ju(n,r);break;case 30:bl(n,n.return),ju(n,r);break;case 7:bl(n,n.return);default:ju(n,r)}e=e.sibling}}function Mu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Mu(i,a,n),hl(4,a);break;case 1:if(Mu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){ff(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)bo(l[i],c)}catch(e){ff(r,r.return,e)}}s&&o&64&&_l(a),yl(a,a.return);break;case 27:n&2&&Ml(a);case 5:a.tag!==5&&a.tag!==27||Sl(a),Mu(i,a,n),s&&r===null&&o&4&&El(a),yl(a,a.return);break;case 6:Sl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||Ql||Km(bm(c.ownerDocument),a.type,c),Mu(i,a,n),s&&r===null&&o&4&&El(a),yl(a,a.return);break;case 12:Mu(i,a,n);break;case 31:Mu(i,a,n),s&&o&4&&yu(i,a);break;case 13:Mu(i,a,n),s&&o&4&&bu(i,a);break;case 22:a.memoizedState===null&&Mu(i,a,n),yl(a,a.return);break;case 30:Mu(i,a,n),yl(a,a.return);break;case 7:yl(a,a.return);default:Mu(i,a,n)}t=t.sibling}}function Nu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Aa(n))}function Pu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Aa(e))}function Fu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Iu(e,t,n,r),t=t.sibling;else i&&Yl(t)}function Iu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Jl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Fu(e,t,n,r),a&2048&&hl(9,t);break;case 1:Fu(e,t,n,r);break;case 3:Fu(e,t,n,r),i&&su&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Aa(a)));break;case 12:if(a&2048){Fu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){ff(t,t.return,e)}}else Fu(e,t,n,r);break;case 31:Fu(e,t,n,r);break;case 13:Fu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Jl(t),o._visibility&2?Fu(e,t,n,r):(o._visibility|=2,Lu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Jl(s),o._visibility&2?Fu(e,t,n,r):Ru(e,t)),a&2048&&Nu(s,t);break;case 24:Fu(e,t,n,r),a&2048&&Pu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Vl(a.child,!0),Vl(t.child,!0))),Fu(e,t,n,r);break;default:Fu(e,t,n,r)}}function Lu(e,t,n,r,i){for(i=i&&(!!(t.subtreeFlags&10256)||!1),t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Lu(a,o,s,c,i),hl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Lu(a,o,s,c,i)):u._visibility&2?Lu(a,o,s,c,i):Ru(a,o),i&&l&2048&&Nu(o.alternate,o);break;case 24:Lu(a,o,s,c,i),i&&l&2048&&Pu(o.alternate,o);break;default:Lu(a,o,s,c,i)}t=t.sibling}}function Ru(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ru(n,r),i&2048&&Nu(r.alternate,r);break;case 24:Ru(n,r),i&2048&&Pu(r.alternate,r);break;default:Ru(n,r)}t=t.sibling}}var zu=8192;function Bu(e,t,n){if(e.subtreeFlags&zu)for(e=e.child;e!==null;)Vu(e,t,n),e=e.sibling}function Vu(e,t,n){switch(e.tag){case 26:Bu(e,t,n),e.flags&zu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,wu,e.memoizedState,e.memoizedProps));break;case 5:Bu(e,t,n),e.flags&zu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=wu;wu=bm(e.stateNode.containerInfo),Bu(e,t,n),wu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=zu,zu=16777216,Bu(e,t,n),zu=r):Bu(e,t,n));break;case 30:if((e.flags&zu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Pl===null&&(Pl=new Map),Pl.set(r,i)}Bu(e,t,n);break;default:Bu(e,t,n)}}function Hu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Uu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ru=r,Ku(r,e)}Hu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wu(e),e=e.sibling}function Wu(e){switch(e.tag){case 0:case 11:case 15:Uu(e),e.flags&2048&&gl(9,e,e.return);break;case 3:Uu(e);break;case 12:Uu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gu(e)):Uu(e);break;default:Uu(e)}}function Gu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ru=r,Ku(r,e)}Hu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:gl(8,t,t.return),Gu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gu(t));break;default:Gu(t)}e=e.sibling}}function Ku(e,t){for(;ru!==null;){var n=ru;switch(n.tag){case 0:case 11:case 15:gl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ru=r;else a:for(n=e;ru!==null;){r=ru;var i=r.sibling,a=r.return;if(mu(r),r===n){ru=null;break a}if(i!==null){i.return=a,ru=i;break a}ru=a}}}var qu={getCacheForType:function(e){var t=Sa(Oa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Sa(Oa).controller.signal}},Ju=typeof WeakMap==`function`?WeakMap:Map,Yu=0,Xu=null,Z=null,Q=0,Zu=0,Qu=null,$u=!1,ed=!1,td=!1,nd=0,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=null,ud=null,dd=!1,fd=0,pd=0,md=1/0,hd=null,gd=null,_d=0,vd=null,yd=null,bd=0,xd=0,Sd=null,Cd=null,wd=null,Td=null,Ed=null,Dd=0,Od=null;function kd(){return Yu&2&&Q!==0?Q&-Q:I.T===null?gt():Nf()}function Ad(){if(sd===0){if(!(Q&536870912)||U){var e=et;et<<=1,!(et&3932160)&&(et=262144),sd=e}else sd=536870912}return e=Do.current,e!==null&&(e.flags|=32),sd}function jd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(mi(e.memoizedProps,n))),Td===null&&(Td=[]),Td.push(t.bind(null,r))}}function Md(e,t,n){(e===Xu&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)&&(zd(e,0),Id(e,Q,sd,!1)),lt(e,n),Yu&2&&e===Xu||(e===Xu&&(!(Yu&2)&&(ad|=n),rd===4&&Id(e,Q,sd,!1)),Tf(e))}function Nd(e,t,n){if(Yu&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||it(e,t),a=r?qd(e,t):Gd(e,t,!0),o=r;do{if(a===0){ed&&!r&&Id(e,t,0,!1);break}if(n=e.current.alternate,o&&!Fd(n))a=Gd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ld;var l=c.current.memoizedState.isDehydrated;if(l&&(zd(c,s).flags|=256),s=Gd(c,s,!1),s!==2&&s!==6){if(td&&!l){c.errorRecoveryDisabledLanes|=o,ad|=o,a=4;break a}o=ud,ud=a,o!==null&&(ud===null?ud=o:ud.push.apply(ud,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){zd(e,0),Id(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Id(r,t,sd,!$u);break a;case 2:ud=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fd+300-Le(),10<a)){if(Id(r,t,sd,!$u),rt(r,0,!0)!==0)break a;bd=t,r.timeoutHandle=gp(Pd.bind(null,r,n,ud,hd,dd,t,sd,ad,cd,$u,o,`Throttled`,-0,0),a);break a}Pd(r,n,ud,hd,dd,t,sd,ad,cd,$u,o,null,-0,0)}break}}while(1);Tf(e)}function Pd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},Pl=null,Vu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?fd-Le():(a&4194048)===a?pd-Le():0,m=eh(d,m),m!==null)?(bd=a,e.cancelPendingCommit=m(ef.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Id(e,a,o,!l)):ef(e,t,a,n,r,i,o,s,c,l,u,d)}function Fd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Rr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Id(e,t,n,r){t=at(e,t),t&=~od,t&=~ad,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ye(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&dt(e,n,t)}function Ld(){return Yu&6?!0:(Ef(0,!1),!1)}function Rd(){if(Z!==null){if(Zu===0)var e=Z.return;else e=Z,ma=pa=null,$o(e),no=null,ro=0,e=Z;for(;e!==null;)ml(e.alternate,e),e=e.return;Z=null}}function zd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bd=0,Rd(),Xu=e,Z=n=ji(e.current,null),Q=t,Zu=0,Qu=null,$u=!1,ed=it(e,t),td=!1,cd=sd=od=ad=id=rd=0,ud=ld=null,dd=!1,nd=at(e,t),xi(),n}function Bd(e,t){G=null,I.H=lc,t===Ka||t===Ja?(t=eo(),Zu=3):t===qa?(t=eo(),Zu=4):Zu=t===Ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Qu=t,Z===null&&(rd=1,xc(e,zi(t,e.current)))}function Vd(){var e=Do.current;return e===null?!0:(Q&4194048)===Q?Oo===null:(Q&62914560)===Q||Q&536870912?e===Oo:!1}function Hd(){var e=I.H;return I.H=lc,e===null?lc:e}function Ud(){var e=I.A;return I.A=qu,e}function Wd(){rd=4,$u||(Q&4194048)!==Q&&Do.current!==null||(ed=!0),!(id&134217727)&&!(ad&134217727)||Xu===null||Id(Xu,Q,sd,!1)}function Gd(e,t,n){var r=Yu;Yu|=2;var i=Hd(),a=Ud();(Xu!==e||Q!==t)&&(hd=null,zd(e,t)),t=!1;var o=rd;a:do try{if(Zu!==0&&Z!==null){var s=Z,c=Qu;switch(Zu){case 8:Rd(),o=6;break a;case 3:case 2:case 9:case 6:Do.current===null&&(t=!0);var l=Zu;if(Zu=0,Qu=null,Zd(e,s,c,l),n&&ed){o=0;break a}break;default:l=Zu,Zu=0,Qu=null,Zd(e,s,c,l)}}Kd(),o=rd;break}catch(t){Bd(e,t)}while(1);return t&&e.shellSuspendCounter++,ma=pa=null,Yu=r,I.H=i,I.A=a,Z===null&&(Xu=null,Q=0,xi()),o}function Kd(){for(;Z!==null;)Yd(Z)}function qd(e,t){var n=Yu;Yu|=2;var r=Hd(),a=Ud();Xu!==e||Q!==t?(hd=null,md=Le()+500,zd(e,t)):ed=it(e,t);a:do try{if(Zu!==0&&Z!==null){t=Z;var o=Qu;b:switch(Zu){case 1:Zu=0,Qu=null,Zd(e,t,o,1);break;case 2:case 9:if(Xa(o)){Zu=0,Qu=null,Xd(t);break}t=function(){Zu!==2&&Zu!==9||Xu!==e||(Zu=7),Tf(e)},o.then(t,t);break a;case 3:Zu=7;break a;case 4:Zu=5;break a;case 7:Xa(o)?(Zu=0,Qu=null,Xd(t)):(Zu=0,Qu=null,Zd(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Ym(s):c.stateNode.complete){Zu=0,Qu=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Qd(u))}break b}}Zu=0,Qu=null,Zd(e,t,o,5);break;case 6:Zu=0,Qu=null,Zd(e,t,o,6);break;case 8:Rd(),rd=6;break a;default:throw Error(i(462))}}Jd();break}catch(t){Bd(e,t)}while(1);return ma=pa=null,I.H=r,I.A=a,Yu=n,Z===null?(Xu=null,Q=0,xi(),rd):0}function Jd(){for(;Z!==null&&!Fe();)Yd(Z)}function Yd(e){var t=ol(e.alternate,e,nd);e.memoizedProps=e.pendingProps,t===null?Qd(e):Z=t}function Xd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Bc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:$o(t);var r=t;r===ea&&(U?(sa(r),r.tag===5&&r.stateNode!=null&&(ta=r.stateNode)):(sa(r),U=!0));default:ml(n,t),t=Z=Mi(t,nd),t=ol(n,t,nd)}e.memoizedProps=e.pendingProps,t===null?Qd(e):Z=t}function Zd(e,t,n,r){ma=pa=null,$o(t),no=null,ro=0;var i=t.return;try{if(Tc(e,i,t,n,Q)){rd=1,xc(e,zi(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;rd=1,xc(e,zi(n,e.current)),Z=null;return}t.flags&32768?(U||r===1?e=!0:ed||Q&536870912?e=!1:($u=e=!0,(r===2||r===9||r===3||r===6)&&(r=Do.current,r!==null&&r.tag===13&&(r.flags|=16384))),$d(t,e)):Qd(t)}function Qd(e){var t=e;do{if(t.flags&32768){$d(t,$u);return}e=t.return;var n=fl(t.alternate,t,nd);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);rd===0&&(rd=5)}function $d(e,t){do{var n=pl(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);rd=6,Z=null}function ef(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do lf();while(_d!==0);if(Yu&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Xu&&(Z=Xu=null,Q=0),yd=t,vd=e,bd=n,Sd=a,Cd=r,tf(e,t,n,s,c,l,f)}}function tf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(xd=s,s|=bi,ut(e,n,s,r,i,a),Td=null,(n&335544064)===n?(Ed=Na(e),r=10262):(Ed=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vf(Ve,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),Nl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=I.T,I.T=null,i=L.p,L.p=2,a=Yu,Yu|=4;try{cu(e,t,n)}finally{Yu=a,L.p=i,I.T=r}}_d=1,Nl?wd=Mp(o,e.containerInfo,Ed,af,of,rf,sf,uf,nf,null,null):(af(),of(),sf())}function nf(e){if(_d!==0){var t=vd.onRecoverableError;t(e,{componentStack:null})}}function rf(){_d===3&&(_d=0,ku(yd,vd),_d=4)}function af(){if(_d===1){_d=0;var e=vd,t=yd,n=bd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=I.T,I.T=null;var i=L.p;L.p=2;var a=Yu;Yu|=4;try{au=ou=!1,Tu(t,e,n),n=cp;var o=Wr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ur(s.ownerDocument.documentElement,s)){if(c!==null&&Gr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Hr(s,h),v=Hr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{Yu=a,L.p=i,I.T=r}}e.current=t,_d=2}}function of(){if(_d===2){_d=0;var e=vd,t=yd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=Yu;Yu|=4;try{uu(e,t.alternate,t)}finally{Yu=i,L.p=r,I.T=n}}_d=3}}function sf(){if(_d===4||_d===3){_d=0;var e=wd;wd=null,Ie();var t=vd,n=yd,r=bd,i=Cd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?_d=5:(_d=0,yd=vd=null,cf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(gd=null),ht(r),n=n.stateNode,qe&&typeof qe.onCommitFiberRoot==`function`)try{qe.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=I.T,a=L.p,L.p=2,I.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{I.T=n,L.p=a}}if(i=Td,o=Ed,Ed=null,i!==null&&(Td=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);bd&3&&lf(),Tf(t),a=t.pendingLanes,r&261930&&a&42?t===Od?Dd++:(Dd=0,Od=t):(Dd=0,Od=null),Ef(0,!1)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Aa(t)))}function lf(){return wd!==null&&(wd.skipTransition(),wd=null),af(),of(),sf(),uf()}function uf(){if(_d!==5)return!1;var e=vd,t=xd;xd=0;var n=ht(bd),r=I.T,a=L.p;try{L.p=32>n?32:n,I.T=null,n=Sd,Sd=null;var o=vd,s=bd;if(_d=0,yd=vd=null,bd=0,Yu&6)throw Error(i(331));var c=Yu;if(Yu|=4,Wu(o.current),Iu(o,o.current,s,n),Yu=c,Ef(0,!1),qe&&typeof qe.onPostCommitFiberRoot==`function`)try{qe.onPostCommitFiberRoot(Ke,o)}catch{}return!0}finally{L.p=a,I.T=r,cf(e,t)}}function df(e,t,n){t=zi(n,t),t=Cc(e.stateNode,t,2),e=ho(e,t,2),e!==null&&(lt(e,2),Tf(e))}function ff(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gd===null||!gd.has(r))){e=zi(n,e),n=Y(2),r=ho(t,n,2),r!==null&&(wc(n,r,t,e),lt(r,2),Tf(r));break}}t=t.return}}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ju;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(td=!0,i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xu===e&&(Q&n)===n&&(rd===4||rd===3&&(Q&62914560)===Q&&300>Le()-fd?Yu&2?od|=n:zd(e,0):od|=n,cd===Q&&(cd=0)),Tf(e)}function hf(e,t){t===0&&(t=st()),e=wi(e,t),e!==null&&(lt(e,t),Tf(e))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function _f(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),hf(e,n)}function vf(e,t){return Ne(e,t)}var yf=null,bf=null,xf=!1,Sf=!1,Cf=!1,wf=0;function Tf(e){e!==bf&&e.next===null&&(bf===null?yf=bf=e:bf=bf.next=e),Sf=!0,xf||(xf=!0,Mf())}function Ef(e,t){if(!Cf&&Sf){Cf=!0;do for(var n=!1,r=yf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ye(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,jf(r,a))}else a=Q,a=rt(r,r===Xu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||it(r,a)||(n=!0,jf(r,a))}r=r.next}while(n);Cf=!1}}function Df(){Of()}function Of(){Sf=xf=!1;var e=0;wf!==0&&hp()&&(e=wf);for(var t=Le(),n=null,r=yf;r!==null;){var i=r.next,a=kf(r,t);a===0?(r.next=null,n===null?yf=i:n.next=i,i===null&&(bf=n)):(n=r,(e!==0||a&3)&&(Sf=!0)),r=i}_d!==0&&_d!==5||Ef(e,!1),wf!==0&&(wf=0)}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ye(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=ot(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Xu,n=Q,n=rt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Pe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||it(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Pe(r),ht(n)){case 2:case 8:n=Be;break;case 32:n=Ve;break;case 268435456:n=Ue;break;default:n=Ve}return r=Af.bind(null,e),n=Ne(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Pe(r),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(_d!==0&&_d!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lf()&&e.callbackNode!==n)return null;var r=Q;return r=rt(e,e===Xu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Nd(e,r,t),kf(e,Le()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function jf(e,t){if(lf())return null;Nd(e,t,!0)}function Mf(){bp(function(){Yu&6?Ne(ze,Df):Of()})}function Nf(){if(wf===0){var e=Ia;e===0&&(e=$e,$e<<=1,!($e&261888)&&($e=256)),wf=e}return wf}function Pf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:hn(e)}function Ff(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Pf((i[bt]||null).action),o=r.submitter;o&&(t=(t=o[bt]||null)?Pf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Ln(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wf!==0){var e=new FormData(i,o);Ys(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Ys(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var If=0;If<di.length;If++){var Lf=di[If];fi(Lf.toLowerCase(),`on`+(Lf[0].toUpperCase()+Lf.slice(1)))}fi(ri,`onAnimationEnd`),fi(ii,`onAnimationIteration`),fi(ai,`onAnimationStart`),fi(`dblclick`,`onDoubleClick`),fi(`focusin`,`onFocus`),fi(`focusout`,`onBlur`),fi(oi,`onTransitionRun`),fi(si,`onTransitionStart`),fi(ci,`onTransitionCancel`),fi(li,`onTransitionEnd`),Rt(`onMouseEnter`,[`mouseout`,`mouseover`]),Rt(`onMouseLeave`,[`mouseout`,`mouseover`]),Rt(`onPointerEnter`,[`pointerout`,`pointerover`]),Rt(`onPointerLeave`,[`pointerout`,`pointerover`]),Lt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Lt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Lt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Lt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Lt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Lt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Rf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),zf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Rf));function Bf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){_i(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){_i(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[St];n===void 0&&(n=t[St]=new Set);var r=e+`__bubble`;n.has(r)||(Wf(t,e,2,!1),n.add(r))}function Vf(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var Hf=`_reactListening`+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hf]){e[Hf]=!0,Ft.forEach(function(t){t!==`selectionchange`&&(zf.has(t)||Vf(t,!1,e),Vf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hf]||(t[Hf]=!0,Vf(`selectionchange`,!1,t))}}function Wf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!En||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Gf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=kt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Cn(function(){var r=a,i=vn(n),s=[];a:{var c=ui.get(e);if(c!==void 0){var l=Ln,u=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:l=tr;break;case`focusin`:u=`focus`,l=Kn;break;case`focusout`:u=`blur`,l=Kn;break;case`beforeblur`:case`afterblur`:l=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=ir;break;case ri:case ii:case ai:l=qn;break;case li:l=ar;break;case`scroll`:case`scrollend`:l=zn;break;case`wheel`:l=or;break;case`copy`:case`cut`:case`paste`:l=Jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=nr;break;case`submit`:l=rr;break;case`toggle`:case`beforetoggle`:l=sr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=wn(m,p),g!=null&&d.push(Kf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==_n&&(u=n.relatedTarget||n.fromElement)&&(kt(u)||u[xt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?kt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Wn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=nr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:jt(c),h=l==null?u:jt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,kt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Jf):null,c!==null&&Yf(s,u,c,d,!1),l!==null&&f!==null&&Yf(s,f,l,d,!0)))}a:{if(c=r?jt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Dr;else if(xr(c)){if(H)_=Ir;else{_=Pr;var v=Nr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&fn(r.elementType)&&(_=Dr):_=Fr;if(_&&(_=_(e,r))){Sr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?jt(r):window,e){case`focusin`:(xr(v)||v.contentEditable===`true`)&&(qr=v,Jr=r,Yr=null);break;case`focusout`:Yr=Jr=qr=null;break;case`mousedown`:Xr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Xr=!1,Zr(s,n,i);break;case`selectionchange`:if(Kr)break;case`keydown`:case`keyup`:Zr(s,n,i)}var y;if(lr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else _r?hr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(fr&&n.locale!==`ko`&&(_r||b!==`onCompositionStart`?b===`onCompositionEnd`&&_r&&(y=jn()):(On=i,kn=`value`in On?On.value:On.textContent,_r=!0)),v=qf(r,b),0<v.length&&(b=new Yn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=gr(n),y!==null&&(b.data=y)))),(y=dr?vr(e,n):yr(e,n))&&(b=qf(r,`onBeforeInput`),0<b.length&&(v=new Yn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Ff(s,e,r,n,i)}Bf(s,t)})}function Kf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=wn(e,n),i!=null&&r.unshift(Kf(e,i,a)),i=wn(e,t),i!=null&&r.push(Kf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=wn(n,a),l!=null&&o.unshift(Kf(n,l,c))):i||(l=wn(n,a),l!=null&&o.push(Kf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function Qf(e){return(typeof e==`string`?e:``+e).replace(Xf,`
`).replace(Zf,``)}function $f(e,t){return t=Qf(t),Qf(e)===t}function ep(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||cn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&cn(e,``+r);else return;break;case`className`:Kt(e,`class`,r);break;case`tabIndex`:Kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Kt(e,n,r);break;case`style`:dn(e,r,o);return;case`data`:if(t!==`object`){Kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=hn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&ep(e,t,`name`,a.name,a,null),ep(e,t,`formEncType`,a.formEncType,a,null),ep(e,t,`formMethod`,a.formMethod,a,null),ep(e,t,`formTarget`,a.formTarget,a,null)):(ep(e,t,`encType`,a.encType,a,null),ep(e,t,`method`,a.method,a,null),ep(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=hn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=gn);return;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=hn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Gt(e,`popover`,r);break;case`xlinkActuate`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Gt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=pn.get(n)||n,Gt(e,n,r);else return}Ut=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:dn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)cn(e,r);else if(typeof r==`number`||typeof r==`bigint`)cn(e,``+r);else return;break;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=gn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!It.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[bt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Ut=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Gt(e,n,r)}return}Ut=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,o,s,n,null)}}a&&ep(e,t,`srcSet`,n.srcSet,n,null),r&&ep(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:ep(e,t,r,d,n,null)}}nn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:ep(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&an(e,!!r,n,!0):an(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:ep(e,t,s,c,n,null)}sn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:ep(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<Rf.length;r++)$(Rf[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,u,r,n,null)}return;default:if(fn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&ep(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||ep(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Ut=!0),o=m;break;case`name`:m!==f&&(Ut=!0),a=m;break;case`checked`:m!==f&&(Ut=!0),u=m;break;case`defaultChecked`:m!==f&&(Ut=!0),d=m;break;case`value`:m!==f&&(Ut=!0),s=m;break;case`defaultValue`:m!==f&&(Ut=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&ep(e,t,p,m,r,f)}}tn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||ep(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Ut=!0),p=o;break;case`defaultValue`:o!==l&&(Ut=!0),c=o;break;case`multiple`:o!==l&&(Ut=!0),s=o;default:o!==l&&ep(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?an(e,!!n,n?[]:``,!1):an(e,!!n,t,!0)):an(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:ep(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Ut=!0),p=a;break;case`defaultValue`:a!==o&&(Ut=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&ep(e,t,s,a,r,o)}on(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:ep(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Ut=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:ep(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&ep(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:ep(e,t,u,p,r,m)}return;default:if(fn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&ep(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||ep(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[yt]=r,n[bt]=t,np(n,e,t),Nt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Et]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=kt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??(e.reactFragments=new Set),e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Ot(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Et])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&ep(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===gn&&(e.onclick=null),Ot(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ot(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=L.d;L.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Ld();return e||t}function Cm(e){var t=At(e);t!==null&&t.tag===5&&t.type===`form`?Zs(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=en(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Nt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+en(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+en(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+en(n.imageSizes)+`"]`)):i+=`[href="`+en(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Dt]=!0,o.onload=o.onerror=function(){Pt(o)}),Nt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+en(r)+`"][href="`+en(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Nt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Mt(r).hoistableStyles,a=Pm(e);t=t||`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Nt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Mt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Nt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Mt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Nt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=xe.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Mt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Mt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Mt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+en(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Dt]){r.loading=1;return}}else t=e.createElement(`link`),t[Dt]=!0,t.onload=t.onerror=Pt.bind(null,t),np(t,`link`,n),Nt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+en(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+en(n.href)+`"]`);if(r)return t.instance=r,Nt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Nt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Nt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Nt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Nt(a),a):(r=n,(a=vm.get(o))&&(r=D({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Nt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??(e.crossOrigin=t.crossOrigin),e.referrerPolicy??(e.referrerPolicy=t.referrerPolicy),e.title??(e.title=t.title)}function Um(e,t){e.crossOrigin??(e.crossOrigin=t.crossOrigin),e.referrerPolicy??(e.referrerPolicy=t.referrerPolicy),e.integrity??(e.integrity=t.integrity)}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Et]||a[yt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Nt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Nt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:te,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ki(3,null,null,t),e.current=a,a.stateNode=e,t=ka(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},fo(a),e}function uh(e){return e?(e=Di,e):Di}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=mo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=ho(e,r,t),n!==null&&(Md(n,e,t),go(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=wi(e,67108864);t!==null&&Md(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=kd();t=mt(t);var n=wi(e,t);n!==null&&Md(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=2,yh(e,t,n,r)}finally{L.p=a,I.T=i}}function vh(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=8,yh(e,t,n,r)}finally{L.p=a,I.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Gf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=At(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=nt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ye(o);s.entanglements[1]|=c,o&=~c}Tf(a),!(Yu&6)&&(md=Le()+500,Ef(0,!1))}}break;case 31:case 13:s=wi(a,2),s!==null&&Md(s,a,2),Ld(),ph(a,2)}if(a=bh(r),a===null&&Gf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Gf(e,t,r,null,n)}}function bh(e){return e=vn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=kt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Re()){case ze:return 2;case Be:return 8;case Ve:case He:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=At(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=kt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,_t(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,_t(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_n=r,n.target.dispatchEvent(r),_n=null}else return t=At(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=At(n);a!==null&&(e.splice(t,3),t-=3,Ys(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[bt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[bt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,kd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Ld(),t[xt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=gt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:I,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Ke=Jh.inject(qh),qe=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=vc,s=yc,c=bc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[xt]=t.current,Uf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),v=o(((e,t)=>{t.exports=_()})),y=c(g(),1),b=c(u(),1),x=v(),S={mode:`dark`,speed:1,spacing:5,dotSize:6,archHeight:.7,thickness:1,brightness:1,hue:0,saturation:1};function C(e){return e===`light`||e===1||e===`1`?`light`:`dark`}function w(e,t){let n=e.getContext(`2d`,{alpha:!1});if(!n)return null;let r=1,i=1,a=0;return{resize:(t,a)=>{r=Math.max(1,t),i=Math.max(1,a);let o=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(r*o),e.height=Math.round(i*o),n.setTransform(o,0,0,o,0,0)},render:()=>{let e=t(),o=C(e.mode)===`light`;n.fillStyle=o?`#eef1f6`:`#030303`,n.fillRect(0,0,r,i),a+=.015*e.speed;let s=r/2,c=i*.35,l=r*1.5,u=i*e.archHeight;n.globalCompositeOperation=o?`source-over`:`lighter`;for(let t=0;t<r;t+=e.spacing){let r=(t-s)/(l/2),d=c+r*r*u;for(let s=0;s<i;s+=e.spacing){let i=Math.abs(s-d),c=(140+(1-Math.abs(r))*80)*e.thickness;if(i>=c)continue;let l=1-i/c,u=Math.sin(t*.015+a),f=Math.cos(s*.02+a);if(l=l*.7+u*f*.3*l,l*=Math.max(0,1-Math.abs(r)**2.5),l<=.02)continue;let p,m,h;if(o){if(p=Math.min(255,48*l+70*l**3),m=Math.min(255,28*l+45*l**4),h=Math.min(255,120*l+110*l**2),l>.7){let e=(l-.7)*3.3;p=Math.min(255,p+90*e),m=Math.min(255,m+70*e),h=Math.min(255,h+110*e)}}else if(p=Math.min(255,60*l+100*l**3),m=Math.min(255,20*l+60*l**4),h=Math.min(255,120*l+135*l**2),l>.7){let e=(l-.7)*3.3;p=Math.min(255,p+150*e),m=Math.min(255,m+150*e),h=Math.min(255,h+150*e)}n.fillStyle=`rgb(${Math.floor(p*e.brightness)}, ${Math.floor(m*e.brightness)}, ${Math.floor(h*e.brightness)})`,n.fillRect(t,s,e.dotSize*l,e.dotSize*l)}}n.globalCompositeOperation=`source-over`}}}var T=`modulepreload`,E=function(e){return`/`+e},D={},O=function(e){return e.pathname.endsWith(`.css`)},k=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},A=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=E(t,n);let r=s(t),i=O(r);return k(D,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:T,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},j=(0,b.lazy)(()=>A(()=>import(`./NeuformBatchEffects-Da3X95pJ.js`).then(e=>({default:e.SignalParticles})),[]));function M({className:e=``,...t}){let n=(0,b.useRef)(null),r=(0,b.useRef)(null),i=(0,b.useRef)({...S,...t});return i.current={...S,...t},(0,b.useEffect)(()=>{let e=n.current,t=r.current;if(!e||!t)return;let a=w(t,()=>i.current);if(!a)return;let o=0,s=!0,c=()=>{let t=e.getBoundingClientRect();a.resize(t.width,t.height),a.render()},l=()=>{a.render(),o=s&&!document.hidden?requestAnimationFrame(l):0},u=new ResizeObserver(c),d=new IntersectionObserver(([e])=>{s=e?.isIntersecting??!0,s&&!o&&(o=requestAnimationFrame(l)),!s&&o&&(cancelAnimationFrame(o),o=0)}),f=()=>{document.hidden&&o?(cancelAnimationFrame(o),o=0):!document.hidden&&s&&!o&&(o=requestAnimationFrame(l))};return u.observe(e),d.observe(e),document.addEventListener(`visibilitychange`,f),c(),o=requestAnimationFrame(l),()=>{o&&cancelAnimationFrame(o),u.disconnect(),d.disconnect(),document.removeEventListener(`visibilitychange`,f)}},[]),(0,x.jsx)(`div`,{ref:n,className:`threeui-background predictive-arc predictive-arc--${i.current.mode}${e?` ${e}`:``}`,"data-mode":i.current.mode,children:(0,x.jsx)(`canvas`,{ref:r,style:{filter:`hue-rotate(${i.current.hue}deg) saturate(${i.current.saturation})`}})})}function ee(e){if(e.variant===`signal-particles`){let{variant:t,...n}=e;return(0,x.jsx)(b.Suspense,{fallback:(0,x.jsx)(`div`,{className:`threeui-background predictive-arc`}),children:(0,x.jsx)(j,{...n})})}let{variant:t,...n}=e;return(0,x.jsx)(M,{...n})}var N=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sign Up</title>
<link rel="icon" href="data:,">
<meta name="description" content="A light skeuomorphic 'Get Started' pill on dark grey: shader-noise body, a liquid-chrome ring, and a crystal knob with a writing pen drawn with WebGL shaders and particles.">
<style>
@font-face{font-family:"Geist Mono";font-weight:300;font-style:normal;font-display:swap;src:url(data:font/woff2;base64,d09GMgABAAAAAAbQAA8AAAAADKQAAAZ5AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbHhwoBmA/U1RBVEQAPBEICo4UinELOgABNgIkAzwEIAWEOAcgG8IJEdWkHsg0UhbO38/vm/v3zmbzYCdbJFaP8bMiWwBwdHwrvytzoGjrKhTFB/KsfykWYHfGtWYmSaUkA6FcojML8rQ+7lfziZN4ozr8/Uz3AQeeOrAp/heLV6vsiwQ60Cg/yjI8DOIDsqY7ltc1mGH6sR0EwIIaECCJjYkKgMI4GKZtO/bFEILsdfn+FGyTGQIT0Dqko9zdhQHygiknS5GieTABcVKkgO9NdKiAJbQhJQhhfAFuQfiD6O4fuM9LRLbuwwNMQsb4/f8rIDfRyUmgf+29C4gh4lloEgJbbA1BABgWKaYl+5ot3bzd0Npd7qDpIAyDhCHEBM3YNgwqoJE078AyMGM5nAITpcQsKRAkiA2go4xPwmbf9//4D5ZCrQXk+xiYsXENskrgM9fziF8ThGTAxRbQhk2eMBI8sIgM8WcAKYNySDg8gcMWzxxkDZZSBgdZgwbpsBw0eGR4cWhIaJAVVvGgDlR00OIi51Uhl0zqOJt8ysF+21Z0ynGw31YJPuXRAVcp4lMeHXCVKp90XTrgeXzKicdcV520bex3HD7lJeO2zSafcpz55nltbGpYIkAFmyvNr7KodIaXVMRCJabfJPYcsUbPMlgqY7a1VjCxqQgllWTMdyWS459FBov9dpKa3GKy1I2tdTbR2Qs0qgWWyuS8KiY6OTa5ddg2qdpGSvpwu8HEKU+c48NmHiSqhKHsVs5wOrFoCQnCW5eNcJx4XCWu33m1AuKb3ZKOekwHHrkJl1hocuw6kTbsv+3EHeLN2lQ0EGq76JhzO3bpwsHcOU5QoVD35Tib4XSWU2mVSWkDvWjB1G6RRovG4iv95/vzi+dF5mHyz6eZn093Pzz68Ogke8TmYSM2I//scXdvPTt/zs59s5YGNmRmL9z7ob5pY8/YucrzXIRyOjhX9FxVNhSutDvDJLsdytlMqt55I5F03kg1MC2b1y8c8ojnsnXVFTbOoxhva1Vk4c9oo5qaZjd6RPMS23eimb/UMsH4LyYS/gsTsZaGqprkpiMHD206mqxBM3+X7EFDVQMxQqKXf1B14IfSpqomB6Szg0mu6sbaRMWNZGO0qt1Eds+i3eJ5Qa7ObWW9ivHWVkWW8ziMYatigKCeVP7W7BQ8WfiyrjamBsXTtVP2/VlL83TbX/umtoEln5JPyQfkU/Ipibmz6W67dYTwU2JBY6w5HGPbWt+n31+/cQKbv2iMjrOf5niaZ4ixz0uuoJenb3x+gMSMyDnHlIM033cxJrkY6+Ppg1POOeDj2+Wn7p+l+Xb5qQfnIJvNJGvsN9IZ+41kLcMka5Ejk4bramKknXVJs+3t0nHWbUcWNwD4wGVZF9r5d/yDWlsLRdmaBzX+/avadtXX+TzeOn/9LmQze1jXHvZyz5rHULhKlaEloz7lHx3gPxraPNyhlwW98us2ShC0ick5b9CzX5Tc26W+UdJ3JMJ5XW7OGzkCw2xfwkEPCWm3SK+NMjKj3r8iW1osqlVUL/bOb1RLPUaLqbZH6/X12i1dQbfIXubzlht8nMtS9EOwgJ5Xv6TPKo1YzI7qISWm7fqSnEJ+uQuy2SMb9m16i36rjeuKRrmutrfotzZt2Afis5z39TPzXj/j/SyHdTU5T/DilPqwvz48JXjRU5PrqSMX1ZEwvN6daw1fk16VhnLtr3dGbqtvqTG94LNr4QfND5rDn1wrgIE6UzlOfkCdqbxKAgDy+fznIAAQD9OTCw8wrbPtv00RCr8HgG/q7tYCwLc68738a/9nBAdFCwFMguDex2/Jewjq8q/990xwUPg93JMFxK/QCuqwBs0o105qRi/KQYGFTBnshQE+lKMdBgPQoAwU1sgBA2SA35TWFcSfkKL9ZVrg4nclOAMnMyp68yI38a9FCEF8DGoBZuEttRB6nF0vGlaLsQzb1JOwCh2qWTBCTgk2QoLVizENiwLFmKFgICXyTQCDUQyjHSPwISU3DqEfnQjKs73oQwq16BagOZjCGJKwQiWTUVzoxgh65MgIUstg4+wkuqHEKBLohWexDKEUQlO2jkJBWqopJZBEf/drJdBACRPU0GT6NtSAAYXgCghJjAxHpzGEdiSm2SSKoYRRm4+tR6JxsgRaqKGFHhJwSOpeQCAQRUImA5h1yqEqpK8EHpIk8eZl10N6MRxsTaMDSnRedEiFzIHhNbGhYRNxm+IahXIRK/+ZAC2bPw/tz2WBCw==) format("woff2")}
:root{
  --u: min(calc(100vw / 706), calc(100vh / 232));
  --bg: transparent;
  --ink:#4c4c52;
  --ink-hover:#0f0f12;
  --chev:#2c2c33;
  --chev-hover:#fff3e4;
  --accent:255,138,40;
  --ease-io:cubic-bezier(.45,0,.2,1);
  --ease-out:cubic-bezier(.16,.84,.3,1);
}
:root[data-ref]{--u:1px}
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;background:var(--bg);color:#8a8a8f;font-family:"Geist Mono",ui-monospace,SFMono-Regular,Menlo,monospace;-webkit-font-smoothing:antialiased;overflow:hidden}
.stage{position:fixed;inset:0;display:grid;place-items:center}

/* ---------- the button ---------- */
.cta{
  --w:calc(706 * var(--u));
  --h:calc(232 * var(--u));
  position:relative;width:var(--w);height:var(--h);
  padding:0;margin:0;border:0;background:transparent;border-radius:calc(116 * var(--u));
  cursor:pointer;appearance:none;-webkit-tap-highlight-color:transparent;outline:none;
  --m:calc(48 * var(--u));   /* canvas margin that holds the liquid-metal ring */
  isolation:isolate;
  transition:transform .18s var(--ease-out);
}
.cta::after{content:"";position:absolute;inset:calc(-27 * var(--u));border-radius:calc(143 * var(--u))}  /* the ring is part of the hit area */
.cta::before{content:"";position:absolute;inset:calc(-26 * var(--u));border-radius:calc(142 * var(--u));z-index:-2;pointer-events:none;
  clip-path:inset(0 calc(-400 * var(--u)) calc(-700 * var(--u)) calc(-400 * var(--u)));
  box-shadow:
    0 calc(59 * var(--u)) calc(96 * var(--u)) calc(-17 * var(--u)) rgba(0,0,0,.72),
    0 calc(182 * var(--u)) calc(88 * var(--u)) 0 rgba(0,0,0,.32),
    0 calc(16 * var(--u)) calc(44 * var(--u)) calc(-18 * var(--u)) rgba(0,0,0,0),
    0 calc(101 * var(--u)) calc(93 * var(--u)) calc(-38 * var(--u)) rgba(0,0,0,0),
    0 calc(51 * var(--u)) calc(61 * var(--u)) calc(-26 * var(--u)) rgba(0,0,0,0),
    0 calc(13 * var(--u)) calc(34 * var(--u)) calc(-12 * var(--u)) rgba(0,0,0,0);
  transition:box-shadow .35s cubic-bezier(.6,0,.35,1) .1s}
.cta:focus-visible{outline:2px solid #ff9a3c;outline-offset:8px}
.cta:active{transform:translateY(calc(2 * var(--u))) scale(.992)}
/* violet light the crystal throws onto the desk on hover */
.halo{position:absolute;z-index:-1;pointer-events:none;left:calc(430 * var(--u));top:calc(-44 * var(--u));width:calc(320 * var(--u));height:calc(320 * var(--u));border-radius:50%;
  background:radial-gradient(circle,rgba(var(--accent),.42) 0%,rgba(var(--accent),.16) 35%,rgba(var(--accent),0) 66%);opacity:0;
  transition:opacity .42s cubic-bezier(.6,0,.35,1)}
.face{position:absolute;inset:calc(-1 * var(--m));pointer-events:none}
.face canvas{position:absolute;inset:0;width:100%;height:100%;display:block}

/* label */
.label{
  position:absolute;left:calc(134 * var(--u));top:50%;transform:translateY(-50%);
  font:300 calc(50 * var(--u))/1 "Geist Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
  letter-spacing:calc(4.1 * var(--u));white-space:pre;color:var(--ink);-webkit-text-stroke:calc(0.45 * var(--u)) currentColor;
  pointer-events:none;user-select:none;
  transition:color .3s var(--ease-io) .23s;
}

/* knob overlays (the crystal itself is drawn on the canvas) */
.knob{position:absolute;left:calc(502 * var(--u));top:calc(28 * var(--u));width:calc(176 * var(--u));height:calc(176 * var(--u));border-radius:50%;overflow:hidden;pointer-events:none;
  -webkit-mask-image:radial-gradient(circle,#000 99%,transparent 100%);mask-image:radial-gradient(circle,#000 99%,transparent 100%)}
.knob>*{position:absolute;inset:0;border-radius:50%}
/* .glow carries no paint: its animated opacity is the hover clock the shader reads */
.glow{width:0;height:0;inset:auto;opacity:0;transition:opacity .42s cubic-bezier(.6,0,.35,1)}
.pen{overflow:visible}
.pen path{fill:none;stroke:var(--chev);stroke-width:4.4;stroke-linecap:round;stroke-linejoin:round;transition:stroke .15s var(--ease-io) .15s}
.pen-move{transform:translate(calc(-6 * var(--u)),0) rotate(0deg);transform-origin:68px 108px;transition:transform .5s var(--ease-io) .05s}
.pen-wiggle{transform-origin:68px 108px}
.scribble{stroke:var(--chev-hover);stroke-dasharray:36;stroke-dashoffset:36;transition:stroke-dashoffset .45s var(--ease-io)}
@keyframes pen-write{0%{transform:rotate(-4deg) translate(0,0)}50%{transform:rotate(3deg) translate(0,calc(-1.5 * var(--u)))}100%{transform:rotate(-4deg) translate(0,0)}}

/* ---------- hover / focus ---------- */
.cta:hover::before,.cta:focus-visible::before,.cta.is-hover::before{
  box-shadow:
    0 calc(59 * var(--u)) calc(96 * var(--u)) calc(-17 * var(--u)) rgba(0,0,0,0),
    0 calc(182 * var(--u)) calc(88 * var(--u)) 0 rgba(0,0,0,0),
    0 calc(16 * var(--u)) calc(44 * var(--u)) calc(-18 * var(--u)) rgba(0,0,0,0),
    0 calc(101 * var(--u)) calc(93 * var(--u)) calc(-38 * var(--u)) rgba(0,0,0,.12),
    0 calc(51 * var(--u)) calc(61 * var(--u)) calc(-26 * var(--u)) rgba(0,0,0,.45),
    0 calc(13 * var(--u)) calc(34 * var(--u)) calc(-12 * var(--u)) rgba(0,0,0,.98);
  transition:box-shadow .4s var(--ease-io) .17s}
.cta:hover .halo,.cta:focus-visible .halo,.cta.is-hover .halo{opacity:1;transition:opacity .4s cubic-bezier(.5,0,.3,1) .28s}
.cta:hover .label,.cta:focus-visible .label,.cta.is-hover .label{color:var(--ink-hover);transition:color .38s cubic-bezier(.55,0,.25,1) .19s}
.cta:hover .glow,.cta:focus-visible .glow,.cta.is-hover .glow{opacity:1;transition:opacity .32s cubic-bezier(.5,0,.3,1) .26s}
.cta:hover .pen path,.cta:focus-visible .pen path,.cta.is-hover .pen path{stroke:var(--chev-hover);transition:stroke .34s var(--ease-io) .1s}
/* the pen lifts at once, then writes a line as it moves right, then keeps a gentle scribbling motion */
.cta:hover .pen-move,.cta:focus-visible .pen-move,.cta.is-hover .pen-move{transform:translate(calc(20 * var(--u)),calc(-1 * var(--u))) rotate(-6deg);transition:transform .9s cubic-bezier(.5,0,.3,1) .22s}
.cta:hover .scribble,.cta:focus-visible .scribble,.cta.is-hover .scribble{stroke-dashoffset:0;transition:stroke-dashoffset .9s cubic-bezier(.5,0,.3,1) .22s}
.cta:hover .pen-wiggle,.cta:focus-visible .pen-wiggle,.cta.is-hover .pen-wiggle{animation:pen-write 1.1s ease-in-out 1.1s infinite}

/* no-WebGL fallback: a flat CSS rendering of the same button */
.cta.no-gl .face{background:linear-gradient(#f5f5f5 0%,#e6e6e6 14%,#bcbcbf 60%,#86868a 100%);border:calc(2.5 * var(--u)) solid #545458}
.cta.no-gl .knob-fallback{position:absolute;left:calc(502 * var(--u));top:calc(28 * var(--u));width:calc(176 * var(--u));height:calc(176 * var(--u));border-radius:50%;
  background:radial-gradient(circle at 42% 30%,#ffffff 0%,#d9d9e3 28%,#8d8d9b 70%,#5a5a66 100%);box-shadow:inset 0 calc(4 * var(--u)) calc(10 * var(--u)) rgba(0,0,0,.35);transition:background .4s}
.cta.no-gl:hover .knob-fallback{background:radial-gradient(circle at 50% 40%,#3a1400 0%,#a03c00 45%,#ff8a28 100%)}
.knob-fallback{display:none}
.cta.no-gl .knob-fallback{display:block}

@media (prefers-reduced-motion:reduce){
  .cta,.cta *,.cta::before{transition-duration:.01s!important;transition-delay:0s!important}
}

</style>
</head>
<body>
<main class="stage">
  <button class="cta" type="button" aria-label="Sign up">
    <span class="halo" aria-hidden="true"></span>
    <span class="face" aria-hidden="true"><canvas></canvas></span>
    <span class="knob-fallback" aria-hidden="true"></span>
    <span class="label" aria-hidden="true">SIGN UP</span>
    <span class="knob" aria-hidden="true">
      <span class="glow"></span>
      <svg class="pen" viewBox="0 0 176 176">
        <path class="scribble" d="M63 108q5-5 10 0t10 0t10 0"/>
        <g class="pen-move"><g class="pen-wiggle">
          <path class="pen-body" d="M106.1 77.4a3.8 3.8 0 0 0-15.1-15.1L70.3 82.9a7.6 7.6 0 0 0-1.9 3.2l-5 16.5a1.9 1.9 0 0 0 2.4 2.4l16.5-5a7.6 7.6 0 0 0 3.2-1.9z"/>
          <path class="pen-body" d="M85.1 68.4l7.6 7.6"/>
        </g></g>
      </svg>
    </span>
  </button>
</main>

<script>
(() => {
  if (/[?&]ref\\b/.test(location.search)) document.documentElement.dataset.ref = '1';
  const cta = document.querySelector('.cta');
  const cv = cta.querySelector('canvas');
  const clock = cta.querySelector('.glow');   // its transitioned opacity is the hover amount
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ------------------------------------------------------------------ shaders
  const QUAD_VS = \`#version 300 es
  in vec2 aPos; void main(){ gl_Position = vec4(aPos, 0., 1.); }\`;

  // Pill face + crystal well. Coordinates are the design grid: 706 x 232 units, y down,
  // pill radius 116, knob centre (590,116), well radius 88, crystal radius 80.
  const FACE_FS = \`#version 300 es
  precision highp float;
  uniform vec2 uRes; uniform float uU; uniform float uTime; uniform float uHover;
  uniform sampler2D uScratch;
  out vec4 fragColor;
  float hash21(vec2 p){ vec3 q=fract(vec3(p.xyx)*.1031); q+=dot(q,q.yzx+33.33); return fract((q.x+q.y)*q.z); }
  vec2 hash22(vec2 p){ vec3 q=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973)); q+=dot(q,q.yzx+33.33); return fract((q.xx+q.yz)*q.zy); }
  float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
    return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x), mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x), f.y); }
  float fbm(vec2 p){ float a=.5, s=0.; for(int i=0;i<4;i++){ s+=a*vnoise(p); p=p*2.02+vec2(31.7,17.3); a*=.5; } return s; }
  // cellular shards: (nearest, second nearest, cell id)
  vec3 voro(vec2 p){ vec2 i=floor(p), f=fract(p); float d1=9., d2=9.; vec2 id=vec2(0);
    for(int y=-1;y<=1;y++) for(int x=-1;x<=1;x++){ vec2 g=vec2(float(x),float(y)); vec2 r=g+hash22(i+g)-f; float d=dot(r,r);
      if(d<d1){ d2=d1; d1=d; id=i+g; } else if(d<d2){ d2=d; } }
    return vec3(sqrt(d1), sqrt(d2), hash21(id)); }
  float tone(float y){ float t=y/232.; float v=mix(.965,.90,smoothstep(.12,.32,t)); v=mix(v,.70,smoothstep(.32,.64,t)); return mix(v,.50,smoothstep(.64,1.,t)); }

  // ---- liquid metal: a smooth warped field sampled through its own gradient
  float fbm3(vec2 p){ float a=.5, s=0.; for(int i=0;i<3;i++){ s+=a*vnoise(p); p=p*2.02+vec2(31.7,17.3); a*=.5; } return s; }
  float H(vec2 p, float t){
    vec2 w = vec2(fbm3(p*.8 + vec2(0., t*.13)), fbm3(p*.8 + vec2(5.2, -t*.09)));
    return fbm3(p + (w-.5)*1.2 + vec2(t*.04, 0.));
  }
  vec3 env(vec3 R){                                  // procedural studio: softbox above, horizon line, floor bounce
    float y = R.y;
    vec3 c = vec3(.07,.07,.08);
    c += vec3(.98,.98,1.) * smoothstep(.03,.28,y) * (1.-smoothstep(.55,.90,y));
    c += vec3(.30) * smoothstep(.90,1.,y);
    c += vec3(.36,.36,.40) * (1.-smoothstep(0.,.09,abs(y)));
    c += vec3(.22,.22,.25) * smoothstep(-.80,-.40,y) * (1.-smoothstep(-.32,-.10,y));
    c *= .92 + .08*R.x;
    return c;
  }
  // arc length along the pill edge, clockwise from the top-left tangent point (perimeter 1676.8)
  float ringS(vec2 p){
    if (p.x < 116.) { vec2 v = p - vec2(116.,116.); return 1312.4 + atan(-v.x, v.y)*116.; }
    if (p.x > 590.) { vec2 v = p - vec2(590.,116.); return 474. + atan(v.x, -v.y)*116.; }
    return p.y < 116. ? (p.x - 116.) : 838.4 + (590. - p.x);
  }
  float wrapd(float a, float b){ return mod(a - b + 838.4, 1676.8) - 838.4; }
  vec3 metal(vec2 p, float d, vec2 n, vec2 kp, float px, out float alpha){
    // a chrome tube of constant section; only its surface flows
    float T = 26.;
    alpha = 1. - smoothstep(T-px, T+px, d);
    if (alpha <= 0.) return vec3(0.);
    float u_ = clamp(2.*d/T - 1., -1., 1.);
    float hz = sqrt(max(0., 1.-u_*u_));               // half-round section
    float dh = -u_/max(hz,.12);
    float sA = ringS(p);
    float t = uTime * (1. + .15*uHover);              // always slow; hover barely hurries it
    // periodic flow along the ring: three harmonics at different speeds
    float k = 6.2832/1676.8;
    float a1 = k*3.*sA - t*.55, a2 = k*5.*sA + t*.42 + 1.7, a3 = k*8.*sA - t*.85 + 4.1;
    float flow = (sin(a1) + .7*sin(a2) + .5*sin(a3)) / 2.2;
    float dflow = (3.*cos(a1) + 3.5*cos(a2) + 4.*cos(a3)) * k / 2.2;
    // two mercury glints circulating in opposite directions
    float g1 = wrapd(sA, mod(t*105., 1676.8));          // one lap in ~16 s
    float g2 = wrapd(sA, mod(2200. - t*75., 1676.8));   // the other way, ~22 s
    float drop = exp(-g1*g1/1600.) + exp(-g2*g2/1600.);
    vec2 tau = vec2(-n.y, n.x);
    vec2 grad = dh*n*(.9 + .3*flow + .6*drop) + tau*dflow*34.;
    vec3 N = normalize(vec3(-grad.x, grad.y, 1.));    // lighting space is y-up
    vec3 V = vec3(0.,0.,1.);
    vec3 R = reflect(-V, N);
    vec3 c = env(R) * vec3(.96,.97,1.);
    c *= .90 + .18*flow;
    c += drop * .5 * hz*hz * mix(vec3(1.), vec3(1.,.78,.5), uHover);
    c += .16*pow(1.-N.z, 3.);                          // grazing fresnel
    c *= .55 + .45*smoothstep(0., 3., d);               // dark seam against the pill
    c += uHover * vec3(1.,.45,.12) * .22 * smoothstep(200.,70.,length(kp)) * (.4+.6*hz);
    return c;
  }

  vec3 crystal(vec2 kp, float kr, float px, vec3 under){
    vec2 q = kp/88.;
    float t = q.y*.5+.5;                                  // 0 top -> 1 bottom of the well
    float rw = kr/88.;
    vec3 well = vec3(mix(.34,.60,t));
    well *= 1. - .40*smoothstep(.70,1.,rw)*(1.-t);        // inner shadow under the top lip
    well += .28*smoothstep(.90,.985,rw)*t;                // lit bottom lip
    float R = 80.; float rs = kr/R;
    well *= 1. - .35*smoothstep(R+7., R, kr);             // contact shadow around the sphere
    float sph = 1. - smoothstep(R-px, R+px, kr);
    if (sph <= 0.) return well;
    float z = sqrt(max(0., 1.-rs*rs));
    vec3 N = vec3(q.x*88./R, -q.y*88./R, z);              // y up
    vec3 V = vec3(0.,0.,1.);
    float fres = pow(1.-z, 2.6);
    // refracted lookup into the shard field
    vec3 Rf = refract(-V, N, 1./1.5);
    vec2 uv = N.xy*.5 + Rf.xy*1.1 + vec2(uTime*.02, -uTime*.013);
    vec3 vr = voro(uv*3.0);
    float facet = 1. - smoothstep(0., .14, vr.y - vr.x);  // shard boundaries
    float shard = .7 + .3*vr.z;
    float mott = fbm(uv*4.);
    // transparent glass: the dark well shows through, refracted, with bright shard edges
    float tr = clamp(.5 - (q.y + Rf.y*.8)*.5, 0., 1.);
    vec3 floorC = vec3(mix(.16,.34,tr)) * (.85+.3*mott);
    vec3 glass = mix(floorC, vec3(.62,.66,.80), .22*shard + .18*(1.-z)) * (.8+.2*z);
    float depth = pow(rs, 1.5);
    vec3 core = mix(vec3(.26,.05,0.), vec3(.95,.36,.03), depth) * (.75+.5*shard);
    core = mix(core, vec3(1.,.66,.22), smoothstep(.5,1.,rs)*smoothstep(-.1,.9,-N.y));   // amber pooling at the bottom
    vec3 interior = mix(glass, core, uHover);
    interior += facet * mix(vec3(.80,.84,1.)*(.55+.45*z), vec3(1.,.70,.35)*.6, uHover);
    float pt = smoothstep(.10, 0., vr.x) * (.5+.5*sin(uTime*2.+vr.z*40.));
    interior += pt * mix(vec3(.9,.92,1.), vec3(1.,.92,.75), uHover) * (.55+.45*uHover);
    // lighting
    vec3 L1 = normalize(vec3(-.45,.75,.5));
    float blob = smoothstep(.72,.985, dot(N, normalize(vec3(-.18,.72,.67))));
    float spec = pow(max(dot(reflect(-L1,N),V),0.), 90.);
    vec3 rimCol = mix(vec3(.96,.96,1.), vec3(1.,.72,.40), uHover);
    vec3 c = interior*(1.-.45*fres) + rimCol*fres*.9;
    c += blob*.42*(1.-.5*uHover) + spec*.9;
    float glint = smoothstep(.55,1.,rs) * smoothstep(.15,1.,-N.y);
    c += mix(vec3(.78,.74,.92), vec3(1.,.50,.12), uHover) * glint * .55;
    return mix(well, c, sph);
  }

  void main(){
    vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uU - vec2(48.);
    float px = 1./uU;
    vec2 c = vec2(clamp(p.x,116.,590.),116.);
    vec2 dv = p - c; float dist = length(dv);
    float d = dist - 116.;
    vec2 kp = p - vec2(590.,116.); float kr = length(kp);
    float cover = 1. - smoothstep(-px, px, d);
    if (cover <= .001){
      float ma; vec3 mc = metal(p, d, dv/max(dist,1e-4), kp, px, ma);
      fragColor = vec4(mc*ma, ma); return;
    }
    float inside = -d;
    vec2 n = dist > 0. ? dv/dist : vec2(0.,-1.);
    float lit = -n.y;                                     // 1 on the top edge
    float base = tone(p.y) * (1. + .05*(fbm(p*.03)-.5));
    float k = .42 - .22*lit, w = 34. - 10.*lit;
    float f = pow(max(0., 1.-(inside-2.5)/w), 1.25);
    float L = base * (1. - k*f);
    float rim = 1. - smoothstep(2.0, 3.2, inside);
    L = mix(L, .34, rim);
    // fleck noise: 2-unit cells, soft round dots, denser lower down
    vec2 cell = floor(p*.5); vec2 fc = fract(p*.5)-.5;
    float dotm = smoothstep(.72,.22,length(fc));
    float h1=hash21(cell), h2=hash21(cell+11.3), h3=hash21(cell+23.7), h4=hash21(cell+37.1);
    float envD = .15 + .85*smoothstep(.05,.40,p.y/232.);
    float fleck = step(h1,.42) * (.25+.55*h2) * dotm * envD;
    L *= 1. - .30*fleck;
    // mica sparkle, twinkling
    float tw = .6 + .4*sin(uTime*(.8+1.6*h3) + h4*6.2832);
    float spark = step(h3,.10) * h2*h2 * dotm * tw;
    L += .38*spark*(.5+.5*smoothstep(.1,.5,p.y/232.));
    // pointer scratches: hairline grooves lit from above (dark upper wall, bright lower wall)
    vec2 tc = gl_FragCoord.xy / uRes;
    float s0 = texture(uScratch, tc).r;
    float sU = texture(uScratch, tc + vec2(0., 1./uRes.y)).r;
    float sD = texture(uScratch, tc - vec2(0., 1./uRes.y)).r;
    L += (.58*(sU - sD) - .05*s0) * (1.-rim);
    vec3 col = vec3(L);
    col += uHover * vec3(1.,.45,.10) * .22 * smoothstep(175.,88.,kr) * (1.-rim);   // warm spill on the body
    float wellA = 1. - smoothstep(88.-px, 88.+px, kr);
    if (wellA > 0.) col = mix(col, crystal(kp, kr, px, col), wellA);
    if (cover < .999){ float ma; vec3 mc = metal(p, max(d,0.), dv/max(dist,1e-4), kp, px, ma); col = mix(mc, col, cover); cover = max(cover, ma); }
    fragColor = vec4(col*cover, cover);
  }\`;

  const PTS_VS = \`#version 300 es
  in vec4 aSeed;
  uniform vec2 uRes; uniform float uU, uTime, uHover;
  out float vA; out vec3 vCol;
  void main(){
    float s0=aSeed.x, s1=aSeed.y, s2=aSeed.z, s3=aSeed.w;
    float speed = (.10 + .30*s3) * (1. + 2.*uHover);
    float t = uTime*speed + s0*6.2832;
    float rad = .18 + .72*s1;
    float tilt = s2*3.1416, yaw = s3*6.2832;
    vec3 pl = vec3(cos(t), 0., sin(t)) * rad;
    vec3 p1 = vec3(pl.x, pl.y*cos(tilt)-pl.z*sin(tilt), pl.y*sin(tilt)+pl.z*cos(tilt));
    vec3 p = vec3(p1.x*cos(yaw)+p1.z*sin(yaw), p1.y, -p1.x*sin(yaw)+p1.z*cos(yaw));
    // on hover a few embers drift up out of the crystal and fade
    float esc = step(.74, s1) * uHover;
    float rise = fract(uTime*.22 + s0);
    p.y += esc * rise * 1.9; p.x += esc * sin(rise*9. + s2*6.) * .18 * rise;
    float fade = 1. - esc*smoothstep(.5, 1., rise);
    vec2 ref = vec2(590.,116.) + vec2(p.x, -p.y) * 80. + vec2(48.);
    vec2 px = ref * uU; px.y = uRes.y - px.y;
    gl_Position = vec4(px/uRes*2.-1., 0., 1.);
    float depth = p.z*.5+.5;
    gl_PointSize = max(1., (1.5 + 2.8*s2) * uU * (.55+.55*depth));
    float tw = .6 + .4*sin(uTime*(1.+2.*s2) + s1*6.28);
    vA = (.42 + .58*uHover) * (.3 + .7*depth) * tw * fade;
    vCol = mix(vec3(.80,.82,.95), vec3(1.,.66,.28), uHover);
  }\`;
  const LINE_VS = \`#version 300 es
  in vec2 aP; in float aW; uniform vec2 uRes; uniform float uU; out float vW;
  void main(){ vec2 px = (aP + vec2(48.)) * uU; px.y = uRes.y - px.y; gl_Position = vec4(px/uRes*2.-1., 0., 1.); vW = aW; }\`;
  const LINE_FS = \`#version 300 es
  precision mediump float; in float vW; out vec4 o; void main(){ o = vec4(vW); }\`;
  const FADE_FS = \`#version 300 es
  precision mediump float; uniform float uFade; out vec4 o; void main(){ o = vec4(uFade); }\`;
  const PTS_FS = \`#version 300 es
  precision mediump float; in float vA; in vec3 vCol; out vec4 o;
  void main(){ float d=length(gl_PointCoord-.5)*2.; float a=smoothstep(1.,.12,d); a*=a*vA; o=vec4(vCol*a, a); }\`;

  // ------------------------------------------------------------------ setup
  const gl = cv.getContext('webgl2', { alpha:true, premultipliedAlpha:true, antialias:false, powerPreference:'low-power' });
  if (!gl) { cta.classList.add('no-gl'); return; }
  const compile = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
  const program = (vs, fs) => { const p = gl.createProgram(); gl.attachShader(p, compile(gl.VERTEX_SHADER, vs)); gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p)); return p; };
  let face, pts, lineP, fadeP, U = {}, vaoQuad, vaoPts, vaoLine, lb;
  const N_PTS = 180;
  try {
    face = program(QUAD_VS, FACE_FS); pts = program(PTS_VS, PTS_FS);
    lineP = program(LINE_VS, LINE_FS); fadeP = program(QUAD_VS, FADE_FS);
  } catch (e) { console.error(e); cta.classList.add('no-gl'); return; }
  for (const k of ['uRes','uU','uTime','uHover']) { U['f_'+k] = gl.getUniformLocation(face, k); U['p_'+k] = gl.getUniformLocation(pts, k); }
  U.f_uScratch = gl.getUniformLocation(face, 'uScratch');
  U.l_uRes = gl.getUniformLocation(lineP, 'uRes'); U.l_uU = gl.getUniformLocation(lineP, 'uU');
  U.fade = gl.getUniformLocation(fadeP, 'uFade');
  vaoQuad = gl.createVertexArray(); gl.bindVertexArray(vaoQuad);
  const qb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, qb);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(face, 'aPos'); gl.enableVertexAttribArray(aPos); gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
  vaoPts = gl.createVertexArray(); gl.bindVertexArray(vaoPts);
  const seeds = new Float32Array(N_PTS * 4);
  let s = 0x2545F491; const rnd = () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; };
  for (let i = 0; i < seeds.length; i++) seeds[i] = rnd();
  const pb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, pb); gl.bufferData(gl.ARRAY_BUFFER, seeds, gl.STATIC_DRAW);
  const aSeed = gl.getAttribLocation(pts, 'aSeed'); gl.enableVertexAttribArray(aSeed); gl.vertexAttribPointer(aSeed, 4, gl.FLOAT, false, 0, 0);
  // scratch strokes: dynamic line list (x, y, intensity) in design units
  vaoLine = gl.createVertexArray(); gl.bindVertexArray(vaoLine);
  lb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, lb); gl.bufferData(gl.ARRAY_BUFFER, 12 * 4096, gl.DYNAMIC_DRAW);
  const aP = gl.getAttribLocation(lineP, 'aP'), aW = gl.getAttribLocation(lineP, 'aW');
  gl.enableVertexAttribArray(aP); gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 12, 0);
  gl.enableVertexAttribArray(aW); gl.vertexAttribPointer(aW, 1, gl.FLOAT, false, 12, 8);
  gl.bindVertexArray(null);
  // scratch map: an offscreen texture the pointer draws into; it fades a little every frame
  let scratchTex = null, fbo = null;
  function makeScratchMap(w, h) {
    if (scratchTex) { gl.deleteTexture(scratchTex); gl.deleteFramebuffer(fbo); }
    scratchTex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, scratchTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    fbo = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, scratchTex, 0);
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  const segs = [];
  let prev = null;
  cta.addEventListener('pointermove', e => {
    const r = cta.getBoundingClientRect(); const u = r.width / 706;
    const x = (e.clientX - r.left) / u, y = (e.clientY - r.top) / u;
    if (!prev) { prev = { x, y }; return; }
    const dx = x - prev.x, dy = y - prev.y, len = Math.hypot(dx, dy);
    if (len < 0.8) return;
    const tx = dx / len, ty = dy / len, nx = -ty, ny = tx;
    for (let i = 0; i < 3; i++) {                     // a few hairlines beside the path, like a burr
      const o = (rnd() - 0.5) * 5, w = 0.3 + 0.35 * rnd(), j0 = rnd() * 0.3 * len, j1 = rnd() * 0.3 * len;
      segs.push(prev.x + nx * o + tx * j0, prev.y + ny * o + ty * j0, w, x + nx * o - tx * j1, y + ny * o - ty * j1, w);
    }
    if (segs.length > 6 * 1000) segs.splice(0, segs.length - 6 * 1000);
    prev = { x, y };
  });
  cta.addEventListener('pointerleave', () => { prev = null; });

  // ------------------------------------------------------------------ frame
  let W = 0, H = 0, lastTick = 0, raf = 0;
  function resize() {
    const r = cta.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const u = r.width / 706;
    const w = Math.round((706 + 96) * u * dpr), h = Math.round((232 + 96) * u * dpr);
    if (w < 4 || h < 4) return false;
    if (w !== W || h !== H) { W = w; H = h; cv.width = W; cv.height = H; makeScratchMap(W, H); }
    return true;
  }
  function render(now) {
    if (!resize()) return;
    const hover = parseFloat(getComputedStyle(clock).opacity) || 0;
    const t = reduced ? 0 : now / 1000;
    gl.viewport(0, 0, W, H);
    // 1. scratch map: fade a touch, then add this frame's strokes
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.enable(gl.BLEND);
    gl.blendEquation(gl.FUNC_REVERSE_SUBTRACT); gl.blendFunc(gl.ONE, gl.ONE);
    gl.useProgram(fadeP); gl.uniform1f(U.fade, 1.25 / 255);
    gl.bindVertexArray(vaoQuad); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    gl.blendEquation(gl.FUNC_ADD);
    if (segs.length) {
      gl.useProgram(lineP); gl.uniform2f(U.l_uRes, W, H); gl.uniform1f(U.l_uU, W / 802);
      gl.bindVertexArray(vaoLine); gl.bindBuffer(gl.ARRAY_BUFFER, lb);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(segs));
      gl.drawArrays(gl.LINES, 0, segs.length / 3); segs.length = 0;
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    // 2. face + crystal
    gl.disable(gl.BLEND);
    gl.useProgram(face);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, scratchTex); gl.uniform1i(U.f_uScratch, 0);
    gl.uniform2f(U.f_uRes, W, H); gl.uniform1f(U.f_uU, W / 802); gl.uniform1f(U.f_uTime, t); gl.uniform1f(U.f_uHover, hover);
    gl.bindVertexArray(vaoQuad); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    // 3. particles
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE);
    gl.useProgram(pts);
    gl.uniform2f(U.p_uRes, W, H); gl.uniform1f(U.p_uU, W / 802); gl.uniform1f(U.p_uTime, t); gl.uniform1f(U.p_uHover, hover);
    gl.bindVertexArray(vaoPts); gl.drawArrays(gl.POINTS, 0, N_PTS);
    gl.bindVertexArray(null);
    lastTick = performance.now();
  }
  const loop = now => { raf = requestAnimationFrame(loop); render(now); };
  render(performance.now());                       // paint synchronously so a background tab is never blank
  raf = requestAnimationFrame(loop);
  // rAF can stall in a hidden tab; keep the hover state honest with a slow watchdog
  setInterval(() => { if (performance.now() - lastTick > 400) render(performance.now()); }, 500);
  addEventListener('resize', () => render(performance.now()));
  document.addEventListener('visibilitychange', () => render(performance.now()));
  cv.addEventListener('webglcontextlost', e => { e.preventDefault(); cancelAnimationFrame(raf); cta.classList.add('no-gl'); });
  window.__render = () => render(performance.now());
})();
<\/script>
</body>
</html>
`;function te({className:e=``,style:t}){let n=(0,b.useRef)(null),[r,i]=(0,b.useState)(()=>typeof document>`u`||!document.hidden),[a,o]=(0,b.useState)(!0),[s,c]=(0,b.useState)(!1);(0,b.useEffect)(()=>{let e=n.current;if(!e||typeof IntersectionObserver>`u`)return;let t=new IntersectionObserver(([e])=>{o(e?.isIntersecting??!0)},{rootMargin:`80px`});return t.observe(e),()=>t.disconnect()},[]),(0,b.useEffect)(()=>{if(typeof document>`u`)return;let e=()=>i(!document.hidden);return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]);let l=a&&r;return(0,b.useEffect)(()=>{c(!1)},[l]),(0,x.jsx)(`div`,{ref:n,className:`threeui-background get-started-button${e?` ${e}`:``}`,role:`group`,"aria-label":`Interactive liquid-chrome Get Started button`,"data-state":l?s?`ready`:`loading`:`paused`,style:{position:`relative`,overflow:`hidden`,background:`transparent`,pointerEvents:`auto`,...t},children:l?(0,x.jsx)(`iframe`,{title:`Get Started liquid-chrome button`,srcDoc:N,sandbox:`allow-scripts`,loading:`eager`,onLoad:()=>c(!0),style:{position:`absolute`,inset:0,display:`block`,width:`100%`,height:`100%`,border:0,background:`transparent`,opacity:+!!s,pointerEvents:s?`auto`:`none`,transition:`opacity 240ms ease-out`}}):null})}var ne=`<!DOCTYPE html><html><body></body></html>
`,re=`<!DOCTYPE html><html><body></body></html>
`,ie=`<!DOCTYPE html><html><body></body></html>
`,ae=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Creator Studio — Keynote Motion Study</title>
<meta name="description" content="Self-contained 30-second keynote-style motion study: twenty-one beats of kinetic type, device mockups and app props on black.">
<style>
  :root{
    --ink:#f5f5f7;
    --font:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%;overflow:hidden;background:#000}
  body{display:grid;place-items:center;font-family:var(--font);color:var(--ink)}
  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
  #stage{position:relative;width:min(100vw,177.78vh);aspect-ratio:16/9;overflow:hidden;background:#000}
  #comp{position:absolute;left:50%;top:50%;width:1280px;height:720px;margin:-360px 0 0 -640px;transform-origin:50% 50%}
  .scene{position:absolute;inset:0;display:none}
  .scene.on{display:block}

  /* ---------- type ---------- */
  .line{position:absolute;inset:0;pointer-events:none}
  .tx{position:absolute;left:0;right:0;top:50%;text-align:center;white-space:nowrap;
      font-weight:600;letter-spacing:-.012em;line-height:1;transform:translateY(-50%);
      will-change:transform,opacity,filter}
  .tx span{display:inline-block;will-change:transform,opacity,filter}
  #ruler{position:absolute;left:-9999px;top:0;visibility:hidden;white-space:pre;
         font-weight:600;letter-spacing:-.012em;line-height:1;font-size:100px}

  .mark{display:inline-block;vertical-align:-.07em;margin-right:.14em}
  .mark svg{display:block;width:.8em;height:.8em}

  /* ---------- window wall ---------- */
  .win{position:absolute;border-radius:10px;overflow:hidden;background:#0b0b0f;
       box-shadow:0 22px 54px rgba(0,0,0,.72);will-change:transform,opacity}
  .win:after{content:"";position:absolute;inset:0;background:rgba(0,0,0,.34);pointer-events:none}
  .win .pane{position:absolute;left:7%;right:7%;top:14%;bottom:12%;border-radius:4px;overflow:hidden}
  .win .bar{height:15px;background:#26262b;display:flex;align-items:center;gap:4px;padding:0 6px}
  .win .bar i{width:5px;height:5px;border-radius:50%;background:#4a4a52;display:block}
  .win .body{position:absolute;left:0;right:0;top:15px;bottom:0}
  .win .side{position:absolute;left:0;top:0;bottom:0;width:21%;background:#1b1b20}
  .win .side u{display:block;height:6px;margin:6px 5px;border-radius:2px;background:#31313a}
  .win .strip{position:absolute;left:0;right:0;bottom:0;background:#131318}
  .win .strip u{position:absolute;bottom:5px;border-radius:2px}
  .win .bars{position:absolute;left:26%;right:7%;bottom:13%;top:18%;display:flex;align-items:flex-end;gap:6%}
  .win .bars u{flex:1;border-radius:1px}
  .win .txt{position:absolute;left:8%;right:8%;top:12%}
  .win .txt u{display:block;height:5px;border-radius:2px;background:#3c3c46;margin-bottom:7px}
  .win .tiles{position:absolute;inset:6%;display:grid;grid-template-columns:repeat(4,1fr);gap:4px}
  .win .tiles u{border-radius:2px}

  /* ---------- dock ---------- */
  #dockBar{position:absolute;left:125px;top:306px;width:1025px;height:106px;border-radius:26px;
           background:rgba(36,36,42,.74);border:1px solid rgba(255,255,255,.07);
           transform-origin:50% 50%;will-change:transform,opacity}
  .ico{position:absolute;width:65px;height:65px;border-radius:16px;
       background:linear-gradient(180deg,#3a3a43,#1d1d24);border:1px solid rgba(255,255,255,.13);
       box-shadow:inset 0 1px 0 rgba(255,255,255,.14);
       display:grid;place-items:center;will-change:transform,opacity}
  .ico svg{width:58px;height:58px;display:block;filter:saturate(1.15)}

  /* ---------- audio tracks ---------- */
  .track{position:absolute;left:340px;width:600px;border-radius:11px;overflow:hidden;
         transform-origin:50% 100%;will-change:transform,opacity}
  .track b{position:absolute;left:9px;top:5px;font-size:11px;font-weight:500;letter-spacing:.02em;color:rgba(255,255,255,.95)}
  .track .art{position:absolute;left:0;right:0;top:19px;bottom:0}
  .track .art u{position:absolute;background:rgba(255,255,255,.9);border-radius:1px}

  /* ---------- devices ---------- */
  .mac{position:absolute;left:50%;top:123px;width:648px;margin-left:-324px;will-change:transform,opacity}
  .mac .lid{position:relative;border:10px solid #1b1b1f;border-radius:20px;background:#000;
            box-shadow:0 0 0 1px #3d3d44,0 34px 70px rgba(0,0,0,.75)}
  .mac .scr{position:relative;width:100%;padding-top:64%;overflow:hidden;border-radius:9px;background:#000}
  .mac .notch{position:absolute;left:50%;top:-8px;width:78px;height:8px;margin-left:-39px;background:#1b1b1f;border-radius:0 0 6px 6px}
  .mac .base{position:relative;left:50%;width:746px;height:15px;margin-left:-373px;border-radius:0 0 14px 14px;
             background:linear-gradient(180deg,#2c2c33,#0d0d10);box-shadow:0 8px 22px rgba(0,0,0,.75)}
  .mac .base:after{content:"";position:absolute;left:50%;bottom:0;width:96px;height:5px;margin-left:-48px;
                   border-radius:0 0 5px 5px;background:#3a3a42}
  .pad{position:absolute;left:50%;top:157px;width:557px;margin-left:-278.5px;padding:12px;border-radius:26px;
       background:linear-gradient(160deg,#63676f,#2b2d33);box-shadow:0 30px 70px rgba(0,0,0,.75);
       transform-origin:50% 46%;will-change:transform,opacity}
  .pad .scr{position:relative;width:100%;padding-top:73.5%;overflow:hidden;border-radius:15px;background:#000}
  .scrIn{position:absolute;inset:0}

  .grad{position:absolute;inset:0}
  .grad b{position:absolute;border-radius:50%;display:block}
  .canvasType{position:absolute;inset:0;font-weight:600;letter-spacing:-.022em;line-height:.94}
  .canvasType div{position:absolute;white-space:nowrap;will-change:transform,opacity}

  .tbox{position:absolute;border:1px solid rgba(255,255,255,.55);will-change:transform,opacity}
  .tbox i{position:absolute;width:6px;height:6px;background:#fff;border:1px solid #75757c}
  .tbox i:nth-child(1){left:-3px;top:-3px}.tbox i:nth-child(2){right:-3px;top:-3px}
  .tbox i:nth-child(3){left:-3px;bottom:-3px}.tbox i:nth-child(4){right:-3px;bottom:-3px}
  .tbox span{position:absolute;left:10px;top:50%;transform:translateY(-52%);font-weight:600;white-space:nowrap;letter-spacing:-.02em}

  .palette{position:absolute;right:9px;top:9px;bottom:9px;width:28px;border-radius:14px;
           background:rgba(42,42,48,.9);display:flex;flex-direction:column;align-items:center;gap:9px;padding:9px 0}
  .palette u{display:block;width:11px;height:11px;border-radius:3px;background:#71717b}
  .guide{position:absolute;left:0;right:0;height:1px;background:#3ad462;opacity:.75}
  .hand{position:absolute;will-change:transform,opacity}

  /* ---------- edit clip ---------- */
  #clip{position:absolute;border-radius:5px;overflow:hidden;background:#0e1430;
        border:2px solid #6a3af0;box-shadow:0 0 34px rgba(120,60,255,.75),inset 0 0 0 1px rgba(180,150,255,.4);
        will-change:transform,opacity}
  #clip .thumbs{position:absolute;left:0;right:0;top:0;height:74%;display:flex}
  #clip .thumbs u{flex:1;border-right:1px solid rgba(0,0,0,.4);position:relative;overflow:hidden;
                  background:linear-gradient(180deg,#8e9aa8 0%,#c3c9cf 42%,#6d757f 43%,#3c4249 100%)}
  #clip .thumbs u:after{content:"";position:absolute;left:34%;top:26%;width:32%;height:62%;border-radius:44% 44% 12% 12%;background:#14161c}
  #clip .wave{position:absolute;left:0;right:0;bottom:0;height:26%;background:#232a55;display:flex;align-items:flex-end;gap:1px;padding:0 2px}
  #clip .wave u{flex:1;background:rgba(190,200,255,.55);border-radius:1px 1px 0 0}

  /* ---------- prompt ---------- */
  #daisyC{position:absolute;left:0;top:0}
  #liquid{filter:url(#goo);position:absolute;inset:0}
  #liquid .drop{position:absolute;border-radius:50%;background:#8ecfee}
  .gloss{position:absolute;left:0;right:0;top:50%;text-align:center;white-space:nowrap;
         font-weight:700;letter-spacing:-.02em;line-height:1;transform:translateY(-50%);
         color:transparent;background:linear-gradient(180deg,#ffffff 4%,#c8ebfb 32%,#5aa6cf 76%);
         -webkit-background-clip:text;background-clip:text;mix-blend-mode:screen}

  /* ---------- props ---------- */
  .keys{position:absolute;left:351px;top:421px;width:580px;height:123px;display:flex;gap:6px;will-change:opacity}
  .keys u{flex:1;border-radius:9px;background:linear-gradient(180deg,#3c3c43,#26262c);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}
  .bin{position:absolute;left:531px;top:444px;width:219px;height:219px;will-change:transform,opacity}
  .bin .cup{position:absolute;left:0;right:0;top:12px;bottom:0;
    clip-path:polygon(5% 0,95% 0,83% 100%,17% 100%);
    background:linear-gradient(180deg,rgba(206,210,216,.9),rgba(228,232,238,.94) 34%,rgba(244,246,249,.98));
    border-radius:10px 10px 30px 30px}
  .bin .rim{position:absolute;left:0;right:0;top:0;height:36px;border-radius:16px/18px;
    background:linear-gradient(180deg,rgba(250,251,253,.98),rgba(198,203,212,.8));
    box-shadow:inset 0 -7px 12px rgba(255,255,255,.5)}
  .bin .hole{position:absolute;left:16px;right:16px;top:6px;height:22px;border-radius:14px/11px;
    background:linear-gradient(180deg,rgba(90,96,106,.9),rgba(150,156,166,.7))}
  .wad{position:absolute;width:46px;height:46px;will-change:transform,opacity}
  .frag{position:absolute;left:0;right:0;top:50%;text-align:center;white-space:nowrap;font-weight:600;
         letter-spacing:-.012em;line-height:1;color:#9b22f0;transform:translateY(-50%);
         text-shadow:0 0 34px rgba(150,40,255,.95),0 0 70px rgba(150,40,255,.5);will-change:transform,opacity}
  .cursor{position:absolute;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.9);
          background:radial-gradient(circle at 34% 28%,rgba(255,255,255,.55),rgba(0,0,0,.5));will-change:transform,opacity}
  .glowdot{position:absolute;width:16px;height:16px;border-radius:50%;
           background:radial-gradient(circle,#ffe27a,#f0a020 55%,rgba(240,160,32,0) 72%);
           box-shadow:0 0 18px rgba(255,200,80,.9);will-change:transform,opacity}
  .appRow{position:absolute;left:0;right:0;text-align:center;white-space:nowrap;font-weight:600;
          letter-spacing:-.015em;line-height:1;will-change:transform,opacity}
  .appRow em{font-style:normal;display:inline-block;width:.92em;height:.92em;border-radius:.2em;
             vertical-align:-.16em;margin-right:.22em;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
</style>
</head>
<body>
<p class="sr">A thirty-second keynote-style motion study on black. A chromatic wordmark assembles, a wall of creative app windows drifts past, then twenty short type beats follow — one subscription, endless creativity, a dock of apps, a three-track beat, editing a video, taking your design anywhere, and quick verbs from Prompt it to Share it — closing on a price, a scrolling list of app names, and the Creator Studio wordmark.</p>
<div id="stage">
  <div id="comp"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b"/>
      <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="g"/>
      <feComposite in="SourceGraphic" in2="g" operator="atop"/>
    </filter>
  </svg>
</div>
<span id="ruler" aria-hidden="true"></span>
<script>
(function(){
  "use strict";
  var DUR=30.122, W=1280, H=720;
  var comp=document.getElementById('comp'), stage=document.getElementById('stage'), ruler=document.getElementById('ruler');

  /* ---------- math ---------- */
  var clamp=function(v,a,b){return v<a?a:(v>b?b:v)};
  var lerp=function(a,b,t){return a+(b-a)*t};
  var seg=function(t,a,b){return clamp((t-a)/(b-a||1e-6),0,1)};
  var smooth=function(t){return t*t*(3-2*t)};
  var eOut=function(t){return 1-Math.pow(1-t,3)};
  var eIn=function(t){return t*t*t};
  var back=function(t){var c=1.6;return 1+(c+1)*Math.pow(t-1,3)+c*Math.pow(t-1,2)};
  function rng(s){var a=s>>>0;return function(){a+=0x6D2B79F5;var t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}

  /* ---------- dom ---------- */
  function el(tag,cls,parent,html){
    var n=document.createElement(tag);
    if(cls)n.className=cls;
    if(html!=null)n.innerHTML=html;
    (parent||comp).appendChild(n);
    return n;
  }
  function setT(n,v){if(n._t!==v){n._t=v;n.style.transform=v}}
  function setO(n,v){var r=clamp(v,0,1).toFixed(3);if(n._o!==r){n._o=r;n.style.opacity=r}}
  function setF(n,v){if(n._f!==v){n._f=v;n.style.filter=v}}
  function setC(n,v){if(n._c!==v){n._c=v;n.style.color=v}}
  var TXY='translateY(-50%) ';

  /* fit a string to a pixel width so every beat matches the reference measurements */
  function fitPx(str,target,weight){
    ruler.style.fontWeight=weight||600;
    ruler.style.fontSize='100px';
    ruler.textContent=str;
    return 100*target/ruler.getBoundingClientRect().width;
  }
  function advances(str,fs,weight){
    ruler.style.fontWeight=weight||600;
    ruler.style.fontSize=fs+'px';
    var out=[];
    for(var i=0;i<str.length;i++){
      ruler.textContent=str[i];
      out.push(ruler.getBoundingClientRect().width);
    }
    return out;
  }
  function letters(node,str){
    node.textContent='';
    var out=[];
    for(var i=0;i<str.length;i++){
      var s=document.createElement('span');
      s.textContent=str[i]===' '?'\\u00a0':str[i];
      node.appendChild(s); out.push(s);
    }
    return out;
  }
  /* one centred line, auto-sized to a reference width */
  function textLine(scene,str,targetW){
    var wrap=el('div','line',scene);
    var tx=el('div','tx',wrap);
    var fs=fitPx(str,targetW);
    tx.style.fontSize=fs.toFixed(2)+'px';
    return {wrap:wrap, tx:tx, chars:letters(tx,str), fs:fs};
  }

  var APPLE='<svg viewBox="0 0 24 24" aria-hidden="true">'+
    '<path fill="currentColor" d="M17.1 12.7c0-2.6 2.1-3.9 2.2-4-1.2-1.8-3.1-2-3.7-2.1-1.7-.1-3.3 1-4.1 1-.8 0-2.1-1-3.5-1-1.8 0-3.6 1.1-4.5 2.8-1.9 3.4-.5 8.4 1.4 11.2 1 1.3 2.1 2.8 3.6 2.7 1.4 0 1.9-.9 3.6-.9s2.1.9 3.6.9c1.5 0 2.4-1.3 3.3-2.7 1.1-1.5 1.5-3 1.5-3.1-.1 0-3.4-1.3-3.4-4.8z"/>'+
    '<path fill="currentColor" d="M14.6 4.9c.8-.9 1.3-2.2 1.1-3.5-1.1.1-2.5.8-3.3 1.7-.7.9-1.3 2.2-1.1 3.4 1.2.1 2.5-.6 3.3-1.6z"/></svg>';

  /* =====================================================================
     1 + 21 · wordmark, chromatic assemble
     ===================================================================== */
  function makeWordmark(){
    var s=el('div','scene');
    var wrap=el('div','line',s);
    var tx=el('div','tx',wrap);
    var fs=fitPx('Creator Studio',678);
    tx.style.fontSize=fs.toFixed(2)+'px';
    var mk=el('span','mark',tx,APPLE);
    var chars=[], str='Creator Studio';
    for(var i=0;i<str.length;i++){
      var sp=document.createElement('span');
      sp.textContent=str[i]===' '?'\\u00a0':str[i];
      tx.appendChild(sp); chars.push(sp);
    }
    var R=rng(7719), jit=chars.map(function(){return [R()*2-1,R()*2-1,R()]});
    return {node:s, update:function(t,p){
      setO(mk,smooth(seg(p,.26,.5)));
      setT(mk,'scale('+lerp(.55,1,eOut(seg(p,.26,.56))).toFixed(3)+')');
      for(var i=0;i<chars.length;i++){
        var j=jit[i];
        var a=eOut(clamp(seg(p,.02,.5)*1.5-j[2]*.5,0,1));
        setT(chars[i],'translate('+(j[0]*62*(1-a)).toFixed(1)+'px,'+(j[1]*34*(1-a)).toFixed(1)+'px) scale('+lerp(1.24,1,a).toFixed(3)+')');
        setO(chars[i],Math.min(1,a*1.6));
        var sep=(1-a)*11;
        chars[i].style.textShadow=sep>.4
          ? (-sep).toFixed(1)+'px 0 rgba(255,64,72,.85),'+sep.toFixed(1)+'px 0 rgba(64,255,190,.8),0 '+(sep*.55).toFixed(1)+'px rgba(96,124,255,.8)'
          : 'none';
        setF(chars[i],sep>.7?'blur('+(sep*.3).toFixed(2)+'px)':'none');
      }
    }};
  }

  /* =====================================================================
     2 · wall of creative app windows
     ===================================================================== */
  var WALLPAL=[
    ['#1c6b47','#93d46b'],['#8a1d3c','#f05a6d'],['#123c70','#4aa8f0'],
    ['#572a86','#c07af0'],['#7d4a12','#f0b45a'],['#0e4f54','#4fd6c8'],
    ['#6b1050','#f05ac0'],['#24406b','#7aa8f0'],['#3a5f10','#b0e05a'],
    ['#6b2a10','#f08a5a'],['#28286b','#8a8af0'],['#0d5a2c','#5ad68a']
  ];
  function makeWall(){
    var s=el('div','scene'), R=rng(4242), wins=[];
    for(var i=0;i<34;i++){
      var w=el('div','win',s);
      var pal=WALLPAL[Math.floor(R()*WALLPAL.length)];
      var variant=i%6;
      var bw=lerp(160,330,R()), bh=bw*lerp(.6,.68,R());
      w.style.width=bw.toFixed(0)+'px'; w.style.height=bh.toFixed(0)+'px';
      el('div','bar',w,'<i></i><i></i><i></i>');
      var body=el('div','body',w);
      body.style.background='#0d0d12';
      var pane=el('div','pane',body);
      pane.style.background='linear-gradient(150deg,'+pal[0]+','+pal[1]+')';
      pane.style.opacity='.82';
      var k;
      if(variant===0){
        el('div','side',body,'<u></u><u></u><u></u><u></u><u></u>');
        var st=el('div','strip',body); st.style.height='26%';
        for(k=0;k<5;k++){var u=el('u','',st);u.style.left=(6+k*18)+'%';u.style.width='15%';u.style.height='11px';u.style.background=k%2?pal[1]:'#3f4a6a'}
      } else if(variant===1){
        pane.style.display='none';
        var st2=el('div','strip',body); st2.style.height='56%';
        for(k=0;k<7;k++){var u2=el('u','',st2);u2.style.left=(3+k*13.6)+'%';u2.style.width='12%';
          u2.style.height=(10+(k%3)*8)+'px';u2.style.bottom=(7+(k%3)*15)+'px';u2.style.background=k%2?pal[1]:pal[0]}
        var th=el('div','',body);
        th.style.cssText='position:absolute;left:6%;top:6%;width:54%;height:34%;border-radius:5px;background:linear-gradient(140deg,'+pal[0]+','+pal[1]+')';
      } else if(variant===2){
        pane.style.display='none';
        body.style.background='#e9e9ee';
        var bars=el('div','bars',body);
        for(k=0;k<6;k++){var b=el('u','',bars);b.style.height=(24+((k*37)%70))+'%';b.style.background=k%2?pal[1]:pal[0]}
        var tx2=el('div','txt',body);
        for(k=0;k<3;k++){var l3=el('u','',tx2);l3.style.background='#cbcbd2';l3.style.width=(80-k*18)+'%'}
      } else if(variant===3){
        pane.style.display='none';
        var ti=el('div','tiles',body);
        for(k=0;k<12;k++){var t4=el('u','',ti);t4.style.background='linear-gradient('+(k*30)+'deg,'+pal[0]+','+pal[1]+')'}
      } else if(variant===4){
        pane.style.display='none';
        for(k=0;k<3;k++){
          var tr=el('div','',body);
          tr.style.cssText='position:absolute;left:6%;right:6%;top:'+(11+k*29)+'%;height:21%;border-radius:4px;background:'+
            (k===0?pal[1]:k===1?pal[0]:'#7a3ad6')+';opacity:.92';
        }
      } else {
        var sh=el('div','',body);
        sh.style.cssText='position:absolute;left:20%;top:16%;width:60%;height:76%;border-radius:42% 42% 28% 28%;background:rgba(0,0,0,.4);filter:blur(7px)';
      }
      wins.push({n:w,rot:(R()*2-1)*2.6,ph:R()*6.283,w:bw,h:bh,d:R()});
      void i;
    }
    return {node:s, update:function(t,p){
      var phase=t<.5?0:(t<1.06?1:2);
      var pp=phase===0?seg(t,0,.5):phase===1?seg(t,.5,1.06):seg(t,1.06,1.92);
      var zoom=lerp(.9,1.16,pp)*(1+phase*.08);
      for(var i=0;i<wins.length;i++){
        var o=wins[i], k=(i+phase*11)%wins.length;
        var gx=((k*137)%13)/12, gy=((k*71)%9)/8;
        var depth=.62+((k*53)%100)/100*.6;
        var x=lerp(-120,1400,gx)+Math.sin(t*.7+o.ph)*18;
        var y=lerp(-80,800,gy)+Math.cos(t*.55+o.ph)*15;
        var sc=depth*zoom;
        var cx=(x-W/2)*lerp(1,1.16,pp)+W/2, cy=(y-H/2)*lerp(1,1.16,pp)+H/2;
        o.n.style.left=(cx-o.w/2).toFixed(1)+'px';
        o.n.style.top=(cy-o.h/2).toFixed(1)+'px';
        setT(o.n,'scale('+sc.toFixed(3)+') rotate('+o.rot.toFixed(2)+'deg)');
        setO(o.n,Math.min(1,smooth(seg(t,0,.24))*1.2)*(1-seg(t,1.8,1.92))*clamp(.5+depth*.5,.4,1));
      }
    }};
  }

  /* =====================================================================
     3 · one subscription / endless creativity
     ===================================================================== */
  function makeLines(){
    var s=el('div','scene');
    function build(str,target){
      var wrap=el('div','line',s), tx=el('div','tx',wrap);
      tx.style.fontSize=fitPx(str,target).toFixed(2)+'px';
      var out=[];
      str.split(' ').forEach(function(word,i){
        var sp=document.createElement('span');
        sp.textContent=(i?'\\u00a0':'')+word;
        tx.appendChild(sp); out.push(sp);
      });
      return {tx:tx,words:out};
    }
    var A=build('One subscription.',705), B=build('Endless creativity.',702);
    function play(o,p,a0,out0){
      var vis=1-smooth(seg(p,out0,out0+.07));
      setO(o.tx,vis);
      for(var i=0;i<o.words.length;i++){
        var q=eOut(clamp(seg(p,a0+i*.135,a0+.2+i*.135),0,1));
        setO(o.words[i],q*vis);
        setT(o.words[i],'translateY('+((1-q)*24).toFixed(1)+'px)');
        setF(o.words[i],q<.97?'blur('+((1-q)*6).toFixed(2)+'px)':'none');
      }
    }
    return {node:s, update:function(t,p){ play(A,p,.02,.44); play(B,p,.5,.94) }};
  }

  /* =====================================================================
     4 · dock
     ===================================================================== */
  var ICONS=[
    '<svg viewBox="0 0 32 32"><rect x="7" y="16" width="4.4" height="10" rx="1" fill="#7fd44a"/><rect x="13.8" y="9" width="4.4" height="17" rx="1" fill="#a6e86a"/><rect x="20.6" y="13" width="4.4" height="13" rx="1" fill="#5fbe32"/><rect x="6" y="27" width="20" height="1.8" fill="#c9f2a0"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M6 20h20l-4-9H10z" fill="#6fb6f0"/><rect x="15" y="20" width="2" height="7" fill="#8fd0f7"/><rect x="10" y="26" width="12" height="2" rx="1" fill="#4a90d0"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M8 25c0-10 3-14 6-14s3 7 5 7 3-4 5-4" stroke="#f05ad0" stroke-width="3.2" fill="none" stroke-linecap="round"/><circle cx="23.4" cy="14.6" r="2.6" fill="#f7a0e4"/></svg>',
    '<svg viewBox="0 0 32 32"><rect x="5" y="12" width="22" height="13" rx="3" fill="#a15ff0"/><path d="M5 12l6-4 16 2-4 3z" fill="#c79af7"/></svg>',
    '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12.5" fill="#dce1e9"/><circle cx="16" cy="16" r="7" fill="#9aa3b0"/><circle cx="16" cy="16" r="2" fill="#33373f"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M16 8l9.5 5-9.5 5-9.5-5z" fill="#e0324a"/><path d="M16 18l9.5 5-9.5 5-9.5-5z" fill="#a81d2c" opacity=".9"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M8 25l16-17 2.4 3.4-14.4 15z" fill="#f0863a"/><path d="M8 25.6h18.4" stroke="#f0b45a" stroke-width="2.2"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M16 6v20" stroke="#4fd6b8" stroke-width="2"/><circle cx="16" cy="9.5" r="3.2" fill="#4fd6b8"/><circle cx="21.5" cy="18" r="3.2" fill="#4fd6b8"/><circle cx="10.5" cy="22.5" r="3.2" fill="#4fd6b8"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M8 9h16l-8 7 8 7H8l8-7z" fill="none" stroke="#f0d05a" stroke-width="2.6"/></svg>',
    '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="11.5" fill="#2f7fb8"/><path d="M7.5 17c2-4.4 3 4.4 5 0s3 4.4 5 0 3 3.4 5-1" stroke="#c8eafa" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>'
  ];
  function makeDock(){
    var s=el('div','scene');
    var bar=el('div','',s); bar.id='dockBar';
    var icos=[];
    for(var i=0;i<ICONS.length;i++){
      var n=el('div','ico',s,ICONS[i]);
      n.style.left=(148+i*101)+'px'; n.style.top='326px';
      icos.push(n);
    }
    return {node:s, update:function(t,p){
      var q0=eOut(seg(p,0,.24));
      setO(bar,q0);
      setT(bar,'scaleX('+lerp(.7,1,q0).toFixed(3)+')');
      for(var i=0;i<icos.length;i++){
        var q=clamp(seg(p,.08+i*.03,.36+i*.03),0,1);
        var lift=(i===4)?eOut(seg(p,.5,.76)):0;
        setO(icos[i],Math.min(1,q*1.7));
        setT(icos[i],'translateY('+((1-back(q))*30-lift*52).toFixed(1)+'px) scale('+(lerp(.6,1,back(q))*(1+lift*.58)).toFixed(3)+')');
        icos[i].style.boxShadow=lift>.02
          ? '0 0 '+(46*lift).toFixed(0)+'px rgba(216,234,255,'+(.85*lift).toFixed(2)+'),inset 0 1px 0 rgba(255,255,255,.2)'
          : 'inset 0 1px 0 rgba(255,255,255,.14)';
        icos[i].style.zIndex=i===4?5:1;
      }
    }};
  }

  /* =====================================================================
     5 · make a beat
     ===================================================================== */
  function makeBeatText(){
    var s=el('div','scene');
    var L=textLine(s,'Make a beat.',469);
    var R=rng(551), jit=L.chars.map(function(){return [R()*2-1,R()*2-1]});
    return {node:s, update:function(t,p){
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.88,1))));
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.04+i*.028,.34+i*.028),0,1));
        setT(L.chars[i],'translate('+(jit[i][0]*34*(1-q)).toFixed(1)+'px,'+
          (jit[i][1]*18*(1-q)+Math.sin(t*5.4+i)*(1-q)*5).toFixed(1)+'px)');
        setO(L.chars[i],Math.min(1,q*1.5));
      }
    }};
  }

  /* =====================================================================
     6 · three-track beat
     ===================================================================== */
  function makeTracks(){
    var s=el('div','scene'), R=rng(9051);
    var specs=[
      {name:'DRUMS_137BPM', top:112,h:138,g:'linear-gradient(180deg,#84e44e,#5cc832)',glow:'#7fe04a',kind:'roll'},
      {name:'BASS_137BPM',  top:259,h:132,g:'linear-gradient(180deg,#a850f0,#8b2ce0)',glow:'#a24ef0',kind:'ticks'},
      {name:'HARMONY_137BPM',top:400,h:140,g:'linear-gradient(180deg,#d431c2,#6f0d58)',glow:'#d02fc0',kind:'wave'}
    ];
    var tr=specs.map(function(sp){
      var n=el('div','track',s);
      n.style.top=sp.top+'px'; n.style.height=sp.h+'px'; n.style.background=sp.g;
      n.style.boxShadow='0 0 30px '+sp.glow+'70,0 0 5px '+sp.glow+'bb';
      el('b','',n).textContent=sp.name;
      var art=el('div','art',n), i, j;
      if(sp.kind==='roll'){
        for(i=0;i<52;i++){
          var u=el('u','',art);
          u.style.left=(8+i*11.4)+'px'; u.style.width='6px';
          u.style.height=(R()<.3?15:9)+'px'; u.style.top=(34+R()*58)+'px';
        }
      } else if(sp.kind==='ticks'){
        for(i=0;i<28;i++){
          var y=24+R()*54;
          var g=el('u','',art); g.style.left=(16+i*20.4)+'px'; g.style.width='15px'; g.style.height='2px'; g.style.top=y+'px';
          var v=el('u','',art); v.style.left=(16+i*20.4)+'px'; v.style.width='2px'; v.style.height='11px'; v.style.top=(y-4)+'px';
        }
      } else {
        for(i=0;i<2;i++){
          for(j=0;j<126;j++){
            var amp=(Math.sin(j*.2)*.4+Math.sin(j*.06)*.4+.62)*16;
            var wv=el('u','',art);
            wv.style.left=(7+j*4.7)+'px'; wv.style.width='2px';
            wv.style.height=Math.max(2,amp*(.5+R()*.7)).toFixed(1)+'px';
            wv.style.top=(16+i*40+(20-amp/2)).toFixed(1)+'px';
            wv.style.background='rgba(255,255,255,.6)';
          }
        }
      }
      return n;
    });
    var head=el('div','',s);
    head.style.cssText='position:absolute;top:75px;width:6px;height:30px;background:#fff;border-radius:1px';
    return {node:s, update:function(t,p){
      for(var i=0;i<tr.length;i++){
        var q=eOut(clamp(seg(p,.06+i*.2,.32+i*.2),0,1));
        setO(tr[i],q);
        setT(tr[i],'translateY('+((1-q)*30).toFixed(1)+'px) scaleY('+lerp(.68,1,q).toFixed(3)+')');
      }
      setO(head,smooth(seg(p,.02,.12)));
      head.style.left=(516+Math.sin(t*2.4)*7).toFixed(1)+'px';
    }};
  }

  /* =====================================================================
     7 · edit a video
     ===================================================================== */
  function makeEditVideo(){
    var s=el('div','scene');
    var fs=fitPx('Edit a',237);
    // staggered intro pair
    var pre=el('div','line',s);
    var p1=el('div','tx',pre), p2=el('div','tx',pre);
    p1.style.fontSize=p2.style.fontSize=fs.toFixed(2)+'px';
    p1.textContent='Edit a'; p2.textContent='video.';
    p1.style.color='#c98ff5'; p1.style.textShadow='0 0 30px rgba(160,80,255,.8)';
    p2.style.color='#6e6e75';
    // resolved single line with the clip in the middle
    var main=el('div','line',s);
    var mt=el('div','tx',main); mt.style.fontSize=fs.toFixed(2)+'px';
    var a=el('span','',mt); a.textContent='Edit\\u00a0a\\u00a0';
    var gap=el('span','',mt); gap.style.display='inline-block';
    var b=el('span','',mt); b.textContent='\\u00a0video.';
    var clip=el('div','',s); clip.id='clip';
    var th=el('div','thumbs',clip);
    for(var i=0;i<3;i++)el('u','',th);
    var wv=el('div','wave',clip);
    for(i=0;i<64;i++){
      var u=el('u','',wv);
      u.style.height=(22+Math.abs(Math.sin(i*.7))*58+((i*37)%20))+'%';
    }
    return {node:s, update:function(t,p){
      var swap=seg(p,.58,.7);
      // intro pair
      var pv=1-smooth(swap);
      setO(pre,pv);
      var q1=eOut(seg(p,.02,.24)), q2=eOut(seg(p,.14,.42));
      setT(p1,TXY+'translate('+lerp(-40,-118,q1).toFixed(0)+'px,'+lerp(-30,-46,q1).toFixed(0)+'px)');
      setO(p1,q1);
      setT(p2,TXY+'translate('+lerp(160,118,q2).toFixed(0)+'px,'+lerp(58,42,q2).toFixed(0)+'px)');
      setO(p2,q2);
      // resolved line + clip
      var mv=smooth(swap);
      setO(main,mv);
      var open=eOut(seg(p,.66,.84));
      var gw=lerp(0,575,open);
      gap.style.width=gw.toFixed(0)+'px';
      clip.style.width=Math.max(2,gw-6).toFixed(0)+'px';
      clip.style.height='200px';
      clip.style.left=(W/2-gw/2+3).toFixed(0)+'px';
      clip.style.top='262px';
      setO(clip,mv*Math.min(1,open*2.4)*(1-seg(p,.93,1)));
      setT(clip,'scaleY('+lerp(.5,1,eOut(seg(p,.64,.82))).toFixed(3)+')');
    }};
  }

  /* =====================================================================
     8 · macbook, text boxes
     ===================================================================== */
  function macFrame(parent){
    var m=el('div','mac',parent);
    var lid=el('div','lid',m);
    var scr=el('div','scr',lid);
    el('div','notch',lid);
    var inn=el('div','scrIn',scr);
    el('div','base',m);
    return {root:m, screen:inn};
  }
  function makeMac(){
    var s=el('div','scene');
    var mac=macFrame(s);
    var clip=el('div','',mac.screen);
    clip.style.cssText='position:absolute;inset:0;background:linear-gradient(150deg,#2f2118,#c08a5a)';
    var subj=el('div','',clip);
    subj.style.cssText='position:absolute;left:24%;top:26%;width:52%;height:62%;border-radius:44% 44% 28% 28%;background:rgba(18,10,6,.55);filter:blur(4px)';
    var pal=el('div','palette',mac.screen);
    for(var i=0;i<11;i++)el('u','',pal);
    var guide=el('div','guide',mac.screen);
    var b1=el('div','tbox',mac.screen,'<i></i><i></i><i></i><i></i><span>Take</span>');
    var b2=el('div','tbox',mac.screen,'<i></i><i></i><i></i><i></i><span>your</span>');
    b1.querySelector('span').style.fontSize='132px';
    b2.querySelector('span').style.fontSize='86px';
    return {node:s, update:function(t,p){
      setO(mac.root,smooth(seg(p,0,.09)));
      setT(mac.root,'scale('+lerp(.95,1,eOut(seg(p,0,.3))).toFixed(3)+')');
      setO(clip,1-seg(p,.18,.32));
      setO(pal,smooth(seg(p,.22,.4)));
      guide.style.top='64%';
      setO(guide,smooth(seg(p,.34,.48))*(1-seg(p,.92,1)));
      var i1=seg(p,.28,.44);
      b1.style.left='16%'; b1.style.top='30%'; b1.style.width='52%'; b1.style.height='34%';
      setO(b1,smooth(i1));
      setT(b1,'scale('+lerp(.9,1,eOut(i1)).toFixed(3)+')');
      var i2=seg(p,.64,.8);
      b2.style.left='54%'; b2.style.top='36%'; b2.style.width='30%'; b2.style.height='24%';
      setO(b2,smooth(i2));
      setT(b2,'translateX('+((1-eOut(i2))*26).toFixed(1)+'px)');
    }};
  }

  /* =====================================================================
     9 · take your design anywhere
     ===================================================================== */
  var GRADS=[
    {bg:'#3c0a1a', blobs:['#8e1436','#cc1f4c','#f2567c']},
    {bg:'#2a0742', blobs:['#6d1baa','#a92ee2','#da6af2']},
    {bg:'#0f3a10', blobs:['#3f7a18','#82c62c','#dcf24c']}
  ];
  function gradientCanvas(parent){
    var g=el('div','grad',parent), blobs=[];
    for(var i=0;i<3;i++)blobs.push(el('b','',g));
    return {set:function(idx,t){
      var sp=GRADS[idx];
      g.style.background=sp.bg;
      for(var i=0;i<blobs.length;i++){
        var b=blobs[i], sz=lerp(152,112,i/2);
        b.style.width=sz+'%'; b.style.height=(sz*1.35)+'%';
        b.style.left=lerp(-26,6,i/2)+'%';
        b.style.top=(lerp(-8,26,i/2)+Math.sin(t*.7+i)*2)+'%';
        b.style.background='radial-gradient(circle at 42% 36%,'+sp.blobs[i]+',rgba(0,0,0,0) 70%)';
        b.style.opacity=(.96-i*.08).toFixed(2);
      }
    }};
  }
  function makeCanvasScene(){
    var s=el('div','scene');
    var mac=macFrame(s);
    var pad=el('div','pad',s);
    var padIn=el('div','scrIn',el('div','scr',pad));
    var gMac=gradientCanvas(mac.screen), gPad=gradientCanvas(padIn);
    function typeBlock(parent,unit){
      var w=el('div','canvasType',parent);
      var rows=[
        {txt:'Take',     x:'5%',  y:'3%',  s:1.0},
        {txt:'your',     x:'43%', y:'25%', s:1.0},
        {txt:'design',   x:'4%',  y:'47%', s:1.0},
        {txt:'anywhere.',x:'2%',  y:'69%', s:1.0}
      ];
      return {root:w, rows:rows.map(function(r){
        var d=el('div','',w);
        d.textContent=r.txt;
        d.style.left=r.x; d.style.top=r.y;
        d.style.fontSize=(unit*r.s)+'px';
        d.style.color='rgba(255,255,255,.94)';
        return d;
      })};
    }
    var tMac=typeBlock(mac.screen,114), tPad=typeBlock(padIn,110);
    var pencil=el('div','',s);
    pencil.style.cssText='position:absolute;height:8px;border-radius:4px;background:linear-gradient(90deg,#8f939b,#d6dae0);will-change:transform,opacity';
    var hand=el('div','hand',s);
    hand.innerHTML='<svg viewBox="0 0 260 340" aria-hidden="true"><path fill="#b07f5e" d="M124 340V206c0-17-11-30-11-45 0-10 8-14 15-9 8 6 13 19 15 32l4 24 7-95c1-13 6-19 14-18 9 1 12 9 12 20l1 79 9-69c2-12 9-17 16-15 8 2 11 10 10 21l-9 71 15-47c4-12 12-15 19-12 7 4 9 12 5 23l-19 67c-7 24-11 42-11 59v54z"/></svg>';
    return {node:s, update:function(t,p){
      var onPad=p>.42;
      mac.root.style.display=onPad?'none':'block';
      pad.style.display=onPad?'block':'none';
      var idx=p<.18?0:(p<.38?1:2);
      var g=onPad?gPad:gMac, tb=onPad?tPad:tMac;
      g.set(idx,t);
      var host=onPad?pad:mac.root;
      setO(host,smooth(seg(p,0,.08)));
      var grow=eOut(seg(p,.42,1));
      setT(host,onPad
        ? 'scale('+lerp(1,1.44,grow).toFixed(3)+') translate('+lerp(0,-16,grow).toFixed(0)+'px,'+lerp(0,26,grow).toFixed(0)+'px)'
        : 'scale('+lerp(.96,1,eOut(seg(p,0,.3))).toFixed(3)+')');
      setF(host,onPad&&grow>.5?'blur('+((grow-.5)*5.2).toFixed(2)+'px)':'none');
      for(var i=0;i<tb.rows.length;i++){
        var q=eOut(clamp(seg(p,.01+i*.045,.11+i*.045),0,1));
        setO(tb.rows[i],q);
        setT(tb.rows[i],'translateY('+((1-q)*20).toFixed(1)+'px)');
      }
      var pen=smooth(seg(p,.56,.72));
      pencil.style.left='430px'; pencil.style.top='104px'; pencil.style.width='420px';
      setO(pencil,pen*(1-seg(p,.94,1)));
      var hi=seg(p,.72,.98);
      hand.style.left='700px'; hand.style.top='300px';
      setO(hand,Math.min(1,hi*2.4));
      setT(hand,'translate('+lerp(230,26,eOut(hi)).toFixed(0)+'px,'+lerp(120,30,eOut(hi)).toFixed(0)+'px) rotate('+lerp(20,6,eOut(hi)).toFixed(1)+'deg)');
    }};
  }

  /* =====================================================================
     10 · prompt it — clean, daisies, liquid
     ===================================================================== */
  function makePrompt(){
    var s=el('div','scene');
    var L=textLine(s,'Prompt it.',600);
    var cv=document.createElement('canvas');
    cv.id='daisyC'; cv.width=W; cv.height=H; s.appendChild(cv);
    var g2=cv.getContext('2d');
    var liquid=el('div','',s); liquid.id='liquid';
    var lt=el('div','tx',liquid);
    lt.style.fontSize=L.fs.toFixed(2)+'px'; lt.style.fontWeight='700'; lt.style.color='#8ecfee';
    lt.textContent='Prompt it.';
    var gl=el('div','gloss',s); gl.style.fontSize=L.fs.toFixed(2)+'px'; gl.textContent='Prompt it.';
    var R=rng(3131), drops=[];
    for(var i=0;i<28;i++){
      var d=el('div','drop',liquid);
      var sz=lerp(8,26,R());
      d.style.width=sz+'px'; d.style.height=sz+'px';
      drops.push({n:d,x:lerp(340,940,R()),y:lerp(240,470,R()),sz:sz,ph:R()*6.283,sp:.4+R()*.9});
    }
    var pts=null;
    function samplePts(){
      var m=document.createElement('canvas'), mc=m.getContext('2d');
      m.width=W; m.height=200;
      mc.font='700 '+L.fs.toFixed(0)+'px -apple-system,"SF Pro Display",Helvetica,Arial,sans-serif';
      mc.textAlign='center'; mc.textBaseline='middle';
      mc.fillText('Prompt it.',W/2,100);
      var data=mc.getImageData(0,0,W,200).data, out=[];
      for(var y=0;y<200;y+=13){
        for(var x=0;x<W;x+=13){
          if(data[(y*W+x)*4+3]>110) out.push([x,y]);
        }
      }
      return out;
    }
    function daisy(x,y,r,rot,a){
      g2.save(); g2.translate(x,y); g2.rotate(rot); g2.globalAlpha=a;
      g2.fillStyle='#f4f3ef';
      for(var i=0;i<9;i++){
        g2.save(); g2.rotate(i/9*6.2832);
        g2.beginPath(); g2.ellipse(0,-r*.6,r*.25,r*.6,0,0,6.2832); g2.fill();
        g2.restore();
      }
      g2.fillStyle='#e6b229';
      g2.beginPath(); g2.arc(0,0,r*.3,0,6.2832); g2.fill();
      g2.restore();
    }
    return {node:s, update:function(t,p){
      var cq=smooth(seg(p,.01,.07))*(1-smooth(seg(p,.13,.19)));
      var gq=smooth(seg(p,.68,.76))*(1-smooth(seg(p,.92,1)));
      setO(L.tx,Math.max(cq,gq*.6));
      setT(L.tx,TXY+'scale('+lerp(1.04,1,eOut(seg(p,.02,.24))).toFixed(3)+')');
      if(gq>.01){ setC(L.tx,'rgba(198,126,112,1)'); setF(L.tx,'blur('+(3+gq*5).toFixed(1)+'px)') }
      else { setC(L.tx,'#f5f5f7'); setF(L.tx,'none') }

      var dq=smooth(seg(p,.15,.23))*(1-smooth(seg(p,.40,.46)));
      cv.style.opacity=dq.toFixed(3);
      if(dq>.004){
        if(!pts) pts=samplePts();
        g2.clearRect(0,0,W,H);
        var grow=eOut(seg(p,.15,.38));
        for(var i=0;i<pts.length;i++){
          var q=clamp(grow*1.4-((i*37)%100)/100*.4,0,1);
          if(q<=.02) continue;
          daisy(pts[i][0],pts[i][1]+260,lerp(4,15,q)+Math.sin(t*2+i)*.8,(i*1.7)%6.283,q);
        }
      }
      var lq=smooth(seg(p,.4,.48))*(1-smooth(seg(p,.6,.68)));
      setO(liquid,lq); setO(gl,lq*.9);
      var wob=Math.sin(t*2.2)*2.4;
      setT(lt,TXY+'translateY('+wob.toFixed(2)+'px)');
      setT(gl,TXY+'translateY('+wob.toFixed(2)+'px)');
      var burst=eOut(seg(p,.46,.74));
      for(i=0;i<drops.length;i++){
        var d=drops[i];
        d.n.style.left=(d.x+Math.cos(d.ph)*burst*lerp(30,170,d.sp*.7)-d.sz/2).toFixed(1)+'px';
        d.n.style.top=(d.y+Math.sin(d.ph)*burst*lerp(20,120,d.sp*.7)+Math.sin(t*1.6+d.ph)*3-d.sz/2).toFixed(1)+'px';
      }
    }};
  }

  /* =====================================================================
     11 · perform it
     ===================================================================== */
  function makePerform(){
    var s=el('div','scene');
    var keys=el('div','keys',s);
    for(var i=0;i<4;i++)el('u','',keys);
    var L=textLine(s,'Perform it.',575);
    var TINT=['#ffffff','#ffffff','#d8f0ff','#bfe6fb','#cfe8fb','#c46ff5','#a83af0','#ffffff','#f7d79a','#f2c37a','#f0bb6a'];
    var hands=el('div','',s);
    hands.innerHTML='<svg viewBox="0 0 1280 340" aria-hidden="true">'+
      '<g fill="#6f4a32">'+
      '<path d="M196 340V186c0-22 15-38 34-38 18 0 30 16 30 38v78l52-12c22-5 38 6 38 24 0 40-44 64-92 64z"/>'+
      '<path d="M262 340v-96c0-14 9-24 20-24s20 10 20 24v96z" fill="#7d5237"/>'+
      '<path d="M604 340V162c0-24 17-42 37-42 20 0 33 18 33 42v88l58-14c24-5 41 7 41 27 0 44-48 70-100 70z"/>'+
      '<path d="M676 340v-104c0-15 10-26 22-26s22 11 22 26v104z" fill="#7d5237"/>'+
      '</g></svg>';
    hands.style.cssText='position:absolute;left:0;right:0;bottom:0;height:340px;will-change:opacity,transform';
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.02,.16))*(1-smooth(seg(p,.84,1)));
      setO(L.tx,env);
      L.tx.style.textShadow='0 0 34px rgba(255,255,255,.45)';
      for(var i=0;i<L.chars.length;i++){
        setC(L.chars[i],TINT[i]||'#ffffff');
        setO(L.chars[i],1);
        setT(L.chars[i],'translateY('+(Math.sin(t*9+i*.7)*1.4).toFixed(2)+'px)');
      }
      setO(keys,env*smooth(seg(p,.06,.28)));
      setO(hands,env*smooth(seg(p,.1,.4)));
      setT(hands,'translateY('+((1-eOut(seg(p,.1,.5)))*60).toFixed(0)+'px)');
    }};
  }

  /* =====================================================================
     12 · loop it
     ===================================================================== */
  function makeLoop(){
    var s=el('div','scene');
    var L=textLine(s,'Loop it.',375);
    return {node:s, update:function(t,p){
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.9,1))));
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.03+i*.03,.3+i*.03),0,1));
        var spin=(i===1||i===2)?Math.sin(t*4.6+i*.7)*140*(1-seg(p,.1,.34)):0;
        setT(L.chars[i],'translateY('+((1-q)*20).toFixed(1)+'px) rotateY('+spin.toFixed(0)+'deg)');
        setO(L.chars[i],q);
      }
    }};
  }

  /* =====================================================================
     13 · select it
     ===================================================================== */
  function makeSelect(){
    var s=el('div','scene');
    var L=textLine(s,'Select it.',499);
    L.chars.forEach(function(c){setC(c,'#48484d')});
    var lime=el('div','line',s);
    var lt=el('div','tx',lime);
    lt.style.fontSize=L.fs.toFixed(2)+'px'; lt.style.color='#a6f024';
    lt.style.textShadow='0 0 34px rgba(160,240,40,.6)';
    lt.innerHTML='<span>S</span><span style="opacity:0">elect it.</span>';
    var first=lt.firstChild;
    var cur=el('div','cursor',s);
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.02,.14))*(1-smooth(seg(p,.88,1)));
      setO(L.tx,env); setO(lt,env);
      var trace=eOut(seg(p,.08,.44));
      first.style.clipPath='inset('+((1-trace)*100).toFixed(1)+'% 0 0 0)';
      cur.style.left=(400+Math.sin(trace*3.4)*22).toFixed(1)+'px';
      cur.style.top=lerp(300,382,trace).toFixed(1)+'px';
      setO(cur,env*smooth(seg(p,.04,.14))*(1-seg(p,.5,.66)));
    }};
  }

  /* =====================================================================
     14 · write it — letters riding an s-curve
     ===================================================================== */
  function makeWrite(){
    var s=el('div','scene');
    var str='Write it.', fs=fitPx(str,620);
    var adv=advances(str,fs), total=adv.reduce(function(a,b){return a+b},0);
    var wrap=el('div','line',s);
    var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 1280 720');
    svg.setAttribute('width','1280'); svg.setAttribute('height','720');
    svg.style.cssText='position:absolute;left:0;top:0;overflow:visible';
    var path=document.createElementNS('http://www.w3.org/2000/svg','path');
    /* steep, flat, steep — the reference baseline is a stepped S */
    function P(u){
      var y=468+(378-468)*smooth(seg(u,0,.32))+(276-378)*smooth(seg(u,.6,1));
      return [336+700*u, y];
    }
    /* arc-length table so letters space evenly along the curve, not along x */
    var N=240, LUT=[0], prev=P(0), arc=0;
    for(var i=1;i<=N;i++){
      var pt=P(i/N);
      arc+=Math.hypot(pt[0]-prev[0],pt[1]-prev[1]);
      LUT.push(arc); prev=pt;
    }
    function uAt(dist){
      var d=clamp(dist,0,arc), lo=0, hi=N;
      while(hi-lo>1){var mid=(lo+hi)>>1; if(LUT[mid]<d)lo=mid; else hi=mid}
      var span=LUT[hi]-LUT[lo]||1;
      return (lo+(d-LUT[lo])/span)/N;
    }
    var dstr='M';
    for(i=0;i<=60;i++){ var q=P(i/60); dstr+=(i?' L':'')+q[0].toFixed(1)+' '+q[1].toFixed(1) }
    path.setAttribute('d',dstr);
    path.setAttribute('fill','none');
    path.setAttribute('stroke','#e0872a');
    path.setAttribute('stroke-width','2.4');
    path.setAttribute('stroke-linecap','round');
    svg.appendChild(path); wrap.appendChild(svg);
    var len=0;
    var glyphs=[];
    for(i=0;i<str.length;i++){
      var g=document.createElement('span');
      g.textContent=str[i]===' '?'\\u00a0':str[i];
      g.style.cssText='position:absolute;font-weight:600;letter-spacing:-.012em;line-height:1;white-space:pre;'+
        'font-size:'+fs.toFixed(2)+'px;transform-origin:0% 100%;will-change:transform,opacity';
      wrap.appendChild(g);
      glyphs.push({n:g, run:len});
      len+=adv[i];
    }
    var pad=(arc-total)/2;
    var dot=el('div','glowdot',s);
    return {node:s, update:function(t,p){
      var env=1-smooth(seg(p,.86,1));
      var draw=eOut(seg(p,.04,.72));
      var pl=path.getTotalLength?path.getTotalLength():1400;
      path.style.strokeDasharray=pl.toFixed(0);
      path.style.strokeDashoffset=(pl*(1-draw)).toFixed(0);
      path.style.opacity=(env*.95).toFixed(2);
      for(var i=0;i<glyphs.length;i++){
        var g=glyphs[i];
        var u=uAt(pad+g.run);
        var a=P(u), b=P(Math.min(1,u+.012));
        var ang=Math.atan2(b[1]-a[1],b[0]-a[0])*180/Math.PI;
        var q=clamp(seg(p,.06+i*.055,.2+i*.055),0,1);
        g.n.style.left=a[0].toFixed(1)+'px';
        g.n.style.top=a[1].toFixed(1)+'px';
        setT(g.n,'rotate('+ang.toFixed(2)+'deg) translate(0,-'+(fs*.78).toFixed(1)+'px) scale('+lerp(.86,1,eOut(q)).toFixed(3)+')');
        setO(g.n,q*env);
      }
      var hp=P(clamp(draw,0,1));
      dot.style.left=(hp[0]-8).toFixed(1)+'px';
      dot.style.top=(hp[1]-8).toFixed(1)+'px';
      setO(dot,env*smooth(seg(p,.04,.14))*(1-seg(p,.78,.9)));
    }};
  }

  /* =====================================================================
     15 · scrap it
     ===================================================================== */
  function makeScrap(){
    var s=el('div','scene');
    var L=textLine(s,'Scrap it.',469);
    var bin=el('div','bin',s);
    el('div','cup',bin); el('div','rim',bin); el('div','hole',bin);
    var bits=el('div','',bin);
    bits.style.cssText='position:absolute;left:22px;right:22px;top:2px;height:18px;overflow:hidden';
    ['#e8e9ec','#f0d24a','#4fb8e0','#e05a8a'].forEach(function(c,i){
      var q=el('div','',bits);
      q.style.cssText='position:absolute;left:'+(i*26+4)+'px;top:'+(3+(i%2)*4)+'px;width:22px;height:14px;'+
        'border-radius:4px;background:'+c+';opacity:.9';
    });
    var wad=el('div','wad',s);
    wad.innerHTML='<svg viewBox="0 0 46 46" aria-hidden="true"><path fill="#eceef2" d="M7 16l10-11 15 4 7 11-5 14-15 7-11-7z"/>'+
      '<path fill="#c8ccd4" d="M17 5l6 15-16-4zM39 20l-5 14-11-14z"/></svg>';
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.01,.06))*(1-smooth(seg(p,.5,.62)));
      setO(L.tx,env);
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.01+i*.008,.07+i*.008),0,1));
        setO(L.chars[i],q);
        setT(L.chars[i],'translateY('+((1-q)*16).toFixed(1)+'px)');
      }
      setO(bin,smooth(seg(p,.04,.16))*(1-smooth(seg(p,.92,1))));
      setT(bin,'scale('+lerp(.9,1,eOut(seg(p,.04,.26))).toFixed(3)+')');
      setO(bits,smooth(seg(p,.56,.68)));
      var drop=seg(p,.28,.56);
      wad.style.left=lerp(760,614,drop).toFixed(0)+'px';
      wad.style.top=lerp(300,444,eIn(drop)+drop*.25).toFixed(0)+'px';
      setO(wad,drop>0&&drop<.95?1:0);
      setT(wad,'rotate('+(drop*540).toFixed(0)+'deg) scale('+lerp(1.15,.72,drop).toFixed(2)+')');
    }};
  }

  /* =====================================================================
     16 · move it
     ===================================================================== */
  function makeMove(){
    var s=el('div','scene');
    var L=textLine(s,'Move it.',462);
    return {node:s, update:function(t,p){
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.9,1))));
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.06+i*.06,.5+i*.06),0,1));
        var dir=i%2?1:-1;
        setT(L.chars[i],'translate('+(dir*86*(1-q)).toFixed(1)+'px,'+(dir*-14*(1-q)).toFixed(1)+'px)');
        setO(L.chars[i],Math.min(1,q*1.6));
      }
    }};
  }

  /* =====================================================================
     17 · upscale it — sharp lime left, pixellated right
     ===================================================================== */
  function makeUpscale(){
    var s=el('div','scene');
    var L=textLine(s,'Upscale it.',598);
    var lime=el('div','line',s);
    var lt=el('div','tx',lime);
    lt.style.fontSize=L.fs.toFixed(2)+'px';
    lt.style.color='#a6f024';
    lt.style.textShadow='0 0 40px rgba(150,240,40,.55)';
    lt.textContent='Upscale it.';
    var cv=document.createElement('canvas');
    cv.width=W; cv.height=H;
    cv.style.cssText='position:absolute;left:0;top:0;image-rendering:pixelated';
    s.appendChild(cv);
    var g2=cv.getContext('2d');
    var lo=document.createElement('canvas');
    var SC=12;
    lo.width=Math.ceil(W/SC); lo.height=Math.ceil(H/SC);
    var lg=lo.getContext('2d');
    lg.font='600 '+(L.fs/SC).toFixed(2)+'px -apple-system,"SF Pro Display",Helvetica,Arial,sans-serif';
    lg.textAlign='center'; lg.textBaseline='middle';
    lg.fillStyle='#f5f5f7';
    lg.fillText('Upscale it.',W/2/SC,H/2/SC);
    var divider=el('div','',s);
    divider.style.cssText='position:absolute;top:177px;width:1.5px;height:365px;background:rgba(255,255,255,.85)';
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.02,.14))*(1-smooth(seg(p,.86,1)));
      var sweep=seg(p,.04,.96);
      var x=lerp(320,920,sweep*sweep*.6+sweep*.4);
      setO(L.tx,0);
      setO(lt,env);
      lt.style.clipPath='inset(0 '+(W-x).toFixed(0)+'px 0 0)';
      g2.clearRect(0,0,W,H);
      g2.save();
      g2.beginPath(); g2.rect(x,0,W-x,H); g2.clip();
      g2.imageSmoothingEnabled=false;
      g2.globalAlpha=env;
      g2.drawImage(lo,0,0,lo.width,lo.height,0,0,W,H);
      g2.restore();
      divider.style.left=x.toFixed(1)+'px';
      setO(divider,env*(1-seg(p,.8,.94)));
    }};
  }

  /* =====================================================================
     18 · share it — shatters into glowing shards
     ===================================================================== */
  function makeShare(){
    var s=el('div','scene');
    var L=textLine(s,'Share it.',421);
    var TINT=['#eaf4ff','#eaf4ff','#4da6f0','#4da6f0','#4da6f0','#ffffff','#ffffff','#ffffff','#ffffff'];
    /* slice inside the word's own bounds so each shard reads as a fragment */
    var R=rng(8123), frags=[], TW=421, x00=(W-TW)/2;
    for(var i=0;i<9;i++){
      var f=el('div','frag',s);
      f.style.fontSize=L.fs.toFixed(2)+'px';
      f.textContent='Share it.';
      var xa=(x00+i*TW/9)/W*100, xb=(x00+(i+1)*TW/9)/W*100, sk=R()*16-8;
      f.style.clipPath='polygon('+xa.toFixed(2)+'% '+(R()*22).toFixed(0)+'%,'+xb.toFixed(2)+'% 0%,'+
        xb.toFixed(2)+'% '+(78+R()*22).toFixed(0)+'%,'+xa.toFixed(2)+'% 100%)';
      frags.push({n:f,a:(i/8-.5)*2.2+(R()*.5-.25),sp:.5+R()*.9,rot:(R()*2-1)*70,sk:sk});
    }
    return {node:s, update:function(t,p){
      var shat=seg(p,.62,1);
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.6,.7))));
      L.tx.style.textShadow='0 0 46px rgba(190,225,255,.5)';
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.03+i*.03,.3+i*.03),0,1));
        setC(L.chars[i],TINT[i]||'#ffffff');
        setO(L.chars[i],q);
        setT(L.chars[i],'translateY('+((1-q)*18).toFixed(1)+'px)');
      }
      for(i=0;i<frags.length;i++){
        var f=frags[i], e=eOut(shat);
        setO(f.n,shat>0?smooth(seg(p,.62,.67))*(1-seg(p,.94,1)):0);
        setT(f.n,TXY+'translate('+(f.a*430*e).toFixed(0)+'px,'+((f.sp-.9)*470*e).toFixed(0)+'px) '+
          'rotate('+(f.rot*1.5*e).toFixed(1)+'deg) skewY('+(f.sk*e).toFixed(1)+'deg) scale('+lerp(1,1.9,e).toFixed(2)+')');
      }
    }};
  }

  /* =====================================================================
     19 · price
     ===================================================================== */
  function makePrice(){
    var s=el('div','scene');
    var str='Get it for $12.99/mo.';
    var wrap=el('div','line',s), tx=el('div','tx',wrap);
    tx.style.fontSize=fitPx(str,811).toFixed(2)+'px';
    var chars=letters(tx,str);
    for(var i=11;i<chars.length;i++) chars[i].style.textShadow='0 0 30px rgba(255,255,255,.6)';
    return {node:s, update:function(t,p){
      setO(tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.9,1))));
      for(var i=0;i<chars.length;i++){
        var q=i<11?eOut(seg(p,.04,.2)):clamp(seg(p,.16+(i-11)*.028,.24+(i-11)*.028),0,1);
        setO(chars[i],q);
        setT(chars[i],'translateY('+((1-eOut(q))*12).toFixed(1)+'px)');
      }
    }};
  }

  /* =====================================================================
     20 · scrolling app picker
     ===================================================================== */
  function makeApps(){
    var s=el('div','scene');
    var APPS=[
      ['Final Cut Pro','#a24ef0','linear-gradient(160deg,#5b2ba8,#2a1050)'],
      ['Motion','#f04ad0','linear-gradient(160deg,#f07ad8,#7a1060)'],
      ['Pixelmator Pro','#e0324a','linear-gradient(160deg,#c02038,#4a0a14)'],
      ['Compressor','#f0d05a','linear-gradient(160deg,#f0c24a,#5a4210)'],
      ['Numbers','#7fd44a','linear-gradient(160deg,#7fd44a,#1f5a14)'],
      ['Keynote','#5ab4f0','linear-gradient(160deg,#5ab4f0,#12456b)'],
      ['Logic Pro','#d8dde6','linear-gradient(160deg,#d8dde6,#5a5f68)'],
      ['GarageBand','#f0863a','linear-gradient(160deg,#f0a04a,#6b3a10)']
    ];
    var rows=APPS.map(function(a){
      var d=el('div','appRow',s);
      d.innerHTML='<em style="background:'+a[2]+'"></em>'+a[0];
      d.style.color=a[1];
      d.style.fontSize='80px';
      return d;
    });
    return {node:s, update:function(t,p){
      var pos=.2+6*Math.pow(p,2.2);
      var fade=1-smooth(seg(p,.96,1));
      for(var i=0;i<rows.length;i++){
        var d=i-pos;
        var near=clamp(1-Math.abs(d),0,1);
        var sc=lerp(.86,1.42,Math.pow(near,1.5));
        rows[i].style.top='0px';
        rows[i].style.transform='translateY('+(360+d*132-48).toFixed(1)+'px) scale('+sc.toFixed(3)+')';
        setO(rows[i],clamp(1.3-Math.abs(d)*.92,0,1)*fade);
        setF(rows[i],near<.6?'brightness(.6)':'none');
      }
    }};
  }

  /* =====================================================================
     timeline
     ===================================================================== */
  var SCENES=[
    {a:0.00,  b:1.72,  s:makeWordmark()},
    {a:1.72,  b:3.42,  s:makeWall()},
    {a:3.42,  b:5.62,  s:makeLines()},
    {a:5.62,  b:6.92,  s:makeDock()},
    {a:6.92,  b:7.72,  s:makeBeatText()},
    {a:7.72,  b:9.52,  s:makeTracks()},
    {a:9.52,  b:11.42, s:makeEditVideo()},
    {a:11.42, b:13.32, s:makeMac()},
    {a:13.32, b:16.10, s:makeCanvasScene()},
    {a:16.10, b:18.02, s:makePrompt()},
    {a:18.02, b:18.56, s:makePerform()},
    {a:18.56, b:19.42, s:makeLoop()},
    {a:19.42, b:20.26, s:makeSelect()},
    {a:20.26, b:21.34, s:makeWrite()},
    {a:21.34, b:23.10, s:makeScrap()},
    {a:23.10, b:24.20, s:makeMove()},
    {a:24.20, b:24.86, s:makeUpscale()},
    {a:24.86, b:25.82, s:makeShare()},
    {a:25.82, b:27.32, s:makePrice()},
    {a:27.32, b:28.52, s:makeApps()},
    {a:28.52, b:DUR,   s:makeWordmark()}
  ];

  var active=null;
  function render(t){
    var k=Math.min((stage.clientWidth||W)/W,(stage.clientHeight||H)/H);
    comp.style.transform='scale('+k.toFixed(4)+')';
    for(var i=0;i<SCENES.length;i++){
      var sc=SCENES[i];
      if(t>=sc.a && t<sc.b){
        if(active!==sc){
          if(active) active.s.node.classList.remove('on');
          sc.s.node.classList.add('on');
          active=sc;
        }
        sc.s.update(t-sc.a, seg(t,sc.a,sc.b));
        return;
      }
    }
  }

  /* ---------- driver ---------- */
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var start=null, raf=0, playing=!reduce, held=false, at=0;
  function seek(t){at=((t%DUR)+DUR)%DUR;render(at);return at}
  function play(){if(playing&&raf)return;playing=true;start=performance.now()-at*1000;if(!raf)raf=requestAnimationFrame(tick)}
  function pause(){playing=false;if(raf){cancelAnimationFrame(raf);raf=0}}
  function tick(now){
    if(!playing){raf=0;return}
    raf=requestAnimationFrame(tick);
    if(start===null)start=now;
    at=((now-start)/1000)%DUR;
    render(at);
  }
  window.addEventListener('resize',function(){render(at)});
  if(reduce){ seek(29.6) } else {
    raf=requestAnimationFrame(tick);
    document.addEventListener('visibilitychange',function(){
      if(document.hidden){ if(playing){held=true;pause()} }
      else if(held){ held=false; play() }
    });
  }
  window.__DUR=DUR;
  window.__seek=function(t){pause();return seek(t)};
  window.__play=play; window.__pause=pause; window.__time=function(){return at};
})();
<\/script>
</body>
</html>
`,oe=`<!DOCTYPE html><html><body></body></html>
`,se=`<!DOCTYPE html><html><body></body></html>
`,ce=`<!DOCTYPE html><html><body></body></html>
`,le=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>New Grainient Collection Added — motion</title>
<style>
  html,body{margin:0;height:100%;background:#000;overflow:hidden}
  body{-webkit-font-smoothing:antialiased}
  canvas{display:block;width:100vw;height:100vh}
</style>
</head>
<body>
<canvas id="stage"></canvas>
<script>
(function(){
'use strict';

/* ------------------------------------------------------------------ *
 * Design frame: 2962 x 2160.  Every length below is in that space.
 * ------------------------------------------------------------------ */
var DW = 2962, DH = 2160, DASP = DW / DH;

var RING = {
  cx: 1484, cy: 1108,   /* projected ring centre                        */
  a: 712,               /* projected semi-major axis (px)               */
  ratio: 0.492,         /* semi-minor / semi-major -> plane tilt 60.5deg */
  axis: 25.5,           /* screen angle of the major axis (deg, y down)  */
  n: 12,                /* tiles                                         */
  tile: 346,            /* tile side in ring units (R = a)               */
  radius: 0.22,         /* corner radius as a fraction of the side       */
  dist: 13,             /* camera distance in ring radii                 */
  phase: 93             /* psi of tile 0 at t = 0 (deg)                  */
};

var DUR = 15.015;       /* one full revolution = a seamless loop */

var HEAD = [
  { s:'NEW GRAINIENT',    top:930,  w:1370, fill:'#d0d0d0' },
  { s:'COLLECTION ADDED', top:1114, w:1775, fill:'#ffffff' }
];
var CAP = 142;          /* headline cap height */
var SMALL = 22;         /* small-label cap height */

var SANS = '"Helvetica Neue",Helvetica,"Inter",Arial,system-ui,sans-serif';

/* ------------------------------------------------------------------ *
 * Deterministic noise
 * ------------------------------------------------------------------ */
function rng(seed){
  var s = seed >>> 0;
  return function(){
    s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

function mkc(w,h){
  var c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

/* ------------------------------------------------------------------ *
 * Tile artwork — eleven grainy gradient "wallpapers"
 * ------------------------------------------------------------------ */
var TS = 512;                       /* texture resolution */
var grainTile = (function(){
  var c = mkc(160,160), x = c.getContext('2d'), d = x.createImageData(160,160), r = rng(0x51F3);
  for (var i = 0; i < d.data.length; i += 4){
    var v = 128 + (r() - 0.5) * 116;
    d.data[i] = d.data[i+1] = d.data[i+2] = v;
    d.data[i+3] = 255;
  }
  x.putImageData(d,0,0);
  return c;
})();

function lin(x,x0,y0,x1,y1,stops){
  var g = x.createLinearGradient(x0*TS,y0*TS,x1*TS,y1*TS);
  for (var i=0;i<stops.length;i++) g.addColorStop(stops[i][0],stops[i][1]);
  return g;
}
function rad(x,cx,cy,r,stops,r0){
  var g = x.createRadialGradient(cx*TS,cy*TS,(r0||0)*TS,cx*TS,cy*TS,r*TS);
  for (var i=0;i<stops.length;i++) g.addColorStop(stops[i][0],stops[i][1]);
  return g;
}
function fill(x,style){ x.fillStyle = style; x.fillRect(0,0,TS,TS); }

/* soft blurred stroke: draw off-canvas and keep only its shadow */
function band(x,pts,color,width,blur,passes){
  x.save();
  x.translate(-2*TS,0);
  x.shadowOffsetX = 2*TS; x.shadowBlur = blur*TS; x.shadowColor = color;
  x.strokeStyle = color; x.lineWidth = width*TS; x.lineCap='round'; x.lineJoin='round';
  x.beginPath();
  x.moveTo(pts[0][0]*TS,pts[0][1]*TS);
  for (var i=1;i<pts.length-1;i+=2){
    x.quadraticCurveTo(pts[i][0]*TS,pts[i][1]*TS,pts[i+1][0]*TS,pts[i+1][1]*TS);
  }
  for (var p=0;p<(passes||1);p++) x.stroke();
  x.restore();
}
function glow(x,cx,cy,r,color,mode){
  x.save();
  x.globalCompositeOperation = mode || 'lighter';
  x.fillStyle = rad(x,cx,cy,r,[[0,color],[1,'rgba(0,0,0,0)']]);
  x.fillRect(0,0,TS,TS);
  x.restore();
}

/* a wavy spine across the tile, used for silk bands and chrome folds */
function spine(y0,amp,ph,tilt){
  var p = [], i, u;
  for (i=0;i<5;i++){ u = -0.12 + i*0.31; p.push([u, y0 + amp*Math.sin(ph + u*4.2) + tilt*u]); }
  return p;
}
/* one wavy edge across the tile */
function wavy(x,y0,ph,amp,freq,tilt){
  var i,u,y;
  x.beginPath();
  for (i=0;i<=10;i++){
    u = -0.12 + i*0.124; y = y0 + amp*Math.sin(ph + u*freq) + (tilt||0)*u;
    if (i===0) x.moveTo(u*TS,y*TS); else x.lineTo(u*TS,y*TS);
  }
}
function wavyStroke(x,y0,ph,amp,freq,tilt,color,w,blur){
  x.save();
  x.translate(-2*TS,0);
  x.shadowOffsetX = 2*TS; x.shadowBlur = blur*TS; x.shadowColor = color;
  x.strokeStyle = color; x.lineWidth = w*TS; x.lineCap = 'round';
  wavy(x,y0,ph,amp,freq,tilt); x.stroke(); x.stroke();
  x.restore();
}
/* closed band between two wavy edges */
function bandPath(x,y0,h,ph,amp,freq,tilt){
  var i,u;
  x.beginPath();
  for (i=0;i<=10;i++){
    u = -0.12 + i*0.124;
    x.lineTo(u*TS, (y0 + amp*Math.sin(ph+u*freq) + tilt*u)*TS);
  }
  for (i=10;i>=0;i--){
    u = -0.12 + i*0.124;
    x.lineTo(u*TS, (y0 + h + amp*0.62*Math.sin(ph+1.9+u*freq*0.86) + tilt*u)*TS);
  }
  x.closePath();
}
/* folded liquid-chrome sheet: dark body, hot crest, iridescent underside */
function chrome(x,y0,h,ph,amp,freq,tilt,hot){
  x.save();
  x.translate(-2*TS,0);
  x.shadowOffsetX = 2*TS; x.shadowBlur = 0.06*TS; x.shadowColor = 'rgba(132,12,0,0.9)';
  x.fillStyle = '#000';
  bandPath(x,y0-0.018,h+0.036,ph,amp,freq,tilt); x.fill(); x.fill();
  x.restore();

  x.save();
  bandPath(x,y0,h,ph,amp,freq,tilt); x.clip();
  var g = x.createLinearGradient(0,(y0-0.03)*TS,0,(y0+h+0.03)*TS);
  g.addColorStop(0,   'rgba(8,0,2,1)');
  g.addColorStop(0.12,'rgba(58,2,6,1)');
  g.addColorStop(0.3, 'rgba(146,10,8,1)');
  g.addColorStop(0.43,'rgba(220,42,16,1)');
  g.addColorStop(0.49, hot || 'rgba(255,206,132,1)');
  g.addColorStop(0.56,'rgba(206,28,12,1)');
  g.addColorStop(0.72,'rgba(90,4,6,1)');
  g.addColorStop(0.88,'rgba(26,0,4,1)');
  g.addColorStop(1,   'rgba(5,0,2,1)');
  x.fillStyle = g; x.fillRect(0,0,TS,TS);
  x.restore();

  wavyStroke(x,y0+0.004,ph,amp,freq,tilt,'rgba(255,238,214,0.55)',0.005,0.004);
  wavyStroke(x,y0+h-0.006,ph+1.9,amp*0.62,freq*0.86,tilt,'rgba(40,220,200,0.42)',0.008,0.009);
  wavyStroke(x,y0+h+0.012,ph+1.9,amp*0.62,freq*0.86,tilt,'rgba(170,230,80,0.28)',0.006,0.008);
}
/* sink one side of the tile back into shadow so the mass reads as a fold, not a ribbon */
function shade(x,x0,x1,strength){
  x.save();
  var g = x.createLinearGradient(x0*TS,0,x1*TS,0);
  g.addColorStop(0,'rgba(0,0,0,0)');
  g.addColorStop(0.55,'rgba(0,0,0,'+(strength*0.7).toFixed(2)+')');
  g.addColorStop(1,'rgba(0,0,0,'+strength.toFixed(2)+')');
  x.fillStyle = g; x.fillRect(0,0,TS,TS);
  x.restore();
}

var ART = [
/* 0 — violet field with a dark torus punched through it */
function(x){
  fill(x, rad(x,0.5,0.48,0.82,[
    [0,'#020105'],[0.3,'#030106'],[0.37,'#1d0a48'],[0.46,'#4f2c94'],
    [0.54,'#38167e'],[0.66,'#22084e'],[0.86,'#0a0218'],[1,'#04010a']]));
  glow(x,0.3,0.24,0.4,'rgba(96,66,180,0.4)');
  glow(x,0.76,0.8,0.3,'rgba(52,18,110,0.35)');
},
/* 1 — white silk, magenta + orange flow */
function(x){
  fill(x,'#fbf9fb');
  band(x,spine(0.52,0.09,0.6,-0.18),'rgba(236,44,140,0.92)',0.19,0.055,2);
  band(x,spine(0.66,0.07,2.2,-0.14),'rgba(255,96,26,0.9)',0.16,0.05,2);
  band(x,spine(0.4,0.06,3.4,-0.1),'rgba(70,120,255,0.55)',0.09,0.05,1);
  band(x,spine(0.58,0.08,1.2,-0.16),'rgba(255,255,255,0.9)',0.05,0.03,2);
  band(x,spine(0.86,0.05,0.2,-0.05),'rgba(150,40,200,0.5)',0.1,0.06,1);
  glow(x,0.22,0.14,0.46,'rgba(255,255,255,0.85)');
},
/* 2 — deep blue, near-black in the far corner */
function(x){
  fill(x, lin(x,0.98,0,0.06,1,[
    [0,'#01020e'],[0.3,'#03082e'],[0.56,'#0820c4'],[0.76,'#1a4dff'],[0.95,'#7ea8ff'],[1,'#b6ccff']]));
  glow(x,0.2,0.86,0.3,'rgba(176,206,255,0.8)');
  glow(x,0.06,0.98,0.22,'rgba(226,120,220,0.55)');
  glow(x,0.92,0.06,0.44,'rgba(0,0,8,0.75)','source-over');
},
/* 3 — pale blue horizon crossed by a coral band */
function(x){
  fill(x, lin(x,0.08,0,0,1,[
    [0,'#9dbccd'],[0.14,'#5b87ad'],[0.26,'#245693'],[0.36,'#7793a8'],
    [0.45,'#e2523a'],[0.52,'#e07a5e'],[0.58,'#82aec8'],[0.68,'#2467a8'],
    [0.8,'#0e3970'],[0.92,'#081c40'],[1,'#051026']]));
  band(x,spine(0.42,0.02,1.0,0.03),'rgba(240,140,105,0.45)',0.05,0.03,1);
  band(x,spine(0.63,0.02,2.4,-0.03),'rgba(150,200,235,0.4)',0.05,0.03,1);
},
/* 4 — navy rising into violet-blue */
function(x){
  fill(x, lin(x,0.88,0.04,0.14,0.96,[
    [0,'#010103'],[0.34,'#030316'],[0.58,'#0d066a'],[0.78,'#2a10b8'],[0.93,'#5a38e0'],[1,'#8464f4']]));
  glow(x,0.14,0.92,0.3,'rgba(110,86,210,0.55)');
  glow(x,0.9,0.08,0.42,'rgba(0,0,4,0.75)','source-over');
},
/* 5 — nearly black, a dim red-brown smear */
function(x){
  fill(x,'#020104');
  band(x,spine(0.46,0.07,1.4,-0.1),'rgba(88,30,18,0.7)',0.24,0.13,2);
  band(x,spine(0.44,0.07,1.4,-0.1),'rgba(168,64,36,0.45)',0.08,0.07,1);
  glow(x,0.16,0.2,0.32,'rgba(20,30,64,0.35)');
  glow(x,0.9,0.88,0.22,'rgba(70,64,110,0.3)');
},
/* 6 — pale silk, lavender + amber flow */
function(x){
  fill(x,'#e3dcec');
  band(x,spine(0.42,0.1,2.6,0.16),'rgba(132,58,220,0.9)',0.18,0.055,2);
  band(x,spine(0.6,0.09,1.1,0.2),'rgba(240,104,20,0.92)',0.16,0.05,2);
  band(x,spine(0.5,0.09,2.0,0.18),'rgba(245,40,140,0.65)',0.1,0.045,1);
  band(x,spine(0.55,0.09,1.6,0.18),'rgba(255,255,255,0.8)',0.04,0.03,2);
  glow(x,0.82,0.94,0.36,'rgba(255,255,255,0.7)');
  glow(x,0.08,0.08,0.26,'rgba(60,40,110,0.4)','source-over');
},
/* 7 — amber corner, red chrome fold with cyan fringe */
function(x){
  fill(x,'#12030a');
  glow(x,0.02,0.04,0.42,'rgba(255,142,36,0.85)');
  glow(x,0.5,0.5,0.62,'rgba(178,26,14,0.8)');
  chrome(x,0.18,0.58,1.1,0.07,4.2,-0.1,'rgba(255,216,158,1)');
  shade(x,0.55,1.2,0.45);
  glow(x,0.94,0.94,0.3,'rgba(60,14,96,0.45)');
},
/* 8 — red chrome, cyan and lime fringes, purple shadow */
function(x){
  fill(x,'#040103');
  glow(x,0.4,0.46,0.5,'rgba(48,14,10,0.8)');
  chrome(x,0.3,0.44,2.4,0.06,4.8,0.1,'rgba(255,190,110,1)');
  shade(x,0.3,1.15,0.72);
  band(x,spine(0.9,0.05,0.4,0.1),'rgba(70,16,110,0.45)',0.12,0.08,1);
},
/* 9 — dark navy above, red chrome band below */
function(x){
  fill(x, lin(x,0.4,0,0.6,1,[[0,'#03040e'],[0.42,'#060a22'],[0.72,'#070412'],[1,'#030106']]));
  glow(x,0.28,0.14,0.42,'rgba(18,32,84,0.55)');
  chrome(x,0.6,0.3,0.9,0.05,3.8,-0.08,'rgba(255,198,120,1)');
  shade(x,0.3,1.1,0.8);
},
/* 10 — chrome fold above, blue-pink streaks over a pale plate */
function(x){
  fill(x,'#050208');
  chrome(x,0.02,0.34,2.0,0.045,4.4,-0.07,'rgba(255,206,132,1)');
  shade(x,0.45,1.1,0.7);
  x.save();
  x.beginPath(); x.moveTo(0,TS*0.72); x.lineTo(TS,TS*0.56); x.lineTo(TS,TS); x.lineTo(0,TS); x.closePath();
  x.clip();
  fill(x, lin(x,0,0.5,0.4,1,[[0,'#cfd6dc'],[0.6,'#e8eaee'],[1,'#f4f5f7']]));
  band(x,spine(0.7,0.03,1.0,-0.1),'rgba(245,44,96,0.8)',0.055,0.03,2);
  band(x,spine(0.76,0.03,1.6,-0.1),'rgba(30,146,245,0.75)',0.045,0.026,2);
  band(x,spine(0.82,0.03,2.2,-0.08),'rgba(245,130,54,0.5)',0.035,0.026,1);
  x.restore();
},
/* 11 — pale plate lit by streaks of pink light */
function(x){
  fill(x,'#08050a');
  var i;
  for (i=0;i<9;i++){
    var y0 = 0.06 + i*0.045, a = 0.8 - i*0.06;
    band(x,spine(y0,0.02,0.4+i*0.5,-0.2),
         'rgba('+(250-i*3)+','+(30+i*15)+','+(80+i*5)+','+a.toFixed(2)+')',0.032,0.018,2);
  }
  band(x,spine(0.28,0.02,1.2,-0.18),'rgba(255,120,72,0.55)',0.05,0.035,1);
  band(x,spine(0.14,0.02,2.4,-0.2),'rgba(120,190,255,0.4)',0.03,0.02,1);
  x.save();
  x.beginPath(); x.moveTo(0,TS*0.72); x.lineTo(TS,TS*0.4); x.lineTo(TS,TS); x.lineTo(0,TS); x.closePath();
  x.clip();
  fill(x, lin(x,0.1,0.4,0.6,1,[[0,'#c6c7cd'],[0.5,'#e2e2e6'],[1,'#f2f2f4']]));
  x.restore();
}
];

function roundRectPath(x,w,h,r){
  x.beginPath();
  x.moveTo(-w/2+r,-h/2);
  x.lineTo(w/2-r,-h/2); x.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);
  x.lineTo(w/2,h/2-r);  x.quadraticCurveTo(w/2,h/2,w/2-r,h/2);
  x.lineTo(-w/2+r,h/2); x.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);
  x.lineTo(-w/2,-h/2+r);x.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
  x.closePath();
}

function buildTextures(){
  var front = [], back = [];
  for (var i=0;i<ART.length;i++){
    var c = mkc(TS,TS), x = c.getContext('2d');
    ART[i](x);
    /* film grain */
    x.save();
    x.globalCompositeOperation = 'overlay';
    x.globalAlpha = 0.15;
    var p = x.createPattern(grainTile,'repeat');
    x.fillStyle = p; x.fillRect(0,0,TS,TS);
    x.restore();
    front.push(c);

    /* reverse side: darker and washed out */
    var d = mkc(TS,TS), y = d.getContext('2d');
    y.drawImage(c,0,0);
    y.globalCompositeOperation = 'saturation';
    y.fillStyle = 'rgba(128,128,128,0.2)'; y.fillRect(0,0,TS,TS);
    y.globalCompositeOperation = 'multiply';
    y.fillStyle = 'rgba(6,8,18,0.75)'; y.fillRect(0,0,TS,TS);
    back.push(d);
  }
  return { front: front, back: back };
}
var TEX = buildTextures();

/* ------------------------------------------------------------------ *
 * Ring geometry.  u / v span the ring plane; z points at the viewer.
 * ------------------------------------------------------------------ */
var ax = RING.axis * Math.PI/180, cf = RING.ratio, sf = Math.sqrt(1-cf*cf);
var U = [Math.cos(ax), Math.sin(ax), 0];
var V = [-Math.sin(ax)*cf, Math.cos(ax)*cf, sf];
var AXIS = [                                    /* U x V — the ring's own axis */
  U[1]*V[2]-U[2]*V[1],
  U[2]*V[0]-U[0]*V[2],
  U[0]*V[1]-U[1]*V[0]
];

/* ------------------------------------------------------------------ *
 * Canvas + layout
 * ------------------------------------------------------------------ */
var cv = document.getElementById('stage'), ctx = cv.getContext('2d');
var W = 0, H = 0, K = 1, OX = 0, OY = 0, headLayer = null, labelLayer = null;

function d2sx(x){ return OX + x*K; }
function d2sy(y){ return OY + y*K; }

/* draw text whose inked box matches a target: capHeight and (optional) width */
function fitText(x,str,font,weight,cap,cx,capTop,targetW,color,align){
  var probe = 100;
  x.font = weight+' '+probe+'px '+font;
  var m = x.measureText('H');
  var capUnit = (m.actualBoundingBoxAscent||71) / probe;
  var size = cap / capUnit;
  x.font = weight+' '+size+'px '+font;
  var mm = x.measureText(str);
  var inkW = (mm.actualBoundingBoxRight||mm.width) + (mm.actualBoundingBoxLeft||0);
  var sx = targetW ? targetW / inkW : 1;
  x.save();
  x.fillStyle = color;
  x.textBaseline = 'alphabetic';
  x.translate(cx, capTop + cap);
  x.scale(sx,1);
  x.textAlign = align || 'center';
  var left = (mm.actualBoundingBoxLeft||0);
  x.fillText(str, align === 'left' ? left : 0, 0);
  x.restore();
  return inkW*sx;
}

function buildHead(){
  headLayer = mkc(Math.max(1,W), Math.max(1,H));
  var x = headLayer.getContext('2d');
  for (var i=0;i<HEAD.length;i++){
    var h = HEAD[i];
    fitText(x, h.s, SANS, '700', CAP*K, d2sx(1481), d2sy(h.top), h.w*K, h.fill);
  }
}

function buildLabels(){
  labelLayer = mkc(Math.max(1,W), Math.max(1,H));
  var x = labelLayer.getContext('2d');
  var cap = SMALL*K, dim = '#b0b0b0', pad = 88*K;
  /* corner marks hug the viewport so the frame reads at any aspect */
  x.save();
  x.fillStyle = dim; x.textBaseline = 'alphabetic'; x.textAlign = 'left';
  var f = '400 ' + (cap/0.717) + 'px ' + SANS;
  x.font = f;
  if (x.letterSpacing !== undefined) x.letterSpacing = (0.03*cap)+'px';
  x.fillText('VOID BLUE   /   GRADIENT STRIPS   /   RED AURA', pad, pad + cap);
  x.fillText('2026', pad, H - pad);
  x.textAlign = 'right';
  x.fillText('GRAINIENT.SUPPLY', W - pad, H - pad);
  x.restore();

  /* the two notes flanking the headline sit with the ring */
  var pitch = 33*K;
  var L = ['(50+) Gradients','Backgrounds','Added,'];
  for (var i=0;i<L.length;i++)
    fitText(x, L[i], SANS, '500', cap, d2sx(344), d2sy(1148) + i*pitch, 0, '#ffffff', 'left');
  var Rt = ['Gradients &','AI-Generated','Backgrounds'];
  for (var j=0;j<Rt.length;j++)
    fitText(x, Rt[j], SANS, '500', cap, d2sx(2310), d2sy(932) + j*32.5*K, 0, '#ffffff', 'left');
}

function resize(){
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = Math.round(window.innerWidth * dpr);
  H = Math.round(window.innerHeight * dpr);
  cv.width = W; cv.height = H;
  var S = Math.min(W, H*DASP);           /* effective design width */
  K = S / DW;
  OX = (W - DW*K)/2;
  OY = (H - DH*K)/2;
  buildHead();
  buildLabels();
}

/* ------------------------------------------------------------------ *
 * Frame
 * ------------------------------------------------------------------ */
function project(p){
  var k = RING.a*K*RING.dist / (RING.dist - p[2]);
  return [ d2sx(RING.cx) + k*p[0], d2sy(RING.cy) + k*p[1], k ];
}

function drawTile(i, psi){
  var c = Math.cos(psi), s = Math.sin(psi);
  var C  = [c*U[0]+s*V[0], c*U[1]+s*V[1], c*U[2]+s*V[2]];      /* centre, |C| = 1 */
  var T  = [-s*U[0]+c*V[0], -s*U[1]+c*V[1], -s*U[2]+c*V[2]];   /* tangent          */
  var h  = RING.tile/(2*RING.a);                               /* half side, ring units */
  var p0 = project(C);
  var pT = project([C[0]+T[0]*h, C[1]+T[1]*h, C[2]+T[2]*h]);
  var pA = project([C[0]+AXIS[0]*h, C[1]+AXIS[1]*h, C[2]+AXIS[2]*h]);
  var ex = pT[0]-p0[0], ey = pT[1]-p0[1];
  var fx = pA[0]-p0[0], fy = pA[1]-p0[1];
  if (Math.abs(ex*fy - ey*fx) < 0.4) return;                   /* edge on */

  var facing = C[2] > 0;                                       /* radial normal ~ C */
  var img = (facing ? TEX.front : TEX.back)[i % TEX.front.length];
  ctx.save();
  ctx.setTransform(ex*2/TS, ey*2/TS, fx*2/TS, fy*2/TS, p0[0], p0[1]);
  roundRectPath(ctx, TS, TS, TS*RING.radius);
  ctx.clip();
  ctx.drawImage(img, -TS/2, -TS/2, TS, TS);
  ctx.restore();
  ctx.setTransform(1,0,0,1,0,0);
}

function render(t){
  ctx.setTransform(1,0,0,1,0,0);
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,W,H);
  ctx.imageSmoothingQuality = 'high';

  var spin = (t/DUR)*Math.PI*2;
  var list = [], i;
  for (i=0;i<RING.n;i++){
    var psi = RING.phase*Math.PI/180 - i*2*Math.PI/RING.n + spin;
    var c = Math.cos(psi), s = Math.sin(psi);
    list.push({ i:i, psi:psi, z: c*U[2] + s*V[2] });
  }
  list.sort(function(a,b){ return a.z - b.z; });

  var drawnText = false;
  for (i=0;i<list.length;i++){
    if (!drawnText && list[i].z > 0){ ctx.drawImage(headLayer,0,0); drawnText = true; }
    drawTile(list[i].i, list[i].psi);
  }
  if (!drawnText) ctx.drawImage(headLayer,0,0);
  ctx.drawImage(labelLayer,0,0);
}

/* ------------------------------------------------------------------ *
 * Clock + public controls
 * ------------------------------------------------------------------ */
var t0 = performance.now(), tNow = 0, playing = true;

function frame(now){
  if (playing){
    tNow = ((now - t0)/1000) % DUR;
    render(tNow);
  }
  requestAnimationFrame(frame);
}

window.addEventListener('resize', function(){ resize(); render(tNow); });
resize();
requestAnimationFrame(frame);

window.__DUR = DUR;
window.__seek = function(t){
  tNow = ((t % DUR) + DUR) % DUR;
  playing = false;
  render(tNow);
};
window.__play = function(){ t0 = performance.now() - tNow*1000; playing = true; };
window.__pause = function(){ playing = false; };
window.__time = function(){ return tNow; };
})();
<\/script>
</body>
</html>
`,ue=`<!DOCTYPE html><html><body></body></html>
`,de=`<!DOCTYPE html><html><body></body></html>
`,fe=`<!DOCTYPE html><html><body></body></html>
`,P=`<!DOCTYPE html><html><body></body></html>
`,pe=`<!DOCTYPE html><html><body></body></html>
`,me=`<!DOCTYPE html><html><body></body></html>
`,F=`<!DOCTYPE html><html><body></body></html>
`,I=`<!DOCTYPE html><html><body></body></html>
`,L=`<!DOCTYPE html><html><body></body></html>
`,he=`<!DOCTYPE html><html><body></body></html>
`,ge=`<!DOCTYPE html><html><body></body></html>
`,_e=`<!DOCTYPE html><html><body></body></html>
`,ve=`<!DOCTYPE html><html><body></body></html>
`,ye=`<!DOCTYPE html><html><body></body></html>
`,R=`<!DOCTYPE html><html><body></body></html>
`,be=`<!DOCTYPE html><html><body></body></html>
`,z=`<!DOCTYPE html><html><body></body></html>
`,xe=`<!DOCTYPE html><html><body></body></html>
`,B=`<!DOCTYPE html><html><body></body></html>
`,Se=`<!DOCTYPE html><html><body></body></html>
`,Ce=`<!DOCTYPE html><html><body></body></html>
`,we=`<!DOCTYPE html><html><body></body></html>
`,Te=`<svg viewBox="0 0 512 512" aria-hidden="true">
  <defs>
    <mask id="threeui-intro-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
      <rect width="512" height="512" fill="#000"/>
      <circle cx="256" cy="256" r="208" fill="#fff"/>
      <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="28">
        <path d="M36 178C112 252 184 264 260 196C336 128 404 114 482 180"/>
        <path d="M36 292C112 366 184 378 260 310C336 242 404 228 482 294"/>
      </g>
    </mask>
  </defs>
  <rect width="512" height="512" fill="#f5f5f7" mask="url(#threeui-intro-cut)"/>
</svg>`,Ee=`<svg width="1600" height="300" viewBox="0 0 1600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="800" y="235" text-anchor="middle" fill="#F4F4F0" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="240" font-weight="900" letter-spacing="-8">SHADERS</text>
</svg>`,De={mode:`dark`,hue:0,saturation:1,brightness:1},Oe={"rising-diagonal":{title:`Twelve Works in Slow Orbit`,headline:[`TWELVE WORKS`,`IN SLOW ORBIT`],headlineWidths:[1846,2e3],axis:25.5,phase:93,direction:1,field:`matte`,palette:[`#e9e5dd`,`#20232a`,`#c25a43`,`#2f5b4e`,`#d6cfc2`,`#3a4763`,`#dda45c`,`#14161a`,`#a7b3a4`,`#f3f1ec`,`#5a6670`,`#8c4b3f`],ink:{dark:[`#8d949c`,`#ffffff`,`#20232a`],light:[`#6b7280`,`#111827`,`#e9e5dd`]},type:{font:`sans`,weight:`400`,headlineSize:1.15,tracking:.1},motion:{spring:!0,ease:.42}},"falling-diagonal":{title:`Signal Lost, Image Holding`,headline:[`SIGNAL LOST`,`IMAGE HOLDING`],headlineWidths:[1622,1917],axis:-25.5,phase:87,direction:-1,field:`glitch`,palette:[`#0b0b12`,`#ff2f6d`,`#00e6ff`,`#13f28a`,`#f2f2f8`,`#7a1bff`,`#101018`,`#ff7a1a`,`#141a2e`,`#e01f52`,`#1a1a26`,`#0ac2d8`],ink:{dark:[`#ff2f6d`,`#f2f2f8`,`#0b0b12`],light:[`#c81049`,`#111827`,`#f2f2f8`]},type:{font:`sans`,weight:`700`,headlineSize:1.2,tracking:0},motion:{spring:!1,ease:.12}},"horizontal-sweep":{title:`Prints from the Flat Files`,headline:[`PRINTS FROM`,`THE FLAT FILES`],headlineWidths:[1506,1917],axis:0,phase:90,direction:1,field:`riso`,palette:[`#e0b64a`,`#b1512a`,`#6d7638`,`#ecdfc2`,`#2f6b66`,`#8a3a2b`,`#d69b3e`,`#3c4630`,`#c06e3a`,`#e6d3a8`,`#546d76`,`#7a4726`],ink:{dark:[`#e0b64a`,`#f4e9d2`,`#6d2a16`],light:[`#8a3a2b`,`#2b2018`,`#e0b64a`]},type:{font:`oldstyle`,weight:`700`,headlineSize:1.2,tracking:.03},motion:{spring:!1,ease:.9}},"vertical-loop":{title:`One Wall, Twelve Plates`,headline:[`ONE WALL`,`TWELVE PLATES`],headlineWidths:[1132,1840],axis:90,phase:0,direction:-1,field:`halftone`,palette:[`#12110f`,`#f2efe8`,`#1c1b18`,`#e4e0d7`,`#2b2a26`,`#d6d1c6`,`#0a0a09`,`#faf8f3`,`#1f1e1a`,`#eae6dd`,`#161513`,`#c0402c`],ink:{dark:[`#c0402c`,`#f2efe8`,`#12110f`],light:[`#c0402c`,`#12110f`,`#e4e0d7`]},type:{font:`didone`,weight:`400`,headlineSize:1.25,tracking:.06},motion:{spring:!1,ease:.55}}},ke={serif:`"Times New Roman",Times,"Liberation Serif","Nimbus Roman",serif`,didone:`Didot,"Bodoni 72","Bodoni MT","Playfair Display",Georgia,serif`,oldstyle:`"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua",Georgia,serif`,sans:`"Helvetica Neue",Helvetica,"Inter",Arial,system-ui,sans-serif`},Ae={...De,variant:`rising-diagonal`};function je(e,t){let n=t===`light`?`#f4f7fb`:`#111318`,r=t===`light`?[`#60a5fa`,`#3b82f6`,`#2563eb`]:[`#2563eb`,`#1d4ed8`,`#1e40af`];return e.replace(`<title>Uploading — glowing border microinteraction</title>`,`<title>Thinking — glowing border microinteraction</title>`).replace(`<style>`,`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">
<style>`).replaceAll(`#1d1d1d`,n).replace(`var word = 'Uploading'`,`var word = 'Thinking'`).replace(`var FONT = '300 100px -apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Inter, system-ui, "Segoe UI", Roboto, sans-serif';`,`var FONT = '300 100px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';`).replace(`      if(glyphs[i].ch === 'g') doubleStoreyG(c);
      else{`,`      {`).replace(`grd.addColorStop(0, '#2e3242');`,`grd.addColorStop(0, '${r[0]}');`).replace(`grd.addColorStop(0.55, '#2b2f3c');`,`grd.addColorStop(0.55, '${r[1]}');`).replace(`grd.addColorStop(1, '#272c36');`,`grd.addColorStop(1, '${r[2]}');`).replaceAll(`rgb(83,92,135)`,`rgb(219,234,254)`).replaceAll(`rgb(97,106,150)`,`rgb(239,246,255)`).replace(`rgb(133,141,189)`,`rgb(255,255,255)`).replace(`  var CX = 1024 - 22, CY = 1024 + 11.5;   /* button centre in the source recording */`,`  var SCL = 0.49;                          /* hero button -> normal button */
  var CX = (1024 - 22)/SCL, CY = (1024 + 11.5)/SCL;`).replace(`    k = S*dpr/REF;`,`    k = S*dpr/REF*SCL;`).replace(`  var PW = 976, PH = 345, PR = 100;`,`  var PW = 1010, PH = 345, PR = 100;`).replace(`  var TXT_W = 778, TXT_CAP = 120, TXT_BASE = 1093;`,`  var TXT_W = 450, TXT_CAP = 79, TXT_BASE = CY + 38;
  var BR_R = 13, BR_SP = 40, BR_GAP = 78;   /* braille dot radius, cell pitch, gap to label */
  var BR_W = BR_SP + 2*BR_R, BR_SHIFT = (BR_W + BR_GAP)/2;
  /* the terminal 'dots' spinner, as raised-dot masks: bit 0..2 = left column top->bottom, 3..5 = right */
  var BRAILLE = [0x0B,0x19,0x39,0x38,0x3C,0x34,0x26,0x27,0x07,0x0F];
  var BR_STEPS = 30;                        /* three full spinner cycles per lap, so the loop still joins */`).replace(`  var glyphs = [], fontPx = 169, tracking = 0, textX = 0;`,`  var glyphs = [], fontPx = 169, tracking = 0, textX = 0, brailleX = 0;`).replace(`    textX = (CX + 4)*k - TXT_W*k/2 + lead;`,`    textX = (CX + 4)*k - TXT_W*k/2 + lead + BR_SHIFT*k;
    brailleX = (CX + 4)*k - (BR_W + BR_GAP + TXT_W)*k/2 + BR_R*k;`).replace(`  function label(c, ph){`,`  /* the spinner is drawn as dots rather than braille glyphs, so it never depends
     on a system face carrying the U+28xx block */
  function braille(c, ph){
    var mask = BRAILLE[Math.floor(ph*BR_STEPS) % BRAILLE.length];
    var cy = (CY - 1.5)*k, r = BR_R*k, sp = BR_SP*k;
    for(var b=0;b<6;b++){
      var on = (mask >> b) & 1;
      c.beginPath();
      c.arc(brailleX + (b < 3 ? 0 : sp), cy + ((b % 3) - 1)*sp, on ? r : r*0.7, 0, Math.PI*2);
      c.fillStyle = on ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.16)';
      c.fill();
    }
  }

  function label(c, ph){`).replace(`    plate(ctx);
    label(ctx, ph);`,`    plate(ctx);
    braille(ctx, ph);
    label(ctx, ph);`)}function V(e,t){return t===`dark`?e.replace(`from-black/10 via-black/20 to-black/10`,`from-white/[0.16] via-white/[0.07] to-white/[0.16]`).replace(`text-black/60`,`text-white/70`).replace(`text-slate-600`,`text-slate-200`).replace(`stroke="#666"`,`stroke="#e5e7eb"`).replace(`hover:bg-slate-50`,`hover:bg-white/10`):e}function Me(e,t){return t===`light`?e.replaceAll(`#fffa`,`#111a`).replaceAll(`#fffd`,`#111d`).replaceAll(`#fff4`,`#1114`).replaceAll(`#fff3`,`#1113`).replaceAll(`#fff2`,`#1112`):e}var Ne=/function buildLabels\(\)\{[\s\S]*?\n\}\n\nfunction resize/,Pe=/function buildHead\(\)\{[\s\S]*?\n\}\n\nfunction buildLabels/,Fe=/function lin\(x,x0,y0,x1,y1,stops\)\{[\s\S]*?\n\];\n\nfunction roundRectPath/,Ie=/    \/\* film grain \*\/\n[\s\S]*?\n    x\.restore\(\);\n    front\.push\(c\);/,Le=/var t0 = performance\.now\(\), tNow = 0, playing = true;[\s\S]*?window\.__play = function\(\)\{ t0 = performance\.now\(\) - tNow\*1000; playing = true; \};/,Re=`function buildHead(){
  headLayer = mkc(Math.max(1,W), Math.max(1,H));
  var x = headLayer.getContext('2d');
  if (x.letterSpacing !== undefined) x.letterSpacing = (HEAD_TRACK*HEAD_CAP*HEAD_SIZE*K).toFixed(2)+'px';
  if (HEAD_STYLE === 'riso'){
    var off = 0.055*HEAD_CAP*HEAD_SIZE*K;
    headPass(x, off, off, HEAD_SHADOW);
  }
  headPass(x, 0, 0, null);
  if (HEAD_STYLE === 'glitch') headGlitch(x);
}

/* one setting of the two headline lines, optionally displaced and forced to
   a single colour, so a style can stack passes into its treatment */
function headPass(x, dx, dy, tint){
  for (var i=0;i<HEAD.length;i++){
    var h = HEAD[i];
    fitText(x, h.s, SANS, HEAD_WEIGHT, HEAD_CAP*HEAD_SIZE*K, d2sx(1481) + dx,
            d2sy(HEAD_MID + (h.top - HEAD_MID)*HEAD_SIZE) + dy, h.w*HEAD_SIZE*K, tint || h.fill);
  }
}

/* the headline as a picture that lost its signal: a few rows slip sideways
   and two colour channels sit out of register behind the letterforms */
function headGlitch(x){
  var w = headLayer.width, h = headLayer.height, i;
  var snap = mkc(w,h);
  snap.getContext('2d').drawImage(headLayer,0,0);
  var r = rng(0x2E51);
  var top = d2sy(HEAD_MID) - HEAD_CAP*HEAD_SIZE*K*2.1, span = HEAD_CAP*HEAD_SIZE*K*4.2;
  for (i=0;i<7;i++){
    var sy = Math.round(top + r()*span);
    var sh = Math.round((0.03 + r()*0.11)*HEAD_CAP*HEAD_SIZE*K);
    var dx = Math.round((r()-0.5)*0.08*w);
    x.clearRect(0,sy,w,sh);
    x.drawImage(snap, 0,sy,w,sh, dx,sy,w,sh);
  }
  var ghost = function(color){
    var g = mkc(w,h), gx = g.getContext('2d');
    gx.drawImage(snap,0,0);
    gx.globalCompositeOperation = 'source-in';
    gx.fillStyle = color; gx.fillRect(0,0,w,h);
    return g;
  };
  var off = 0.05*HEAD_CAP*HEAD_SIZE*K;
  x.save();
  /* the ghosts go under the letterforms, so the headline stays readable */
  x.globalCompositeOperation = 'destination-over';
  x.globalAlpha = 0.9;
  x.drawImage(ghost(HEAD_GHOST[0]), -off, 0);
  x.drawImage(ghost(HEAD_GHOST[1]), off, 0);
  x.restore();
}

function buildLabels`,ze=`function fill(x,style){ x.fillStyle = style; x.fillRect(0,0,TS,TS); }

function rgbOf(hex){
  var v = parseInt(hex.slice(1),16);
  return [(v>>16)&255,(v>>8)&255,v&255];
}
function mixRGB(a,b,t){
  return [a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t, a[2]+(b[2]-a[2])*t];
}
function cssRGB(c){
  return 'rgb('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+')';
}
function luma(c){ return (c[0]*0.299 + c[1]*0.587 + c[2]*0.114)/255; }

/* value noise on a 64x64 lattice, smoothstep-interpolated and wrapped */
function noiseField(seed){
  var g = new Float32Array(4096), r = rng(seed), i;
  for (i=0;i<4096;i++) g[i] = r();
  return function(x,y){
    var x0 = Math.floor(x), y0 = Math.floor(y);
    var fx = x - x0, fy = y - y0;
    fx = fx*fx*(3-2*fx); fy = fy*fy*(3-2*fy);
    var ra = (y0 & 63)*64, rb = ((y0+1) & 63)*64, ca = x0 & 63, cb = (x0+1) & 63;
    var a = g[ra+ca], b = g[ra+cb], c = g[rb+ca], d = g[rb+cb];
    return a + (b-a)*fx + (c-a)*fy + (a-b-c+d)*fx*fy;
  };
}
function fbm(n,x,y,oct){
  var v = 0, amp = 0.5, f = 1, tot = 0, i;
  for (i=0;i<oct;i++){ v += amp*n(x*f,y*f); tot += amp; amp *= 0.5; f *= 2; }
  return v/tot;
}
function grain(x, alpha){
  x.save();
  x.globalCompositeOperation = 'overlay';
  x.globalAlpha = alpha;
  x.fillStyle = x.createPattern(grainTile,'repeat');
  x.fillRect(0,0,TS,TS);
  x.restore();
}

/* paint a low-resolution field, then blow it up over the whole tile: smooth
   for a matte plate, nearest wherever the noise has to keep its edges */
function fieldBuffer(N, shade){
  var buf = mkc(N,N), bx = buf.getContext('2d'), d = bx.createImageData(N,N), px, py, o, c;
  for (py=0;py<N;py++){
    for (px=0;px<N;px++){
      c = shade((px+0.5)/N, (py+0.5)/N, px, py);
      o = (py*N+px)*4;
      d.data[o] = c[0]|0; d.data[o+1] = c[1]|0; d.data[o+2] = c[2]|0;
      d.data[o+3] = c.length > 3 ? c[3]|0 : 255;
    }
  }
  bx.putImageData(d,0,0);
  return buf;
}
function blowUp(x, buf, smooth, alpha){
  x.save();
  x.imageSmoothingEnabled = smooth;
  if (alpha !== undefined) x.globalAlpha = alpha;
  x.drawImage(buf, 0, 0, TS, TS);
  x.restore();
}

/* matte — a museum plate: flat colour, one slow rise of noise across it,
   and grain fine enough to read as the surface rather than as an effect */
function paintMatte(x, base, i){
  var n = noiseField(0x2C41 + i*9176);
  var hi = mixRGB(base,[255,255,255],0.13), lo = mixRGB(base,[0,0,0],0.15);
  blowUp(x, fieldBuffer(160, function(u,v){
    var s = 0.5 + (fbm(n, u*6.5, v*6.5, 5) - 0.5)*1.9 + (v - 0.5)*0.07;
    s = s < 0 ? 0 : s > 1 ? 1 : s;
    return s < 0.5 ? mixRGB(lo, base, s*2) : mixRGB(base, hi, (s-0.5)*2);
  }), true);
  grain(x, 0.1);
}

/* glitch — a plate that lost the signal: flat blocks torn out of the
   neighbouring colours, rows slipped sideways, two channels off register */
function paintGlitch(x, base, i){
  var r = rng(0x51B7 + i*30011), k;
  fill(x, cssRGB(base));
  for (k=0;k<4;k++){
    x.fillStyle = cssRGB(rgbOf(PLATES[(i + 1 + ((r()*5)|0)) % PLATES.length]));
    x.fillRect(Math.round((r()-0.2)*TS), Math.round(r()*TS),
               Math.round((0.2 + r()*0.55)*TS), Math.round((0.04 + r()*0.2)*TS));
  }
  blowUp(x, fieldBuffer(64, function(){
    var w = r() < 0.5 ? 250 : 6;
    return [w,w,w, r() < 0.2 ? 200 : 0];
  }), false, 0.5);
  /* rows slip sideways, each one wrapped so no edge is ever left empty */
  var snap = mkc(TS,TS);
  snap.getContext('2d').drawImage(x.canvas,0,0);
  for (k=0;k<11;k++){
    var y0 = Math.round(r()*TS), h = Math.round((0.01 + r()*0.06)*TS);
    var dx = Math.round((r()-0.5)*0.36*TS);
    x.clearRect(0,y0,TS,h);
    x.drawImage(snap, 0,y0,TS,h, dx,y0,TS,h);
    x.drawImage(snap, 0,y0,TS,h, dx + (dx < 0 ? TS : -TS),y0,TS,h);
  }
  var channel = function(color){
    var g = mkc(TS,TS), gx = g.getContext('2d');
    gx.drawImage(x.canvas,0,0);
    gx.globalCompositeOperation = 'multiply';
    gx.fillStyle = color; gx.fillRect(0,0,TS,TS);
    return g;
  };
  var red = channel('#ff3050'), cyan = channel('#30e0ff');
  x.save();
  x.globalCompositeOperation = 'lighter';
  x.globalAlpha = 0.3;
  x.drawImage(red, -0.022*TS, 0);
  x.drawImage(cyan, 0.022*TS, 0);
  x.restore();
  x.save();
  x.fillStyle = 'rgba(0,0,0,0.22)';
  for (k=0;k<TS;k+=4) x.fillRect(0,k,TS,1);
  x.restore();
  grain(x, 0.24);
}

/* riso — the printed plate: a lit corner and a noise field quantised to
   three tones through an ordered dither, then scanlines and heavy grain */
var BAYER = [0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
function paintRiso(x, base, i){
  var n = noiseField(0x77A3 + i*15731), k;
  var lo = mixRGB(base,[24,14,6],0.66), hi = mixRGB(base,[255,238,196],0.5);
  var cx = 0.22 + (i % 3)*0.28, cy = 0.2 + ((i/3)|0)*0.2;
  blowUp(x, fieldBuffer(100, function(u,v,px,py){
    var d = Math.sqrt((u-cx)*(u-cx) + (v-cy)*(v-cy));
    var s = (1 - d*1.25)*0.72 + fbm(n, u*3.2, v*3.2, 3)*0.52 - 0.1;
    var band = Math.floor(s*2.4 + (BAYER[(py & 3)*4 + (px & 3)] + 0.5)/16);
    return band <= 0 ? lo : band === 1 ? base : hi;
  }), false);
  x.save();
  x.fillStyle = 'rgba(28,14,4,0.18)';
  for (k=0;k<TS;k+=6) x.fillRect(0,k,TS,2);
  x.restore();
  grain(x, 0.22);
}

/* halftone — one ink on one stock, shaded only by the size of the dots on
   a screen rotated a few degrees further for every tile */
function paintHalftone(x, base, i){
  var n = noiseField(0x3F19 + i*21467), gx, gy;
  fill(x, cssRGB(base));
  var dot = luma(base) > 0.5 ? mixRGB(base,[0,0,0],0.88) : mixRGB(base,[255,255,255],0.9);
  var pitch = TS/30, a = (17 + (i % 4)*9)*Math.PI/180;
  var ca = Math.cos(a), sa = Math.sin(a), span = Math.ceil(TS/pitch);
  x.save();
  x.fillStyle = cssRGB(dot);
  x.translate(TS/2, TS/2);
  x.rotate(a);
  for (gy=-span;gy<=span;gy++){
    for (gx=-span;gx<=span;gx++){
      var wx = gx*pitch, wy = gy*pitch;
      var u = (wx*ca - wy*sa)/TS + 0.5, v = (wx*sa + wy*ca)/TS + 0.5;
      if (u < -0.1 || u > 1.1 || v < -0.1 || v > 1.1) continue;
      var s = fbm(n, u*2.7, v*2.7, 4)*0.95 + (0.55 - v)*0.5;
      var rad = pitch*0.66*(s < 0 ? 0 : s > 1 ? 1 : s);
      if (rad < 0.4) continue;
      x.beginPath(); x.arc(wx, wy, rad, 0, Math.PI*2); x.fill();
    }
  }
  x.restore();
  grain(x, 0.12);
}

var PAINTERS = { matte: paintMatte, glitch: paintGlitch, riso: paintRiso, halftone: paintHalftone };
var ART = (function(){
  var painter = PAINTERS[FIELD] || paintMatte, list = [], i;
  for (i=0;i<PLATES.length;i++){
    list.push((function(index){
      return function(x){ painter(x, rgbOf(PLATES[index]), index); };
    })(i));
  }
  return list;
})();

function roundRectPath`,Be=`var tNow = 0, playing = true, hovering = false, rate = 0, vel = 0, settled = false, last = performance.now();

function setHover(state){
  if (hovering === state) return;
  hovering = state; settled = false;
  /* the host cannot see the pointer arrive over this frame, so tell it — it is
     the one that will see the pointer leave again */
  if (state && window.parent !== window){
    try { window.parent.postMessage({ threeuiPointerOver: true }, '*'); } catch (error) {}
  }
}
var root = document.documentElement;
root.addEventListener('pointerenter', function(){ setHover(true); });
root.addEventListener('pointermove',  function(){ setHover(true); });
root.addEventListener('pointerdown',  function(){ setHover(true); });
root.addEventListener('pointerleave', function(){ setHover(false); });
root.addEventListener('pointercancel',function(){ setHover(false); });
window.addEventListener('blur', function(){ setHover(false); });

function frame(now){
  var dt = Math.min(0.05, Math.max(0, (now - last)/1000));
  last = now;
  if (playing){
    if (SPRING){
      vel += (((hovering ? 1 : 0) - rate)*SPRING_K - vel*SPRING_D)*dt;
      rate += vel*dt;
    } else {
      rate += ((hovering ? 1 : 0) - rate) * (1 - Math.exp(-dt/EASE));
    }
    if (Math.abs(rate) > 0.0004 || Math.abs(vel) > 0.0004){
      tNow = ((tNow + dt*rate) % DUR + DUR) % DUR;
      render(tNow); settled = false;
    } else if (!settled){
      rate = 0; vel = 0; render(tNow); settled = true;
    }
  }
  requestAnimationFrame(frame);
}

/* font family, weight, and headline size arrive live so a control tick never
   rebuilds the document and repaints the twelve tile textures */
window.addEventListener('message', function(event){
  var runtime = event.data && event.data.threeuiRuntime;
  if (!runtime) return;
  if (typeof runtime.font === 'string') SANS = runtime.font;
  if (typeof runtime.weight === 'string') HEAD_WEIGHT = runtime.weight;
  if (typeof runtime.headlineSize === 'number' && runtime.headlineSize > 0){
    HEAD_SIZE = Math.max(0.6, Math.min(1.8, runtime.headlineSize));
  }
  if (typeof runtime.hover === 'number') setHover(runtime.hover > 0);
  buildHead(); settled = false; render(tNow);
});

window.addEventListener('resize', function(){ resize(); settled = false; render(tNow); });
resize();
render(tNow);
requestAnimationFrame(frame);

window.__DUR = DUR;
window.__seek = function(t){
  tNow = ((t % DUR) + DUR) % DUR;
  playing = false;
  render(tNow);
};
window.__play = function(){ last = performance.now(); playing = true; settled = false; };`;function Ve(e,t,n){let r=t===`light`?`#f4f7fb`:`#000000`,i=t===`light`?n.ink.light:n.ink.dark,a=ke[n.type.font];return e.replace(`<title>New Grainient Collection Added — motion</title>`,`<title>${n.title} — motion</title>`).replace(`html,body{margin:0;height:100%;background:#000;overflow:hidden}`,`html,body{margin:0;height:100%;background:${r};overflow:hidden}`).replace(`axis: 25.5,`,`axis: ${n.axis},`).replace(`phase: 93`,`phase: ${n.phase}`).replace(`  tile: 346,            /* tile side in ring units (R = a)               */`,`  tile: 346,            /* tile width in ring units (R = a)              */
  aspect: 0.75,         /* tile height / width — a 4:3 landscape crop    */`).replace(`  roundRectPath(ctx, TS, TS, TS*RING.radius);`,`  roundRectPath(ctx, TS, TS*RING.aspect, TS*RING.aspect*RING.radius);`).replace(`var CAP = 142;          /* headline cap height */
var SMALL = 22;         /* small-label cap height */`,`var HEAD_CAP = 142;     /* authored headline cap height */
var HEAD_MID = 1093;    /* authored vertical centre of the two-line block */
var HEAD_SIZE = ${n.type.headlineSize};   /* headline size multiplier */\nvar HEAD_WEIGHT = '${n.type.weight}'; /* headline weight */\nvar HEAD_TRACK = ${n.type.tracking};   /* headline tracking, in cap heights */\nvar HEAD_STYLE = '${n.field}';\nvar HEAD_SHADOW = '${i[2]}';  /* riso: the plate under the ink */\nvar HEAD_GHOST = ['#ff2f6d','#00e6ff'];  /* glitch: the two channel ghosts */\nvar PLATES = ${JSON.stringify(n.palette)};\nvar FIELD = '${n.field}';       /* which painter shades the plates */\nvar EASE = ${n.motion.ease};        /* seconds for the orbit to reach hover speed */\nvar SPRING = ${+!!n.motion.spring}, SPRING_K = 26, SPRING_D = 5.7;`).replace(`var SANS = '"Helvetica Neue",Helvetica,"Inter",Arial,system-ui,sans-serif';`,`var SANS = '${a}';`).replace(`{ s:'NEW GRAINIENT',    top:930,  w:1370, fill:'#d0d0d0' }`,`{ s:'${n.headline[0]}', top:930,  w:${n.headlineWidths[0]}, fill:'${i[0]}' }`).replace(`{ s:'COLLECTION ADDED', top:1114, w:1775, fill:'#ffffff' }`,`{ s:'${n.headline[1]}', top:1114, w:${n.headlineWidths[1]}, fill:'${i[1]}' }`).replace(` * Tile artwork — eleven grainy gradient "wallpapers"`,` * Tile artwork — twelve flat plates under a procedural noise field`).replace(Fe,ze).replace(Ie,`    /* each field painter lays its own grain, at the weight its style wants */
    front.push(c);`).replace(`y.fillStyle = 'rgba(6,8,18,0.75)';`,`y.fillStyle = 'rgba(10,12,24,0.45)';`).replace(Pe,Re).replace(Ne,`function buildLabels(){
  /* the launch poster's corner marks and flanking notes are dropped; the
     layer stays so the compositing order below is untouched */
  labelLayer = mkc(1,1);
}

function resize`).replace(`var spin = (t/DUR)*Math.PI*2;`,`var spin = (t/DUR)*Math.PI*2*${n.direction};`).replace(`ctx.fillStyle = '#000';
  ctx.fillRect(0,0,W,H);`,`ctx.fillStyle = '${r}';\n  ctx.fillRect(0,0,W,H);`).replace(Le,Be)}({...De});function He(e,t){let n=t===`light`?`[[8, 10, 15], [40, 48, 62], [85, 96, 116]]`:`[[255, 255, 255], [226, 232, 240], [191, 205, 225]]`;return e.replace(`<title>Epilude — Footer</title>`,`<title>Shaders Particle Wordmark</title>`).replace(`aspect-ratio: 8.541554959785524;`,`aspect-ratio: 5.333333333333333;`).replace(/var WORDMARK =[\s\S]*?"<\/svg>";/,`var WORDMARK = ${JSON.stringify(Ee)};`).replace(`var PALETTE = [[255, 255, 255], [226, 232, 240], [191, 205, 225]];`,`var PALETTE = ${n};`).replace(`a: 0.04 + 0.95 * band * Math.pow(flake, 1.8)`,`a: 0.14 + 0.86 * band * Math.pow(flake, 1.8)`)}function Ue(e,t){let n=t===`light`?`#f4f7fb`:`#000`,r=t===`light`?`#172033`:`#E8EEE9`,i=t===`light`?`#536076`:`#c9d4cc`,a=t===`light`?`#315efb`:`#7080ff`;return e.replace(`<title>Supreme Radio — Graphic Identity</title>`,`<title>ThreeUI — Audio Wordmark</title>`).replaceAll(`supreme radio`,`ThreeUI`).replaceAll(`#EA3927`,a).replaceAll(`#E8EEE9`,r).replaceAll(`#E3EDE5`,r).replaceAll(`#c9d4cc`,i).replaceAll(`#000`,n).replace(`var DUR = 20;`,`var DUR = 4.7;`)}var We={expanse:{title:`Expanse Field shader background`,source:se,background:`#07080b`,targets:[{selector:`#glcanvas`,role:`background`}]},starfield:{title:`Imaginie star portal`,source:I,background:`#0d0a12`,theme:{nativeMode:`dark`,lightBackground:`#f4f7fb`,darkBackground:`#0d0a12`,invertBackground:!0},targets:[{selector:`#ambient-starfield`,role:`background`},{selector:`#portal-stars`,role:`background`},{selector:`.holo-btn`,role:`button`}]},particleOrb:{title:`Synthesis autonomous orb`,source:xe,background:`#050505`,targets:[{selector:`#orbCanvas`,role:`background`}]},performanceGaugesTachometer:{title:`Tachometer diagnostic gauge`,source:R,background:`#000000`,targets:[{selector:`#gauge-tachometer`,role:`visual`,fit:`contain-square`}]},performanceGaugesSpeedometer:{title:`Speedometer diagnostic gauge`,source:R,background:`#000000`,targets:[{selector:`#gauge-speedometer`,role:`visual`,fit:`contain-square`}]},performanceGaugesBoost:{title:`Turbo boost diagnostic gauge`,source:R,background:`#000000`,targets:[{selector:`#gauge-boost`,role:`visual`,fit:`contain-square`}]},performanceGaugesPower:{title:`EV power diagnostic gauge`,source:R,background:`#000000`,targets:[{selector:`#gauge-power`,role:`visual`,fit:`contain-square`}]},logicCore:{title:`Logic Core isometric field`,source:be,background:`#050505`,targets:[{selector:`#three-canvas-container`,role:`background`}]},ignition:{title:`Ignition Button shader button`,source:me,background:`#f0ede7`,theme:{nativeMode:`light`,lightBackground:`#f0ede7`,darkBackground:`#121316`,invertBackground:!0},targets:[{selector:`#bg-gl`,role:`background`},{selector:`#btn`,role:`button`}]},induction:{title:`Induction Button kinetic button`,source:B,background:`#050505`,theme:{nativeMode:`dark`,lightBackground:`#f4f7fb`,darkBackground:`#050505`,invertBackground:!0},targets:[{selector:`#bg-canvas`,role:`background`},{selector:`#btn`,role:`button`}]},aetherisLabs:{title:`Aetheris Labs plasma button`,source:ne,background:`#020614`,theme:{nativeMode:`dark`,lightBackground:`#f4f7fb`,darkBackground:`#020614`,invertBackground:!0},targets:[{selector:`#bg-gl`,role:`background`},{selector:`#btn`,role:`button`}]},tactile:{title:`Nexus tactile fluidics button`,source:L,background:`#03090d`,theme:{nativeMode:`dark`,lightBackground:`#f4f7fb`,darkBackground:`#03090d`,invertBackground:!0},targets:[{selector:`#bg-canvas`,role:`background`},{selector:`#btn`,role:`button`}]},thinking:{title:`Thinking Button canvas animation`,source:ye,background:`#111318`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#111318`},transformSource:je,targets:[{selector:`#stage`,role:`button`}]},slidingTextCta:{title:`Sliding Text CTA button`,source:_e,background:`#111318`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#111318`},targets:[{selector:`.component-wrapper button`,role:`button`,preserveTransform:!0}]},floatingDotsCta:{title:`Floating Dots CTA button`,source:ce,background:`#111318`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#111318`},targets:[{selector:`.component-wrapper button`,role:`button`,preserveTransform:!0}]},launchButton:{title:`Gradient Launch button`,source:F,background:`#111318`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#111318`},targets:[{selector:`.component-wrapper button`,role:`button`,preserveTransform:!0}]},dotBorderButton:{title:`Dot Border button`,source:ie,background:`#111318`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#111318`},transformSource:Me,targets:[{selector:`.component-wrapper .btn-wrapper`,role:`button`,preserveTransform:!0}]},gradientCta:{title:`Gradient CTA button`,source:P,background:`#111318`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#111318`},targets:[{selector:`.component-wrapper button`,role:`button`,preserveTransform:!0}]},spinningBorderButton:{title:`Spinning Border button`,source:ve,background:`#111318`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#111318`},targets:[{selector:`.component-wrapper button`,role:`button`,preserveTransform:!0}]},glassmorphismCta:{title:`Glassmorphism CTA button`,source:de,background:`#111318`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#111318`},targets:[{selector:`.component-wrapper a`,role:`button`,preserveTransform:!0}]},generateButton:{title:`Generate button`,source:ue,background:`#111318`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#111318`},targets:[{selector:`.component-wrapper .btn-wrapper`,role:`button`,preserveTransform:!0}]},gradientPillButton:{title:`Gradient Pill button`,source:pe,background:`#111318`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#111318`},transformSource:V,targets:[{selector:`.component-wrapper button`,role:`button`,preserveTransform:!0}]},gradientBeamCta:{title:`Gradient Beam CTA button`,source:fe,background:`#111318`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#111318`},targets:[{selector:`.component-wrapper button`,role:`button`,preserveTransform:!0}]},recursiveErosion:{title:`Recursive Erosion particle sphere background`,source:ge,background:`#0a0908`,theme:{lightBackground:`#f4f3f1`,darkBackground:`#0a0908`},targets:[{selector:`#stage`,role:`background`}],hiddenTargets:[`#badge`,`.sr`]},threeUIIntro:{title:`ThreeUI chromatic wordmark intro`,source:ae,background:`#000000`,theme:{nativeMode:`dark`,lightBackground:`#f4f7fb`,darkBackground:`#000000`,invertBackground:!0},targets:[{selector:`#stage`,role:`background`}],hiddenTargets:[`.sr`],introWordmark:{sceneSelector:`#comp .scene:first-child`,text:`ThreeUI`,fontSize:130,endTime:1.7,holdTime:1.1,logoSvg:Te}},particleWordmark:{title:`Shaders particle wordmark`,source:oe,background:`#0c0c0d`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#0c0c0d`},transformSource:He,targets:[{selector:`#storm`,role:`visual`,fit:`wide-wordmark`}]},audioWordmark:{title:`ThreeUI audio wordmark`,source:re,background:`#000000`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#000000`},transformSource:Ue,targets:[{selector:`#stage`,role:`visual`,fit:`portrait-stage`,preserveTransform:!0}]},galleryHeading:{title:`Gallery Heading canvas animation`,source:le,background:`#000000`,theme:{lightBackground:`#f4f7fb`,darkBackground:`#000000`},transformSource:(e,t)=>Ve(e,t,Oe[Ae.variant]),targets:[{selector:`#stage`,role:`background`}]},dimensional:{title:`Vanguard dimensional architecture`,source:Se,background:`#050608`,targets:[{selector:`#webgl-canvas`,role:`background`}]},cloud:{title:`Strata cloud migration field`,source:z,background:`#071010`,targets:[{selector:`#c`,role:`background`}]},vertex9:{title:`Vertex 9 global data field`,source:Ce,background:`#050505`,targets:[{selector:`#webgl-canvas`,role:`background`}]},topology:{title:`Nexus topology field`,source:he,background:`#070707`,targets:[{selector:`#animationCanvas`,role:`background`}]},voidField:{title:`Void Field shader background`,source:we,background:`#030305`,targets:[{selector:`#webgl-canvas`,role:`background`}]}};We.expanse,We.starfield,We.particleOrb,We.performanceGaugesTachometer,We.performanceGaugesSpeedometer,We.performanceGaugesBoost,We.performanceGaugesPower,{...De},We.logicCore,We.ignition,We.induction,We.aetherisLabs,We.tactile,We.thinking,We.slidingTextCta,We.floatingDotsCta,We.launchButton,We.dotBorderButton,We.gradientCta,We.spinningBorderButton,We.glassmorphismCta,We.generateButton,We.gradientPillButton,We.gradientBeamCta,We.threeUIIntro,We.particleWordmark,We.audioWordmark,We.dimensional,We.cloud,We.vertex9,We.topology,We.voidField;function Ge(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Ke(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var qe={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},Je={duration:.5,overwrite:!1,delay:0},Ye,Xe,Ze,Qe=1e8,$e=1/Qe,et=Math.PI*2,tt=et/4,nt=0,rt=Math.sqrt,it=Math.cos,at=Math.sin,ot=function(e){return typeof e==`string`},st=function(e){return typeof e==`function`},ct=function(e){return typeof e==`number`},lt=function(e){return e===void 0},ut=function(e){return typeof e==`object`},dt=function(e){return e!==!1},ft=function(){return typeof window<`u`},pt=function(e){return st(e)||ot(e)},mt=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},ht=Array.isArray,gt=/random\([^)]+\)/g,_t=/,\s*/g,vt=/(?:-?\.?\d|\.)+/gi,yt=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xt=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,St=/[+-]=-?[.\d]+/,Ct=/[^,'"\[\]\s]+/gi,wt=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tt,Et,Dt,Ot,kt={},At={},jt,Mt=function(e){return(At=dn(e,kt))&&ki},Nt=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},Pt=function(e,t){return!t&&console.warn(e)},Ft=function(e,t){return e&&(kt[e]=t)&&At&&(At[e]=t)||kt},It=function(){return 0},Lt={suppressEvents:!0,isStart:!0,kill:!1},Rt={suppressEvents:!0,kill:!1},zt={suppressEvents:!0},Bt={},Vt=[],Ht={},Ut,Wt={},Gt={},Kt=30,qt=[],Jt=``,Yt=function(e){var t=e[0],n,r;if(ut(t)||st(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=qt.length;r--&&!qt[r].targetTest(t););n=qt[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new zr(e[r],n)))||e.splice(r,1);return e},Xt=function(e){return e._gsap||Yt(Jn(e))[0]._gsap},Zt=function(e,t,n){return(n=e[t])&&st(n)?e[t]():lt(n)&&e.getAttribute&&e.getAttribute(t)||n},Qt=function(e,t){return(e=e.split(`,`)).forEach(t)||e},$t=function(e){return Math.round(e*1e5)/1e5||0},en=function(e){return Math.round(e*1e7)/1e7||0},tn=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},nn=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},rn=function(){var e=Vt.length,t=Vt.slice(0),n,r;for(Ht={},Vt.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},an=function(e){return!!(e._initted||e._startAt||e.add)},on=function(e,t,n,r){Vt.length&&!Xe&&rn(),e.render(t,n,r||!!(Xe&&t<0&&an(e))),Vt.length&&!Xe&&rn()},sn=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(Ct).length<2?t:ot(e)?e.trim():e},cn=function(e){return e},ln=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},un=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},dn=function(e,t){for(var n in t)e[n]=t[n];return e},fn=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=ut(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},pn=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},mn=function(e){var t=e.parent||Tt,n=e.keyframes?un(ht(e.keyframes)):ln;if(dt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},hn=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},gn=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},_n=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},vn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},yn=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},bn=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xn=function(e,t,n,r){return e._startAt&&(Xe?e._startAt.revert(Rt):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Sn=function e(t){return!t||t._ts&&e(t.parent)},Cn=function(e){return e._repeat?wn(e._tTime,e=e.duration()+e._rDelay)*e:0},wn=function(e,t){var n=Math.floor(e=en(e/t));return e&&n===e?n-1:n},Tn=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},En=function(e){return e._end=en(e._start+(e._tDur/Math.abs(e._ts||e._rts||$e)||0))},Dn=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=en(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),En(e),n._dirty||yn(n,e)),e},On=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Tn(e.rawTime(),t),(!t._dur||Hn(0,t.totalDuration(),n)-t._tTime>$e)&&t.render(n,!0)),yn(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-$e}},kn=function(e,t,n,r){return t.parent&&vn(t),t._start=en((ct(n)?n:n||e!==Tt?zn(e,n,t):e._time)+t._delay),t._end=en(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),gn(e,t,`_first`,`_last`,e._sort?`_start`:0),Nn(t)||(e._recent=t),r||On(e,t),e._ts<0&&Dn(e,e._tTime),e},An=function(e,t){return(kt.ScrollTrigger||Nt(`scrollTrigger`,t))&&kt.ScrollTrigger.create(t,e)},jn=function(e,t,n,r,i){if(Jr(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!Xe&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ut!==Er.frame)return Vt.push(e),e._lazy=[i,r],1},Mn=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Nn=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Pn=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&Mn(e)&&(e._initted||!Nn(e))||(e._ts<0||e._dp._ts<0)&&!Nn(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=Hn(0,e._tDur,t),l=wn(s,o),e._yoyo&&l&1&&(a=1-a),l!==wn(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||Xe||r||e._zTime===$e||!t&&e._zTime){if(!e._initted&&jn(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?$e:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&xn(e,t,n,!0),e._onUpdate&&!n&&dr(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&dr(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&vn(e,1),!n&&!Xe&&(dr(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Fn=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},In=function(e,t,n,r){var i=e._repeat,a=en(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:en(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Dn(e,e._tTime=e._tDur*o),e.parent&&En(e),n||yn(e.parent,e),e},Ln=function(e){return e instanceof Vr?yn(e):In(e,e._dur)},Rn={_start:0,endTime:It,totalDuration:It},zn=function e(t,n,r){var i=t.labels,a=t._recent||Rn,o=t.duration()>=Qe?a.endTime(!1):t._dur,s,c,l;return ot(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(ht(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},Bn=function(e,t,n){var r=ct(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=dt(s.vars.inherit)&&s.parent;a.immediateRender=dt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new ti(t[0],a,t[i+1])},Vn=function(e,t){return e||e===0?t(e):t},Hn=function(e,t,n){return n<e?e:n>t?t:n},Un=function(e,t){return!ot(e)||!(t=wt.exec(e))?``:t[1]},Wn=function(e,t,n){return Vn(n,function(n){return Hn(e,t,n)})},Gn=[].slice,Kn=function(e,t){return e&&ut(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&ut(e[0]))&&!e.nodeType&&e!==Et},qn=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return ot(e)&&!t||Kn(e,1)?(r=n).push.apply(r,Jn(e)):n.push(e)})||n},Jn=function(e,t,n){return Ze&&!t&&Ze.selector?Ze.selector(e):ot(e)&&!n&&(Dt||!Dr())?Gn.call((t||Ot).querySelectorAll(e),0):ht(e)?qn(e,n):Kn(e)?Gn.call(e,0):e?[e]:[]},Yn=function(e){return e=Jn(e)[0]||Pt(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return Jn(t,n.querySelectorAll?n:n===e?Pt(`Invalid scope`)||Ot.createElement(`div`):e)}},Xn=function(e){return e.sort(function(){return .5-Math.random()})},Zn=function(e){if(st(e))return e;var t=ut(e)?e:{each:e},n=Pr(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return ot(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,Qe])[1],!S){for(b=-Qe;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===Qe?0:s?f*u/S-.5:r/S|0,b=0,x=Qe,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):rt(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&Xn(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=Un(t.amount||t.each)||0,n=n&&f<0?Nr(n):n}return f=(p[e]-p.min)/p.max||0,en(p.b+(n?n(f):f)*p.v)+p.u}},Qn=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=en(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ct(n)?0:Un(n))}},$n=function(e,t){var n=ht(e),r,i;return!n&&ut(e)&&(r=n=e.radius||Qe,e.values?(e=Jn(e.values),(i=!ct(e[0]))&&(r*=r)):e=Qn(e.increment)),Vn(t,n?st(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=Qe,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||ct(t)?s:s+Un(t)}:Qn(e))},er=function(e,t,n,r){return Vn(ht(e)?!t:n===!0?!!(n=0):!r,function(){return ht(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},tr=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},nr=function(e,t){return function(n){return e(parseFloat(n))+(t||Un(n))}},rr=function(e,t,n){return cr(e,t,0,1,n)},ir=function(e,t,n){return Vn(n,function(n){return e[~~t(n)]})},ar=function e(t,n,r){var i=n-t;return ht(t)?ir(t,e(0,t.length),n):Vn(r,function(e){return(i+(e-t)%i)%i+t})},or=function e(t,n,r){var i=n-t,a=i*2;return ht(t)?ir(t,e(0,t.length-1),n):Vn(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},sr=function(e){return e.replace(gt,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(_t);return er(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},cr=function(e,t,n,r,i){var a=t-e,o=r-n;return Vn(i,function(t){return n+((t-e)/a*o||0)})},lr=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=ot(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(ht(t)&&!ht(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=dn(ht(t)?[]:{},t));if(!u){for(c in n)Ur.call(s,t,c,`get`,n[c]);a=function(e){return ui(e,s)||(o?t.p:t)}}}return Vn(r,a)},ur=function(e,t,n){var r=e.labels,i=Qe,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},dr=function(e,t,n){var r=e.vars,i=r[t],a=Ze,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&Vt.length&&rn(),o&&(Ze=o),l=s?i.apply(c,s):i.call(c),Ze=a,l},fr=function(e){return vn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Xe),e.progress()<1&&dr(e,`onInterrupt`),e},pr,mr=[],hr=function(e){if(e){if(e=!e.name&&e.default||e,ft()||e.headless){var t=e.name,n=st(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:It,render:ui,add:Ur,kill:fi,modifier:di,rawVars:0},a={targetTest:0,get:0,getSetter:oi,aliases:{},register:0};if(Dr(),e!==r){if(Wt[t])return;ln(r,ln(pn(e,i),a)),dn(r.prototype,dn(i,pn(e,a))),Wt[r.prop=t]=r,e.targetTest&&(qt.push(r),Bt[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}Ft(t,r),e.register&&e.register(ki,r,hi)}else mr.push(e)}},gr=255,_r={aqua:[0,gr,gr],lime:[0,gr,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gr],navy:[0,0,128],white:[gr,gr,gr],olive:[128,128,0],yellow:[gr,gr,0],orange:[gr,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gr,0,0],pink:[gr,192,203],cyan:[0,gr,gr],transparent:[gr,gr,gr,0]},vr=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*gr+.5|0},yr=function(e,t,n){var r=e?ct(e)?[e>>16,e>>8&gr,e&gr]:0:_r.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),_r[e])r=_r[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&gr,r&gr,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&gr,e&gr]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(vt),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=vr(s+1/3,i,a),r[1]=vr(s,i,a),r[2]=vr(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(yt),n&&r.length<4&&(r[3]=1),r}else r=e.match(vt)||_r.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/gr,a=r[1]/gr,o=r[2]/gr,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},br=function(e){var t=[],n=[],r=-1;return e.split(Sr).forEach(function(e){var i=e.match(bt)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},xr=function(e,t,n){var r=``,i=(e+r).match(Sr),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=yr(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=br(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Sr,`1`).split(bt),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Sr),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Sr=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in _r)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Cr=/hsl[a]?\(/,wr=function(e){var t=e.join(` `),n;if(Sr.lastIndex=0,Sr.test(t))return n=Cr.test(t),e[1]=xr(e[1],n),e[0]=xr(e[0],n,br(e[1])),!0},Tr,Er=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){jt&&(!Dt&&ft()&&(Et=Dt=window,Ot=Et.document||{},kt.gsap=ki,(Et.gsapVersions||(Et.gsapVersions=[])).push(ki.version),Mt(At||Et.GreenSockGlobals||!Et.gsap&&Et||{}),mr.forEach(hr)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Tr=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Tr=0,l=It},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Dr(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Dr=function(){return!Tr&&Er.wake()},H={},Or=/^[\d.\-M][\d.\-,\s]/,kr=/["']/g,Ar=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(kr,``).trim():+c,r=s.substr(o+1).trim();return t},jr=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Mr=function(e){var t=(e+``).split(`(`),n=H[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Ar(t[1])]:jr(e).split(`,`).map(sn)):H._CE&&Or.test(e)?H._CE(``,e):n},Nr=function(e){return function(t){return 1-e(1-t)}},Pr=function(e,t){return e&&(st(e)?e:H[e]||Mr(e))||t},Fr=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return Qt(e,function(e){for(var t in H[e]=kt[e]=i,H[a=e.toLowerCase()]=n,i)H[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=H[e+`.`+t]=i[t]}),i},Ir=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Lr=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/et*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*at((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Ir(s);return a=et/a,c.config=function(n,r){return e(t,n,r)},c},Rr=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Ir(r);return i.config=function(n){return e(t,n)},i};Qt(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Fr(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),H.Linear.easeNone=H.none=H.Linear.easeIn,Fr(`Elastic`,Lr(`in`),Lr(`out`),Lr()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Fr(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Fr(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Fr(`Circ`,function(e){return-(rt(1-e*e)-1)}),Fr(`Sine`,function(e){return e===1?1:-it(e*tt)+1}),Fr(`Back`,Rr(`in`),Rr(`out`),Rr()),H.SteppedEase=H.steps=kt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-$e;return function(e){return((r*Hn(0,a,e)|0)+i)*n}}},Je.ease=H[`quad.out`],Qt(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return Jt+=e+`,`+e+`Params,`});var zr=function(e,t){this.id=nt++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Zt,this.set=t?t.getSetter:oi},Br=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,In(this,+e.duration,1,1),this.data=e.data,Ze&&(this._ctx=Ze,Ze.data.push(this)),Tr||Er.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,In(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Dr(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Dn(this,e),!n._dp||n.parent||On(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&kn(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===$e||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),on(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Cn(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Cn(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?wn(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-$e?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Tn(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-$e?0:this._rts,this.totalTime(Hn(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),En(this),bn(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$e&&(this._tTime-=$e)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=en(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&kn(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(dt(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Tn(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=zt);var t=Xe;return Xe=e,an(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),Xe=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,Ln(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,Ln(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(zn(this,e),dt(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,dt(t)),this._dur||(this._zTime=-$e),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-$e:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$e,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-$e)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=st(e)?e:cn,a=function(){var e=t.then;t.then=null,n&&n(),st(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){fr(this)},e}();ln(Br.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$e,_prom:0,_ps:!1,_rts:1});var Vr=function(e){Ke(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=dt(t.sortChildren),Tt&&kn(t.parent||Tt,Ge(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&An(Ge(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return Bn(0,arguments,this),this},n.from=function(e,t,n){return Bn(1,arguments,this),this},n.fromTo=function(e,t,n,r){return Bn(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,mn(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new ti(e,t,zn(this,n),1),this},n.call=function(e,t,n){return kn(this,ti.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new ti(e,n,zn(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,mn(n).immediateRender=dt(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,mn(r).immediateRender=dt(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:en(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==Tt&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=en(o%f),o===i?(d=this._repeat,c=a):(_=en(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=wn(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:en(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&dr(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=Fn(this,en(r),en(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(dr(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-$e);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||Xe&&an(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-$e:$e);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-$e)._zTime=c>=r?1:-1,this._ts))return this._start=g,En(this),this.render(e,t,n);this._onUpdate&&!t&&dr(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g!==this._start&&Math.abs(h)===Math.abs(this._ts)||this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&vn(this,1),t||e<0&&!r||!o&&!r&&i||(dr(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(ct(t)||(t=zn(this,t,e)),!(e instanceof Br)){if(ht(e))return e.forEach(function(e){return n.add(e,t)}),this;if(ot(e))return this.addLabel(e,t);if(st(e))e=ti.delayedCall(0,e);else return this}return this===e?this:kn(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-Qe);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof ti?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return ot(e)?this.removeLabel(e):st(e)?this.killTweensOf(e):(e.parent===this&&_n(this,e),e===this._recent&&(this._recent=this._last),yn(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(Er.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=zn(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=ti.delayedCall(0,t||It,n);return r.data=`isPause`,this._hasPause=1,kn(this,r,zn(this,e))},n.removePause=function(e){var t=this._first;for(e=zn(this,e);t;)t._start===e&&t.data===`isPause`&&vn(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)Kr!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=Jn(e),i=this._first,a=ct(t),o;i;)i instanceof ti?nn(i._targets,r)&&(a?(!Kr||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t=t||{};var n=this,r=zn(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=ti.to(n,ln({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||$e,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&In(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,ln({startAt:{time:zn(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),ur(this,zn(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),ur(this,zn(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+$e)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=en(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return yn(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),yn(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=Qe,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,kn(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=en(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;In(n,n===Tt&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(Tt._ts&&(on(Tt,Tn(e,Tt)),Ut=Er.frame),Er.frame>=Kt){Kt+=qe.autoSleep||120;var t=Tt._first;if((!t||!t._ts)&&qe.autoSleep&&Er._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Er.sleep()}}},t}(Br);ln(Vr.prototype,{_lock:0,_hasPause:0,_forcing:0});var Hr=function(e,t,n,r,i,a,o){var s=new hi(this._pt,e,t,0,1,li,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=sr(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(xt)||[];u=xt.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?tn(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=xt.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(St.test(r)||g)&&(s.e=0),this._pt=s,s},Ur=function(e,t,n,r,i,a,o,s,c,l){st(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?st(u)?c?e[t.indexOf(`set`)||!st(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=st(u)?c?ii:ri:ni,p;if(ot(r)&&(~r.indexOf(`random(`)&&(r=sr(r)),r.charAt(1)===`=`&&(p=tn(d,r)+(Un(d)||0),(p||p===0)&&(r=p))),!l||d!==r||qr)return!isNaN(d*r)&&r!==``?(p=new hi(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?ci:si,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&Nt(t,r),Hr.call(this,e,t,d,r,f,s||qe.stringFilter,c))},Wr=function(e,t,n,r,i){if(st(e)&&(e=Qr(e,i,t,n,r)),!ut(e)||e.style&&e.nodeType||ht(e)||mt(e))return ot(e)?Qr(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=Qr(e[o],i,t,n,r);return a},Gr=function(e,t,n,r,i,a){var o,s,c,l;if(Wt[e]&&(o=new Wt[e]).init(i,o.rawVars?t[e]:Wr(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new hi(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==pr))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},Kr,qr,Jr=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!Ye,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,ee,N;if(!b||f&&a||(a=`none`),t._ease=Pr(a,Je.ease),t._rEase=x&&(Pr(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?Xt(g[0]).harness:0,ee=k&&i[k.prop],S=pn(i,Bt),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?Rt:Lt),h._lazy=0),o){if(vn(t._startAt=ti.set(g,ln({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&dt(c),startAt:null,delay:0,onUpdate:l&&function(){return dr(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Xe||!s&&!p)&&t._startAt.revert(Rt),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=ln({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&dt(c),immediateRender:s,stagger:0,parent:_},S),ee&&(w[k.prop]=ee),vn(t._startAt=ti.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Xe?t._startAt.revert(Rt):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,$e,$e);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&dt(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||Yt(g)[C]._gsap,t._ptLookup[C]=j={},Ht[O.id]&&Vt.length&&rn(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,ee||S,t,M,v)!==!1&&(t._pt=T=new hi(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||ee)for(w in S)Wt[w]&&(A=Gr(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=Ur.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(Kr=t,Tt.killTweensOf(E,j,t.globalTime(n)),N=!t.parent,Kr=0),t._pt&&c&&(Ht[O.id]=1)}D&&mi(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!N,f&&n<=0&&b.render(Qe,!0,!0)},Yr=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return qr=1,e.vars[t]=`+=0`,Jr(e,o),qr=0,s?Pt(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=$t(n)+Un(u.e)),u.b&&(u.b=l.s+Un(u.b))},Xr=function(e,t){var n=e[0]?Xt(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=dn({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},Zr=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(ht(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},Qr=function(e,t,n,r,i){return st(e)?e.call(t,n,r,i):ot(e)&&~e.indexOf(`random(`)?sr(e):e},$r=Jt+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,ei={};Qt($r+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return ei[e]=1});var ti=function(e){Ke(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:mn(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||Tt,g=(ht(t)||mt(t)?ct(t[0]):`length`in n)?[t]:Jn(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?Yt(g):Pt(`GSAP target `+t+` not found. https://gsap.com`,!qe.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||pt(s)||pt(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new Vr({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=Ge(a),_._start=0,u||pt(s)||pt(c)){if(b=g.length,C=u&&Zn(u),ut(u))for(x in u)~$r.indexOf(x)&&(w||(w={}),w[x]=u[x]);for(v=0;v<b;v++)y=pn(n,ei),y.stagger=0,T&&(y.easeReverse=T),w&&dn(y,w),S=g[v],y.duration=+Qr(s,Ge(a),v,S,g),y.delay=(+Qr(c,Ge(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=H.none;_.duration()?s=c=0:a.timeline=0}else if(f){mn(ln(_.vars.defaults,{ease:`none`})),_._ease=Pr(f.ease||n.ease||`none`);var E=0,D,O,k;if(ht(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||Zr(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!Ye&&(Kr=Ge(a),Tt.killTweensOf(g),Kr=0),kn(h,Ge(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===en(h._time)&&dt(l)&&Sn(Ge(a))&&h.data!==`nested`)&&(a._tTime=-$e,a.render(Math.max(0,-c)||0)),m&&An(Ge(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-$e&&!o?i:e<$e?0:e,c,l,u,d,f,p,m,h;if(!a)Pn(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=en(s%d),s===i?(u=this._repeat,c=a):(f=en(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=wn(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(en(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(jn(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(dr(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&xn(this,e,t,n),dr(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&dr(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&xn(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&vn(this,1),!t&&(!o||r)&&(s||r||p)&&(dr(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Tr||Er.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||Jr(this,a),o=this._ease(a/this._dur),Yr(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Dn(this,0),this.parent||gn(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?fr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Xe),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,Kr&&Kr.vars.overwrite!==!0)._first||fr(this),this.parent&&n!==this.timeline.totalDuration()&&In(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?Jn(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&hn(r,i))return t===`all`&&(this._pt=0),fr(this);for(s=this._op=this._op||[],t!==`all`&&(ot(t)&&(d={},Qt(t,function(e){return d[e]=1}),t=d),t=Xr(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&(`kill`in f.d&&f.d.kill(d)!==!0||_n(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&fr(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return Bn(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return Bn(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return Tt.killTweensOf(e,t,n)},t}(Br);ln(ti.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Qt(`staggerTo,staggerFrom,staggerFromTo`,function(e){ti[e]=function(){var t=new Vr,n=Gn.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var ni=function(e,t,n){return e[t]=n},ri=function(e,t,n){return e[t](n)},ii=function(e,t,n,r){return e[t](r.fp,n)},ai=function(e,t,n){return e.setAttribute(t,n)},oi=function(e,t){return st(e[t])?ri:lt(e[t])&&e.setAttribute?ai:ni},si=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ci=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},li=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},ui=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},di=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},fi=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?_n(this,t,`_pt`):t.dep||(n=1),t=r;return!n},pi=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},mi=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},hi=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||si,this.d=o||this,this.set=s||ni,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=pi,this.m=e,this.mt=n,this.tween=t},e}();Qt(Jt+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return Bt[e]=1}),kt.TweenMax=kt.TweenLite=ti,kt.TimelineLite=kt.TimelineMax=Vr,Tt=new Vr({sortChildren:!1,defaults:Je,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),qe.stringFilter=wr;var gi=[],_i={},vi=[],yi=0,bi=0,xi=function(e){return(_i[e]||vi).map(function(e){return e()})},Si=function(){var e=Date.now(),t=[];e-yi>2&&(xi(`matchMediaInit`),gi.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=Et.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),xi(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),yi=e,xi(`matchMedia`))},Ci=function(){function e(e,t){this.selector=t&&Yn(t),this.data=[],this._r=[],this.isReverted=!1,this.id=bi++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){st(e)&&(n=t,t=e,e=st);var r=this,i=function(){var e=Ze,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=Yn(n)),Ze=r,a=t.apply(r,arguments),st(a)&&r._r.push(a),Ze=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===st?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=Ze;Ze=null,e(this),Ze=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof ti&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof Vr?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof ti)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=gi.length;r--;)gi[r].id===this.id&&gi.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),wi=function(){function e(e){this.contexts=[],this.scope=e,Ze&&Ze.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){ut(e)||(e={matches:e});var r=new Ci(0,n||this.scope),i=r.conditions={},a,o,s;for(o in Ze&&!r.selector&&(r.selector=Ze.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=Et.matchMedia(e[o]),a&&(gi.indexOf(r)<0&&gi.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Si):a.addEventListener(`change`,Si)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Ti={registerPlugin:function(){[...arguments].forEach(function(e){return hr(e)})},timeline:function(e){return new Vr(e)},getTweensOf:function(e,t){return Tt.getTweensOf(e,t)},getProperty:function(e,t,n,r){ot(e)&&(e=Jn(e)[0]);var i=Xt(e||{}).get,a=n?cn:sn;return n===`native`&&(n=``),e&&(t?a((Wt[t]&&Wt[t].get||i)(e,t,n,r)):function(t,n,r){return a((Wt[t]&&Wt[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=Jn(e),e.length>1){var r=e.map(function(e){return ki.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Wt[t],o=Xt(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;pr._pt=0,r.init(e,n?t+n:t,pr,0,[e]),r.render(1,r),pr._pt&&ui(1,pr)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=ki.to(e,ln((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return Tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Pr(e.ease,Je.ease)),fn(Je,e||{})},config:function(e){return fn(qe,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!Wt[e]&&!kt[e]&&Pt(t+` effect requires `+e+` plugin.`)}),Gt[t]=function(e,t,r){return n(Jn(e),ln(t||{},i),r)},a&&(Vr.prototype[t]=function(e,n,r){return this.add(Gt[t](e,ut(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){H[e]=Pr(t)},parseEase:function(e,t){return arguments.length?Pr(e,t):H},getById:function(e){return Tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vr(e),r,i;for(n.smoothChildTiming=dt(e.smoothChildTiming),Tt.remove(n),n._dp=0,n._time=n._tTime=Tt._time,r=Tt._first;r;)i=r._next,(t||!(!r._dur&&r instanceof ti&&r.vars.onComplete===r._targets[0]))&&kn(n,r,r._start-r._delay),r=i;return kn(Tt,n,0),n},context:function(e,t){return e?new Ci(e,t):Ze},matchMedia:function(e){return new wi(e)},matchMediaRefresh:function(){return gi.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Si()},addEventListener:function(e,t){var n=_i[e]||(_i[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_i[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:ar,wrapYoyo:or,distribute:Zn,random:er,snap:$n,normalize:rr,getUnit:Un,clamp:Wn,splitColor:yr,toArray:Jn,selector:Yn,mapRange:cr,pipe:tr,unitize:nr,interpolate:lr,shuffle:Xn},install:Mt,effects:Gt,ticker:Er,updateRoot:Vr.updateRoot,plugins:Wt,globalTimeline:Tt,core:{PropTween:hi,globals:Ft,Tween:ti,Timeline:Vr,Animation:Br,getCache:Xt,_removeLinkedListItem:_n,reverting:function(){return Xe},context:function(e){return e&&Ze&&(Ze.data.push(e),e._ctx=Ze),Ze},suppressOverwrites:function(e){return Ye=e}}};Qt(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Ti[e]=ti[e]}),Er.add(Vr.updateRoot),pr=Ti.to({},{duration:0});var Ei=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Di=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],a&&(a=a.d)&&(a._pt&&(a=Ei(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Oi=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(ot(n)&&(r={},Qt(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Di(e,n)}}}},ki=Ti.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Xe?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Oi(`roundProps`,Qn),Oi(`modifiers`),Oi(`snap`,$n))||Ti;ti.version=Vr.version=ki.version=`3.15.0`,jt=1,ft()&&Dr(),H.Power0,H.Power1,H.Power2,H.Power3,H.Power4,H.Linear,H.Quad,H.Cubic,H.Quart,H.Quint,H.Strong,H.Elastic,H.Back,H.SteppedEase,H.Bounce,H.Sine,H.Expo,H.Circ;var Ai,ji,Mi,Ni,Pi,Fi,Ii,Li=function(){return typeof window<`u`},Ri={},zi=180/Math.PI,Bi=Math.PI/180,Vi=Math.atan2,Hi=1e8,Ui=/([A-Z])/g,Wi=/(left|right|width|margin|padding|x)/i,Gi=/[\s,\(]\S/,Ki={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},qi=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ji=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yi=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Xi=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Zi=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Qi=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},$i=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},ea=function(e,t,n){return e.style[t]=n},ta=function(e,t,n){return e.style.setProperty(t,n)},U=function(e,t,n){return e._gsap[t]=n},na=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ra=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},ia=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},aa=`transform`,oa=aa+`Origin`,sa=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in Ri&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=Ki[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Ea(i,e)}):this.tfm[t]=o.x?o[t]:Ea(i,t),t===oa&&(this.tfm.zOrigin=o.zOrigin);else return Ki.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(aa)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(oa,n,``)),t=aa}(a||n)&&this.props.push(t,n,a[t])},ca=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},la=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(Ui,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=Ii(),i&&i.isStart||n[aa]||(ca(n),r.zOrigin&&n[oa]&&(n[oa]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ua=function(e,t){var n={target:e,props:[],revert:la,save:sa};return e._gsap||ki.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},da,fa=function(e,t){var n=ji.createElementNS?ji.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):ji.createElement(e);return n&&n.style?n:ji.createElement(e)},pa=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(Ui,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,ha(n)||n,1)||``},ma=`O,Moz,ms,Ms,Webkit`.split(`,`),ha=function(e,t,n){var r=(t||Pi).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(ma[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?ma[i]:``)+e},ga=function(){Li()&&window.document&&(Ai=window,ji=Ai.document,Mi=ji.documentElement,Pi=fa(`div`)||{style:{}},fa(`div`),aa=ha(aa),oa=aa+`Origin`,Pi.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,da=!!ha(`perspective`),Ii=ki.core.reverting,Ni=1)},_a=function(e){var t=e.ownerSVGElement,n=fa(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),Mi.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),Mi.removeChild(n),i},va=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ya=function(e){var t,n;try{t=e.getBBox()}catch{t=_a(e),n=1}return t&&(t.width||t.height)||n||(t=_a(e)),t&&!t.width&&!t.x&&!t.y?{x:+va(e,[`x`,`cx`,`x1`])||0,y:+va(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},ba=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!ya(e))},xa=function(e,t){if(t){var n=e.style,r;t in Ri&&t!==oa&&(t=aa),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(Ui,`-$1`).toLowerCase())):n.removeAttribute(t)}},Sa=function(e,t,n,r,i,a){var o=new hi(e._pt,t,n,0,1,a?$i:Qi);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Ca={deg:1,rad:1,turn:1},wa={grid:1,flex:1},Ta=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Pi.style,c=Wi.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Ca[i]||Ca[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&ba(t),(p||o===`%`)&&(Ri[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],$t(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==ji&&h.appendChild||(h=ji.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Er.time&&!g.uncache)return $t(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:xa(t,n)}else(p||o===`%`)&&!wa[pa(h,`display`)]&&(s.position=pa(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Pi),m=Pi[u],h.removeChild(Pi),s.position=`absolute`;return c&&p&&(g=Xt(h),g.time=Er.time,g.width=h[u]),$t(f?m*a/d:m&&a?d/m*a:0)},Ea=function(e,t,n,r){var i;return Ni||ga(),t in Ki&&t!==`transform`&&(t=Ki[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),Ri[t]&&t!==`transform`?(i=Ra(e,r),i=t===`transformOrigin`?i.svg?i.origin:za(pa(e,oa))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=ja[t]&&ja[t](e,t,n)||pa(e,t)||Zt(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Ta(e,t,i,n)+n:i},Da=function(e,t,n,r){if(!n||n===`none`){var i=ha(t,e,1),a=i&&pa(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=pa(e,`borderTopColor`))}var o=new hi(this._pt,e.style,t,0,1,li),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=pa(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=pa(e,t)||r,m?e.style[t]=m:xa(e,t)),l=[n,r],wr(l),n=l[0],r=l[1],d=n.match(bt)||[],b=r.match(bt)||[],b.length){for(;u=bt.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=tn(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=bt.lastIndex-v.length,v||(v=v||qe.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=Ta(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?$i:Qi;return St.test(r)&&(o.e=0),this._pt=o,o},Oa={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},ka=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=Oa[n]||n,t[1]=Oa[r]||r,t.join(` `)},Aa=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],Ri[o]&&(s=1,o=o===`transformOrigin`?oa:aa),xa(n,o);s&&(xa(n,aa),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,Ra(n,1),a.uncache=1,ca(r)))}},ja={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new hi(e._pt,t,n,0,0,Aa);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Ma=[1,0,0,1,0,0],Na={},Pa=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},Fa=function(e){var t=pa(e,aa);return Pa(t)?Ma:t.substr(7).match(yt).map($t)},Ia=function(e,t){var n=e._gsap||Xt(e),r=e.style,i=Fa(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?Ma:i):(i===Ma&&!e.offsetParent&&e!==Mi&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,Mi.appendChild(e)),i=Fa(e),s?r.display=s:xa(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Mi.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},La=function(e,t,n,r,i,a){var o=e._gsap,s=i||Ia(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==Ma&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=ya(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[oa]=`0px 0px`,a&&(Sa(a,o,`xOrigin`,c,y),Sa(a,o,`yOrigin`,l,b),Sa(a,o,`xOffset`,u,o.xOffset),Sa(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},Ra=function(e,t){var n=e._gsap||new zr(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=pa(e,oa)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,ee,N,te,ne,re,ie,ae,oe;return n.svg=!!(e.getCTM&&ba(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[aa]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[aa]===`none`?``:s[aa])),r.scale=r.rotate=r.translate=`none`),S=Ia(e,n.svg),n.svg&&(n.uncache?(ee=e.getBBox(),c=n.xOrigin-ee.x+`px `+(n.yOrigin-ee.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),La(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==Ma&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?Vi(D,E)*zi:0,_=O||k?Vi(O,k)*zi+m:0,_&&(p*=Math.abs(Math.cos(_*Bi))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(oe=S[6],ie=S[7],te=S[8],ne=S[9],re=S[10],ae=S[11],l=S[12],u=S[13],d=S[14],C=Vi(oe,re),h=C*zi,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+te*T,ee=j*w+ne*T,N=oe*w+re*T,te=A*-T+te*w,ne=j*-T+ne*w,re=oe*-T+re*w,ae=ie*-T+ae*w,A=M,j=ee,oe=N),C=Vi(-O,re),g=C*zi,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-te*T,ee=D*w-ne*T,N=O*w-re*T,ae=k*T+ae*w,E=M,D=ee,O=N),C=Vi(D,E),m=C*zi,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,ee=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=ee),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=$t(Math.sqrt(E*E+D*D+O*O)),p=$t(Math.sqrt(j*j+oe*oe)),C=Vi(A,j),_=Math.abs(C)>2e-4?C*zi:0,y=ae?1/(ae<0?-ae:ae):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!Pa(pa(e,aa)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t=t||n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=$t(f),n.scaleY=$t(p),n.rotation=$t(m)+o,n.rotationX=$t(h)+o,n.rotationY=$t(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[oa]=za(c)),n.xOffset=n.yOffset=0,n.force3D=qe.force3D,n.renderTransform=n.svg?Ka:da?Ga:Va,n.uncache=0,n},za=function(e){return(e=e.split(` `))[0]+` `+e[1]},Ba=function(e,t,n){var r=Un(t);return $t(parseFloat(t)+parseFloat(Ta(e,`x`,n+`px`,r)))+r},Va=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,Ga(e,t)},Ha=`0deg`,Ua=`0px`,Wa=`) `,Ga=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==Ha||l!==Ha)){var x=parseFloat(l)*Bi,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*Bi,w=Math.cos(x),a=Ba(_,a,S*w*-v),o=Ba(_,o,-Math.sin(x)*-v),s=Ba(_,s,C*w*-v+v)}h!==Ua&&(y+=`perspective(`+h+Wa),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==Ua||o!==Ua||s!==Ua)&&(y+=s!==Ua||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+Wa),c!==Ha&&(y+=`rotate(`+c+Wa),l!==Ha&&(y+=`rotateY(`+l+Wa),u!==Ha&&(y+=`rotateX(`+u+Wa),(d!==Ha||f!==Ha)&&(y+=`skew(`+d+`, `+f+Wa),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+Wa),_.style[aa]=y||`translate(0, 0)`},Ka=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=Bi,c*=Bi,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=Bi,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=$t(b),x=$t(x),S=$t(S),C=$t(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Ta(f,`x`,a,`px`),y=Ta(f,`y`,o,`px`)),(p||m||h||g)&&(v=$t(v+p-(p*b+m*S)+h),y=$t(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=$t(v+r/100*w.width),y=$t(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[aa]=w)},qa=function(e,t,n,r,i){var a=360,o=ot(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?zi:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*Hi)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*Hi)%a-~~(s/a)*a)),e._pt=u=new hi(e._pt,t,n,r,s,Ji),u.e=c,u.u=`deg`,e._props.push(n),u},Ja=function(e,t){for(var n in t)e[n]=t[n];return e},Ya=function(e,t,n){var r=Ja({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[aa]=t,o=Ra(n,1),xa(n,aa),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[aa],a[aa]=t,o=Ra(n,1),a[aa]=c),Ri)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=Un(c),p=Un(l),u=f===p?parseFloat(c):Ta(n,s,c,p),d=parseFloat(l),e._pt=new hi(e._pt,o,s,u,d-u,qi),e._pt.u=p||0,e._props.push(s));Ja(o,r)};Qt(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});ja[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Ea(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var Xa={name:`css`,register:ga,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in Ni||ga(),this.styles=this.styles||ua(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(Wt[m]&&Gr(m,t,n,r,e,i)))){if(f=typeof l,p=ja[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=sr(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Sr.lastIndex=0,Sr.test(c)||(h=Un(c),g=Un(l),g?h!==g&&(c=Ta(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],ot(c)&&~c.indexOf(`random(`)&&(c=sr(c)),Un(c+``)||c===`auto`||(c+=qe.units[m]||Un(Ea(e,m))||``),(c+``).charAt(1)===`=`&&(c=Ea(e,m))):c=Ea(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in Ki&&(m===`autoAlpha`&&(d===1&&Ea(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),Sa(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=Ki[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in Ri,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=pa(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=pa(e,`perspective`),T?e.style.perspective=T:xa(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Ra(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new hi(this._pt,o,aa,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new hi(this._pt,b,`scaleY`,b.scaleY,(_?tn(b.scaleY,_+u):u)-b.scaleY||0,qi),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(oa,0,o[oa]),l=ka(l),b.svg?La(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&Sa(this,b,`zOrigin`,b.zOrigin,g),Sa(this,o,m,za(c),za(l)));continue}else if(m===`svgOrigin`){La(e,l,1,x,0,this);continue}else if(m in Na){qa(this,b,m,d,_?tn(d,_+l):l);continue}else if(m===`smoothOrigin`){Sa(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){Ya(this,l,e);continue}}else m in o||(m=ha(m)||m);if(v||(u||u===0)&&(d||d===0)&&!Gi.test(l)&&m in o)h=(c+``).substr((d+``).length),u||(u=0),g=Un(l)||(m in qe.units?qe.units[m]:h),h!==g&&(d=Ta(e,m,c,g)),this._pt=new hi(this._pt,v?b:o,m,d,(_?tn(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?Zi:qi),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=Xi):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=Yi);else if(m in o)Da.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){Nt(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&mi(this)},render:function(e,t){if(t.tween._time||!Ii())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ea,aliases:Ki,getSetter:function(e,t,n){var r=Ki[t];return r&&r.indexOf(`,`)<0&&(t=r),t in Ri&&t!==oa&&(e._gsap.x||Ea(e,`x`))?n&&Fi===n?t===`scale`?na:U:(Fi=n||{})&&(t===`scale`?ra:ia):e.style&&!lt(e.style[t])?ea:~t.indexOf(`-`)?ta:oi(e,t)},core:{_removeProperty:xa,_getMatrix:Ia}};ki.utils.checkPrefix=ha,ki.core.getStyleSaver=ua,(function(e,t,n,r){var i=Qt(e+`,`+t+`,`+n,function(e){Ri[e]=1});Qt(t,function(e){qe.units[e]=`deg`,Na[e]=1}),Ki[i[13]]=e+`,`+t,Qt(r,function(e){var t=e.split(`:`);Ki[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),Qt(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){qe.units[e]=`px`}),ki.registerPlugin(Xa);var Za=ki.registerPlugin(Xa)||ki;Za.core.Tween;function Qa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $a(e,t,n){return t&&Qa(e.prototype,t),n&&Qa(e,n),e}var eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo=function(){return eo||typeof window<`u`&&(eo=window.gsap)&&eo.registerPlugin&&eo},ho=1,go=[],W=[],_o=[],vo=Date.now,yo=function(e,t){return t},bo=function(){var e=co.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,W),r.push.apply(r,_o),W=n,_o=r,yo=function(e,n){return t[e](n)}},xo=function(e,t){return~_o.indexOf(e)&&_o[_o.indexOf(e)+1][t]},So=function(e){return!!~lo.indexOf(e)},Co=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},wo=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},To=`scrollLeft`,Eo=`scrollTop`,Do=function(){return uo&&uo.isPressed||W.cache++},Oo=function(e,t){var n=function n(r){if(r||r===0){ho&&(no.history.scrollRestoration=`manual`);var i=uo&&uo.isPressed;r=n.v=Math.round(r)||(uo&&uo.iOS?1:0),e(r),n.cacheID=W.cache,i&&yo(`ss`,r)}else(t||W.cache!==n.cacheID||yo(`ref`))&&(n.cacheID=W.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},ko={s:To,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:Oo(function(e){return arguments.length?no.scrollTo(e,Ao.sc()):no.pageXOffset||ro[To]||io[To]||ao[To]||0})},Ao={s:Eo,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:ko,sc:Oo(function(e){return arguments.length?no.scrollTo(ko.sc(),e):no.pageYOffset||ro[Eo]||io[Eo]||ao[Eo]||0})},jo=function(e,t){return(t&&t._ctx&&t._ctx.selector||eo.utils.toArray)(e)[0]||(typeof e==`string`&&eo.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},Mo=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},No=function(e,t){var n=t.s,r=t.sc;So(e)&&(e=ro.scrollingElement||io);var i=W.indexOf(e),a=r===Ao.sc?1:2;!~i&&(i=W.push(e)-1),W[i+a]||Co(e,`scroll`,Do);var o=W[i+a],s=o||(W[i+a]=Oo(xo(e,n),!0)||(So(e)?r:Oo(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=eo.getProperty(e,`scrollBehavior`)===`smooth`),s},Po=function(e,t,n){var r=e,i=e,a=vo(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=vo();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=vo();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},Fo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Io=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Lo=function(){co=eo.core.globals().ScrollTrigger,co&&co.core&&bo()},Ro=function(e){return eo=e||mo(),!to&&eo&&typeof document<`u`&&document.body&&(no=window,ro=document,io=ro.documentElement,ao=ro.body,lo=[no,ro,io,ao],eo.utils.clamp,po=eo.core.context||function(){},so=`onpointerenter`in ao?`pointer`:`mouse`,oo=G.isTouch=no.matchMedia&&no.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in no||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fo=G.eventTypes=(`ontouchstart`in io?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in io?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return ho=0},500),to=1),co||Lo(),to};ko.op=Ao,W.cache=0;var G=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){to||Ro(eo)||console.warn(`Please gsap.registerPlugin(Observer)`),co||Lo();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,ee=e.onGestureEnd,N=e.onWheel,te=e.onEnable,ne=e.onDisable,re=e.onClick,ie=e.scrollSpeed,ae=e.capture,oe=e.allowClicks,se=e.lockAxis,ce=e.onLockAxis;this.target=i=jo(i)||io,this.vars=e,u&&(u=eo.utils.toArray(u)),t=t||1e-9,n=n||0,d=d||1,ie=ie||1,r=r||`wheel,touch,pointer`,o=o!==!1,a||(a=parseFloat(no.getComputedStyle(ao).lineHeight)||22);var le,ue,de,fe,P,pe,me,F=this,I=0,L=0,he=e.passive||!s&&e.passive!==!1,ge=No(i,ko),_e=No(i,Ao),ve=ge(),ye=_e(),R=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&fo[0]===`pointerdown`,be=So(i),z=i.ownerDocument||ro,xe=[0,0,0],B=[0,0,0],Se=0,Ce=function(){return Se=vo()},we=function(e,t){return(F.event=e)&&u&&Mo(e.target,u)||t&&R&&e.pointerType!==`touch`||A&&A(e,t)},Te=function(){F._vx.reset(),F._vy.reset(),ue.pause(),c&&c(F)},Ee=function(){var e=F.deltaX=Io(xe),n=F.deltaY=Io(B),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(F,e,n,xe,B),r&&(v&&F.deltaX>0&&v(F),y&&F.deltaX<0&&y(F),S&&S(F),T&&F.deltaX<0!=I<0&&T(F),I=F.deltaX,xe[0]=xe[1]=xe[2]=0),i&&(x&&F.deltaY>0&&x(F),b&&F.deltaY<0&&b(F),C&&C(F),E&&F.deltaY<0!=L<0&&E(F),L=F.deltaY,B[0]=B[1]=B[2]=0),(fe||de)&&(k&&k(F),de&&(p&&de===1&&p(F),h&&h(F),de=0),fe=!1),pe&&!(pe=!1)&&ce&&ce(F),P&&(N(F),P=!1),le=0},De=function(e,t,n){xe[n]+=e,B[n]+=t,F._vx.update(e),F._vy.update(t),o?le||(le=requestAnimationFrame(Ee)):Ee()},Oe=function(e,t){se&&!me&&(F.axis=me=Math.abs(e)>Math.abs(t)?`x`:`y`,pe=!0),me!==`y`&&(xe[2]+=e,F._vx.update(e,!0)),me!==`x`&&(B[2]+=t,F._vy.update(t,!0)),o?le||(le=requestAnimationFrame(Ee)):Ee()},ke=function(e){if(!we(e,1)){e=Fo(e,s);var t=e.clientX,r=e.clientY,i=t-F.x,a=r-F.y,o=F.isDragging;F.x=t,F.y=r,(o||(i||a)&&(Math.abs(F.startX-t)>=n||Math.abs(F.startY-r)>=n))&&(de||(de=o?2:1),o||(F.isDragging=!0),Oe(i,a))}},Ae=F.onPress=function(e){we(e,1)||e&&e.button||(F.axis=me=null,ue.pause(),F.isPressed=!0,e=Fo(e),I=L=0,F.startX=F.x=e.clientX,F.startY=F.y=e.clientY,F._vx.reset(),F._vy.reset(),Co(j?i:z,fo[1],ke,he,!0),F.deltaX=F.deltaY=0,g&&g(F))},je=F.onRelease=function(e){if(!we(e,1)){wo(j?i:z,fo[1],ke,!0);var t=!isNaN(F.y-F.startY),n=F.isDragging,r=n&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),a=Fo(e);!r&&t&&(F._vx.reset(),F._vy.reset(),s&&oe&&eo.delayedCall(.08,function(){if(vo()-Se>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(z.createEvent){var t=z.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,no,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,c&&n&&!j&&ue.restart(!0),de&&Ee(),m&&n&&m(F),_&&_(F,r)}},V=function(e){return e.touches&&e.touches.length>1&&(F.isGesturing=!0)&&M(e,F.isDragging)},Me=function(){return(F.isGesturing=!1)||ee(F)},Ne=function(e){if(!we(e)){var t=ge(),n=_e();De((t-ve)*ie,(n-ye)*ie,1),ve=t,ye=n,c&&ue.restart(!0)}},Pe=function(e){if(!we(e)){e=Fo(e,s),N&&(P=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?no.innerHeight:1)*d;De(e.deltaX*t,e.deltaY*t,0),c&&!j&&ue.restart(!0)}},Fe=function(e){if(!we(e)){var t=e.clientX,n=e.clientY,r=t-F.x,i=n-F.y;F.x=t,F.y=n,fe=!0,c&&ue.restart(!0),(r||i)&&Oe(r,i)}},Ie=function(e){F.event=e,D(F)},Le=function(e){F.event=e,O(F)},Re=function(e){return we(e)||Fo(e,s)&&re(F)};ue=F._dc=eo.delayedCall(l||.25,Te).pause(),F.deltaX=F.deltaY=0,F._vx=Po(0,50,!0),F._vy=Po(0,50,!0),F.scrollX=ge,F.scrollY=_e,F.isDragging=F.isGesturing=F.isPressed=!1,po(this),F.enable=function(e){return F.isEnabled||(Co(be?z:i,`scroll`,Do),r.indexOf(`scroll`)>=0&&Co(be?z:i,`scroll`,Ne,he,ae),r.indexOf(`wheel`)>=0&&Co(i,`wheel`,Pe,he,ae),(r.indexOf(`touch`)>=0&&oo||r.indexOf(`pointer`)>=0)&&(Co(i,fo[0],Ae,he,ae),Co(z,fo[2],je),Co(z,fo[3],je),oe&&Co(i,`click`,Ce,!0,!0),re&&Co(i,`click`,Re),M&&Co(z,`gesturestart`,V),ee&&Co(z,`gestureend`,Me),D&&Co(i,so+`enter`,Ie),O&&Co(i,so+`leave`,Le),k&&Co(i,so+`move`,Fe)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=fe=de=!1,F._vx.reset(),F._vy.reset(),ve=ge(),ye=_e(),e&&e.type&&Ae(e),te&&te(F)),F},F.disable=function(){F.isEnabled&&(go.filter(function(e){return e!==F&&So(e.target)}).length||wo(be?z:i,`scroll`,Do),F.isPressed&&(F._vx.reset(),F._vy.reset(),wo(j?i:z,fo[1],ke,!0)),wo(be?z:i,`scroll`,Ne,ae),wo(i,`wheel`,Pe,ae),wo(i,fo[0],Ae,ae),wo(z,fo[2],je),wo(z,fo[3],je),wo(i,`click`,Ce,!0),wo(i,`click`,Re),wo(z,`gesturestart`,V),wo(z,`gestureend`,Me),wo(i,so+`enter`,Ie),wo(i,so+`leave`,Le),wo(i,so+`move`,Fe),F.isEnabled=F.isPressed=F.isDragging=!1,ne&&ne(F))},F.kill=F.revert=function(){F.disable();var e=go.indexOf(F);e>=0&&go.splice(e,1),uo===F&&(uo=0)},go.push(F),j&&So(i)&&(uo=F),F.enable(f)},$a(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}();G.version=`3.15.0`,G.create=function(e){return new G(e)},G.register=Ro,G.getAll=function(){return go.slice()},G.getById=function(e){return go.filter(function(t){return t.vars.id===e})[0]},mo()&&eo.registerPlugin(G);var K,zo,q,J,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs=1,_s=Date.now,vs=_s(),ys=0,bs=0,xs=function(e,t,n){var r=Ls(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},Ss=function(e,t){return t&&(!Ls(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},Cs=function e(){return bs&&requestAnimationFrame(e)},ws=function(){return Yo=1},Ts=function(){return Yo=0},Es=function(e){return e},Ds=function(e){return Math.round(e*1e5)/1e5||0},Os=function(){return typeof window<`u`},ks=function(){return K||Os()&&(K=window.gsap)&&K.registerPlugin&&K},As=function(e){return!!~Ho.indexOf(e)},js=function(e){return(e===`Height`?fs:q[`inner`+e])||Bo[`client`+e]||Vo[`client`+e]},Ms=function(e){return xo(e,`getBoundingClientRect`)||(As(e)?function(){return il.width=q.innerWidth,il.height=fs,il}:function(){return cc(e)})},Ns=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=xo(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?js(i):e[`client`+i])||0}},Ps=function(e,t){return!t||~_o.indexOf(e)?Ms(e):function(){return il}},Fs=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=xo(e,n))?a()-Ms(e)()[i]:As(e)?(Bo[n]||Vo[n])-js(r):e[n]-e[`offset`+r])},Is=function(e,t){for(var n=0;n<es.length;n+=3)(!t||~t.indexOf(es[n+1]))&&e(es[n],es[n+1],es[n+2])},Ls=function(e){return typeof e==`string`},Rs=function(e){return typeof e==`function`},zs=function(e){return typeof e==`number`},Bs=function(e){return typeof e==`object`},Vs=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},Hs=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},Us=Math.abs,Ws=`left`,Gs=`top`,Ks=`right`,qs=`bottom`,Js=`width`,Ys=`height`,Xs=`Right`,Zs=`Left`,Qs=`Top`,$s=`Bottom`,ec=`padding`,tc=`margin`,nc=`Width`,rc=`Height`,ic=`px`,ac=function(e){return q.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},oc=function(e){var t=ac(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},sc=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cc=function(e,t){var n=t&&ac(e)[Xo]!==`matrix(1, 0, 0, 1, 0, 0)`&&K.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},lc=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},uc=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},dc=function(e){return function(t){return K.utils.snap(uc(e),t)}},fc=function(e){var t=K.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},pc=function(e){return function(t,n){return fc(uc(e))(t,n.direction)}},mc=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},hc=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},gc=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},_c=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},vc={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},yc={toggleActions:`play`,anticipatePin:0},bc={top:0,left:0,center:.5,bottom:1,right:1},xc=function(e,t){if(Ls(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in bc?bc[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Sc=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=J.createElement(`div`),m=As(n)||xo(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?Vo:n.tagName===`IFRAME`?n.contentDocument.body:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===Ao?Ks:qs)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],Cc(p,0,r,_),p},Cc=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+nc]=1,i[`border`+o+nc]=0,i[n.p]=t+`px`,K.set(e,i)},Y=[],wc={},Tc,Ec=function(){return _s()-ys>34&&(Tc||(Tc=requestAnimationFrame(Yc)))},Dc=function(){(!is||!is.isPressed||is.startX>Vo.clientWidth)&&(W.cache++,is?Tc||(Tc=requestAnimationFrame(Yc)):Yc(),ys||Nc(`scrollStart`),ys=_s())},Oc=function(){ss=q.innerWidth,os=q.innerHeight},kc=function(e){W.cache++,(e===!0||!Jo&&!rs&&!J.fullscreenElement&&!J.webkitFullscreenElement&&(!as||ss!==q.innerWidth||Math.abs(q.innerHeight-os)>q.innerHeight*.25))&&Uo.restart(!0)},Ac={},jc=[],Mc=function e(){return gc(X,`scrollEnd`,e)||Gc(!0)},Nc=function(e){return Ac[e]&&Ac[e].map(function(e){return e()})||jc},Pc=[],Fc=function(e){for(var t=0;t<Pc.length;t+=5)(!e||Pc[t+4]&&Pc[t+4].query===e)&&(Pc[t].style.cssText=Pc[t+1],Pc[t].getBBox&&Pc[t].setAttribute(`transform`,Pc[t+2]||``),Pc[t+3].uncache=1)},Ic=function(){return W.forEach(function(e){return Rs(e)&&++e.cacheID&&(e.rec=e())})},Lc=function(e,t){var n;for(Zo=0;Zo<Y.length;Zo++)n=Y[Zo],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ps=!0,t&&Fc(t),t||Nc(`revert`)},Rc=function(e,t){W.cache++,(t||!zc)&&W.forEach(function(e){return Rs(e)&&e.cacheID++&&(e.rec=0)}),Ls(e)&&(q.history.scrollRestoration=us=e)},zc,Bc=0,Vc,Hc=function(){if(Vc!==Bc){var e=Vc=Bc;requestAnimationFrame(function(){return e===Bc&&Gc(!0)})}},Uc=function(){Vo.appendChild(ds),fs=!is&&ds.offsetHeight||q.innerHeight,Vo.removeChild(ds)},Wc=function(e){return Wo(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},Gc=function(e,t){if(Bo=J.documentElement,Vo=J.body,Ho=[q,J,Bo,Vo],ys&&!e&&!ps)hc(X,`scrollEnd`,Mc);else{Uc(),zc=X.isRefreshing=!0,ps||Ic();var n=Nc(`refreshInit`);ts&&X.sort(),t||Lc(),W.forEach(function(e){Rs(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),Y.slice(0).forEach(function(e){return e.refresh()}),ps=!1,Y.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),ms=1,Wc(!0),Y.forEach(function(e){var t=Fs(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),Wc(!1),ms=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),W.forEach(function(e){Rs(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),Rc(us,1),Uo.pause(),Bc++,zc=2,Yc(2),Y.forEach(function(e){return Rs(e.vars.onRefresh)&&e.vars.onRefresh(e)}),zc=X.isRefreshing=!1,Nc(`refresh`)}},Kc=0,qc=1,Jc,Yc=function(e){if(e===2||!zc&&!ps){X.isUpdating=!0,Jc&&Jc.update(0);var t=Y.length,n=_s(),r=n-vs>=50,i=t&&Y[0].scroll();if(qc=Kc>i?-1:1,zc||(Kc=i),r&&(ys&&!Yo&&n-ys>200&&(ys=0,Nc(`scrollEnd`)),Ko=vs,vs=n),qc<0){for(Zo=t;Zo-->0;)Y[Zo]&&Y[Zo].update(0,r);qc=1}else for(Zo=0;Zo<t;Zo++)Y[Zo]&&Y[Zo].update(0,r);X.isUpdating=!1}Tc=0},Xc=[Ws,Gs,qs,Ks,tc+$s,tc+Xs,tc+Qs,tc+Zs,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],Zc=Xc.concat([Js,Ys,`boxSizing`,`max`+nc,`max`+rc,`position`,tc,ec,ec+Qs,ec+Xs,ec+$s,ec+Zs]),Qc=function(e,t,n){tl(n);var r=e._gsap;if(r.spacerIsNative)tl(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},$c=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=Xc.length,a=t.style,o=e.style,s;i--;)s=Xc[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[qs]=o[Ks]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[Js]=lc(e,ko)+ic,a[Ys]=lc(e,Ao)+ic,a[ec]=o[tc]=o[Gs]=o[Ws]=`0`,tl(r),o[Js]=o[`max`+nc]=n[Js],o[Ys]=o[`max`+rc]=n[Ys],o[ec]=n[ec],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},el=/([A-Z])/g,tl=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||K.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(el,`-$1`).toLowerCase())}},nl=function(e){for(var t=Zc.length,n=e.style,r=[],i=0;i<t;i++)r.push(Zc[i],n[Zc[i]]);return r.t=e,r},rl=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},il={left:0,top:0},al=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){Rs(e)&&(e=e(s)),Ls(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?xc(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),zs(e))f&&(e=K.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&Cc(o,n,r,!0);else{Rs(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=jo(t,s)||Vo,y=cc(_)||{},y&&(y.left||y.top)||ac(_).display!==`none`||(S=_.style.display,_.style.display=`block`,y=cc(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=xc(v[0],y[r.d]),x=xc(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&Cc(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,Cc(a,C,r,w&&C>20||!w&&(u?Math.max(Vo[h],Bo[h]):a.parentNode[h])<=C+1),u&&(c=cc(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+ic))}return f&&_&&(h=cc(_),f.seek(d),g=cc(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},ol=/(webkit|moz|length|cssText|inset)/i,sl=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===Vo){for(a in e._stOrig=i.cssText,o=ac(e),o)!+a&&!ol.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;K.core.getCache(e).uncache=1,t.appendChild(e)}},cl=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},ll=function(e,t,n){var r={};r[t.p]=`+=`+n,K.set(e,r)},ul=function(e,t){var n=No(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o=o||n();var f=cl(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s=s||i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){W.cache++,t.tween&&Yc()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=K.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},hc(e,`wheel`,n.wheelHandler),X.isTouch&&hc(e,`touchmove`,n.wheelHandler),i},X=function(){function e(t,n){zo||e.register(K)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),ls(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!bs)this.update=this.refresh=this.kill=Es;else{t=sc(Ls(t)||zs(t)||t.nodeType?{trigger:t}:t,yc);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?ko:Ao,T=!l&&l!==0,E=jo(t.scroller||q),D=K.core.getCache(E),O=As(E),k=(`pinType`in t?t.pinType:xo(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:yc.markers,ee=O?0:parseFloat(ac(E)[`border`+w.p2+nc])||0,N=this,te=t.onRefreshInit&&function(){return t.onRefreshInit(N)},ne=Ns(E,O,w),re=Ps(E,O),ie=0,ae=0,oe=0,se=No(E,w),ce,le,ue,de,fe,P,pe,me,F,I,L,he,ge,_e,ve,ye,R,be,z,xe,B,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,V,Me,Ne,Pe,Fe,Ie,Le,Re;if(N._startClamp=N._endClamp=!1,N._dir=w,m*=45,N.scroller=E,N.scroll=x?x.time.bind(x):se,de=se(),N.vars=t,n=n||t.animation,`refreshPriority`in t&&(ts=1,t.refreshPriority===-9999&&(Jc=N)),D.tweenScroll=D.tweenScroll||{top:ul(E,Ao),left:ul(E,ko)},N.tweenTo=ce=D.tweenScroll[w.p],N.scrubDuration=function(e){Me=zs(e)&&e,Me?V?V.duration(e):V=K.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:Me,paused:!0,onComplete:function(){return h&&h(N)}}):(V&&V.progress(1).kill(),V=0)},n&&(n.vars.lazy=!1,n._initted&&!N.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),N.animation=n.pause(),n.scrollTrigger=N,N.scrubDuration(l),Ae=0,o||(o=n.vars.id)),v&&((!Bs(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in Vo.style&&K.set(O?[Vo,Bo]:E,{scrollBehavior:`auto`}),W.forEach(function(e){return Rs(e)&&e.target===(O?J.scrollingElement||Bo:E)&&(e.smooth=!1)}),ue=Rs(v.snapTo)?v.snapTo:v.snapTo===`labels`?dc(n):v.snapTo===`labelsDirectional`?pc(n):v.directional===!1?K.utils.snap(v.snapTo):function(e,t){return fc(v.snapTo)(e,_s()-ae<500?0:t.direction)},Ne=v.duration||{min:.1,max:2},Ne=Bs(Ne)?Go(Ne.min,Ne.max):Go(Ne,Ne),Pe=K.delayedCall(v.delay||Me/2||.1,function(){var e=se(),t=_s()-ae<500,r=ce.tween;if((t||Math.abs(N.getVelocity())<10)&&!r&&!Yo&&ie!==e){var i=(e-P)/_e,a=n&&!T?n.totalProgress():i,o=t?0:(a-je)/(_s()-Ko)*1e3||0,s=K.utils.clamp(-i,1-i,Us(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=ue(c,N),zs(l)||(l=c),u=Math.max(0,Math.round(P+l*_e)),e<=pe&&e>=P&&u!==e){if(r&&!r._initted&&r.data<=Us(u-e))return;v.inertia===!1&&(s=l-i),ce(u,{duration:Ne(Us(Math.max(Us(c-a),Us(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:Us(u-e),onInterrupt:function(){return Pe.restart(!0)&&p&&Hs(N,p)},onComplete:function(){N.update(),ie=se(),n&&!T&&(V?V.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),Ae=je=n&&!T?n.totalProgress():N.progress,g&&g(N),m&&Hs(N,m)}},e,s*_e,u-e-s*_e),f&&Hs(N,f,ce.tween)}}else N.isActive&&ie!==e&&Pe.restart(!0)}).pause()),o&&(wc[o]=N),u=N.trigger=jo(u||d!==!0&&d),Re=u&&u._gsap&&u._gsap.stRevert,Re&&(Re=Re(N)),d=d===!0?u:jo(d),Ls(a)&&(a={targets:u,className:a}),d&&(f===!1||f===tc||(f=!f&&d.parentNode&&d.parentNode.style&&ac(d.parentNode).display===`flex`?!1:ec),N.pin=d,le=K.core.getCache(d),le.spacer?ve=le.pinState:(b&&(b=jo(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),le.spacerIsNative=!!b,b&&(le.spacerState=nl(b))),le.spacer=be=b||J.createElement(`div`),be.classList.add(`pin-spacer`),o&&be.classList.add(`pin-spacer-`+o),le.pinState=ve=nl(d)),t.force3D!==!1&&K.set(d,{force3D:!0}),N.spacer=be=le.spacer,ke=ac(d),we=ke[f+w.os2],xe=K.getProperty(d),B=K.quickSetter(d,w.a,ic),$c(d,be,ke),R=nl(d)),M){he=Bs(M)?sc(M,vc):vc,I=Sc(`scroller-start`,o,E,w,he,0),L=Sc(`scroller-end`,o,E,w,he,0,I),z=I[`offset`+w.op.d2];var ze=jo(xo(E,`content`)||E);me=this.markerStart=Sc(`start`,o,ze,w,he,z,0,x),F=this.markerEnd=Sc(`end`,o,ze,w,he,z,0,x),x&&(Le=K.quickSetter([me,F],w.a,ic)),!k&&!(_o.length&&xo(E,`fixedMarkers`)===!0)&&(oc(O?Vo:E),K.set([I,L],{force3D:!0}),Ee=K.quickSetter(I,w.a,ic),Oe=K.quickSetter(L,w.a,ic))}if(x){var Be=x.vars.onUpdate,Ve=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){N.update(0,0,1),Be&&Be.apply(x,Ve||[])})}if(N.previous=function(){return Y[Y.indexOf(N)-1]},N.next=function(){return Y[Y.indexOf(N)+1]},N.revert=function(e,t){if(!t)return N.kill(!0);var r=e!==!1||!N.enabled,i=Jo;r!==N.isReverted&&(r&&(Fe=Math.max(se(),N.scroll.rec||0),oe=N.progress,Ie=n&&n.progress()),me&&[me,F,I,L].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(Jo=N,N.update(r)),!d||y&&N.isActive||(r?Qc(d,be,ve):$c(d,be,ac(d),Te)),r||N.update(r),Jo=i,N.isReverted=r)},N.refresh=function(r,i,a,o){if(!Jo&&N.enabled||i){if(d&&r&&ys)hc(e,`scrollEnd`,Mc);else{!zc&&te&&te(N),Jo=N,ce.tween&&!a&&(ce.tween.kill(),ce.tween=0),V&&V.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var s=ne(),l=re(),m=x?x.duration():Fs(E,w),h=_e<=.01||!_e,g=0,_=o||0,v=Bs(a)?a.end:t.end,b=t.endTrigger||u,S=Bs(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=N.pinnedContainer=t.pinnedContainer&&jo(t.pinnedContainer,N),D=u&&Math.max(0,Y.indexOf(N))||0,A=D,j,le,ue,he,z,B,we,Ee,Oe,ke,Ae,je,Me;for(M&&Bs(a)&&(je=K.getProperty(I,w.p),Me=K.getProperty(L,w.p));A-->0;)B=Y[A],B.end||B.refresh(0,1)||(Jo=N),we=B.pin,we&&(we===u||we===d||we===C)&&!B.isReverted&&(ke||(ke=[]),ke.unshift(B),B.revert(!0,!0)),B!==Y[A]&&(D--,A--);for(Rs(S)&&(S=S(N)),S=xs(S,`start`,N),P=al(S,u,s,w,se(),me,I,N,l,ee,k,m,x,N._startClamp&&`_startClamp`)||(d?-.001:0),Rs(v)&&(v=v(N)),Ls(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(Ls(S)?S.split(` `)[0]:``)+v:(g=xc(v.substr(2),s),v=Ls(S)?S:(x?K.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,P):P)+g,b=u)),v=xs(v,`end`,N),pe=Math.max(P,al(v||(b?`100% 0`:m),b,s,w,se()+g,F,L,N,l,ee,k,m,x,N._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)B=Y[A]||{},we=B.pin,we&&B.start-B._pinPush<=P&&!x&&B.end>0&&(j=B.end-(N._startClamp?Math.max(0,B.start):B.start),(we===u&&B.start-B._pinPush<P||we===C)&&isNaN(S)&&(g+=j*(1-B.progress)),we===d&&(_+=j));if(P+=g,pe+=g,N._startClamp&&(N._startClamp+=g),N._endClamp&&!zc&&(N._endClamp=pe||-.001,pe=Math.min(pe,Fs(E,w))),_e=pe-P||(P-=.01)&&.001,h&&(oe=K.utils.clamp(0,1,K.utils.normalize(P,pe,Fe))),N._pinPush=_,me&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+se()),K.set([me,F],j)),d&&!(ms&&N.end>=Fs(E,w)))j=ac(d),he=w===Ao,ue=se(),Se=parseFloat(xe(w.a))+_,!m&&pe>1&&(Ae=(O?J.scrollingElement||Bo:E).style,Ae={style:Ae,value:Ae[`overflow`+w.a.toUpperCase()]},O&&ac(Vo)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(Ae.style[`overflow`+w.a.toUpperCase()]=`scroll`)),$c(d,be,j),R=nl(d),le=cc(d,!0),Ee=k&&No(E,he?ko:Ao)(),f?(Te=[f+w.os2,_e+_+ic],Te.t=be,A=f===ec?lc(d,w)+_e+_:0,A&&(Te.push(w.d,A+ic),be.style.flexBasis!==`auto`&&(be.style.flexBasis=A+ic)),tl(Te),C&&Y.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&se(Fe)):(A=lc(d,w),A&&be.style.flexBasis!==`auto`&&(be.style.flexBasis=A+ic)),k&&(z={top:le.top+(he?ue-P:Ee)+ic,left:le.left+(he?Ee:ue-P)+ic,boxSizing:`border-box`,position:`fixed`},z[Js]=z[`max`+nc]=Math.ceil(le.width)+ic,z[Ys]=z[`max`+rc]=Math.ceil(le.height)+ic,z[tc]=z[tc+Qs]=z[tc+Xs]=z[tc+$s]=z[tc+Zs]=`0`,z[ec]=j[ec],z[ec+Qs]=j[ec+Qs],z[ec+Xs]=j[ec+Xs],z[ec+$s]=j[ec+$s],z[ec+Zs]=j[ec+Zs],ye=rl(ve,z,y),zc&&se(0)),n?(Oe=n._initted,ns(1),n.render(n.duration(),!0,!0),Ce=xe(w.a)-Se+_e+_,De=Math.abs(_e-Ce)>1,k&&De&&ye.splice(ye.length-2,2),n.render(0,!0,!0),Oe||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),ns(0)):Ce=_e,Ae&&(Ae.value?Ae.style[`overflow`+w.a.toUpperCase()]=Ae.value:Ae.style.removeProperty(`overflow-`+w.a));else if(u&&se()&&!x)for(le=u.parentNode;le&&le!==Vo;)le._pinOffset&&(P-=le._pinOffset,pe-=le._pinOffset),le=le.parentNode;ke&&ke.forEach(function(e){return e.revert(!1,!0)}),N.start=P,N.end=pe,de=fe=zc?Fe:se(),!x&&!zc&&(de<Fe&&se(Fe),N.scroll.rec=0),N.revert(!1,!0),ae=_s(),Pe&&(ie=-1,Pe.restart(!0)),Jo=0,n&&T&&(n._initted||Ie)&&n.progress()!==Ie&&n.progress(Ie||0,!0).render(n.time(),!0,!0),(h||oe!==N.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||oe||n.vars.immediateRender!==!1)&&n.totalProgress(x&&P<-.001&&!oe?K.utils.normalize(P,pe,0):oe,!0),N.progress=h||(de-P)/_e===oe?0:oe),d&&f&&(be._pinOffset=Math.round(N.progress*Ce)),V&&V.invalidate(),isNaN(je)||(je-=K.getProperty(I,w.p),Me-=K.getProperty(L,w.p),ll(I,w,je),ll(me,w,je-(o||0)),ll(L,w,Me),ll(F,w,Me-(o||0))),h&&!zc&&N.update(),c&&!zc&&!ge&&(ge=!0,c(N),ge=!1)}}},N.getVelocity=function(){return(se()-fe)/(_s()-Ko)*1e3||0},N.endAnimation=function(){Vs(N.callbackAnimation),n&&(V?V.progress(1):n.paused()?T||Vs(n,N.direction<0,1):Vs(n,n.reversed()))},N.labelToScroll=function(e){return n&&n.labels&&(P||N.refresh()||P)+n.labels[e]/n.duration()*_e||0},N.getTrailing=function(e){var t=Y.indexOf(N),n=N.direction>0?Y.slice(0,t).reverse():Y.slice(t+1);return(Ls(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return N.direction>0?e.end<=P:e.start>=pe})},N.update=function(e,t,r){if(!x||r||e){var o=zc===!0?Fe:N.scroll(),c=e?0:(o-P)/_e,u=c<0?0:c>1?1:c||0,p=N.progress,h,g,b,D,O,M,ee,te;if(t&&(fe=de,de=x?se():o,v&&(je=Ae,Ae=n&&!T?n.totalProgress():u)),m&&d&&!Jo&&!gs&&ys&&(!u&&P<o+(o-fe)/(_s()-Ko)*m?u=1e-4:u===1&&pe>o+(o-fe)/(_s()-Ko)*m&&(u=.9999)),u!==p&&N.enabled){if(h=N.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,N.direction=u>p?1:-1,N.progress=u,O&&!Jo&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],te=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||te)&&(te||l||!n)&&(Rs(C)?C(N):N.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(V&&!Jo&&!gs?(V._dp._time-V._start!==V._time&&V.render(V._dp._time-V._start),V.resetTo?V.resetTo(`totalProgress`,u,n._tTime/n._tDur):(V.vars.totalProgress=u,V.invalidate().restart())):n&&n.totalProgress(u,!!(Jo&&(ae||e)))),d){if(e&&f&&(be.style[f+w.os2]=we),!k)B(Ds(Se+Ce*u));else if(O){if(ee=!e&&u>p&&pe+1>o&&o+1>=Fs(E,w),y){if(!e&&(h||ee)){var ne=cc(d,!0),re=o-P;sl(d,Vo,ne.top+(w===Ao?re:0)+ic,ne.left+(w===Ao?0:re)+ic)}else sl(d,be)}tl(h||ee?ye:R),De&&u<1&&h||B(Se+(u===1&&!ee?Ce:0))}}v&&!ce.tween&&!Jo&&!gs&&Pe.restart(!0),a&&(M||_&&u&&(u<1||!hs))&&Wo(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(N),O&&!Jo?(T&&(te&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(N)),(M||!hs)&&(s&&M&&Hs(N,s),A[b]&&Hs(N,A[b]),_&&(u===1?N.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&Hs(N,A[b]))),S&&!h&&Math.abs(N.getVelocity())>(zs(S)?S:2500)&&(Vs(N.callbackAnimation),V?V.progress(1):Vs(n,D===`reverse`?1:!u,1))):T&&i&&!Jo&&i(N)}if(Oe){var ie=x?o/x.duration()*(x._caScrollDist||0):o;Ee(ie+ +!!I._isFlipped),Oe(ie)}Le&&Le(-o/x.duration()*(x._caScrollDist||0))}},N.enable=function(t,n){N.enabled||(N.enabled=!0,hc(E,`resize`,kc),O||hc(E,`scroll`,Dc),te&&hc(e,`refreshInit`,te),t!==!1&&(N.progress=oe=0,de=fe=ie=se()),n!==!1&&N.refresh())},N.getTween=function(e){return e&&ce?ce.tween:V},N.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}N.refresh(!1,!1,{start:Ss(e,n&&!!N._startClamp),end:Ss(t,n&&!!N._endClamp)},r),N.update()},N.adjustPinSpacing=function(e){if(Te&&e){var t=Te.indexOf(w.d)+1;Te[t]=parseFloat(Te[t])+e+ic,Te[1]=parseFloat(Te[1])+e+ic,tl(Te)}},N.disable=function(t,n){if(t!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,n||V&&V.pause(),Fe=0,le&&(le.uncache=1),te&&gc(e,`refreshInit`,te),Pe&&(Pe.pause(),ce.tween&&ce.tween.kill()&&(ce.tween=0)),!O)){for(var r=Y.length;r--;)if(Y[r].scroller===E&&Y[r]!==N)return;gc(E,`resize`,kc),O||gc(E,`scroll`,Dc)}},N.kill=function(e,r){N.disable(e,r),V&&!r&&V.kill(),o&&delete wc[o];var i=Y.indexOf(N);i>=0&&Y.splice(i,1),i===Zo&&qc>0&&Zo--,i=0,Y.forEach(function(e){return e.scroller===N.scroller&&(i=1)}),i||zc||(N.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),me&&[me,F,I,L].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),Jc===N&&(Jc=0),d&&(le&&(le.uncache=1),i=0,Y.forEach(function(e){return e.pin===d&&i++}),i||(le.spacer=0)),t.onKill&&t.onKill(N)},Y.push(N),N.enable(!1,!1),Re&&Re(N),n&&n.add&&!_e){var He=N.update;N.update=function(){N.update=He,W.cache++,P||pe||N.refresh()},K.delayedCall(.01,N.update),_e=.01,P=pe=0}else N.refresh();d&&Hc()}},e.register=function(t){return zo||(K=t||ks(),Os()&&window.document&&e.enable(),zo=bs),zo},e.defaults=function(e){if(e)for(var t in e)yc[t]=e[t];return yc},e.disable=function(e,t){bs=0,Y.forEach(function(n){return n[t?`kill`:`disable`](e)}),gc(q,`wheel`,Dc),gc(J,`scroll`,Dc),clearInterval(qo),gc(J,`touchcancel`,Es),gc(Vo,`touchstart`,Es),mc(gc,J,`pointerdown,touchstart,mousedown`,ws),mc(gc,J,`pointerup,touchend,mouseup`,Ts),Uo.kill(),Is(gc);for(var n=0;n<W.length;n+=3)_c(gc,W[n],W[n+1]),_c(gc,W[n],W[n+2])},e.enable=function(){if(q=window,J=document,Bo=J.documentElement,Vo=J.body,K){if(Wo=K.utils.toArray,Go=K.utils.clamp,ls=K.core.context||Es,ns=K.core.suppressOverwrites||Es,us=q.history.scrollRestoration||`auto`,Kc=q.pageYOffset||0,K.core.globals(`ScrollTrigger`,e),Vo){bs=1,ds=document.createElement(`div`),ds.style.height=`100vh`,ds.style.position=`absolute`,Uc(),Cs(),G.register(K),e.isTouch=G.isTouch,cs=G.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),as=G.isTouch===1,hc(q,`wheel`,Dc),Ho=[q,J,Bo,Vo],K.matchMedia?(e.matchMedia=function(e){var t=K.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},K.addEventListener(`matchMediaInit`,function(){Ic(),Lc()}),K.addEventListener(`matchMediaRevert`,function(){return Fc()}),K.addEventListener(`matchMedia`,function(){Gc(0,1),Nc(`matchMedia`)}),K.matchMedia().add(`(orientation: portrait)`,function(){return Oc(),Oc})):console.warn(`Requires GSAP 3.11.0 or later`),Oc(),hc(J,`scroll`,Dc);var t=Vo.hasAttribute(`style`),n=Vo.style,r=n.borderTopStyle,i=K.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle=`solid`,a=cc(Vo),Ao.m=Math.round(a.top+Ao.sc())||0,ko.m=Math.round(a.left+ko.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(Vo.setAttribute(`style`,``),Vo.removeAttribute(`style`)),qo=setInterval(Ec,250),K.delayedCall(.5,function(){return gs=0}),hc(J,`touchcancel`,Es),hc(Vo,`touchstart`,Es),mc(hc,J,`pointerdown,touchstart,mousedown`,ws),mc(hc,J,`pointerup,touchend,mouseup`,Ts),Xo=K.utils.checkPrefix(`transform`),Zc.push(Xo),zo=_s(),Uo=K.delayedCall(.2,Gc).pause(),es=[J,`visibilitychange`,function(){var e=q.innerWidth,t=q.innerHeight;J.hidden?(Qo=e,$o=t):(Qo!==e||$o!==t)&&kc()},J,`DOMContentLoaded`,Gc,q,`load`,Gc,q,`resize`,kc],Is(hc),Y.forEach(function(e){return e.enable(0,1)}),o=0;o<W.length;o+=3)_c(gc,W[o],W[o+1]),_c(gc,W[o],W[o+2])}else J&&J.addEventListener(`DOMContentLoaded`,function t(){e.enable(),J.removeEventListener(`DOMContentLoaded`,t)})}},e.config=function(t){`limitCallbacks`in t&&(hs=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(qo)||(qo=n)&&setInterval(Ec,n),`ignoreMobileResize`in t&&(as=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(Is(gc)||Is(hc,t.autoRefreshEvents||`none`),rs=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=jo(e),r=W.indexOf(n),i=As(n);~r&&W.splice(r,i?6:2),t&&(i?_o.unshift(q,t,Vo,t,Bo,t):_o.unshift(n,t))},e.clearMatchMedia=function(e){Y.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(Ls(e)?jo(e):e).getBoundingClientRect(),i=r[n?Js:Ys]*t||0;return n?r.right-i>0&&r.left+i<q.innerWidth:r.bottom-i>0&&r.top+i<q.innerHeight},e.positionInViewport=function(e,t,n){Ls(e)&&(e=jo(e));var r=e.getBoundingClientRect(),i=r[n?Js:Ys],a=t==null?i/2:t in bc?bc[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/q.innerWidth:(r.top+a)/q.innerHeight},e.killAll=function(e){if(Y.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=Ac.killAll||[];Ac={},t.forEach(function(e){return e()})}},e}();X.version=`3.15.0`,X.saveStyles=function(e){return e?Wo(e).forEach(function(e){if(e&&e.style){var t=Pc.indexOf(e);t>=0&&Pc.splice(t,5),Pc.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),K.core.getCache(e),ls())}}):Pc},X.revert=function(e,t){return Lc(!e,t)},X.create=function(e,t){return new X(e,t)},X.refresh=function(e){return e?kc(!0):(zo||X.register())&&Gc(!0)},X.update=function(e){return++W.cache&&Yc(e===!0?2:0)},X.clearScrollMemory=Rc,X.maxScroll=function(e,t){return Fs(e,t?ko:Ao)},X.getScrollFunc=function(e,t){return No(jo(e),t?ko:Ao)},X.getById=function(e){return wc[e]},X.getAll=function(){return Y.filter(function(e){return e.vars.id!==`ScrollSmoother`})},X.isScrolling=function(){return!!ys},X.snapDirectional=fc,X.addEventListener=function(e,t){var n=Ac[e]||(Ac[e]=[]);~n.indexOf(t)||n.push(t)},X.removeEventListener=function(e,t){var n=Ac[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},X.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=K.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&Rs(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return Rs(a)&&(a=a(),hc(X,`refresh`,function(){return a=t.batchMax()})),Wo(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push(X.create(t))}),n};var dl=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},fl=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(G.isTouch?` pinch-zoom`:``):`none`,t===Bo&&e(Vo,n)},pl={auto:1,scroll:1},ml=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||K.core.getCache(i),o=_s(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==Vo&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(pl[(s=ac(i)).overflowY]||pl[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!As(i)&&(pl[(s=ac(i)).overflowY]||pl[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},hl=function(e,t,n,r){return G.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&ml,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&hc(J,G.eventTypes[0],vl,!1,!0)},onDisable:function(){return gc(J,G.eventTypes[0],vl,!0)}})},gl=/(input|label|select|textarea)/i,_l,vl=function(e){var t=gl.test(e.target.tagName);(t||_l)&&(e._gsapAllow=!0,_l=t)},yl=function(e){Bs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type=`wheel,touch`),e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=jo(e.target)||Bo,l=K.core.globals().ScrollSmoother,u=l&&l.get(),d=cs&&(e.content&&jo(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=No(c,Ao),p=No(c,ko),m=1,h=(G.isTouch&&q.visualViewport?q.visualViewport.scale*q.visualViewport.width:q.outerWidth)/q.innerWidth,g=0,_=Rs(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=hl(c,e.type,!0,i),x=function(){return y=!1},S=Es,C=Es,w=function(){s=Fs(c,Ao),C=Go(+!!cs,s),n&&(S=Go(0,Fs(c,ko))),v=Bc},T=function(){d._gsap.y=Ds(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=Ds(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=Ds((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=W.cache,Yc()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&K.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return cs&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=Ds((q.visualViewport&&q.visualViewport.scale||1)/h),D.pause(),e!==m&&fl(c,m>1.01||!n&&`x`),O=p(),k=f(),w(),v=Bc},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{W.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=dl(p,i,o,Fs(c,ko)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=dl(f,i,o,Fs(c,Ao)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(cs&&D.vars.scrollY>=s||i>=s-1)&&K.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),_s()-g>1e3&&(v=0,g=_s())},e.onChange=function(e,t,r,i,a){if(Bc!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&Yc()},e.onEnable=function(){fl(c,!n&&`x`),X.addEventListener(`refresh`,j),hc(q,`resize`,j),f.smooth&&(f.target.style.scrollBehavior=`auto`,f.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){fl(c,!0),gc(q,`resize`,j),X.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new G(e),o.iOS=cs,cs&&!f()&&f(1),cs&&K.ticker.add(Es),A=o._dc,D=K.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:cl(f,f(),function(){return D.pause()})},onUpdate:Yc,onComplete:A.vars.onComplete}),o};X.sort=function(e){if(Rs(e))return Y.sort(e);var t=q.pageYOffset||0;return X.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+q.innerHeight}),Y.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},X.observe=function(e){return new G(e)},X.normalizeScroll=function(e){if(e===void 0)return is;if(e===!0&&is)return is.enable();if(e===!1)is&&is.kill(),is=e;else{var t=e instanceof G?e:yl(e);return is&&is.target===t.target&&is.kill(),As(t.target)&&(is=t),t}},X.core={_getVelocityProp:Po,_inputObserver:hl,_scrollers:W,_proxies:_o,bridge:{ss:function(){ys||Nc(`scrollStart`),ys=_s()},ref:function(){return Jo}}},ks()&&K.registerPlugin(X),typeof window<`u`&&(Za.registerPlugin(X),X.config({limitCallbacks:!0,ignoreMobileResize:!0}));var bl={expoOut:`expo.out`,power3Out:`power3.out`,power2Out:`power2.out`,power2InOut:`power2.inOut`,sineInOut:`sine.inOut`,backOutSoft:`back.out(1.2)`},xl=()=>typeof window>`u`?!1:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,Sl={leadManagement:`/services/lead-management.webp`,website:`/services/website.webp`,app:`/services/app.webp`,aiMl:`/services/ai-ml.webp`,saas:`/services/saas.webp`,computerVision:`/services/computer-vision.webp`},Cl={eyebrow:`WHAT WE DO`,h2:`SERVICES THAT GROW YOUR BUSINESS`,paragraph:`Stop juggling agencies for design, development and AI. Kaivex plans, builds and launches your software under one roof, so you spend less time coordinating and more time growing`,ctaButton:`START A PROJECT`,services:[{id:`lead-management`,number:`01`,title:`LEAD MANAGEMENT`,descriptor:`Capture, score and nurture every lead`,bullets:[`Capture from web, WhatsApp and email`,`Scoring and auto-assignment`,`Dashboards and follow-up reminders`],tags:[`CRM`,`Automation`],serviceKey:`Lead Management`,hue:215,imageSrc:Sl.leadManagement,alt:`3D illustration of a glass funnel collecting glowing lead icons`},{id:`website`,number:`02`,title:`WEBSITE DEVELOPMENT`,descriptor:`Fast, responsive websites that convert`,bullets:[`Design to launch`,`SEO and page speed`,`CMS and integrations`],tags:[`Web`,`SEO`],serviceKey:`Website`,hue:200,imageSrc:Sl.website,alt:`3D illustration of a browser window with a dashboard layout`},{id:`app`,number:`03`,title:`APP DEVELOPMENT`,descriptor:`iOS, Android and cross-platform apps`,bullets:[`Product design and prototyping`,`Native and cross-platform builds`,`Store launch and updates`],tags:[`Mobile`,`Cross-platform`],serviceKey:`App`,hue:235,imageSrc:Sl.app,alt:`3D illustration of a smartphone with app icons`},{id:`ai-ml`,number:`04`,title:`AI / ML`,descriptor:`Custom models and smart automation`,bullets:[`Chatbots and assistants`,`Prediction and recommendations`,`Document and data automation`],tags:[`AI`,`Automation`],serviceKey:`AI / ML`,hue:150,imageSrc:Sl.aiMl,alt:`3D illustration of a glowing AI microchip network`},{id:`saas`,number:`05`,title:`SAAS`,descriptor:`Cloud products built end to end`,bullets:[`Multi-tenant architecture`,`Billing and onboarding`,`Scaling and monitoring`],tags:[`Cloud`,`Product`],serviceKey:`SaaS`,hue:190,imageSrc:Sl.saas,alt:`3D illustration of a cloud connected to servers`},{id:`computer-vision`,number:`06`,title:`COMPUTER VISION`,descriptor:`Image and video intelligence`,bullets:[`Object detection and tracking`,`Quality inspection`,`Real-time video analytics`],tags:[`Vision`,`Edge`],serviceKey:`Computer Vision`,hue:330,imageSrc:Sl.computerVision,alt:`3D illustration of an AI vision inspection camera system`}],footerRow:{prompt:`Not sure what you need?`,actionText:`Talk to us`}},wl={eyebrow:`Client work`,h2:`Projects we’ve built with our clients`,filterChips:[`All`,`Websites`,`Apps`,`AI / ML`,`SaaS`,`Vision`],projects:[{id:`project-one`,name:`Project One`,client:`Client 01`,industry:`Fintech`,category:`SaaS`,outcome:`Cloud infrastructure supporting 00x user scale`,tags:[`SaaS`,`Cloud`],hue:210,metric:`00%`,imageUrl:`/work/project-1.webp`,gradient:`from-emerald-500/75 via-teal-700/75 to-emerald-950/85`,cssGradient:`linear-gradient(to top, rgba(2, 44, 34, 0.96) 0%, rgba(13, 148, 136, 0.75) 50%, rgba(16, 185, 129, 0.55) 100%)`,challenge:`Legacy transactional systems suffered severe latency during market peaks, dropping customer requests under high load.`,whatWeBuilt:`Engineered a low-latency event-driven microservices architecture with elastic compute pools and automated ledger reconciliation.`,result:`Achieved 00% reduction in API response time and sustained 00,000 requests per second with zero transaction failures.`,techStack:[`React`,`Node.js`,`AWS`,`PostgreSQL`,`Redis`],testimonial:{quote:`Kaivex delivered a reliable platform on schedule without cutting corners on code quality.`,author:`Engineering Director`,role:`Client 01`}},{id:`project-two`,name:`Project Two`,client:`Client 02`,industry:`Healthcare`,category:`AI / ML`,outcome:`Automated triage model trained on private datasets`,tags:[`AI / ML`,`Automation`],hue:275,metric:`00%`,imageUrl:`/work/project-2.webp`,gradient:`from-slate-800/85 via-slate-900/85 to-slate-950/90`,cssGradient:`linear-gradient(to top, rgba(2, 6, 23, 0.96) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(51, 65, 85, 0.6) 100%)`,challenge:`Clinical staff spent 00+ hours per week manually categorizing complex medical intake forms and lab summaries.`,whatWeBuilt:`Developed a HIPAA-compliant NLP extraction pipeline paired with human-in-the-loop review interfaces and instant routing.`,result:`Reduced case intake wait time by 00% while maintaining 00.0% classification precision across test cohorts.`,techStack:[`Python`,`PyTorch`,`FastAPI`,`Next.js`,`Docker`],testimonial:{quote:`The automated classification workflow cut hours off our daily operational backlog.`,author:`Head of Operations`,role:`Client 02`}},{id:`project-three`,name:`Project Three`,client:`Client 03`,industry:`E-Commerce`,category:`Websites`,outcome:`High-performance storefront with sub-second page loads`,tags:[`Websites`,`Web`,`SEO`,`E-Commerce`],hue:195,metric:`00%`,imageUrl:`/work/project-3.webp`,gradient:`from-amber-500/75 via-orange-600/75 to-amber-950/85`,cssGradient:`linear-gradient(to top, rgba(69, 26, 3, 0.96) 0%, rgba(234, 88, 12, 0.75) 50%, rgba(245, 158, 11, 0.55) 100%)`,challenge:`Slow mobile page performance drove high bounce rates and constrained organic search rankings across international regions.`,whatWeBuilt:`Designed and launched an edge-rendered headless web application with aggressive image optimization and instant page transitions.`,result:`Generated a 00% lift in mobile checkout completion and earned a sustained 00/100 Core Web Vitals score.`,techStack:[`Next.js`,`TypeScript`,`TailwindCSS`,`Edge CDN`],testimonial:{quote:`Our mobile conversion rate climbed immediately after deploying the edge storefront.`,author:`VP of Growth`,role:`Client 03`}},{id:`project-four`,name:`Project Four`,client:`Client 04`,industry:`Logistics`,category:`Apps`,outcome:`Cross-platform driver dispatch and offline navigation`,tags:[`Apps`,`Mobile`,`Cross-platform`,`Logistics`],hue:240,metric:`00%`,imageUrl:`/work/project-4.webp`,gradient:`from-sky-400/75 via-cyan-600/75 to-teal-950/85`,cssGradient:`linear-gradient(to top, rgba(4, 47, 46, 0.96) 0%, rgba(8, 145, 178, 0.75) 50%, rgba(56, 189, 248, 0.55) 100%)`,challenge:`Field personnel required reliable route synchronization and proof-of-delivery in regions with intermittent cellular signal.`,whatWeBuilt:`Built an offline-first mobile application featuring local state reconciliation, background telematics and barcode scanning.`,result:`Eliminated 00% of delivery sync errors and improved driver route adherence across 00 regional hubs.`,techStack:[`Flutter`,`Dart`,`PostgreSQL`,`Google Cloud`],testimonial:{quote:`Our dispatch drivers rely on the app daily even in areas with zero cell connectivity.`,author:`Fleet Operations Manager`,role:`Client 04`}},{id:`project-five`,name:`Project Five`,client:`Client 05`,industry:`Manufacturing`,category:`Vision`,outcome:`Edge-deployed optical defect detection on conveyor lines`,tags:[`Vision`,`Edge`],hue:340,metric:`00%`,imageUrl:`/work/project-5.webp`,gradient:`from-rose-500/75 via-red-600/75 to-rose-950/85`,cssGradient:`linear-gradient(to top, rgba(76, 5, 25, 0.96) 0%, rgba(225, 29, 72, 0.75) 50%, rgba(244, 63, 94, 0.55) 100%)`,challenge:`Manual inspection lines struggled to identify micro-surface fissures at high production line throughput.`,whatWeBuilt:`Deployed high-speed camera stations running real-time edge computer vision models with automated pneumatic rejection triggers.`,result:`Achieved 00.0% surface anomaly detection accuracy at 000 parts per minute with zero line slowdown.`,techStack:[`Python`,`OpenCV`,`TensorFlow`,`Edge Hardware`],testimonial:{quote:`The optical defect inspection system saved thousands of dollars in scrapped assembly batches.`,author:`Quality Engineering Lead`,role:`Client 05`}},{id:`project-six`,name:`Project Six`,client:`Client 06`,industry:`B2B SaaS`,category:`SaaS`,outcome:`Multi-tenant lead enrichment and automated scoring`,tags:[`SaaS`,`Automation`],hue:160,metric:`00%`,imageUrl:`/work/project-6.webp`,gradient:`from-blue-500/75 via-indigo-600/75 to-purple-950/85`,cssGradient:`linear-gradient(to top, rgba(30, 27, 75, 0.96) 0%, rgba(79, 70, 229, 0.75) 50%, rgba(59, 130, 246, 0.55) 100%)`,challenge:`Sales operations teams lost hours weekly copying and matching lead records across disconnected CRM instances.`,whatWeBuilt:`Engineered a unified ingestion webhook engine that enriches lead records in real-time and routes high-intent deals.`,result:`Automated 00% of pipeline qualification and saved over 00 hours of manual rep administrative effort monthly.`,techStack:[`Node.js`,`React`,`PostgreSQL`,`Kafka`],testimonial:{quote:`Our outbound team now spends their time closing rather than doing repetitive data entry.`,author:`Revenue Operations Director`,role:`Client 06`}}]},Tl={eyebrow:`What we offer`,h2:`Products ready for your business`,products:[{id:`kaivex-crm`,name:`Kaivex CRM`,status:`Live`,category:`Sales`,promise:`Capture, qualify and route every inbound lead before intent cools`,builtFor:`Growth agencies, B2B sales teams and service operators`,features:[`Multi-channel webhook capture from web forms, WhatsApp and email`,`Algorithmic lead scoring with automated rep territory assignment`,`Real-time pipeline analytics, revenue forecasting and follow-up sequences`],hue:220},{id:`kaivex-insights`,name:`Kaivex Insights`,status:`Beta`,category:`Analytics`,promise:`Turn product event telemetry into clear growth decisions without complex SQL`,builtFor:`SaaS founders, product managers and growth engineers`,features:[`Plug-and-play event SDK with sub-second funnel and cohort queries`,`Predictive churn detection powered by embedded behavioral models`,`Automated weekly executive revenue and engagement summaries`],hue:280}],customCard:{title:`Need something custom?`,description:`We architect, engineer and deploy bespoke software systems tailored to your unique operational workflows.`,actionText:`Let’s talk`}},El={eyebrow:`About Kaivex`,h2:`Built by engineers who care about outcomes`,story:{paragraphs:[`Kaivex was founded by engineers who saw too many projects derailed by bloated roadmaps, over-complex tooling and disconnected consultants. We operate as a focused technical strike team that partners closely with founders and leadership.`,`We believe real software leverage comes from craft, clean architecture and disciplined execution. Our goal is to engineer durable systems that eliminate operational bottlenecks and scale reliably with your business.`],note:`Built to scale`,microcopy:`Software that grows your business`},values:[{id:`clarity`,title:`Clarity`,description:`Direct technical communication, transparent sprint tracking and zero architectural theater.`},{id:`craft`,title:`Craft`,description:`Rigorous engineering standards across database schema, API contracts and clean user interfaces.`},{id:`speed`,title:`Speed`,description:`Disciplined sprint cadence delivering production-ready releases into users’ hands rapidly.`},{id:`ownership`,title:`Ownership`,description:`We treat your business goals, uptime, and long-term maintainability with personal responsibility.`}],timeline:[{step:`01`,title:`Discover`,description:`Deep technical review to uncover operational friction, assess architecture feasibility, and define measurable deliverables.`},{step:`02`,title:`Design`,description:`High-fidelity interactive interface prototypes, data schema diagrams, and technical integration specifications.`},{step:`03`,title:`Build`,description:`Modular sprint engineering with continuous test coverage, automated staging environments, and weekly demonstration builds.`},{step:`04`,title:`Launch and grow`,description:`Zero-downtime production deployment, telemetry observability, and continuous performance optimization.`}],techStack:[`React`,`Next.js`,`Node.js`,`Python`,`TensorFlow`,`PyTorch`,`OpenCV`,`AWS`,`Google Cloud`,`PostgreSQL`,`Flutter`,`Swift`],stats:[{value:`00+`,label:`Products deployed`,isPlaceholder:!0},{value:`00%`,label:`Client retention`,isPlaceholder:!0},{value:`00`,label:`Global regions served`,isPlaceholder:!0}],team:[],testimonials:[]},Dl={eyebrow:`Contact`,h2:`Have an idea? Let’s build it`,intro:`Whether you need a full product build, custom AI automation, or infrastructure that scales, we are ready to partner with you.`,channels:[{id:`email`,type:`Email`,value:`hello@kaivex.com`,href:`mailto:hello@kaivex.com`,isPlaceholder:!1},{id:`whatsapp`,type:`WhatsApp`,value:`+00 000 000 0000`,href:null,isPlaceholder:!0},{id:`location`,type:`Location`,value:`Global / UTC±0 to UTC+8`,href:null,isPlaceholder:!0},{id:`hours`,type:`Working hours`,value:`Mon – Fri, 9am – 6pm`,href:null,isPlaceholder:!0}],socialLinks:[{name:`LinkedIn`,url:`https://linkedin.com/company/kaivex`},{name:`X`,url:`https://x.com/kaivex`},{name:`GitHub`,url:`https://github.com/kaivex`}],card:{headline:`Start a project`,sentence:`Tell us what you want to build. Our engineering leads will review your specs and respond within 2 hours.`,buttonText:`Send project details →`},faqSubtitle:`We are here to help you with any questions you may have. If you don’t find what you need, please contact us.`,faqContactEmail:`hello@kaivex.com`,faq:[{id:`faq-1`,question:`What does a project cost?`,answer:`Every build is scoped to your exact business requirements. We provide fixed-price sprint estimates for discrete milestones or monthly engineering retainers for continuous product development. Detailed transparent scopes are shared following our discovery session.`},{id:`faq-2`,question:`How long does it take?`,answer:`Typical sprint cycles run from 2 to 8 weeks depending on integration complexity. We emphasize early functional MVP deliveries so your team can gather real user feedback while we build out advanced features.`},{id:`faq-3`,question:`Do you offer support after launch?`,answer:`Yes. Every engagement includes a dedicated post-launch monitoring and stabilization period, followed by flexible ongoing maintenance agreements covering security patches, cloud optimization and feature releases.`},{id:`faq-4`,question:`Who owns the code?`,answer:`You retain 100% intellectual property ownership of all source code, architecture diagrams, cloud infrastructure scripts, and design artifacts upon milestone completion.`},{id:`faq-5`,question:`Do you work with international clients across timezones?`,answer:`Yes. We partner with founders and engineering teams globally across the Americas, Europe, and Asia-Pacific. Sprints feature async documentation, transparent milestone boards, and scheduled synchronous overlap reviews.`},{id:`faq-6`,question:`How do we get started?`,answer:`Click 'Start a project' to submit your project requirements. We’ll schedule a 30-minute discovery session to discuss scope, review technical constraints, and outline an architectural roadmap.`}],readyBand:{h2:`Ready when you are`,buttonText:`Start a project`},footer:{copyright:`© 2026 Kaivex. All rights reserved.`,links:[{label:`Privacy`,href:`#`},{label:`Terms`,href:`#`},{label:`hello@kaivex.com`,href:`mailto:hello@kaivex.com`}]}},Ol=[{id:`services`,label:`Services`},{id:`work`,label:`Work`},{id:`products`,label:`Products`},{id:`about`,label:`About`},{id:`contact`,label:`Contact`}],kl=[{id:`synapse-os`,type:`project`,projectKey:`project-one`,title:`SYNAPSE OS`,tag:`FINTECH CORE`,category:`SaaS / Infrastructure`,description:`Sub-second event microservices & elastic transaction routing`,imageUrl:`/work/project-1.webp`,metric:`42ms SLA`},{id:`prism-telemetry`,type:`project`,projectKey:`project-two`,title:`PRISM TELEMETRY`,tag:`AI / HEALTHCARE`,category:`Neural Models`,description:`HIPAA-compliant clinical triage & automated NLP pipeline`,imageUrl:`/work/project-2.webp`,metric:`99.4% Precision`},{id:`kaivex-crm`,type:`product`,title:`KAIVEX CRM`,tag:`SALES ENGINE`,category:`Product Suite`,description:`Multi-channel webhook capture & algorithmic rep assignment`,imageUrl:`/services/lead-management-440.webp`,metric:`Live System`},{id:`autonomous-agents`,type:`project`,projectKey:`project-two`,title:`AUTONOMOUS AGENTS`,tag:`INFERENCE MESH`,category:`AI Pipeline`,description:`Distributed model quantization & human-in-the-loop review`,imageUrl:`/services/ai-ml-440.webp`,metric:`Sub-2h Deploy`},{id:`edge-storefront`,type:`project`,projectKey:`project-three`,title:`EDGE WEB RUNTIME`,tag:`E-COMMERCE`,category:`Web Architecture`,description:`Sub-second page transitions & edge caching with 100/100 CWV`,imageUrl:`/work/project-3.webp`,metric:`100/100 CWV`},{id:`native-mobile`,type:`project`,projectKey:`project-four`,title:`NATIVE 120 FPS`,tag:`MOBILE RUNTIME`,category:`Cross-Platform`,description:`Offline-first dispatch engine with background state sync`,imageUrl:`/work/project-4.webp`,metric:`Zero Latency`},{id:`kaivex-insights`,type:`product`,title:`KAIVEX INSIGHTS`,tag:`EVENT TELEMETRY`,category:`Analytics OS`,description:`Predictive churn behavioral models with sub-second cohort queries`,imageUrl:`/services/computer-vision-440.webp`,metric:`Beta 2.0`},{id:`defect-vision`,type:`project`,projectKey:`project-five`,title:`DEFECT VISION RIG`,tag:`COMPUTER VISION`,category:`Optical Edge`,description:`High-speed camera telemetry & automated pneumatic rejection`,imageUrl:`/work/project-5.webp`,metric:`99.8% Precision`},{id:`data-engine`,type:`project`,projectKey:`project-six`,title:`GLOBAL MESH DB`,tag:`DATA ENGINE`,category:`Distributed SaaS`,description:`High-throughput webhook ingestion & real-time enrichment`,imageUrl:`/work/project-6.webp`,metric:`00k RPS`},{id:`cloud-fabric`,type:`service`,title:`SAAS FABRIC`,tag:`MULTI-TENANT`,category:`Cloud Engineering`,description:`Global edge clustering with zero cold starts and instant scaling`,imageUrl:`/services/saas-440.webp`,metric:`Global Edge`}];function Al({onOpenCaseStudy:e,onOpenModal:t}){let n=(0,b.useRef)(null),r=(0,b.useRef)(null),[i,a]=(0,b.useState)(0),o=(0,b.useRef)(0),s=(0,b.useRef)(0),c=(0,b.useRef)(!1),l=(0,b.useRef)(0),u=(0,b.useRef)(0),d=(0,b.useRef)(0),f=(0,b.useRef)(0),p=(0,b.useRef)(!1),[m,h]=(0,b.useState)({width:1200,radius:940,angleStep:21}),g=(0,b.useCallback)(()=>{if(!r.current)return;let e=r.current.clientWidth||window.innerWidth,t=940,n=21;e<640?(t=540,n=29):e<1024&&(t=740,n=24),h({width:e,radius:t,angleStep:n})},[]);(0,b.useEffect)(()=>(g(),window.addEventListener(`resize`,g),()=>window.removeEventListener(`resize`,g)),[g]),(0,b.useEffect)(()=>{let e,t=performance.now(),n=r=>{let i=Math.min(r-t,40)/16.666;t=r,c.current||(Math.abs(s.current)>1e-4?(o.current+=s.current*i,s.current*=.92**i):p.current||(o.current+=.0028*i));let l=kl.length;o.current=(o.current%l+l)%l,a(o.current),e=requestAnimationFrame(n)};return e=requestAnimationFrame(n),()=>cancelAnimationFrame(e)},[]);let _=e=>{c.current=!0,l.current=e.clientX||e.touches&&e.touches[0].clientX||0,u.current=o.current,f.current=l.current,d.current=performance.now(),s.current=0},v=e=>{if(!c.current)return;let t=e.clientX||e.touches&&e.touches[0].clientX||0,n=t-l.current,r=performance.now(),i=Math.max(r-d.current,1),a=t-f.current;s.current=-a/220/(i/16.666),f.current=t,d.current=r;let p=m.width<640?.004:.0028;o.current=u.current-n*p},y=()=>{c.current=!1},S=e=>{Math.abs(e.deltaX)>Math.abs(e.deltaY)&&(e.preventDefault(),o.current+=e.deltaX*.0018,s.current=e.deltaX*.002)},C=(n,r)=>{if(Math.abs(r)>.4)o.current+=r,s.current=r*.08;else if(n.type===`project`){let t=wl.projects.find(e=>e.id===n.projectKey)||{id:n.id,name:n.title,client:`Client Showcase`,category:n.tag,outcome:n.description,imageUrl:n.imageUrl,whatWeBuilt:n.description,techStack:[`React`,`Next.js`,`TypeScript`,`Node.js`],testimonial:{quote:`Engineered with exceptional performance and precision.`,author:`Technical Lead`}};e?.(t)}else t?.(`project`,null,`Inquiry regarding ${n.title} (${n.tag})`)},w=(e,t)=>{e.preventDefault();let n=document.getElementById(t);n&&n.scrollIntoView({behavior:`smooth`})},T=e=>{e.key===`ArrowRight`?(e.preventDefault(),s.current=.4):e.key===`ArrowLeft`&&(e.preventDefault(),s.current=-.4)},E=(i%1-.5)*2*18;return(0,x.jsxs)(`div`,{ref:n,className:`cinema-hero-root`,tabIndex:0,onKeyDown:T,onWheel:S,onPointerDown:_,onPointerMove:v,onPointerUp:y,onPointerCancel:y,"aria-label":`Interactive projects and products carousel`,children:[(0,x.jsx)(`header`,{className:`hero-nav-bar`,role:`banner`,"aria-label":`Main navigation`,children:(0,x.jsxs)(`div`,{className:`hero-nav-container`,children:[(0,x.jsxs)(`a`,{href:`#hero`,className:`sticky-nav-logo`,onClick:e=>{e.preventDefault(),window.scrollTo({top:0,behavior:`smooth`})},"aria-label":`Kaivex Home`,children:[(0,x.jsx)(`img`,{src:`/logo-icon.webp`,alt:`Kaivex`,className:`sticky-logo-img`,width:`28`,height:`28`}),(0,x.jsx)(`span`,{className:`sticky-logo-text`,children:`KAIVEX`})]}),(0,x.jsx)(`nav`,{className:`sticky-nav-links`,"aria-label":`In-page sections`,children:Ol.map(e=>(0,x.jsx)(`a`,{href:`#${e.id}`,className:`sticky-nav-link`,onClick:t=>w(t,e.id),children:e.label},e.id))}),(0,x.jsx)(`div`,{className:`sticky-nav-actions`,children:(0,x.jsx)(`button`,{type:`button`,className:`pill-btn pill-btn-white sticky-cta-btn`,onClick:()=>t?.(`project`),children:`Start a project`})})]})}),(0,x.jsx)(`div`,{className:`cinema-headline-wrap`,children:(0,x.jsxs)(`h1`,{className:`cinema-headline-text`,children:[(0,x.jsx)(`span`,{className:`cinema-headline-row`,children:`YOUR NEXT BIG THING,`}),(0,x.jsx)(`span`,{className:`cinema-headline-row`,children:`OUR NEXT BIG BUILD`})]})}),(0,x.jsx)(`div`,{ref:r,className:`cinema-carousel-viewport`,children:(0,x.jsx)(`div`,{className:`cinema-carousel-cylinder`,children:kl.map((e,t)=>{let n=kl.length,r=((t-i)%n+n)%n;if(r>n/2&&(r-=n),!(Math.abs(r)<=3.4))return null;let a=r*m.angleStep*Math.PI/180,o=m.radius*Math.sin(a),s=m.radius*(Math.cos(a)-1),c=r*m.angleStep,l=Math.max(1-Math.abs(r)*.045,.72),u=Math.max(1-(Math.abs(r)/3.4)**2*.85,.15),d=Math.round(100-Math.abs(r)*10);return(0,x.jsx)(`div`,{className:`cinema-card-box ${Math.abs(r)<.5?`is-center`:``}`,style:{transform:`translate3d(calc(-50% + ${o.toFixed(1)}px), -50%, ${s.toFixed(1)}px) rotateY(${c.toFixed(2)}deg) scale(${l.toFixed(3)})`,opacity:u.toFixed(3),zIndex:d},onClick:()=>C(e,r),onMouseEnter:()=>{p.current=!0},onMouseLeave:()=>{p.current=!1},role:`button`,tabIndex:0,"aria-label":`View ${e.title}: ${e.tag}`,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),C(e,r))},children:(0,x.jsxs)(`div`,{className:`cinema-card-media-wrap`,children:[(0,x.jsx)(`img`,{src:e.imageUrl,alt:e.title,className:`cinema-card-image`,loading:`eager`,decoding:`async`}),(0,x.jsx)(`div`,{className:`cinema-card-vignette`}),(0,x.jsxs)(`div`,{className:`cinema-card-content`,children:[(0,x.jsxs)(`div`,{className:`cinema-card-header`,children:[(0,x.jsx)(`span`,{className:`cinema-card-tag`,children:e.tag}),(0,x.jsx)(`span`,{className:`cinema-card-metric`,children:e.metric})]}),(0,x.jsxs)(`div`,{className:`cinema-card-footer`,children:[(0,x.jsx)(`h3`,{className:`cinema-card-title`,children:e.title}),(0,x.jsx)(`p`,{className:`cinema-card-desc`,children:e.description}),(0,x.jsx)(`div`,{className:`cinema-card-action-bar`,children:(0,x.jsxs)(`span`,{className:`cinema-view-pill`,children:[`EXPLORE `,(0,x.jsx)(`span`,{className:`arrow`,"aria-hidden":`true`,children:`→`})]})})]})]})]})},e.id)})})}),(0,x.jsx)(`div`,{className:`cinema-manifesto-wrap`,children:(0,x.jsx)(`p`,{className:`cinema-manifesto-text`,children:`WE ARE EXPERTS IN THE ARCHITECTURE OF HIGH-PERFORMANCE SOFTWARE, AI PLATFORMS, AND BESPOKE DIGITAL PRODUCTS. WE CREATE SYSTEMS THAT CAPTIVATE AUDIENCES AROUND THE WORLD.`})}),(0,x.jsxs)(`div`,{className:`cinema-stepper-wrap`,"aria-hidden":`true`,children:[(0,x.jsxs)(`div`,{className:`cinema-stepper-scale`,children:[(0,x.jsx)(`span`,{className:`step-num`,children:`3`}),(0,x.jsx)(`span`,{className:`step-dot`,children:`.`}),(0,x.jsx)(`span`,{className:`step-dot`,children:`.`}),(0,x.jsx)(`span`,{className:`step-num`,children:`2`}),(0,x.jsx)(`span`,{className:`step-dot`,children:`.`}),(0,x.jsx)(`span`,{className:`step-dot`,children:`.`}),(0,x.jsx)(`span`,{className:`step-num`,children:`1`}),(0,x.jsx)(`span`,{className:`step-dot`,children:`.`}),(0,x.jsx)(`span`,{className:`step-dot`,children:`.`}),(0,x.jsx)(`span`,{className:`step-num zero`,children:`0`}),(0,x.jsx)(`span`,{className:`step-dot`,children:`.`}),(0,x.jsx)(`span`,{className:`step-dot`,children:`.`}),(0,x.jsx)(`span`,{className:`step-num`,children:`1`}),(0,x.jsx)(`span`,{className:`step-dot`,children:`.`}),(0,x.jsx)(`span`,{className:`step-dot`,children:`.`}),(0,x.jsx)(`span`,{className:`step-num`,children:`2`}),(0,x.jsx)(`span`,{className:`step-dot`,children:`.`}),(0,x.jsx)(`span`,{className:`step-dot`,children:`.`}),(0,x.jsx)(`span`,{className:`step-num`,children:`3`})]}),(0,x.jsx)(`div`,{className:`cinema-stepper-marker`,style:{transform:`translateX(${E}px)`},children:`|`})]}),(0,x.jsx)(`div`,{className:`cinema-bottom-blend`,"aria-hidden":`true`}),(0,x.jsx)(`style`,{children:`
        /* ============================================================
           SEAMLESS BLENDED CINEMA HERO SECTION
           ============================================================ */
        .cinema-hero-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100svh;
          background: transparent !important;
          color: #f5f5f7;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px clamp(20px, 3.8vw, 64px) 36px;
          user-select: none;
          box-sizing: border-box;
          touch-action: pan-y;
        }

        /* Top Navigation Header matching StickyNavbar */
        .hero-nav-bar {
          position: relative;
          z-index: 35;
          width: 100%;
          padding: 8px 0;
        }

        .hero-nav-container {
          max-width: 1180px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media (max-width: 820px) {
          .hero-nav-container .sticky-nav-links {
            display: none;
          }
        }

        /* Massive Display Title */
        .cinema-headline-wrap {
          text-align: center;
          margin-top: clamp(10px, 1.8vh, 26px);
          margin-bottom: clamp(6px, 1vh, 16px);
          z-index: 20;
          position: relative;
          padding: 0 16px;
        }

        .cinema-headline-text {
          font-family: 'Inter Tight', 'Inter', -apple-system, sans-serif;
          font-weight: 900;
          font-size: clamp(24px, 4.3vw, 68px);
          line-height: 1.04;
          letter-spacing: clamp(0.5px, 0.1vw, 2px);
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
          padding: 0;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }

        .cinema-headline-row {
          display: block;
        }

        /* 3D Cylindrical Curved Carousel Viewport */
        .cinema-carousel-viewport {
          position: relative;
          width: 100%;
          height: clamp(260px, 34vw, 420px);
          perspective: clamp(800px, 110vw, 1400px);
          perspective-origin: 50% 50%;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          margin: clamp(8px, 1.5vh, 22px) 0;
        }

        .cinema-carousel-viewport:active {
          cursor: grabbing;
        }

        .cinema-carousel-cylinder {
          position: relative;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
        }

        /* Individual Cylindrical Card Box */
        .cinema-card-box {
          position: absolute;
          top: 0;
          left: 0;
          width: clamp(180px, 20vw, 290px);
          height: clamp(240px, 28vw, 380px);
          transform-style: preserve-3d;
          transform-origin: center center;
          will-change: transform, opacity;
          cursor: pointer;
          transition: filter 0.3s ease;
        }

        .cinema-card-box.is-center {
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 24px rgba(224, 67, 31, 0.22));
        }

        /* Inner Media Wrap: Luxury Translucent Glass */
        .cinema-card-media-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(12, 13, 18, 0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.6);
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .cinema-card-box:hover .cinema-card-media-wrap {
          border-color: rgba(255, 255, 255, 0.35);
          transform: scale(1.025);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.8), 0 0 30px rgba(224, 67, 31, 0.3);
        }

        .cinema-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Vignette on image */
        .cinema-card-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(9, 9, 11, 0.2) 0%,
            transparent 35%,
            rgba(9, 9, 11, 0.65) 65%,
            rgba(9, 9, 11, 0.95) 100%
          );
          pointer-events: none;
        }

        /* Card Overlay Content */
        .cinema-card-content {
          position: absolute;
          inset: 0;
          padding: clamp(14px, 1.4vw, 20px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 5;
          pointer-events: none;
        }

        .cinema-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cinema-card-tag {
          font-family: 'Geist Mono', monospace;
          font-size: clamp(9px, 0.75vw, 11px);
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #ff6636;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9);
        }

        .cinema-card-metric {
          font-family: 'Geist Mono', monospace;
          font-size: clamp(8px, 0.65vw, 10px);
          background: rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 99px;
          padding: 2px 7px;
          color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(6px);
        }

        .cinema-card-footer {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cinema-card-title {
          font-family: 'Inter Tight', sans-serif;
          font-size: clamp(14px, 1.25vw, 19px);
          font-weight: 800;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
          line-height: 1.15;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
        }

        .cinema-card-desc {
          font-size: clamp(10px, 0.8vw, 12px);
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.35;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .cinema-card-action-bar {
          margin-top: 6px;
        }

        .cinema-view-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Geist Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
          padding: 3px 10px;
          border-radius: 99px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transition: background 0.2s, border-color 0.2s;
        }

        .cinema-card-box:hover .cinema-view-pill {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* Editorial Manifesto / Subtitle */
        .cinema-manifesto-wrap {
          text-align: center;
          max-width: 680px;
          margin: clamp(6px, 1.2vh, 18px) auto 0;
          padding: 0 20px;
          z-index: 20;
          position: relative;
        }

        .cinema-manifesto-text {
          font-family: 'Geist Mono', 'Inter', monospace;
          font-size: clamp(10px, 0.8vw, 12.5px);
          font-weight: 500;
          line-height: 1.6;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.82);
          margin: 0;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9);
        }

        /* Stepper: 3..2..1..0..1..2..3 */
        .cinema-stepper-wrap {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: clamp(6px, 1.2vh, 14px) auto 0;
          z-index: 20;
        }

        .cinema-stepper-scale {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Geist Mono', monospace;
          font-size: clamp(11px, 0.8vw, 13px);
          letter-spacing: 0.22em;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 600;
        }

        .cinema-stepper-scale .step-num.zero {
          color: #ffffff;
          font-weight: 700;
        }

        .cinema-stepper-scale .step-dot {
          color: rgba(255, 255, 255, 0.3);
        }

        .cinema-stepper-marker {
          font-family: 'Geist Mono', monospace;
          font-size: 14px;
          font-weight: 700;
          color: #ff6636;
          line-height: 1;
          margin-top: -2px;
          transition: transform 0.08s linear;
        }

        /* Bottom Blend Gradient */
        .cinema-bottom-blend {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to bottom, transparent, var(--bg, #09090b));
          pointer-events: none;
          z-index: 5;
        }

        @media (max-width: 640px) {
          .cinema-headline-text {
            font-size: 34px;
          }
          .cinema-manifesto-text {
            font-size: 9.5px;
            letter-spacing: 0.08em;
          }
        }
      `})]})}function jl({onTransitionStart:e,onComplete:t,targetLogoRef:n}){let r=(0,b.useRef)(null),[i,a]=(0,b.useState)(!0),[o,s]=(0,b.useState)(`playing`),[c,l]=(0,b.useState)(``),[u,d]=(0,b.useState)({left:37,top:29,width:40,height:40}),f=(0,b.useRef)(!1),p=()=>{let e=r.current;if(e)try{for(e.pause(),e.removeAttribute(`src`);e.firstChild;)e.removeChild(e.firstChild);e.load()}catch{}},m=()=>{if(f.current)return;f.current=!0,e&&e();let r={left:37,top:24,width:48,height:48};if(n?.current){let e=n.current.getBoundingClientRect();e.width>0&&e.height>0&&(r={left:e.left,top:e.top,width:e.width||48,height:e.height||48})}d(r);let i=Math.min(window.innerWidth*.28,170),a=window.innerWidth/2-i/2,o=window.innerHeight/2-i/2,c=a-r.left,u=o-r.top,m=i/r.width;s(`flying`),l(`translate3d(${c.toFixed(1)}px, ${u.toFixed(1)}px, 0) scale(${m.toFixed(3)})`),requestAnimationFrame(()=>{requestAnimationFrame(()=>{l(`translate3d(0, 0, 0) scale(1)`)})}),setTimeout(()=>{p(),s(`done`),t&&t()},950)};return(0,b.useEffect)(()=>{if((()=>{try{if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return!0;let e=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(e&&(e.saveData||e.effectiveType===`2g`||e.effectiveType===`3g`)||navigator.deviceMemory&&navigator.deviceMemory<=2)return!0}catch{}return!1})()){m();return}let e=r.current;if(!e)return;e.defaultMuted=!0,e.muted=!0;let t=null,n=()=>{e.duration&&e.currentTime>=e.duration-.65?m():`requestVideoFrameCallback`in e&&(t=e.requestVideoFrameCallback(n))};`requestVideoFrameCallback`in e&&(t=e.requestVideoFrameCallback(n));let i=()=>{e.duration&&e.currentTime>=e.duration-.65&&m()},a=()=>{m()};e.addEventListener(`timeupdate`,i,{passive:!0}),e.addEventListener(`ended`,a,{passive:!0});let o=e.play();o!==void 0&&o.catch(()=>{setTimeout(m,3e3)});let s=setTimeout(()=>{f.current||m()},8e3);return()=>{clearTimeout(s),t!==null&&e&&`cancelVideoFrameCallback`in e&&e.cancelVideoFrameCallback(t),e&&(e.removeEventListener(`timeupdate`,i),e.removeEventListener(`ended`,a)),p()}},[]),o===`done`?null:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{id:`intro`,className:o===`flying`?`done`:``,role:`presentation`,style:{opacity:o===`flying`?0:1,pointerEvents:o===`flying`?`none`:`auto`,transition:`opacity 0.75s ease-out`},children:[(0,x.jsxs)(`video`,{ref:r,id:`iv`,autoPlay:!0,muted:i,playsInline:!0,preload:`auto`,poster:`/intro-poster.webp`,children:[(0,x.jsx)(`source`,{src:`/intro-video.mp4`,type:`video/mp4`}),(0,x.jsx)(`source`,{src:`/intro-video.webm`,type:`video/webm`})]}),o===`playing`&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`button`,{id:`snd`,type:`button`,onClick:()=>{r.current&&(r.current.muted=!r.current.muted,a(r.current.muted))},children:i?`Sound on`:`Sound off`}),(0,x.jsx)(`button`,{id:`skip`,type:`button`,onClick:()=>{m()},children:`Skip intro`})]})]}),o===`flying`&&(0,x.jsx)(`div`,{className:`flying-logo`,style:{position:`fixed`,left:`${u.left}px`,top:`${u.top}px`,width:`${u.width}px`,height:`${u.height}px`,transform:c,transformOrigin:`top left`,transition:`transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease`,zIndex:9999,pointerEvents:`none`,display:`flex`,alignItems:`center`,justifyContent:`center`,willChange:`transform`},children:(0,x.jsx)(`img`,{src:`/logo-icon.webp`,alt:`Kaivex`,style:{width:`100%`,height:`100%`,objectFit:`contain`,display:`block`,filter:`drop-shadow(0 0 16px rgba(224, 67, 31, 0.75))`}})})]})}var Ml=[{id:`services`,label:`Services`},{id:`work`,label:`Work`},{id:`products`,label:`Products`},{id:`about`,label:`About`},{id:`contact`,label:`Contact`}];function Nl({activeSection:e,onOpenModal:t,visible:n}){let[r,i]=(0,b.useState)(!1);(0,b.useEffect)(()=>{let e=()=>{window.innerWidth>820&&i(!1)};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let a=(e,t)=>{e.preventDefault(),i(!1);let n=document.getElementById(t);n&&n.scrollIntoView({behavior:`smooth`})};return(0,x.jsxs)(`header`,{className:`sticky-nav-bar ${n?`is-visible`:``}`,role:`banner`,"aria-label":`Main navigation`,children:[(0,x.jsxs)(`div`,{className:`sticky-nav-container`,children:[(0,x.jsxs)(`a`,{href:`#hero`,className:`sticky-nav-logo`,onClick:e=>{e.preventDefault(),i(!1),window.scrollTo({top:0,behavior:`smooth`})},"aria-label":`Kaivex Home`,children:[(0,x.jsx)(`img`,{src:`/logo-icon.webp`,alt:`Kaivex`,className:`sticky-logo-img`,width:`28`,height:`28`}),(0,x.jsx)(`span`,{className:`sticky-logo-text`,children:`KAIVEX`})]}),(0,x.jsx)(`nav`,{className:`sticky-nav-links`,"aria-label":`In-page sections`,children:Ml.map(t=>{let n=e===t.id;return(0,x.jsx)(`a`,{href:`#${t.id}`,className:`sticky-nav-link ${n?`active`:``}`,onClick:e=>a(e,t.id),"aria-current":n?`true`:void 0,children:t.label},t.id)})}),(0,x.jsxs)(`div`,{className:`sticky-nav-actions`,children:[(0,x.jsx)(`button`,{type:`button`,className:`pill-btn pill-btn-white sticky-cta-btn`,onClick:()=>t(`project`),children:`Start a project`}),(0,x.jsx)(`button`,{type:`button`,className:`mobile-nav-toggle`,onClick:()=>i(!r),"aria-expanded":r,"aria-label":`Toggle navigation menu`,children:(0,x.jsx)(`span`,{className:`hamburger-bar ${r?`open`:``}`})})]})]}),(0,x.jsx)(`div`,{className:`sticky-mobile-drawer ${r?`is-open`:``}`,children:(0,x.jsxs)(`nav`,{className:`mobile-nav-links`,"aria-label":`Mobile navigation`,children:[Ml.map(t=>{let n=e===t.id;return(0,x.jsx)(`a`,{href:`#${t.id}`,className:`mobile-nav-link ${n?`active`:``}`,onClick:e=>a(e,t.id),"aria-current":n?`true`:void 0,children:t.label},t.id)}),(0,x.jsx)(`button`,{type:`button`,className:`pill-btn pill-btn-white mobile-drawer-cta`,onClick:()=>{i(!1),t(`project`)},children:`Start a project`})]})})]})}function Pl(){if(typeof window>`u`)return`high`;try{let e=new URLSearchParams(window.location.search),t=(e.get(`perf`)||e.get(`tier`))?.toLowerCase(),n=t===`mid`?`medium`:t;if(n===`high`||n===`medium`||n===`low`)return sessionStorage.setItem(`kaivex_perf_tier`,n),document.documentElement.setAttribute(`data-perf`,n),n}catch{}try{let e=sessionStorage.getItem(`kaivex_perf_tier`),t=e===`mid`?`medium`:e;if(t===`high`||t===`medium`||t===`low`)return document.documentElement.setAttribute(`data-perf`,t),t}catch{}if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return`low`;let e=navigator;if(e?.connection?.saveData)return`low`;let t=e?.deviceMemory,n=e?.hardwareConcurrency;if(t&&t<=2||n&&n<=2)return`low`;try{let e=document.createElement(`canvas`);if(!(e.getContext(`webgl`)||e.getContext(`experimental-webgl`)))return`low`}catch{return`low`}return t&&t<=4||n&&n<=4?`medium`:`high`}function Fl(e=!0){let[t,n]=(0,b.useState)(Pl),r=(0,b.useRef)(t);r.current=t;let i=(0,b.useRef)(!1),a=(0,b.useRef)([]),o=(0,b.useCallback)(e=>{r.current=e,n(e),typeof document<`u`&&document.documentElement.setAttribute(`data-perf`,e);try{sessionStorage.setItem(`kaivex_perf_tier`,e)}catch{}},[]);return(0,b.useEffect)(()=>{typeof document<`u`&&document.documentElement.setAttribute(`data-perf`,t)},[t]),{tier:t,setTier:o,recordFrame:(0,b.useCallback)(t=>{if(!e||i.current||r.current===`low`)return;let n=a.current;if(n.push(t),n.length>=90){i.current=!0;let e=[...n].sort((e,t)=>e-t),t=e[Math.floor(e.length/2)];if(t>30)o(`low`);else if(t>20)r.current===`high`?o(`medium`):r.current===`medium`&&o(`low`);else try{sessionStorage.setItem(`kaivex_perf_tier`,r.current)}catch{}}},[e,o])}}var Il=(0,b.lazy)(()=>A(()=>import(`./ServicesSection-DDhAt2sQ.js`),[])),Ll=(0,b.lazy)(()=>A(()=>import(`./WorkSection-DfevfJDM.js`),__vite__mapDeps([0,1]))),Rl=(0,b.lazy)(()=>A(()=>import(`./ProductsSection-D9ji9-ts.js`),__vite__mapDeps([2,1]))),zl=(0,b.lazy)(()=>A(()=>import(`./AboutSection-npldCIqM.js`),__vite__mapDeps([3,1]))),Bl=(0,b.lazy)(()=>A(()=>import(`./ContactSection-qLfnPYx4.js`),__vite__mapDeps([4,1]))),Vl=(0,b.lazy)(()=>A(()=>import(`./CaseStudyModal-HbMf4QCd.js`),[])),Hl=(0,b.lazy)(()=>A(()=>import(`./ProjectModal-Balsq-u9.js`),[]));function Ul(){let[e,t]=(0,b.useState)(()=>{try{return!sessionStorage.getItem(`kaivex_intro_seen`)}catch{return!0}}),[n,r]=(0,b.useState)(()=>{try{return!!sessionStorage.getItem(`kaivex_intro_seen`)}catch{return!1}}),[i,a]=(0,b.useState)(()=>{try{return!!sessionStorage.getItem(`kaivex_intro_seen`)}catch{return!1}}),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(`project`),[u,d]=(0,b.useState)(null),[f,p]=(0,b.useState)(``),[m,h]=(0,b.useState)(null),[g,_]=(0,b.useState)(!1),[v,y]=(0,b.useState)(``);(0,b.useRef)(null);let S=(0,b.useRef)(null),{tier:C,recordFrame:w}=Fl(!e);(0,b.useEffect)(()=>{e||T()},[]),(0,b.useEffect)(()=>{let e=()=>{A(()=>import(`./ServicesSection-DDhAt2sQ.js`),[]),A(()=>import(`./WorkSection-DfevfJDM.js`),__vite__mapDeps([0,1])),A(()=>import(`./ProductsSection-D9ji9-ts.js`),__vite__mapDeps([2,1])),A(()=>import(`./AboutSection-npldCIqM.js`),__vite__mapDeps([3,1])),A(()=>import(`./ContactSection-qLfnPYx4.js`),__vite__mapDeps([4,1])),A(()=>import(`./CaseStudyModal-HbMf4QCd.js`),[])};typeof window<`u`&&`requestIdleCallback`in window?window.requestIdleCallback(e,{timeout:3e3}):setTimeout(e,1800)},[]);let T=()=>{if(xl())return;let e=Za.timeline({defaults:{ease:bl.power3Out}}),t=document.querySelector(`.hero-nav-bar`)||document.querySelector(`.cinema-top-nav`)||document.querySelector(`.imw-nav-bar`),n=document.querySelector(`.cinema-headline-text`)||document.querySelector(`.hero-shader-frame`)||document.querySelector(`.imw-headline`),r=document.querySelector(`.cinema-carousel-viewport`)||document.querySelector(`.imw-plane`),i=document.querySelector(`.cinema-manifesto-text`)||document.querySelector(`.imw-subheadline`),a=document.querySelector(`.cinema-stepper-wrap`),o=document.querySelector(`.cinema-bottom-hud`);t&&e.fromTo(t,{opacity:0,y:-24},{opacity:1,y:0,duration:.8},0),n&&e.fromTo(n,{opacity:0,y:32,scale:.96},{opacity:1,y:0,scale:1,duration:.95},.15),r&&e.fromTo(r,{opacity:0,scale:.92,y:36},{opacity:1,scale:1,y:0,duration:1.15,ease:bl.power2Out},.25),i&&e.fromTo(i,{opacity:0,y:16},{opacity:1,y:0,duration:.8},.45),a&&e.fromTo(a,{opacity:0,y:12},{opacity:1,y:0,duration:.6},.55),o&&e.fromTo(o,{opacity:0},{opacity:1,duration:.8},.65)},E=()=>{a(!0),T()},D=()=>{r(!0),t(!1);try{sessionStorage.setItem(`kaivex_intro_seen`,`true`)}catch{}},O=(e=`project`,t=null,n=``)=>{l(e),d(t),p(n),s(!0)};return(0,b.useEffect)(()=>{if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){document.querySelectorAll(`[data-reveal]`).forEach(e=>e.classList.add(`is-revealed`));return}let e=new WeakSet,t=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-revealed`),t.unobserve(e.target))})},{threshold:.12}),n=()=>{document.querySelectorAll(`[data-reveal]`).forEach(n=>{e.has(n)||(e.add(n),t.observe(n))})};n();let r=new MutationObserver(n);return r.observe(document.body,{childList:!0,subtree:!0}),()=>{t.disconnect(),r.disconnect()}},[]),(0,b.useEffect)(()=>{let e=document.getElementById(`hero`),t=[`services`,`work`,`products`,`about`,`contact`].map(e=>document.getElementById(e)).filter(Boolean),n=new IntersectionObserver(([e])=>{_(!e.isIntersecting||e.intersectionRatio<.2)},{threshold:[0,.2,1]});e&&n.observe(e);let r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&y(e.target.id)})},{rootMargin:`-20% 0px -55% 0px`,threshold:.1});return t.forEach(e=>r.observe(e)),()=>{n.disconnect(),r.disconnect()}},[]),(0,b.useEffect)(()=>{let e=!1,t=()=>document.querySelector(`.cta-get-started-btn`),n=()=>{e=!0},r=()=>{e=!1},i=t();i?.addEventListener(`mouseenter`,n),i?.addEventListener(`mouseleave`,r);let a=()=>{setTimeout(()=>{(e||document.activeElement&&document.activeElement.tagName===`IFRAME`)&&(O(`project`),window.focus(),document.activeElement&&document.activeElement.blur())},10)};return window.addEventListener(`blur`,a),()=>{i?.removeEventListener(`mouseenter`,n),i?.removeEventListener(`mouseleave`,r),window.removeEventListener(`blur`,a)}},[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`div`,{className:`site-background`,"aria-hidden":`true`,children:(0,x.jsx)(ee,{variant:`signal-particles`,mode:`dark`,speed:1,hue:0,saturation:1,brightness:1})}),(0,x.jsx)(Nl,{activeSection:v,onOpenModal:e=>O(e),visible:g}),e&&(0,x.jsx)(jl,{targetLogoRef:S,onTransitionStart:E,onComplete:D}),(0,x.jsx)(`section`,{id:`hero`,className:`hero-section`,children:(0,x.jsx)(Al,{onOpenCaseStudy:e=>h(e),onOpenModal:(e,t,n)=>O(e,t,n)})}),(0,x.jsxs)(b.Suspense,{fallback:null,children:[(0,x.jsx)(Il,{onOpenService:e=>O(`project`,e),onStartProject:()=>O(`project`)}),(0,x.jsx)(Ll,{onOpenCaseStudy:e=>h(e),onStartProject:()=>O(`project`)}),(0,x.jsx)(Rl,{onRequestDemo:e=>O(`project`,null,`Requesting demo for ${e}`),onCustomTalk:()=>O(`talk`)}),(0,x.jsx)(zl,{}),(0,x.jsx)(Bl,{onOpenModal:e=>O(e)}),(0,x.jsx)(Vl,{project:m,isOpen:!!m,onClose:()=>h(null),onStartSimilar:e=>O(`project`,e)})]}),o&&(0,x.jsx)(b.Suspense,{fallback:null,children:(0,x.jsx)(Hl,{isOpen:o,onClose:()=>{s(!1),d(null),p(``)},initialType:c,initialService:u,initialMessage:f})})]})}y.createRoot(document.getElementById(`root`)).render((0,x.jsx)(b.StrictMode,{children:(0,x.jsx)(Ul,{})}));export{wl as a,X as c,v as d,u as f,Cl as i,Za as l,Dl as n,bl as o,c as p,Tl as r,xl as s,El as t,te as u};