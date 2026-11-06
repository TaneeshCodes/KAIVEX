const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/threeui-effects-DNVKsbeh.js","assets/rolldown-runtime-XKyaHtl9.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,t as n}from"./rolldown-runtime-XKyaHtl9.js";var r=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function A(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var j=/\/+/g;function M(e,t){return typeof e==`object`&&e&&e.key!=null?A(``+e.key):t.toString(36)}function N(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function P(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,P(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+M(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(j,`$&/`)+`/`),P(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(j,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+M(a,u),c+=P(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+M(a,u++),c+=P(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return P(N(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function F(e,t,n){if(e==null)return e;var r=[],i=0;return P(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function I(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var L=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function R(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,L)}catch(e){L(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function z(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else R(z.bind(null,e))}var B={map:F,forEach:function(e,t,n){F(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return F(e,function(){t++}),t},toArray:function(e){return F(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=B,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=z,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=R,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),i=n(((e,t)=>{t.exports=r()})),a=t(i(),1),o=`<!DOCTYPE html>
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
`,s=n((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),c=n(((e,t)=>{t.exports=s()})),l=c(),u=`modulepreload`,d=function(e){return`/`+e},f={},p=function(e){return e.pathname.endsWith(`.css`)},m=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},h=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=d(t,n);let r=s(t),i=p(r);return m(f,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:u,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};(0,a.lazy)(()=>h(()=>import(`./threeui-effects-DNVKsbeh.js`).then(e=>e.t).then(e=>({default:e.ParticleWordmark})),__vite__mapDeps([0,1]))),(0,a.lazy)(()=>h(()=>import(`./threeui-effects-DNVKsbeh.js`).then(e=>e.t).then(e=>({default:e.AudioWordmark})),__vite__mapDeps([0,1]))),(0,a.lazy)(()=>h(()=>import(`./threeui-effects-DNVKsbeh.js`).then(e=>e.t).then(e=>({default:e.GalleryHeading})),__vite__mapDeps([0,1]))),(0,a.lazy)(()=>h(()=>import(`./threeui-effects-DNVKsbeh.js`).then(e=>e.t).then(e=>({default:e.ThreeUIIntro})),__vite__mapDeps([0,1])));var g={mode:`dark`,speed:1,spacing:5,dotSize:6,archHeight:.7,thickness:1,brightness:1,hue:0,saturation:1};function _(e){return e===`light`||e===1||e===`1`?`light`:`dark`}function v(e,t){let n=e.getContext(`2d`,{alpha:!1});if(!n)return null;let r=1,i=1,a=0;return{resize:(t,a)=>{r=Math.max(1,t),i=Math.max(1,a);let o=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(r*o),e.height=Math.round(i*o),n.setTransform(o,0,0,o,0,0)},render:()=>{let e=t(),o=_(e.mode)===`light`;n.fillStyle=o?`#eef1f6`:`#030303`,n.fillRect(0,0,r,i),a+=.015*e.speed;let s=r/2,c=i*.35,l=r*1.5,u=i*e.archHeight;n.globalCompositeOperation=o?`source-over`:`lighter`;for(let t=0;t<r;t+=e.spacing){let r=(t-s)/(l/2),d=c+r*r*u;for(let s=0;s<i;s+=e.spacing){let i=Math.abs(s-d),c=(140+(1-Math.abs(r))*80)*e.thickness;if(i>=c)continue;let l=1-i/c,u=Math.sin(t*.015+a),f=Math.cos(s*.02+a);if(l=l*.7+u*f*.3*l,l*=Math.max(0,1-Math.abs(r)**2.5),l<=.02)continue;let p,m,h;if(o){if(p=Math.min(255,48*l+70*l**3),m=Math.min(255,28*l+45*l**4),h=Math.min(255,120*l+110*l**2),l>.7){let e=(l-.7)*3.3;p=Math.min(255,p+90*e),m=Math.min(255,m+70*e),h=Math.min(255,h+110*e)}}else if(p=Math.min(255,60*l+100*l**3),m=Math.min(255,20*l+60*l**4),h=Math.min(255,120*l+135*l**2),l>.7){let e=(l-.7)*3.3;p=Math.min(255,p+150*e),m=Math.min(255,m+150*e),h=Math.min(255,h+150*e)}n.fillStyle=`rgb(${Math.floor(p*e.brightness)}, ${Math.floor(m*e.brightness)}, ${Math.floor(h*e.brightness)})`,n.fillRect(t,s,e.dotSize*l,e.dotSize*l)}}n.globalCompositeOperation=`source-over`}}}var y=(0,a.lazy)(()=>h(()=>Promise.resolve().then(()=>w).then(e=>({default:e.SignalParticles})),void 0));function b({className:e=``,...t}){let n=(0,a.useRef)(null),r=(0,a.useRef)(null),i=(0,a.useRef)({...g,...t});return i.current={...g,...t},(0,a.useEffect)(()=>{let e=n.current,t=r.current;if(!e||!t)return;let a=v(t,()=>i.current);if(!a)return;let o=0,s=!0,c=()=>{let t=e.getBoundingClientRect();a.resize(t.width,t.height),a.render()},l=()=>{a.render(),o=s&&!document.hidden?requestAnimationFrame(l):0},u=new ResizeObserver(c),d=new IntersectionObserver(([e])=>{s=e?.isIntersecting??!0,s&&!o&&(o=requestAnimationFrame(l)),!s&&o&&(cancelAnimationFrame(o),o=0)}),f=()=>{document.hidden&&o?(cancelAnimationFrame(o),o=0):!document.hidden&&s&&!o&&(o=requestAnimationFrame(l))};return u.observe(e),d.observe(e),document.addEventListener(`visibilitychange`,f),c(),o=requestAnimationFrame(l),()=>{o&&cancelAnimationFrame(o),u.disconnect(),d.disconnect(),document.removeEventListener(`visibilitychange`,f)}},[]),(0,l.jsx)(`div`,{ref:n,className:`threeui-background predictive-arc predictive-arc--${i.current.mode}${e?` ${e}`:``}`,"data-mode":i.current.mode,children:(0,l.jsx)(`canvas`,{ref:r,style:{filter:`hue-rotate(${i.current.hue}deg) saturate(${i.current.saturation})`}})})}function x(e){if(e.variant===`signal-particles`){let{variant:t,...n}=e;return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(`div`,{className:`threeui-background predictive-arc`}),children:(0,l.jsx)(y,{...n})})}let{variant:t,...n}=e;return(0,l.jsx)(b,{...n})}var S=`<!doctype html>
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
`;function C({className:e=``,style:t}){let n=(0,a.useRef)(null),[r,i]=(0,a.useState)(()=>typeof document>`u`||!document.hidden),[o,s]=(0,a.useState)(!0),[c,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=n.current;if(!e||typeof IntersectionObserver>`u`)return;let t=new IntersectionObserver(([e])=>{s(e?.isIntersecting??!0)},{rootMargin:`80px`});return t.observe(e),()=>t.disconnect()},[]),(0,a.useEffect)(()=>{if(typeof document>`u`)return;let e=()=>i(!document.hidden);return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]);let d=o&&r;return(0,a.useEffect)(()=>{u(!1)},[d]),(0,l.jsx)(`div`,{ref:n,className:`threeui-background get-started-button${e?` ${e}`:``}`,role:`group`,"aria-label":`Interactive liquid-chrome Get Started button`,"data-state":d?c?`ready`:`loading`:`paused`,style:{position:`relative`,overflow:`hidden`,background:`transparent`,pointerEvents:`auto`,...t},children:d?(0,l.jsx)(`iframe`,{title:`Get Started liquid-chrome button`,srcDoc:S,sandbox:`allow-scripts`,loading:`eager`,onLoad:()=>u(!0),style:{position:`absolute`,inset:0,display:`block`,width:`100%`,height:`100%`,border:0,background:`transparent`,opacity:+!!c,pointerEvents:c?`auto`:`none`,transition:`opacity 240ms ease-out`}}):null})}var w=e({SignalParticles:()=>T});function T({mode:e=`dark`,speed:t=1,size:n=1,length:r=1,opacity:i=1,hue:o=0,saturation:s=1,brightness:c=1,className:u=``,style:d={}}){let f=(0,a.useRef)(null),p=(0,a.useRef)(0);(0,a.useEffect)(()=>{let a=f.current;if(!a)return;let o=a.getContext(`2d`);if(!o)return;let s=0,c=0,l=0,u=Math.max(6,Math.round(16/Math.max(.35,r))),d=Number((1.5*n).toFixed(2)),m=()=>{s=a.width=a.offsetWidth,c=a.height=a.offsetHeight},h=new ResizeObserver(m);h.observe(a),m();let g=e===`light`,_=g?`#1d4ed8`:`#3b82f6`,v=g?`#5b21b6`:`#8b5cf6`;function y(){o.clearRect(0,0,s,c);let e=Math.floor(s/u),n=Math.floor(c/u),r=(s-e*u)/2,a=(c-n*u)/2;for(let t=0;t<=e;t++)for(let e=0;e<=n;e++){let n=r+t*u,s=a+e*u,c=t*.1,f=e*.1,p=Math.sin(c+l*.5)*Math.cos(f-l*.3)+Math.sin(c*.5-f*.5+l*.8);if(p>.1){o.beginPath(),o.arc(n,s,d,0,Math.PI*2);let r=Math.sin(t*12.34)*Math.cos(e*56.78);if(r>.98)o.fillStyle=_;else if(r<-.98)o.fillStyle=v;else{let e=Math.min(.6,(p-.1)*.8)*i;o.fillStyle=g?`rgba(36, 48, 68, ${e})`:`rgba(148, 163, 184, ${e})`}o.fill()}}l+=.02*t,document.hidden||(p.current=requestAnimationFrame(y))}p.current=requestAnimationFrame(y);let b=()=>{document.hidden?cancelAnimationFrame(p.current):(cancelAnimationFrame(p.current),p.current=requestAnimationFrame(y))};return document.addEventListener(`visibilitychange`,b,{passive:!0}),()=>{cancelAnimationFrame(p.current),h.disconnect(),document.removeEventListener(`visibilitychange`,b)}},[r,n,t,i,e]);let m=o===0&&s===1&&c===1?void 0:`hue-rotate(${o}deg) saturate(${s}) brightness(${c})`;return(0,l.jsx)(`div`,{className:`threeui-background signal-particles-mount ${u}`,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,background:e===`light`?`#eef1f6`:`#08090d`,overflow:`hidden`,pointerEvents:`none`,...d},children:(0,l.jsx)(`canvas`,{ref:f,style:{display:`block`,width:`100%`,height:`100%`,filter:m}})})}var E=`<!DOCTYPE html><html><body></body></html>
`,D=`<!DOCTYPE html><html><body></body></html>
`,O=`<!DOCTYPE html><html><body></body></html>
`,k=`<!DOCTYPE html><html><body></body></html>
`,A=`<!DOCTYPE html><html><body></body></html>
`,j=`<!DOCTYPE html><html><body></body></html>
`,M=`<!DOCTYPE html>
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
`,N=`<!DOCTYPE html><html><body></body></html>
`,P=`<!DOCTYPE html><html><body></body></html>
`,F=`<!DOCTYPE html><html><body></body></html>
`,I=`<!DOCTYPE html><html><body></body></html>
`,L=`<!DOCTYPE html><html><body></body></html>
`,R=`<!DOCTYPE html><html><body></body></html>
`,z=`<!DOCTYPE html><html><body></body></html>
`,B=`<!DOCTYPE html><html><body></body></html>
`,V=`<!DOCTYPE html><html><body></body></html>
`,H=`<!DOCTYPE html><html><body></body></html>
`,U=`<!DOCTYPE html><html><body></body></html>
`,W=`<!DOCTYPE html><html><body></body></html>
`,G=`<!DOCTYPE html><html><body></body></html>
`,K=`<!DOCTYPE html><html><body></body></html>
`,q=`<!DOCTYPE html><html><body></body></html>
`,J=`<!DOCTYPE html><html><body></body></html>
`,Y=`<!DOCTYPE html><html><body></body></html>
`,X=`<!DOCTYPE html><html><body></body></html>
`,Z=`<!DOCTYPE html><html><body></body></html>
`,Q=`<!DOCTYPE html><html><body></body></html>
`,$=`<!DOCTYPE html><html><body></body></html>
`,ee=`<!DOCTYPE html><html><body></body></html>
`;export{C as A,M as C,O as D,k as E,i as F,h as M,c as N,D as O,o as P,N as S,A as T,R as _,X as a,F as b,q as c,W as d,U as f,z as g,B as h,Z as i,x as j,E as k,K as l,V as m,$ as n,Y as o,H as p,Q as r,J as s,ee as t,G as u,L as v,j as w,P as x,I as y};