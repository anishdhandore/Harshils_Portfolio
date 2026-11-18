var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function ee(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function te(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+ae(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(ie,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+ae(s,l);c+=oe(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+ae(s,l++),c+=oe(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function T(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E={current:null},D={transition:null},ce={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:D,ReactCurrentOwner:C};function le(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:T,forEach:function(e,t,n){T(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return T(e,function(){t++}),t},toArray:function(e){return T(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,e.act=le,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=ee,e.createFactory=function(e){var t=ee.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},e.unstable_act=le,e.useCallback=function(e,t){return E.current.useCallback(e,t)},e.useContext=function(e){return E.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return E.current.useDeferredValue(e)},e.useEffect=function(e,t){return E.current.useEffect(e,t)},e.useId=function(){return E.current.useId()},e.useImperativeHandle=function(e,t,n){return E.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return E.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return E.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return E.current.useMemo(e,t)},e.useReducer=function(e,t,n){return E.current.useReducer(e,t,n)},e.useRef=function(e){return E.current.useRef(e)},e.useState=function(e){return E.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return E.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return E.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,T(x);else{var t=n(l);t!==null&&se(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&se(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,ee=5,te=-1;function ne(){return!(e.unstable_now()-te<ee)}function re(){if(C!==null){var t=e.unstable_now();te=t;var n=!0;try{n=C(!0,t)}finally{n?ie():(S=!1,C=null)}}else S=!1}var ie;if(typeof v==`function`)ie=function(){v(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){g(re,0)};function T(e){C=e,S||(S=!0,ie())}function se(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,T(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,se(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,T(x))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),ee=Symbol.for(`react.portal`),te=Symbol.for(`react.fragment`),ne=Symbol.for(`react.strict_mode`),re=Symbol.for(`react.profiler`),ie=Symbol.for(`react.provider`),ae=Symbol.for(`react.context`),oe=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),se=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),ce=Symbol.for(`react.offscreen`),le=Symbol.iterator;function ue(e){return typeof e!=`object`||!e?null:(e=le&&e[le]||e[`@@iterator`],typeof e==`function`?e:null)}var O=Object.assign,de;function fe(e){if(de===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);de=t&&t[1]||``}return`
`+de+e}var pe=!1;function me(e,t){if(!e||pe)return``;pe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{pe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?fe(e):``}function he(e){switch(e.tag){case 5:return fe(e.type);case 16:return fe(`Lazy`);case 13:return fe(`Suspense`);case 19:return fe(`SuspenseList`);case 0:case 2:case 15:return e=me(e.type,!1),e;case 11:return e=me(e.type.render,!1),e;case 1:return e=me(e.type,!0),e;default:return``}}function k(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case te:return`Fragment`;case ee:return`Portal`;case re:return`Profiler`;case ne:return`StrictMode`;case T:return`Suspense`;case se:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ae:return(e.displayName||`Context`)+`.Consumer`;case ie:return(e._context.displayName||`Context`)+`.Provider`;case oe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?k(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return k(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return k(t);case 8:return t===ne?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function _e(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ye(e){var t=ve(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function be(e){e._valueTracker||=ye(e)}function xe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ve(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Se(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ce(e,t){var n=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function we(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=_e(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Te(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function Ee(e,t){Te(e,t);var n=_e(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Oe(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Oe(e,t.type,_e(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function De(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Oe(e,t,n){(t!==`number`||Se(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var ke=Array.isArray;function Ae(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+_e(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function je(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return O({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Me(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(ke(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:_e(n)}}function Ne(e,t){var n=_e(t.value),r=_e(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Pe(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Fe(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Ie(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Fe(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Le,Re=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Le||=document.createElement(`div`),Le.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Le.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ze(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ve=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Be).forEach(function(e){Ve.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Be[t]=Be[e]})});function He(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Be.hasOwnProperty(e)&&Be[e]?(``+t).trim():t+`px`}function Ue(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=He(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var We=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(e,t){if(t){if(We[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ke(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var A=null;function qe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Je=null,Ye=null,Xe=null;function Ze(e){if(e=Ui(e)){if(typeof Je!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Gi(t),Je(e.stateNode,e.type,t))}}function Qe(e){Ye?Xe?Xe.push(e):Xe=[e]:Ye=e}function $e(){if(Ye){var e=Ye,t=Xe;if(Xe=Ye=null,Ze(e),t)for(e=0;e<t.length;e++)Ze(t[e])}}function et(e,t){return e(t)}function tt(){}var nt=!1;function rt(e,t,n){if(nt)return e(t,n);nt=!0;try{return et(e,t,n)}finally{nt=!1,(Ye!==null||Xe!==null)&&(tt(),$e())}}function it(e,t){var n=e.stateNode;if(n===null)return null;var i=Gi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var at=!1;if(c)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){at=!0}}),window.addEventListener(`test`,ot,ot),window.removeEventListener(`test`,ot,ot)}catch{at=!1}function st(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var ct=!1,lt=null,ut=!1,dt=null,ft={onError:function(e){ct=!0,lt=e}};function pt(e,t,n,r,i,a,o,s,c){ct=!1,lt=null,st.apply(ft,arguments)}function mt(e,t,n,i,a,o,s,c,l){if(pt.apply(this,arguments),ct){if(ct){var u=lt;ct=!1,lt=null}else throw Error(r(198));ut||(ut=!0,dt=u)}}function ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _t(e){if(ht(e)!==e)throw Error(r(188))}function vt(e){var t=e.alternate;if(!t){if(t=ht(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return _t(a),e;if(o===i)return _t(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function yt(e){return e=vt(e),e===null?null:bt(e)}function bt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bt(e);if(t!==null)return t;e=e.sibling}return null}var xt=n.unstable_scheduleCallback,St=n.unstable_cancelCallback,Ct=n.unstable_shouldYield,wt=n.unstable_requestPaint,j=n.unstable_now,Tt=n.unstable_getCurrentPriorityLevel,Et=n.unstable_ImmediatePriority,Dt=n.unstable_UserBlockingPriority,Ot=n.unstable_NormalPriority,kt=n.unstable_LowPriority,At=n.unstable_IdlePriority,jt=null,Mt=null;function Nt(e){if(Mt&&typeof Mt.onCommitFiberRoot==`function`)try{Mt.onCommitFiberRoot(jt,e,void 0,(e.current.flags&128)==128)}catch{}}var Pt=Math.clz32?Math.clz32:Lt,Ft=Math.log,It=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(Ft(e)/It|0)|0}var Rt=64,zt=4194304;function Bt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Bt(a))):r=Bt(s)}else o=n&~i,o===0?a!==0&&(r=Bt(a)):r=Bt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Pt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ht(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Wt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Gt(){var e=Rt;return Rt<<=1,!(Rt&4194240)&&(Rt=64),e}function Kt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function Jt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function Xt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zt,Qt,$t,en,tn,nn=!1,rn=[],an=null,on=null,sn=null,cn=new Map,ln=new Map,un=[],dn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function fn(e,t){switch(e){case`focusin`:case`focusout`:an=null;break;case`dragenter`:case`dragleave`:on=null;break;case`mouseover`:case`mouseout`:sn=null;break;case`pointerover`:case`pointerout`:cn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:ln.delete(t.pointerId)}}function pn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ui(t),t!==null&&Qt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function mn(e,t,n,r,i){switch(t){case`focusin`:return an=pn(an,e,t,n,r,i),!0;case`dragenter`:return on=pn(on,e,t,n,r,i),!0;case`mouseover`:return sn=pn(sn,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return cn.set(a,pn(cn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,ln.set(a,pn(ln.get(a)||null,e,t,n,r,i)),!0}return!1}function hn(e){var t=Hi(e.target);if(t!==null){var n=ht(t);if(n!==null){if(t=n.tag,t===13){if(t=gt(n),t!==null){e.blockedOn=t,tn(e.priority,function(){$t(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);A=r,n.target.dispatchEvent(r),A=null}else return t=Ui(n),t!==null&&Qt(t),e.blockedOn=n,!1;t.shift()}return!0}function _n(e,t,n){gn(e)&&n.delete(t)}function vn(){nn=!1,an!==null&&gn(an)&&(an=null),on!==null&&gn(on)&&(on=null),sn!==null&&gn(sn)&&(sn=null),cn.forEach(_n),ln.forEach(_n)}function yn(e,t){e.blockedOn===t&&(e.blockedOn=null,nn||(nn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,vn)))}function bn(e){function t(t){return yn(t,e)}if(0<rn.length){yn(rn[0],e);for(var n=1;n<rn.length;n++){var r=rn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&yn(an,e),on!==null&&yn(on,e),sn!==null&&yn(sn,e),cn.forEach(t),ln.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)hn(n),n.blockedOn===null&&un.shift()}var xn=C.ReactCurrentBatchConfig,Sn=!0;function Cn(e,t,n,r){var i=M,a=xn.transition;xn.transition=null;try{M=1,Tn(e,t,n,r)}finally{M=i,xn.transition=a}}function wn(e,t,n,r){var i=M,a=xn.transition;xn.transition=null;try{M=4,Tn(e,t,n,r)}finally{M=i,xn.transition=a}}function Tn(e,t,n,r){if(Sn){var i=Dn(e,t,n,r);if(i===null)hi(e,t,r,En,n),fn(e,r);else if(mn(i,e,t,n,r))r.stopPropagation();else if(fn(e,r),t&4&&-1<dn.indexOf(e)){for(;i!==null;){var a=Ui(i);if(a!==null&&Zt(a),a=Dn(e,t,n,r),a===null&&hi(e,t,r,En,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else hi(e,t,r,null,n)}}var En=null;function Dn(e,t,n,r){if(En=null,e=qe(r),e=Hi(e),e!==null){if(t=ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return En=e,null}function On(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(Tt()){case Et:return 1;case Dt:return 4;case Ot:case kt:return 16;case At:return 536870912;default:return 16}default:return 16}}var kn=null,An=null,jn=null;function Mn(){if(jn)return jn;var e,t=An,n=t.length,r,i=`value`in kn?kn.value:kn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return jn=i.slice(e,1<r?1-r:void 0)}function Nn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function Fn(){return!1}function In(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Pn:Fn,this.isPropagationStopped=Fn,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rn=In(Ln),zn=O({},Ln,{view:0,detail:0}),Bn=In(zn),Vn,Hn,N,Un=O({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==N&&(N&&e.type===`mousemove`?(Vn=e.screenX-N.screenX,Hn=e.screenY-N.screenY):Hn=Vn=0,N=e),Vn)},movementY:function(e){return`movementY`in e?e.movementY:Hn}}),Wn=In(Un),Gn=In(O({},Un,{dataTransfer:0})),Kn=In(O({},zn,{relatedTarget:0})),qn=In(O({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0})),Jn=In(O({},Ln,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Yn=In(O({},Ln,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=In(O({},zn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Nn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Nn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Nn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=In(O({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=In(O({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ir=In(O({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0})),ar=In(O({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),or=[9,13,27,32],sr=c&&`CompositionEvent`in window,cr=null;c&&`documentMode`in document&&(cr=document.documentMode);var lr=c&&`TextEvent`in window&&!cr,ur=c&&(!sr||cr&&8<cr&&11>=cr),dr=` `,fr=!1;function pr(e,t){switch(e){case`keyup`:return or.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function mr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var hr=!1;function gr(e,t){switch(e){case`compositionend`:return mr(t);case`keypress`:return t.which===32?(fr=!0,dr):null;case`textInput`:return e=t.data,e===dr&&fr?null:e;default:return null}}function _r(e,t){if(hr)return e===`compositionend`||!sr&&pr(e,t)?(e=Mn(),jn=An=kn=null,hr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ur&&t.locale!==`ko`?null:t.data;default:return null}}var vr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!vr[e.type]:t===`textarea`}function br(e,t,n,r){Qe(r),t=_i(t,`onChange`),0<t.length&&(n=new Rn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var xr=null,Sr=null;function Cr(e){ui(e,0)}function wr(e){if(xe(Wi(e)))return e}function Tr(e,t){if(e===`change`)return t}var Er=!1;if(c){var Dr;if(c){var Or=`oninput`in document;if(!Or){var kr=document.createElement(`div`);kr.setAttribute(`oninput`,`return;`),Or=typeof kr.oninput==`function`}Dr=Or}else Dr=!1;Er=Dr&&(!document.documentMode||9<document.documentMode)}function Ar(){xr&&(xr.detachEvent(`onpropertychange`,P),Sr=xr=null)}function P(e){if(e.propertyName===`value`&&wr(Sr)){var t=[];br(t,Sr,e,qe(e)),rt(Cr,t)}}function jr(e,t,n){e===`focusin`?(Ar(),xr=t,Sr=n,xr.attachEvent(`onpropertychange`,P)):e===`focusout`&&Ar()}function Mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return wr(Sr)}function F(e,t){if(e===`click`)return wr(t)}function Nr(e,t){if(e===`input`||e===`change`)return wr(t)}function Pr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Fr=typeof Object.is==`function`?Object.is:Pr;function Ir(e,t){if(Fr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Fr(e[i],t[i]))return!1}return!0}function Lr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rr(e,t){var n=Lr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Lr(n)}}function zr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Br(){for(var e=window,t=Se();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Se(e.document)}return t}function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Hr(e){var t=Br(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zr(n.ownerDocument.documentElement,n)){if(r!==null&&Vr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Rr(n,a);var o=Rr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ur=c&&`documentMode`in document&&11>=document.documentMode,Wr=null,Gr=null,Kr=null,qr=!1;function Jr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qr||Wr==null||Wr!==Se(r)||(r=Wr,`selectionStart`in r&&Vr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Ir(Kr,r)||(Kr=r,r=_i(Gr,`onSelect`),0<r.length&&(t=new Rn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Wr)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Xr={animationend:Yr(`Animation`,`AnimationEnd`),animationiteration:Yr(`Animation`,`AnimationIteration`),animationstart:Yr(`Animation`,`AnimationStart`),transitionend:Yr(`Transition`,`TransitionEnd`)},Zr={},Qr={};c&&(Qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),`TransitionEvent`in window||delete Xr.transitionend.transition);function $r(e){if(Zr[e])return Zr[e];if(!Xr[e])return e;var t=Xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qr)return Zr[e]=t[n];return e}var ei=$r(`animationend`),ti=$r(`animationiteration`),ni=$r(`animationstart`),I=$r(`transitionend`),ri=new Map,ii=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function ai(e,t){ri.set(e,t),o(t,[e])}for(var oi=0;oi<ii.length;oi++){var L=ii[oi];ai(L.toLowerCase(),`on`+(L[0].toUpperCase()+L.slice(1)))}ai(ei,`onAnimationEnd`),ai(ti,`onAnimationIteration`),ai(ni,`onAnimationStart`),ai(`dblclick`,`onDoubleClick`),ai(`focusin`,`onFocus`),ai(`focusout`,`onBlur`),ai(I,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var si=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ci=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(si));function li(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,mt(r,t,void 0,e),e.currentTarget=null}function ui(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;li(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;li(i,s,l),a=c}}}if(ut)throw e=dt,ut=!1,dt=null,e}function R(e,t){var n=t[zi];n===void 0&&(n=t[zi]=new Set);var r=e+`__bubble`;n.has(r)||(mi(t,e,2,!1),n.add(r))}function di(e,t,n){var r=0;t&&(r|=4),mi(n,e,r,t)}var fi=`_reactListening`+Math.random().toString(36).slice(2);function pi(e){if(!e[fi]){e[fi]=!0,i.forEach(function(t){t!==`selectionchange`&&(ci.has(t)||di(t,!1,e),di(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,di(`selectionchange`,!1,t))}}function mi(e,t,n,r){switch(On(t)){case 1:var i=Cn;break;case 4:i=wn;break;default:i=Tn}n=i.bind(null,t,n,e),i=void 0,!at||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function hi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Hi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}rt(function(){var r=a,i=qe(n),o=[];a:{var s=ri.get(e);if(s!==void 0){var c=Rn,l=e;switch(e){case`keypress`:if(Nn(n)===0)break a;case`keydown`:case`keyup`:c=tr;break;case`focusin`:l=`focus`,c=Kn;break;case`focusout`:l=`blur`,c=Kn;break;case`beforeblur`:case`afterblur`:c=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=rr;break;case ei:case ti:case ni:c=qn;break;case I:c=ir;break;case`scroll`:c=Bn;break;case`wheel`:c=ar;break;case`copy`:case`cut`:case`paste`:c=Jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=nr}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=it(p,f),h!=null&&u.push(gi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==A&&(l=n.relatedTarget||n.fromElement)&&(Hi(l)||l[Ri]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Hi(l):null,l!==null&&(d=ht(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Wn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=nr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Wi(c),m=l==null?s:Wi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Hi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=vi(m))p++;for(m=0,h=f;h;h=vi(h))m++;for(;0<p-m;)u=vi(u),p--;for(;0<m-p;)f=vi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=vi(u),f=vi(f)}u=null}else u=null;c!==null&&yi(o,s,c,u,!1),l!==null&&d!==null&&yi(o,d,l,u,!0)}}a:{if(s=r?Wi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Tr;else if(yr(s)){if(Er)g=Nr;else{g=Mr;var _=jr}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=F);if(g&&=g(e,r)){br(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Oe(s,`number`,s.value)}switch(_=r?Wi(r):window,e){case`focusin`:(yr(_)||_.contentEditable===`true`)&&(Wr=_,Gr=r,Kr=null);break;case`focusout`:Kr=Gr=Wr=null;break;case`mousedown`:qr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:qr=!1,Jr(o,n,i);break;case`selectionchange`:if(Ur)break;case`keydown`:case`keyup`:Jr(o,n,i)}var v;if(sr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else hr?pr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(ur&&n.locale!==`ko`&&(hr||y!==`onCompositionStart`?y===`onCompositionEnd`&&hr&&(v=Mn()):(kn=i,An=`value`in kn?kn.value:kn.textContent,hr=!0)),_=_i(r,y),0<_.length&&(y=new Yn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=mr(n),v!==null&&(y.data=v)))),(v=lr?gr(e,n):_r(e,n))&&(r=_i(r,`onBeforeInput`),0<r.length&&(i=new Yn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}ui(o,t)})}function gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _i(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=it(e,n),a!=null&&r.unshift(gi(e,a,i)),a=it(e,t),a!=null&&r.push(gi(e,a,i))),e=e.return}return r}function vi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=it(n,a),c!=null&&o.unshift(gi(n,c,s))):i||(c=it(n,a),c!=null&&o.push(gi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var bi=/\r\n?/g,xi=/\u0000|\uFFFD/g;function Si(e){return(typeof e==`string`?e:``+e).replace(bi,`
`).replace(xi,``)}function Ci(e,t,n){if(t=Si(t),Si(e)!==t&&n)throw Error(r(425))}function wi(){}var Ti=null,Ei=null;function Di(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var z=typeof setTimeout==`function`?setTimeout:void 0,Oi=typeof clearTimeout==`function`?clearTimeout:void 0,ki=typeof Promise==`function`?Promise:void 0,Ai=typeof queueMicrotask==`function`?queueMicrotask:ki===void 0?z:function(e){return ki.resolve(null).then(e).catch(ji)};function ji(e){setTimeout(function(){throw e})}function Mi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),bn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);bn(t)}function Ni(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Pi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Fi=Math.random().toString(36).slice(2),Ii=`__reactFiber$`+Fi,Li=`__reactProps$`+Fi,Ri=`__reactContainer$`+Fi,zi=`__reactEvents$`+Fi,Bi=`__reactListeners$`+Fi,Vi=`__reactHandles$`+Fi;function Hi(e){var t=e[Ii];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ri]||n[Ii]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pi(e);e!==null;){if(n=e[Ii])return n;e=Pi(e)}return t}e=n,n=e.parentNode}return null}function Ui(e){return e=e[Ii]||e[Ri],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Gi(e){return e[Li]||null}var Ki=[],qi=-1;function B(e){return{current:e}}function V(e){0>qi||(e.current=Ki[qi],Ki[qi]=null,qi--)}function H(e,t){qi++,Ki[qi]=e.current,e.current=t}var Ji={},Yi=B(Ji),Xi=B(!1),Zi=Ji;function Qi(e,t){var n=e.type.contextTypes;if(!n)return Ji;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $i(e){return e=e.childContextTypes,e!=null}function ea(){V(Xi),V(Yi)}function ta(e,t,n){if(Yi.current!==Ji)throw Error(r(168));H(Yi,t),H(Xi,n)}function na(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ge(e)||`Unknown`,a));return O({},n,i)}function ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ji,Zi=Yi.current,H(Yi,e),H(Xi,Xi.current),!0}function ia(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=na(e,t,Zi),i.__reactInternalMemoizedMergedChildContext=e,V(Xi),V(Yi),H(Yi,e)):V(Xi),H(Xi,n)}var aa=null,oa=!1,sa=!1;function ca(e){aa===null?aa=[e]:aa.push(e)}function la(e){oa=!0,ca(e)}function ua(){if(!sa&&aa!==null){sa=!0;var e=0,t=M;try{var n=aa;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}aa=null,oa=!1}catch(t){throw aa!==null&&(aa=aa.slice(e+1)),xt(Et,ua),t}finally{M=t,sa=!1}}return null}var da=[],fa=0,pa=null,ma=0,ha=[],ga=0,_a=null,va=1,ya=``;function ba(e,t){da[fa++]=ma,da[fa++]=pa,pa=e,ma=t}function xa(e,t,n){ha[ga++]=va,ha[ga++]=ya,ha[ga++]=_a,_a=e;var r=va;e=ya;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var a=32-Pt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,va=1<<32-Pt(t)+i|n<<i|r,ya=a+e}else va=1<<a|n<<i|r,ya=e}function Sa(e){e.return!==null&&(ba(e,1),xa(e,1,0))}function Ca(e){for(;e===pa;)pa=da[--fa],da[fa]=null,ma=da[--fa],da[fa]=null;for(;e===_a;)_a=ha[--ga],ha[ga]=null,ya=ha[--ga],ha[ga]=null,va=ha[--ga],ha[ga]=null}var wa=null,Ta=null,U=!1,Ea=null;function Da(e,t){var n=Xl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Oa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,wa=e,Ta=Ni(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,wa=e,Ta=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=_a===null?null:{id:va,overflow:ya},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,wa=e,Ta=null,!0);default:return!1}}function ka(e){return!!(e.mode&1)&&!(e.flags&128)}function Aa(e){if(U){var t=Ta;if(t){var n=t;if(!Oa(e,t)){if(ka(e))throw Error(r(418));t=Ni(n.nextSibling);var i=wa;t&&Oa(e,t)?Da(i,n):(e.flags=e.flags&-4097|2,U=!1,wa=e)}}else{if(ka(e))throw Error(r(418));e.flags=e.flags&-4097|2,U=!1,wa=e}}}function ja(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;wa=e}function Ma(e){if(e!==wa)return!1;if(!U)return ja(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Di(e.type,e.memoizedProps)),t&&=Ta){if(ka(e))throw Na(),Error(r(418));for(;t;)Da(e,t),t=Ni(t.nextSibling)}if(ja(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Ta=Ni(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Ta=null}}else Ta=wa?Ni(e.stateNode.nextSibling):null;return!0}function Na(){for(var e=Ta;e;)e=Ni(e.nextSibling)}function Pa(){Ta=wa=null,U=!1}function Fa(e){Ea===null?Ea=[e]:Ea.push(e)}var Ia=C.ReactCurrentBatchConfig;function La(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ra(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function za(e){var t=e._init;return t(e._payload)}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=$l(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ru(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===te?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&za(i)===t.type)?(r=a(t,n.props),r.ref=La(e,t,n),r.return=e,r):(r=eu(n.type,n.key,n.props,null,e.mode,r),r.ref=La(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=iu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=tu(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=ru(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=eu(t.type,t.key,t.props,null,e.mode,n),n.ref=La(e,null,t),n.return=e,n;case ee:return t=iu(t,e.mode,n),t.return=e,t;case D:var r=t._init;return f(e,r(t._payload),n)}if(ke(t)||ue(t))return t=tu(t,e.mode,n,null),t.return=e,t;Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case ee:return n.key===i?u(e,t,n,r):null;case D:return i=n._init,p(e,t,i(n._payload),r)}if(ke(n)||ue(n))return i===null?d(e,t,n,r,null):null;Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ee:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:var a=r._init;return m(e,t,n,a(r._payload),i)}if(ke(r)||ue(r))return e=e.get(n)||null,d(t,e,r,i,null);Ra(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),U&&ba(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&ba(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),U&&ba(r,h),l}function g(a,s,c,l){var u=ue(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&ba(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&ba(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&ba(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===te&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===te){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===D&&za(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=La(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===te?(r=tu(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=eu(i.type,i.key,i.props,null,e.mode,o),o.ref=La(e,r,i),o.return=e,e=o)}return s(e);case ee:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=iu(i,e.mode,o),r.return=e,e=r}return s(e);case D:return l=i._init,_(e,r,l(i._payload),o)}if(ke(i))return h(e,r,i,o);if(ue(i))return g(e,r,i,o);Ra(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=ru(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Va=Ba(!0),Ha=Ba(!1),Ua=B(null),Wa=null,Ga=null,Ka=null;function qa(){Ka=Ga=Wa=null}function Ja(e){var t=Ua.current;V(Ua),e._currentValue=t}function Ya(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Xa(e,t){Wa=e,Ka=Ga=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Rs=!0),e.firstContext=null)}function Za(e){var t=e._currentValue;if(Ka!==e){if(e={context:e,memoizedValue:t,next:null},Ga===null){if(Wa===null)throw Error(r(308));Ga=e,Wa.dependencies={lanes:0,firstContext:e}}else Ga=Ga.next=e}return t}var Qa=null;function $a(e){Qa===null?Qa=[e]:Qa.push(e)}function eo(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,$a(t)):(n.next=i.next,i.next=n),t.interleaved=n,to(e,r)}function to(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var no=!1;function ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ao(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function oo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,to(e,n)}return i=r.interleaved,i===null?(t.next=t,$a(r)):(t.next=i.next,i.next=t),r.interleaved=t,to(e,n)}function so(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yt(e,n)}}function co(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function lo(e,t,n,r){var i=e.updateQueue;no=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=O({},d,f);break a;case 2:no=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);el|=o,e.lanes=o,e.memoizedState=d}}function uo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var fo={},po=B(fo),mo=B(fo),ho=B(fo);function go(e){if(e===fo)throw Error(r(174));return e}function _o(e,t){switch(H(ho,t),H(mo,e),H(po,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ie(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ie(t,e)}V(po),H(po,t)}function vo(){V(po),V(mo),V(ho)}function yo(e){go(ho.current);var t=go(po.current),n=Ie(t,e.type);t!==n&&(H(mo,e),H(po,n))}function bo(e){mo.current===e&&(V(po),V(mo))}var W=B(0);function xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var So=[];function Co(){for(var e=0;e<So.length;e++)So[e]._workInProgressVersionPrimary=null;So.length=0}var wo=C.ReactCurrentDispatcher,To=C.ReactCurrentBatchConfig,Eo=0,G=null,Do=null,Oo=null,ko=!1,Ao=!1,jo=0,Mo=0;function No(){throw Error(r(321))}function Po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fr(e[n],t[n]))return!1;return!0}function Fo(e,t,n,i,a,o){if(Eo=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wo.current=e===null||e.memoizedState===null?vs:ys,e=n(i,a),Ao){o=0;do{if(Ao=!1,jo=0,25<=o)throw Error(r(301));o+=1,Oo=Do=null,t.updateQueue=null,wo.current=bs,e=n(i,a)}while(Ao)}if(wo.current=_s,t=Do!==null&&Do.next!==null,Eo=0,Oo=Do=G=null,ko=!1,t)throw Error(r(300));return e}function Io(){var e=jo!==0;return jo=0,e}function Lo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oo===null?G.memoizedState=Oo=e:Oo=Oo.next=e,Oo}function Ro(){if(Do===null){var e=G.alternate;e=e===null?null:e.memoizedState}else e=Do.next;var t=Oo===null?G.memoizedState:Oo.next;if(t!==null)Oo=t,Do=e;else{if(e===null)throw Error(r(310));Do=e,e={memoizedState:Do.memoizedState,baseState:Do.baseState,baseQueue:Do.baseQueue,queue:Do.queue,next:null},Oo===null?G.memoizedState=Oo=e:Oo=Oo.next=e}return Oo}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){var t=Ro(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=Do,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Eo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,G.lanes|=d,el|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Fr(i,t.memoizedState)||(Rs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,G.lanes|=o,el|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vo(e){var t=Ro(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Fr(o,t.memoizedState)||(Rs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Ho(){}function Uo(e,t){var n=G,i=Ro(),a=t(),o=!Fr(i.memoizedState,a);if(o&&(i.memoizedState=a,Rs=!0),i=i.queue,ts(Ko.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Oo!==null&&Oo.memoizedState.tag&1){if(n.flags|=2048,Xo(9,Go.bind(null,n,i,a,t),void 0,null),qc===null)throw Error(r(349));Eo&30||Wo(n,t,a)}return a}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fr(e,n)}catch{return!0}}function Jo(e){var t=to(e,1);t!==null&&yl(t,e,1,-1)}function Yo(e){var t=Lo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t.queue=e,e=e.dispatch=ps.bind(null,G,e),[t.memoizedState,e]}function Xo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zo(){return Ro().memoizedState}function Qo(e,t,n,r){var i=Lo();G.flags|=e,i.memoizedState=Xo(1|t,n,void 0,r===void 0?null:r)}function $o(e,t,n,r){var i=Ro();r=r===void 0?null:r;var a=void 0;if(Do!==null){var o=Do.memoizedState;if(a=o.destroy,r!==null&&Po(r,o.deps)){i.memoizedState=Xo(t,n,a,r);return}}G.flags|=e,i.memoizedState=Xo(1|t,n,a,r)}function es(e,t){return Qo(8390656,8,e,t)}function ts(e,t){return $o(2048,8,e,t)}function ns(e,t){return $o(4,2,e,t)}function rs(e,t){return $o(4,4,e,t)}function is(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function as(e,t,n){return n=n==null?null:n.concat([e]),$o(4,4,is.bind(null,t,e),n)}function os(){}function ss(e,t){var n=Ro();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Po(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cs(e,t){var n=Ro();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Po(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ls(e,t,n){return Eo&21?(Fr(n,t)||(n=Gt(),G.lanes|=n,el|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Rs=!0),e.memoizedState=n)}function us(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=To.transition;To.transition={};try{e(!1),t()}finally{M=n,To.transition=r}}function ds(){return Ro().memoizedState}function fs(e,t,n){var r=vl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ms(e))hs(t,n);else if(n=eo(e,t,n,r),n!==null){var i=_l();yl(n,e,r,i),gs(n,t,r)}}function ps(e,t,n){var r=vl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ms(e))hs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Fr(s,o)){var c=t.interleaved;c===null?(i.next=i,$a(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=eo(e,t,i,r),n!==null&&(i=_l(),yl(n,e,r,i),gs(n,t,r))}}function ms(e){var t=e.alternate;return e===G||t!==null&&t===G}function hs(e,t){Ao=ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yt(e,n)}}var _s={readContext:Za,useCallback:No,useContext:No,useEffect:No,useImperativeHandle:No,useInsertionEffect:No,useLayoutEffect:No,useMemo:No,useReducer:No,useRef:No,useState:No,useDebugValue:No,useDeferredValue:No,useTransition:No,useMutableSource:No,useSyncExternalStore:No,useId:No,unstable_isNewReconciler:!1},vs={readContext:Za,useCallback:function(e,t){return Lo().memoizedState=[e,t===void 0?null:t],e},useContext:Za,useEffect:es,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Qo(4194308,4,is.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qo(4,2,e,t)},useMemo:function(e,t){var n=Lo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fs.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Lo();return e={current:e},t.memoizedState=e},useState:Yo,useDebugValue:os,useDeferredValue:function(e){return Lo().memoizedState=e},useTransition:function(){var e=Yo(!1),t=e[0];return e=us.bind(null,e[1]),Lo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=G,a=Lo();if(U){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),qc===null)throw Error(r(349));Eo&30||Wo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,es(Ko.bind(null,i,o,e),[e]),i.flags|=2048,Xo(9,Go.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Lo(),t=qc.identifierPrefix;if(U){var n=ya,r=va;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=jo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Mo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},ys={readContext:Za,useCallback:ss,useContext:Za,useEffect:ts,useImperativeHandle:as,useInsertionEffect:ns,useLayoutEffect:rs,useMemo:cs,useReducer:Bo,useRef:Zo,useState:function(){return Bo(zo)},useDebugValue:os,useDeferredValue:function(e){return ls(Ro(),Do.memoizedState,e)},useTransition:function(){return[Bo(zo)[0],Ro().memoizedState]},useMutableSource:Ho,useSyncExternalStore:Uo,useId:ds,unstable_isNewReconciler:!1},bs={readContext:Za,useCallback:ss,useContext:Za,useEffect:ts,useImperativeHandle:as,useInsertionEffect:ns,useLayoutEffect:rs,useMemo:cs,useReducer:Vo,useRef:Zo,useState:function(){return Vo(zo)},useDebugValue:os,useDeferredValue:function(e){var t=Ro();return Do===null?t.memoizedState=e:ls(t,Do.memoizedState,e)},useTransition:function(){return[Vo(zo)[0],Ro().memoizedState]},useMutableSource:Ho,useSyncExternalStore:Uo,useId:ds,unstable_isNewReconciler:!1};function xs(e,t){if(e&&e.defaultProps){for(var n in t=O({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cs={isMounted:function(e){return(e=e._reactInternals)?ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_l(),i=vl(e),a=ao(r,i);a.payload=t,n!=null&&(a.callback=n),t=oo(e,a,i),t!==null&&(yl(t,e,i,r),so(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_l(),i=vl(e),a=ao(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=oo(e,a,i),t!==null&&(yl(t,e,i,r),so(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_l(),r=vl(e),i=ao(n,r);i.tag=2,t!=null&&(i.callback=t),t=oo(e,i,r),t!==null&&(yl(t,e,r,n),so(t,e,r))}};function ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(i,a):!0}function Ts(e,t,n){var r=!1,i=Ji,a=t.contextType;return typeof a==`object`&&a?a=Za(a):(i=$i(t)?Zi:Yi.current,r=t.contextTypes,a=(r=r!=null)?Qi(e,i):Ji),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Es(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cs.enqueueReplaceState(t,t.state,null)}function Ds(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ro(e);var a=t.contextType;typeof a==`object`&&a?i.context=Za(a):(a=$i(t)?Zi:Yi.current,i.context=Qi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(Ss(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Cs.enqueueReplaceState(i,i.state,null),lo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Os(e,t){try{var n=``,r=t;do n+=he(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function ks(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function As(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var js=typeof WeakMap==`function`?WeakMap:Map;function Ms(e,t,n){n=ao(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,cl=r),As(e,t)},n}function Ns(e,t,n){n=ao(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){As(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){As(e,t),typeof r!=`function`&&(ll===null?ll=new Set([this]):ll.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Ps(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new js;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ul.bind(null,e,t,n),t.then(e,e))}function Fs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Is(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ao(-1,1),t.tag=2,oo(n,t,1))),n.lanes|=1),e)}var Ls=C.ReactCurrentOwner,Rs=!1;function zs(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function Bs(e,t,n,r,i){n=n.render;var a=t.ref;return Xa(t,i),r=Fo(e,t,n,r,a,i),n=Io(),e!==null&&!Rs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,oc(e,t,i)):(U&&n&&Sa(t),t.flags|=1,zs(e,t,r,i),t.child)}function Vs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Zl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Hs(e,t,a,r,i)):(e=eu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ir:n,n(o,r)&&e.ref===t.ref)return oc(e,t,i)}return t.flags|=1,e=$l(a,r),e.ref=t.ref,e.return=t,t.child=e}function Hs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ir(a,r)&&e.ref===t.ref){if(Rs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Rs=!0);else return t.lanes=e.lanes,oc(e,t,i)}}return Gs(e,t,n,r,i)}function Us(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Zc,Xc),Xc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Zc,Xc),Xc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,H(Zc,Xc),Xc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),H(Zc,Xc),Xc|=r;return zs(e,t,i,n),t.child}function Ws(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gs(e,t,n,r,i){var a=$i(n)?Zi:Yi.current;return a=Qi(t,a),Xa(t,i),n=Fo(e,t,n,r,a,i),r=Io(),e!==null&&!Rs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,oc(e,t,i)):(U&&r&&Sa(t),t.flags|=1,zs(e,t,n,i),t.child)}function Ks(e,t,n,r,i){if($i(n)){var a=!0;ra(t)}else a=!1;if(Xa(t,i),t.stateNode===null)ac(e,t),Ts(t,n,r),Ds(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Za(l):(l=$i(n)?Zi:Yi.current,l=Qi(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Es(t,o,r,l),no=!1;var f=t.memoizedState;o.state=f,lo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Xi.current||no?(typeof u==`function`&&(Ss(t,n,u,r),c=t.memoizedState),(s=no||ws(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,io(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:xs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Za(c):(c=$i(n)?Zi:Yi.current,c=Qi(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Es(t,o,r,c),no=!1,f=t.memoizedState,o.state=f,lo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Xi.current||no?(typeof p==`function`&&(Ss(t,n,p,r),m=t.memoizedState),(l=no||ws(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return qs(e,t,n,r,a,i)}function qs(e,t,n,r,i,a){Ws(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&ia(t,n,!1),oc(e,t,a);r=t.stateNode,Ls.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Va(t,e.child,null,a),t.child=Va(t,null,s,a)):zs(e,t,s,a),t.memoizedState=r.state,i&&ia(t,n,!0),t.child}function Js(e){var t=e.stateNode;t.pendingContext?ta(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ta(e,t.context,!1),_o(e,t.containerInfo)}function Ys(e,t,n,r,i){return Pa(),Fa(i),t.flags|=256,zs(e,t,n,r),t.child}var Xs={dehydrated:null,treeContext:null,retryLane:0};function Zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qs(e,t,n){var r=t.pendingProps,i=W.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(W,i&1),e===null)return Aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:1073741824:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=nu(o,r,0,null),e=tu(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Zs(n),t.memoizedState=Xs,e):$s(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return tc(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=$l(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=tu(a,o,n,null),a.flags|=2):a=$l(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Zs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Xs,r}return a=e.child,e=a.sibling,r=$l(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $s(e,t){return t=nu({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function ec(e,t,n,r){return r!==null&&Fa(r),Va(t,e.child,null,n),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tc(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=ks(Error(r(422))),ec(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=nu({mode:`visible`,children:i.children},a,0,null),o=tu(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Va(t,e.child,null,s),t.child.memoizedState=Zs(s),t.memoizedState=Xs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return ec(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=ks(o,i,void 0),ec(e,t,s,i)}if(c=(s&e.childLanes)!==0,Rs||c){if(i=qc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,to(e,a),yl(i,e,a,-1))}return Nl(),i=ks(Error(r(421))),ec(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Gl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ta=Ni(a.nextSibling),wa=t,U=!0,Ea=null,e!==null&&(ha[ga++]=va,ha[ga++]=ya,ha[ga++]=_a,va=e.id,ya=e.overflow,_a=t),t=$s(t,i.children),t.flags|=4096,t)}function nc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ya(e.return,t,n)}function rc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ic(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(zs(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nc(e,n,t);else if(e.tag===19)nc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(W,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&xo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rc(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&xo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rc(t,!0,n,null,a);break;case`together`:rc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ac(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function oc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),el|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=$l(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$l(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sc(e,t,n){switch(t.tag){case 3:Js(t),Pa();break;case 5:yo(t);break;case 1:$i(t.type)&&ra(t);break;case 4:_o(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Ua,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(H(W,W.current&1),e=oc(e,t,n),e===null?null:e.sibling):Qs(e,t,n):(H(W,W.current&1),t.flags|=128,null);H(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ic(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Us(e,t,n)}return oc(e,t,n)}var cc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},lc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,go(po.current);var o=null;switch(n){case`input`:i=Ce(e,i),r=Ce(e,r),o=[];break;case`select`:i=O({},i,{value:void 0}),r=O({},r,{value:void 0}),o=[];break;case`textarea`:i=je(e,i),r=je(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=wi)}Ge(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&R(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},uc=function(e,t,n,r){n!==r&&(t.flags|=4)};function dc(e,t){if(!U)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pc(e,t,n){var i=t.pendingProps;switch(Ca(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fc(t),null;case 1:return $i(t.type)&&ea(),fc(t),null;case 3:return i=t.stateNode,vo(),V(Xi),V(Yi),Co(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ma(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ea!==null&&(Cl(Ea),Ea=null))),fc(t),null;case 5:bo(t);var o=go(ho.current);if(n=t.type,e!==null&&t.stateNode!=null)lc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return fc(t),null}if(e=go(po.current),Ma(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Ii]=t,i[Li]=s,e=!!(t.mode&1),n){case`dialog`:R(`cancel`,i),R(`close`,i);break;case`iframe`:case`object`:case`embed`:R(`load`,i);break;case`video`:case`audio`:for(o=0;o<si.length;o++)R(si[o],i);break;case`source`:R(`error`,i);break;case`img`:case`image`:case`link`:R(`error`,i),R(`load`,i);break;case`details`:R(`toggle`,i);break;case`input`:we(i,s),R(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},R(`invalid`,i);break;case`textarea`:Me(i,s),R(`invalid`,i)}for(var c in Ge(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ci(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ci(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&R(`scroll`,i)}switch(n){case`input`:be(i),De(i,s,!0);break;case`textarea`:be(i),Pe(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=wi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Fe(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Ii]=t,e[Li]=i,cc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ke(n,i),n){case`dialog`:R(`cancel`,e),R(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:R(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<si.length;o++)R(si[o],e);o=i;break;case`source`:R(`error`,e),o=i;break;case`img`:case`image`:case`link`:R(`error`,e),R(`load`,e),o=i;break;case`details`:R(`toggle`,e),o=i;break;case`input`:we(e,i),o=Ce(e,i),R(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=O({},i,{value:void 0}),R(`invalid`,e);break;case`textarea`:Me(e,i),o=je(e,i),R(`invalid`,e);break;default:o=i}for(s in Ge(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ue(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Re(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&ze(e,u):typeof u==`number`&&ze(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&R(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:be(e),De(e,i,!1);break;case`textarea`:be(e),Pe(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+_e(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Ae(e,!!i.multiple,i.defaultValue,!0):Ae(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=wi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fc(t),null;case 6:if(e&&t.stateNode!=null)uc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=go(ho.current),go(po.current),Ma(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ii]=t,(s=i.nodeValue!==n)&&(e=wa,e!==null))switch(e.tag){case 3:Ci(i.nodeValue,n,!!(e.mode&1));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ci(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ii]=t,t.stateNode=i}return fc(t),null;case 13:if(V(W),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&Ta!==null&&t.mode&1&&!(t.flags&128))Na(),Pa(),t.flags|=98560,s=!1;else if(s=Ma(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Ii]=t}else Pa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fc(t),s=!1}else Ea!==null&&(Cl(Ea),Ea=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?Qc===0&&(Qc=3):Nl())),t.updateQueue!==null&&(t.flags|=4),fc(t),null);case 4:return vo(),e===null&&pi(t.stateNode.containerInfo),fc(t),null;case 10:return Ja(t.type._context),fc(t),null;case 17:return $i(t.type)&&ea(),fc(t),null;case 19:if(V(W),s=t.memoizedState,s===null)return fc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)dc(s,!1);else{if(Qc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=xo(e),c!==null){for(t.flags|=128,dc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(W,W.current&1|2),t.child}e=e.sibling}s.tail!==null&&j()>al&&(t.flags|=128,i=!0,dc(s,!1),t.lanes=4194304)}}else{if(!i){if(e=xo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!U)return fc(t),null}else 2*j()-s.renderingStartTime>al&&n!==1073741824&&(t.flags|=128,i=!0,dc(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(fc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=j(),t.sibling=null,n=W.current,H(W,i?n&1|2:n&1),t);case 22:case 23:return kl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Xc&1073741824&&(fc(t),t.subtreeFlags&6&&(t.flags|=8192)):fc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function mc(e,t){switch(Ca(t),t.tag){case 1:return $i(t.type)&&ea(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vo(),V(Xi),V(Yi),Co(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bo(t),null;case 13:if(V(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(W),null;case 4:return vo(),null;case 10:return Ja(t.type._context),null;case 22:case 23:return kl(),null;case 24:return null;default:return null}}var hc=!1,gc=!1,_c=typeof WeakSet==`function`?WeakSet:Set,K=null;function vc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){Y(e,t,n)}else n.current=null}}function yc(e,t,n){try{n()}catch(n){Y(e,t,n)}}var bc=!1;function xc(e,t){if(Ti=Sn,e=Br(),Vr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Ei={focusedElem:e,selectionRange:n},Sn=!1,K=t;K!==null;)if(t=K,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:xs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Y(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return h=bc,bc=!1,h}function Sc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&yc(t,n,a)}i=i.next}while(i!==r)}}function Cc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Tc(e){var t=e.alternate;t!==null&&(e.alternate=null,Tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ii],delete t[Li],delete t[zi],delete t[Bi],delete t[Vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function Dc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wi));else if(r!==4&&(e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}function kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}var Ac=null,jc=!1;function Mc(e,t,n){for(n=n.child;n!==null;)Nc(e,t,n),n=n.sibling}function Nc(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount==`function`)try{Mt.onCommitFiberUnmount(jt,n)}catch{}switch(n.tag){case 5:gc||vc(n,t);case 6:var r=Ac,i=jc;Ac=null,Mc(e,t,n),Ac=r,jc=i,Ac!==null&&(jc?(e=Ac,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ac.removeChild(n.stateNode));break;case 18:Ac!==null&&(jc?(e=Ac,n=n.stateNode,e.nodeType===8?Mi(e.parentNode,n):e.nodeType===1&&Mi(e,n),bn(e)):Mi(Ac,n.stateNode));break;case 4:r=Ac,i=jc,Ac=n.stateNode.containerInfo,jc=!0,Mc(e,t,n),Ac=r,jc=i;break;case 0:case 11:case 14:case 15:if(!gc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&yc(n,t,o),i=i.next}while(i!==r)}Mc(e,t,n);break;case 1:if(!gc&&(vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Y(n,t,e)}Mc(e,t,n);break;case 21:Mc(e,t,n);break;case 22:n.mode&1?(gc=(r=gc)||n.memoizedState!==null,Mc(e,t,n),gc=r):Mc(e,t,n);break;default:Mc(e,t,n)}}function Pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _c),t.forEach(function(t){var r=Kl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Fc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Ac=c.stateNode,jc=!1;break a;case 3:Ac=c.stateNode.containerInfo,jc=!0;break a;case 4:Ac=c.stateNode.containerInfo,jc=!0;break a}c=c.return}if(Ac===null)throw Error(r(160));Nc(o,s,a),Ac=null,jc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Y(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ic(t,e),t=t.sibling}function Ic(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fc(t,e),Lc(e),i&4){try{Sc(3,e,e.return),Cc(3,e)}catch(t){Y(e,e.return,t)}try{Sc(5,e,e.return)}catch(t){Y(e,e.return,t)}}break;case 1:Fc(t,e),Lc(e),i&512&&n!==null&&vc(n,n.return);break;case 5:if(Fc(t,e),Lc(e),i&512&&n!==null&&vc(n,n.return),e.flags&32){var a=e.stateNode;try{ze(a,``)}catch(t){Y(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Te(a,o),Ke(c,s);var u=Ke(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ue(a,f):d===`dangerouslySetInnerHTML`?Re(a,f):d===`children`?ze(a,f):S(a,d,f,u)}switch(c){case`input`:Ee(a,o);break;case`textarea`:Ne(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Ae(a,!!o.multiple,o.multiple?[]:``,!1):Ae(a,!!o.multiple,o.defaultValue,!0)):Ae(a,!!o.multiple,m,!1)}a[Li]=o}catch(t){Y(e,e.return,t)}}break;case 6:if(Fc(t,e),Lc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Y(e,e.return,t)}}break;case 3:if(Fc(t,e),Lc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(t){Y(e,e.return,t)}break;case 4:Fc(t,e),Lc(e);break;case 13:Fc(t,e),Lc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(il=j())),i&4&&Pc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(gc=(u=gc)||d,Fc(t,e),gc=u):Fc(t,e),Lc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(K=e,d=e.child;d!==null;){for(f=K=d;K!==null;){switch(p=K,m=p.child,p.tag){case 0:case 11:case 14:case 15:Sc(4,p,p.return);break;case 1:vc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Y(i,n,e)}}break;case 5:vc(p,p.return);break;case 22:if(p.memoizedState!==null){Vc(f);continue}}m===null?Vc(f):(m.return=p,K=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=He(`display`,s))}catch(t){Y(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Y(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fc(t,e),Lc(e),i&4&&Pc(e);break;case 21:break;default:Fc(t,e),Lc(e)}}function Lc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Ec(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(ze(a,``),i.flags&=-33),kc(e,Dc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Oc(e,Dc(e),o);break;default:throw Error(r(161))}}catch(t){Y(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rc(e,t,n){K=e,zc(e,t,n)}function zc(e,t,n){for(var r=!!(e.mode&1);K!==null;){var i=K,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||gc;s=hc;var l=gc;if(hc=o,(gc=c)&&!l)for(K=i;K!==null;)o=K,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Hc(i):(c.return=o,K=c);for(;a!==null;)K=a,zc(a,t,n),a=a.sibling;K=i,hc=s,gc=l}Bc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,K=a):Bc(e,t,n)}}function Bc(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:gc||Cc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!gc){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:xs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&uo(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uo(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&bn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}gc||t.flags&512&&wc(t)}catch(e){Y(t,t.return,e)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Vc(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Hc(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cc(4,t)}catch(e){Y(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Y(t,i,e)}}var a=t.return;try{wc(t)}catch(e){Y(t,a,e)}break;case 5:var o=t.return;try{wc(t)}catch(e){Y(t,o,e)}}}catch(e){Y(t,t.return,e)}if(t===e){K=null;break}var s=t.sibling;if(s!==null){s.return=t.return,K=s;break}K=t.return}}var Uc=Math.ceil,Wc=C.ReactCurrentDispatcher,Gc=C.ReactCurrentOwner,Kc=C.ReactCurrentBatchConfig,q=0,qc=null,Jc=null,Yc=0,Xc=0,Zc=B(0),Qc=0,$c=null,el=0,tl=0,nl=0,rl=null,J=null,il=0,al=1/0,ol=null,sl=!1,cl=null,ll=null,ul=!1,dl=null,fl=0,pl=0,ml=null,hl=-1,gl=0;function _l(){return q&6?j():hl===-1?hl=j():hl}function vl(e){return e.mode&1?q&2&&Yc!==0?Yc&-Yc:Ia.transition===null?(e=M,e===0&&(e=window.event,e=e===void 0?16:On(e.type)),e):(gl===0&&(gl=Gt()),gl):1}function yl(e,t,n,i){if(50<pl)throw pl=0,ml=null,Error(r(185));qt(e,n,i),q&2&&e===qc||(e===qc&&(!(q&2)&&(tl|=n),Qc===4&&Tl(e,Yc)),bl(e,i),n===1&&q===0&&!(t.mode&1)&&(al=j()+500,oa&&ua()))}function bl(e,t){var n=e.callbackNode;Ut(e,t);var r=Vt(e,e===qc?Yc:0);if(r===0)n!==null&&St(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&St(n),t===1)e.tag===0?la(El.bind(null,e)):ca(El.bind(null,e)),Ai(function(){!(q&6)&&ua()}),n=null;else{switch(Xt(r)){case 1:n=Et;break;case 4:n=Dt;break;case 16:n=Ot;break;case 536870912:n=At;break;default:n=Ot}n=Jl(n,xl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xl(e,t){if(hl=-1,gl=0,q&6)throw Error(r(327));var n=e.callbackNode;if(Vl()&&e.callbackNode!==n)return null;var i=Vt(e,e===qc?Yc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Pl(e,i);else{t=i;var a=q;q|=2;var o=Ml();(qc!==e||Yc!==t)&&(ol=null,al=j()+500,Al(e,t));do try{Il();break}catch(t){jl(e,t)}while(1);qa(),Wc.current=o,q=a,Jc===null?(qc=null,Yc=0,t=Qc):t=0}if(t!==0){if(t===2&&(a=Wt(e),a!==0&&(i=a,t=Sl(e,a))),t===1)throw n=$c,Al(e,0),Tl(e,i),bl(e,j()),n;if(t===6)Tl(e,i);else{if(a=e.current.alternate,!(i&30)&&!wl(a)&&(t=Pl(e,i),t===2&&(o=Wt(e),o!==0&&(i=o,t=Sl(e,o))),t===1))throw n=$c,Al(e,0),Tl(e,i),bl(e,j()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:zl(e,J,ol);break;case 3:if(Tl(e,i),(i&130023424)===i&&(t=il+500-j(),10<t)){if(Vt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){_l(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=z(zl.bind(null,e,J,ol),t);break}zl(e,J,ol);break;case 4:if(Tl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Pt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=j()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Uc(i/1960))-i,10<i){e.timeoutHandle=z(zl.bind(null,e,J,ol),i);break}zl(e,J,ol);break;case 5:zl(e,J,ol);break;default:throw Error(r(329))}}}return bl(e,j()),e.callbackNode===n?xl.bind(null,e):null}function Sl(e,t){var n=rl;return e.current.memoizedState.isDehydrated&&(Al(e,t).flags|=256),e=Pl(e,t),e!==2&&(t=J,J=n,t!==null&&Cl(t)),e}function Cl(e){J===null?J=e:J.push.apply(J,e)}function wl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Fr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tl(e,t){for(t&=~nl,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function El(e){if(q&6)throw Error(r(327));Vl();var t=Vt(e,0);if(!(t&1))return bl(e,j()),null;var n=Pl(e,t);if(e.tag!==0&&n===2){var i=Wt(e);i!==0&&(t=i,n=Sl(e,i))}if(n===1)throw n=$c,Al(e,0),Tl(e,t),bl(e,j()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zl(e,J,ol),bl(e,j()),null}function Dl(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(al=j()+500,oa&&ua())}}function Ol(e){dl!==null&&dl.tag===0&&!(q&6)&&Vl();var t=q;q|=1;var n=Kc.transition,r=M;try{if(Kc.transition=null,M=1,e)return e()}finally{M=r,Kc.transition=n,q=t,!(q&6)&&ua()}}function kl(){Xc=Zc.current,V(Zc)}function Al(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Oi(n)),Jc!==null)for(n=Jc.return;n!==null;){var r=n;switch(Ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ea();break;case 3:vo(),V(Xi),V(Yi),Co();break;case 5:bo(r);break;case 4:vo();break;case 13:V(W);break;case 19:V(W);break;case 10:Ja(r.type._context);break;case 22:case 23:kl()}n=n.return}if(qc=e,Jc=e=$l(e.current,null),Yc=Xc=t,Qc=0,$c=null,nl=tl=el=0,J=rl=null,Qa!==null){for(t=0;t<Qa.length;t++)if(n=Qa[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Qa=null}return e}function jl(e,t){do{var n=Jc;try{if(qa(),wo.current=_s,ko){for(var i=G.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}ko=!1}if(Eo=0,Oo=Do=G=null,Ao=!1,jo=0,Gc.current=null,n===null||n.return===null){Qc=1,$c=t,Jc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Yc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Fs(s);if(m!==null){m.flags&=-257,Is(m,s,c,o,t),m.mode&1&&Ps(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){Ps(o,u,t),Nl();break a}l=Error(r(426))}else if(U&&c.mode&1){var _=Fs(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Is(_,s,c,o,t),Fa(Os(l,c));break a}}o=l=Os(l,c),Qc!==4&&(Qc=2),rl===null?rl=[o]:rl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ms(o,l,t);co(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(ll===null||!ll.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ns(o,c,t);co(o,x);break a}}o=o.return}while(o!==null)}Rl(n)}catch(e){t=e,Jc===n&&n!==null&&(Jc=n=n.return);continue}break}while(1)}function Ml(){var e=Wc.current;return Wc.current=_s,e===null?_s:e}function Nl(){(Qc===0||Qc===3||Qc===2)&&(Qc=4),qc===null||!(el&268435455)&&!(tl&268435455)||Tl(qc,Yc)}function Pl(e,t){var n=q;q|=2;var i=Ml();(qc!==e||Yc!==t)&&(ol=null,Al(e,t));do try{Fl();break}catch(t){jl(e,t)}while(1);if(qa(),q=n,Wc.current=i,Jc!==null)throw Error(r(261));return qc=null,Yc=0,Qc}function Fl(){for(;Jc!==null;)Ll(Jc)}function Il(){for(;Jc!==null&&!Ct();)Ll(Jc)}function Ll(e){var t=ql(e.alternate,e,Xc);e.memoizedProps=e.pendingProps,t===null?Rl(e):Jc=t,Gc.current=null}function Rl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mc(n,t),n!==null){n.flags&=32767,Jc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qc=6,Jc=null;return}}else if(n=pc(n,t,Xc),n!==null){Jc=n;return}if(t=t.sibling,t!==null){Jc=t;return}Jc=t=e}while(t!==null);Qc===0&&(Qc=5)}function zl(e,t,n){var r=M,i=Kc.transition;try{Kc.transition=null,M=1,Bl(e,t,n,r)}finally{Kc.transition=i,M=r}return null}function Bl(e,t,n,i){do Vl();while(dl!==null);if(q&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jt(e,o),e===qc&&(Jc=qc=null,Yc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,Jl(Ot,function(){return Vl(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=Kc.transition,Kc.transition=null;var s=M;M=1;var c=q;q|=4,Gc.current=null,xc(e,n),Ic(n,e),Hr(Ei),Sn=!!Ti,Ei=Ti=null,e.current=n,Rc(n,e,a),wt(),q=c,M=s,Kc.transition=o}else e.current=n;if(ul&&(ul=!1,dl=e,fl=a),o=e.pendingLanes,o===0&&(ll=null),Nt(n.stateNode,i),bl(e,j()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(sl)throw sl=!1,e=cl,cl=null,e;return fl&1&&e.tag!==0&&Vl(),o=e.pendingLanes,o&1?e===ml?pl++:(pl=0,ml=e):pl=0,ua(),null}function Vl(){if(dl!==null){var e=Xt(fl),t=Kc.transition,n=M;try{if(Kc.transition=null,M=16>e?16:e,dl===null)var i=!1;else{if(e=dl,dl=null,fl=0,q&6)throw Error(r(331));var a=q;for(q|=4,K=e.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Sc(8,d,o)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var p=d.sibling,m=d.return;if(Tc(d),d===u){K=null;break}if(p!==null){p.return=m,K=p;break}K=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else b:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,K=v;break b}K=o.return}}var y=e.current;for(K=y;K!==null;){s=K;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,K=b;else b:for(s=y;K!==null;){if(c=K,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Cc(9,c)}}catch(e){Y(c,c.return,e)}if(c===s){K=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,K=x;break b}K=c.return}}if(q=a,ua(),Mt&&typeof Mt.onPostCommitFiberRoot==`function`)try{Mt.onPostCommitFiberRoot(jt,e)}catch{}i=!0}return i}finally{M=n,Kc.transition=t}}return!1}function Hl(e,t,n){t=Os(n,t),t=Ms(e,t,1),e=oo(e,t,1),t=_l(),e!==null&&(qt(e,1,t),bl(e,t))}function Y(e,t,n){if(e.tag===3)Hl(e,e,n);else for(;t!==null;){if(t.tag===3){Hl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ll===null||!ll.has(r))){e=Os(n,e),e=Ns(t,e,1),t=oo(t,e,1),e=_l(),t!==null&&(qt(t,1,e),bl(t,e));break}}t=t.return}}function Ul(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_l(),e.pingedLanes|=e.suspendedLanes&n,qc===e&&(Yc&n)===n&&(Qc===4||Qc===3&&(Yc&130023424)===Yc&&500>j()-il?Al(e,0):nl|=n),bl(e,t)}function Wl(e,t){t===0&&(e.mode&1?(t=zt,zt<<=1,!(zt&130023424)&&(zt=4194304)):t=1);var n=_l();e=to(e,t),e!==null&&(qt(e,t,n),bl(e,n))}function Gl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wl(e,n)}function Kl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Wl(e,n)}var ql=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||Xi.current)Rs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Rs=!1,sc(e,t,n);Rs=!!(e.flags&131072)}}else Rs=!1,U&&t.flags&1048576&&xa(t,ma,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ac(e,t),e=t.pendingProps;var a=Qi(t,Yi.current);Xa(t,n),a=Fo(null,t,i,e,a,n);var o=Io();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$i(i)?(o=!0,ra(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ro(t),a.updater=Cs,t.stateNode=a,a._reactInternals=t,Ds(t,i,e,n),t=qs(null,t,i,!0,o,n)):(t.tag=0,U&&o&&Sa(t),zs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(ac(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Ql(i),e=xs(i,e),a){case 0:t=Gs(null,t,i,e,n);break a;case 1:t=Ks(null,t,i,e,n);break a;case 11:t=Bs(null,t,i,e,n);break a;case 14:t=Vs(null,t,i,xs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:xs(i,a),Gs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:xs(i,a),Ks(e,t,i,a,n);case 3:a:{if(Js(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,io(e,t),lo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Os(Error(r(423)),t),t=Ys(e,t,i,n,a);break a}if(i!==a){a=Os(Error(r(424)),t),t=Ys(e,t,i,n,a);break a}for(Ta=Ni(t.stateNode.containerInfo.firstChild),wa=t,U=!0,Ea=null,n=Ha(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Pa(),i===a){t=oc(e,t,n);break a}zs(e,t,i,n)}t=t.child}return t;case 5:return yo(t),e===null&&Aa(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Di(i,a)?s=null:o!==null&&Di(i,o)&&(t.flags|=32),Ws(e,t),zs(e,t,s,n),t.child;case 6:return e===null&&Aa(t),null;case 13:return Qs(e,t,n);case 4:return _o(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Va(t,null,i,n):zs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:xs(i,a),Bs(e,t,i,a,n);case 7:return zs(e,t,t.pendingProps,n),t.child;case 8:return zs(e,t,t.pendingProps.children,n),t.child;case 12:return zs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,H(Ua,i._currentValue),i._currentValue=s,o!==null){if(Fr(o.value,s)){if(o.children===a.children&&!Xi.current){t=oc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=ao(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ya(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ya(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}zs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Xa(t,n),a=Za(a),i=i(a),t.flags|=1,zs(e,t,i,n),t.child;case 14:return i=t.type,a=xs(i,t.pendingProps),a=xs(i.type,a),Vs(e,t,i,a,n);case 15:return Hs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:xs(i,a),ac(e,t),t.tag=1,$i(i)?(e=!0,ra(t)):e=!1,Xa(t,n),Ts(t,i,a),Ds(t,i,a,n),qs(null,t,i,!0,e,n);case 19:return ic(e,t,n);case 22:return Us(e,t,n)}throw Error(r(156,t.tag))};function Jl(e,t){return xt(e,t)}function Yl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xl(e,t,n,r){return new Yl(e,t,n,r)}function Zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ql(e){if(typeof e==`function`)return+!!Zl(e);if(e!=null){if(e=e.$$typeof,e===oe)return 11;if(e===E)return 14}return 2}function $l(e,t){var n=e.alternate;return n===null?(n=Xl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function eu(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Zl(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case te:return tu(n.children,a,o,t);case ne:s=8,a|=8;break;case re:return e=Xl(12,n,t,a|2),e.elementType=re,e.lanes=o,e;case T:return e=Xl(13,n,t,a),e.elementType=T,e.lanes=o,e;case se:return e=Xl(19,n,t,a),e.elementType=se,e.lanes=o,e;case ce:return nu(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case ie:s=10;break a;case ae:s=9;break a;case oe:s=11;break a;case E:s=14;break a;case D:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Xl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function tu(e,t,n,r){return e=Xl(7,e,r,t),e.lanes=n,e}function nu(e,t,n,r){return e=Xl(22,e,r,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function ru(e,t,n){return e=Xl(6,e,null,t),e.lanes=n,e}function iu(e,t,n){return t=Xl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function au(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kt(0),this.expirationTimes=Kt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ou(e,t,n,r,i,a,o,s,c){return e=new au(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Xl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ro(a),e}function su(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function cu(e){if(!e)return Ji;e=e._reactInternals;a:{if(ht(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if($i(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if($i(n))return na(e,n,t)}return t}function lu(e,t,n,r,i,a,o,s,c){return e=ou(n,r,!0,e,i,a,o,s,c),e.context=cu(null),n=e.current,r=_l(),i=vl(n),a=ao(r,i),a.callback=t??null,oo(n,a,i),e.current.lanes=i,qt(e,i,r),bl(e,r),e}function uu(e,t,n,r){var i=t.current,a=_l(),o=vl(i);return n=cu(n),t.context===null?t.context=n:t.pendingContext=n,t=ao(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=oo(i,t,o),e!==null&&(yl(e,i,o,a),so(e,i,o)),o}function X(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fu(e,t){du(e,t),(e=e.alternate)&&du(e,t)}function pu(){return null}var mu=typeof reportError==`function`?reportError:function(e){console.error(e)};function hu(e){this._internalRoot=e}gu.prototype.render=hu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));uu(e,t,null,null)},gu.prototype.unmount=hu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ol(function(){uu(null,e,null,null)}),t[Ri]=null}};function gu(e){this._internalRoot=e}gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=en();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&hn(e)}};function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function yu(){}function bu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=X(o);a.call(e)}}var o=lu(t,r,e,0,null,!1,!1,``,yu);return e._reactRootContainer=o,e[Ri]=o.current,pi(e.nodeType===8?e.parentNode:e),Ol(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=X(c);s.call(e)}}var c=ou(e,0,!1,null,null,!1,!1,``,yu);return e._reactRootContainer=c,e[Ri]=c.current,pi(e.nodeType===8?e.parentNode:e),Ol(function(){uu(t,c,n,r)}),c}function xu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=X(o);s.call(e)}}uu(t,o,e,i)}else o=bu(n,t,e,i,r);return X(o)}Zt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bt(t.pendingLanes);n!==0&&(Yt(t,n|1),bl(t,j()),!(q&6)&&(al=j()+500,ua()))}break;case 13:Ol(function(){var t=to(e,1);t!==null&&yl(t,e,1,_l())}),fu(e,1)}},Qt=function(e){if(e.tag===13){var t=to(e,134217728);t!==null&&yl(t,e,134217728,_l()),fu(e,134217728)}},$t=function(e){if(e.tag===13){var t=vl(e),n=to(e,t);n!==null&&yl(n,e,t,_l()),fu(e,t)}},en=function(){return M},tn=function(e,t){var n=M;try{return M=e,t()}finally{M=n}},Je=function(e,t,n){switch(t){case`input`:if(Ee(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Gi(i);if(!a)throw Error(r(90));xe(i),Ee(i,a)}}}break;case`textarea`:Ne(e,n);break;case`select`:t=n.value,t!=null&&Ae(e,!!n.multiple,t,!1)}},et=Dl,tt=Ol;var Su={usingClientEntryPoint:!1,Events:[Ui,Wi,Gi,Qe,$e,Dl]},Cu={findFiberByHostInstance:Hi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},wu={bundleType:Cu.bundleType,version:Cu.version,rendererPackageName:Cu.rendererPackageName,rendererConfig:Cu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yt(e),e===null?null:e.stateNode},findFiberByHostInstance:Cu.findFiberByHostInstance||pu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{jt=Tu.inject(wu),Mt=Tu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Su,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(t))throw Error(r(200));return su(e,t,null,n)},e.createRoot=function(e,t){if(!_u(e))throw Error(r(299));var n=!1,i=``,a=mu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ou(e,1,!1,null,null,n,!1,i,a),e[Ri]=t.current,pi(e.nodeType===8?e.parentNode:e),new hu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=yt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Ol(e)},e.hydrate=function(e,t,n){if(!vu(t))throw Error(r(200));return xu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!_u(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=mu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=lu(t,null,e,1,n??null,a,!1,o,s),e[Ri]=t.current,pi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new gu(t)},e.render=function(e,t,n){if(!vu(t))throw Error(r(200));return xu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!vu(e))throw Error(r(40));return e._reactRootContainer?(Ol(function(){xu(null,null,e,!1,function(){e._reactRootContainer=null,e[Ri]=null})}),!0):!1},e.unstable_batchedUpdates=Dl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!vu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return xu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=`-ms-`,_=`-moz-`,v=`-webkit-`,y=`comm`,b=`rule`,x=`decl`,S=`@import`,C=`@namespace`,w=`@keyframes`,ee=`@layer`,te=Math.abs,ne=String.fromCharCode,re=Object.assign;function ie(e,t){return E(e,0)^45?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}function ae(e){return e.trim()}function oe(e,t){return(e=t.exec(e))?e[0]:e}function T(e,t,n){return e.replace(t,n)}function se(e,t,n){return e.indexOf(t,n)}function E(e,t){return e.charCodeAt(t)|0}function D(e,t,n){return e.slice(t,n)}function ce(e){return e.length}function le(e){return e.length}function ue(e,t){return t.push(e),e}function O(e,t){return e.map(t).join(``)}function de(e,t){return e.filter(function(e){return!oe(e,t)})}var fe=1,pe=1,me=0,he=0,k=0,ge=``;function _e(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:fe,column:pe,length:o,return:``,siblings:s}}function ve(e,t){return re(_e(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function ye(e){for(;e.root;)e=ve(e.root,{children:[e]});ue(e,e.siblings)}function be(){return k}function xe(){return k=he>0?E(ge,--he):0,pe--,k===10&&(pe=1,fe--),k}function Se(){return k=he<me?E(ge,he++):0,pe++,k===10&&(pe=1,fe++),k}function Ce(){return E(ge,he)}function we(){return he}function Te(e,t){return D(ge,e,t)}function Ee(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function De(e){return fe=pe=1,me=ce(ge=e),he=0,[]}function Oe(e){return ge=``,e}function ke(e){return ae(Te(he-1,Me(e===91?e+2:e===40?e+1:e)))}function Ae(e){for(;(k=Ce())&&k<33;)Se();return Ee(e)>2||Ee(k)>3?``:` `}function je(e,t){for(;--t&&Se()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return Te(e,we()+(t<6&&Ce()==32&&Se()==32))}function Me(e){for(;Se();)switch(k){case e:return he;case 34:case 39:e!==34&&e!==39&&Me(k);break;case 40:e===41&&Me(e);break;case 92:Se()}return he}function Ne(e,t){for(;Se()&&e+k!==57&&(e+k!==84||Ce()!==47););return`/*`+Te(t,he-1)+`*`+ne(e===47?e:Se())}function Pe(e){for(;!Ee(Ce());)Se();return Te(e,he)}function Fe(e){return Oe(Ie(``,null,null,null,[``],e=De(e),0,[0],e))}function Ie(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Se()){case 40:if(m!=108&&E(C,d-1)==58){se(C+=T(ke(v),`&`,`&\f`),`&\f`,te(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=ke(v);break;case 9:case 10:case 13:case 32:C+=Ae(m);break;case 92:C+=je(we()-1,7);continue;case 47:switch(Ce()){case 42:case 47:ue(Re(Ne(Se(),we()),t,n,c),c),(Ee(m||1)==5||Ee(Ce()||1)==5)&&ce(C)&&D(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=ce(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=T(C,/\f/g,``)),p>0&&(ce(C)-d||h===0&&m===47)&&ue(p>32?ze(C+`;`,r,n,d-1,c):ze(T(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(ue(S=Le(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Ie(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(E(C,3)===110)break;case 108:if(E(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Ie(e,S,S,r&&ue(Le(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Ie(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+ce(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&xe()==125)continue}switch(C+=ne(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(ce(C)-1)*_,_=1;break;case 64:Ce()===45&&(C+=ke(Se())),f=Ce(),u=d=ce(y=C+=Pe(we())),v++;break;case 45:m===45&&ce(C)==2&&(h=0)}}return a}function Le(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=le(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=D(e,f+1,f=te(g=o[h])),x=e;v<m;++v)(x=ae(g>0?p[v]+` `+y:T(y,/&\f/g,p[v])))&&(c[_++]=x);return _e(e,t,n,i===0?b:s,c,l,u,d)}function Re(e,t,n,r){return _e(e,t,n,y,ne(be()),D(e,2,-2),0,r)}function ze(e,t,n,r,i){return _e(e,t,n,x,D(e,0,r),D(e,r+1,-1),r,i)}function Be(e,t,n){switch(ie(e,t)){case 5103:return v+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return v+e+e;case 4855:return v+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return _+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return v+e+_+e+g+e+e;case 5936:switch(E(e,t+11)){case 114:return v+e+g+T(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return v+e+g+T(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return v+e+g+T(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return v+e+g+e+e;case 6165:return v+e+g+`flex-`+e+e;case 5187:return v+e+T(e,/(\w+).+(:[^]+)/,v+`box-$1$2`+g+`flex-$1$2`)+e;case 5443:return v+e+g+`flex-item-`+T(e,/flex-|-self/g,``)+(oe(e,/flex-|baseline/)?``:g+`grid-row-`+T(e,/flex-|-self/g,``))+e;case 4675:return v+e+g+`flex-line-pack`+T(e,/align-content|flex-|-self/g,``)+e;case 5548:return v+e+g+T(e,`shrink`,`negative`)+e;case 5292:return v+e+g+T(e,`basis`,`preferred-size`)+e;case 6060:return v+`box-`+T(e,`-grow`,``)+v+e+g+T(e,`grow`,`positive`)+e;case 4554:return v+T(e,/([^-])(transform)/g,`$1`+v+`$2`)+e;case 6187:return T(T(T(e,/(zoom-|grab)/,v+`$1`),/(image-set)/,v+`$1`),e,``)+e;case 5495:case 3959:return T(e,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return T(T(e,/(.+:)(flex-)?(.*)/,v+`box-pack:$3`+g+`flex-pack:$3`),/space-between/,`justify`)+v+e+e;case 4200:if(!oe(e,/flex-|baseline/))return g+`grid-column-align`+D(e,t)+e;break;case 2592:case 3360:return g+T(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,oe(e.props,/grid-\w+-end/)})?~se(e+(n=n[t].value),`span`,0)?e:g+T(e,`-start`,``)+e+g+`grid-row-span:`+(~se(n,`span`,0)?oe(n,/\d+/):+oe(n,/\d+/)-oe(e,/\d+/))+`;`:g+T(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return oe(e.props,/grid-\w+-start/)})?e:g+T(T(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return T(e,/(.+)-inline(.+)/,v+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ce(e)-1-t>6)switch(E(e,t+1)){case 109:if(E(e,t+4)!==45)break;case 102:return T(e,/(.+:)(.+)-([^]+)/,`$1`+v+`$2-$3$1`+_+(E(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~se(e,`stretch`,0)?Be(T(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return T(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return g+n+`:`+r+s+(i?g+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(E(e,t+6)===121)return T(e,`:`,`:`+v)+e;break;case 6444:switch(E(e,E(e,14)===45?18:11)){case 120:return T(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+v+(E(e,14)===45?`inline-`:``)+`box$3$1`+v+`$2$3$1`+g+`$2box$3`)+e;case 100:return T(e,`:`,`:`+g)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return T(e,`scroll-`,`scroll-snap-`)+e}return e}function Ve(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function He(e,t,n,r){switch(e.type){case ee:if(e.children.length)break;case S:case C:case x:return e.return=e.return||e.value;case y:return``;case w:return e.return=e.value+`{`+Ve(e.children,r)+`}`;case b:if(!ce(e.value=e.props.join(`,`)))return``}return ce(n=Ve(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ue(e){var t=le(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function We(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ge(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case x:e.return=Be(e.value,e.length,n);return;case w:return Ve([ve(e,{value:T(e.value,`@`,`@`+v)})],r);case b:if(e.length)return O(n=e.props,function(t){switch(oe(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:ye(ve(e,{props:[T(t,/:(read-\w+)/,`:`+_+`$1`)]})),ye(ve(e,{props:[t]})),re(e,{props:de(n,r)});break;case`::placeholder`:ye(ve(e,{props:[T(t,/:(plac\w+)/,`:`+v+`input-$1`)]})),ye(ve(e,{props:[T(t,/:(plac\w+)/,`:`+_+`$1`)]})),ye(ve(e,{props:[T(t,/:(plac\w+)/,g+`input-$1`)]})),ye(ve(e,{props:[t]})),re(e,{props:de(n,r)})}return``})}}var Ke=h(),A=c(u());function qe(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Je=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Ye=`active`,Xe=`data-styled-version`,Ze=`6.6.0`,Qe=`/*!sc*/
`,$e=typeof window<`u`&&typeof document<`u`;if(!A.createContext)throw qe(19);function et(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var tt=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:et(`REACT_APP_SC_DISABLE_SPEEDY`)??et(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),nt=`sc-keyframes-`,rt={},it=new Map,at=new Map,ot=1,st=e=>{if(it.has(e))return it.get(e);for(;at.has(ot);)ot++;let t=ot++;return it.set(e,t),at.set(t,e),t},ct=e=>at.get(e),lt=(e,t)=>{ot=t+1,it.set(e,t),at.set(t,e)},ut=Object.freeze([]),dt=Object.freeze({});function ft(e,t,n=dt){return e.theme!==n.theme&&e.theme||t||n.theme}var pt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mt=/(^-|-$)/g;function ht(e){return e.replace(pt,`-`).replace(mt,``)}var gt=/(a)(d)/gi,_t=e=>String.fromCharCode(e+(e>25?39:97));function vt(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=_t(t%52)+n;return(_t(t%52)+n).replace(gt,`$1-$2`)}var yt=5381,bt=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},xt=e=>bt(yt,e);function St(e){return vt(xt(e)>>>0)}function Ct(e){return e.displayName||e.name||`Component`}function wt(e){return typeof e==`string`&&!0}function j(e){return wt(e)?`styled.${e}`:`Styled(${Ct(e)})`}var Tt=Symbol.for(`react.memo`),Et=Symbol.for(`react.forward_ref`),Dt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Ot={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},At={[Et]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Tt]:kt};function jt(e){return(`type`in(t=e)&&t.type.$$typeof)===Tt?kt:`$$typeof`in e?At[e.$$typeof]:Dt;var t}var Mt=Object.defineProperty,Nt=Object.getOwnPropertyNames,Pt=Object.getOwnPropertySymbols,Ft=Object.getOwnPropertyDescriptor,It=Object.getPrototypeOf,Lt=Object.prototype;function Rt(e,t,n){if(typeof t!=`string`){let r=It(t);r&&r!==Lt&&Rt(e,r,n);let i=Nt(t).concat(Pt(t)),a=jt(e),o=jt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Ot||n&&n[s]||o&&s in o||a&&s in a)){let n=Ft(t,s);try{Mt(e,s,n)}catch{}}}}return e}function zt(e){return typeof e==`function`}var Bt=Symbol.for(`react.forward_ref`);function Vt(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Bt&&`styledComponentId`in e}function Ht(e,t){return e&&t?e+` `+t:e||t||``}function Ut(e,t){return e.join(t||``)}function Wt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Gt(e,t,n=!1){if(!n&&!Wt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Gt(e[n],t[n]);else if(Wt(t))for(let n in t)e[n]=Gt(e[n],t[n]);return e}function Kt(e,t){Object.defineProperty(e,"toString",{value:t})}var qt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw qe(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Qe;return t}},Jt=`style[${Je}][${Xe}="${Ze}"]`,Yt=RegExp(`^${Je}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),M=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Xt=e=>{if(!e)return document;if(M(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(M(t))return t}return document},Zt=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Qt=(e,t)=>{let n=(t.textContent??``).split(Qe),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Yt);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(lt(n,t),Zt(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},$t=e=>{let t=Xt(e.options.target).querySelectorAll(Jt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Je)!==Ye&&(Qt(e,r),r.parentNode&&r.parentNode.removeChild(r))}},en=!1;function tn(){if(!1!==en)return en;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return en=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return en=t.getAttribute(`content`)||void 0}return en=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var nn=(e,t)=>{if(typeof document>`u`)throw qe(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Je}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Je,Ye),i.setAttribute(Xe,Ze);let s=t||tn();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},rn=class{constructor(e,t){this.element=nn(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw qe(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},an=class{constructor(e,t){this.element=nn(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},on=$e,sn={isServer:!$e,useCSSOMInjection:!tt},cn=class e{static registerId(e){return st(e)}constructor(e=dt,t={},n){this.options=Object.assign(Object.assign({},sn),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&$e&&on&&(on=!1,$t(this)),Kt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=ct(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Je+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&$e&&$t(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&$e&&t.target!==this.options.target&&Xt(this.options.target)!==Xt(t.target)&&$t(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new rn(t,n):new an(t,n))(this.options),new qt(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){st(e),e.startsWith(nt)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(st(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(st(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},ln=new WeakSet,un={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function dn(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in un||e.startsWith(`--`)?String(t).trim():t+`px`}var fn=47;function pn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var mn=Symbol.for(`sc-keyframes`);function hn(e){return typeof e==`object`&&!!e&&mn in e}function gn(e){return zt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var _n=e=>e==null||!1===e||e===``,vn=Symbol.for(`react.client.reference`);function yn(e){return e.$$typeof===vn}function bn(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!_n(r)&&(Array.isArray(r)&&ln.has(r)||zt(r)?t.push(pn(n)+`:`,r,`;`):Wt(r)?(t.push(n+` {`),bn(r,t),t.push(`}`)):t.push(pn(n)+`: `+dn(n,r)+`;`))}}function xn(e,t,n,r,i=[]){if(_n(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return yn(e)?i:gn(e)&&t?xn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)xn(e[a],t,n,r,i);return i}return Vt(e)?(i.push(`.${e.styledComponentId}`),i):hn(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):yn(e)?i:Wt(e)&&e.toString===Object.prototype.toString?(bn(e,i),i):(i.push(e.toString()),i)}var Sn=xt(Ze),Cn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=bt(Sn,t),this.baseStyle=n,cn.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(gn(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Ut(xn(r,e,t,n)))}else i+=Ut(xn(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=vt(bt(bt(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Ht(r,a)}}return r}},wn=/&/g;function Tn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function En(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==fn||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===fn&&(o=!1,c++);else if(l!==34&&l!==39||Tn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Dn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Dn(a.children,t)}return e}function On({options:e=dt,plugins:t=ut}=dt){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(wn,r).replace(i,a))}),e.prefix&&o.push(Ge),o.push(He);let s=[],c=Ue(o.concat(We(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return En(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Tn(e,o)){if(s===0){if(t===fn&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==fn);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===fn)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===fn&&o+1<r&&e.charCodeAt(o+1)===fn){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:En(i)):l===0?e:En(e)}(t),d=Fe(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Dn(d,e.namespace)),s=[],Ve(d,c),s},u=e,d=yt;for(let e=0;e<t.length;e++)t[e].name||qe(15),d=bt(d,t[e].name);return u!=null&&u.namespace&&(d=bt(d,u.namespace)),u!=null&&u.prefix&&(d=bt(d,`p`)),l.hash=d===yt?``:d.toString(),l}var kn=new cn,An=On(),jn=A.createContext({shouldForwardProp:void 0,styleSheet:kn,stylis:An,stylisPlugins:void 0});jn.Consumer;function Mn(){return A.useContext(jn)}var Nn=A.createContext(void 0);Nn.Consumer;var Pn={};function Fn(e,t){let n=typeof e==`string`?ht(e):`sc`;Pn[n]=(Pn[n]||0)+1;let r=n+`-`+St(Ze+n+Pn[n]);return t?t+`-`+r:r}function In(e,t,n){let r=Vt(e),i=e,a=!wt(e),{attrs:o=ut,componentId:s=Fn(t.displayName,t.parentComponentId),displayName:c=j(e)}=t,l=t.displayName&&t.componentId?ht(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new Cn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=A.useContext(Nn),u=Mn(),d=e.shouldForwardProp||u.shouldForwardProp,f=ft(t,l,a)||dt,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=zt(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=Ht(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=Ht(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,_=wt(g),v=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,_,m),y=Ht(o,s);return h&&(y+=` `+h),p.className&&(y+=` `+p.className),v[_&&g.includes(`-`)?`class`:`className`]=y,n&&(v.ref=n),(0,A.createElement)(g,v)}(m,e,t)}p.displayName=c;let m=A.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Ht(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Gt(e,n,!0);return e}({},i.defaultProps,e):e}}),Kt(m,()=>`.${m.styledComponentId}`),a&&Rt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Ln=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Rn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var zn=e=>(ln.add(e),e);function Bn(e,...t){if(zt(e)||Wt(e))return zn(xn(Rn(ut,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?xn(n):zn(xn(Rn(n,t)))}function Vn(e,t,n=dt){if(!t)throw qe(1,t);let r=(r,...i)=>e(t,n,Bn(r,...i));return r.attrs=r=>Vn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Vn(e,t,Object.assign(Object.assign({},n),r)),r}var Hn=e=>Vn(In,e),N=Hn;Ln.forEach(e=>{N[e]=Hn(e)});var Un=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(zt(n)&&!Vt(n))return!1}return!0}(e),cn.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=Ut(xn(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function Wn(e,...t){let n=Bn(e,...t),r=`sc-global-${St(JSON.stringify(n))}`,i=new Un(n,r),a=e=>{let t=Mn(),n=A.useContext(Nn),a;{let e=A.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=A.useRef(i);A.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),A.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,rt,n,o);else{let s=Object.assign(Object.assign({},t),{theme:ft(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return A.memo(a)}`${Je}`,`${Je}`,`${Je}`;var Gn=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),Kn=o(((e,t)=>{t.exports=Gn()})),qn=(0,A.createContext)({});function Jn(e){let t=(0,A.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Yn=typeof window<`u`?A.useLayoutEffect:A.useEffect,Xn=(0,A.createContext)(null);function Zn(e,t){e.indexOf(t)===-1&&e.push(t)}function Qn(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var $n=(e,t,n)=>n>t?t:n<e?e:n,er={},tr=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),nr=e=>typeof e==`object`&&!!e,rr=e=>/^0[^.\s]+$/u.test(e);function ir(e){let t;return()=>(t===void 0&&(t=e()),t)}var ar=e=>e,or=(...e)=>e.reduce((e,t)=>n=>t(e(n))),sr=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},cr=class{constructor(){this.subscriptions=[]}add(e){return Zn(this.subscriptions,e),()=>this.remove(e)}remove(e){Qn(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},lr=e=>e*1e3,ur=e=>e/1e3,dr=(e,t)=>t?1e3/t*e:0,fr=(e,t,n)=>e*(3*(1-e)*((1-e)*t+e*n)+e*e);function pr(e,t,n,r){return e===t&&n===r?ar:i=>{let a=0,o=1,s=i;for(let t=0;;t++){s>=a&&s<=o||(s=(a+o)/2);let r=fr(s,e,n)-i;if(r*r<1e-28||t===40)break;r>0?o=s:a=s,s-=r*1e-7/(fr(s+1e-7,e,n)-i-r)}return fr(s,t,r)}}var mr=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,hr=e=>t=>1-e(1-t),gr=pr(.33,1.53,.69,.99),_r=hr(gr),vr=mr(_r),yr=e=>e>=1?1:(e*=2)<1?.5*_r(e):.5*(2-2**(-10*(e-1))),br=e=>1-Math.sin(Math.acos(e)),xr=hr(br),Sr=mr(br),Cr=pr(.42,0,1,1),wr=pr(0,0,.58,1),Tr=pr(.42,0,.58,1),Er=e=>Array.isArray(e)&&typeof e[0]!=`number`,Dr=e=>Array.isArray(e)&&typeof e[0]==`number`,Or={linear:ar,easeIn:Cr,easeInOut:Tr,easeOut:wr,circIn:br,circInOut:Sr,circOut:xr,backIn:_r,backInOut:vr,backOut:gr,anticipate:yr},kr=e=>typeof e==`string`,Ar=e=>{if(Dr(e)){let[t,n,r,i]=e;return pr(t,n,r,i)}return kr(e)?Or[e]:e},P={delta:0,timestamp:0,isProcessing:!1},jr;function Mr(){jr=void 0}var F={now:()=>(jr===void 0&&F.set(P.isProcessing||er.useManualTiming?P.timestamp:performance.now()),jr),set:e=>{jr=e,queueMicrotask(Mr)}},Nr=e=>Math.round(e*1e5)/1e5,Pr=e=>t=>typeof t==`string`&&t.startsWith(e),Fr=Pr(`--`),Ir=Pr(`var(--`),Lr=e=>Ir(e)?Rr.test(e.split(`/*`)[0].trim()):!1,Rr=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function zr(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Br={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Vr={...Br,transform:e=>$n(0,1,e)},Hr={...Br,default:1},Ur=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Wr(e){return e==null}var Gr=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Kr=(e,t)=>n=>!!(typeof n==`string`&&Gr.test(n)&&n.startsWith(e)||t&&!Wr(n)&&Object.prototype.hasOwnProperty.call(n,t)),qr=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Ur);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Jr=e=>$n(0,255,e),Yr={...Br,transform:e=>Math.round(Jr(e))},Xr={test:Kr(`rgb`,`red`),parse:qr(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Yr.transform(e)+`, `+Yr.transform(t)+`, `+Yr.transform(n)+`, `+Nr(Vr.transform(r))+`)`},Zr=(e,t,n)=>{let r=e.substring(1+t*n,1+(t+1)*n);return n>1?r:r+r};function Qr(e){let t=e.length>5?2:1,n=Zr(e,3,t);return{red:parseInt(Zr(e,0,t),16),green:parseInt(Zr(e,1,t),16),blue:parseInt(Zr(e,2,t),16),alpha:n?parseInt(n,16)/255:1}}var $r={test:Kr(`#`),parse:Qr,transform:Xr.transform},ei=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ti=ei(`deg`),ni=ei(`%`),I=ei(`px`),ri=ei(`vh`),ii=ei(`vw`),ai={...ni,parse:e=>ni.parse(e)/100,transform:e=>ni.transform(e*100)},oi={test:Kr(`hsl`,`hue`),parse:qr(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+ni.transform(Nr(t))+`, `+ni.transform(Nr(n))+`, `+Nr(Vr.transform(r))+`)`},L={test:e=>Xr.test(e)||$r.test(e)||oi.test(e),parse:e=>Xr.test(e)?Xr.parse(e):oi.test(e)?oi.parse(e):$r.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Xr.transform(e):oi.transform(e),getAnimatableNone:e=>{let t=L.parse(e);return t.alpha=0,L.transform(t)}},si=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,ci=new RegExp(Ur.source),li=new RegExp(si.source,`i`);function ui(e){return isNaN(e)&&typeof e==`string`&&(ci.test(e)||li.test(e))}var R=`number`,di=`color`,fi=`var`,pi=`var(`,mi="${}",hi=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;function gi(e){let t=e.toString();return ci.test(t)||li.test(t)}function _i(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(hi,e=>(L.test(e)?(r.color.push(a),i.push(di),n.push(L.parse(e))):e.startsWith(pi)?(r.var.push(a),i.push(fi),n.push(e)):(r.number.push(a),i.push(R),n.push(parseFloat(e))),++a,mi)).split(mi),indexes:r,types:i}}function vi(e){return _i(e).values}function yi({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===R?Nr(r[a]):e===di?L.transform(r[a]):r[a]}return i}}function bi(e){return yi(_i(e))}var xi=e=>typeof e==`number`?0:L.test(e)?L.getAnimatableNone(e):e,Si=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:xi(e);function Ci(e){let t=_i(e);return yi(t)(t.values.map((e,n)=>Si(e,t.split[n])))}var wi={test:ui,parse:vi,createTransformer:bi,getAnimatableNone:Ci};function Ti(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ei({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Ti(s,r,e+1/3),a=Ti(s,r,e),o=Ti(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Di(e,t){return n=>n>0?t:e}var z=(e,t,n)=>e+(t-e)*n,Oi=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},ki=[$r,Xr,oi],Ai=e=>ki.find(t=>t.test(e));function ji(e){let t=Ai(e);if(!t)return!1;let n=t.parse(e);return t===oi&&(n=Ei(n)),n}var Mi=(e,t)=>{let n=ji(e),r=ji(t);if(!n||!r)return Di(e,t);let i={...n};return e=>(i.red=Oi(n.red,r.red,e),i.green=Oi(n.green,r.green,e),i.blue=Oi(n.blue,r.blue,e),i.alpha=z(n.alpha,r.alpha,e),Xr.transform(i))},Ni=new Set([`none`,`hidden`]);function Pi(e,t){return Ni.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Fi(e,t){return n=>z(e,t,n)}function Ii(e){return typeof e==`number`?Fi:typeof e==`string`?Lr(e)?Di:L.test(e)?Mi:Bi:Array.isArray(e)?Li:typeof e==`object`?L.test(e)?Mi:Ri:Di}function Li(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Ii(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Ri(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Ii(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function zi(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var Bi=(e,t)=>{let n=_i(e),r=_i(t);return n.indexes.var.length===r.indexes.var.length&&n.indexes.color.length===r.indexes.color.length&&n.indexes.number.length>=r.indexes.number.length?Ni.has(e)&&!r.values.length||Ni.has(t)&&!n.values.length?Pi(e,t):or(Li(zi(n,r),r.values),yi(r)):Di(e,t)},Vi=/^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;function Hi(e,t){let n=Vi.exec(e);if(!n)return;let r=Vi.exec(t);if(!r||n[2]!==r[2])return;let i=n[2],a=parseFloat(n[1]),o=parseFloat(r[1]);return e=>Nr(z(a,o,e))+i}function Ui(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return z(e,t,n);if(typeof e==`string`&&typeof t==`string`){let n=Hi(e,t);if(n)return n}return Ii(e)(e,t)}var Wi=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function Gi(e){let t=new Set,n=new Set,r=!1,i=!1,a,o=new Set,s={delta:0,timestamp:0,isProcessing:!1};function c(t){o.has(t)&&(n.add(t),e()),(a=t)(s)}let l={schedule:(e,i=!1,s=!1)=>{let c=s&&r,l=c?t:n;return i&&o.add(e),c&&e!==a&&l.delete(e),l.add(e),e},cancel:e=>{n.delete(e),o.delete(e)},process:e=>{if(s=e,r){i=!0;return}r=!0;let o=t;t=n,n=o,t.forEach(c),t.clear(),a=void 0,r=!1,i&&(i=!1,l.process(e))}};return l}var Ki=40;function qi(e,t,n={delta:0,timestamp:0,isProcessing:!1}){let r=!1,i=!0,a=()=>r=!0,o=Wi.reduce((e,t)=>(e[t]=Gi(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=er.useManualTiming,o=a?n.timestamp:performance.now();r=!1,a||(n.delta=i?1e3/60:Math.max(Math.min(o-n.timestamp,Ki),1)),n.timestamp=o,n.isProcessing=!0,s.process(n),c.process(n),l.process(n),u.process(n),d.process(n),f.process(n),p.process(n),m.process(n),n.isProcessing=!1,r&&t&&(i=!1,e(h))},g=()=>{r=!0,i=!0,n.isProcessing||e(h)};return{schedule:Wi.reduce((e,t)=>{let n=o[t];return e[t]=(e,t=!1,i=!1)=>(r||g(),n.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Wi.length;t++)o[Wi[t]].cancel(e)},state:n,steps:o}}var{schedule:B,cancel:V,steps:H}=qi(typeof requestAnimationFrame<`u`?requestAnimationFrame:ar,!0,P),Ji=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>B.update(t,e),stop:()=>V(t),now:()=>P.isProcessing?P.timestamp:F.now()}},Yi=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Xi=2e4;function Zi(e,t=50,n=Xi,r){let i=0,a=e.next(i);for(r?.push(a.value);!a.done&&i<n;)i+=t,a=e.next(i),r?.push(a.value);return i>=n?1/0:i}function Qi(e,t=100,n){let{keyframes:r,velocity:i}=e,a=r&&r[r.length-1]-r[0],o=n({...e,velocity:i&&a?i*t/a:i,keyframes:[0,t]}),s=Math.min(Zi(o),Xi);return{type:`keyframes`,ease:e=>o.next(s*e).value/t,duration:ur(s)}}var $i=100,ea=10,ta=1,na=800,ra=.3,ia=.3,aa=.01,oa=2,sa=.005,ca=.5,la=.01,ua=10,da=.05,fa=e=>e<0?1/Math.max(1+e,da):Math.max(1-e,da);function pa(e,t){if(!(e>1))return 1;let n=Math.sqrt(e*e-1),r=e-n,i=e+n,a=2*n*Math.exp(-t)*(1+t);return ga(e=>i*Math.exp(-r*e)-r*Math.exp(-i*e)-a,e=>Math.exp(-i*e)-Math.exp(-r*e),t)/t}function ma(e,t){return e*Math.sqrt(1-t*t)}var ha=12;function ga(e,t,n){let r=n;for(let n=1;n<ha;n++)r-=e(r)/t(r);return r}var _a=.001;function va({duration:e=na,bounce:t=ra}){let n,r,i=fa(t);e=$n(la,ua,ur(e)),i<1?(n=t=>{let n=t*i,r=n*e,a=ma(t,i),o=Math.exp(-r);return _a-n/a*o},r=t=>{let r=t*i*e,a=i*i*t*t*e,o=Math.exp(-r),s=ma(t*t,i);return(-n(t)+_a>0?-1:1)*-a*o/s}):(n=t=>-.001+Math.exp(-t*e)*(t*e+1),r=t=>Math.exp(-t*e)*(-t*(e*e)));let a=5/e,o=ga(n,r,a),s=o*pa(i,o*e),c=s*s;return{stiffness:c,damping:i*2*Math.sqrt(c),duration:lr(e)}}var ya=(e,t)=>(t?e>=0:e>0)&&e<1/0;function ba(e,t){if(ya(e,t))return e}function xa(e){let t=ba(e.stiffness),n=ba(e.damping,!0),r=ba(e.mass),i={...e,stiffness:t??$i,damping:n??ea,mass:r??ta,isResolvedFromDuration:!1,isTimeDefined:(t??n??r)===void 0&&(e.duration!==void 0||e.bounce!==void 0)};if(i.isTimeDefined){if(e.visualDuration){let t=fa(e.bounce||0),n=2*Math.PI/(e.visualDuration*1.2)*pa(t,2*Math.PI/1.2);i.stiffness=n*n,i.damping=2*t*Math.sqrt(i.stiffness)}else Object.assign(i,va(i)),i.isResolvedFromDuration=!0;ya(i.stiffness)&&ya(i.damping,!0)||(i.stiffness=$i,i.damping=ea)}return i}function Sa(e=ia,t=ra){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},r=n.keyframes[0],i=n.keyframes[n.keyframes.length-1],a={done:!1,value:r},{stiffness:o,damping:s,mass:c,duration:l,isResolvedFromDuration:u,isTimeDefined:d}=xa({...n}),f=e=>d?0:-ur(e),p=s/(2*Math.sqrt(o*c)),m=ur(Math.sqrt(o/c)),h=p*m,g={target:i,delta:i-r,velocity:f(n.velocity||0)||0,restSpeed:0,restDelta:0},_=()=>{let e=Math.abs(g.delta)<5;g.restSpeed=n.restSpeed||(e?aa:oa),g.restDelta=n.restDelta||(e?sa:ca)};_();let v,y,b;if(p<1){let e=ma(m,p),t={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};b=()=>{t.A=(g.velocity+h*g.delta)/e,t.sinC=h*t.A+g.delta*e,t.cosC=h*g.delta-t.A*e};let n=n=>{n!==t.t&&(t.t=n,t.env=Math.exp(-h*n),t.sin=Math.sin(e*n),t.cos=Math.cos(e*n))};v=e=>(n(e),g.target-t.env*(t.A*t.sin+g.delta*t.cos)),y=e=>(n(e),t.env*(t.sinC*t.sin+t.cosC*t.cos))}else if(p===1){v=e=>g.target-Math.exp(-m*e)*(g.delta+(g.velocity+m*g.delta)*e);let e={C:0};b=()=>{e.C=g.velocity+m*g.delta},y=t=>Math.exp(-m*t)*(m*e.C*t-g.velocity)}else{let e=m*Math.sqrt(p*p-1),t=h-e,n=h+e,r=e<1||d?1/0:300/e,i=(e,t)=>Math.exp(t>r?(h-e)*r-h*t:-e*t),a={S:0,F:0};b=()=>{let t=(g.velocity+h*g.delta)/e;a.S=(g.delta+t)/2,a.F=(g.delta-t)/2},v=e=>g.target-a.S*i(t,e)-a.F*i(n,e),y=e=>t*a.S*i(t,e)+n*a.F*i(n,e)}b();let x=u&&l||null,S={calculatedDuration:x,retarget:(e,t)=>{g.target=e[e.length-1],g.delta=g.target-e[0],g.velocity=f(t),n.restSpeed&&n.restDelta||_(),S.calculatedDuration=x,a.done=!1,b()},velocity:e=>lr(y(e)),next:e=>{let t=v(e);if(u)a.done=e>=l;else{let n=lr(y(e));a.done=Math.abs(n)<=g.restSpeed&&Math.abs(g.target-t)<=g.restDelta}return a.value=a.done?g.target:t,a},toString:()=>{let e=Math.min(Zi(S),Xi),t=Yi(t=>S.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return S}var Ca=Object.assign(Sa,{applyToOptions:e=>{let t=Qi(e,100,Sa);return e.ease=t.ease,e.duration=lr(t.duration),e.type=`keyframes`,e}});function wa({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>e<s||e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o?o(g):g;_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>{let t=v(e);f.done=Math.abs(t)<=l,f.value=f.done?_:e?_+t:d},b,x,S=e=>{p(f.value)&&(b=e,x=Ca({keyframes:[f.value,m(f.value)],velocity:-v(e)/r*1e3,damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return!x&&b===void 0&&(t=!0,y(e),S(e)),b!==void 0&&e>=b?x.next(e-b):(!t&&y(e),f)}}}function Ta(e,t,n){let r=[],i=er.mix||Ui,a=e.length-1;for(let o=0;o<a;o++){let a=n?.(e[o],e[o+1])||i(e[o],e[o+1]);t&&(a=or(Array.isArray(t)?t[o]||ar:t,a)),r.push(a)}return r}function U(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Ta(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=sr(e[r],e[r+1],n);return s[r](i)};return n?t=>l($n(e[0],e[a-1],t)):l}function Ea(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=sr(0,t,r);e.push(z(n,1,i))}}function Da(e){let t=[0];return Ea(t,e.length-1),t}function Oa(e,t){return e.map(e=>e*t)}function ka(e,t){return e.map(()=>t||Tr).splice(0,e.length-1)}function Aa({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`,mixer:i}){let a=typeof t[0]==`number`?void 0:i,o=Er(r)?r.map(Ar):Ar(r)||Tr,s={done:!1,value:t[0]},c=-1;if(!a){for(let e=1;e<t.length;e++)if(t[e]!==t[e-1]){if(c>=0){c=-2;break}c=e-1}}if(c>=0){let r=n&&n.length===t.length?n:Da(t),i=r[c]*e,a=r[c+1]*e,l=t[c],u=t[c+1],d=Array.isArray(o)?o[c]:o,f=(er.mix||Ui)(l,u),p=t.length-2;return{calculatedDuration:e,next:t=>(s.value=c&&t<i?f(0):c<p&&(t>=a||!e)?typeof u==`number`?u:f(1):f(d(t>=a||!e?1:t<=i?0:(t-i)/(a-i))),s.done=t>=e,s)}}let l=U(Oa(n&&n.length===t.length?n:Da(t),e),t,{ease:Array.isArray(o)?o:ka(t,o),mixer:a});return{calculatedDuration:e,next:t=>(s.value=l(t),s.done=t>=e,s)}}var ja=5;function Ma(e,t,n){let r=Math.max(t-ja,0);return dr(n-e(r),t-r)}function Na(e,t,n=0){return t<=0?n:e.velocity?e.velocity(t):Ma(t=>e.next(t).value,t,e.next(t).value)}function Pa(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a,o,s=0;for(let t=0;t<e.length;t++){let n=e[t];n!==null&&(s++||(a=n),o=n)}let c=i<0||t&&n!==`loop`&&t%2==1?0:s-1;return!c||r===void 0?c?o:a:r}var Fa={decay:wa,inertia:wa,tween:Aa,keyframes:Aa,spring:Ca};function Ia(e){typeof e.type==`string`&&(e.type=Fa[e.type])}var La=40,Ra=(e,t)=>t-e>La&&!er.useManualTiming?t:e;function za(e,t){return{kind:e,animation:t,timestamp:F.now(),frameTimestamp:P.timestamp,frameIsProcessing:P.isProcessing}}function Ba(e,t,n){let r=globalThis.__MOTION_INSPECT__;if(r)try{r({...za(`animation-start`,e),options:n?{...t,...n}:t})}catch{}}function Va(e,t){let n=globalThis.__MOTION_INSPECT__;if(n)try{n({...za(`layout-animation-start`,e),node:t})}catch{}}var Ha=class{constructor(){this.isResolved=!1}get finished(){return this._finished||=this.isResolved?Promise.resolve():new Promise(e=>{this._resolve=e}),this._finished}updateFinished(){this._finished=this._resolve=void 0,this.isResolved=!1}notifyFinished(){this.isResolved=!0,this._resolve?.()}then(e,t){return this.finished.then(e,t)}},Ua=e=>e/100,Wa=e=>Math.round(e*1e4)/1e4,Ga=class extends Ha{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==F.now()&&this.tick(F.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause(),Ba(this,this.options)}initAnimation(){let{options:e}=this;Ia(e);let{type:t=Aa,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||Aa;this.mixKeyframes=void 0,s!==Aa&&typeof o[0]!=`number`&&(this.mixKeyframes=or(Ua,e.mixer?.(o[0],o[1])||Ui(o[0],o[1])),o=[0,100]);let c=s(o===e.keyframes?e:{...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Zi(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){this.currentTime=this.holdTime??Math.round(e-this.startTime)*this.playbackSpeed}tick(e,t=!1){let{generator:n,totalDuration:r,calculatedDuration:i}=this;if(this.startTime===null)return n.next(0);let{delay:a=0,keyframes:o,type:s,onUpdate:c,finalKeyframe:l}=this.options;this.startTime===this.pendingStartTime&&(this.startTime=Ra(this.startTime,e)),this.pendingStartTime=void 0,this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let u=this.currentTime-a*(this.playbackSpeed>=0?1:-1),d=this.playbackSpeed>=0?u<0:u>r;this.currentTime=Math.max(u,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let f=this.generate(this.currentTime,d),{done:p}=f;d||(p=this.playbackSpeed>=0?i<1/0?this.currentTime>=r:p:this.currentTime<=0);let m=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&p);return m&&s!==wa&&(f.value=Pa(o,this.options,l,this.speed)),c&&c(f.value),m&&this.finish(),f}at(e){return this.holdTime??Wa((e-this.startTime)*this.playbackSpeed)}sampleAt(e,t){let{options:n,totalDuration:r}=this,i=this.at(e)-(n.delay||0);return i>=r&&n.type!==wa?Pa(n.keyframes,n,t?void 0:n.finalKeyframe):this.generate(Math.max(i,0),i<0).value}generate(e,t){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o}=this,{keyframes:s,repeat:c,repeatType:l,repeatDelay:u}=this.options,d=e,f=n;if(c){let t=Math.min(e,r)/o,n=Math.floor(t),i=t%1;!i&&t>=1&&(i=1),i===1&&n--,n=Math.min(n,c+1),n%2&&(l===`reverse`?(i=1-i,u&&(i-=u/o)):l===`mirror`&&(f=a)),d=$n(0,1,i)*o}let p;return t?(this.delayState.value=s[0],p=this.delayState):p=f.next(d),i&&!t&&(p.value=i(p.value)),p}get duration(){return ur(this.calculatedDuration)}get iterationDuration(){return this.duration+ur(this.options.delay??0)}get time(){return ur(this.currentTime)}set time(e){this.state===`finished`&&this.updateFinished(),e=lr(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){return Na(this.generator,this.currentTime,this.options.velocity)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(F.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=ur(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Ji,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??(this.pendingStartTime=n):this.startTime=n-this.holdTime/(this.playbackSpeed||1),this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(F.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.driver?.stop(),this.driver=void 0,this.startTime=this.holdTime=null}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}},Ka=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function qa(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Ur)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Ka.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Ja=/\b([a-z-]*)\(.*?\)/gu,Ya={...wi,getAnimatableNone:e=>{let t=e.match(Ja);return t?t.map(qa).join(` `):e}},Xa={...wi,getAnimatableNone:e=>{let t=wi.parse(e);return wi.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Za={...Br,transform:Math.round},Qa={rotate:ti,pathRotation:ti,rotateX:ti,rotateY:ti,rotateZ:ti,scale:Hr,scaleX:Hr,scaleY:Hr,scaleZ:Hr,skew:ti,skewX:ti,skewY:ti,distance:I,translateX:I,translateY:I,translateZ:I,x:I,y:I,z:I,perspective:I,transformPerspective:I,opacity:Vr,originX:ai,originY:ai,originZ:I},$a={borderWidth:I,borderTopWidth:I,borderRightWidth:I,borderBottomWidth:I,borderLeftWidth:I,borderRadius:I,borderTopLeftRadius:I,borderTopRightRadius:I,borderBottomRightRadius:I,borderBottomLeftRadius:I,width:I,maxWidth:I,height:I,maxHeight:I,top:I,right:I,bottom:I,left:I,inset:I,insetBlock:I,insetBlockStart:I,insetBlockEnd:I,insetInline:I,insetInlineStart:I,insetInlineEnd:I,padding:I,paddingTop:I,paddingRight:I,paddingBottom:I,paddingLeft:I,paddingBlock:I,paddingBlockStart:I,paddingBlockEnd:I,paddingInline:I,paddingInlineStart:I,paddingInlineEnd:I,margin:I,marginTop:I,marginRight:I,marginBottom:I,marginLeft:I,marginBlock:I,marginBlockStart:I,marginBlockEnd:I,marginInline:I,marginInlineStart:I,marginInlineEnd:I,fontSize:I,backgroundPositionX:I,backgroundPositionY:I,...Qa,zIndex:Za,fillOpacity:Vr,strokeOpacity:Vr,numOctaves:Za},eo={...$a,color:L,backgroundColor:L,outlineColor:L,fill:L,stroke:L,borderColor:L,borderTopColor:L,borderRightColor:L,borderBottomColor:L,borderLeftColor:L,filter:Ya,WebkitFilter:Ya,mask:Xa,WebkitMask:Xa},to=e=>eo[e],no=new Set([Ya,Xa]),ro,io,ao;function oo(e,t){if(e===ro&&t===io)return ao;let n=to(e);return no.has(n)||(n=wi),ao=n.getAnimatableNone?n.getAnimatableNone(t):void 0,ro=e,io=t,ao}function so(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var co=e=>e*180/Math.PI,lo=e=>fo(co(Math.atan2(e[1],e[0]))),uo={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scaleZ:()=>1,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:lo,rotateZ:lo,skewX:e=>co(Math.atan(e[1])),skewY:e=>co(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},fo=e=>(e%=360,e<0&&(e+=360),e),po=lo,mo=e=>Math.hypot(e[0],e[1]),ho=e=>Math.hypot(e[4],e[5]),go={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:mo,scaleY:ho,scaleZ:e=>Math.hypot(e[8],e[9],e[10]),scale:e=>(mo(e)+ho(e))/2,rotateX:e=>fo(co(Math.atan2(e[6],e[5]))),rotateY:e=>fo(co(Math.atan2(-e[2],e[0]))),rotateZ:po,rotate:po,skewX:e=>co(Math.atan(e[4])),skewY:e=>co(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function _o(e){return+!!e.includes(`scale`)}function vo(e,t){if(!e||e===`none`)return _o(t);let n=e.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);if(!n)return _o(t);let r=(n[1]?go:uo)[t],i=n[2].split(`,`).map(e=>parseFloat(e));return typeof r==`function`?r(i):i[r]}var yo=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return vo(n,t)},bo=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`scaleZ`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],W=new Set([...bo,`pathRotation`]),xo=e=>e===Br||e===I,So=new Set([`x`,`y`,`z`]),Co=bo.filter(e=>!So.has(e));function wo(e){let t=[];return Co.forEach(n=>{let r=e.getValue(n);if(r!==void 0){let e=r.get(),i=+!!n.startsWith(`scale`);if(e===i)return;t.push([n,e]),r.set(i)}}),t}var To=new Set([`bottom`,`right`]);function Eo(e,t,n,r,i,a){let o=parseFloat(e);if(!isNaN(o))return o;let{min:s,max:c}=t()[n],l=c-s;return a===`border-box`?l:l-parseFloat(r)-parseFloat(i)}var G=({transform:e})=>vo(e,`x`),Do=({transform:e})=>vo(e,`y`),Oo={width:({width:e,paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r},i)=>Eo(e,i,`x`,t,n,r),height:({height:e,paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r},i)=>Eo(e,i,`y`,t,n,r),top:({top:e})=>parseFloat(e),left:({left:e})=>parseFloat(e),bottom:({top:e},t)=>{let{y:n}=t();return parseFloat(e)+(n.max-n.min)},right:({left:e},t)=>{let{x:n}=t();return parseFloat(e)+(n.max-n.min)},x:G,y:Do,translateX:G,translateY:Do},ko=new Set,Ao=!1,jo=!1,Mo=!1;function No(){if(jo){let e=[],t=new Set,n=new Set;ko.forEach(r=>{r.needsMeasurement&&(e.push(r),t.add(r.element),To.has(r.name)&&n.add(r.element))});let r=new Map;n.forEach(e=>{let t=wo(e);t.length&&(r.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=r.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}jo=!1,Ao=!1,ko.forEach(e=>e.complete(Mo)),ko.clear()}function Po(){ko.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(jo=!0)})}function Fo(){Mo=!0,Po(),No(),Mo=!1}function Io(e,t,n){if(typeof e==`string`){if(tr(e)||rr(e))return parseFloat(e);if(!wi.test(e)&&wi.test(n))return oo(t,n)}return e??void 0}var Lo=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(ko.add(this),Ao||(Ao=!0,B.read(Po),B.resolveKeyframes(No))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=Io(n.readValue(t,a),t,a);r!==void 0&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}so(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ko.delete(this)}cancel(){this.state===`scheduled`&&(ko.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Ro=e=>e.startsWith(`--`);function zo(e,t,n){Ro(t)?e.style.setProperty(t,n):e.style[t]=n}var Bo={};function Vo(e,t){let n=ir(e);return()=>Bo[t]??n()}var Ho=Vo(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Uo=Vo(()=>window.ViewTimeline!==void 0,`viewTimeline`),Wo=Vo(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Go=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ko={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Go([0,.65,.55,1]),circOut:Go([.55,0,1,.45]),backIn:Go([.31,.01,.66,-.59]),backOut:Go([.33,1.53,.69,.99])};function qo(e,t){if(e)return typeof e==`function`?Wo()?Yi(e,t):`ease-out`:Dr(e)?Go(e):Array.isArray(e)?e.map(e=>qo(e,t)||Ko.easeOut):Ko[e]}function Jo(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=qo(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function Yo(e){return typeof e==`function`&&`applyToOptions`in e}function Xo({type:e,...t}){return Yo(e)&&Wo()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var Zo=class extends Ha{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e;let c=Xo(e);this.animation=Jo(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=this.onFinish=()=>{if(this.animation.onfinish=null,this.finishedTime=this.time,!i){let e=Pa(r,this.options,o,this.speed);this.updateMotionValue?.(e),zo(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()},Ba(this,e,c)}play(){this.isStopped||(this.manualStartTime=null,this.animation.onfinish=this.onFinish,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.isStopped||(this.animation.onfinish=this.onFinish),this.animation.finish?.()}cancel(){this.animation.onfinish=null;try{this.animation.cancel()}catch{}}stop(){this.isStopped||(this.isStopped=!0,this.state!==`idle`&&this.finishedTime===null&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel()))}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return ur(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+ur(e)}get time(){return ur(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=lr(e),t&&(this.animation.pause(),this.updateFinished())}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,onAttach:t,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=this.onFinish=null,e&&Ho()?(this.animation.timeline=e,t?.(this.animation),ar):n(this)}},Qo={anticipate:yr,backInOut:vr,circInOut:Sr};function $o(e){return e in Qo}function es(e){typeof e.ease==`string`&&$o(e.ease)&&(e.ease=Qo[e.ease])}var ts=class extends Zo{constructor(e){es(e),Ia(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}elapsed(){return this.state===`running`?(F.now()-this.startTime)*this.speed:this.time*1e3}sample(e){if(!this.sampler){let{motionValue:e,onUpdate:t,onComplete:n,onPlay:r,onStop:i,element:a,...o}=this.options;this.sampler=new Ga({...o,autoplay:!1}),this.sampler.stop()}return this.sampler.sample(Math.max(0,e)).value}liveValue(){let{state:e}=this;if(e===`running`||e===`paused`)return this.sample(this.elapsed())}updateMotionValue(e){let{motionValue:t,element:n,name:r}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let{speed:i}=this,a=this.elapsed(),o=this.state===`running`&&i?$n(0,10,a):0,s=this.sample(a);n&&r&&zo(n,r,s),t.setWithVelocity(this.sample(a-o*Math.sign(i)),s,o/Math.abs(i||1))}},ns=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(wi.test(e)||e===`0`)&&!e.startsWith(`url(`));function rs(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function is(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=ns(i,t),s=ns(a,t);return!o||!s?!1:rs(e)||(n===`spring`||Yo(n))&&r}function as(e){e.duration=0,e.type=`keyframes`}var os=new Set([`opacity`,`clipPath`,`filter`,`transform`]),ss=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function cs(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&ss.test(e[t]))return!0;return!1}var ls=({mixer:e,keyframes:t})=>e&&typeof t[0]!=`number`&&t.some((n,r)=>r&&e(t[r-1],n)),us=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),ds=()=>!er.useManualTiming&&Object.hasOwnProperty.call(Element.prototype,`animate`);function fs(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!n||!(os.has(n)||us.has(n)))return!1;let c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return ds()&&(os.has(n)||us.has(n)&&cs(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`&&!ls(e)}var ps=(e,t)=>t&&typeof e==`number`?t.transform(e):e,ms={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},hs=bo.length,gs={},_s=(e,t,n=ps(t,Qa[e]))=>(gs[e]||(gs[e]=(ms[e]||e)+`(`))+n+`)`,vs=(e,t)=>(typeof t==`number`?t:parseFloat(t))===+!!e.startsWith(`scale`);function ys(e,t,n){let r=``;for(let i=0;i<hs;i++){let a=bo[i],o=e[a];if(o===void 0)continue;let s=n&&(t[a]=ps(o,$a[a]));vs(a,o)||(r+=_s(a,o,s||void 0)+` `)}let i=e.pathRotation;return i&&(r+=_s(`rotate`,i)),r=r.trim(),n?n(t,r):r||`none`}var bs=new WeakMap,xs=200,Ss=.001,Cs=.1,ws=.001,Ts=100,Es=100,Ds=new Set([`linear`,`easeIn`,`easeOut`,`easeInOut`]),Os=e=>Ds.has(e),ks=new WeakMap,As=(e,t)=>{let n=ks.get(e);return n?.[0]!==t&&(n=[t,`linear(`+Da(Array(t+1)).map(t=>Wa(e(t))+` `+Wa(t*100)+`%`)+`)`],ks.set(e,n)),n[1]},js=(e,t)=>Math.min(xs,Math.max(2,Math.ceil((t-e)/10))),Ms=(e,t)=>Math.abs(e-t)<=Ss,Ns=(e,t)=>e-t,Ps=(e,t,n)=>Da(Array(n+1)).map(n=>z(e,t,n)),Fs=e=>e.motionValue.owner,Is=e=>bs.get(e),Ls=({state:e})=>e===`idle`||e===`finished`,Rs=(e,t)=>e.latestValues?e.latestValues[t]:e.getValue(t)?.get(),zs=({name:e,motionValue:t})=>e&&bo.includes(e)&&t?.owner?.current instanceof HTMLElement&&ds()&&Wo();function Bs(e){let t=Fs(e),{onUpdate:n,transformTemplate:r}=t.getProps();return!e.isHandoff&&!n&&!e.hasOnUpdate&&!r&&e.type!==`inertia`&&(Rs(t,`transform`)||`none`)===`none`&&!Rs(t,`pathRotation`)&&!t.projection?.isProjecting()&&!ls(e)}var Vs=class{constructor(e,t,n,r){this.element=e,this.update=t,this.makeDriver=n,this.animation=r}get js(){return this.driver||=this.makeDriver(this.update)}now(){return this.driver||this.makeDriver!==Ji?this.js.now():P.isProcessing?P.timestamp:F.now()}start(e=!0){let t=Is(this.element);!t||t.isJS?this.js.start(e):t.schedule(!1,!e)}stopJS(){this.driver?.stop()}stop(){this.stopJS();let e=Is(this.element);e&&!e.isFinishing&&e.release(this.animation)}},Hs,Us=class extends Ga{constructor(e){let t=Fs(e).current,{driver:n=Ji}=e,r,i=Bs(e);e.driver=e=>new Vs(t,e,n,r),super(e),r=this;let a=this.driver;a&&(a.animation=this),this.canAccelerate=i;let{stop:o}=this;this.stop=()=>{this.isAccelerated()&&this.sync(),o()}}offsets(){let{keyframes:e,times:t}=this.options;return t||(this.offsetsOf!==e&&(this.offsetsOf=e,this.cachedOffsets=Da(e)),this.cachedOffsets)}get group(){return Is(Fs(this.options).current)}get js(){return this.driver?.js}stopJS(){this.driver?.stopJS()}get name(){return this.options.name}timing(){let{startTime:e,speed:t,totalDuration:n}=this,{delay:r=0,repeatType:i}=this.options;return this.holdTime===null?n===1/0?[e+r/t,this.resolvedDuration*(i===`loop`?1:2)/t||1]:[e+(r+n)/t,0]:[1/0,0]}isAccelerated(){let{group:e,state:t}=this;return e?.tracks.has(this)&&!e.isJS&&this.canAccelerate&&(t===`running`||t===`paused`)}liveValue(){return this.isAccelerated()?this.sampleAt(F.now()):void 0}tween(){let{keyframes:e,type:t,repeat:n,delay:r=0}=this.options,i=-1;if(n||t!==Aa||this.holdTime!==null)return;for(let t=1;t<e.length;t++)if(e[t]!==e[t-1]){if(i>=0)return;i=t-1}let{ease:a}=this.options;Er(a)&&(a=a[i]);let o=this.offsets(),s=e=>this.startTime+(r+o[e]*this.totalDuration)/this.speed;if(i>=0){let e=Dr(a)?Go(a):Os(a)?Ko[a]:Ar(a);return[s(i),s(i+1),typeof e==`string`||Ms(e(0),0)&&Ms(e(1),1)?e:void 0]}}boundaries(e,t){let{startTime:n,speed:r,resolvedDuration:i,options:a}=this,{delay:o=0,repeat:s=0,repeatDelay:c=0,repeatType:l,type:u}=a,d=(u||Aa)===Aa?this.offsets():[0,1],f=n+o/r,p=[];if(this.holdTime!==null||!(i>0))return p;for(let n=Math.max(0,Math.floor((e-f)*r/i));n<=s;n++){let a=f+n*i/r;if(a>t)break;for(let o of d){let s=a+(n%2&&l&&l!==`loop`?1-o:o)*(i-c)/r;s>e&&s<t&&p.push(s)}}return p}numberAt(e){return parseFloat(this.sampleAt(e,!0))}sync(){let e=F.now(),t=this.sampleAt(e,!0);this.options.motionValue.setWithVelocity(this.holdTime===null?this.sampleAt(e-10,!0):t,t,10)}play(){this.isStopped||((this.group||Ks(Fs(this.options))).tracks.add(this),super.play())}pause(){super.pause(),this.isAccelerated()&&this.group.schedule(!1)}complete(){super.complete();let{group:e}=this;e&&!e.isJS&&this.tick(F.now())}get time(){return this.isAccelerated()?ur($n(0,this.totalDuration,this.at(F.now())-(this.options.delay||0))):super.time}set time(e){(Hs??=Object.getOwnPropertyDescriptor(Ga.prototype,`time`).set).call(this,e)}attachTimeline(e){return this.canAccelerate=!1,this.group?.demote(!0),super.attachTimeline(e)}},Ws,Gs=e=>{Ws||queueMicrotask(()=>{let e=Ws;Ws=void 0,e.forEach(e=>e())}),(Ws||=[]).push(e)};function Ks(e){let t=e.current,n=new Set,r=new Map,i={},a=[],o=new Map,s=[],c=!1,l=!1,u=!1,d=!1,f=-1/0,p,m=1/0,h,g=e=>{for(let t of n)if(t.name===e)return!0},_=(t,n)=>{let o={};for(let s of t===void 0?bo:a){let a=r.get(s),c=t===void 0?Rs(e,s):a?a.sampleAt(n>t&&!a.timing()[1]?n:t):i[s];c!==void 0&&(o[s]=c)}return o},v=(e,t)=>{let n=``;for(let r in e){let i=e[r];t&&vs(r,i)||(n+=_s(r,i)+` `)}return(t?n.trim():n)||`none`},y=(e,t)=>v(_(e,t)),b=(e=_())=>{t.style.transform=v(e,!0)},x=e=>{e.onfinish=e.oncancel=null,e.cancel()},S=(e=!0)=>{clearTimeout(p),m=1/0,h=void 0,e&&b(),s.forEach(({animation:e})=>x(e)),s=[]},C=(e,n)=>new Animation(new KeyframeEffect(t,e,n)),w=(e,t,n=1/0)=>{let r={animation:e,offset:t,end:n};e.startTime=F.now()+t,n<1/0&&(e.onfinish=()=>{r.isDone=!0,s.some(e=>e.end===1/0)&&(x(e),s=s.filter(e=>e!==r)),D.schedule(!1)}),e.oncancel=()=>s.includes(r)&&D.demote(),s.push(r)},ee=(e,t,n)=>{let r=(t,n)=>Math.abs(e(n)-e(t)),i=r(t,n);for(;n-t>.01;){let e=(t+n)/2;r(t,e)>r(e,n)?n=e:t=e}return r(t,n)>i/2?[t,n]:[]},te=(e,t,n,r)=>{let i=js(t,n);if(r.length*4>i)return;let a;for(let r of e){let e=r.numberAt(t),i=(r.numberAt((t+n)/2)-e)/(r.numberAt(n)-e);if(i===i){if(a===void 0)a=i;else if(!Ms(i,a))return}}let o=Ps(t,n,i).concat(r).sort(Ns),s=e=>sr(t,n,e),c,l;for(let n of e){let e=n.numberAt(t),r=o.map(t=>n.numberAt(t)-e),i=r[r.length-1],a=r.some(e=>Math.abs(e)*Ss>Math.abs(i))?0:i,s=r.map(e=>a?e/a:e);if(a&&!c)c=s,l=t=>(n.numberAt(t)-e)/a;else if(s.some((e,t)=>!Ms(e,a&&c[t])))return}if(!c||c.every((e,t)=>Ms(e,s(o[t]))))return`linear`;let u=[],d=(e,t=l(e))=>u.push(Wa(t)+` `+Wa(s(e)*100)+`%`);return c.forEach((e,t)=>{t&&Math.abs(e-c[t-1])>.2&&ee(l,o[t-1],o[t]).forEach(e=>d(e)),d(o[t],e)}),`linear(`+u+`)`},ne=(e,t,n,r)=>{let i=[t],a=[],o=n,s=t;for(let r of e){let e=r.tween();if(e?.[2]!==`linear`){let[i,c]=r.timing(),[l,u]=e||[t,c?n:i];o=Math.min(o,l),s=Math.max(s,u),a.push(r)}}o=Math.max(t,o),s=Math.min(n,s);let c=(e,t)=>a.every(n=>!(Math.abs(n.numberAt((e+t)/2)-(n.numberAt(e)+n.numberAt(t))/2)>(n.name.startsWith(`scale`)?ws:Cs))),l=(t,n,r)=>{if(n-t<1||c(t,n))i.push(n);else if(r<4)l(t,(t+n)/2,r+1),l((t+n)/2,n,r+1);else{for(let r of e)i.push(...ee(e=>r.numberAt(e),t,n));i.push(n)}},u=s>o?Ps(o,s,Math.ceil((s-o)/100)):[];u.push(n);for(let e of r)u.push(e,Math.min(e+.01,n));let d=t;for(let e of u.sort(Ns))e>d&&l(d,e,0),d=e;return i.sort(Ns)},re=e=>{let t;for(let n of e){let e=n.tween();if(!e||t&&(Math.abs(e[0]-t[0])>1||Math.abs(e[1]-t[1])>1))return;t=[e[0],e[1],!t||e[2]===t[2]?e[2]:void 0]}return t},ie=(e,t,n,r,i={fill:`both`},a)=>{let o=r?[]:e.flatMap(e=>e.boundaries(t,n)),s=r||te(e,t,n,o),c=s?[t,n]:ne(e,t,n,o),l=c.map(e=>y(e,a)),u={transform:l};return s||(u.offset=c.map(e=>sr(t,n,e))),l.every(e=>e===l[0])&&(b(_(t,a)),u=null),C(u,{...i,duration:n-t,easing:s||`linear`})},ae=e=>{let t=F.now()+e;t<m&&(clearTimeout(p),m=t,p=setTimeout(()=>{m=1/0,D.schedule(!1)},e))},oe=t=>{let c=t,l=0,u=0,d=[],f=[],p=new Set;r.clear(),o=new Map;for(let e of n){r.set(e.name,e);let[n,i]=e.timing(),a=n===1/0;if(o.set(e,[e.at(t),e.speed,a]),!a){if(e.speed<0)return;if(i){if(l){let e=(n-u)/i;if(Math.abs(i-l)>1||Math.abs(e-Math.round(e))*l>1)return}else l=i,u=n;f.push(e)}else p.add(n);d.push(e),c=Math.max(c,n)}}i={},a=bo.filter(t=>{if(r.has(t))return!0;let n=i[t]=Rs(e,t);return n!==void 0&&!vs(t,n)}),S(!1);let m=!l&&re(d);try{if(c>t){let e;if(m&&m[1]>t){let[n,r,i]=m;if(n-t>Es)return d.forEach(e=>e.sync()),ae(h=n-t-Es),!0;e=typeof i==`string`?i:i?As(i,js(n,r)):te(d,n,r,[]),e&&w(ie(d,n,r,e,{fill:`both`,endDelay:c-r}),n-t,c-n)}e||w(ie(d,t,c),0,c-t),p.forEach(e=>e<c-1&&w(C(null,{duration:e-t}),0,e-t))}if(l){let e=u+Math.floor((c-u)/l)*l;w(ie(f,e,e+l,void 0,{iterations:1/0,iterationStart:(c-e)/l,fill:`forwards`},c),c-t)}}catch{return}return s.length||S(),!0},T=(e,t)=>{let r,i=0;for(let t of n){let n=o.get(t);if(!n)return!1;let[a,c,l]=n,u=t.at(e),d=t.timing()[0]===1/0;if(l){if(d&&(u===a||!s.length))continue;return!1}let f=(u-a)/c,p=d?0:t.speed/c;if(r===void 0)r=f,i=p;else if(Math.abs(f-r)>1||p!==i)return!1}if(r===void 0)return!0;if(!s.length){if(h===void 0||t&&i)return!1;if(i){let e=(h-r)/i;if(e<1)return!1;ae(e)}return!0}for(let{offset:e,end:n,isDone:i}of s){let a=r-e;if(n<1/0&&(i?a<n-1:a<0&&(t||e<=0)||a>=n))return!1}for(let{animation:t,offset:n,isDone:a}of s){if(a)continue;let o=r-n;i&&t.updatePlaybackRate&&t.playState===`running`&&Math.abs(Number(t.currentTime)-o)<20?t.playbackRate!==i&&t.updatePlaybackRate(i):i?(t.playbackRate!==i&&(t.playbackRate=i),t.startTime=e-o/i):(t.startTime=null,t.currentTime=o)}return!0},se=()=>!n.size&&(u=!0,Is(t)===D&&bs.delete(t),D.isJS||S(),!0),E=()=>{let t=F.now();if(D.isJS||(D.isFinishing=!0,n.forEach(n=>{let[r,a]=n.timing();n.state===`running`&&n.speed>0&&!a&&r<=t+1&&(n.complete(),i[n.name]=Rs(e,n.name),o.has(n)||(c=!0))}),D.isFinishing=!1),l=!1,u||(n.forEach(e=>Ls(e)&&n.delete(e)),se()))return;for(let e of n)if(!e.canAccelerate)return D.demote(!0);D.isJS&&(D.isJS=!1,c=!0,n.forEach(e=>e.stopJS()));let r=c,a=d;if(c=d=!1,r||!T(t,a)){if(a){if(t-f<Ts)return D.demote();f=t}if(!oe(t))return D.demote()}else if(h!==void 0&&!a)return;n.forEach(e=>e.timing()[0]===1/0&&e.sync())},D={tracks:n,isJS:!1,isFinishing:!1,schedule(e,t){u||(c||=e,d||=!!t,l||(l=!0,P.isProcessing?B.render(E,!1,!0):Gs(E)))},release(e){Ls(e)&&n.delete(e),se()||D.schedule(!0)},check(){if(!D.isJS){for(let t in i)if(Rs(e,t)!==i[t]&&!g(t))return D.schedule(!0,!0)}},demote(e){if(!(D.isJS||u))return n.forEach(t=>{t.isAccelerated()&&t.sync(),e||(t.canAccelerate=!1)}),D.isJS=!0,o=new Map,S(),n.forEach(e=>e.state===`running`&&e.js?.start()),!0}};return bs.set(t,D),D}var qs=class extends Ha{constructor(e){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=F.now();let{keyframes:t,name:n,motionValue:r,element:i}=e,a=e;a.autoplay??=!0,a.delay??=0,a.type??=`keyframes`,a.repeat??=0,a.repeatDelay??=0,a.repeatType??=`loop`;let o=i?.KeyframeResolver||Lo;this.keyframeResolver=new o(t,(e,t,n)=>this.onKeyframesResolved(e,t,a,!n),n,r,i),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=F.now();let u=is(e,i,a,o);u||((er.instantAnimations||!s)&&l?.(Pa(e,n,t)),e[0]=e[e.length-1],as(n),n.repeat=0);let{onComplete:d}=n;n.finalKeyframe=t,n.keyframes=e,n.onComplete=()=>{d?.(),this.notifyFinished()};let f=u&&!c&&fs(n),p=!f&&zs(n);r&&(f||p||this.resolvedAt!==this.createdAt)&&(n.startTime??=Ra(this.createdAt,this.resolvedAt));let m;if(f){n.element=n.motionValue?.owner?.current;try{m=new ts(n)}catch{m=new Ga(n)}}else m=p?new Us(n):new Ga(n);this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this._animation.finished:super.finished}then(e,t){return this.finished.finally(e).then(()=>{})}liveValue(){return this._animation?.liveValue?.()}get animation(){return this._animation||(this.keyframeResolver?.resume(),Fo()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation?.cancel(),this.keyframeResolver?.cancel()}};function Js(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Ys=30,Xs=e=>!isNaN(parseFloat(e)),Zs={current:void 0},Qs=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=F.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.dirty(),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=F.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Xs(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){var n;return e===`change`?this.onChangeSubscribe(t):((n=this.events)[e]||(n[e]=new cr)).add(t)}onChangeSubscribe(e){let{events:t}=this;return!t.change&&!this.changeSubscriber?this.changeSubscriber=e:(t.change||(t.change=new cr,t.change.add(this.changeSubscriber),this.changeSubscriber=void 0),t.change.add(e)),()=>{this.changeSubscriber===e?this.changeSubscriber=void 0:t.change?.remove(e),this.stopIfUnobserved()}}stopIfUnobserved(){B.read(()=>{!this.changeSubscriber&&!this.events.change?.getSize()&&this.stop()})}clearListeners(){this.changeSubscriber=void 0;for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){t&&(this.updatedAt=F.now(),this.stop()),this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,this.stopPassiveEffect?.()}dirty(){let{current:e,changeSubscriber:t}=this;t?t(e):this.events.change?.notify(e)}addDependent(e){(this.dependents||=new Set).add(e)}removeDependent(e){this.dependents?.delete(e)}get(){Zs.current?.push(this);let e=this.animation?.liveValue?.();return e===void 0?this.current:e}getCurrent(){return this.current}getPrevious(){return this.prev}getVelocity(){let e=F.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ys)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Ys);return dr(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return new Promise(t=>this.run(e,t))}run(e,t){this.stop(),this.hasAnimated=!0;let n=!1,r;r=e(()=>{n=!0,this.events.animationComplete?.notify(),this.animation===r&&(this.animation=void 0),t?.()}),n||(this.animation=r),this.events.animationStart?.notify()}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel?.notify()),this.animation=void 0}isAnimating(){return!!this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect?.()}};function $s(e,t){return new Qs(e,t)}function ec(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function tc(e,t){let n=e?.[t]??e?.default??e;return n===e?n:ec(n,e)}var nc={type:`spring`,stiffness:500,damping:25,restSpeed:10},rc=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),ic={type:`keyframes`,duration:.8},ac={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},oc=(e,{keyframes:t})=>t.length>2?ic:W.has(e)?e.startsWith(`scale`)?rc(t[1]):nc:ac,sc=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`,`out`,`mixer`]);function cc(e){for(let t in e)if(!sc.has(t))return!0;return!1}var lc=(e,t,n,r={},i,a)=>o=>{let s=tc(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=lr(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i,hasOnUpdate:!!s.onUpdate};cc(s)||Object.assign(u,oc(e,u)),u.duration&&=lr(u.duration),u.repeatDelay&&=lr(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(as(u),u.delay===0&&(d=!0)),(er.instantAnimations||er.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,as(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Pa(u.keyframes,s);if(e!==void 0){B.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Ga(u):new qs(u)},uc=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function dc(e){let t=uc.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function fc(e,t,n=1){let[r,i]=dc(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return tr(e)?parseFloat(e):e}return Lr(i)?fc(i,t,n+1):i}function pc(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function mc(e,t,n,r){let i=t=>typeof t==`function`?t(n===void 0?e.custom:n,...pc(r)):t;return t=i(t),typeof t==`string`&&(t=e.variants&&e.variants[t]),i(t)}function hc(e,t,n){return mc(e.getProps(),t,n,e)}var gc=(e,t)=>t===`exit`?e.presenceContext?.custom:void 0,_c=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...bo]),K=e=>Array.isArray(e);function vc(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,$s(n))}function yc(e){return K(e)?e[e.length-1]||0:e}function bc(e,t){let{transitionEnd:n={},transition:r={},...i}=hc(e,t)||{};i={...i,...n};for(let t in i)vc(e,t,yc(i[t]))}var xc=e=>!!(e&&e.getVelocity);function Sc(e){return!!(xc(e)&&e.add)}function Cc(e,t){let n=e.getValue(`willChange`);if(Sc(n))return n.add(t);if(!n&&er.WillChange){let n=new er.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}var wc=`data-framer-appear-id`;function Tc(e){return e.props[wc]}var Ec=typeof window<`u`;function Dc({protectedKeys:e,needsAnimating:t},n){let r=n in e&&!t[n];return t[n]=!1,r}function Oc(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?ec(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState?.getState()[i],p=a?.path;p&&(p.animateValues?p.animateValues(t=>e.getValue(t,e.latestValues[t]??0),s,a,n,d):p.animateVisualElement?.(e,s,a,n,d));for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&Dc(f,t))continue;let o={delay:n,...tc(f?.out[t]||a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){B.update(()=>r.set(i));continue}let p=!1;if(Ec&&window.MotionHandoffAnimation){let n=Tc(e);if(n){let e=window.MotionHandoffAnimation(n,t,B);e!==null&&(o.startTime=e,p=!0)}}Cc(e,t);let m=l??e.shouldReduceMotion;r.run(lc(t,r,i,m&&_c.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>B.update(()=>{o&&bc(e,o)});d.length?Promise.all(d).then(t):t()}return d}function kc(e,t,n={}){let r=hc(e,t,gc(e,n.type)),i=n.transitionOverride||(r?.transition??(e.getDefaultTransition()||{})),a=()=>Promise.all(r?Oc(e,r,n):[]),o=(r=0)=>{let{variantChildren:a}=e,{delayChildren:o=0,staggerChildren:s,staggerDirection:c}=i,l=[];return a?.forEach(e=>{e.notify(`AnimationStart`,t),l.push(kc(e,t,{...n,delay:r+(typeof o==`function`?0:o)+Js(a,e,o,s,c)}).then(()=>e.notify(`AnimationComplete`,t)))}),Promise.all(l)},{when:s}=i;return s?s===`beforeChildren`?a().then(()=>o()):o().then(a):Promise.all([a(),o(n.delay)])}function Ac(e,t,n={}){return e.notify(`AnimationStart`,t),(Array.isArray(t)?Promise.all(t.map(t=>kc(e,t,n))):typeof t==`string`?kc(e,t,n):Promise.all(Oc(e,hc(e,t,n.custom),n))).then(()=>{e.notify(`AnimationComplete`,t)})}var jc={test:e=>e===`auto`,parse:e=>e},Mc=e=>t=>t.test(e),Nc=[Br,I,ni,ti,ii,ri,jc],Pc=e=>Nc.find(Mc(e));function Fc(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||rr(e)}var Ic=new Set([`auto`,`none`,`0`]);function Lc(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Ic.has(t)&&gi(t)&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]!==i&&(e[r]=oo(n,i))}var Rc=class extends Lo{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}scheduleResolve(){if(this.canReadNow()&&(this.readKeyframes(),!this.needsMeasurement))return this.complete();super.scheduleResolve()}canReadNow(){let{unresolvedKeyframes:e,element:t,motionValue:n}=this,r=e[0]??n?.get();if(!t?.current||r===void 0)return!1;for(let t=0;t<e.length;t++)if(zr(t?e[t]:r))return!1;return!0}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t?.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Lr(r))){let i=fc(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!_c.has(n)||e.length!==2)return;let[r,i]=e;if(typeof r==`number`&&typeof i==`number`)return;let a=Pc(r),o=Pc(i);if(zr(r)!==zr(i)&&Oo[n])this.needsMeasurement=!0;else if(a!==o){if(xo(a)&&xo(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Oo[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Fc(e[t]))&&n.push(t);n.length&&Lc(e,n,t)}measure(){let{element:e,name:t}=this;return Oo[t](window.getComputedStyle(e.current),()=>e.measureViewportBox())}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e?.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=this.measure(),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&this.motionValue?.jump(r,!1)}measureEndState(){let{element:e,unresolvedKeyframes:t}=this;if(!e?.current)return;this.motionValue?.jump(this.measuredOrigin,!1);let n=t.length-1,r=t[n];t[n]=this.measure(),r!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=r),this.resolveNoneKeyframes()}},zc=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function Bc(e){return nr(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}function Vc(e){return nr(e)&&`ownerSVGElement`in e}var Hc={};function Uc(e){return Hc.current?.add(e),e}var Wc=e=>Hc.current?Hc.current.bind(e):e;function Gc(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=t?t.current:Hc.current?.root||document,i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}function Kc(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}function q(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(W.has(e))o=!0;else if(Fr(e))i[e]=n;else{let t=ps(n,$a[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=ys(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}var qc={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Jc={offset:`strokeDashoffset`,array:`strokeDasharray`};function Yc(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?qc:Jc;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Xc=[`transform`,`opacity`,`clipPath`,`filter`,`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Zc(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(q(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;for(let e of Xc)d[e]!==void 0&&(f[e]=d[e],delete d[e]);(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Yc(d,i,a,o,!1)}function Qc({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function $c({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function el(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function tl(e){return e===void 0||e===1}function nl({scale:e,scaleX:t,scaleY:n}){return!tl(e)||!tl(t)||!tl(n)}var rl=[`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skewX`,`skewY`];function J(e){return nl(e)||al(e)||il(e)}function il(e){return e.z||e.rotate||e.rotateX||e.rotateY||e.rotateZ||e.skewX||e.skewY}function al(e){return ol(e.x)||ol(e.y)}function ol(e){return e&&e!==`0%`}function sl(e,t,n){return n+t*(e-n)}function cl(e,t,n,r,i){return i!==void 0&&(e=sl(e,i,r)),sl(e,n,r)+t}function ll(e,t=0,n=1,r,i){e.min=cl(e.min,t,n,r,i),e.max=cl(e.max,t,n,r,i)}function ul(e,{x:t,y:n}){ll(e.x,t.translate,t.scale,t.originPoint),ll(e.y,n.translate,n.scale,n.originPoint)}var dl=.999999999999,fl=1.0000000000001;function pl(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++)a=n[s],o=a.projectionDelta,a.options.visualElement?.props.style?.display!==`contents`&&(r===!0&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(ml(e.x,-a.scroll.offset.x),ml(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,ul(e,o)),r&&(r.path?.[s]||r)!==a&&J(a.latestValues)&&_l(e,a.latestValues,a.layout?.layoutBox));t.x<fl&&t.x>dl&&(t.x=1),t.y<fl&&t.y>dl&&(t.y=1)}function ml(e,t){e.min+=t,e.max+=t}function hl(e,t,n,r,i=.5){ll(e,t,n,z(e.min,e.max,i),r)}function gl(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function _l(e,t,n){let r=n??e;hl(e.x,gl(t.x,r.x),t.scaleX,t.scale,t.originX),hl(e.y,gl(t.y,r.y),t.scaleY,t.scale,t.originY)}function vl(e,t){return Qc(el(e.getBoundingClientRect(),t))}function yl(e,t,n){let r=vl(e,n),{scroll:i}=t;return i&&(ml(r.x,i.offset.x),ml(r.y,i.offset.y)),r}var bl=()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),{schedule:xl,cancel:Sl}=qi(queueMicrotask,!1);function Cl(e,t,n){let r=xc(e)?e:$s(e);return r.run(lc(``,r,t,n)),r.animation}var wl={},Tl={value:null,addProjectionMetrics:null,countProjection:void 0};function El(e,t){let n=F.now();e=Wc(e);let r=({timestamp:i})=>{let a=i-n;a>=t&&(V(r),e(a-t))};return B.setup(r,!0),Uc(()=>V(r))}function Dl(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Ol(e){return Vc(e)&&e.tagName===`svg`}function kl(e){return xc(e)?e.get():e}var Al=e=>typeof e==`number`?e:parseFloat(e),jl=zc.length,Ml=e=>typeof e==`number`||I.test(e);function Nl(e,t,n,r,i,a){i?(e.opacity=z(0,n.opacity??1,Fl(r)),e.opacityExit=z(t.opacity??1,0,Il(r))):a&&(e.opacity=z(t.opacity??1,n.opacity??1,r));for(let i=0;i<jl;i++){let a=zc[i],o=Pl(t,a),s=Pl(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||Ml(o)===Ml(s)?(e[a]=Math.max(z(Al(o),Al(s),r),0),(ni.test(s)||ni.test(o))&&(e[a]+=`%`)):e[a]=s)}for(let i=0;i<rl.length;i++){let a=rl[i];(t[a]||n[a])&&(e[a]=z(t[a]||0,n[a]||0,r))}}function Pl(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Fl=Ll(0,.5,xr),Il=Ll(.5,.95,ar);function Ll(e,t,n){return r=>r<e?0:r>t?1:n(sr(e,t,r))}function Rl(e,t){e.min=t.min,e.max=t.max}function zl(e,t){Rl(e.x,t.x),Rl(e.y,t.y)}function Bl(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Vl=.9999,Hl=1.0001,Y=-.01,Ul=.01;function Wl(e){return e.max-e.min}function Gl(e,t,n){return Math.abs(e-t)<=n}function Kl(e,t,n,r=.5){e.origin=r,e.originPoint=z(t.min,t.max,e.origin),e.scale=Wl(n)/Wl(t),e.translate=z(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Vl&&e.scale<=Hl||isNaN(e.scale))&&(e.scale=1),(e.translate>=Y&&e.translate<=Ul||isNaN(e.translate))&&(e.translate=0)}function ql(e,t,n,r){Kl(e.x,t.x,n.x,r?.originX),Kl(e.y,t.y,n.y,r?.originY)}function Jl(e,t,n,r=0){e.min=(r?z(n.min,n.max,r):n.min)+t.min,e.max=e.min+Wl(t)}function Yl(e,t,n,r){Jl(e.x,t.x,n.x,r?.x),Jl(e.y,t.y,n.y,r?.y)}function Xl(e,t,n,r=0){let i=r?z(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Wl(t)}function Zl(e,t,n,r){Xl(e.x,t.x,n.x,r?.x),Xl(e.y,t.y,n.y,r?.y)}function Ql(e,t,n,r,i){return e-=t,e=sl(e,1/n,r),i!==void 0&&(e=sl(e,1/i,r)),e}function $l(e,t=0,n=1,r=.5,i,a=e,o=e){if(ni.test(t)&&(t=parseFloat(t),t=z(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=z(a.min,a.max,r);e===a&&(s-=t),e.min=Ql(e.min,t,n,s,i),e.max=Ql(e.max,t,n,s,i)}function eu(e,t,[n,r,i],a,o){$l(e,t[n],t[r],t[i],t.scale,a,o)}var tu=[`x`,`scaleX`,`originX`],nu=[`y`,`scaleY`,`originY`];function ru(e,t,n,r){eu(e.x,t,tu,n?.x,r?.x),eu(e.y,t,nu,n?.y,r?.y)}var iu=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),au=iu(`applewebkit/`)&&!iu(`chrome/`)?Math.round:ar;function ou(e){e.min=au(e.min),e.max=au(e.max)}function su(e){ou(e.x),ou(e.y)}var cu=()=>({translate:0,scale:1,origin:0,originPoint:0}),lu=()=>({x:cu(),y:cu()}),uu=()=>({min:0,max:0}),X=()=>({x:uu(),y:uu()});function du(e){return e.translate===0&&e.scale===1}function fu(e){return du(e.x)&&du(e.y)}function pu(e,t){return e.min===t.min&&e.max===t.max}function mu(e,t){return pu(e.x,t.x)&&pu(e.y,t.y)}function hu(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function gu(e,t){return hu(e.x,t.x)&&hu(e.y,t.y)}function _u(e){return Wl(e.x)/Wl(e.y)}function vu(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}var yu=class{constructor(){this.members=[]}add(e){Zn(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;r&&r.isConnected!==!1||n.snapshot||(Qn(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(Qn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}};function bu(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var xu={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(I.test(e))e=parseFloat(e);else return e}return`${bu(e,t.target.x)}% ${bu(e,t.target.y)}%`}},Su={borderRadius:Object.assign({},xu,{applyTo:zc.slice()}),borderTopLeftRadius:xu,borderTopRightRadius:xu,borderBottomLeftRadius:xu,borderBottomRightRadius:xu,boxShadow:{correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=wi.parse(e);if(i.length>5)return r;let a=wi.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=z(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}}};function Cu(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;(i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `);let s=``;if(n){let{transformPerspective:e}=n;e&&(r=`perspective(${e}px) ${r}`);for(let e=0;e<rl.length;e++){let t=rl[e],r=n[t];r&&(s+=`${t}(${r}deg) `),!e&&n.pathRotation&&(s+=`rotate(${n.pathRotation}deg) `)}}if(s){(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),r+=s;let n=e.x.scale*t.x,i=e.y.scale*t.y;(n!==1||i!==1)&&(r+=`scale(${n}, ${i})`)}else e.x.scale!==1||e.y.scale!==1?r+=`scale(${e.x.scale}, ${e.y.scale})`:r||t.x===1&&t.y===1||(r=`scale(1, 1)`);return r||`none`}function wu(e){return[e(`x`),e(`y`)]}var Tu=(e,t)=>e.depth-t.depth,Eu=class{constructor(){this.children=[],this.isDirty=!1}add(e){Zn(this.children,e),this.isDirty=!0}remove(e){Qn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Tu),this.isDirty=!1,this.children.forEach(e)}},Du={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ou=[`z`,`skew`,`skewZ`],ku=1e3,Au=0;function ju(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}var Mu=e=>e.instance&&bs.get(e.instance)?.demote()&&e.resetSkewAndRotation();function Nu(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Tc(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,B,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Nu(r)}function Pu(e){if(e)return e.options.allowProjection===!1?Pu(e.parent):e.projection}function Fu({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return Object.assign(wl,{...Su,...wl}),class{static create(e,t,n){let{layoutId:r,layout:i,drag:a,dragConstraints:o,layoutScroll:s,layoutRoot:c,layoutAnchor:l,layoutCrossfade:u}=t,d=e.projection=new this(e.latestValues,t[`data-framer-portal-id`]?void 0:Pu(e.parent));d.setOptions({layoutId:r,layout:i,alwaysMeasureLayout:!!a||o&&Dl(o),visualElement:e,animationType:typeof i==`string`?i:`both`,initialPromotionConfig:n,crossfade:u,layoutScroll:s,layoutRoot:c,layoutAnchor:l});let f=d.getStack()?.lead;f&&!d.root.isUpdateBlocked()&&(f.willUpdate(),f.scheduleCheckAfterUnmount())}constructor(e={},n=t?.()){this.id=Au++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Ru),this.nodes.forEach(Yu),this.nodes.forEach(Xu),this.nodes.forEach(zu),Tl.countProjection?.()},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Eu)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new cr),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){this.eventHandlers.get(e)?.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Vc(t)&&!Ol(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent?.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;B.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n?.(),n=El(i,250),Du.hasAnimatedSinceResize&&(Du.hasAnimatedSinceResize=!1,this.nodes.forEach(Ju)))})}n&&this.root.registerSharedNode(n,this),this.addLayoutListener()}addLayoutListener(){let{layoutId:e,layout:t,visualElement:n,animate:r}=this.options;this.instance&&!this.hasLayoutListener&&r!==!1&&n&&(e||t)&&(this.hasLayoutListener=!0,this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:r,layout:i})=>{if(this.isAnimationBlocked){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||n.getDefaultTransition()||nd,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=n.getProps(),c=!this.targetLayout||!gu(this.targetLayout,i),l=!t&&r;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...tc(a,`layout`),onPlay:o,onComplete:s};(n.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||Ju(this),this.isLead()&&this.options.onExitComplete?.();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),this.getStack()?.remove(this),this.parent?.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),this.hasLayoutListener=!1,V(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes?.forEach(Zu),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete?.();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Nu(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;Mu(this),this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,Mu(t),(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1),t.isAnimationBlocked&&(t.dragSnapshot||=t.measure(),this.dragAncestor=t)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Hu),this.nodes.forEach(Vu);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Uu);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Gu),this.nodes.forEach(Ku),this.nodes.forEach(qu),this.nodes.forEach(Iu),this.nodes.forEach(Lu)):this.nodes.forEach(Uu),this.clearAllSnapshots();let e=F.now();P.delta=$n(0,1e3/60,e-P.timestamp),P.timestamp=e,P.isProcessing=!0,H.update.process(P),H.preRender.process(P),H.render.process(P),P.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,xl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Bu),this.sharedNodes.forEach((e,t)=>e.members.length?e.removeLeadSnapshot():this.sharedNodes.delete(t))}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,B.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){B.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),this.snapshot&&!Wl(this.snapshot.measuredBox.x)&&!Wl(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected||=X(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t?.notify(`LayoutMeasure`,this.layout.layoutBox,e?.layoutBox)}updateScroll(e=`measure`){let{scroll:t,instance:i}=this,{animationId:a}=this.root;if(this.options.layoutScroll&&i&&!(t&&t.animationId===a&&t.phase===e)){let o=r(i);this.scroll={animationId:a,phase:e,isRoot:o,offset:n(i),wasRoot:t?t.isRoot:o}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout;e&&Mu(this);let t=this.projectionDelta&&!fu(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||J(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),su(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return X();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(ad))){let{scroll:e}=this.root;e&&(ml(t.x,e.offset.x),ml(t.y,e.offset.y))}return t}removeElementScroll(e){let t=X();if(zl(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&zl(t,e),ml(t.x,i.offset.x),ml(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n,r,i=0){let a=n||X();zl(a,e);for(let e=i;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(ml(a.x,-n.scroll.offset.x),ml(a.y,-n.scroll.offset.y)),J(n.latestValues)&&_l(a,n.latestValues,n.layout?.layoutBox)}return!r&&J(this.latestValues)&&_l(a,this.latestValues,this.layout?.layoutBox),a}removeTransform(e){let t=X();zl(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!J(n.latestValues))continue;let r;n.instance&&(nl(n.latestValues)&&n.updateSnapshot(),r=X(),zl(r,n.measurePageBox())),ru(t,n.latestValues,n.snapshot?.layoutBox,r)}return J(this.latestValues)&&ru(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade},this.addLayoutListener()}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==P.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=P.timestamp;let a=this.getClosestProjectingParent();!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),(this.relativeTarget||this.targetDelta)&&(this.target||(this.target=X(),this.targetWithTransforms=X()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Yl(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target,!0):zl(this.target,this.layout.layoutBox),ul(this.target,this.targetDelta)):zl(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&(!a.resumingFrom==!this.resumingFrom||a.options.layoutRoot&&!a.resumingFrom)&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Tl.countProjection?.(1))}getClosestProjectingParent(){if(!(!this.parent||nl(this.parent.latestValues)||al(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=X(),this.relativeTargetOrigin=X(),Zl(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),zl(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===P.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent?.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;zl(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;pl(this.layoutCorrected,this.treeScale,this.path,t&&(e.relativeTarget&&!e.relativeParent.resumingFrom?e.relativeParent:!0)),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=X());let{target:s}=e;s?(!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Bl(this.prevProjectionDelta.x,this.projectionDelta.x),Bl(this.prevProjectionDelta.y,this.projectionDelta.y)),ql(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===a&&this.treeScale.y===o&&vu(this.projectionDelta.x,this.prevProjectionDelta.x)&&vu(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Tl.countProjection?.(2)):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){this.options.visualElement?.scheduleRender(),e&&this.getStack()?.scheduleRender(),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=lu(),this.projectionDelta=lu(),this.projectionDeltaWithTransform=lu()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=lu();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=X(),c=r?.source!==this.layout?.source,l=this.getStack(),u=!l||l.members.length<=1,d=!(!c||u||this.options.crossfade!==!0||this.path.some(td));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);Qu(o.x,e.x,n),Qu(o.y,e.y,n),r&&(o.x.translate=r.x,o.y.translate=r.y),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Zl(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),ed(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&mu(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=X(),zl(f,this.relativeTarget)),c&&(this.animationValues=a,Nl(a,i,this.latestValues,n,d,u)),r?.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(V(this.pendingAnimation),void 0),this.pendingAnimation=B.update(()=>{Du.hasAnimatedSinceResize=!0,this.motionValue||=$s(0),this.motionValue.jump(0,!1),this.currentAnimation=Cl(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),Va(this.currentAnimation,this),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta?.(ku),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,layout:n,latestValues:r}=e,{target:i}=e;if(t&&i&&n){if(this!==e&&this.layout&&n&&id(this.options.animationType,this.layout.layoutBox,n.layoutBox)){let{layoutBox:e}=this.layout,t=i;i=this.target||X(),rd(i.x,t.x,e.x),rd(i.y,t.y,e.y)}zl(t,i),_l(t,r),ql(this.projectionDeltaWithTransform,this.layoutCorrected,t,r)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new yu),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?.transition,preserveFollowOpacity:n?.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){this.getStack()?.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){return this.getStack()?.relegate(this)||!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let{latestValues:t}=e;if(!il(t))return;let n={};for(let t=0;t<Ou.length;t++)ju(Ou[t],e,n,this.animationValues);for(let t=0;t<rl.length;t++)ju(rl[t],e,n,this.animationValues);e.render();for(let t in n)e.setStaticValue(t,n[t]),this.animationValues&&(this.animationValues[t]=n[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;let n=this.getLead();if(!this.isVisible&&n!==this){e.visibility=`hidden`;return}let r=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=kl(t?.pointerEvents)||``,e.transform=r?r(this.latestValues,``):`none`;return}if(!this.projectionDelta||!this.layout||!n.target){(this.options.layoutId||this.needsShow)&&(this.needsShow=!1,e.visibility=``,e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=kl(t?.pointerEvents)||``),this.hasProjected&&!J(this.latestValues)&&(e.transform=r?r({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=n.animationValues||n.latestValues;this.applyTransformsToTarget();let a=Cu(this.projectionDeltaWithTransform,this.treeScale,i);r&&(a=r(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=n.animationValues?n===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:n===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in wl){if(i[t]===void 0)continue;let{correct:r,applyTo:o,isCSSVariable:s}=wl[t],c=a===`none`?i[t]:r(i[t],n);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=n===this?kl(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=this.dragSnapshot=this.dragAncestor=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Vu),this.root.sharedNodes.clear()}}}function Iu(e){e.updateLayout(),Wu(e)}function Lu(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source,o=(r,a)=>{if(i===`size`)wu(e=>{let t=Wl(r[e]);r[e].min=a[e].min,r[e].max=r[e].min+t});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;Rl(r[e],a[e])}else id(i,t.layoutBox,n)&&wu(t=>{let n=Wl(a[t]);r[t].max=r[t].min+n,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[t].max=e.relativeTarget[t].min+n)})},s=a?t.measuredBox:t.layoutBox;o(s,n);let c=lu();ql(c,n,t.layoutBox);let l=lu();ql(l,a?e.applyTransform(r,!0):n,s);let u=!fu(c),d=!1,f=e.getClosestProjectingParent();if((!a||f?.options.layoutRoot&&e.resumeFrom?.path.includes(f))&&f&&!f.resumeFrom){let{snapshot:r,layout:i}=f;if(r&&i){let s=e.options.layoutAnchor||void 0,c=X();Zl(c,a?e.resumeFrom.applyTransform(t.layoutBox,!0,void 0,!0,f.depth+1):t.layoutBox,r.layoutBox,s);let l=X();Zl(l,n,i.layoutBox,s),a&&o(c,l),gu(c,l)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=l,e.relativeTargetOrigin=c,e.relativeParent=f)}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:l,layoutDelta:c,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else e.isLead()&&e.options.onExitComplete?.();e.options.transition=void 0}function Ru(e){Tl.countProjection?.(0),e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function zu(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Bu(e){e.clearSnapshot()}function Vu(e){e.clearMeasurements()}function Hu(e){e.isLayoutDirty=!0,e.updateLayout()}function Uu(e){e.isLayoutDirty=!1}function Wu(e){let{snapshot:t,dragAncestor:n}=e,r=n?.isAnimationBlocked&&n.layout;if(!t||!r||e.resumeFrom||e.isAnimationBlocked)return;let i=n.dragSnapshot;wu(e=>ml(t.layoutBox[e],r.layoutBox[e].min-i.layoutBox[e].min))}function Gu(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.dragSnapshot||e.layout,e.isLayoutDirty=!0)}function Ku(e){e.relativeTarget&&e.relativeParent?.isLayoutDirty&&(e.currentAnimation?e.isLayoutDirty=!0:(e.targetDelta=void 0,e.removeRelativeTarget()))}function qu(e){let{visualElement:t}=e.options;t?.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Ju(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Yu(e){e.resolveTargetDelta()}function Xu(e){e.calcProjection()}function Zu(e){e.resetSkewAndRotation()}function Qu(e,t,n){e.translate=z(t.translate,0,n),e.scale=z(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function $u(e,t,n,r){e.min=z(t.min,n.min,r),e.max=z(t.max,n.max,r)}function ed(e,t,n,r){$u(e.x,t.x,n.x,r),$u(e.y,t.y,n.y,r)}function td(e){return e.animationValues?.opacityExit!==void 0}var nd={duration:.45,ease:[.4,0,.1,1]};function rd(e,t,n){e.max=Wl(n)+(e.min=t.min)}function id(e,t,n){return e===`position`||e===`preserve-aspect`&&!Gl(_u(t),_u(n),.2)}function ad(e){return e!==e.root&&e.scroll?.wasRoot}function od(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var sd=Fu({attachResizeListener:(e,t)=>od(e,`resize`,t),measureScroll:bl,checkIsScrollRoot:()=>!0}),cd={current:void 0},ld=Fu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!cd.current){let e=new sd({});e.mount(window),e.setOptions({layoutScroll:!0}),cd.current=e}return cd.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),ud=new WeakMap;function dd(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function fd(e){return typeof e==`string`||Array.isArray(e)}var pd=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],md=[`initial`].concat(pd);function hd(e){if(dd(e.animate))return!0;for(let t=0;t<md.length;t++)if(fd(e[md[t]]))return!0;return!1}function gd(e){return!!(hd(e)||e.variants)}function _d(e,t,n){for(let r in t){let i=t[r],a=n[r];if(xc(i))e.addValue(r,i);else if(xc(a))e.addValue(r,$s(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,$s(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var vd={current:null},yd={current:!1},bd=typeof window<`u`;function xd(){if(yd.current=!0,bd){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>vd.current=e.matches;e.addEventListener(`change`,t),t()}else vd.current=!1}}var Sd=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Cd={};function wd(e){Cd=e}function Td(){return Cd}var Ed=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Lo,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=F.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,B.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=hd(t),this.isVariantNode=gd(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&xc(t)&&t.set(c[e])}}mount(e){let t=this.presenceContext;if(this.hasBeenMounted&&t?.isPresent!==!1&&!t?.keepValuesOnRemount)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];if(this.current=e,ud.set(e,this),this.projection?.instance||this.projection?.mount(e),this.isVariantNode&&!this.isControllingVariants){let e=this;do e=e.props.inherit!==!1&&e.parent;while(e&&!e.isVariantNode);if(e){let{variantChildren:t}=e;t.add(this),this.removeFromVariantTree=()=>t.delete(this)}}this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(yd.current||xd(),this.shouldReduceMotion=vd.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection?.unmount(),V(this.notifyUpdate),V(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree?.(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),(this.enteringChildren||=new Set).add(e)}removeChild(e){this.children.delete(e),this.enteringChildren?.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.get(e)?.(),t.accelerate&&os.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new Zo({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:lr(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=W.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&B.preRender(this.notifyUpdate),n&&(this.projection&&(this.projection.isTransformDirty=!0),bs.get(this.current)?.check()),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i?.()})}sortNodePosition(e){return!this.current||!e.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Cd){let t=Cd[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):X()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){let{transformTemplate:n,onUpdate:r}=this.props;(e.transformTemplate||n)&&this.scheduleRender(),(e.transformTemplate&&!n||e.onUpdate&&!r)&&bs.get(this.current)?.demote(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Sd.length;t++){let n=Sd[t];this.propEventSubscriptions[n]?.(),delete this.propEventSubscriptions[n];let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=_d(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue?.()}getProps(){return this.props}getVariant(e){return this.props.variants?.[e]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}addValue(e,t){let n=this.values.get(e);if(t!==n){n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t);let r=t.get();r!==void 0&&(this.latestValues[e]=r)}}removeValue(e){this.values.delete(e),this.valueSubscriptions.get(e)?.(),this.valueSubscriptions.delete(e),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){let n=this.props.values?.[e];return n||(n=this.values.get(e),n===void 0&&t!==void 0&&(n=$s(t??this.getDefaultValue?.(e),{owner:this}),this.addValue(e,n)),n)}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(tr(n)||rr(n))?n=parseFloat(n):typeof n!=`number`&&!wi.test(n)&&wi.test(t)&&(n=oo(e,t)),this.setBaseTarget(e,xc(n)?n.get():n)),xc(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}on(e,t){return(this.events[e]||(this.events[e]=new cr)).add(t)}notify(e,...t){this.events[e]?.notify(...t)}scheduleRenderMicrotask(){xl.render(this.render)}},Dd=class extends Ed{constructor(){super(...arguments),this.KeyframeResolver=Rc}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;xc(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}};function Od(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function kd(e,{layout:t,layoutId:n}){return W.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!wl[e]||e===`opacity`)}function Ad(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(xc(r[t])||i&&xc(i[t])||kd(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function jd(e){return window.getComputedStyle(e)}var Md=class extends Dd{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Od}mount(e){super.mount(e)}readValueFromInstance(e,t){if(W.has(t))return this.projection?.isProjecting?_o(t):yo(e,t);{let n=jd(e),r=(Fr(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return vl(e,t)}build(e,t,n){q(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Ad(e,t,n)}},Nd=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1;function Pd(e){return{point:{x:e.pageX,y:e.pageY}}}var Fd=e=>t=>Nd(t)&&e(t,Pd(t));function Id(e,t,n,r){return od(e,t,Fd(n),r)}var Ld=new WeakMap,Rd,zd=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:Vc(r)&&`getBBox`in r?r.getBBox()[t]:r[n],Bd=zd(`inline`,`width`,`offsetWidth`),Vd=zd(`block`,`height`,`offsetHeight`);function Hd({target:e,borderBoxSize:t}){Ld.get(e)?.forEach(n=>{n(e,{get width(){return Bd(e,t)},get height(){return Vd(e,t)}})})}function Ud(e){e.forEach(Hd)}function Wd(){typeof ResizeObserver<`u`&&(Rd=new ResizeObserver(Ud))}function Gd(e,t){Rd||Wd();let n=Gc(e);return n.forEach(e=>{let n=Ld.get(e);n||(n=new Set,Ld.set(e,n)),n.add(t),Rd?.observe(e)}),()=>{n.forEach(e=>{let n=Ld.get(e);n?.delete(t),n?.size||Rd?.unobserve(e)})}}var Kd=new Set,qd;function Jd(){qd=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Kd.forEach(t=>t(e))},window.addEventListener(`resize`,qd)}function Yd(e){return Kd.add(e),qd||Jd(),()=>{Kd.delete(e),!Kd.size&&typeof qd==`function`&&(window.removeEventListener(`resize`,qd),qd=void 0)}}function Xd(e,t){return Uc(typeof e==`function`?Yd(e):Gd(e,t))}var Zd=(e,t)=>Math.abs(e-t);function Qd(e,t){let n=Zd(e.x,t.x),r=Zd(e.y,t.y);return Math.sqrt(n**2+r**2)}var $d=new Set([`auto`,`scroll`]),ef=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o,immediate:s}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.hasPendingMove=!1,this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=nf(this.lastRawMoveEventInfo,this.transformPagePoint));let e=af(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Qd(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e;this.history.push({...r,timestamp:F.now()});let{onStart:i,onMove:a}=this.handlers;t||(i?.(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a?.(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.handleScroll(window),this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=nf(t,this.transformPagePoint),this.hasPendingMove=!0,B.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.hasPendingMove&&this.updatePoint(),this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i?.(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=af(e.type===`pointercancel`?this.lastMoveEventInfo:nf(t,this.transformPagePoint),this.history);this.startEvent&&n?.(e,a),r?.(e,a)},!Nd(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=s?0:a,this.contextWindow=r||window;let c=Pd(e),l=nf(c,this.transformPagePoint),{point:u}=l;this.history=[{...u,timestamp:F.now()}];let{onSessionStart:d}=t;d&&d(e,af(l,this.history));let f={passive:!0,capture:!0};this.removeListeners=or(Id(this.contextWindow,`pointermove`,this.handlePointerMove,f),Id(this.contextWindow,`pointerup`,this.handlePointerUp,f),Id(this.contextWindow,`pointercancel`,this.handlePointerUp,f)),o&&this.startScrollTracking(o),s&&(this.handlePointerMove(e,c),this.updatePoint())}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);($d.has(e.overflowX)||$d.has(e.overflowY))&&this.scrollPositions.set(t,tf(t)),t=t.parentElement}this.scrollPositions.set(window,tf(window)),this.removeScrollListeners=or(od(window,`scroll`,this.onElementScroll,{capture:!0}),od(window,`scroll`,this.onWindowScroll,{}))}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=tf(e),i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),B.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners?.(),this.removeScrollListeners?.(),this.scrollPositions.clear(),V(this.updatePoint)}},tf=e=>e===window?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop};function nf(e,t){return t?{point:t(e.point)}:e}function rf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function af({point:e},t){return{point:e,delta:rf(e,sf(t)),offset:rf(e,of(t)),velocity:cf(t,.1)}}function of(e){return e[0]}function sf(e){return e[e.length-1]}function cf(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=sf(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>lr(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>lr(t)*2&&(r=e[1]);let a=ur(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}var lf=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function uf(e){return lf.has(e.tagName)||e.isContentEditable===!0}var df=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function ff(e){return df.has(e.tagName)||e.isContentEditable===!0}var pf={x:!1,y:!1};function mf(){return pf.x||pf.y}function hf(e){return e===`x`||e===`y`?pf[e]?null:(pf[e]=!0,()=>{pf[e]=!1}):pf.x||pf.y?null:(pf.x=pf.y=!0,()=>{pf.x=pf.y=!1})}function gf(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?z(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?z(n,e,r.max):Math.min(e,n)),e}function _f(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function vf(e,{top:t,left:n,bottom:r,right:i}){return{x:_f(e.x,n,i),y:_f(e.y,t,r)}}function yf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function bf(e,t){return{x:yf(e.x,t.x),y:yf(e.y,t.y)}}function xf(e,t){let n=.5,r=Wl(e),i=Wl(t);return i>r?n=sr(t.min,t.max-r,e.min):r>i&&(n=sr(e.min,e.max-i,t.min)),$n(0,1,n)}function Sf(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var Cf=.35;function wf(e=Cf){return e===!1?e=0:e===!0&&(e=Cf),{x:Tf(e,`left`,`right`),y:Tf(e,`top`,`bottom`)}}function Tf(e,t,n){return{min:Ef(e,t),max:Ef(e,n)}}function Ef(e,t){return typeof e==`number`?e:e[t]||0}function Df(e){let t=``;for(let n of e.path){n.scroll=void 0,n.updateScroll();let{scroll:r}=n;n!==e.root&&r&&(t+=r.offset.x+`,`+r.offset.y+`,`)}return t}var Of=new WeakMap,kf=class{constructor(e,t=()=>e.getProps()){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=X(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e,this.readProps=t}start(e,t={}){if(this.visualElement.presenceContext?.isPresent===!1)return;let n=e=>{t.snapToCursor&&this.snapToCursor(e),this.stopAnimation()},r=(e,t)=>{let{drag:n,dragConstraints:r,dragPropagation:i,onDragStart:a}=this.getProps();if(n&&!i&&(this.openDragLock?.(),this.openDragLock=hf(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints();let{projection:o}=this.visualElement;o&&(o.isAnimationBlocked=!0,o.target=void 0),wu(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Lr(t)&&(t=fc(t,this.visualElement.current)||0),I.test(t))t=parseFloat(t);else if(ni.test(t)){let n=o?.layout?.layoutBox[e];n&&(t=Wl(n)*(parseFloat(t)/100))}this.originPoint[e]=t}),this.point=typeof r==`function`&&r(this),a&&B.update(()=>a(e,t),!1,!0),Cc(this.visualElement,`transform`),this.visualElement.animationState?.setActive(`whileDrag`,!0)},i=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){if(this.currentDirection=Ff(o),this.currentDirection===null)return;i&&i(this.currentDirection)}this.updateAxis(`x`,o),this.updateAxis(`y`,o),this.point&&this.point.move(),this.visualElement.render(),a&&B.update(()=>a(e,t),!1,!0)},a=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},o=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints||this.point)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:s}=this.getProps();this.panSession=new ef(e,{onSessionStart:n,onStart:r,onMove:i,onSessionEnd:a,resumeAnimation:o},{...t,transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:s,contextWindow:this.visualElement.current?.ownerDocument.defaultView,element:this.visualElement.current})}stop(e,t,n){let r=e||this.latestPointerEvent,i=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!i||!r)return;let{velocity:o}=i;this.startAnimation(o,n);let{onDragEnd:s}=this.getProps();s&&B.postRender(()=>s(r,i))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession(),!this.getProps().dragPropagation&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t?.setActive(`whileDrag`,!1)}endPanSession(){this.panSession?.end(),this.panSession=void 0}updateAxis(e,t){let{drag:n}=this.readProps();if(!t||!Pf(e,n,this.currentDirection))return;let r=this.getAxisMotionValue(e),i=this.originPoint[e]+t[e],a=this.constraints&&this.constraints[e];a&&(i=gf(i,a,this.elastic[e])),this.point?this.point[e]=i:r.set(i)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),{projection:n}=this.visualElement,r=n&&(n.layout||n.measure(!1)),i=this.constraints;Af(e)?this.constraints&&this.scroll===Df(n)||(this.constraints=this.resolveRefConstraints()):this.constraints=e&&r&&typeof e==`object`?vf(r.layoutBox,e):!1,this.elastic=wf(t),i!==this.constraints&&!Af(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&wu(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Sf(r.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!Af(e))return!1;let n=jf(e),{projection:r}=this.visualElement;if(!r||!r.layout)return!1;this.scroll=Df(r);let i=yl(n,r.root,this.visualElement.getTransformPagePoint()),a=bf(r.layout.layoutBox,r.removeElementScroll(i));if(t){let e=t($c(a));this.hasMutatedConstraints=!!e,e&&(a=Qc(e))}return a}startAnimation(e,t){let{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),c={bounceStiffness:i?200:1e6,bounceDamping:i?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...a},l=i=>r&&!(this.point&&o)&&Pf(i,t||n,this.currentDirection)?e[i]:0;if(this.point&&!o)return this.point.release({x:l(`x`),y:l(`y`)},c).then(s);let u=this.constraints||{},d=wu(e=>{if(!Pf(e,t||n,this.currentDirection))return;let r=u[e]||{};(o===!0||o===e)&&(r={min:0,max:0});let i={type:`inertia`,velocity:l(e),...c,...r};return this.startAxisValueAnimation(e,i)});return Promise.all(d).then(s)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Cc(this.visualElement,e),n.start(lc(e,n,0,t,this.visualElement,!1))}stopAnimation(){wu(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.readProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor({clientX:e,clientY:t}){let{drag:n}=this.getProps(),r={x:e,y:t},i=this.visualElement.getTransformPagePoint()?.(r)||r,a=this.visualElement.measureViewportBox();wu(e=>{if(!Pf(e,n,this.currentDirection))return;let t=this.getAxisMotionValue(e),{min:r,max:o}=a[e];t.set((t.get()||0)+i[e]-z(r,o,.5))})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Af(t)||!n||!this.constraints)return;this.stopAnimation();let r=this.constraints,i={x:0,y:0};wu(e=>{let t=this.getAxisMotionValue(e).get();i[e]=xf({min:t,max:t},r[e])});let{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},``):`none`,n.root?.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),wu(t=>{let n=this.getAxisMotionValue(t);if(!Pf(t,e,null)||!n.get())return;let{min:r,max:a}=this.constraints[t];n.set(z(r,a,i[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Of.set(this.visualElement,this);let e=this.visualElement.current,t=Id(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&ff(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps(),r=Af(t)&&jf(t);r&&(this.constraints=this.resolveRefConstraints(),n||=Nf(e,r,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i.layout||(i.root?.updateScroll(),i.updateLayout()),B.read(r);let o=od(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(wu(t=>{if(!Pf(t,this.getProps().drag,this.currentDirection))return;let n=this.getAxisMotionValue(t);this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate)}),this.visualElement.render())}));return()=>{o(),t(),a(),s(),n?.()}}getProps(){let e=this.readProps(),{dragElastic:t=Cf,dragMomentum:n=!0}=e;return{...e,dragElastic:t,dragMomentum:n}}};function Af(e){return!!e&&typeof e==`object`&&(`current`in e||`nodeType`in e)}var jf=e=>`current`in e?e.current:e;function Mf(e){let t=!0;return()=>{t?t=!1:e()}}function Nf(e,t,n){let r=Xd(e,Mf(n)),i=Xd(t,Mf(n));return()=>{r(),i()}}function Pf(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Ff(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}function If(e,t){let n=Gc(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},Uc(()=>r.abort())]}function Lf(e){return!(e.pointerType===`touch`||mf())}function Rf(e,t,n={}){t=Wc(t);let[r,i,a]=If(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{e.pointerType!==`touch`&&(n?r=!0:s(e))};e.addEventListener(`pointerenter`,n=>{if(!Lf(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var zf=(e,t)=>t?e===t||zf(e,t.parentElement):!1,Bf=new WeakSet;function Vf(e){return t=>{t.key===`Enter`&&e(t)}}function Hf(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Uf=(e,t)=>{let n=!1,r=Vf(()=>{n||Bf.has(e)||(n=!0,Hf(e,`down`))}),i=Vf(()=>{n&&(n=!1,Hf(e,`up`))});e.addEventListener(`keydown`,r,t),e.addEventListener(`keyup`,i,t),e.addEventListener(`blur`,()=>{e.removeEventListener(`keydown`,r),e.removeEventListener(`keyup`,i),n&&Hf(e,`cancel`)},{...t,once:!0})};function Wf(e){return Nd(e)&&!mf()}var Gf=new WeakSet,Kf=100,qf=8,Jf=(e,t,n)=>Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)>n,Yf=e=>e.preventDefault();function Xf(e,t,n={}){t=Wc(t);let[r,i,a]=If(e,n),o=new WeakMap,s=e=>{let r=e.currentTarget;if(!Wf(e)||Gf.has(e))return;n.stopPropagation&&Gf.add(e);let{count:a=1,countTimeout:s=.3,hold:c=0,repeat:l}=n,u=F.now(),d=lr(c),f=lr(s),p=o.get(r);p?.expire(Jf(p.event,e,Kf))?p=void 0:p&&(V(p.expire),o.delete(r));let m=p?p.count+1:1,h=m>=a,g=h&&(c||l),_=!c,v=0,y;if(Bf.add(r),p)y=p.handlers;else{let n=t(r,e);y=typeof n==`function`?{onComplete:n}:n||{}}h&&_&&y.onActive?.();let b=lr(l),x=d||b,S=u+x,C=!0,w=()=>{if(i.signal.aborted)return V(w);let e=Math.min(1-(S-F.now())/x,1);C&&e<1&&(e=0),C=!1,y.onHold?.(e),e<1||(_?y.onRepeat?.(++v):(_=!0,y.onActive?.()),l?(C=!0,S+=x=b):V(w))},ee={...i,capture:!0},te=(t,n)=>{if(window.removeEventListener(`pointerup`,ne,ee),window.removeEventListener(`pointercancel`,re,ee),window.removeEventListener(`pointermove`,ie,ee),r.removeEventListener(`contextmenu`,Yf),V(w),Bf.delete(r),Nd(t)){if(mf()&&(n=!1),n&&!h){let n=F.now(),a=e=>{let s=i.signal.aborted;if(s||e===!0||F.now()-n>f)return V(a),o.delete(r),s||y.onComplete?.(t,{success:!1}),!0};o.set(r,{count:m,event:e,handlers:y,expire:a}),B.update(a,!0)}else y.onComplete?.(t,{success:n&&_})}},ne=e=>{te(e,r===window||r===document||n.useGlobalTarget||zf(r,e.target))},re=e=>{te(e,!1)},ie=t=>{Nd(t)&&((l||!_)&&Jf(e,t,qf)||a>1&&mf())&&re(t)};window.addEventListener(`pointerup`,ne,ee),window.addEventListener(`pointercancel`,re,ee),(g||a>1)&&window.addEventListener(`pointermove`,ie,ee),g&&(B.update(w,!0),r.addEventListener(`contextmenu`,Yf,{...i,passive:!1}))};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,s,i),Bc(e)&&(e.addEventListener(`focus`,()=>Uf(e,i),i),!uf(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Zf(...e){let t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],s=U(i,a,o);return t?s(r):s}var Qf=new Set,$f=({timestamp:e})=>{Qf.forEach(t=>t.tick(e))},ep=class extends Ha{constructor(e){super(),this.state=`idle`,this.startTime=0,this.currentTime=0,this.started=!1,this.hasNextTarget=!1,this.nextTarget=0,this.stop=()=>{this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.factory=e.type,this.generator=this.factory(e);let{driver:t}=e;t&&(this.driver=t(e=>this.tick(e))),this.startTime=this.now(),this.state=`running`,this.driver?this.driver.start():(Qf.size||B.update($f,!0),Qf.add(this))}setTarget(e,t){this.nextTarget=e,this.nextVelocity=t,this.hasNextTarget=!0}retarget(e,t){let{options:n,generator:r}=this;n.keyframes=e,n.velocity=t,this.startTime=this.now(),this.currentTime=0,r.retarget?r.retarget(e,t):this.generator=this.factory(n)}tick(e){let{options:t,hasNextTarget:n}=this,{delay:r=0,onUpdate:i,onPlay:a}=t;this.started||(this.startTime=Ra(this.startTime,e));let o=Math.round(e-this.startTime)-r,s=this.currentTime=Math.max(0,o),c=this.generator.next(s),l=o<0?t.keyframes[0]:c.value;if(n){this.hasNextTarget=!1;let{keyframes:e}=t;e[0]=l,e[1]=this.nextTarget,this.retarget(e,this.nextVelocity??this.getGeneratorVelocity())}(n||!this.started)&&(this.started=!0,a?.()),this.state===`running`&&(i?.(l),c.done&&o>=0&&!n&&!this.hasNextTarget&&this.state===`running`&&(this.notifyFinished(),this.teardown(),this.state=`finished`,t.onComplete?.()))}getGeneratorVelocity(){return Na(this.generator,this.currentTime,this.options.velocity)}now(){return this.driver?this.driver.now():F.now()}teardown(){this.state=`idle`,this.driver?this.driver.stop():(Qf.delete(this),Qf.size||V($f))}};function tp(e,t,n){let r=e.get(),i=null,a,o=typeof r==`string`?r.replace(/[\d.-]/g,``):void 0,s=e=>a(o?e+o:e),c=()=>e.events.animationStart?.notify(),l=()=>{i&&=(i.stop(),null),e.animation=void 0};if(e.attach((t,r)=>{a=r;let o=Al(t);if(i?.state===`running`){i.setTarget(o,n.velocity);return}let u=Al(e.get()),d=i?i.getGeneratorVelocity():e.getVelocity();if(l(),u===o)return;let f=i=new ep({keyframes:[u,o],velocity:d,restDelta:.001,restSpeed:.01,...n,onUpdate:s,onPlay:c});e.animation=f,f.then(()=>{i===f&&(i=null,e.animation=void 0,e.events.animationComplete?.notify())})},l),xc(t)){let r=n.skipInitialAnimation===!0,i=t=>{r?(r=!1,e.jump(np(t,o),!1)):e.set(np(t,o))},a=t.on(`change`,i),s=t.get();Al(s)-Al(e.get())&&i(s);let c=e.on(`destroy`,a);return()=>{a(),c(),l()}}return l}function np(e,t){return t?e+t:e}function rp(e,t,n){return tp(e,t,{...n,type:Ca})}var ip=class{constructor(e){this.isMounted=!1,this.node=e}update(){}},ap=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),op=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function sp(e,t,n,r){Od(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(ap.has(n)?n:Kc(n),t.attrs[n])}function cp(e,t,n){let r=Ad(e,t,n);for(let n in e)if(n!==`children`&&(xc(e[n])||xc(t[n]))){let t=bo.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var lp=class extends Dd{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=X}getBaseTargetFromProps(e,t){return W.has(t)?super.getBaseTargetFromProps(e,t)??_o(t):e[t]}getDefaultValue(e){return W.has(e)?this.latestValues[e]??_o(e):void 0}readValueFromInstance(e,t){if(W.has(t)){let e=to(t);return e&&e.default||0}if(Xc.includes(t)){let n=getComputedStyle(e)[t];if(typeof n==`string`&&n)return n.trim()}return t=ap.has(t)?t:Kc(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return cp(e,t,n)}build(e,t,n){Zc(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){sp(e,t,n,r)}mount(e){this.isSVGTag=op(e.tagName),super.mount(e)}};function up(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var dp=[...pd].reverse(),fp=e=>e?.out===!0?e:e?.out;function pp(e){let t=t=>Promise.all(t.map(({animation:t,options:n})=>Ac(e,t,n))),n=hp(),r=!0,i=!1;function a(a){let{props:o,parent:s,manuallyAnimateOnMount:c}=e,{initial:l}=o,u=r||i,d=[],f=(t=l)=>typeof t!=`boolean`&&hc(e,Array.isArray(t)?t[0]:t,e.presenceContext?.custom)||void 0,p=new Map,m={},h=1/0,g=e;do g=g.props.inherit!==!1&&g.parent;while(g&&!g.isControllingVariants);let _=u&&fp(f(l??(g&&g.props.initial))?.transition);if(dp.forEach((t,r)=>{let i=n[t],l=o[t],f=g&&g.props[t],v=l===void 0?fd(f)||f===!1?f:void 0:l,y=fd(v),b=t===a?i.isActive:null,x=y&&l===void 0&&!(u&&c);if(i.protectedKeys={...m},!i.isActive&&b===null||!v&&!i.prevProp||dd(v)||typeof v==`boolean`)return;if(b===!1&&(h=r),t===`exit`&&i.isActive&&b!==!0){m={...m,...i.prevResolvedValues};return}let S=mp(i.prevProp,v),C=S||y&&(b&&!x||r>h),w=!1,ee=Array.isArray(v)?v:[v],te={},ne;if(b!==!1)for(let n of ee){let{transition:r,transitionEnd:i,...a}=hc(e,n,gc(e,t))||{};te={...te,...a,...i},ne=fp(r)||ne}let{prevResolvedValues:re}=i;for(let t in{...re,...te}){if(t in m)continue;let n=te[t],r=re[t],a=Array.isArray(n)&&Array.isArray(r)?!up(n,r)||S:n!==r,o;if(a&&n==null)p.has(t)||p.set(t,i.prevOut);else if(a||n!==void 0&&p.has(t)){C=!0,o=p.get(t)||_,p.delete(t)&&(w=!0),i.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)}else i.protectedKeys[t]=!0;i.out[t]=o}if(i.prevProp=v,i.prevResolvedValues=te,i.prevOut=ne,i.isActive&&(m={...m,...te}),C&&(!(x&&S)||w))for(let n of ee){let r={type:t};if(typeof n==`string`&&u&&c&&s?.enteringChildren){let t=hc(s,n)?.transition?.delayChildren;r.delay=Js(s.enteringChildren,e,t)}d.push({animation:n,options:r})}}),p.size){let t={},n=f(),r=n?.transition;p.forEach((i,a)=>{i&&(r={...r||e.getDefaultTransition(),[a]:i});let s=e.getValue(a);s&&(s.liveStyle=!0);let c=n&&!Array.isArray(l)?n[a]:void 0,u=e.getBaseTargetFromProps(o,a);t[a]=(c===void 0?u!==void 0&&!xc(u)?u:e.initialValues[a]===void 0?e.baseTarget[a]:void 0:c)??null}),r&&(t.transition=r),d.push({animation:t})}let v=u&&e.blockInitialAnimation||r&&!c&&(o.initial===!1||o.initial===o.animate);return r=i=!1,!v&&d.length?t(d):Promise.resolve()}function o(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=a(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:a,setActive:o,setAnimateFunction:n=>{t=n(e)},getState:()=>n,reset:()=>{n=hp(),i=!0}}}function mp(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!up(t,e):!1}function hp(){let e={};for(let t of pd)e[t]={isActive:t===`animate`,protectedKeys:{},needsAnimating:{},prevResolvedValues:{},out:{}};return e}var gp=(0,A.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function _p(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function vp(...e){return t=>{let n=!1,r=e.map(e=>{let r=_p(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():_p(e[t],null)}}}}function yp(...e){return A.useCallback(vp(...e),e)}var Z=Kn(),bp=e=>{let{width:t,height:n}=e?.getBoundingClientRect()||{};return[t/e?.offsetWidth||1,n/e?.offsetHeight||1]},xp=e=>{let{left:t,top:n}=e.getBoundingClientRect(),r=e;for(;r=r.parentElement||r.parentNode?.host;){let{scrollLeft:e,scrollTop:i}=r;if(e||i){let[a,o]=bp(r);t+=e*a,n+=i*o}if(getComputedStyle(r).position===`fixed`)break}let[i,a]=bp(e.offsetParent);return[t/i,n/a]},Sp=class extends A.Component{getSnapshotBeforeUpdate(e){let t=this.props.getElement();if(Bc(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Bc(e)&&e.offsetWidth||0,r=Bc(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction,a.point=xp(t)}return null}componentDidUpdate(){}render(){return this.props.children}};function Cp({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a,popNode:o}){let s=(0,A.useId)(),c=(0,A.useRef)(null),l=(0,A.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:u}=(0,A.useContext)(gp),d=yp(c,a===!1?void 0:e.props?.ref??e?.ref),f=()=>c.current||o?.current?.current,p=e=>{let{width:t,height:i,top:a,left:o,right:c,bottom:u,direction:d}=l.current,f=d===`rtl`,p=n===`left`?f?`right:${c}`:`left:${o}`:f?`left:${o}`:`right:${c}`,m=r===`bottom`?`bottom:${u}`:`top:${a}`;e?.insertRule(`[data-motion-pop-id="${s}"]{position:absolute!important;width:${t}px!important;height:${i}px!important;${p}px!important;${m}px!important}`)};return(0,A.useInsertionEffect)(()=>{let{width:e,height:n}=l.current,r=f();if(t||a===!1||!r||!e||!n)return;r.dataset.motionPopId=s;let o=r.ownerDocument,c=o.createElement(`style`);u&&(c.nonce=u);let d=i??o.head;d.appendChild(c),p(c.sheet);let m=0,h=0;return xl.setup(()=>{let[e,t]=xp(r);m=l.current.point[0]-e,h=l.current.point[1]-t}),xl.read(()=>{let{sheet:e}=c;if(!e||!m&&!h)return;let t=l.current;t.left+=m,t.right-=m,t.top+=h,t.bottom-=h,e.deleteRule(0),p(e)}),()=>{r.removeAttribute(`data-motion-pop-id`),d.contains(c)&&d.removeChild(c)}},[t]),(0,Z.jsx)(Sp,{isPresent:t,getElement:f,sizeRef:l,pop:a,children:a===!1?e:A.cloneElement(e,{ref:d})})}var wp=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Jn(Tp),d=(0,A.useId)(),f=(0,A.useRef)(),p=(0,A.useRef)(n),m=(0,A.useRef)(r);Yn(()=>{p.current=n,m.current=r});let h=!0,g=(0,A.useMemo)(()=>(h=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:(e,t)=>(u.set(e,!1),t&&t.parent?.presenceContext?.id!==d&&(f.current=t),()=>{u.delete(e),!p.current&&!u.size&&m.current?.()})}),[n,u,r]);return a&&h&&(g={...g}),(0,A.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),A.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,Z.jsx)(Cp,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,popNode:f,children:e}),(0,Z.jsx)(Xn.Provider,{value:g,children:e})};function Tp(){return new Map}function Ep(e=!0){let t=(0,A.useContext)(Xn);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,A.useId)();(0,A.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,A.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Dp=e=>e.key||``;function Op(e){let t=[];return A.Children.forEach(e,e=>{(0,A.isValidElement)(e)&&t.push(e)}),t}var kp=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Ep(o),f=(0,A.useMemo)(()=>Op(e),[e]),p=o&&!u?[]:f.map(Dp),m=(0,A.useRef)(!0),h=Jn(()=>new Map),g=(0,A.useRef)(new Set),[_,v]=(0,A.useState)(f),[y,b]=(0,A.useState)(f);Yn(()=>{o&&!u&&!y.length&&d?.()},[u,o,y.length,d]);let x=(0,A.useRef)();(0,A.useEffect)(()=>()=>{let e=x.current;x.current=void 0,e?.()},[y]),Yn(()=>{m.current=!1;for(let e=0;e<y.length;e++){let t=Dp(y[e]);p.includes(t)?(h.delete(t),g.current.delete(t)):h.get(t)!==!0&&h.set(t,!1)}},[y,p.length,p.join(`-`)]);let S=[];if(f!==_){let e=[...f],t=0;for(let n of y){let r=p.indexOf(Dp(n));r===-1?(e.splice(t++,0,n),S.push(n)):t=r+S.length+1}return S.every(e=>h.get(Dp(e)))?e=f:a===`wait`&&(e=S),b(Op(e)),v(f),null}let{forceRender:C}=(0,A.useContext)(qn);return(0,Z.jsx)(Z.Fragment,{children:y.map(e=>{let _=Dp(e),b=o&&!u?!1:f===y||p.includes(_);return(0,Z.jsx)(wp,{isPresent:b,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:b?void 0:()=>{if(g.current.has(_))return;if(h.has(_))g.current.add(_),h.set(_,!0);else return;let e=!0;h.forEach(t=>{t||(e=!1)}),e&&(C?.(),v([]),o&&d?.(),x.current=r)},anchorX:s,anchorY:c,children:e},_)})})},Ap=(0,A.createContext)({strict:!1}),jp={animation:[`variants`,...pd],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Mp=!1;function Np(){if(Mp)return;let e={};for(let t in jp)e[t]={isEnabled:e=>jp[t].some(t=>!!e[t])};wd(e),Mp=!0}function Pp(){return Np(),Td()}function Fp(e){let t=Pp();for(let n in e)t[n]={...t[n],...e[n]};wd(t)}var Ip=(0,A.createContext)({});function Lp(e,t){if(hd(e)){let{initial:t,animate:n}=e;return{initial:t===!1||fd(t)?t:void 0,animate:fd(n)?n:void 0}}return e.inherit===!1?{}:t}function Rp(e){let{initial:t,animate:n}=Lp(e,(0,A.useContext)(Ip));return(0,A.useMemo)(()=>({initial:t,animate:n}),[zp(t),zp(n)])}function zp(e){return Array.isArray(e)?e.join(` `):e}var Bp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Vp(e,t,n){for(let r in t)!xc(t[r])&&!kd(r,n)&&(e[r]=t[r])}function Hp({transformTemplate:e},t){return(0,A.useMemo)(()=>{let n=Bp();return q(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Up(e,t){let n=e.style||{},r={};return Vp(r,n,e),Object.assign(r,Hp(e,t)),r}function Wp(e,t){let n={},r=Up(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Gp=()=>({...Bp(),attrs:{}});function Kp(e,t,n,r){let i=(0,A.useMemo)(()=>{let n=Gp();return Zc(n,t,op(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};return Vp(t,e.style,e),{...i,style:{...t,...i.style}}}return i}var qp=new Set(`animate.exit.variants.initial.style.values.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.tap.propagate.ignoreStrict.viewport`.split(`.`));function Jp(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||qp.has(e)}function Yp(e,t){return e.startsWith(`on`)?!Jp(e):t?.(e)??!Jp(e)}function Xp(e,t,n,r){let i={};for(let a in e)a===`values`&&typeof e.values==`object`||xc(e[a])||(Yp(a,r)||n===!0&&Jp(a)||!t&&!Jp(a)||e.draggable&&a.startsWith(`onDrag`))&&(i[a]=e[a]);return i}var Zp=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Qp(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Zp.indexOf(e)>-1||/[A-Z]/u.test(e))}function $p(e,t,n,{latestValues:r},i,a=!1,o,s){let c=(o??Qp(e)?Kp:Wp)(t,r,i,e),l=Xp(t,typeof e==`string`,a,s),u=e===A.Fragment?{}:{...l,...c,ref:n},{children:d}=t,f=(0,A.useMemo)(()=>xc(d)?d.get():d,[d]);return(0,A.createElement)(e,{...u,children:f})}function em({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:tm(n,r,i,e),renderState:t()}}function tm(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=kl(a[e]);let{initial:o,animate:s}=e,c=hd(e),l=gd(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!dd(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=mc(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var nm=e=>(t,n)=>{let r=(0,A.useContext)(Ip),i=(0,A.useContext)(Xn),a=()=>em(e,t,r,i);return n?a():Jn(a)},rm=nm({scrapeMotionValuesFromProps:Ad,createRenderState:Bp}),im=nm({scrapeMotionValuesFromProps:cp,createRenderState:Gp}),am=Symbol.for(`motionComponentSymbol`);function om(e,t,n){let r=(0,A.useRef)(n);(0,A.useInsertionEffect)(()=>{r.current=n});let i=(0,A.useRef)(null);return(0,A.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var sm=(0,A.createContext)({});function cm(e,t,n,r,i,a){let{visualElement:o}=(0,A.useContext)(Ip),s=(0,A.useContext)(Ap),c=(0,A.useContext)(Xn),l=(0,A.useContext)(gp),u=l.reducedMotion,d=l.skipAnimations,f=(0,A.useRef)(null),p=(0,A.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,A.useContext)(sm);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&i.create(m,n,h),(0,A.useInsertionEffect)(()=>{m&&m.props!==n&&m.update(n,c)});let g=n[wc],_=(0,A.useRef)(!!g&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(g)&&window.MotionHasOptimisedAnimation?.(g));return Yn(()=>{p.current&&m&&(m.animationState?.animateChanges(),m.enteringChildren=void 0)},[]),Yn(()=>{p.current=!0,m&&(window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),_.current&&m.animationState&&m.animationState.animateChanges())}),(0,A.useEffect)(()=>{m&&(!_.current&&m.animationState&&m.animationState.animateChanges(),_.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(g)}),!1),m.enteringChildren=void 0)}),m}function lm(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Fp(r);let a=n?n===`svg`:Qp(e),o=a?im:rm;function s(n,s){let c,l=um(n);Jn(()=>!!cd.current?.sharedNodes.get(l)?.lead&&n.initial)&&(n={...n,initial:!1});let u={...(0,A.useContext)(gp),...n,layoutId:l},{isStatic:d,isValidProp:f}=u,p=Rp(n),m=o(n,d);if(!d&&typeof window<`u`){dm(u,r);let t=fm(u);p.visualElement=cm(e,m,u,i,t.ProjectionNode,a),(t.isEnabled||p.visualElement?.projection?.options.layoutId)&&(c=t.MeasureLayout)}return(0,Z.jsxs)(Ip.Provider,{value:p,children:[c&&p.visualElement?(0,Z.jsx)(c,{visualElement:p.visualElement,...u}):null,$p(e,n,om(m,p.visualElement,s),m,d,t,a,f)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,A.forwardRef)(s);return c[am]=e,c}function um({layoutId:e}){let t=(0,A.useContext)(qn).id;return t&&e!==void 0?t+`-`+e:e}function dm(e,t){(0,A.useContext)(Ap).strict}function fm(e){let{drag:t,layout:n}=Pp();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:r.MeasureLayout,isEnabled:t?.isEnabled(e)||n?.isEnabled(e),ProjectionNode:r.ProjectionNode}}function pm(e,t){if(typeof Proxy>`u`)return lm;let n=new Map,r=(n,r)=>lm(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,lm(a,void 0,e,t)),n.get(a))})}var mm=(e,t)=>t.isSVG??Qp(e)?new lp(t):new Md(t,{allowProjection:e!==A.Fragment}),hm=class extends ip{constructor(e){super(e),e.animationState||=pp(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();dd(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){this.node.getProps().animate!==this.node.prevProps?.animate&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},gm=0,_m={animation:{Feature:hm},exit:{Feature:class extends ip{constructor(){super(...arguments),this.id=gm++}update(){let{presenceContext:e,animationState:t}=this.node;if(!e||!t)return;let{isPresent:n,onExitComplete:r}=e;if(n===!this.exit)return;if(n){if(this.exit===!0){let{initial:e}=this.node.getProps();if(e&&!Array.isArray(e)){let{transition:t,transitionEnd:n,...r}=hc(this.node,e)||{};for(let e in r)this.node.getValue(e)?.jump(r[e])}this.node.blockInitialAnimation=!1,t.reset(),t.animateChanges()}else t.setActive(`exit`,!1);this.exit=void 0;return}let i=this.exit=t.setActive(`exit`,!0);r&&i.then(()=>{this.exit===i&&(this.exit=!0,r(this.id))})}mount(){let{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id,this.node)),this.update()}unmount(){}}}},vm=class extends ip{constructor(e){super(e),this.removeGroupControls=ar,this.removeListeners=ar,this.controls=new kf(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ar}update(){let{dragControls:e,drag:t}=this.node.getProps(),{dragControls:n,drag:r}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls))),r&&!t&&this.controls.stop(void 0,void 0,r)}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},ym=e=>(t,n)=>{e&&B.update(()=>e(t,n),!1,!0)},bm=class extends ip{constructor(){super(...arguments),this.removePointerDownListener=ar}onPointerDown(e){this.session=new ef(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:this.node.current?.ownerDocument.defaultView})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:ym(e),onStart:ym(t),onMove:ym(n),onEnd:(e,t)=>{delete this.session,r&&B.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Id(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session?.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session?.end()}},xm=!1,Sm=({layout:e,layoutDependency:t,layoutAnchor:n})=>({layout:e,layoutDependency:t,layoutAnchor:n,animationType:typeof e==`string`?e:`both`}),Cm=(e,t)=>{let{snapshot:n}=e,r=e.getStack();r?.remove(e);let i=r?.lead;if(r?.prevLead===e&&i.resumeFrom===e&&(i.resumeFrom=i.currentAnimation=e.resumingFrom=void 0),e.options.layoutId=t,!t)e.needsShow=!0;else return e.root.registerSharedNode(t,e),()=>{let{resumeFrom:t}=e;t?.isPresent!==!1&&e.getStack().members.includes(t)&&(t.hide(),e.resumeFrom=void 0,e.snapshot=n)}},wm=class extends A.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group?.add(i),r&&n?.register?.(i),xm&&i.root.didUpdate(),i.options.layoutId!==r&&Cm(i,r)?.(),i.addEventListener(`animationComplete`,()=>this.safeToRemove()),i.setOptions({...i.options,...Sm(this.props),onExitComplete:()=>this.safeToRemove()})),Du.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,layoutId:n,visualElement:r,drag:i,isPresent:a}=this.props,{projection:o}=r;return o&&(o.isPresent=a,this.takeOver=e.layoutId===n?void 0:(o.willUpdate(),Cm(o,n)),o.setOptions({...o.options,...Sm(this.props)}),xm=!0,i||e.layoutDependency!==t||t===void 0||e.isPresent!==a?o.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?o.promote():o.relegate()||B.postRender(()=>{o.getStack()?.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(this.takeOver?.(),e.root.didUpdate(),xl.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;xm=!0,r&&(r.scheduleCheckAfterUnmount(),t.group?.remove(r),n?.deregister?.(r))}safeToRemove(){this.props.safeToRemove?.()}render(){return null}};function Tm(e){let[t,n]=Ep(),r=(0,A.useContext)(qn);return(0,Z.jsx)(wm,{...e,layoutGroup:r,switchLayoutGroup:(0,A.useContext)(sm),isPresent:t,safeToRemove:n})}var Em={pan:{Feature:bm},drag:{Feature:vm,ProjectionNode:ld,MeasureLayout:Tm}};function Dm(e,t,n,r,i){let{props:a}=e,o=`while`+n;!i&&e.animationState&&a[o]&&e.animationState.setActive(o,r===`Start`);let s=a[`on`+n+r];s&&B.postRender(()=>s(t,Pd(t)))}var Om=class extends ip{mount(){let{current:e}=this.node;e&&(this.unmount=Rf(e,(e,t)=>(Dm(this.node,t,`Hover`,`Start`),e=>Dm(this.node,e,`Hover`,`End`))))}unmount(){}},km=class extends ip{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}e&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=or(od(this.node.current,`focus`,()=>this.onFocus()),od(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Am(e,t,n,r){e.current instanceof HTMLButtonElement&&e.current.disabled||Dm(e,t,`Tap`,n,r)}var jm=class extends ip{constructor(){super(...arguments),this.options={}}mount(){let{current:e}=this.node;e&&(this.update(),this.unmount=Xf(e,(e,t)=>(Am(this.node,t,`Start`),{onComplete:(e,{success:t})=>Am(this.node,e,t?``:`Cancel`),onRepeat:()=>Am(this.node,t,``,!0)}),this.options))}update(){let{options:e,node:t}=this,{globalTapTarget:n,propagate:r,tap:i}=t.props;for(let t in e)delete e[t];Object.assign(e,i,{useGlobalTarget:n,stopPropagation:r?.tap===!1})}unmount(){}},Mm=new WeakMap,Nm=new WeakMap,Pm=e=>{let t=Mm.get(e.target);t&&t(e)},Fm=e=>{e.forEach(Pm)};function Im({root:e,...t}){let n=e||document;Nm.has(n)||Nm.set(n,{});let r=Nm.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Fm,{root:e,...t})),r[i]}function Lm(e,t,n){let r=Im(t);return Mm.set(e,n),r.observe(e),()=>{Mm.delete(e),r.unobserve(e)}}var Rm={some:0,all:1},zm=class extends ip{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Rm[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Lm(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Bm(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Bm({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Vm=pm(Object.assign({},_m,{inView:{Feature:zm},tap:{Feature:jm},focus:{Feature:km},hover:{Feature:Om}},Em,{layout:{ProjectionNode:ld,MeasureLayout:Tm}}),mm);function Hm(e,t,n){(0,A.useInsertionEffect)(()=>e.on(t,n),[e,t,n])}var Um=50,Wm=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Gm=()=>({time:0,x:Wm(),y:Wm()}),Km={x:{length:`Width`,position:`Left`},y:{length:`Height`,position:`Top`}},qm=new WeakMap;function Jm(e,t){let n=e===document.scrollingElement,r=n&&document.body||e,i=qm.get(r);i||qm.set(r,i=getComputedStyle(r));let{writingMode:a,flexDirection:o}=i,s=t===`x`!==/^[vs]/.test(a);return(s?i.direction===`rtl`!=(a===`sideways-lr`):a.endsWith(`rl`))!==(!n&&i.display.includes(`flex`)&&(s===(o[0]===`c`)?i.flexWrap:o).endsWith(`reverse`))}function Ym(e,t,n,r){let i=n[t],{length:a,position:o}=Km[t],s=i.current,c=n.time,l=e[`scroll${o}`];i.current=Jm(e,t)?-l||0:l,i.containerLength=e[`client${a}`],i.targetLength=e[`scroll${a}`],i.scrollLength=i.targetLength-i.containerLength,i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=$n(0,1,sr(0,i.scrollLength,i.current));let u=r-c;i.velocity=u>Um?0:dr(i.current-s,u)}function Xm(e,t,n){for(let r in Km)Ym(e,r,t,n);t.time=n}var Zm={start:0,center:.5,end:1};function Qm(e,t,n=0){let r=0;if(e in Zm&&(e=Zm[e]),typeof e==`string`){let t=parseFloat(e);e.endsWith(`px`)?r=t:e.endsWith(`%`)?e=t/100:e.endsWith(`vw`)?r=t/100*document.documentElement.clientWidth:e.endsWith(`vh`)?r=t/100*document.documentElement.clientHeight:e=t}return typeof e==`number`&&(r=t*e),n+r}var $m=[0,0];function eh(e,t,n,r){let i=Array.isArray(e)?e:$m,a=0,o=0;return typeof e==`number`?i=[e,e]:typeof e==`string`&&(e=e.trim(),i=e.includes(` `)?e.split(` `):[e,Zm[e]?e:`0`]),a=Qm(i[0],n,r),o=Qm(i[1],t),a-o}var th={All:[[0,0],[1,1]]};function nh(e,t){let n=e.length-1;if(n<1)return 0;let r=e[0]>e[n],i=t=>e[r?n-t:t];if(e[0]===e[1]&&t<i(0))return+!!r;let a=0;for(;a<n-1&&t>=i(a+1);)a++;let o=(a+sr(i(a),i(a+1),t))/n;return r?1-o:o}function rh(e,{offset:t=th.All}){for(let n in Km){let r=e[n];r.offset.length=0;for(let e=0;e<t.length;e++)r.offset[e]=eh(t[e],r.containerLength,r.targetLength,r.targetOffset);r.progress=$n(0,1,nh(r.offset,r.current))}}function ih(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(Bc(r))n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName===`svg`){let e=r.getBoundingClientRect();r=r.parentElement;let t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,a=r.parentNode;for(;!i;)a.tagName===`svg`&&(i=a),a=r.parentNode;r=i}else break;return n}function ah(e){return`getBBox`in e&&e.tagName!==`svg`?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function oh(e,t,n,r={}){let{target:i}=r,a=i||r.offset;return{measure:t=>{if(a){n.time=t.time;for(let e in Km){let r=e,{offset:i}=n[r];Object.assign(n[r],t[r]),n[r].offset=i}if(i&&i!==e){let t=ih(i,e),r=ah(i);n.x.targetOffset=t.x,n.y.targetOffset=t.y,n.x.targetLength=r.width,n.y.targetLength=r.height}rh(n,r)}},notify:e=>t(a?n:e)}}var sh=new WeakMap,ch=new WeakMap,lh=new WeakMap,uh=new WeakMap,dh=e=>e===document.scrollingElement?window:e;function fh(e,{container:t=document.scrollingElement,trackContentSize:n=!1,...r}={}){if(!t)return ar;let i=lh.get(t);i||(i=new Set,lh.set(t,i));let a=oh(t,e,Gm(),r);if(i.add(a),!sh.has(t)){let e=Gm(),n=()=>{Xm(t,e,P.timestamp);for(let t of i)t.measure(e);B.preUpdate(r)},r=()=>{for(let t of i)t.notify(e)},a=()=>B.read(n);sh.set(t,a);let o=dh(t);window.addEventListener(`resize`,a),t!==document.documentElement&&ch.set(t,Xd(t,a)),o.addEventListener(`scroll`,a),a()}if(n&&!uh.has(t)){let e=sh.get(t),n={width:t.scrollWidth,height:t.scrollHeight},r=B.read(()=>{let r=t.scrollWidth,i=t.scrollHeight;(n.width!==r||n.height!==i)&&(e(),n.width=r,n.height=i)},!0);uh.set(t,r)}let o=sh.get(t);return B.read(o,!1,!0),()=>{V(o);let e=lh.get(t);if(!e||(e.delete(a),e.size))return;lh.delete(t);let n=sh.get(t);sh.delete(t),n&&(dh(t).removeEventListener(`scroll`,n),ch.get(t)?.(),window.removeEventListener(`resize`,n));let r=uh.get(t);r&&(V(r),uh.delete(t))}}function ph(e){return typeof window>`u`?!1:e?Uo():Ho()}var mh=new Map;function hh({container:e,target:t,axis:n}){let r=mh.get(e);r||(r=new Map,mh.set(e,r));let i=t??`self`,a=r.get(i);return a||(a={},r.set(i,a)),a[n]||(a[n]=t?new ViewTimeline({subject:t,axis:n}):new ScrollTimeline({source:e,axis:n}))}var gh=e=>{if(/v/u.test(e))return[];let t=eh(e,0,0,0);return[eh(e,0,1,0)-t,t-eh(e,1,0,0),t]},_h=([e,t,n])=>!n&&(t===0||t===1)&&`${t?`entry`:`exit`}-crossing ${e*100}%`;function vh(e=th.All){if(e.length!==2)return;let[t,n]=e.map(gh),r=[_h(t),_h(n)],i=n[0]-t[0],a=t[1]-n[1];if(r[0]&&r[1]&&(i||a))return{points:r,a:i,b:a,cover:!t[0]&&i===1&&a===1}}function yh(e,t){let{target:n,container:r,axis:i}=t,a=n&&vh(t.offset),o=ph(n)&&(n?!!a:!t.offset),s=new Map,c=new Set,l,u=!1,d=(e,t)=>{let[n,r]=a.points;t.effect.updateTiming({direction:u?e===`normal`?`reverse`:`alternate-reverse`:e}),Object.assign(t,{rangeStart:u?r:n,rangeEnd:u?n:r}),t.play()},f=[e.attachTimeline({get timeline(){return o?hh(t):void 0},onAttach:a&&(e=>{let t=e.effect.getTiming().direction;s.set(e,t),d(t,e)}),observe:e=>(e.pause(),c.add(e),l||=fh(e=>{c.forEach(t=>{t.time=t.iterationDuration*e[i].progress})},t),()=>c.delete(e))})];if(o&&a){let{a:e,b:t}=a,o=i===`y`?`clientHeight`:`clientWidth`,c=()=>{u!==(u=e*n[o]+t*r[o]<0)&&s.forEach(d)};c(),e*t<0&&f.push(Xd(c),Xd([n,r],c))}return()=>{f.forEach(e=>e()),l?.()}}function bh(e,{axis:t=`y`,source:n,container:r=document.scrollingElement,...i}={}){if(!r)return ar;let a={axis:t,container:n||r,...i};if(typeof e==`function`){let n=Wc(e);return Uc(fh(e=>n(e[t].progress,e),a))}return Uc(yh(e,a))}var xh=()=>({scrollX:$s(0),scrollY:$s(0),scrollXProgress:$s(0),scrollYProgress:$s(0),scrollXLength:$s(0),scrollYLength:$s(0)}),Sh=e=>e?!e.current:!1;function Ch(e,t,n,r){return{factory:i=>{let a,o=()=>{Sh(n)||Sh(r)?xl.read(o):a=bh(i,{...t,axis:e,container:n?.current||void 0,target:r?.current||void 0})};return xl.read(o),()=>{Sl(o),a?.()}},times:[0,1],keyframes:[0,1],ease:e=>e,duration:1}}function wh(e,t){return typeof window>`u`?!1:e?Uo()&&!!vh(t):Ho()&&!t}function Th({container:e,target:t,...n}={}){let r=Jn(xh);wh(t,n.offset)&&(r.scrollXProgress.accelerate=Ch(`x`,n,e,t),r.scrollYProgress.accelerate=Ch(`y`,n,e,t));let i=(0,A.useRef)(null),a=(0,A.useRef)(!1),o=(0,A.useCallback)(()=>(i.current=bh((e,{x:t,y:n})=>{r.scrollX.set(t.current),r.scrollXProgress.set(t.progress),r.scrollXLength.set(t.scrollLength),r.scrollY.set(n.current),r.scrollYProgress.set(n.progress),r.scrollYLength.set(n.scrollLength)},{...n,container:e?.current||void 0,target:t?.current||void 0}),()=>{i.current?.()}),[e,t,JSON.stringify(n.offset)]);return Yn(()=>{if(a.current=!1,Sh(e)||Sh(t))a.current=!0;else return o()},[o]),(0,A.useEffect)(()=>{if(!a.current)return;let n,r=()=>{let r=Sh(e),i=Sh(t);!r&&!i&&(n=o())};return xl.read(r),()=>{Sl(r),n?.()}},[o]),r}function Eh(e){let t=Jn(()=>$s(e)),{isStatic:n}=(0,A.useContext)(gp);if(n){let[,n]=(0,A.useState)(e);(0,A.useEffect)(()=>t.on(`change`,n),[])}return t}function Dh(e,t){let n=Eh(t()),r=()=>n.set(t());return r(),Yn(()=>{let t=()=>B.preRender(r,!1,!0),n=e.map(e=>e.on(`change`,t));return r(),()=>{n.forEach(e=>e()),V(r)}}),n}function Oh(e){Zs.current=[],e();let t=Dh(Zs.current,e);return Zs.current=void 0,t}function kh(e,t,n){let{isStatic:r}=(0,A.useContext)(gp),i=()=>xc(e)?e.get():e;if(r)return Oh(i);let a=Eh(i());return(0,A.useInsertionEffect)(()=>n(a,e,t),[a,JSON.stringify(t)]),a}function Ah(e,t={}){return kh(e,t,rp)}function Q(e,t,n,r){if(typeof e==`function`)return Oh(e);if(n!==void 0&&!Array.isArray(n)&&typeof t!=`function`)return Mh(e,t,n,r);let i=typeof t==`function`?t:Zf(t,n,r),a=Array.isArray(e)?jh(e,i):jh([e],([e])=>i(e)),o=Array.isArray(e)?void 0:e.accelerate;if(o&&!o.isTransformed&&typeof t!=`function`&&Array.isArray(n)&&r?.clamp!==!1&&!r?.mixer){let e=r?.ease;a.accelerate={...o,times:[0,...t,1],keyframes:[n[0],...n,n[n.length-1]],isTransformed:!0,...e?{ease:Array.isArray(e)?[e[0],...e]:e}:{}}}return a}function jh(e,t){let n=Jn(()=>[]);return Dh(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}function Mh(e,t,n,r){let i=Jn(()=>Object.keys(n)),a=Jn(()=>({}));for(let o of i)a[o]=Q(e,t,n[o],r);return a}function Nh(){!yd.current&&xd();let[e]=(0,A.useState)(vd.current);return e}var $=Vm,Ph=({size:e=26,className:t})=>(0,Z.jsxs)(`svg`,{className:t,width:e,height:Math.round(e*.55),viewBox:`0 0 48 26`,"aria-hidden":`true`,focusable:`false`,children:[(0,Z.jsx)(`path`,{d:`M24 2 L46 19 L44 22 L24 12.5 L4 22 L2 19 Z`,fill:`currentColor`}),(0,Z.jsx)(`path`,{d:`M24 2 L27.5 6 L27 15 L24 13.5 L21 15 L20.5 6 Z`,fill:`currentColor`,opacity:`0.55`}),(0,Z.jsx)(`path`,{d:`M46 19 L47 13 L44.5 18.5 Z M2 19 L1 13 L3.5 18.5 Z`,fill:`currentColor`})]}),Fh=({name:e})=>(0,Z.jsxs)(Ih,{"data-logo":!0,children:[(0,Z.jsx)(Ph,{}),(0,Z.jsx)(`span`,{children:e})]}),Ih=N.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--nav-ink);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;

  svg {
    color: var(--color-amber);
    transition: transform 0.5s var(--ease-out-expo);
  }

  a:hover & svg,
  a:focus-visible & svg {
    transform: rotate(-12deg) translateY(-1px);
  }
`,Lh=e=>typeof window<`u`&&window.matchMedia(e).matches,Rh=e=>{let[t,n]=(0,A.useState)(()=>Lh(e));return(0,A.useEffect)(()=>{let t=window.matchMedia(e),r=()=>n(t.matches);return r(),t.addEventListener(`change`,r),()=>t.removeEventListener(`change`,r)},[e]),t},zh={name:`Harshil Patel`,label:`Harshil Patel, back to top`,href:`/#home`},Bh=[{label:`Aircraft`,href:`/#work`},{label:`Projects`,href:`/#projects`},{label:`Experience`,href:`/#experience`}],Vh={label:`Contact`,href:`/#contact`},Hh=`(max-width: 809px)`,Uh=`(min-width: 810px)`,Wh={type:`spring`,bounce:.2,duration:.4},Gh=()=>{let[e,t]=(0,A.useState)(!1),n=Rh(Hh);(0,A.useEffect)(()=>{n||t(!1)},[n]),(0,A.useEffect)(()=>{if(!e)return;let n=e=>{e.key===`Escape`&&t(!1)};return window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[e]);let r=()=>t(!1);return(0,Z.jsx)(Kh,{children:(0,Z.jsxs)(qh,{"aria-label":`Main`,children:[(0,Z.jsxs)(Jh,{children:[(0,Z.jsx)(Yh,{href:zh.href,"aria-label":zh.label,children:(0,Z.jsx)(Fh,{name:zh.name})}),(0,Z.jsxs)(Xh,{children:[(0,Z.jsxs)(Zh,{children:[Bh.map(({label:e,href:t})=>(0,Z.jsx)(Qh,{href:t,children:e},t)),(0,Z.jsx)($h,{"aria-hidden":`true`}),(0,Z.jsx)(eg,{href:Vh.href,"data-cta":!0,children:Vh.label})]}),(0,Z.jsxs)(tg,{type:`button`,"aria-expanded":e,"aria-controls":`nav-drawer`,"aria-label":e?`Close menu`:`Open menu`,onClick:()=>t(e=>!e),children:[(0,Z.jsx)(ng,{animate:e?{top:19,rotate:45}:{top:15,rotate:0},transition:Wh}),(0,Z.jsx)(ng,{animate:e?{top:19,rotate:-45}:{top:23,rotate:0},transition:Wh})]})]})]}),(0,Z.jsx)(kp,{initial:!1,children:e&&(0,Z.jsx)(rg,{id:`nav-drawer`,initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},transition:Wh,children:(0,Z.jsxs)(ig,{children:[(0,Z.jsx)(ag,{children:Bh.map(({label:e,href:t})=>(0,Z.jsx)(Qh,{href:t,onClick:r,children:e},t))}),(0,Z.jsx)(eg,{href:Vh.href,"data-cta":!0,onClick:r,$isBlock:!0,children:Vh.label})]})})})]})})},Kh=N.header`
  position: fixed;
  top: var(--nav-offset);
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  font-family: var(--font-body);
  pointer-events: none;

  @media ${Hh} {
    top: 12px;
    padding: 0 16px;
  }
`,qh=N.nav`
  position: relative;
  width: fit-content;
  max-width: 100%;
  padding: 10px;
  border: 1px solid var(--nav-border);
  border-radius: 999px;
  background: var(--nav-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 12px 32px -12px rgba(0, 0, 0, 0.18);
  overflow: clip;
  pointer-events: auto;

  @media ${Hh} {
    width: 100%;
    padding: 8px;
    border-radius: 28px;
  }
`,Jh=N.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;

  @media ${Hh} {
    gap: 16px;
  }
`,Yh=N.a`
  display: flex;
  align-items: center;
  padding: 0 4px 0 12px;
  border-radius: 999px;
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid var(--nav-ink);
    outline-offset: 4px;
  }
`,Xh=N.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
`,Zh=N.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media ${Hh} {
    display: none;
  }
`,Qh=N.a`
  padding: 9px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--nav-ink-muted);
  text-decoration: none;
  transition: color 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    color: var(--nav-ink);
  }

  &:focus-visible {
    color: var(--nav-ink);
    outline: 2px solid var(--nav-ink);
    outline-offset: -2px;
  }
`,$h=N.span`
  width: 4px;
  height: 4px;
`,eg=N.a`
  display: inline-flex;
  justify-content: center;
  padding: 11px 17px;
  width: ${({$isBlock:e})=>e?`100%`:`auto`};
  border-radius: 999px;
  background: var(--nav-cta-fill);
  color: var(--nav-cta-ink);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: none;
  transition: background-color 0.22s cubic-bezier(0.25, 0.1, 0.25, 1),
    transform var(--duration-fast) var(--ease-out-expo);

  &:hover {
    background: var(--nav-cta-hover);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid var(--nav-ink);
    outline-offset: 2px;
  }
`,tg=N.button`
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  cursor: pointer;

  @media ${Uh} {
    display: none;
  }

  &:focus-visible {
    outline: 2px solid var(--nav-ink);
    outline-offset: -2px;
  }
`,ng=N($.span)`
  position: absolute;
  left: 11px;
  width: 18px;
  height: 2px;
  border-radius: 2px;
  background: var(--nav-ink);
`,rg=N($.div)`
  overflow: hidden;
`,ig=N.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px 0 8px;
`,ag=N.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,og={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},sg=A.createContext&&A.createContext(og),cg=[`attr`,`size`,`title`];function lg(e,t){if(e==null)return{};var n,r,i=ug(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ug(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function dg(){return dg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dg.apply(null,arguments)}function fg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function pg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?fg(Object(n),!0).forEach(function(t){mg(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fg(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function mg(e,t,n){return(t=hg(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hg(e){var t=gg(e,`string`);return typeof t==`symbol`?t:t+``}function gg(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function _g(e){return e&&e.map((e,t)=>A.createElement(e.tag,pg({key:t},e.attr),_g(e.child)))}function vg(e){return t=>A.createElement(yg,dg({attr:pg({},e.attr)},t),_g(e.child))}function yg(e){var t=t=>{var n=e.attr,r=e.size,i=e.title,a=lg(e,cg),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),A.createElement(`svg`,dg({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:pg(pg({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&A.createElement(`title`,null,i),e.children)};return sg===void 0?t(og):A.createElement(sg.Consumer,null,e=>t(e))}function bg(e){return vg({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`circle`,attr:{cx:`8.5`,cy:`8.5`,r:`1.5`},child:[]},{tag:`polyline`,attr:{points:`21 15 16 10 5 21`},child:[]}]})(e)}function xg(e){return vg({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`},child:[]}]})(e)}function Sg(e){return vg({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`20 6 9 17 4 12`},child:[]}]})(e)}function Cg(e){return vg({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`19`,x2:`12`,y2:`5`},child:[]},{tag:`polyline`,attr:{points:`5 12 12 5 19 12`},child:[]}]})(e)}function wg(e){return vg({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`7`,y1:`17`,x2:`17`,y2:`7`},child:[]},{tag:`polyline`,attr:{points:`7 7 17 7 17 17`},child:[]}]})(e)}function Tg(e){return vg({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]},{tag:`polyline`,attr:{points:`12 5 19 12 12 19`},child:[]}]})(e)}function Eg(e){return vg({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`19`,y1:`12`,x2:`5`,y2:`12`},child:[]},{tag:`polyline`,attr:{points:`12 19 5 12 12 5`},child:[]}]})(e)}function Dg(e){return vg({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`7`,y1:`7`,x2:`17`,y2:`17`},child:[]},{tag:`polyline`,attr:{points:`17 7 17 17 7 17`},child:[]}]})(e)}var Og=(e,t)=>{let n;try{n=new Intl.DateTimeFormat(`en-US`,{timeZone:t,hour:`numeric`,minute:`2-digit`,timeZoneName:`short`})}catch{throw RangeError(`Unknown time zone "${t}"`)}return n.format(e).replace(/ /g,` `)},kg=15e3,Ag=e=>{let[t,n]=(0,A.useState)(()=>Og(new Date,e));return(0,A.useEffect)(()=>{let t=setInterval(()=>n(Og(new Date,e)),kg);return()=>clearInterval(t)},[e]),t},jg=`Harshil Patel`,Mg=`patelharshil2060@gmail.com`,Ng=`/HarshilPatelResume.pdf`,Pg=`America/Los_Angeles`,Fg=`Open to aerospace engineering roles`,Ig=`Aerospace Engineer · UC San Diego`,Lg={lead:`I’m`,name:jg},Rg=`Designing aircraft from the first sizing plot to the last flight test.`,zg=`I size, analyse and build aircraft: aerodynamics, propulsion, stability and the test work that proves them.`,Bg=[{label:`LinkedIn`,href:`https://www.linkedin.com/in/harshilpatel2060`},{label:`GitHub`,href:`https://github.com/patelharshil2060`}],Vg=[{label:`Base`,value:`San Diego, CA`},{label:`Grad`,value:`Dec 2026`}],Hg=[{value:`1.57 m`,label:`Wingspan`},{value:`800 g`,label:`Design payload`},{value:`28.3°`,label:`Wing sweep`},{value:`13,000+`,label:`Optimizer evaluations`}],Ug={alt:`Illustrated portrait of Harshil Patel smiling, sunglasses pushed up, in a black jacket with an HP logo`},Wg=()=>{let e=Ag(Pg);return(0,Z.jsxs)(Gg,{children:[Vg.map(({label:e,value:t})=>(0,Z.jsxs)(Kg,{children:[(0,Z.jsx)(`dt`,{children:e}),(0,Z.jsx)(`dd`,{children:t})]},e)),(0,Z.jsxs)(Kg,{children:[(0,Z.jsx)(`dt`,{children:`Local time`}),(0,Z.jsx)(`dd`,{children:(0,Z.jsx)(`time`,{children:e})})]}),(0,Z.jsxs)(Kg,{$grow:!0,children:[(0,Z.jsx)(`dt`,{children:`Status`}),(0,Z.jsxs)(`dd`,{children:[(0,Z.jsx)(qg,{"aria-hidden":`true`}),Fg]})]})]})},Gg=N.dl`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid var(--color-ink);
  border-bottom: 1px solid var(--color-line);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
`,Kg=N.div`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  padding: 0.7rem 1.25rem 0.7rem 0;
  margin-right: 1.25rem;
  border-right: 1px solid var(--color-line);
  ${({$grow:e})=>e?`flex: 1; justify-content: flex-end; border-right: 0; margin-right: 0; padding-right: 0;`:``}

  dt {
    color: var(--color-ink-soft);
  }

  dd {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-ink);
    font-variant-numeric: tabular-nums;
  }

  @media (max-width: 700px) {
    border-right: 0;
    padding-right: 0;
    ${({$grow:e})=>e?`flex-basis: 100%; justify-content: flex-start; border-top: 1px solid var(--color-line);`:``}
  }
`,qg=N.i`
  width: 7px;
  height: 7px;
  background: var(--color-amber);
  box-shadow: 0 0 0 3px rgba(242, 165, 0, 0.18);
  animation: annunciator 1.6s steps(1, end) infinite;

  @keyframes annunciator {
    50% { opacity: 0.35; }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Jg=960,Yg=[.16,1,.3,1],Xg=9,Zg={stiffness:110,damping:17,mass:.6},Qg=9,$g={cx:50,cy:56,rx:60,ry:15,tilt:-12},e_=`M ${$g.cx-$g.rx} ${$g.cy} a ${$g.rx} ${$g.ry} 0 1 0 ${$g.rx*2} 0 a ${$g.rx} ${$g.ry} 0 1 0 ${-$g.rx*2} 0`,t_={hidden:{scale:.86,opacity:0},shown:{scale:1,opacity:1,transition:{delay:.25,duration:1.2,ease:Yg}}},n_={hidden:{y:`9%`,opacity:0,filter:`blur(10px)`},shown:{y:`0%`,opacity:1,filter:`blur(0px)`,transition:{delay:.45,duration:1.3,ease:Yg}}},r_={hidden:{strokeDashoffset:100,opacity:0},shown:{strokeDashoffset:0,opacity:1,transition:{delay:.9,duration:1.4,ease:[.65,0,.35,1],opacity:{delay:.9,duration:.2}}}},i_=e=>({hidden:{opacity:0},shown:{opacity:1,transition:{delay:e,duration:.6}}}),a_=e=>{let t=Eh(.5),n=Eh(.5),r=Ah(Q(n,[0,1],[Xg,-9]),Zg),i=Ah(Q(t,[0,1],[-9,Xg]),Zg),a=Ah(Q(t,[0,1],[-12,12]),Zg),o=Ah(Q(n,[0,1],[-8,8]),Zg);return{stage:{rotateX:r,rotateY:i},portrait:{x:a,y:o},onPointerMove:r=>{if(!e||r.pointerType!==`mouse`)return;let i=r.currentTarget.getBoundingClientRect();t.set((r.clientX-i.left)/i.width),n.set((r.clientY-i.top)/i.height)},onPointerLeave:()=>{t.set(.5),n.set(.5)}}},o_=({half:e,isReduced:t,uid:n})=>{let r=`orbit-${e}-${n}`,i=e===`back`;return(0,Z.jsxs)(p_,{viewBox:`0 0 100 100`,"aria-hidden":`true`,focusable:`false`,$isFront:!i,children:[(0,Z.jsx)(`defs`,{children:(0,Z.jsx)(`clipPath`,{id:r,children:(0,Z.jsx)(`rect`,{x:`-50`,y:i?-100:$g.cy,width:`200`,height:i?100+$g.cy:100})})}),(0,Z.jsx)(`g`,{transform:`rotate(${$g.tilt} ${$g.cx} ${$g.cy})`,children:(0,Z.jsxs)(`g`,{clipPath:`url(#${r})`,children:[i?(0,Z.jsx)($.path,{d:e_,fill:`none`,stroke:`rgba(17, 17, 17, 0.32)`,strokeWidth:.22,strokeDasharray:`0.7 1.1`,variants:i_(.9)}):(0,Z.jsx)($.path,{d:e_,fill:`none`,stroke:`var(--color-amber)`,strokeWidth:.42,strokeLinecap:`round`,pathLength:100,strokeDasharray:`100 100`,variants:r_}),(0,Z.jsx)($.g,{variants:i_(1.9),children:(0,Z.jsxs)(`g`,{children:[(0,Z.jsx)(`path`,{d:`M 3.2 0 L -2 -2.6 L -1.1 0 L -2 2.6 Z`,fill:`var(--color-amber)`,stroke:`#111`,strokeWidth:`0.2`}),t?(0,Z.jsx)(`animateMotion`,{dur:`1s`,fill:`freeze`,rotate:`auto`,keyPoints:`0.62;0.62`,keyTimes:`0;1`,calcMode:`linear`,path:e_}):(0,Z.jsx)(`animateMotion`,{dur:`${Qg}s`,repeatCount:`indefinite`,rotate:`auto`,path:e_})]})})]})})]})},s_=({src:e,alt:t=``})=>{let n=!!Nh(),r=a_(!n),i=(0,A.useId)().replace(/[^a-zA-Z0-9]/g,``);return e?(0,Z.jsx)(c_,{onPointerMove:r.onPointerMove,onPointerLeave:r.onPointerLeave,children:(0,Z.jsx)(l_,{$isOn:!n,children:(0,Z.jsxs)(u_,{style:n?void 0:r.stage,children:[(0,Z.jsx)(d_,{variants:t_,"aria-hidden":`true`}),(0,Z.jsx)(o_,{half:`back`,isReduced:n,uid:i}),(0,Z.jsx)(f_,{variants:n_,style:n?void 0:r.portrait,children:(0,Z.jsx)(`img`,{src:e,alt:t,width:Jg,height:Jg,loading:`eager`,fetchpriority:`high`})}),(0,Z.jsx)(o_,{half:`front`,isReduced:n,uid:i})]})})}):(0,Z.jsxs)(m_,{role:`img`,"aria-label":`Portrait placeholder`,children:[(0,Z.jsx)(bg,{"aria-hidden":`true`}),(0,Z.jsx)(`span`,{children:`Portrait goes here`})]})},c_=N.figure`
  display: grid;
  place-items: center;
  padding: clamp(0.5rem, 3vw, 2rem) 0;
  perspective: 1200px;
`,l_=N.div`
  /* the orbit spans 120% of the disc, so leave room for it on each side */
  width: min(80%, 32rem);
  ${({$isOn:e})=>e?`animation: portrait-float 6.5s ease-in-out infinite;`:``}

  @keyframes portrait-float {
    0%, 100% { translate: 0 0; }
    50% { translate: 0 -12px; }
  }
`,u_=N($.div)`
  position: relative;
  aspect-ratio: 1;
  transform-style: preserve-3d;
  will-change: transform;
`,d_=N($.span)`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    linear-gradient(rgba(17, 17, 17, 0.045) 1px, transparent 1px) 0 0 / 8% 8%,
    linear-gradient(90deg, rgba(17, 17, 17, 0.045) 1px, transparent 1px) 0 0 / 8% 8%,
    radial-gradient(circle at 35% 30%, #f7f7f7 0%, #e2e2e2 55%, #d2d2d2 100%);
  transform: translateZ(-40px) scale(1.055); /* pushed back; scaled to keep its apparent size */
  box-shadow:
    inset 0 0 0 1px rgba(17, 17, 17, 0.08),
    inset 0 -18px 40px rgba(17, 17, 17, 0.08),
    0 40px 60px -40px rgba(17, 17, 17, 0.45);
`,f_=N($.div)`
  position: absolute;
  inset: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 18px 18px rgba(17, 17, 17, 0.12));
  }
`,p_=N.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  /* real depth inside the 3D stage (z-index is ignored with preserve-3d) */
  transform: ${({$isFront:e})=>e?`translateZ(30px)`:`translateZ(-20px)`};
`,m_=N.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-ink-soft);
  font-size: var(--text-sm);

  svg {
    width: 28px;
    height: 28px;
    stroke-width: 1.5;
  }
`,h_=2e3,g_=({email:e,label:t,className:n})=>{let[r,i]=(0,A.useState)(!1);return(0,A.useEffect)(()=>{if(!r)return;let e=setTimeout(()=>i(!1),h_);return()=>clearTimeout(e)},[r]),(0,Z.jsxs)(__,{type:`button`,onClick:async()=>{try{await navigator.clipboard.writeText(e),i(!0)}catch{window.location.href=`mailto:${e}`}},"aria-label":`Copy email ${e}`,className:n,children:[(0,Z.jsx)(kp,{mode:`wait`,initial:!1,children:(0,Z.jsx)($.span,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18},style:{display:`inline-flex`,alignItems:`center`,gap:`0.5rem`},children:r?(0,Z.jsxs)(Z.Fragment,{children:[`Email copied `,(0,Z.jsx)(Sg,{"aria-hidden":`true`})]}):(0,Z.jsxs)(Z.Fragment,{children:[t??e,` `,(0,Z.jsx)(xg,{"aria-hidden":`true`})]})},r?`copied`:`idle`)}),(0,Z.jsx)(`span`,{role:`status`,className:`visually-hidden`,children:r?`Email copied to clipboard`:``})]})},__=N.button`
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0 1.125rem;
  border: 0;
  border-radius: var(--radius-control);
  background: var(--color-ink);
  color: var(--color-paper);
  font: 400 var(--text-sm) / 1 var(--font-body);
  cursor: pointer;
  transition: transform var(--duration-fast) var(--ease-out-expo),
    background-color var(--duration-fast) ease;

  &:hover { background: #2b2b2b; }
  &:active { transform: scale(0.97); }
  &:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`,v_=[.16,1,.3,1],y_=.032,b_=.045,x_=[...Lg.name],S_=.4+x_.length*y_+.1,C_=Rg.split(` `),w_=S_+C_.length*b_,T_=e=>({hidden:{opacity:0,y:12},shown:{opacity:1,y:0,transition:{delay:e,duration:.8,ease:v_}}}),E_=e=>({hidden:{opacity:0,y:`0.35em`,filter:`blur(12px)`},shown:{opacity:1,y:`0em`,filter:`blur(0px)`,transition:{delay:.4+e*y_,duration:.9,ease:v_}}}),D_=e=>({hidden:{opacity:0,filter:`blur(10px)`},shown:{opacity:1,filter:`blur(0px)`,transition:{delay:S_+e*b_,duration:.9,ease:v_}}}),O_=({portraitSrc:e,portraitAlt:t=``})=>{let n=Nh();return(0,Z.jsx)(k_,{id:`home`,"aria-labelledby":`hero-heading`,children:(0,Z.jsxs)(A_,{initial:!n&&`hidden`,animate:`shown`,children:[(0,Z.jsx)($.div,{variants:T_(0),children:(0,Z.jsx)(Wg,{})}),(0,Z.jsxs)(j_,{children:[(0,Z.jsxs)(M_,{children:[(0,Z.jsx)(N_,{variants:T_(.1),children:Ig}),(0,Z.jsxs)(P_,{id:`hero-heading`,"aria-label":`${Lg.lead} ${Lg.name}.`,children:[(0,Z.jsx)($.span,{className:`lead`,variants:E_(-3),"aria-hidden":`true`,children:Lg.lead}),(0,Z.jsxs)(`span`,{className:`full`,"aria-hidden":`true`,children:[x_.map((e,t)=>e===` `?(0,Z.jsx)(`span`,{className:`space`,children:` `},t):(0,Z.jsx)($.span,{className:`ch`,variants:E_(t),children:e},t)),(0,Z.jsx)($.span,{className:`ch`,variants:E_(x_.length),children:`.`})]})]}),(0,Z.jsx)(F_,{children:C_.map((e,t)=>(0,Z.jsxs)(A.Fragment,{children:[(0,Z.jsx)($.span,{variants:D_(t),children:e}),` `]},`${e}-${t}`))}),(0,Z.jsx)(I_,{variants:T_(w_),children:zg}),(0,Z.jsxs)(L_,{variants:T_(w_+.1),children:[(0,Z.jsx)(g_,{email:Mg}),(0,Z.jsxs)(R_,{href:Ng,target:`_blank`,rel:`noopener noreferrer`,children:[`View CV `,(0,Z.jsx)(Dg,{"aria-hidden":`true`})]})]}),(0,Z.jsx)(z_,{variants:T_(w_+.18),"aria-label":`Social profiles`,children:Bg.map(({label:e,href:t})=>(0,Z.jsxs)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,children:[e,` `,(0,Z.jsx)(wg,{"aria-hidden":`true`})]},e))})]}),(0,Z.jsx)(B_,{children:(0,Z.jsx)(s_,{src:e,alt:t})})]}),(0,Z.jsxs)(H_,{variants:T_(w_+.25),"aria-label":`Nimbus V4 design specifications`,children:[(0,Z.jsxs)(V_,{children:[(0,Z.jsx)(`span`,{children:`Nimbus V4`}),`Design values`]}),(0,Z.jsx)(U_,{children:Hg.map(({value:e,label:t},n)=>(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`dt`,{children:[(0,Z.jsx)(`span`,{className:`i`,children:String(n+1).padStart(2,`0`)}),t]}),(0,Z.jsx)(`dd`,{children:e})]},t))})]})]})})},k_=N.section`
  position: relative;
  z-index: 1;
  min-height: 100svh;
  padding: calc(var(--nav-offset) + var(--nav-height) + clamp(1rem, 0.75rem + 1vw, 1.75rem))
    var(--space-gutter) clamp(2rem, 1.5rem + 2vw, 3.5rem);
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-body);
  overflow-x: clip;
`,A_=N($.div)`
  max-width: var(--content-max);
  margin: 0 auto;
  min-height: calc(100svh - var(--nav-offset) - var(--nav-height) - 4rem);
  display: flex;
  flex-direction: column;
`,j_=N.div`
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  align-items: center;
  gap: clamp(1.5rem, 1rem + 3vw, 4rem);
  padding: clamp(2rem, 1rem + 4vw, 5rem) 0 clamp(1.5rem, 1rem + 2vw, 3rem);

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,M_=N.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(1.1rem, 0.9rem + 0.8vw, 1.6rem);
`,N_=N($.p)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-soft);

  &::before {
    content: '';
    width: 2rem;
    height: 2px;
    background: var(--color-amber);
  }
`,P_=N.h1`
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 0.95;

  .lead {
    display: inline-block;
    font-size: clamp(1.4rem, 1.1rem + 1.2vw, 2.2rem);
    font-weight: 400;
    letter-spacing: -0.02em;
    color: var(--color-ink-soft);
  }

  .full {
    position: relative;
    display: inline-block;
    align-self: flex-start;
    font-size: clamp(2.9rem, 1.5rem + 4.1vw, 5.1rem);
    white-space: nowrap;
  }

  .ch {
    display: inline-block;
  }

  .space {
    display: inline-block;
    width: 0.24em;
  }

  @media (max-width: 420px) {
    .full {
      white-space: normal;
    }
  }
`,F_=N.p`
  margin-top: 0.4rem;
  max-width: 22ch;
  font-family: var(--font-display);
  font-size: clamp(1.45rem, 1.05rem + 1.4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: var(--color-ink);
  text-wrap: balance;

  span {
    display: inline-block;
  }
`,I_=N($.p)`
  max-width: 40ch;
  font-size: var(--text-lead);
  line-height: 1.5;
  color: var(--color-ink-soft);
`,L_=N($.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.4rem;
`,R_=N.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0 1.1rem;
  border: 1px solid var(--color-ink);
  border-radius: var(--radius-control);
  color: var(--color-ink);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color var(--duration-fast) ease, color var(--duration-fast) ease,
    transform var(--duration-fast) var(--ease-out-expo);

  svg {
    transition: transform var(--duration-normal) var(--ease-out-expo);
  }

  &:hover {
    background: var(--color-amber);
    border-color: var(--color-amber);
  }

  &:hover svg {
    transform: translate(2px, 2px);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`,z_=N($.nav)`
  display: flex;
  gap: 1.25rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--color-ink-soft);
    font-size: var(--text-sm);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
  }

  a:hover {
    color: var(--color-ink);
    border-color: var(--color-amber);
  }

  a:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`,B_=N.div`
  /* let the aircraft run past the content edge toward the viewport edge */
  margin-right: calc(-1 * min(var(--space-gutter), 4rem));

  @media (max-width: 900px) {
    margin-right: 0;
  }
`,V_=N.p`
  display: flex;
  gap: 0.75rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--color-line);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-soft);

  span {
    color: var(--color-ink);
    font-weight: 700;
  }
`,H_=N($.section)`
  border-top: 1px solid var(--color-ink);
`,U_=N.dl`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0.9rem 1rem 0 0;
  }

  div + div {
    padding-left: 1rem;
    border-left: 1px solid var(--color-line);
  }

  dt {
    display: flex;
    gap: 0.6rem;
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }

  .i {
    color: var(--color-amber-ink);
    font-variant-numeric: tabular-nums;
  }

  dd {
    font-family: var(--font-display);
    font-size: clamp(1.6rem, 1.2rem + 1.4vw, 2.6rem);
    font-weight: 400;
    letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 1.25rem;

    div:nth-child(3) {
      padding-left: 0;
      border-left: 0;
    }
  }
`,W_=e=>Math.min(1,Math.max(0,e)),G_=(e,t,[n,r])=>n+e/t*(r-n),K_=(e,t,n)=>{let[r,i]=n,a=W_((e-r)/(i-r));return Math.min(t-1,Math.floor(a*t))},q_=(e,t,n,r)=>{let i=e===0,a=e===t-1,o=G_(e,t,n),s=G_(e+1,t,n),c=i?{input:[0],opacity:[1]}:{input:[o-r,o],opacity:[0,1]},l=a?{input:[1],opacity:[1]}:{input:[s-r,s],opacity:[1,0]};return{input:[...c.input,...l.input],opacity:[...c.opacity,...l.opacity]}},J_=(e,t,[n,r])=>{let i=(r-n)/t;return{start:n+e*i,end:n+(e+1)*i,length:i}},Y_=({poses:e,intro:t,outro:n,range:r,transition:i})=>{let a=Object.keys(t),o=[0],s=Object.fromEntries(a.map(e=>[e,[t[e]]]));return e.forEach(({from:t,to:n},c)=>{let{start:l,end:u,length:d}=J_(c,e.length,r);o.push(l+i*d,u-i/2*d),a.forEach(e=>s[e].push(t[e],n[e]))}),o.push(1),a.forEach(e=>s[e].push(n[e])),{input:o,values:s}},X_=(e,t,n)=>{let{start:r,length:i}=J_(e,t,n);return{input:[r+.22*i,r+.42*i,r+.78*i,r+.9*i],lift:[0,1,1,0]}},Z_=(e,t,n)=>{let{start:r,end:i,length:a}=J_(e,t,n);return{input:[r,r+.18*a,i-.18*a,i],opacity:[0,1,1,0]}},Q_=`/assets/screen-cad-DlyF1eJb.webp`,$_=`/assets/screen-sizing-pViXz-Kg.webp`,ev=`/assets/screen-thrust-DJ9raEv0.webp`,tv=`/assets/screen-build-798Y3fkv.webp`,nv=`/assets/screen-flight-PzquH31_.webp`,rv={name:`Nimbus V4`,slug:`nimbus-v4`,summary:`An autonomous flying-wing cargo aircraft, optimized for a package delivery competition’s profit score, then built and flight-tested.`,role:`Team lead`,timeline:`Mar – Jun 2026`,url:`https://github.com/patelharshil2060/Nimbus-Package-Delivery-UAV`,urlLabel:`the code on GitHub`},iv=[{title:`Flying-wing architecture`,body:`Swept wing, blended lifting-body fuselage and twin fins, integrated into one composite airframe.`,word:`Nimbus`,screen:Q_,alt:`Nimbus V4 CAD assembly: swept flying wing with a lifting-body cargo fuselage`,focus:{x:.32,y:.38,w:.28,h:.34}},{title:`Sized to the constraints`,body:`A MATLAB–AVL workflow and CMA-ES optimizer ran 13,000+ evaluations to land the design point.`,word:`Sizing`,screen:$_,alt:`Constraint diagram of thrust loading against wing loading, with the design point marked`,focus:{x:.765,y:.57,w:.18,h:.16}},{title:`Propulsion characterized`,body:`Thrust modelled against airspeed for the 10×4.7 propeller, then checked on the bench.`,word:`Thrust`,screen:ev,alt:`Plot of thrust against flight speed for a 10 by 4.7 propeller`,focus:{x:.07,y:.12,w:.26,h:.26}},{title:`Built by the team`,body:`CAD-driven manufacturing, propulsion bench tests and system integration at the field.`,word:`Build`,screen:tv,alt:`The team preparing the Nimbus airframe on a field table`,focus:{x:.28,y:.6,w:.5,h:.3}},{title:`Flight day`,body:`Ground-roll tested and flown at Mission Bay Park, San Diego.`,word:`Flight`,screen:nv,alt:`The Nimbus team standing behind the aircraft at the flight field`,focus:{x:.2,y:.7,w:.62,h:.26}}],av=[.07,.95],ov=.24,sv=`1180 / 820`,cv=12,lv=.08,uv=90,dv=.06,fv=.55,pv={rotateX:58,rotateY:0,rotateZ:-32,scale:.8},mv={rotateX:40,rotateY:2,rotateZ:-18,scale:.9},hv=[{from:{rotateX:14,rotateY:10,rotateZ:-8,scale:.98},to:{rotateX:10,rotateY:6,rotateZ:-6,scale:1}},{from:{rotateX:20,rotateY:-16,rotateZ:6,scale:1},to:{rotateX:16,rotateY:-11,rotateZ:4,scale:1}},{from:{rotateX:8,rotateY:18,rotateZ:-4,scale:1},to:{rotateX:6,rotateY:13,rotateZ:-3,scale:1}},{from:{rotateX:24,rotateY:-6,rotateZ:-10,scale:1},to:{rotateX:20,rotateY:-3,rotateZ:-8,scale:1}},{from:{rotateX:12,rotateY:2,rotateZ:-3,scale:1},to:{rotateX:9,rotateY:0,rotateZ:-2,scale:1}}],gv={rotateX:10,rotateY:-2,rotateZ:-5,scale:1},_v=iv.length,vv=e=>`${(e*100).toFixed(3)}%`,yv=({x:e,y:t,w:n,h:r})=>`${vv(e+n/2)} ${vv(t+r/2)}`,bv=({index:e,progress:t,isReducedMotion:n})=>{let{screen:r,alt:i,focus:a}=iv[e],{x:o,y:s,w:c,h:l}=a,{length:u}=J_(e,_v,av),d=q_(e,_v,av,ov/2*u),f=Q(t,d.input,d.opacity),p=Q(f,e=>n||e>=.999?`none`:`blur(${((1-e)*cv).toFixed(2)}px)`),m=X_(e,_v,av),h=Q(t,m.input,m.lift),g=Q(h,e=>n?1:1+lv*e),_=Q(h,e=>e*fv),v=Q(h,e=>n?0:e*uv),y=Q(h,e=>n?1:(1+lv*e)*(1+dv*e)),b=Q(h,[0,.15,1],[0,1,1]),x=Q(h,e=>`0 ${(e*36).toFixed(1)}px ${(e*60).toFixed(1)}px -12px rgba(0, 0, 0, ${(e*.55).toFixed(3)})`);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Fv,{children:(0,Z.jsxs)(Iv,{style:{opacity:f,filter:p,scale:g,transformOrigin:yv(a)},children:[(0,Z.jsx)(Lv,{src:r,alt:i,width:2360,height:1640,loading:`lazy`,decoding:`async`}),(0,Z.jsx)(Rv,{"aria-hidden":`true`,style:{opacity:_}}),(0,Z.jsx)(zv,{"aria-hidden":`true`,style:{left:vv(o),top:vv(s),width:vv(c),height:vv(l),opacity:h}})]})}),(0,Z.jsx)(Bv,{"aria-hidden":`true`,children:(0,Z.jsx)(Vv,{style:{left:vv(o),top:vv(s),width:vv(c),height:vv(l),backgroundImage:`url(${r})`,backgroundSize:`${vv(1/c)} ${vv(1/l)}`,backgroundPosition:`${vv(o/(1-c))} ${vv(s/(1-l))}`,z:v,scale:y,opacity:b,boxShadow:x}})})]})},xv=({index:e,progress:t,isReducedMotion:n})=>{let{word:r}=iv[e],{start:i,end:a}=J_(e,_v,av),o=Z_(e,_v,av),s=Q(t,o.input,o.opacity),c=Q(t,[i,a],n?[`0%`,`0%`]:[`8%`,`-8%`]);return(0,Z.jsx)(Ov,{"aria-hidden":`true`,style:{opacity:s,x:c},children:r})},Sv=Y_({poses:hv,intro:pv,outro:mv,range:av,transition:ov}),Cv=(e,t)=>{let{input:n,values:r}=Sv,i=Q(e,n,r.rotateX),a=Q(e,n,r.rotateY),o=Q(e,n,r.rotateZ),s=Q(e,n,r.scale);return t?gv:{rotateX:i,rotateY:a,rotateZ:o,scale:s}},wv=({progress:e,isReducedMotion:t})=>{let n=Cv(e,t),r=Q(e,[0,1],[`-60%`,`60%`]);return(0,Z.jsxs)(Tv,{children:[(0,Z.jsx)(Dv,{children:iv.map((n,r)=>(0,Z.jsx)(xv,{index:r,progress:e,isReducedMotion:t},n.word))}),(0,Z.jsx)(kv,{children:(0,Z.jsxs)(Nv,{style:n,children:[iv.map((n,r)=>(0,Z.jsx)(bv,{index:r,progress:e,isReducedMotion:t},n.title)),(0,Z.jsx)(Hv,{"aria-hidden":`true`,children:(0,Z.jsx)(Uv,{style:{x:r}})}),(0,Z.jsx)(Wv,{"aria-hidden":`true`,$side:`left`,children:Mv.left.map(e=>(0,Z.jsx)(`i`,{children:e},e))}),(0,Z.jsx)(Wv,{"aria-hidden":`true`,$side:`right`,children:Mv.right.map(e=>(0,Z.jsx)(`i`,{children:e},e))}),(0,Z.jsx)(Gv,{"aria-hidden":`true`})]})})]})},Tv=N.div`
  position: absolute;
  inset: 0;
  overflow: clip;
`,Ev=`
  position: absolute;
  /* parents position the tablet with --stage-top / --stage-left */
  inset: var(--stage-top, 0) 0 0 var(--stage-left, 0);
  display: grid;
  place-items: center;
`,Dv=N.div`
  ${Ev}
  pointer-events: none;
`,Ov=N($.span)`
  grid-area: 1 / 1;
  font-family: var(--font-display);
  font-size: clamp(5rem, 2rem + 14vw, 17rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--color-surface);
  white-space: nowrap;
  user-select: none;
`,kv=N.div`
  ${Ev}
  perspective: 1800px;
`,Av=`clamp(10px, 1.3vw, 18px)`,jv=`clamp(22px, 3vw, 44px)`,Mv={left:[`GEO`,`AERO`,`PROP`,`STAB`],right:[`MASS`,`STRC`,`MSN`,`TEST`]},Nv=N($.div)`
  position: relative;
  width: var(--tablet-width, min(46vw, 760px));
  aspect-ratio: ${sv};
  box-sizing: content-box;
  padding: ${Av} ${jv};
  border-radius: clamp(6px, 0.8vw, 12px);
  /* anodised aluminium housing */
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 18%),
    linear-gradient(145deg, #3a3b3f 0%, #1a1b1e 40%, #0e0f11 100%);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 50px 80px -34px rgba(0, 0, 0, 0.38),
    0 22px 34px -22px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  will-change: transform;
`,Pv=`
  position: absolute;
  inset: ${Av} ${jv};
  border-radius: 2px;
`,Fv=N.div`
  ${Pv}
  overflow: hidden;
`,Iv=N($.div)`
  position: absolute;
  inset: 0;
  background: #0a0a0a;
`,Lv=N.img`
  display: block;
  width: 100%;
  height: 100%;
`,Rv=N($.div)`
  position: absolute;
  inset: 0;
  background: #000;
  pointer-events: none;
`,zv=N($.div)`
  position: absolute;
  border-radius: 2px;
  background: #050506;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
`,Bv=N.div`
  ${Pv}
  transform-style: preserve-3d;
  pointer-events: none;
`,Vv=N($.div)`
  position: absolute;
  border-radius: 2px;
  background-repeat: no-repeat;
  outline: 1px solid rgba(255, 255, 255, 0.14);
  outline-offset: -1px;
`,Hv=N.div`
  ${Pv}
  overflow: hidden;
  pointer-events: none;
`,Uv=N($.div)`
  position: absolute;
  inset: -20% -40%;
  background: linear-gradient(
    115deg,
    transparent 35%,
    rgba(255, 255, 255, 0.07) 45%,
    rgba(255, 255, 255, 0.02) 55%,
    transparent 65%
  );
`,Wv=N.div`
  position: absolute;
  top: ${Av};
  bottom: ${Av};
  ${({$side:e})=>e===`left`?`left: 0;`:`right: 0;`}
  width: ${jv};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  i {
    display: grid;
    place-items: center;
    width: 64%;
    aspect-ratio: 1.6;
    border-radius: 2px;
    background: linear-gradient(180deg, #2b2c30, #17181b);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 1px 2px rgba(0, 0, 0, 0.6);
    color: rgba(242, 165, 0, 0.85);
    font: 700 clamp(4px, 0.42vw, 7px) / 1 var(--font-body);
    font-style: normal;
    letter-spacing: 0.06em;
  }
`,Gv=N.span`
  position: absolute;
  inset: 5px;
  pointer-events: none;
  --s: radial-gradient(circle, #55575c 0 1.5px, #1b1c1f 2px 2.5px, transparent 3px);
  background:
    var(--s) top left / 8px 8px no-repeat,
    var(--s) top right / 8px 8px no-repeat,
    var(--s) bottom left / 8px 8px no-repeat,
    var(--s) bottom right / 8px 8px no-repeat;
`,Kv=({index:e,children:t,tone:n=`paper`,className:r})=>(0,Z.jsxs)(qv,{className:r,$tone:n,children:[e&&(0,Z.jsx)(Jv,{"aria-hidden":`true`,$tone:n,children:e}),(0,Z.jsx)(`span`,{children:t})]}),qv=N.p`
  display: inline-flex;
  align-items: baseline;
  gap: 0.9rem;
  font-family: var(--font-body);
  font-size: var(--text-label);
  font-weight: 400;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: ${({$tone:e})=>e===`night`?`var(--color-night-muted)`:`var(--color-ink-soft)`};
`,Jv=N.span`
  font-variant-numeric: tabular-nums;
  color: ${({$tone:e})=>e===`night`?`var(--color-amber)`:`var(--color-amber-ink)`};
`,Yv={stiffness:120,damping:28,restDelta:5e-4},Xv=`(max-width: 899px)`,Zv=e=>{let[t,n]=(0,A.useState)(0);return Hm(e,`change`,e=>n(K_(e,iv.length,av))),t},Qv=()=>{let e=(0,A.useRef)(null),t=!!Nh(),{scrollYProgress:n}=Th({target:e,offset:[`start start`,`end end`]}),r=Ah(n,Yv),i=t?n:r,a=Zv(i),o=[[`Role`,rv.role],[`Timeline`,rv.timeline]].filter(([,e])=>e);return(0,Z.jsx)($v,{id:`work`,ref:e,"aria-labelledby":`featured-heading`,children:(0,Z.jsxs)(ey,{children:[(0,Z.jsx)(wv,{progress:i,isReducedMotion:t}),(0,Z.jsxs)(ty,{children:[(0,Z.jsx)(Kv,{index:`02`,children:`Featured aircraft`}),(0,Z.jsx)(ny,{id:`featured-heading`,children:rv.name}),(0,Z.jsx)(ry,{children:rv.summary}),o.length>0&&(0,Z.jsx)(iy,{children:o.map(([e,t])=>(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`dt`,{children:e}),(0,Z.jsx)(`dd`,{children:t})]},e))}),(0,Z.jsx)(fy,{"aria-hidden":`true`,children:iv[a].title}),(0,Z.jsx)(ay,{children:iv.map(({title:e,body:n},r)=>(0,Z.jsxs)(oy,{"aria-current":r===a?`step`:void 0,$isActive:r===a,children:[(0,Z.jsx)(sy,{children:e}),(0,Z.jsx)(cy,{initial:!1,animate:r===a?{opacity:1,height:`auto`}:{opacity:0,height:0},transition:{duration:t?0:.35,ease:[.16,1,.3,1]},children:n})]},e))}),(0,Z.jsxs)(ly,{children:[(0,Z.jsxs)(uy,{href:`/work/${rv.slug}`,children:[`Read the case study `,(0,Z.jsx)(Tg,{"aria-hidden":`true`})]}),(0,Z.jsxs)(dy,{href:rv.url,target:`_blank`,rel:`noopener noreferrer`,children:[`View `,rv.urlLabel,` `,(0,Z.jsx)(wg,{"aria-hidden":`true`})]})]})]})]})})},$v=N.section`
  position: relative;
  /* about 70vh of scroll per shot */
  height: 400vh;
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-body);
  /* clip, not hidden: hidden would break position: sticky */
  overflow: clip;
  /* The pinned captions resize as chapters change; without this the browser's
     scroll anchoring "corrects" for that and yanks the page back up */
  overflow-anchor: none;

  @media ${Xv} {
    height: 340vh;
  }
`,ey=N.div`
  position: sticky;
  top: 0;
  height: 100svh;
  /* tablet sits in the right two thirds; copy owns the left third */
  --tablet-width: min(46vw, 760px);
  --stage-left: 30%;

  @media ${Xv} {
    --tablet-width: 86vw;
    --stage-left: 0;
    --stage-top: 38%;
  }
`,ty=N.div`
  position: absolute;
  z-index: 1;
  top: calc(var(--nav-offset) + var(--nav-height) + clamp(1.5rem, 4vh, 3rem));
  bottom: clamp(1.5rem, 5vh, 3.5rem);
  /* line up with the hero's content column (and stay clear of the scroll trail) */
  left: max(var(--space-gutter), (100vw - var(--content-max)) / 2);
  width: min(30%, 24rem);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media ${Xv} {
    right: var(--space-gutter);
    left: var(--space-gutter);
    bottom: auto;
    width: auto;
    gap: 0.75rem;
  }
`,ny=N.h2`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 1.5rem + 2.6vw, 4rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.04em;
`,ry=N.p`
  max-width: 34ch;
  font-size: var(--text-base);
  line-height: 1.5;
  color: var(--color-ink-soft);

  @media ${Xv} {
    font-size: var(--text-sm);
  }
`,iy=N.dl`
  display: flex;
  gap: 2rem;
  font-size: var(--text-sm);

  dt {
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }
  dd { margin-top: 0.25rem; }
`,ay=N.ol`
  list-style: none;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding-left: 1rem;
  border-left: 1px solid var(--color-line);

  @media ${Xv} {
    display: none;
  }
`,oy=N.li`
  position: relative;
  color: ${({$isActive:e})=>e?`var(--color-ink)`:`var(--color-ink-muted)`};
  transition: color var(--duration-normal) ease;

  /* active marker sits on the rail */
  &::before {
    content: '';
    position: absolute;
    left: calc(-1rem - 1.5px);
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--color-amber);
    transform: scaleY(${({$isActive:e})=>+!!e});
    transform-origin: top;
    transition: transform var(--duration-normal) var(--ease-out-expo);
  }
`,sy=N.p`
  font-size: var(--text-base);
  font-weight: 700;
`,cy=N($.p)`
  overflow: hidden;
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--color-ink-soft);
  padding-top: 0.25rem;
`,ly=N.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.25rem;
`,uy=N.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.1rem;
  background: var(--color-ink);
  color: var(--color-paper);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color var(--duration-fast) ease, transform var(--duration-fast) var(--ease-out-expo);

  svg {
    transition: transform var(--duration-normal) var(--ease-out-expo);
  }

  &:hover { background: #2b2b2b; }
  &:hover svg { transform: translateX(3px); }
  &:active { transform: scale(0.97); }
  &:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`,dy=N.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--color-ink-soft);
  font-size: var(--text-sm);
  text-decoration: underline;
  text-decoration-color: var(--color-line);
  text-underline-offset: 4px;
  transition: color var(--duration-fast) ease, text-decoration-color var(--duration-fast) ease;

  &:hover {
    color: var(--color-ink);
    text-decoration-color: var(--color-amber);
  }

  &:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`,fy=N.p`
  display: none;
  font-size: var(--text-sm);
  font-weight: 500;

  @media ${Xv} {
    display: block;
  }
`,py=`/assets/photo-team-Cn4VVPbo.webp`,my=`/assets/render-hero-sp_Ix8R8.webp`,hy=[{index:`01`,slug:`nimbus-v4`,name:`Nimbus V4`,year:`2026`,kind:`Built & flown`,hook:`A flying-wing cargo UAV, optimized for profit, then built and flown at Mission Bay.`,tech:[`MATLAB`,`AVL`,`CMA-ES`,`CAD`],preview:py,previewAlt:`The Nimbus team behind the aircraft at the Mission Bay flight field`,figures:[{value:`1.57 m`,label:`Span`},{value:`800 g`,label:`Payload`},{value:`14.3`,label:`Cruise L/D`}]},{index:`02`,slug:`jager-qrf`,name:`Jäger-QRF`,year:`2026`,kind:`Conceptual design`,hook:`A hybrid VTOL that hovers over a fire and drops two suppression payloads.`,tech:[`MATLAB`,`AVL`,`Mission sizing`,`Flight dynamics`],preview:my,previewAlt:`Jäger-QRF render releasing two red suppression payloads`,figures:[{value:`~51 mph`,label:`Cruise`},{value:`1.5 mi`,label:`Range`},{value:`55 lb`,label:`Gross weight`}]}],gy=[.16,1,.3,1],_y=[`A`,`B`,`C`,`D`,`E`,`F`],vy=[`1`,`2`,`3`,`4`],yy=()=>{let[e,t]=(0,A.useState)(0),n=!!Nh(),r=hy[e];return(0,Z.jsx)(xy,{id:`projects`,"aria-labelledby":`projects-heading`,children:(0,Z.jsxs)(Sy,{children:[(0,Z.jsxs)(Cy,{children:[(0,Z.jsx)(Kv,{index:`03`,children:`The hangar`}),(0,Z.jsx)(wy,{id:`projects-heading`,children:`Project files`}),(0,Z.jsx)(Ty,{children:`Two airframes, from mission requirements to sizing, stability and hardware.`})]}),(0,Z.jsxs)(Ey,{children:[(0,Z.jsxs)(Dy,{children:[(0,Z.jsxs)(ky,{"aria-hidden":`true`,children:[(0,Z.jsx)(`span`,{children:`No.`}),(0,Z.jsx)(`span`,{children:`Aircraft`}),(0,Z.jsx)(`span`,{children:`Status`})]}),hy.map((n,r)=>(0,Z.jsxs)(Ay,{"data-active":r===e,children:[(0,Z.jsxs)(jy,{href:`/work/${n.slug}`,"aria-label":`${n.name}: view case study`,onPointerEnter:e=>e.pointerType===`mouse`&&t(r),onFocus:()=>t(r),children:[(0,Z.jsx)(`span`,{className:`no`,children:n.index}),(0,Z.jsx)(`span`,{className:`name`,children:n.name}),(0,Z.jsx)(`span`,{className:`kind`,children:n.kind})]}),(0,Z.jsx)(My,{children:(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`p`,{children:n.hook}),(0,Z.jsx)(`ul`,{children:n.tech.map(e=>(0,Z.jsx)(`li`,{children:e},e))}),(0,Z.jsxs)(`span`,{className:`open`,children:[`Open case study `,(0,Z.jsx)(Tg,{"aria-hidden":`true`})]})]})}),(0,Z.jsx)(Ny,{src:n.preview,alt:``,width:1600,height:1e3,loading:`lazy`,"aria-hidden":`true`})]},n.slug))]}),(0,Z.jsxs)(Py,{"aria-live":`polite`,children:[(0,Z.jsx)(Fy,{"aria-hidden":`true`,$axis:`x`,children:_y.map(e=>(0,Z.jsx)(`span`,{children:e},e))}),(0,Z.jsx)(Fy,{"aria-hidden":`true`,$axis:`y`,children:vy.map(e=>(0,Z.jsx)(`span`,{children:e},e))}),(0,Z.jsxs)(Iy,{children:[(0,Z.jsx)(kp,{mode:`popLayout`,initial:!1,children:(0,Z.jsx)($.img,{src:r.preview,alt:r.previewAlt,width:1600,height:1e3,initial:n?{opacity:0}:{opacity:0,scale:1.04,filter:`blur(8px)`},animate:{opacity:1,scale:1,filter:`blur(0px)`},exit:{opacity:0},transition:{duration:n?.2:.7,ease:gy}},r.slug)}),(0,Z.jsx)(Ly,{"aria-hidden":`true`})]}),(0,Z.jsx)(Ry,{children:r.figures.map(({value:e,label:t})=>(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`dt`,{children:t}),(0,Z.jsx)(`dd`,{children:e})]},t))}),(0,Z.jsxs)(zy,{"aria-hidden":`true`,children:[(0,Z.jsx)(`span`,{className:`k`,children:`Dwg`}),(0,Z.jsxs)(`span`,{className:`v`,children:[`HP-`,r.index]}),(0,Z.jsx)(`span`,{className:`k`,children:`Title`}),(0,Z.jsx)(`span`,{className:`v`,children:r.name}),(0,Z.jsx)(`span`,{className:`k`,children:`Sheet`}),(0,Z.jsxs)(`span`,{className:`v`,children:[e+1,` of `,hy.length]})]})]})]})]})})},by=`(max-width: 899px)`,xy=N.section`
  position: relative;
  padding: var(--space-section) var(--space-gutter);
  background: #f6f6f6;
  border-top: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);
  color: var(--color-ink);
  font-family: var(--font-body);
`,Sy=N.div`
  max-width: var(--content-max);
  margin: 0 auto;
`,Cy=N.header`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: clamp(2rem, 1.5rem + 2vw, 3.5rem);
`,wy=N.h2`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 1.5rem + 2.6vw, 4rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.04em;
`,Ty=N.p`
  max-width: 44ch;
  color: var(--color-ink-soft);
  font-size: var(--text-lead);
  line-height: 1.5;
`,Ey=N.div`
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(1.5rem, 1rem + 2.5vw, 3.5rem);
  align-items: start;

  @media ${by} {
    grid-template-columns: minmax(0, 1fr);
  }
`,Dy=N.ol`
  list-style: none;
  border-top: 1px solid var(--color-ink);
`,Oy=`
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 1rem;
`,ky=N.li`
  ${Oy}
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--color-line);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-soft);

  span:last-child {
    text-align: right;
  }
`,Ay=N.li`
  position: relative;
  border-bottom: 1px solid var(--color-line);

  /* amber rule marks the selected part */
  &::before {
    content: '';
    position: absolute;
    left: -1rem;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--color-amber);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform var(--duration-normal) var(--ease-out-expo);
  }

  &[data-active='true']::before {
    transform: scaleY(1);
  }

  @media ${by} {
    &::before {
      left: 0;
    }
  }
`,jy=N.a`
  ${Oy}
  padding: clamp(1rem, 0.8rem + 0.8vw, 1.5rem) 0;
  color: var(--color-ink);
  text-decoration: none;

  .no {
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    color: var(--color-amber-ink);
    font-variant-numeric: tabular-nums;
  }

  .name {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 1.3rem + 1.6vw, 2.75rem);
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1;
    transition: transform 0.5s var(--ease-out-expo), color var(--duration-fast) ease;
  }

  .kind {
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink-soft);
    white-space: nowrap;
  }

  ${Ay}:not([data-active='true']) & .name {
    color: var(--color-ink-muted);
  }

  &:hover .name {
    transform: translateX(0.4rem);
  }

  &:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 2px;
  }

  @media ${by} {
    padding-left: 0.9rem;

    ${Ay}:not([data-active='true']) & .name {
      color: var(--color-ink);
    }
  }
`,My=N.div`
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 0.5s var(--ease-out-expo), opacity 0.3s ease;

  ${Ay}[data-active='true'] & {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  & > div {
    min-height: 0;
    overflow: hidden;
    padding-left: 4rem;
  }

  p {
    max-width: 40ch;
    color: var(--color-ink-soft);
    line-height: 1.55;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.9rem;
  }

  li {
    padding: 0.25rem 0.55rem;
    border: 1px solid var(--color-surface-strong);
    font-size: 0.6875rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }

  .open {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin: 1rem 0 1.5rem;
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink);
  }

  @media ${by} {
    grid-template-rows: 1fr;
    opacity: 1;

    & > div {
      padding-left: 0.9rem;
    }
  }
`,Ny=N.img`
  display: none;

  @media ${by} {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 1.25rem;
    border: 1px solid var(--color-line);
  }
`,Py=N.div`
  position: relative;
  padding: 1.6rem;
  border: 1px solid var(--color-ink);
  background:
    linear-gradient(rgba(17, 17, 17, 0.04) 1px, transparent 1px) 0 0 / 100% 32px,
    linear-gradient(90deg, rgba(17, 17, 17, 0.04) 1px, transparent 1px) 0 0 / 32px 100%,
    #fbfbfb;

  @media ${by} {
    display: none;
  }
`,Fy=N.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  font-size: 0.625rem;
  letter-spacing: 0.08em;
  color: var(--color-ink-soft);
  pointer-events: none;

  ${({$axis:e})=>e===`x`?`left: 1.6rem; right: 1.6rem; top: 0.4rem;`:`top: 1.6rem; bottom: 1.6rem; left: 0.55rem; flex-direction: column; align-items: center;`}
`,Iy=N.div`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border: 1px solid var(--color-line);
  background: var(--color-surface);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Ly=N.span`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 28px;
  height: 28px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  --c: rgba(242, 165, 0, 0.9);
  background:
    linear-gradient(var(--c), var(--c)) center / 100% 1px no-repeat,
    linear-gradient(var(--c), var(--c)) center / 1px 100% no-repeat;
  mix-blend-mode: multiply;
`,Ry=N.dl`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 1.2rem;
  margin-right: 13rem; /* clear of the title block */
  border-top: 1px solid var(--color-ink);

  div {
    padding: 0.7rem 1rem 0 0;
  }

  div + div {
    padding-left: 1rem;
    border-left: 1px solid var(--color-line);
  }

  dt {
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }

  dd {
    margin-top: 0.35rem;
    font-size: clamp(1.25rem, 1rem + 0.8vw, 1.75rem);
    letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums;
  }
`,zy=N.div`
  position: absolute;
  right: 1.6rem;
  bottom: 1.6rem;
  display: grid;
  grid-template-columns: auto auto;
  width: 12rem;
  border: 1px solid var(--color-ink);
  background: #fbfbfb;
  font-size: 0.6875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  span {
    padding: 0.35rem 0.55rem;
    border-bottom: 1px solid var(--color-line);
  }

  span:nth-last-child(-n + 2) {
    border-bottom: 0;
  }

  .k {
    color: var(--color-ink-soft);
    border-right: 1px solid var(--color-line);
  }

  .v {
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }
`,By=2.4,Vy=4,Hy={month:6,quarter:10,year:16},Uy=9,Wy=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],Gy=e=>e*Math.PI/180,Ky=(e,t)=>({x:e*Math.cos(Gy(t)),y:e*Math.sin(Gy(t))}),qy=(e,t,n)=>{let r=Ky(e,t),i=Ky(e,n),a=+(Math.abs(n-t)>180),o=+(n>t);return`M ${r.x.toFixed(2)} ${r.y.toFixed(2)} A ${e} ${e} 0 ${a} ${o} ${i.x.toFixed(2)} ${i.y.toFixed(2)}`},Jy=({scale:e,month:t,radius:n})=>{let{ticks:r,totalMonths:i}=e,a=Q(t,e=>e*By),o=Q(t,e=>i?Math.min(1,Math.max(0,e/i)):0),s=-i*By,c=n-Vy,l=c-Hy.year-Uy;return(0,Z.jsxs)(Yy,{style:{"--r":`${n}px`},children:[(0,Z.jsxs)($.svg,{viewBox:`${-n} ${-n} ${n*2} ${n*2}`,width:n*2,height:n*2,"aria-hidden":`true`,style:{rotate:a},children:[(0,Z.jsx)(`circle`,{r:n,fill:`none`,stroke:`var(--wheel-line)`,strokeWidth:`1`}),(0,Z.jsx)($.path,{d:qy(n,0,s),fill:`none`,stroke:`var(--color-amber)`,strokeWidth:`2`,strokeLinecap:`round`,style:{pathLength:o}}),r.map(({m:e,year:t,month:n})=>{let r=-e*By,a=t?`year`:n%3==0?`quarter`:`month`,o=Ky(c,r),s=Ky(c-Hy[a],r),u=Ky(l,r);return(0,Z.jsxs)(`g`,{children:[(0,Z.jsx)(`line`,{x1:o.x,y1:o.y,x2:s.x,y2:s.y,className:`tick ${a}`}),(0,Z.jsx)(`text`,{x:u.x,y:u.y,transform:`rotate(${r} ${u.x} ${u.y})`,textAnchor:`end`,dominantBaseline:`middle`,className:e===i?`now`:t?`year`:`month`,children:e===i?`NOW`:t??Wy[n]})]},e)})]}),(0,Z.jsx)(Xy,{"aria-hidden":`true`})]})},Yy=N.div`
  position: absolute;
  /* the wheel's centre sits off-screen left; its rim passes through --rim-x */
  left: calc(var(--rim-x) - var(--r) * 2);
  top: calc(50% - var(--r));
  width: calc(var(--r) * 2);
  height: calc(var(--r) * 2);
  --wheel-line: var(--color-surface-strong);

  svg {
    position: absolute;
    inset: 0;
    overflow: visible;
  }

  .tick {
    stroke-linecap: round;
  }

  .tick.month {
    stroke: #bdbdbd;
    stroke-width: 0.75;
  }

  .tick.quarter {
    stroke: #8f8d8d;
    stroke-width: 1;
  }

  .tick.year {
    stroke: var(--color-ink);
    stroke-width: 1.25;
  }

  .year,
  .month,
  .now {
    font-family: var(--font-body);
    font-variant-numeric: tabular-nums;
  }

  .month {
    font-size: 8.5px;
    font-weight: 500;
    letter-spacing: 0.04em;
    fill: #8f8d8d;
  }

  .year {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    fill: var(--color-ink);
  }

  .now {
    font-size: 11px;
  }

  .now {
    fill: var(--color-amber-ink);
    font-weight: 700;
  }
`,Xy=N.span`
  position: absolute;
  left: 100%;
  top: 50%;
  width: 18px;
  height: 1px;
  margin-left: 30px;
  background: var(--color-ink);
  transform: translateY(-50%);

  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    border: 4px solid transparent;
    border-right: 6px solid var(--color-ink);
    transform: translate(-50%, -50%);
  }
`,Zy=/^(\d{4})-(\d{2})$/,Qy=e=>{let t=Zy.exec(e);if(!t)throw RangeError(`Expected a YYYY-MM date, got "${e}"`);return{year:Number(t[1]),month:Number(t[2])-1}},$y=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}`,eb=(e,t)=>{let n=Qy(t),r=Qy(e);return(r.year-n.year)*12+(r.month-n.month)},tb=(e,t)=>{let n=e[0].start,r=eb($y(t),n),{year:i,month:a}=Qy(n);return{origin:n,totalMonths:r,ticks:Array.from({length:r+1},(e,t)=>{let n=(a+t)%12,r=i+Math.floor((a+t)/12);return{m:t,month:n,year:n===0?r:null}}),nodes:e.map(e=>eb(e.start,n))}},nb=(e,[t,n])=>{let r=(n-t)/e.length,i=[0],a=[e[0]];return e.forEach((e,n)=>{let o=t+n*r,s=n===0?o:o+r*.5800000000000001;i.push(s,o+r),a.push(e,e)}),i.push(1),a.push(e[e.length-1]),i[1]===0?{input:i.slice(1),output:a.slice(1)}:{input:i,output:a}},rb=(e,t,[n,r])=>{let i=Math.min(1,Math.max(0,(e-n)/(r-n)));return Math.min(t-1,Math.floor(i*t))},ib=(e,t,n)=>{let r=eb(t??$y(n),e)+1,i=Math.floor(r/12),a=r%12,o=(e,t)=>e?`${e} ${t}${e===1?``:`s`}`:``;return[o(i,`yr`),o(a,`mo`)].filter(Boolean).join(` `)||`1 mo`},ab=[{start:`2021-08`,end:`2021-11`,role:`Process Engineering Intern`,company:`Dove Pharma LLP`,location:`India`,summary:`Supported engineering teams with process documentation and data analysis for ongoing operations.`,highlights:[`Supported engineering teams with process documentation, data collection and analysis.`,`Assisted with engineering calculations and spreadsheet-based tracking for validation and compliance activities.`,`Prepared technical documentation and summaries for internal engineering review.`],impact:`Kept validation and compliance work traceable with clear calculations, tracking and review-ready documentation.`,metric:null,tags:[`Process documentation`,`Data analysis`,`Validation`,`Technical writing`]},{start:`2022-08`,end:`2024-07`,role:`A.S.-T in Mathematics`,company:`Palomar College`,location:`San Marcos, CA`,summary:`Associate Degree in Science for Transfer in Mathematics, the foundation for transferring into aerospace engineering.`,highlights:[`Dean’s List in Fall 2022, Spring 2023, Fall 2023, Spring 2024 and Summer 2024.`,`Transferred to UC San Diego’s B.S. in Aerospace Engineering.`],impact:`Built the mathematical base for aerodynamics, controls and computational methods coursework.`,metric:{value:`3.94`,label:`GPA out of 4.0`},tags:[`Mathematics`,`Dean’s List`]},{start:`2024-09`,end:`2026-12`,role:`B.S. Aerospace Engineering`,company:`UC San Diego`,location:`La Jolla, CA`,summary:`Aircraft design, computational analysis and hardware integration, graduating December 2026.`,highlights:[`Coursework: aerodynamics, advanced fluid mechanics, propulsion, linear controls, computational methods, flight simulation techniques, aerospace structures and senior aerospace design.`,`Senior design: Jäger-QRF hybrid VTOL (MAE 155A) and Nimbus V4 flying-wing cargo aircraft (MAE 155B).`],impact:`Carried two aircraft from requirements through sizing and stability, and one all the way to flight test.`,metric:{value:`4×`,label:`UCSD Provost Honors`},tags:[`Aerodynamics`,`Propulsion`,`Controls`,`Aircraft design`]},{start:`2026-01`,end:`2026-09`,role:`Instructional Assistant`,company:`Physics Department, UC San Diego`,location:`La Jolla, CA`,summary:`Supported physics instruction in the classroom and the lab.`,highlights:[`Collaborated with professors and teaching staff to keep instruction aligned with course objectives.`,`Helped students connect theoretical physics principles to practical applications in class and lab.`,`Graded assignments and examinations.`],impact:`Helped students turn physics theory into working intuition, and kept course delivery consistent across the teaching team.`,metric:null,tags:[`Teaching`,`Physics`,`Lab instruction`]},{start:`2026-06`,end:`2026-08`,role:`Test Engineering Intern`,company:`Sensor Systems LLC`,location:`St. Petersburg, FL`,summary:`Qualification testing of precision potentiometers for mission-critical aerospace and defense applications.`,highlights:[`Ran clutch-release-time tests on clutched potentiometer assemblies using controlled-speed actuation and high-speed timing instrumentation.`,`Executed multi-axis vibration qualification on shaker systems with accelerometers and data acquisition, in 3-hour cycles across X, Y and Z.`,`Performed full-travel linearity and output-smoothness testing with precision actuators, multimeters, oscilloscopes and automated logging.`],impact:`Verified mechanical response, overtravel protection, durability and electrical stability against customer specifications.`,metric:{value:`3-axis`,label:`vibration qualification, 3-hour test cycles`},tags:[`Vibration testing`,`Data acquisition`,`Instrumentation`,`Qualification`]},{start:`2026-09`,end:null,role:`Project Engineer`,company:`Big Sky Electric`,location:`San Marcos, CA`,summary:`Planning and coordinating onsite engineering for water and wastewater infrastructure projects.`,highlights:[`Assist the project manager in planning and coordinating onsite engineering activities while tracking budgets, documentation and schedule updates.`,`Coordinate project submittals and track RFIs and PCOs to resolve technical issues.`,`Work with foremen, superintendents, suppliers and subcontractors to keep field operations efficient.`],impact:`Keeps technical issues moving to resolution and field work on schedule and on budget.`,metric:null,tags:[`Project coordination`,`RFIs & PCOs`,`Submittals`,`Budget tracking`]}],ob=[.06,.94],sb={stiffness:55,damping:20,mass:.9,restDelta:5e-4},cb=`(max-width: 899px)`,lb=[.16,1,.3,1],ub=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],db=e=>{let[t,n]=e.split(`-`);return`${ub[Number(n)-1]} ${t}`},fb=({now:e=new Date})=>{let t=(0,A.useRef)(null),n=!!Nh(),r=Rh(cb),i=tb(ab,e),{scrollYProgress:a}=Th({target:t,offset:[`start start`,`end end`]}),o=Ah(a,sb),s=n?a:o,{input:c,output:l}=nb(i.nodes,ob),u=Q(s,c,l),[d,f]=(0,A.useState)(0);Hm(s,`change`,e=>f(rb(e,ab.length,ob)));let p=ab[d],m=p.end===null;return(0,Z.jsx)(pb,{id:`experience`,ref:t,"aria-labelledby":`experience-heading`,$count:ab.length,children:(0,Z.jsxs)(mb,{children:[(0,Z.jsx)(Jy,{scale:i,month:u,radius:r?380:560}),(0,Z.jsxs)(hb,{children:[(0,Z.jsxs)(_b,{children:[(0,Z.jsx)(Kv,{index:`04`,children:`Flight log`}),(0,Z.jsx)(`h2`,{id:`experience-heading`,children:`Experience`})]}),(0,Z.jsx)(gb,{children:(0,Z.jsx)(kp,{mode:`wait`,initial:!1,children:(0,Z.jsxs)($.article,{initial:!n&&{opacity:0,y:24},animate:{opacity:1,y:0},exit:n?{opacity:0}:{opacity:0,y:-18},transition:{duration:.45,ease:lb},"aria-live":`polite`,children:[(0,Z.jsxs)(vb,{children:[m&&(0,Z.jsx)(yb,{"aria-hidden":`true`}),db(p.start),` — `,m?`Present`:db(p.end),(0,Z.jsxs)(`span`,{children:[` · `,ib(p.start,p.end,e)]})]}),(0,Z.jsx)(bb,{children:p.role}),(0,Z.jsxs)(xb,{children:[p.company,(0,Z.jsxs)(`span`,{children:[` · `,p.location]})]}),(0,Z.jsx)(Sb,{children:p.summary}),p.highlights.length>0&&(0,Z.jsx)(wb,{children:p.highlights.map(e=>(0,Z.jsx)(`li`,{children:e},e))}),(0,Z.jsxs)(Tb,{children:[p.metric&&(0,Z.jsxs)(Db,{children:[(0,Z.jsx)(`b`,{children:p.metric.value}),(0,Z.jsx)(`span`,{children:p.metric.label})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(Eb,{children:`Impact`}),(0,Z.jsx)(`p`,{children:p.impact})]})]}),(0,Z.jsx)(Ob,{children:p.tags.map(e=>(0,Z.jsx)(`li`,{children:e},e))})]},p.company)})})]}),(0,Z.jsx)(kb,{as:`ol`,children:ab.map(e=>(0,Z.jsxs)(`li`,{children:[e.role,`, `,e.company,`, `,db(e.start),` to `,e.end?db(e.end):`present`]},e.company))})]})})},pb=N.section`
  position: relative;
  height: ${({$count:e})=>e*80+40}vh;
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-body);
  overflow: clip;
  overflow-anchor: none;
`,mb=N.div`
  position: sticky;
  top: 0;
  height: 100svh;
  overflow: hidden;
  --rim-x: clamp(150px, 24vw, 360px);

  @media ${cb} {
    --rim-x: 64px;
  }
`,hb=N.div`
  position: absolute;
  z-index: 1;
  left: ${`calc(var(--rim-x) + clamp(5.5rem, 3.5rem + 5vw, 9rem))`};
  right: var(--space-gutter);
  top: calc(var(--nav-offset) + var(--nav-height) + clamp(1rem, 3vh, 2rem));
  bottom: clamp(1.5rem, 4vh, 3rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 5vh, 3.5rem);
  max-width: 40rem;

  @media ${cb} {
    left: calc(var(--rim-x) + 2.75rem);
  }
`,gb=N.div`
  flex: 1;
  min-height: 0;
`,_b=N.header`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h2 {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 1.3rem + 1.2vw, 2.5rem);
    font-weight: 700;
    letter-spacing: -0.035em;
  }
`,vb=N.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--text-label);
  font-weight: 700;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;

  span {
    color: var(--color-ink-soft);
    font-weight: 400;
  }
`,yb=N.i`
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-live);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: inherit;
    animation: exp-pulse 2.4s var(--ease-out-expo) infinite;
  }

  @keyframes exp-pulse {
    0% { transform: scale(1); opacity: 0.6; }
    70%, 100% { transform: scale(2.6); opacity: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    &::after { animation: none; }
  }
`,bb=N.h3`
  margin-top: 0.9rem;
  font-family: var(--font-display);
  font-size: clamp(2rem, 1.4rem + 2vw, 3.25rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.035em;

  @media (max-height: 780px) {
    margin-top: 0.6rem;
    font-size: clamp(1.8rem, 1.3rem + 1.6vw, 2.6rem);
  }

  @media ${cb} {
    font-size: 1.6rem;
  }
`,xb=N.p`
  margin-top: 0.6rem;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.01em;

  span {
    color: var(--color-ink-soft);
    font-weight: 400;
  }

  @media ${cb} {
    font-size: 1rem;
  }
`,Sb=N.p`
  margin-top: 1rem;
  max-width: 52ch;
  line-height: 1.55;
  color: var(--color-ink);

  @media ${cb} {
    font-size: var(--text-sm);
  }
`,Cb=`(max-height: 780px)`,wb=N.ul`
  list-style: none;
  margin-top: 1.1rem;
  display: grid;
  gap: 0.55rem;
  max-width: 60ch;
  color: var(--color-ink-soft);
  font-size: var(--text-sm);
  line-height: 1.55;

  li {
    position: relative;
    padding-left: 1.1rem;
  }

  /* hairline dash instead of a bullet */
  @media ${Cb} {
    margin-top: 0.8rem;
    gap: 0.35rem;
    line-height: 1.45;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.78em;
    width: 0.55rem;
    height: 1px;
    background: var(--color-amber);
  }

  /* too long for a narrow column: phones get the summary and impact instead */
  @media ${cb} {
    display: none;
  }
`,Tb=N.div`
  display: flex;
  align-items: stretch;
  gap: 1.25rem;
  margin-top: 1.4rem;
  padding-top: 1.1rem;
  border-top: 1px solid var(--color-line);
  max-width: 60ch;

  @media ${Cb} {
    margin-top: 1rem;
    padding-top: 0.8rem;
  }

  p {
    margin-top: 0.25rem;
    font-size: var(--text-sm);
    line-height: 1.55;
  }

  @media ${cb} {
    flex-direction: column;
    gap: 0.75rem;
  }
`,Eb=N.span`
  font-size: var(--text-label);
  font-weight: 700;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-soft);
`,Db=N.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1.25rem;
  border-right: 1px solid var(--color-line);

  b {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 1.4rem + 1vw, 2.25rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  span {
    margin-top: 0.3rem;
    font-size: 0.75rem;
    color: var(--color-ink-soft);
  }

  @media ${cb} {
    padding-right: 0;
    border-right: 0;
  }
`,Ob=N.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;

  li {
    padding: 0.3rem 0.7rem;
    border-radius: 2px;
    border: 1px solid var(--color-surface-strong);
    font-size: var(--text-label);
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }

  /* very short windows: tags are the first thing to go */
  @media (max-height: 680px) {
    display: none;
  }
`,kb=N.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`,Ab=({channel:e,callsign:t,handle:n,href:r,action:i,external:a,isPrimary:o,children:s})=>{let c=(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Mb,{"aria-hidden":`true`,$isPrimary:o}),(0,Z.jsxs)(Nb,{className:`ch`,"aria-hidden":`true`,children:[(0,Z.jsx)(`small`,{children:`Ch`}),e]}),(0,Z.jsxs)(Nb,{className:`route`,children:[(0,Z.jsx)(`span`,{className:`callsign`,children:t}),(0,Z.jsx)(`span`,{className:`handle`,children:n})]}),(0,Z.jsx)(Nb,{className:`action`,children:s??(0,Z.jsxs)(`span`,{className:`cue`,children:[i,` `,(0,Z.jsx)(wg,{"aria-hidden":`true`})]})})]});return r?(0,Z.jsx)(jb,{as:`a`,href:r,...a?{target:`_blank`,rel:`noopener noreferrer`}:{},"aria-label":`${t}: ${n}`,$isLink:!0,children:c}):(0,Z.jsx)(jb,{children:c})},jb=N.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.5rem 3.25rem minmax(0, 1fr) auto;
  align-items: stretch;
  min-height: 4rem;
  background: #fbf9f3;
  color: var(--color-ink);
  text-decoration: none;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 6px 14px -10px rgba(0, 0, 0, 0.35);
  transition: transform 0.5s var(--ease-out-expo), box-shadow 0.5s var(--ease-out-expo);

  /* strips slide along the board when picked up */
  &:hover,
  &:focus-within {
    transform: translateX(10px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 14px 24px -14px rgba(0, 0, 0, 0.45);
  }

  ${({$isLink:e})=>e&&`
    &:hover .cue svg { transform: rotate(45deg); }
    &:hover .cue { background: var(--color-amber); border-color: var(--color-amber); }
    &:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 3px; }
  `}

  @media (prefers-reduced-motion: reduce) {
    &:hover,
    &:focus-within {
      transform: none;
    }
  }

  @media (max-width: 560px) {
    grid-template-columns: 0.5rem minmax(0, 1fr) auto;
  }
`,Mb=N.span`
  background: ${({$isPrimary:e})=>e?`var(--color-amber)`:`#8f8d8d`};
`,Nb=N.span`
  display: flex;
  align-items: center;
  padding: 0.6rem 0.9rem;

  & + & {
    border-left: 1px dashed rgba(17, 17, 17, 0.18);
  }

  &.ch {
    flex-direction: column;
    justify-content: center;
    gap: 0.15rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;

    small {
      font-size: 0.5625rem;
      font-weight: 400;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-ink-soft);
    }
  }

  &.route {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.2rem;
    min-width: 0;
  }

  .callsign {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 1rem + 0.8vw, 1.6rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .handle {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: var(--text-sm);
    color: var(--color-ink-soft);
  }

  &.action {
    gap: 0.5rem;
  }

  .cue {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--color-ink);
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    transition: background-color var(--duration-fast) ease, border-color var(--duration-fast) ease;

    svg {
      transition: transform var(--duration-normal) var(--ease-out-expo);
    }
  }

  /* the email strip's copy button, made compact, plus its "write" link */
  button {
    min-height: 2.25rem;
    padding: 0 0.75rem;
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
  }

  .write {
    display: inline-flex;
    align-items: center;
    min-height: 2.25rem;
    padding: 0 0.75rem;
    border: 1px solid var(--color-ink);
    color: var(--color-ink);
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    text-decoration: none;
    transition: background-color var(--duration-fast) ease, border-color var(--duration-fast) ease;
  }

  .write:hover {
    background: var(--color-amber);
    border-color: var(--color-amber);
  }

  .write:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 2px;
  }

  @media (max-width: 560px) {
    &.ch {
      display: none;
    }
  }
`,Pb=[...Bg,{label:`Résumé`,href:Ng}],Fb=()=>{let e=Ag(Pg),t=new Date().getFullYear();return(0,Z.jsxs)(Ib,{children:[(0,Z.jsxs)(Lb,{children:[(0,Z.jsxs)(Rb,{children:[(0,Z.jsxs)(zb,{children:[(0,Z.jsx)(Ph,{size:34}),(0,Z.jsx)(`span`,{children:jg}),(0,Z.jsxs)(`address`,{children:[`San Diego, California`,(0,Z.jsx)(`br`,{}),`USA · `,(0,Z.jsx)(`time`,{children:e})]})]}),(0,Z.jsxs)(Bb,{children:[(0,Z.jsxs)(`nav`,{"aria-label":`Footer`,children:[(0,Z.jsx)(`h2`,{children:`Sections`}),(0,Z.jsx)(`ul`,{children:Bh.map(({label:e,href:t})=>(0,Z.jsx)(`li`,{children:(0,Z.jsx)(`a`,{href:t,children:e})},t))})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h2`,{children:`Elsewhere`}),(0,Z.jsx)(`ul`,{children:Pb.map(({label:e,href:t})=>(0,Z.jsx)(`li`,{children:(0,Z.jsx)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,children:e})},e))})]})]})]}),(0,Z.jsxs)(Vb,{children:[(0,Z.jsxs)(`span`,{children:[`© `,t,` `,jg,`. All rights reserved.`]}),(0,Z.jsxs)(`a`,{href:`/#home`,children:[`Back to top `,(0,Z.jsx)(Cg,{"aria-hidden":`true`})]})]})]}),(0,Z.jsx)(Hb,{"aria-hidden":`true`,children:jg})]})},Ib=N.footer`
  overflow: hidden;
  padding: clamp(3rem, 2rem + 3vw, 5rem) var(--space-gutter) 0;
  background: #f8f8f8;
  border-top: 1px solid var(--color-line);
  color: var(--color-ink-soft);
  font-family: var(--font-body);
`,Lb=N.div`
  max-width: var(--content-max);
  margin: 0 auto;
`,Rb=N.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2.5rem;
`,zb=N.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  svg {
    color: var(--color-amber);
  }

  span {
    color: var(--color-ink);
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  address {
    font-style: normal;
    font-size: 1.125rem;
    line-height: 1.3;
    text-transform: uppercase;
    color: #aeaeae;
    font-variant-numeric: tabular-nums;
  }
`,Bb=N.div`
  display: flex;
  gap: clamp(2rem, 1rem + 4vw, 6rem);

  h2 {
    margin-bottom: 0.9rem;
    font-size: var(--text-label);
    font-weight: 400;
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  a {
    color: #8f8d8d;
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    text-decoration: none;
    transition: color var(--duration-fast) ease;
  }

  a:hover {
    color: var(--color-ink);
  }

  a:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`,Vb=N.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  margin-top: clamp(2.5rem, 2rem + 2vw, 4rem);
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-line);
  font-size: 0.6875rem;
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: #8f8d8d;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: var(--color-ink);
    text-decoration: none;
  }

  a svg {
    transition: transform var(--duration-normal) var(--ease-out-expo);
  }

  a:hover svg {
    transform: translateY(-3px);
  }

  a:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`,Hb=N.p`
  margin: clamp(1.5rem, 1rem + 2vw, 3rem) calc(-1 * var(--space-gutter)) 0;
  font-family: var(--font-condensed);
  font-size: 12.4vw;
  font-weight: 700;
  line-height: 0.78;
  letter-spacing: -0.01em;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  color: #e3e3e3;
  user-select: none;
  transform: translateY(8%);
`,Ub=[.16,1,.3,1],Wb=e=>Bg.find(t=>t.label===e).href,Gb=[{id:`li`,callsign:`LinkedIn`,handle:`in/harshilpatel2060`,href:Wb(`LinkedIn`),action:`Open`,external:!0},{id:`gh`,callsign:`GitHub`,handle:`patelharshil2060`,href:Wb(`GitHub`),action:`Open`,external:!0},{id:`cv`,callsign:`Résumé`,handle:`HarshilPatelResume.pdf`,href:Ng,action:`View`,external:!0}],Kb=e=>({hidden:{opacity:0,y:18},shown:{opacity:1,y:0,transition:{delay:e,duration:.8,ease:Ub}}}),qb=e=>({hidden:{opacity:0,x:60},shown:{opacity:1,x:0,transition:{delay:e,duration:.9,ease:Ub}}}),Jb={once:!0,margin:`-15% 0px`},Yb=()=>{let e=!Nh()&&`hidden`;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Xb,{id:`contact`,"aria-labelledby":`contact-heading`,children:(0,Z.jsxs)(Zb,{initial:e,whileInView:`shown`,viewport:Jb,children:[(0,Z.jsxs)(Qb,{children:[(0,Z.jsx)($.div,{variants:Kb(0),children:(0,Z.jsx)(Kv,{index:`05`,children:`Contact`})}),(0,Z.jsxs)($b,{id:`contact-heading`,variants:Kb(.08),children:[`Cleared for `,(0,Z.jsx)(`em`,{children:`contact.`})]}),(0,Z.jsx)(ex,{variants:Kb(.16),children:`Working on aircraft design, flight test or analysis? I’d like to hear about it.`}),(0,Z.jsxs)(tx,{variants:Kb(.22),children:[(0,Z.jsx)(nx,{"aria-hidden":`true`}),Fg]})]}),(0,Z.jsxs)(rx,{"aria-label":`Ways to get in touch`,children:[(0,Z.jsxs)(ix,{variants:Kb(.1),"aria-hidden":`true`,children:[(0,Z.jsx)(`span`,{children:`Strip board`}),(0,Z.jsxs)(`span`,{children:[`San Diego · `,Gb.length+1,` channels open`]})]}),(0,Z.jsx)($.li,{variants:qb(.15),children:(0,Z.jsxs)(Ab,{channel:`01`,callsign:`Email`,handle:Mg,isPrimary:!0,children:[(0,Z.jsx)(g_,{email:Mg,label:`Copy`}),(0,Z.jsx)(`a`,{className:`write`,href:`mailto:${Mg}`,children:`Write`})]})}),Gb.map(({id:e,callsign:t,handle:n,href:r,action:i,external:a},o)=>(0,Z.jsx)($.li,{variants:qb(.25+o*.1),children:(0,Z.jsx)(Ab,{channel:String(o+2).padStart(2,`0`),callsign:t,handle:n,href:r,action:i,external:a})},e))]})]})}),(0,Z.jsx)(Fb,{})]})},Xb=N.section`
  /* strips wait offscreen-right before sliding in; don't let them widen the page */
  overflow-x: clip;
  padding: var(--space-section) var(--space-gutter);
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-body);
`,Zb=N($.div)`
  max-width: var(--content-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(2rem, 1rem + 4vw, 5rem);
  align-items: start;

  @media (max-width: 899px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Qb=N.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.1rem;
`,$b=N($.h2)`
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 1.6rem + 4vw, 5.5rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.045em;

  em {
    font-style: normal;
    color: var(--color-ink-muted);
  }
`,ex=N($.p)`
  max-width: 36ch;
  font-size: var(--text-lead);
  line-height: 1.5;
  color: var(--color-ink-soft);
`,tx=N($.p)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-line);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--color-ink-soft);
`,nx=N.i`
  width: 7px;
  height: 7px;
  background: var(--color-amber);
  box-shadow: 0 0 0 3px rgba(242, 165, 0, 0.18);
`,rx=N.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem;
  border: 1px solid var(--color-line);
  background:
    repeating-linear-gradient(180deg, transparent 0 calc(4.5rem - 1px), rgba(17, 17, 17, 0.05) calc(4.5rem - 1px) 4.5rem),
    #e2e2e2;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.06);
`,ix=N($.li)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 0.25rem 0.4rem;
  font-size: 0.625rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink-soft);

  span:first-child {
    color: var(--color-ink);
    font-weight: 700;
  }
`,ax=({src:e,alt:t,caption:n,figure:r,tone:i=`paper`,width:a=1600,height:o=1e3,eager:s=!1,className:c})=>(0,Z.jsxs)(ox,{className:c,$tone:i,children:[(0,Z.jsx)(sx,{$tone:i,children:(0,Z.jsx)(`img`,{src:e,alt:t,width:a,height:o,loading:s?`eager`:`lazy`,decoding:`async`})}),n&&(0,Z.jsxs)(`figcaption`,{children:[r!==void 0&&(0,Z.jsxs)(`span`,{className:`fig`,children:[`Fig. `,String(r).padStart(2,`0`)]}),n]})]}),ox=N.figure`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  figcaption {
    display: flex;
    gap: 0.75rem;
    font-size: var(--text-label);
    line-height: 1.5;
    letter-spacing: 0.03em;
    color: ${({$tone:e})=>e===`night`?`var(--color-night-muted)`:`var(--color-ink-soft)`};
  }

  .fig {
    flex-shrink: 0;
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: ${({$tone:e})=>e===`night`?`var(--color-amber)`:`var(--color-amber-ink)`};
    font-variant-numeric: tabular-nums;
  }
`,sx=N.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-card);
  background: ${({$tone:e})=>e===`night`?`#16171a`:`#ffffff`};
  box-shadow: ${({$tone:e})=>e===`night`?`0 0 0 1px rgba(255, 255, 255, 0.08), 0 40px 80px -30px rgba(0, 0, 0, 0.7)`:`0 0 0 1px rgba(17, 17, 17, 0.08)`};

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  /* registration marks */
  &::after {
    content: '';
    position: absolute;
    inset: 8px;
    pointer-events: none;
    --c: ${({$tone:e})=>e===`night`?`rgba(236, 236, 236, 0.5)`:`rgba(17, 17, 17, 0.35)`};
    background:
      linear-gradient(var(--c), var(--c)) top left / 10px 1px no-repeat,
      linear-gradient(var(--c), var(--c)) top left / 1px 10px no-repeat,
      linear-gradient(var(--c), var(--c)) top right / 10px 1px no-repeat,
      linear-gradient(var(--c), var(--c)) top right / 1px 10px no-repeat,
      linear-gradient(var(--c), var(--c)) bottom left / 10px 1px no-repeat,
      linear-gradient(var(--c), var(--c)) bottom left / 1px 10px no-repeat,
      linear-gradient(var(--c), var(--c)) bottom right / 10px 1px no-repeat,
      linear-gradient(var(--c), var(--c)) bottom right / 1px 10px no-repeat;
  }
`,cx=[.16,1,.3,1],lx=({children:e,delay:t=0,as:n=`div`,...r})=>{let i=Nh(),a=$[n];return(0,Z.jsx)(a,{initial:!i&&{opacity:0,y:28},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:`-12% 0px`},transition:{duration:.8,ease:cx,delay:t},...r,children:e})},ux=({id:e,index:t,children:n,tone:r})=>(0,Z.jsxs)(xx,{children:[(0,Z.jsx)(Sx,{"aria-hidden":`true`,$onDark:r===`night`,children:t}),(0,Z.jsx)(Cx,{id:e,$onDark:r===`night`,children:n})]}),dx=({text:e})=>(0,Z.jsx)(bx,{"aria-labelledby":`cs-problem`,children:(0,Z.jsxs)(lx,{children:[(0,Z.jsx)(ux,{id:`cs-problem`,index:`01`,children:`The engineering challenge`}),(0,Z.jsx)(wx,{children:e})]})}),fx=({items:e})=>(0,Z.jsxs)(bx,{"aria-labelledby":`cs-built`,children:[(0,Z.jsx)(lx,{children:(0,Z.jsx)(ux,{id:`cs-built`,index:`02`,children:`What I did`})}),(0,Z.jsx)(Tx,{children:e.map(({title:e,body:t},n)=>(0,Z.jsxs)(lx,{as:`li`,delay:n*.06,children:[(0,Z.jsx)(`h3`,{children:e}),(0,Z.jsx)(`p`,{children:t})]},e))})]}),px=({steps:e})=>(0,Z.jsxs)(bx,{"aria-labelledby":`cs-flow`,$wide:!0,children:[(0,Z.jsx)(lx,{children:(0,Z.jsx)(ux,{id:`cs-flow`,index:`03`,children:`Design workflow`})}),(0,Z.jsx)(Ex,{children:e.map(({label:e,detail:t},n)=>(0,Z.jsxs)(lx,{as:`li`,delay:n*.08,children:[(0,Z.jsx)(`span`,{className:`step`,children:String(n+1).padStart(2,`0`)}),(0,Z.jsx)(`strong`,{children:e}),(0,Z.jsx)(`span`,{className:`detail`,children:t})]},e))})]}),mx=({items:e})=>(0,Z.jsxs)(bx,{"aria-labelledby":`cs-results`,$wide:!0,children:[(0,Z.jsx)(lx,{children:(0,Z.jsx)(ux,{id:`cs-results`,index:`04`,children:`Key figures`})}),(0,Z.jsx)(Dx,{children:e.map(({value:e,label:t},n)=>(0,Z.jsxs)(lx,{as:`li`,delay:n*.06,children:[(0,Z.jsx)(`b`,{children:e}),(0,Z.jsx)(`span`,{children:t})]},t))}),(0,Z.jsx)(Ox,{children:`Design values, not measured flight performance.`})]}),hx=({items:e})=>(0,Z.jsxs)(kx,{"aria-labelledby":`cs-evidence`,children:[(0,Z.jsx)(lx,{children:(0,Z.jsx)(ux,{id:`cs-evidence`,index:`05`,tone:`night`,children:`Technical evidence`})}),(0,Z.jsx)(Ax,{children:e.map((e,t)=>(0,Z.jsx)(lx,{delay:t%2*.1,children:(0,Z.jsx)(ax,{...e,figure:t+1,tone:`night`,width:1400,height:950})},e.caption))})]}),gx=({items:e})=>e.length>0&&(0,Z.jsxs)(bx,{"aria-labelledby":`cs-photos`,$wide:!0,children:[(0,Z.jsx)(lx,{children:(0,Z.jsx)(ux,{id:`cs-photos`,index:`06`,children:`In the field`})}),(0,Z.jsx)(jx,{children:e.map((e,t)=>(0,Z.jsx)(lx,{delay:t%2*.08,children:(0,Z.jsx)(ax,{...e})},e.caption))})]}),_x=({text:e})=>(0,Z.jsx)(bx,{"aria-labelledby":`cs-status`,children:(0,Z.jsx)(lx,{children:(0,Z.jsxs)(Mx,{children:[(0,Z.jsx)(ux,{id:`cs-status`,index:`Note`,children:`Design status`}),(0,Z.jsx)(wx,{children:e})]})})}),vx=({study:e})=>(0,Z.jsxs)(Nx,{href:`/work/${e.slug}`,"aria-label":`Next project: ${e.name}`,children:[(0,Z.jsx)(`span`,{className:`label`,children:`Next project`}),(0,Z.jsxs)(`span`,{className:`name`,children:[e.name,` `,(0,Z.jsx)(`span`,{"aria-hidden":`true`,children:`→`})]}),(0,Z.jsx)(`span`,{className:`shot`,"aria-hidden":`true`,children:(0,Z.jsx)(`img`,{src:e.hero.main.src,alt:``,width:1600,height:1e3,loading:`lazy`})})]}),yx=`46rem`,bx=N.section`
  max-width: ${({$wide:e})=>e?`var(--content-max)`:yx};
  margin: 0 auto;
  padding: clamp(3rem, 2rem + 4vw, 6rem) var(--space-gutter) 0;
  box-sizing: content-box;
`,xx=N.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.4rem;
`,Sx=N.span`
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;
  color: ${({$onDark:e})=>e?`var(--color-amber)`:`var(--color-amber-ink)`};
`,Cx=N.h2`
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 1.3rem + 1.4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${({$onDark:e})=>e?`var(--color-night-ink)`:`var(--color-ink)`};
`,wx=N.p`
  font-size: var(--text-lead);
  line-height: 1.55;
  color: var(--color-ink-soft);
  max-width: 62ch;
`,Tx=N.ol`
  list-style: none;
  display: grid;
  gap: 1.75rem;
  counter-reset: built;

  li {
    position: relative;
    padding-left: 3rem;
    counter-increment: built;
  }

  li::before {
    content: counter(built, decimal-leading-zero);
    position: absolute;
    left: 0;
    top: 0.15rem;
    width: 2rem;
    height: 1.6rem;
    display: grid;
    place-items: center;
    background: var(--color-amber);
    color: #111111;
    font-size: 0.75rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  p {
    margin-top: 0.35rem;
    color: var(--color-ink-soft);
    line-height: 1.6;
  }
`,Ex=N.ol`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding: 1.25rem;
    border-radius: var(--radius-card);
    background: #f6f6f6;
    border: 1px solid var(--color-line);
  }

  /* connector arrows between steps */
  li:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -11px;
    top: 50%;
    width: 8px;
    height: 8px;
    border-top: 2px solid var(--color-ink);
    border-right: 2px solid var(--color-ink);
    transform: translateY(-50%) rotate(45deg);
    z-index: 1;
  }

  .step {
    font-size: var(--text-label);
    font-weight: 700;
    color: var(--color-amber-ink);
    font-variant-numeric: tabular-nums;
  }

  strong {
    font-size: 1.1rem;
    letter-spacing: -0.01em;
  }

  .detail {
    font-size: var(--text-sm);
    color: var(--color-ink-soft);
  }

  @media (max-width: 899px) {
    grid-template-columns: minmax(0, 1fr);

    li:not(:last-child)::after {
      right: auto;
      left: 50%;
      top: auto;
      bottom: -11px;
      transform: translateX(-50%) rotate(135deg);
    }
  }
`,Dx=N.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  border-top: 1px solid var(--color-line);

  li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.75rem 1.5rem 1.75rem 0;
    border-bottom: 1px solid var(--color-line);
  }

  b {
    font-family: var(--font-display);
    font-size: clamp(2.25rem, 1.6rem + 2vw, 3.5rem);
    font-weight: 400;
    letter-spacing: -0.04em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  span {
    color: var(--color-ink-soft);
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
  }
`,Ox=N.p`
  margin-top: 1rem;
  font-size: var(--text-label);
  color: var(--color-ink-soft);
`,kx=N.section`
  margin: clamp(3rem, 2rem + 4vw, 6rem) clamp(8px, 1vw, 16px) 0;
  padding: clamp(3rem, 2rem + 4vw, 6rem) var(--space-gutter);
  border-radius: var(--radius-panel);
  background:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 100% 64px,
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 64px 100%,
    var(--color-night);

  & > * {
    max-width: var(--content-max);
    margin-left: auto;
    margin-right: auto;
  }
`,Ax=N.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.5rem, 1rem + 2vw, 3rem) clamp(1rem, 0.5rem + 2vw, 2.5rem);

  @media (max-width: 799px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,jx=N.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 0.5rem + 2vw, 2rem);

  & > div:first-child {
    grid-column: 1 / -1;
  }

  @media (max-width: 699px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Mx=N.div`
  padding: clamp(1.5rem, 1rem + 2vw, 2.5rem);
  border-left: 3px solid var(--color-amber);
  background: #f6f6f6;
`,Nx=N.a`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  align-items: center;
  gap: 2rem;
  max-width: var(--content-max);
  margin: clamp(4rem, 3rem + 4vw, 8rem) auto 0;
  padding: clamp(1.5rem, 1rem + 2vw, 2.5rem);
  border-radius: var(--radius-panel);
  background: var(--color-surface);
  color: var(--color-ink);
  text-decoration: none;
  overflow: hidden;

  .label {
    grid-column: 1;
    align-self: end;
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }

  .name {
    grid-column: 1;
    font-family: var(--font-display);
    font-size: clamp(2.25rem, 1.5rem + 3vw, 4.5rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .name span {
    display: inline-block;
    color: var(--color-amber-ink);
    transition: transform var(--duration-normal) var(--ease-out-expo);
  }

  .shot {
    grid-column: 2;
    grid-row: 1 / span 2;
    border-radius: var(--radius-card);
    overflow: hidden;
    box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.45);
    transition: transform 0.7s var(--ease-out-expo);
  }

  .shot img {
    display: block;
    width: 100%;
    height: auto;
  }

  &:hover .name span {
    transform: translateX(0.3em);
  }

  &:hover .shot {
    transform: translateY(-6px) scale(1.02);
  }

  &:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 4px;
  }

  @media (max-width: 899px) {
    grid-template-columns: minmax(0, 1fr);

    .shot {
      grid-column: 1;
      grid-row: auto;
    }
  }
`,Px=[{slug:`nimbus-v4`,name:`Nimbus V4`,outcome:`A profit-optimized flying-wing cargo aircraft, designed, built and flight-tested by a six-person team.`,meta:[{label:`Role`,value:`Team lead`},{label:`Team`,value:`6 engineers`},{label:`Timeline`,value:`Mar – Jun 2026`},{label:`Course`,value:`MAE 155B Aircraft Design, UC San Diego`}],links:[{label:`Code & design files`,href:`https://github.com/patelharshil2060/Nimbus-Package-Delivery-UAV`}],hero:{main:{src:`/assets/cad-3-BdPdftdc.webp`,alt:`Nimbus V4 CAD assembly seen from above`,caption:`Integrated CAD assembly`},side:[{src:`/assets/cad-2-BwWM2d_e.webp`,alt:`Nimbus V4 CAD render from below and behind`,caption:`Composite structure, rear view`},{src:`/assets/payload-bay-BLSWoyhn.webp`,alt:`Cross-section of the Nimbus cargo bay and payload door`,caption:`Payload bay cross-section`}]},problem:`Develop a cargo aircraft for a package delivery competition scored on profit. Balance payload capacity and cruise efficiency against takeoff distance, stall speed, static and dynamic stability, and structural mass.`,built:[{title:`Led the team from design to flight`,body:`Led five other engineers through design, manufacturing, integration and testing of the aircraft.`},{title:`Analysed every discipline`,body:`Contributed to the aerodynamic, propulsion, static and dynamic stability, structural and flight-performance analyses that fed the design.`},{title:`Optimized against the profit score`,body:`Worked within the team’s coupled MATLAB–AVL workflow, where a CMA-ES optimizer ran about 13,000 evaluations across 13 design variables to settle the design point.`},{title:`Turned CAD into hardware`,body:`Validated the design through CAD-driven manufacturing, propulsion bench testing, ground-roll testing and system-level integration.`}],flow:[{label:`Mission`,detail:`Competition profit function`},{label:`Optimize`,detail:`CMA-ES over 13 design variables`},{label:`Analyse`,detail:`Aero, CTOL sizing, AVL stability`},{label:`Build & fly`,detail:`Bench, ground roll, flight test`}],results:[{value:`1.57 m`,label:`Wingspan`},{value:`800 g`,label:`Design payload`},{value:`13,000+`,label:`Optimizer evaluations`},{value:`14.3`,label:`Cruise L/D`},{value:`4.9%`,label:`Static margin (AVL)`},{value:`3.89`,label:`Spar bending factor of safety`}],evidence:[{src:`/assets/plot-ctol-constraint-diagram-DkHCG00k.webp`,alt:`Constraint diagram of thrust loading against wing loading`,caption:`CTOL sizing: wing loading vs thrust loading, design point W/S = 87.4 N/m², T/W = 0.28`},{src:`/assets/plot-thrust-vs-speed-10x47-LxQSQ4Yv.webp`,alt:`Thrust against flight speed for the 10 by 4.7 propeller`,caption:`Propulsion: thrust vs airspeed, APC 10×4.7 propeller`},{src:`/assets/plot-v-n-diagram-maneuver-envelope-BpRbfg78.webp`,alt:`V-n diagram showing the maneuver envelope`,caption:`V-n diagram: maneuver envelope, +3.8 g / −1.5 g limit loads`},{src:`/assets/plot-sm-vs-battery-position-Cg_x7PSW.webp`,alt:`Static margin against battery position`,caption:`Stability: static margin vs battery position (AVL neutral point)`},{src:`/assets/plot-mission-profile-3d-CpCZFcMi.webp`,alt:`3D mission profile with takeoff, laps, payload drop and landing`,caption:`Mission profile: takeoff, laps, payload drop and landing`},{src:`/assets/plot-drag-polar-cl-vs-cd-c6IOa3Y0.webp`,alt:`Aircraft drag polar, lift coefficient against drag coefficient`,caption:`Aerodynamics: aircraft drag polar`}],photos:[{src:py,alt:`The Nimbus team behind the aircraft at the flight field`,caption:`Flight day, Mission Bay Park`},{src:`/assets/photo-launch-CC-4k6OI.webp`,alt:`A team member setting Nimbus down on the field to launch`,caption:`Launch at the flight field`},{src:`/assets/photo-prep-FG80ZepZ.webp`,alt:`The team working on the airframe at the field table`,caption:`Field integration`},{src:`/assets/photo-bench-BgIOnXn6.webp`,alt:`Team members checking the aircraft at the field table`,caption:`Pre-flight checks`}],status:`The team manufactured the aircraft and flight-tested it at Mission Bay Park, San Diego, after propulsion bench testing, ground-roll testing and system-level integration. Figures on this page are design values rather than measured flight performance, and the plots may come from different design iterations.`},{slug:`jager-qrf`,name:`Jäger-QRF`,outcome:`A hybrid VTOL firefighter that launches from the station, hovers over a fire and drops two suppression payloads within three minutes of takeoff.`,meta:[{label:`Role`,value:`Sizing, aero, propulsion & stability`},{label:`Team`,value:`6 engineers`},{label:`Timeline`,value:`Jan – Mar 2026`},{label:`Course`,value:`MAE 155A Aircraft Design, UC San Diego`}],links:[{label:`Analysis files`,href:`https://github.com/patelharshil2060/Jager-Firefighter-Drone`}],hero:{main:{src:my,alt:`Jäger-QRF render releasing two red suppression payloads`,caption:`Payload deployment concept`},side:[{src:`/assets/render-front-DVoGAcQR.webp`,alt:`Jäger-QRF front view with four rotors and a thermal camera turret`,caption:`Front view`},{src:`/assets/render-side-BJ65wBmG.webp`,alt:`Jäger-QRF side profile with fixed wing and V-tail`,caption:`Side profile`}]},problem:`Fires can escalate before ground crews arrive. Design a rapid-response UAV with vertical takeoff, precise hover and efficient fixed-wing cruise, and reconcile hover power demand with range, payload, weight and a time-critical mission.`,built:[{title:`Sized the aircraft to the mission`,body:`Built hover and forward-flight constraints into a power-loading vs wing-loading sizing diagram, landing at W/S = 396.5 N/m² and P/W = 20.7 W/N with a 2% margin.`},{title:`Modelled the aerodynamics`,body:`Analysed the NACA 4412 wing’s lift curve and the aircraft drag polar to set cruise performance.`},{title:`Designed propulsion and weight & balance`,body:`Contributed to the propulsion design and the component-level weight and balance that set the CG range with and without payload.`},{title:`Checked loads and stability`,body:`Generated the V-n envelope and ran static and dynamic stability evaluations with MATLAB and AVL.`}],flow:[{label:`Mission`,detail:`Climb, cruise, hover, drop, return`},{label:`Size`,detail:`Hover and cruise constraints`},{label:`Aero & propulsion`,detail:`NACA 4412, rotor and wing power`},{label:`Loads & stability`,detail:`V-n envelope, AVL`}],results:[{value:`~51 mph`,label:`Target cruise speed`},{value:`1.5 mi`,label:`Design one-way range`},{value:`2`,label:`Suppression payloads`},{value:`< 3 min`,label:`Takeoff to first drop`},{value:`55 lb`,label:`Gross weight`},{value:`6.31 ft`,label:`Wingspan`}],evidence:[{src:`/assets/plot-missionprofiles-D48q3ECX.webp`,alt:`Altitude against time for the delivery and recon mission profiles`,caption:`Mission profiles: air delivery and recon`},{src:`/assets/plot-sizing-constraint-C4LlTlFV.webp`,alt:`Power loading against wing loading with cruise, maneuver, hover and climb constraints`,caption:`Sizing: hover and forward-flight constraints`},{src:`/assets/plot-vndiagram-final-D_ykVhSS.webp`,alt:`V-n diagram with maneuver and gust envelopes`,caption:`V-n envelope: maneuver and gust loads`},{src:`/assets/plot-staticmargin-ME_anj5F.webp`,alt:`Static margin against CG location with and without payload`,caption:`Weight & balance: static margin with and without payload`},{src:`/assets/plot-cl-vs-cd-polar-D5CktIqO.webp`,alt:`Lift coefficient against drag coefficient for the aircraft`,caption:`Aerodynamics: drag polar and best L/D`}],photos:[],status:`A conceptual design supported by sizing, aerodynamic, propulsion and stability analyses. Mission parameters are targets: flight and fire-suppression performance were not demonstrated in this study.`}],Fx=e=>Px.find(t=>t.slug===e)??null,Ix=e=>Px[(Px.findIndex(t=>t.slug===e)+1)%Px.length],Lx=[.16,1,.3,1],Rx=(e,t)=>({initial:!t&&{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:1,ease:Lx,delay:e}}),zx=({slug:e})=>{let t=Fx(e),n=!!Nh();if((0,A.useEffect)(()=>(document.title=t?`${t.name} · ${jg}`:jg,()=>{document.title=jg}),[t]),!t)return(0,Z.jsx)(Bx,{children:(0,Z.jsxs)(Vx,{children:[(0,Z.jsxs)(Hx,{href:`/#projects`,children:[(0,Z.jsx)(Eg,{"aria-hidden":`true`}),` All projects`]}),(0,Z.jsx)(Wx,{children:`Project not found`}),(0,Z.jsx)(Gx,{children:`That page doesn’t exist. Pick a project from the files instead.`})]})});let{name:r,outcome:i,meta:a,links:o,hero:s}=t;return(0,Z.jsxs)(Bx,{children:[(0,Z.jsxs)(Vx,{children:[(0,Z.jsxs)(Hx,{href:`/#projects`,children:[(0,Z.jsx)(Eg,{"aria-hidden":`true`}),` All projects`]}),(0,Z.jsxs)(Ux,{children:[(0,Z.jsx)($.div,{...Rx(0,n),children:(0,Z.jsx)(Wx,{children:r})}),(0,Z.jsxs)($.div,{...Rx(.08,n),children:[(0,Z.jsx)(Gx,{children:i}),(0,Z.jsx)(Kx,{children:a.map(({label:e,value:t})=>(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`dt`,{children:e}),(0,Z.jsx)(`dd`,{children:t})]},e))}),(0,Z.jsx)(qx,{children:o.map(({label:e,href:t})=>(0,Z.jsxs)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,children:[e,` `,(0,Z.jsx)(wg,{"aria-hidden":`true`})]},t))})]})]})]}),(0,Z.jsxs)(Jx,{"aria-label":`${r} renders`,children:[(0,Z.jsx)($.div,{className:`main`,...Rx(.15,n),children:(0,Z.jsx)(ax,{...s.main,tone:`night`,eager:!0})}),s.side.map((e,t)=>(0,Z.jsx)($.div,{className:`side`,...Rx(.28+t*.12,n),children:(0,Z.jsx)(ax,{...e,tone:`night`})},e.caption))]}),(0,Z.jsx)(dx,{text:t.problem}),(0,Z.jsx)(fx,{items:t.built}),(0,Z.jsx)(px,{steps:t.flow}),(0,Z.jsx)(mx,{items:t.results}),(0,Z.jsx)(hx,{items:t.evidence}),(0,Z.jsx)(gx,{items:t.photos}),(0,Z.jsx)(_x,{text:t.status}),(0,Z.jsx)(vx,{study:Ix(e)}),(0,Z.jsx)(Yx,{})]})},Bx=N.main`
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-body);
`,Vx=N.header`
  max-width: var(--content-max);
  margin: 0 auto;
  padding: calc(var(--nav-offset) + var(--nav-height) + clamp(1.5rem, 1rem + 2vw, 3rem)) var(--space-gutter) 0;
  box-sizing: content-box;
`,Hx=N.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-ink-soft);
  font-size: var(--text-label);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  text-decoration: none;
  transition: color var(--duration-fast) ease;

  &:hover {
    color: var(--color-ink);
  }

  &:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
    border-radius: 2px;
  }
`,Ux=N.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  gap: clamp(1.5rem, 1rem + 3vw, 4rem);
  margin-top: clamp(1.5rem, 1rem + 2vw, 3rem);

  @media (max-width: 899px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Wx=N.h1`
  font-family: var(--font-display);
  font-size: clamp(3rem, 1.5rem + 5vw, 6.5rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.045em;
`,Gx=N.p`
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 1.05rem + 1vw, 1.85rem);
  line-height: 1.25;
  letter-spacing: -0.02em;
  max-width: 30ch;
`,Kx=N.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem 2rem;
  margin-top: clamp(1.5rem, 1rem + 1.5vw, 2.25rem);
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-line);

  dt {
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    color: var(--color-ink-soft);
  }

  dd {
    margin-top: 0.3rem;
    line-height: 1.4;
  }

  @media (max-width: 479px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,qx=N.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.75rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.8rem 1.1rem;
    border-radius: var(--radius-control);
    background: var(--color-ink);
    color: var(--color-paper);
    font-size: var(--text-label);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
    text-decoration: none;
    transition: background-color var(--duration-fast) ease, transform var(--duration-fast) var(--ease-out-expo);
  }

  a:hover {
    background: #2b2b2b;
  }

  a:active {
    transform: scale(0.97);
  }

  a:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 3px;
  }
`,Jx=N.section`
  margin: clamp(2.5rem, 2rem + 3vw, 4.5rem) clamp(8px, 1vw, 16px) 0;
  padding: clamp(2rem, 1.5rem + 3vw, 4.5rem) var(--space-gutter);
  border-radius: var(--radius-panel);
  background:
    radial-gradient(ellipse 55% 60% at 35% 40%, rgba(242, 165, 0, 0.08), transparent 70%),
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 100% 64px,
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 64px 100%,
    var(--color-night);
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  grid-template-rows: auto auto;
  gap: clamp(1rem, 0.5rem + 2vw, 2rem);
  align-content: start;

  .main {
    grid-row: 1 / span 2;
  }

  @media (max-width: 899px) {
    grid-template-columns: minmax(0, 1fr);

    .main {
      grid-row: auto;
    }
  }
`,Yx=N.div`
  height: clamp(3rem, 2rem + 4vw, 6rem);
`,Xx=`app:navigate`,Zx=/^\/work\/([a-z0-9-]+)\/?$/,Qx=30,$x=e=>e.match(Zx)?.[1]??null,eS=e=>{if(!e)return!1;let t=document.getElementById(e.slice(1));if(!t)return!1;if(t.dataset.scrollTo===`end`){let e=t.getBoundingClientRect().top+window.scrollY;return window.scrollTo({top:e+t.offsetHeight-window.innerHeight*1.05,behavior:`instant`}),!0}return t.scrollIntoView({behavior:`smooth`,block:`start`}),!0},tS=e=>{let t=new URL(e,window.location.href),n=t.pathname===window.location.pathname;if(n&&t.hash&&eS(t.hash)){window.history.replaceState(null,``,t.pathname+t.hash);return}if(n||(window.history.pushState(null,``,t.pathname+t.hash),window.dispatchEvent(new Event(Xx))),!t.hash){requestAnimationFrame(()=>window.scrollTo({top:0,behavior:`instant`}));return}let r=Qx,i=()=>{eS(t.hash)||--r>0&&requestAnimationFrame(i)};window.scrollTo({top:0,behavior:`instant`}),requestAnimationFrame(i)},nS=()=>{let[e,t]=(0,A.useState)(()=>window.location.pathname);return(0,A.useEffect)(()=>{let e=()=>t(window.location.pathname);return window.addEventListener(`popstate`,e),window.addEventListener(Xx,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(Xx,e)}},[]),{pathname:e}},rS=()=>{(0,A.useEffect)(()=>{let e=e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target instanceof Element?e.target.closest(`a[href]`):null;if(!t||t.target===`_blank`||t.hasAttribute(`download`))return;let n=t.getAttribute(`href`);n.startsWith(`/`)&&!n.startsWith(`//`)&&(e.preventDefault(),tS(n))};return document.addEventListener(`click`,e),()=>document.removeEventListener(`click`,e)},[])},iS=`/assets/harshil-portrait-C6FbgUnQ.webp`,aS=Wn`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Keep anchored sections clear of the fixed navbar */
  section[id] {
    scroll-margin-top: calc(var(--nav-offset) + var(--nav-height) + 16px);
  }

  body {
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background: var(--color-paper);
    color: var(--color-ink);
  }

  ::selection {
    background: var(--color-amber);
    color: #111111;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb {
    background: rgba(17, 17, 17, 0.25);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover { background: var(--color-amber); }
`,oS=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(O_,{portraitSrc:iS,portraitAlt:Ug.alt}),(0,Z.jsx)(Qv,{}),(0,Z.jsx)(yy,{}),(0,Z.jsx)(fb,{}),(0,Z.jsx)(Yb,{})]});(0,Ke.createRoot)(document.getElementById(`root`)).render((0,Z.jsx)(A.StrictMode,{children:(0,Z.jsx)(()=>{let{pathname:e}=nS(),t=$x(e);return rS(),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(aS,{}),(0,Z.jsx)(Gh,{}),t?(0,Z.jsx)(zx,{slug:t},t):(0,Z.jsx)(oS,{})]})},{})}));