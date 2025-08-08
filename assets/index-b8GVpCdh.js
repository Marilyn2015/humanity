(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function mw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var yf={exports:{}},ml={},Sf={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function gw(){if(oy)return mt;oy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,M={};function S(L,ne,Oe){this.props=L,this.context=ne,this.refs=M,this.updater=Oe||E}S.prototype.isReactComponent={},S.prototype.setState=function(L,ne){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ne,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function y(){}y.prototype=S.prototype;function P(L,ne,Oe){this.props=L,this.context=ne,this.refs=M,this.updater=Oe||E}var I=P.prototype=new y;I.constructor=P,x(I,S.prototype),I.isPureReactComponent=!0;var A=Array.isArray,G=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function W(L,ne,Oe){var J,de={},we=null,Se=null;if(ne!=null)for(J in ne.ref!==void 0&&(Se=ne.ref),ne.key!==void 0&&(we=""+ne.key),ne)G.call(ne,J)&&!U.hasOwnProperty(J)&&(de[J]=ne[J]);var Ce=arguments.length-2;if(Ce===1)de.children=Oe;else if(1<Ce){for(var Je=Array(Ce),Xe=0;Xe<Ce;Xe++)Je[Xe]=arguments[Xe+2];de.children=Je}if(L&&L.defaultProps)for(J in Ce=L.defaultProps,Ce)de[J]===void 0&&(de[J]=Ce[J]);return{$$typeof:n,type:L,key:we,ref:Se,props:de,_owner:F.current}}function b(L,ne){return{$$typeof:n,type:L.type,key:ne,ref:L.ref,props:L.props,_owner:L._owner}}function R(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function B(L){var ne={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Oe){return ne[Oe]})}var ae=/\/+/g;function ee(L,ne){return typeof L=="object"&&L!==null&&L.key!=null?B(""+L.key):ne.toString(36)}function he(L,ne,Oe,J,de){var we=typeof L;(we==="undefined"||we==="boolean")&&(L=null);var Se=!1;if(L===null)Se=!0;else switch(we){case"string":case"number":Se=!0;break;case"object":switch(L.$$typeof){case n:case e:Se=!0}}if(Se)return Se=L,de=de(Se),L=J===""?"."+ee(Se,0):J,A(de)?(Oe="",L!=null&&(Oe=L.replace(ae,"$&/")+"/"),he(de,ne,Oe,"",function(Xe){return Xe})):de!=null&&(R(de)&&(de=b(de,Oe+(!de.key||Se&&Se.key===de.key?"":(""+de.key).replace(ae,"$&/")+"/")+L)),ne.push(de)),1;if(Se=0,J=J===""?".":J+":",A(L))for(var Ce=0;Ce<L.length;Ce++){we=L[Ce];var Je=J+ee(we,Ce);Se+=he(we,ne,Oe,Je,de)}else if(Je=_(L),typeof Je=="function")for(L=Je.call(L),Ce=0;!(we=L.next()).done;)we=we.value,Je=J+ee(we,Ce++),Se+=he(we,ne,Oe,Je,de);else if(we==="object")throw ne=String(L),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Se}function pe(L,ne,Oe){if(L==null)return L;var J=[],de=0;return he(L,J,"","",function(we){return ne.call(Oe,we,de++)}),J}function se(L){if(L._status===-1){var ne=L._result;ne=ne(),ne.then(function(Oe){(L._status===0||L._status===-1)&&(L._status=1,L._result=Oe)},function(Oe){(L._status===0||L._status===-1)&&(L._status=2,L._result=Oe)}),L._status===-1&&(L._status=0,L._result=ne)}if(L._status===1)return L._result.default;throw L._result}var ce={current:null},z={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:F};function ie(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:pe,forEach:function(L,ne,Oe){pe(L,function(){ne.apply(this,arguments)},Oe)},count:function(L){var ne=0;return pe(L,function(){ne++}),ne},toArray:function(L){return pe(L,function(ne){return ne})||[]},only:function(L){if(!R(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},mt.Component=S,mt.Fragment=t,mt.Profiler=s,mt.PureComponent=P,mt.StrictMode=i,mt.Suspense=d,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,mt.act=ie,mt.cloneElement=function(L,ne,Oe){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var J=x({},L.props),de=L.key,we=L.ref,Se=L._owner;if(ne!=null){if(ne.ref!==void 0&&(we=ne.ref,Se=F.current),ne.key!==void 0&&(de=""+ne.key),L.type&&L.type.defaultProps)var Ce=L.type.defaultProps;for(Je in ne)G.call(ne,Je)&&!U.hasOwnProperty(Je)&&(J[Je]=ne[Je]===void 0&&Ce!==void 0?Ce[Je]:ne[Je])}var Je=arguments.length-2;if(Je===1)J.children=Oe;else if(1<Je){Ce=Array(Je);for(var Xe=0;Xe<Je;Xe++)Ce[Xe]=arguments[Xe+2];J.children=Ce}return{$$typeof:n,type:L.type,key:de,ref:we,props:J,_owner:Se}},mt.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:a,_context:L},L.Consumer=L},mt.createElement=W,mt.createFactory=function(L){var ne=W.bind(null,L);return ne.type=L,ne},mt.createRef=function(){return{current:null}},mt.forwardRef=function(L){return{$$typeof:u,render:L}},mt.isValidElement=R,mt.lazy=function(L){return{$$typeof:m,_payload:{_status:-1,_result:L},_init:se}},mt.memo=function(L,ne){return{$$typeof:f,type:L,compare:ne===void 0?null:ne}},mt.startTransition=function(L){var ne=z.transition;z.transition={};try{L()}finally{z.transition=ne}},mt.unstable_act=ie,mt.useCallback=function(L,ne){return ce.current.useCallback(L,ne)},mt.useContext=function(L){return ce.current.useContext(L)},mt.useDebugValue=function(){},mt.useDeferredValue=function(L){return ce.current.useDeferredValue(L)},mt.useEffect=function(L,ne){return ce.current.useEffect(L,ne)},mt.useId=function(){return ce.current.useId()},mt.useImperativeHandle=function(L,ne,Oe){return ce.current.useImperativeHandle(L,ne,Oe)},mt.useInsertionEffect=function(L,ne){return ce.current.useInsertionEffect(L,ne)},mt.useLayoutEffect=function(L,ne){return ce.current.useLayoutEffect(L,ne)},mt.useMemo=function(L,ne){return ce.current.useMemo(L,ne)},mt.useReducer=function(L,ne,Oe){return ce.current.useReducer(L,ne,Oe)},mt.useRef=function(L){return ce.current.useRef(L)},mt.useState=function(L){return ce.current.useState(L)},mt.useSyncExternalStore=function(L,ne,Oe){return ce.current.useSyncExternalStore(L,ne,Oe)},mt.useTransition=function(){return ce.current.useTransition()},mt.version="18.3.1",mt}var ay;function Im(){return ay||(ay=1,Sf.exports=gw()),Sf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function _w(){if(ly)return ml;ly=1;var n=Im(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,f){var m,g={},_=null,E=null;f!==void 0&&(_=""+f),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(E=d.ref);for(m in d)i.call(d,m)&&!a.hasOwnProperty(m)&&(g[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:u,key:_,ref:E,props:g,_owner:s.current}}return ml.Fragment=t,ml.jsx=c,ml.jsxs=c,ml}var cy;function vw(){return cy||(cy=1,yf.exports=_w()),yf.exports}var Rt=vw(),oe=Im();const yw=mw(oe);var mu={},Ef={exports:{}},Jn={},xf={exports:{}},Tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function Sw(){return uy||(uy=1,function(n){function e(z,le){var ie=z.length;z.push(le);e:for(;0<ie;){var L=ie-1>>>1,ne=z[L];if(0<s(ne,le))z[L]=le,z[ie]=ne,ie=L;else break e}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var le=z[0],ie=z.pop();if(ie!==le){z[0]=ie;e:for(var L=0,ne=z.length,Oe=ne>>>1;L<Oe;){var J=2*(L+1)-1,de=z[J],we=J+1,Se=z[we];if(0>s(de,ie))we<ne&&0>s(Se,de)?(z[L]=Se,z[we]=ie,L=we):(z[L]=de,z[J]=ie,L=J);else if(we<ne&&0>s(Se,ie))z[L]=Se,z[we]=ie,L=we;else break e}}return le}function s(z,le){var ie=z.sortIndex-le.sortIndex;return ie!==0?ie:z.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],f=[],m=1,g=null,_=3,E=!1,x=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var le=t(f);le!==null;){if(le.callback===null)i(f);else if(le.startTime<=z)i(f),le.sortIndex=le.expirationTime,e(d,le);else break;le=t(f)}}function A(z){if(M=!1,I(z),!x)if(t(d)!==null)x=!0,se(G);else{var le=t(f);le!==null&&ce(A,le.startTime-z)}}function G(z,le){x=!1,M&&(M=!1,y(W),W=-1),E=!0;var ie=_;try{for(I(le),g=t(d);g!==null&&(!(g.expirationTime>le)||z&&!B());){var L=g.callback;if(typeof L=="function"){g.callback=null,_=g.priorityLevel;var ne=L(g.expirationTime<=le);le=n.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(d)&&i(d),I(le)}else i(d);g=t(d)}if(g!==null)var Oe=!0;else{var J=t(f);J!==null&&ce(A,J.startTime-le),Oe=!1}return Oe}finally{g=null,_=ie,E=!1}}var F=!1,U=null,W=-1,b=5,R=-1;function B(){return!(n.unstable_now()-R<b)}function ae(){if(U!==null){var z=n.unstable_now();R=z;var le=!0;try{le=U(!0,z)}finally{le?ee():(F=!1,U=null)}}else F=!1}var ee;if(typeof P=="function")ee=function(){P(ae)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,pe=he.port2;he.port1.onmessage=ae,ee=function(){pe.postMessage(null)}}else ee=function(){S(ae,0)};function se(z){U=z,F||(F=!0,ee())}function ce(z,le){W=S(function(){z(n.unstable_now())},le)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){x||E||(x=!0,se(G))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return _},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(z){switch(_){case 1:case 2:case 3:var le=3;break;default:le=_}var ie=_;_=le;try{return z()}finally{_=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,le){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ie=_;_=z;try{return le()}finally{_=ie}},n.unstable_scheduleCallback=function(z,le,ie){var L=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?L+ie:L):ie=L,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=ie+ne,z={id:m++,callback:le,priorityLevel:z,startTime:ie,expirationTime:ne,sortIndex:-1},ie>L?(z.sortIndex=ie,e(f,z),t(d)===null&&z===t(f)&&(M?(y(W),W=-1):M=!0,ce(A,ie-L))):(z.sortIndex=ne,e(d,z),x||E||(x=!0,se(G))),z},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(z){var le=_;return function(){var ie=_;_=le;try{return z.apply(this,arguments)}finally{_=ie}}}}(Tf)),Tf}var hy;function Ew(){return hy||(hy=1,xf.exports=Sw()),xf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function xw(){if(dy)return Jn;dy=1;var n=Im(),e=Ew();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(r,o){c(r,o),c(r+"Capture",o)}function c(r,o){for(s[r]=o,r=0;r<o.length;r++)i.add(o[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(r){return d.call(g,r)?!0:d.call(m,r)?!1:f.test(r)?g[r]=!0:(m[r]=!0,!1)}function E(r,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function x(r,o,l,h){if(o===null||typeof o>"u"||E(r,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function M(r,o,l,h,p,v,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=r,this.type=o,this.sanitizeURL=v,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){S[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];S[o]=new M(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){S[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){S[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){S[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){S[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){S[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){S[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){S[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(y,P);S[o]=new M(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(y,P);S[o]=new M(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(y,P);S[o]=new M(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){S[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){S[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function I(r,o,l,h){var p=S.hasOwnProperty(o)?S[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(x(o,l,p,h)&&(l=null),h||p===null?_(o)&&(l===null?r.removeAttribute(o):r.setAttribute(o,""+l)):p.mustUseProperty?r[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?r.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?r.setAttributeNS(h,o,l):r.setAttribute(o,l))))}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function le(r){return r===null||typeof r!="object"?null:(r=z&&r[z]||r["@@iterator"],typeof r=="function"?r:null)}var ie=Object.assign,L;function ne(r){if(L===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);L=o&&o[1]||""}return`
`+L+r}var Oe=!1;function J(r,o){if(!r||Oe)return"";Oe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(Q){var h=Q}Reflect.construct(r,[],o)}else{try{o.call()}catch(Q){h=Q}r.call(o.prototype)}else{try{throw Error()}catch(Q){h=Q}r()}}catch(Q){if(Q&&h&&typeof Q.stack=="string"){for(var p=Q.stack.split(`
`),v=h.stack.split(`
`),T=p.length-1,D=v.length-1;1<=T&&0<=D&&p[T]!==v[D];)D--;for(;1<=T&&0<=D;T--,D--)if(p[T]!==v[D]){if(T!==1||D!==1)do if(T--,D--,0>D||p[T]!==v[D]){var k=`
`+p[T].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=T&&0<=D);break}}}finally{Oe=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?ne(r):""}function de(r){switch(r.tag){case 5:return ne(r.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return r=J(r.type,!1),r;case 11:return r=J(r.type.render,!1),r;case 1:return r=J(r.type,!0),r;default:return""}}function we(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case U:return"Fragment";case F:return"Portal";case b:return"Profiler";case W:return"StrictMode";case ee:return"Suspense";case he:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case B:return(r.displayName||"Context")+".Consumer";case R:return(r._context.displayName||"Context")+".Provider";case ae:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case pe:return o=r.displayName||null,o!==null?o:we(r.type)||"Memo";case se:o=r._payload,r=r._init;try{return we(r(o))}catch{}}return null}function Se(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(o);case 8:return o===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ce(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Je(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Xe(r){var o=Je(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),h=""+r[o];if(!r.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return p.call(this)},set:function(T){h=""+T,v.call(this,T)}}),Object.defineProperty(r,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function Lt(r){r._valueTracker||(r._valueTracker=Xe(r))}function Vt(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return r&&(h=Je(r)?r.checked?"true":"false":r.value),r=h,r!==l?(o.setValue(r),!0):!1}function gt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function O(r,o){var l=o.checked;return ie({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function fn(r,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=Ce(o.value!=null?o.value:l),r._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Et(r,o){o=o.checked,o!=null&&I(r,"checked",o,!1)}function Pt(r,o){Et(r,o);var l=Ce(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?_t(r,o.type,l):o.hasOwnProperty("defaultValue")&&_t(r,o.type,Ce(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function $e(r,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,l||o===r.value||(r.value=o),r.defaultValue=o}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function _t(r,o,l){(o!=="number"||gt(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var Ke=Array.isArray;function ot(r,o,l,h){if(r=r.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<r.length;l++)p=o.hasOwnProperty("$"+r[l].value),r[l].selected!==p&&(r[l].selected=p),p&&h&&(r[l].defaultSelected=!0)}else{for(l=""+Ce(l),o=null,p=0;p<r.length;p++){if(r[p].value===l){r[p].selected=!0,h&&(r[p].defaultSelected=!0);return}o!==null||r[p].disabled||(o=r[p])}o!==null&&(o.selected=!0)}}function Qt(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function N(r,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Ke(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}r._wrapperState={initialValue:Ce(l)}}function w(r,o){var l=Ce(o.value),h=Ce(o.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),o.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),h!=null&&(r.defaultValue=""+h)}function K(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function ue(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?ue(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var re,qe=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return r(o,l,h,p)})}:r}(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=re.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function Re(r,o){if(o){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=o;return}}r.textContent=o}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(r){Ye.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),ze[o]=ze[r]})});function ve(r,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ze.hasOwnProperty(r)&&ze[r]?(""+o).trim():o+"px"}function Ue(r,o){r=r.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=ve(l,o[l],h);l==="float"&&(l="cssFloat"),h?r.setProperty(l,p):r[l]=p}}var nt=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(r,o){if(o){if(nt[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Ae(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function H(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var be=null,_e=null,De=null;function xe(r){if(r=el(r)){if(typeof be!="function")throw Error(t(280));var o=r.stateNode;o&&(o=Ic(o),be(r.stateNode,r.type,o))}}function fe(r){_e?De?De.push(r):De=[r]:_e=r}function He(){if(_e){var r=_e,o=De;if(De=_e=null,xe(r),o)for(r=0;r<o.length;r++)xe(o[r])}}function ct(r,o){return r(o)}function Ut(){}var Tt=!1;function Xn(r,o,l){if(Tt)return r(o,l);Tt=!0;try{return ct(r,o,l)}finally{Tt=!1,(_e!==null||De!==null)&&(Ut(),He())}}function Fn(r,o){var l=r.stateNode;if(l===null)return null;var h=Ic(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var xo=!1;if(u)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){xo=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{xo=!1}function or(r,o,l,h,p,v,T,D,k){var Q=Array.prototype.slice.call(arguments,3);try{o.apply(l,Q)}catch(ye){this.onError(ye)}}var ar=!1,Ps=null,Ns=!1,Hr=null,lc={onError:function(r){ar=!0,Ps=r}};function To(r,o,l,h,p,v,T,D,k){ar=!1,Ps=null,or.apply(lc,arguments)}function cc(r,o,l,h,p,v,T,D,k){if(To.apply(this,arguments),ar){if(ar){var Q=Ps;ar=!1,Ps=null}else throw Error(t(198));Ns||(Ns=!0,Hr=Q)}}function zi(r){var o=r,l=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(l=o.return),r=o.return;while(r)}return o.tag===3?l:null}function uc(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function hc(r){if(zi(r)!==r)throw Error(t(188))}function Hh(r){var o=r.alternate;if(!o){if(o=zi(r),o===null)throw Error(t(188));return o!==r?null:r}for(var l=r,h=o;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return hc(p),r;if(v===h)return hc(p),o;v=v.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=v;else{for(var T=!1,D=p.child;D;){if(D===l){T=!0,l=p,h=v;break}if(D===h){T=!0,h=p,l=v;break}D=D.sibling}if(!T){for(D=v.child;D;){if(D===l){T=!0,l=v,h=p;break}if(D===h){T=!0,h=v,l=p;break}D=D.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:o}function dc(r){return r=Hh(r),r!==null?fc(r):null}function fc(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=fc(r);if(o!==null)return o;r=r.sibling}return null}var pc=e.unstable_scheduleCallback,C=e.unstable_cancelCallback,X=e.unstable_shouldYield,Z=e.unstable_requestPaint,q=e.unstable_now,$=e.unstable_getCurrentPriorityLevel,Te=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,ke=e.unstable_LowPriority,rt=e.unstable_IdlePriority,it=null,Ve=null;function ft(r){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(it,r,void 0,(r.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Dt,Yt=Math.log,zt=Math.LN2;function Dt(r){return r>>>=0,r===0?32:31-(Yt(r)/zt|0)|0}var Qe=64,Ot=4194304;function pt(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function pn(r,o){var l=r.pendingLanes;if(l===0)return 0;var h=0,p=r.suspendedLanes,v=r.pingedLanes,T=l&268435455;if(T!==0){var D=T&~p;D!==0?h=pt(D):(v&=T,v!==0&&(h=pt(v)))}else T=l&~p,T!==0?h=pt(T):v!==0&&(h=pt(v));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,v=o&-o,p>=v||p===16&&(v&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=h;0<o;)l=31-ht(o),p=1<<l,h|=r[l],o&=~p;return h}function Vr(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bn(r,o){for(var l=r.suspendedLanes,h=r.pingedLanes,p=r.expirationTimes,v=r.pendingLanes;0<v;){var T=31-ht(v),D=1<<T,k=p[T];k===-1?((D&l)===0||(D&h)!==0)&&(p[T]=Vr(D,o)):k<=o&&(r.expiredLanes|=D),v&=~D}}function lr(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ht(){var r=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),r}function An(r){for(var o=[],l=0;31>l;l++)o.push(r);return o}function mn(r,o,l){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-ht(o),r[o]=l}function Tn(r,o){var l=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<l;){var p=31-ht(l),v=1<<p;o[p]=0,h[p]=-1,r[p]=-1,l&=~v}}function gn(r,o){var l=r.entangledLanes|=o;for(r=r.entanglements;l;){var h=31-ht(l),p=1<<h;p&o|r[h]&o&&(r[h]|=o),l&=~p}}var Mt=0;function Hi(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Bg,Vh,zg,Hg,Vg,Gh=!1,mc=[],Gr=null,Wr=null,Xr=null,Fa=new Map,Ba=new Map,$r=[],kT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gg(r,o){switch(r){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Wr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":Fa.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(o.pointerId)}}function za(r,o,l,h,p,v){return r===null||r.nativeEvent!==v?(r={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[p]},o!==null&&(o=el(o),o!==null&&Vh(o)),r):(r.eventSystemFlags|=h,o=r.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),r)}function FT(r,o,l,h,p){switch(o){case"focusin":return Gr=za(Gr,r,o,l,h,p),!0;case"dragenter":return Wr=za(Wr,r,o,l,h,p),!0;case"mouseover":return Xr=za(Xr,r,o,l,h,p),!0;case"pointerover":var v=p.pointerId;return Fa.set(v,za(Fa.get(v)||null,r,o,l,h,p)),!0;case"gotpointercapture":return v=p.pointerId,Ba.set(v,za(Ba.get(v)||null,r,o,l,h,p)),!0}return!1}function Wg(r){var o=Ds(r.target);if(o!==null){var l=zi(o);if(l!==null){if(o=l.tag,o===13){if(o=uc(l),o!==null){r.blockedOn=o,Vg(r.priority,function(){zg(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function gc(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var l=Xh(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var h=new l.constructor(l.type,l);st=h,l.target.dispatchEvent(h),st=null}else return o=el(l),o!==null&&Vh(o),r.blockedOn=l,!1;o.shift()}return!0}function Xg(r,o,l){gc(r)&&l.delete(o)}function BT(){Gh=!1,Gr!==null&&gc(Gr)&&(Gr=null),Wr!==null&&gc(Wr)&&(Wr=null),Xr!==null&&gc(Xr)&&(Xr=null),Fa.forEach(Xg),Ba.forEach(Xg)}function Ha(r,o){r.blockedOn===o&&(r.blockedOn=null,Gh||(Gh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,BT)))}function Va(r){function o(p){return Ha(p,r)}if(0<mc.length){Ha(mc[0],r);for(var l=1;l<mc.length;l++){var h=mc[l];h.blockedOn===r&&(h.blockedOn=null)}}for(Gr!==null&&Ha(Gr,r),Wr!==null&&Ha(Wr,r),Xr!==null&&Ha(Xr,r),Fa.forEach(o),Ba.forEach(o),l=0;l<$r.length;l++)h=$r[l],h.blockedOn===r&&(h.blockedOn=null);for(;0<$r.length&&(l=$r[0],l.blockedOn===null);)Wg(l),l.blockedOn===null&&$r.shift()}var Mo=A.ReactCurrentBatchConfig,_c=!0;function zT(r,o,l,h){var p=Mt,v=Mo.transition;Mo.transition=null;try{Mt=1,Wh(r,o,l,h)}finally{Mt=p,Mo.transition=v}}function HT(r,o,l,h){var p=Mt,v=Mo.transition;Mo.transition=null;try{Mt=4,Wh(r,o,l,h)}finally{Mt=p,Mo.transition=v}}function Wh(r,o,l,h){if(_c){var p=Xh(r,o,l,h);if(p===null)ld(r,o,h,vc,l),Gg(r,h);else if(FT(p,r,o,l,h))h.stopPropagation();else if(Gg(r,h),o&4&&-1<kT.indexOf(r)){for(;p!==null;){var v=el(p);if(v!==null&&Bg(v),v=Xh(r,o,l,h),v===null&&ld(r,o,h,vc,l),v===p)break;p=v}p!==null&&h.stopPropagation()}else ld(r,o,h,null,l)}}var vc=null;function Xh(r,o,l,h){if(vc=null,r=H(h),r=Ds(r),r!==null)if(o=zi(r),o===null)r=null;else if(l=o.tag,l===13){if(r=uc(o),r!==null)return r;r=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return vc=r,null}function $g(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($()){case Te:return 1;case Ie:return 4;case Fe:case ke:return 16;case rt:return 536870912;default:return 16}default:return 16}}var jr=null,$h=null,yc=null;function jg(){if(yc)return yc;var r,o=$h,l=o.length,h,p="value"in jr?jr.value:jr.textContent,v=p.length;for(r=0;r<l&&o[r]===p[r];r++);var T=l-r;for(h=1;h<=T&&o[l-h]===p[v-h];h++);return yc=p.slice(r,1<h?1-h:void 0)}function Sc(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function Ec(){return!0}function qg(){return!1}function ni(r){function o(l,h,p,v,T){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var D in r)r.hasOwnProperty(D)&&(l=r[D],this[D]=l?l(v):v[D]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ec:qg,this.isPropagationStopped=qg,this}return ie(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ec)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ec)},persist:function(){},isPersistent:Ec}),o}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jh=ni(wo),Ga=ie({},wo,{view:0,detail:0}),VT=ni(Ga),qh,Yh,Wa,xc=ie({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jh,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Wa&&(Wa&&r.type==="mousemove"?(qh=r.screenX-Wa.screenX,Yh=r.screenY-Wa.screenY):Yh=qh=0,Wa=r),qh)},movementY:function(r){return"movementY"in r?r.movementY:Yh}}),Yg=ni(xc),GT=ie({},xc,{dataTransfer:0}),WT=ni(GT),XT=ie({},Ga,{relatedTarget:0}),Kh=ni(XT),$T=ie({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),jT=ni($T),qT=ie({},wo,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),YT=ni(qT),KT=ie({},wo,{data:0}),Kg=ni(KT),JT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eM(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=ZT[r])?!!o[r]:!1}function Jh(){return eM}var tM=ie({},Ga,{key:function(r){if(r.key){var o=JT[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=Sc(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?QT[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jh,charCode:function(r){return r.type==="keypress"?Sc(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Sc(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),nM=ni(tM),iM=ie({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jg=ni(iM),rM=ie({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jh}),sM=ni(rM),oM=ie({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),aM=ni(oM),lM=ie({},xc,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),cM=ni(lM),uM=[9,13,27,32],Qh=u&&"CompositionEvent"in window,Xa=null;u&&"documentMode"in document&&(Xa=document.documentMode);var hM=u&&"TextEvent"in window&&!Xa,Qg=u&&(!Qh||Xa&&8<Xa&&11>=Xa),Zg=" ",e_=!1;function t_(r,o){switch(r){case"keyup":return uM.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n_(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Co=!1;function dM(r,o){switch(r){case"compositionend":return n_(o);case"keypress":return o.which!==32?null:(e_=!0,Zg);case"textInput":return r=o.data,r===Zg&&e_?null:r;default:return null}}function fM(r,o){if(Co)return r==="compositionend"||!Qh&&t_(r,o)?(r=jg(),yc=$h=jr=null,Co=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Qg&&o.locale!=="ko"?null:o.data;default:return null}}var pM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i_(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!pM[r.type]:o==="textarea"}function r_(r,o,l,h){fe(h),o=Rc(o,"onChange"),0<o.length&&(l=new jh("onChange","change",null,l,h),r.push({event:l,listeners:o}))}var $a=null,ja=null;function mM(r){x_(r,0)}function Tc(r){var o=Po(r);if(Vt(o))return r}function gM(r,o){if(r==="change")return o}var s_=!1;if(u){var Zh;if(u){var ed="oninput"in document;if(!ed){var o_=document.createElement("div");o_.setAttribute("oninput","return;"),ed=typeof o_.oninput=="function"}Zh=ed}else Zh=!1;s_=Zh&&(!document.documentMode||9<document.documentMode)}function a_(){$a&&($a.detachEvent("onpropertychange",l_),ja=$a=null)}function l_(r){if(r.propertyName==="value"&&Tc(ja)){var o=[];r_(o,ja,r,H(r)),Xn(mM,o)}}function _M(r,o,l){r==="focusin"?(a_(),$a=o,ja=l,$a.attachEvent("onpropertychange",l_)):r==="focusout"&&a_()}function vM(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Tc(ja)}function yM(r,o){if(r==="click")return Tc(o)}function SM(r,o){if(r==="input"||r==="change")return Tc(o)}function EM(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var Ei=typeof Object.is=="function"?Object.is:EM;function qa(r,o){if(Ei(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var l=Object.keys(r),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!d.call(o,p)||!Ei(r[p],o[p]))return!1}return!0}function c_(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function u_(r,o){var l=c_(r);r=0;for(var h;l;){if(l.nodeType===3){if(h=r+l.textContent.length,r<=o&&h>=o)return{node:l,offset:o-r};r=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=c_(l)}}function h_(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?h_(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function d_(){for(var r=window,o=gt();o instanceof r.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)r=o.contentWindow;else break;o=gt(r.document)}return o}function td(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function xM(r){var o=d_(),l=r.focusedElem,h=r.selectionRange;if(o!==l&&l&&l.ownerDocument&&h_(l.ownerDocument.documentElement,l)){if(h!==null&&td(l)){if(o=h.start,r=h.end,r===void 0&&(r=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(r,l.value.length);else if(r=(o=l.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var p=l.textContent.length,v=Math.min(h.start,p);h=h.end===void 0?v:Math.min(h.end,p),!r.extend&&v>h&&(p=h,h=v,v=p),p=u_(l,v);var T=u_(l,h);p&&T&&(r.rangeCount!==1||r.anchorNode!==p.node||r.anchorOffset!==p.offset||r.focusNode!==T.node||r.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),r.removeAllRanges(),v>h?(r.addRange(o),r.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),r.addRange(o)))}}for(o=[],r=l;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)r=o[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var TM=u&&"documentMode"in document&&11>=document.documentMode,Ro=null,nd=null,Ya=null,id=!1;function f_(r,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;id||Ro==null||Ro!==gt(h)||(h=Ro,"selectionStart"in h&&td(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ya&&qa(Ya,h)||(Ya=h,h=Rc(nd,"onSelect"),0<h.length&&(o=new jh("onSelect","select",null,o,l),r.push({event:o,listeners:h}),o.target=Ro)))}function Mc(r,o){var l={};return l[r.toLowerCase()]=o.toLowerCase(),l["Webkit"+r]="webkit"+o,l["Moz"+r]="moz"+o,l}var Ao={animationend:Mc("Animation","AnimationEnd"),animationiteration:Mc("Animation","AnimationIteration"),animationstart:Mc("Animation","AnimationStart"),transitionend:Mc("Transition","TransitionEnd")},rd={},p_={};u&&(p_=document.createElement("div").style,"AnimationEvent"in window||(delete Ao.animationend.animation,delete Ao.animationiteration.animation,delete Ao.animationstart.animation),"TransitionEvent"in window||delete Ao.transitionend.transition);function wc(r){if(rd[r])return rd[r];if(!Ao[r])return r;var o=Ao[r],l;for(l in o)if(o.hasOwnProperty(l)&&l in p_)return rd[r]=o[l];return r}var m_=wc("animationend"),g_=wc("animationiteration"),__=wc("animationstart"),v_=wc("transitionend"),y_=new Map,S_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(r,o){y_.set(r,o),a(o,[r])}for(var sd=0;sd<S_.length;sd++){var od=S_[sd],MM=od.toLowerCase(),wM=od[0].toUpperCase()+od.slice(1);qr(MM,"on"+wM)}qr(m_,"onAnimationEnd"),qr(g_,"onAnimationIteration"),qr(__,"onAnimationStart"),qr("dblclick","onDoubleClick"),qr("focusin","onFocus"),qr("focusout","onBlur"),qr(v_,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));function E_(r,o,l){var h=r.type||"unknown-event";r.currentTarget=l,cc(h,o,void 0,r),r.currentTarget=null}function x_(r,o){o=(o&4)!==0;for(var l=0;l<r.length;l++){var h=r[l],p=h.event;h=h.listeners;e:{var v=void 0;if(o)for(var T=h.length-1;0<=T;T--){var D=h[T],k=D.instance,Q=D.currentTarget;if(D=D.listener,k!==v&&p.isPropagationStopped())break e;E_(p,D,Q),v=k}else for(T=0;T<h.length;T++){if(D=h[T],k=D.instance,Q=D.currentTarget,D=D.listener,k!==v&&p.isPropagationStopped())break e;E_(p,D,Q),v=k}}}if(Ns)throw r=Hr,Ns=!1,Hr=null,r}function Wt(r,o){var l=o[pd];l===void 0&&(l=o[pd]=new Set);var h=r+"__bubble";l.has(h)||(T_(o,r,2,!1),l.add(h))}function ad(r,o,l){var h=0;o&&(h|=4),T_(l,r,h,o)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function Ja(r){if(!r[Cc]){r[Cc]=!0,i.forEach(function(l){l!=="selectionchange"&&(CM.has(l)||ad(l,!1,r),ad(l,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[Cc]||(o[Cc]=!0,ad("selectionchange",!1,o))}}function T_(r,o,l,h){switch($g(o)){case 1:var p=zT;break;case 4:p=HT;break;default:p=Wh}l=p.bind(null,o,l,r),p=void 0,!xo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?r.addEventListener(o,l,{capture:!0,passive:p}):r.addEventListener(o,l,!0):p!==void 0?r.addEventListener(o,l,{passive:p}):r.addEventListener(o,l,!1)}function ld(r,o,l,h,p){var v=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var D=h.stateNode.containerInfo;if(D===p||D.nodeType===8&&D.parentNode===p)break;if(T===4)for(T=h.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===p||k.nodeType===8&&k.parentNode===p))return;T=T.return}for(;D!==null;){if(T=Ds(D),T===null)return;if(k=T.tag,k===5||k===6){h=v=T;continue e}D=D.parentNode}}h=h.return}Xn(function(){var Q=v,ye=H(l),Ee=[];e:{var ge=y_.get(r);if(ge!==void 0){var Le=jh,Ge=r;switch(r){case"keypress":if(Sc(l)===0)break e;case"keydown":case"keyup":Le=nM;break;case"focusin":Ge="focus",Le=Kh;break;case"focusout":Ge="blur",Le=Kh;break;case"beforeblur":case"afterblur":Le=Kh;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=WT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=sM;break;case m_:case g_:case __:Le=jT;break;case v_:Le=aM;break;case"scroll":Le=VT;break;case"wheel":Le=cM;break;case"copy":case"cut":case"paste":Le=YT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Jg}var We=(o&4)!==0,sn=!We&&r==="scroll",j=We?ge!==null?ge+"Capture":null:ge;We=[];for(var V=Q,Y;V!==null;){Y=V;var Me=Y.stateNode;if(Y.tag===5&&Me!==null&&(Y=Me,j!==null&&(Me=Fn(V,j),Me!=null&&We.push(Qa(V,Me,Y)))),sn)break;V=V.return}0<We.length&&(ge=new Le(ge,Ge,null,l,ye),Ee.push({event:ge,listeners:We}))}}if((o&7)===0){e:{if(ge=r==="mouseover"||r==="pointerover",Le=r==="mouseout"||r==="pointerout",ge&&l!==st&&(Ge=l.relatedTarget||l.fromElement)&&(Ds(Ge)||Ge[cr]))break e;if((Le||ge)&&(ge=ye.window===ye?ye:(ge=ye.ownerDocument)?ge.defaultView||ge.parentWindow:window,Le?(Ge=l.relatedTarget||l.toElement,Le=Q,Ge=Ge?Ds(Ge):null,Ge!==null&&(sn=zi(Ge),Ge!==sn||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Le=null,Ge=Q),Le!==Ge)){if(We=Yg,Me="onMouseLeave",j="onMouseEnter",V="mouse",(r==="pointerout"||r==="pointerover")&&(We=Jg,Me="onPointerLeave",j="onPointerEnter",V="pointer"),sn=Le==null?ge:Po(Le),Y=Ge==null?ge:Po(Ge),ge=new We(Me,V+"leave",Le,l,ye),ge.target=sn,ge.relatedTarget=Y,Me=null,Ds(ye)===Q&&(We=new We(j,V+"enter",Ge,l,ye),We.target=Y,We.relatedTarget=sn,Me=We),sn=Me,Le&&Ge)t:{for(We=Le,j=Ge,V=0,Y=We;Y;Y=bo(Y))V++;for(Y=0,Me=j;Me;Me=bo(Me))Y++;for(;0<V-Y;)We=bo(We),V--;for(;0<Y-V;)j=bo(j),Y--;for(;V--;){if(We===j||j!==null&&We===j.alternate)break t;We=bo(We),j=bo(j)}We=null}else We=null;Le!==null&&M_(Ee,ge,Le,We,!1),Ge!==null&&sn!==null&&M_(Ee,sn,Ge,We,!0)}}e:{if(ge=Q?Po(Q):window,Le=ge.nodeName&&ge.nodeName.toLowerCase(),Le==="select"||Le==="input"&&ge.type==="file")var je=gM;else if(i_(ge))if(s_)je=SM;else{je=vM;var et=_M}else(Le=ge.nodeName)&&Le.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=yM);if(je&&(je=je(r,Q))){r_(Ee,je,l,ye);break e}et&&et(r,ge,Q),r==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&_t(ge,"number",ge.value)}switch(et=Q?Po(Q):window,r){case"focusin":(i_(et)||et.contentEditable==="true")&&(Ro=et,nd=Q,Ya=null);break;case"focusout":Ya=nd=Ro=null;break;case"mousedown":id=!0;break;case"contextmenu":case"mouseup":case"dragend":id=!1,f_(Ee,l,ye);break;case"selectionchange":if(TM)break;case"keydown":case"keyup":f_(Ee,l,ye)}var tt;if(Qh)e:{switch(r){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Co?t_(r,l)&&(at="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(Qg&&l.locale!=="ko"&&(Co||at!=="onCompositionStart"?at==="onCompositionEnd"&&Co&&(tt=jg()):(jr=ye,$h="value"in jr?jr.value:jr.textContent,Co=!0)),et=Rc(Q,at),0<et.length&&(at=new Kg(at,r,null,l,ye),Ee.push({event:at,listeners:et}),tt?at.data=tt:(tt=n_(l),tt!==null&&(at.data=tt)))),(tt=hM?dM(r,l):fM(r,l))&&(Q=Rc(Q,"onBeforeInput"),0<Q.length&&(ye=new Kg("onBeforeInput","beforeinput",null,l,ye),Ee.push({event:ye,listeners:Q}),ye.data=tt))}x_(Ee,o)})}function Qa(r,o,l){return{instance:r,listener:o,currentTarget:l}}function Rc(r,o){for(var l=o+"Capture",h=[];r!==null;){var p=r,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Fn(r,l),v!=null&&h.unshift(Qa(r,v,p)),v=Fn(r,o),v!=null&&h.push(Qa(r,v,p))),r=r.return}return h}function bo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function M_(r,o,l,h,p){for(var v=o._reactName,T=[];l!==null&&l!==h;){var D=l,k=D.alternate,Q=D.stateNode;if(k!==null&&k===h)break;D.tag===5&&Q!==null&&(D=Q,p?(k=Fn(l,v),k!=null&&T.unshift(Qa(l,k,D))):p||(k=Fn(l,v),k!=null&&T.push(Qa(l,k,D)))),l=l.return}T.length!==0&&r.push({event:o,listeners:T})}var RM=/\r\n?/g,AM=/\u0000|\uFFFD/g;function w_(r){return(typeof r=="string"?r:""+r).replace(RM,`
`).replace(AM,"")}function Ac(r,o,l){if(o=w_(o),w_(r)!==o&&l)throw Error(t(425))}function bc(){}var cd=null,ud=null;function hd(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,bM=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,IM=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(r){return C_.resolve(null).then(r).catch(PM)}:dd;function PM(r){setTimeout(function(){throw r})}function fd(r,o){var l=o,h=0;do{var p=l.nextSibling;if(r.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){r.removeChild(p),Va(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Va(o)}function Yr(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function R_(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return r;o--}else l==="/$"&&o++}r=r.previousSibling}return null}var Io=Math.random().toString(36).slice(2),Vi="__reactFiber$"+Io,Za="__reactProps$"+Io,cr="__reactContainer$"+Io,pd="__reactEvents$"+Io,NM="__reactListeners$"+Io,DM="__reactHandles$"+Io;function Ds(r){var o=r[Vi];if(o)return o;for(var l=r.parentNode;l;){if(o=l[cr]||l[Vi]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(r=R_(r);r!==null;){if(l=r[Vi])return l;r=R_(r)}return o}r=l,l=r.parentNode}return null}function el(r){return r=r[Vi]||r[cr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Po(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Ic(r){return r[Za]||null}var md=[],No=-1;function Kr(r){return{current:r}}function Xt(r){0>No||(r.current=md[No],md[No]=null,No--)}function Gt(r,o){No++,md[No]=r.current,r.current=o}var Jr={},bn=Kr(Jr),$n=Kr(!1),Ls=Jr;function Do(r,o){var l=r.type.contextTypes;if(!l)return Jr;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=o[v];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=p),p}function jn(r){return r=r.childContextTypes,r!=null}function Pc(){Xt($n),Xt(bn)}function A_(r,o,l){if(bn.current!==Jr)throw Error(t(168));Gt(bn,o),Gt($n,l)}function b_(r,o,l){var h=r.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,Se(r)||"Unknown",p));return ie({},l,h)}function Nc(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Jr,Ls=bn.current,Gt(bn,r),Gt($n,$n.current),!0}function I_(r,o,l){var h=r.stateNode;if(!h)throw Error(t(169));l?(r=b_(r,o,Ls),h.__reactInternalMemoizedMergedChildContext=r,Xt($n),Xt(bn),Gt(bn,r)):Xt($n),Gt($n,l)}var ur=null,Dc=!1,gd=!1;function P_(r){ur===null?ur=[r]:ur.push(r)}function LM(r){Dc=!0,P_(r)}function Qr(){if(!gd&&ur!==null){gd=!0;var r=0,o=Mt;try{var l=ur;for(Mt=1;r<l.length;r++){var h=l[r];do h=h(!0);while(h!==null)}ur=null,Dc=!1}catch(p){throw ur!==null&&(ur=ur.slice(r+1)),pc(Te,Qr),p}finally{Mt=o,gd=!1}}return null}var Lo=[],Uo=0,Lc=null,Uc=0,ci=[],ui=0,Us=null,hr=1,dr="";function Os(r,o){Lo[Uo++]=Uc,Lo[Uo++]=Lc,Lc=r,Uc=o}function N_(r,o,l){ci[ui++]=hr,ci[ui++]=dr,ci[ui++]=Us,Us=r;var h=hr;r=dr;var p=32-ht(h)-1;h&=~(1<<p),l+=1;var v=32-ht(o)+p;if(30<v){var T=p-p%5;v=(h&(1<<T)-1).toString(32),h>>=T,p-=T,hr=1<<32-ht(o)+p|l<<p|h,dr=v+r}else hr=1<<v|l<<p|h,dr=r}function _d(r){r.return!==null&&(Os(r,1),N_(r,1,0))}function vd(r){for(;r===Lc;)Lc=Lo[--Uo],Lo[Uo]=null,Uc=Lo[--Uo],Lo[Uo]=null;for(;r===Us;)Us=ci[--ui],ci[ui]=null,dr=ci[--ui],ci[ui]=null,hr=ci[--ui],ci[ui]=null}var ii=null,ri=null,Kt=!1,xi=null;function D_(r,o){var l=pi(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=r,o=r.deletions,o===null?(r.deletions=[l],r.flags|=16):o.push(l)}function L_(r,o){switch(r.tag){case 5:var l=r.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,ii=r,ri=Yr(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,ii=r,ri=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Us!==null?{id:hr,overflow:dr}:null,r.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=pi(18,null,null,0),l.stateNode=o,l.return=r,r.child=l,ii=r,ri=null,!0):!1;default:return!1}}function yd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Sd(r){if(Kt){var o=ri;if(o){var l=o;if(!L_(r,o)){if(yd(r))throw Error(t(418));o=Yr(l.nextSibling);var h=ii;o&&L_(r,o)?D_(h,l):(r.flags=r.flags&-4097|2,Kt=!1,ii=r)}}else{if(yd(r))throw Error(t(418));r.flags=r.flags&-4097|2,Kt=!1,ii=r}}}function U_(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ii=r}function Oc(r){if(r!==ii)return!1;if(!Kt)return U_(r),Kt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!hd(r.type,r.memoizedProps)),o&&(o=ri)){if(yd(r))throw O_(),Error(t(418));for(;o;)D_(r,o),o=Yr(o.nextSibling)}if(U_(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(o===0){ri=Yr(r.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}r=r.nextSibling}ri=null}}else ri=ii?Yr(r.stateNode.nextSibling):null;return!0}function O_(){for(var r=ri;r;)r=Yr(r.nextSibling)}function Oo(){ri=ii=null,Kt=!1}function Ed(r){xi===null?xi=[r]:xi.push(r)}var UM=A.ReactCurrentBatchConfig;function tl(r,o,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,r));var p=h,v=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===v?o.ref:(o=function(T){var D=p.refs;T===null?delete D[v]:D[v]=T},o._stringRef=v,o)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function kc(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function k_(r){var o=r._init;return o(r._payload)}function F_(r){function o(j,V){if(r){var Y=j.deletions;Y===null?(j.deletions=[V],j.flags|=16):Y.push(V)}}function l(j,V){if(!r)return null;for(;V!==null;)o(j,V),V=V.sibling;return null}function h(j,V){for(j=new Map;V!==null;)V.key!==null?j.set(V.key,V):j.set(V.index,V),V=V.sibling;return j}function p(j,V){return j=os(j,V),j.index=0,j.sibling=null,j}function v(j,V,Y){return j.index=Y,r?(Y=j.alternate,Y!==null?(Y=Y.index,Y<V?(j.flags|=2,V):Y):(j.flags|=2,V)):(j.flags|=1048576,V)}function T(j){return r&&j.alternate===null&&(j.flags|=2),j}function D(j,V,Y,Me){return V===null||V.tag!==6?(V=ff(Y,j.mode,Me),V.return=j,V):(V=p(V,Y),V.return=j,V)}function k(j,V,Y,Me){var je=Y.type;return je===U?ye(j,V,Y.props.children,Me,Y.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===se&&k_(je)===V.type)?(Me=p(V,Y.props),Me.ref=tl(j,V,Y),Me.return=j,Me):(Me=au(Y.type,Y.key,Y.props,null,j.mode,Me),Me.ref=tl(j,V,Y),Me.return=j,Me)}function Q(j,V,Y,Me){return V===null||V.tag!==4||V.stateNode.containerInfo!==Y.containerInfo||V.stateNode.implementation!==Y.implementation?(V=pf(Y,j.mode,Me),V.return=j,V):(V=p(V,Y.children||[]),V.return=j,V)}function ye(j,V,Y,Me,je){return V===null||V.tag!==7?(V=Ws(Y,j.mode,Me,je),V.return=j,V):(V=p(V,Y),V.return=j,V)}function Ee(j,V,Y){if(typeof V=="string"&&V!==""||typeof V=="number")return V=ff(""+V,j.mode,Y),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return Y=au(V.type,V.key,V.props,null,j.mode,Y),Y.ref=tl(j,null,V),Y.return=j,Y;case F:return V=pf(V,j.mode,Y),V.return=j,V;case se:var Me=V._init;return Ee(j,Me(V._payload),Y)}if(Ke(V)||le(V))return V=Ws(V,j.mode,Y,null),V.return=j,V;kc(j,V)}return null}function ge(j,V,Y,Me){var je=V!==null?V.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return je!==null?null:D(j,V,""+Y,Me);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case G:return Y.key===je?k(j,V,Y,Me):null;case F:return Y.key===je?Q(j,V,Y,Me):null;case se:return je=Y._init,ge(j,V,je(Y._payload),Me)}if(Ke(Y)||le(Y))return je!==null?null:ye(j,V,Y,Me,null);kc(j,Y)}return null}function Le(j,V,Y,Me,je){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return j=j.get(Y)||null,D(V,j,""+Me,je);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case G:return j=j.get(Me.key===null?Y:Me.key)||null,k(V,j,Me,je);case F:return j=j.get(Me.key===null?Y:Me.key)||null,Q(V,j,Me,je);case se:var et=Me._init;return Le(j,V,Y,et(Me._payload),je)}if(Ke(Me)||le(Me))return j=j.get(Y)||null,ye(V,j,Me,je,null);kc(V,Me)}return null}function Ge(j,V,Y,Me){for(var je=null,et=null,tt=V,at=V=0,yn=null;tt!==null&&at<Y.length;at++){tt.index>at?(yn=tt,tt=null):yn=tt.sibling;var Ct=ge(j,tt,Y[at],Me);if(Ct===null){tt===null&&(tt=yn);break}r&&tt&&Ct.alternate===null&&o(j,tt),V=v(Ct,V,at),et===null?je=Ct:et.sibling=Ct,et=Ct,tt=yn}if(at===Y.length)return l(j,tt),Kt&&Os(j,at),je;if(tt===null){for(;at<Y.length;at++)tt=Ee(j,Y[at],Me),tt!==null&&(V=v(tt,V,at),et===null?je=tt:et.sibling=tt,et=tt);return Kt&&Os(j,at),je}for(tt=h(j,tt);at<Y.length;at++)yn=Le(tt,j,at,Y[at],Me),yn!==null&&(r&&yn.alternate!==null&&tt.delete(yn.key===null?at:yn.key),V=v(yn,V,at),et===null?je=yn:et.sibling=yn,et=yn);return r&&tt.forEach(function(as){return o(j,as)}),Kt&&Os(j,at),je}function We(j,V,Y,Me){var je=le(Y);if(typeof je!="function")throw Error(t(150));if(Y=je.call(Y),Y==null)throw Error(t(151));for(var et=je=null,tt=V,at=V=0,yn=null,Ct=Y.next();tt!==null&&!Ct.done;at++,Ct=Y.next()){tt.index>at?(yn=tt,tt=null):yn=tt.sibling;var as=ge(j,tt,Ct.value,Me);if(as===null){tt===null&&(tt=yn);break}r&&tt&&as.alternate===null&&o(j,tt),V=v(as,V,at),et===null?je=as:et.sibling=as,et=as,tt=yn}if(Ct.done)return l(j,tt),Kt&&Os(j,at),je;if(tt===null){for(;!Ct.done;at++,Ct=Y.next())Ct=Ee(j,Ct.value,Me),Ct!==null&&(V=v(Ct,V,at),et===null?je=Ct:et.sibling=Ct,et=Ct);return Kt&&Os(j,at),je}for(tt=h(j,tt);!Ct.done;at++,Ct=Y.next())Ct=Le(tt,j,at,Ct.value,Me),Ct!==null&&(r&&Ct.alternate!==null&&tt.delete(Ct.key===null?at:Ct.key),V=v(Ct,V,at),et===null?je=Ct:et.sibling=Ct,et=Ct);return r&&tt.forEach(function(pw){return o(j,pw)}),Kt&&Os(j,at),je}function sn(j,V,Y,Me){if(typeof Y=="object"&&Y!==null&&Y.type===U&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case G:e:{for(var je=Y.key,et=V;et!==null;){if(et.key===je){if(je=Y.type,je===U){if(et.tag===7){l(j,et.sibling),V=p(et,Y.props.children),V.return=j,j=V;break e}}else if(et.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===se&&k_(je)===et.type){l(j,et.sibling),V=p(et,Y.props),V.ref=tl(j,et,Y),V.return=j,j=V;break e}l(j,et);break}else o(j,et);et=et.sibling}Y.type===U?(V=Ws(Y.props.children,j.mode,Me,Y.key),V.return=j,j=V):(Me=au(Y.type,Y.key,Y.props,null,j.mode,Me),Me.ref=tl(j,V,Y),Me.return=j,j=Me)}return T(j);case F:e:{for(et=Y.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===Y.containerInfo&&V.stateNode.implementation===Y.implementation){l(j,V.sibling),V=p(V,Y.children||[]),V.return=j,j=V;break e}else{l(j,V);break}else o(j,V);V=V.sibling}V=pf(Y,j.mode,Me),V.return=j,j=V}return T(j);case se:return et=Y._init,sn(j,V,et(Y._payload),Me)}if(Ke(Y))return Ge(j,V,Y,Me);if(le(Y))return We(j,V,Y,Me);kc(j,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,V!==null&&V.tag===6?(l(j,V.sibling),V=p(V,Y),V.return=j,j=V):(l(j,V),V=ff(Y,j.mode,Me),V.return=j,j=V),T(j)):l(j,V)}return sn}var ko=F_(!0),B_=F_(!1),Fc=Kr(null),Bc=null,Fo=null,xd=null;function Td(){xd=Fo=Bc=null}function Md(r){var o=Fc.current;Xt(Fc),r._currentValue=o}function wd(r,o,l){for(;r!==null;){var h=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),r===l)break;r=r.return}}function Bo(r,o){Bc=r,xd=Fo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(qn=!0),r.firstContext=null)}function hi(r){var o=r._currentValue;if(xd!==r)if(r={context:r,memoizedValue:o,next:null},Fo===null){if(Bc===null)throw Error(t(308));Fo=r,Bc.dependencies={lanes:0,firstContext:r}}else Fo=Fo.next=r;return o}var ks=null;function Cd(r){ks===null?ks=[r]:ks.push(r)}function z_(r,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Cd(o)):(l.next=p.next,p.next=l),o.interleaved=l,fr(r,h)}function fr(r,o){r.lanes|=o;var l=r.alternate;for(l!==null&&(l.lanes|=o),l=r,r=r.return;r!==null;)r.childLanes|=o,l=r.alternate,l!==null&&(l.childLanes|=o),l=r,r=r.return;return l.tag===3?l.stateNode:null}var Zr=!1;function Rd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H_(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function pr(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function es(r,o,l){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(wt&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,fr(r,l)}return p=h.interleaved,p===null?(o.next=o,Cd(h)):(o.next=p.next,p.next=o),h.interleaved=o,fr(r,l)}function zc(r,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=r.pendingLanes,l|=h,o.lanes=l,gn(r,l)}}function V_(r,o){var l=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?p=v=o:v=v.next=o}else p=v=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:h.shared,effects:h.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=o:r.next=o,l.lastBaseUpdate=o}function Hc(r,o,l,h){var p=r.updateQueue;Zr=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,D=p.shared.pending;if(D!==null){p.shared.pending=null;var k=D,Q=k.next;k.next=null,T===null?v=Q:T.next=Q,T=k;var ye=r.alternate;ye!==null&&(ye=ye.updateQueue,D=ye.lastBaseUpdate,D!==T&&(D===null?ye.firstBaseUpdate=Q:D.next=Q,ye.lastBaseUpdate=k))}if(v!==null){var Ee=p.baseState;T=0,ye=Q=k=null,D=v;do{var ge=D.lane,Le=D.eventTime;if((h&ge)===ge){ye!==null&&(ye=ye.next={eventTime:Le,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ge=r,We=D;switch(ge=o,Le=l,We.tag){case 1:if(Ge=We.payload,typeof Ge=="function"){Ee=Ge.call(Le,Ee,ge);break e}Ee=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=We.payload,ge=typeof Ge=="function"?Ge.call(Le,Ee,ge):Ge,ge==null)break e;Ee=ie({},Ee,ge);break e;case 2:Zr=!0}}D.callback!==null&&D.lane!==0&&(r.flags|=64,ge=p.effects,ge===null?p.effects=[D]:ge.push(D))}else Le={eventTime:Le,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ye===null?(Q=ye=Le,k=Ee):ye=ye.next=Le,T|=ge;if(D=D.next,D===null){if(D=p.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);if(ye===null&&(k=Ee),p.baseState=k,p.firstBaseUpdate=Q,p.lastBaseUpdate=ye,o=p.shared.interleaved,o!==null){p=o;do T|=p.lane,p=p.next;while(p!==o)}else v===null&&(p.shared.lanes=0);zs|=T,r.lanes=T,r.memoizedState=Ee}}function G_(r,o,l){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var h=r[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var nl={},Gi=Kr(nl),il=Kr(nl),rl=Kr(nl);function Fs(r){if(r===nl)throw Error(t(174));return r}function Ad(r,o){switch(Gt(rl,o),Gt(il,r),Gt(Gi,nl),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:me(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=me(o,r)}Xt(Gi),Gt(Gi,o)}function zo(){Xt(Gi),Xt(il),Xt(rl)}function W_(r){Fs(rl.current);var o=Fs(Gi.current),l=me(o,r.type);o!==l&&(Gt(il,r),Gt(Gi,l))}function bd(r){il.current===r&&(Xt(Gi),Xt(il))}var Zt=Kr(0);function Vc(r){for(var o=r;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Id=[];function Pd(){for(var r=0;r<Id.length;r++)Id[r]._workInProgressVersionPrimary=null;Id.length=0}var Gc=A.ReactCurrentDispatcher,Nd=A.ReactCurrentBatchConfig,Bs=0,en=null,ln=null,_n=null,Wc=!1,sl=!1,ol=0,OM=0;function In(){throw Error(t(321))}function Dd(r,o){if(o===null)return!1;for(var l=0;l<o.length&&l<r.length;l++)if(!Ei(r[l],o[l]))return!1;return!0}function Ld(r,o,l,h,p,v){if(Bs=v,en=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Gc.current=r===null||r.memoizedState===null?zM:HM,r=l(h,p),sl){v=0;do{if(sl=!1,ol=0,25<=v)throw Error(t(301));v+=1,_n=ln=null,o.updateQueue=null,Gc.current=VM,r=l(h,p)}while(sl)}if(Gc.current=jc,o=ln!==null&&ln.next!==null,Bs=0,_n=ln=en=null,Wc=!1,o)throw Error(t(300));return r}function Ud(){var r=ol!==0;return ol=0,r}function Wi(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?en.memoizedState=_n=r:_n=_n.next=r,_n}function di(){if(ln===null){var r=en.alternate;r=r!==null?r.memoizedState:null}else r=ln.next;var o=_n===null?en.memoizedState:_n.next;if(o!==null)_n=o,ln=r;else{if(r===null)throw Error(t(310));ln=r,r={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},_n===null?en.memoizedState=_n=r:_n=_n.next=r}return _n}function al(r,o){return typeof o=="function"?o(r):o}function Od(r){var o=di(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=ln,p=h.baseQueue,v=l.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}h.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,h=h.baseState;var D=T=null,k=null,Q=v;do{var ye=Q.lane;if((Bs&ye)===ye)k!==null&&(k=k.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),h=Q.hasEagerState?Q.eagerState:r(h,Q.action);else{var Ee={lane:ye,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};k===null?(D=k=Ee,T=h):k=k.next=Ee,en.lanes|=ye,zs|=ye}Q=Q.next}while(Q!==null&&Q!==v);k===null?T=h:k.next=D,Ei(h,o.memoizedState)||(qn=!0),o.memoizedState=h,o.baseState=T,o.baseQueue=k,l.lastRenderedState=h}if(r=l.interleaved,r!==null){p=r;do v=p.lane,en.lanes|=v,zs|=v,p=p.next;while(p!==r)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function kd(r){var o=di(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=l.dispatch,p=l.pending,v=o.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do v=r(v,T.action),T=T.next;while(T!==p);Ei(v,o.memoizedState)||(qn=!0),o.memoizedState=v,o.baseQueue===null&&(o.baseState=v),l.lastRenderedState=v}return[v,h]}function X_(){}function $_(r,o){var l=en,h=di(),p=o(),v=!Ei(h.memoizedState,p);if(v&&(h.memoizedState=p,qn=!0),h=h.queue,Fd(Y_.bind(null,l,h,r),[r]),h.getSnapshot!==o||v||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,ll(9,q_.bind(null,l,h,p,o),void 0,null),vn===null)throw Error(t(349));(Bs&30)!==0||j_(l,o,p)}return p}function j_(r,o,l){r.flags|=16384,r={getSnapshot:o,value:l},o=en.updateQueue,o===null?(o={lastEffect:null,stores:null},en.updateQueue=o,o.stores=[r]):(l=o.stores,l===null?o.stores=[r]:l.push(r))}function q_(r,o,l,h){o.value=l,o.getSnapshot=h,K_(o)&&J_(r)}function Y_(r,o,l){return l(function(){K_(o)&&J_(r)})}function K_(r){var o=r.getSnapshot;r=r.value;try{var l=o();return!Ei(r,l)}catch{return!0}}function J_(r){var o=fr(r,1);o!==null&&Ci(o,r,1,-1)}function Q_(r){var o=Wi();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:r},o.queue=r,r=r.dispatch=BM.bind(null,en,r),[o.memoizedState,r]}function ll(r,o,l,h){return r={tag:r,create:o,destroy:l,deps:h,next:null},o=en.updateQueue,o===null?(o={lastEffect:null,stores:null},en.updateQueue=o,o.lastEffect=r.next=r):(l=o.lastEffect,l===null?o.lastEffect=r.next=r:(h=l.next,l.next=r,r.next=h,o.lastEffect=r)),r}function Z_(){return di().memoizedState}function Xc(r,o,l,h){var p=Wi();en.flags|=r,p.memoizedState=ll(1|o,l,void 0,h===void 0?null:h)}function $c(r,o,l,h){var p=di();h=h===void 0?null:h;var v=void 0;if(ln!==null){var T=ln.memoizedState;if(v=T.destroy,h!==null&&Dd(h,T.deps)){p.memoizedState=ll(o,l,v,h);return}}en.flags|=r,p.memoizedState=ll(1|o,l,v,h)}function ev(r,o){return Xc(8390656,8,r,o)}function Fd(r,o){return $c(2048,8,r,o)}function tv(r,o){return $c(4,2,r,o)}function nv(r,o){return $c(4,4,r,o)}function iv(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function rv(r,o,l){return l=l!=null?l.concat([r]):null,$c(4,4,iv.bind(null,o,r),l)}function Bd(){}function sv(r,o){var l=di();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Dd(o,h[1])?h[0]:(l.memoizedState=[r,o],r)}function ov(r,o){var l=di();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Dd(o,h[1])?h[0]:(r=r(),l.memoizedState=[r,o],r)}function av(r,o,l){return(Bs&21)===0?(r.baseState&&(r.baseState=!1,qn=!0),r.memoizedState=l):(Ei(l,o)||(l=Ht(),en.lanes|=l,zs|=l,r.baseState=!0),o)}function kM(r,o){var l=Mt;Mt=l!==0&&4>l?l:4,r(!0);var h=Nd.transition;Nd.transition={};try{r(!1),o()}finally{Mt=l,Nd.transition=h}}function lv(){return di().memoizedState}function FM(r,o,l){var h=rs(r);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},cv(r))uv(o,l);else if(l=z_(r,o,l,h),l!==null){var p=Hn();Ci(l,r,h,p),hv(l,o,h)}}function BM(r,o,l){var h=rs(r),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(cv(r))uv(o,p);else{var v=r.alternate;if(r.lanes===0&&(v===null||v.lanes===0)&&(v=o.lastRenderedReducer,v!==null))try{var T=o.lastRenderedState,D=v(T,l);if(p.hasEagerState=!0,p.eagerState=D,Ei(D,T)){var k=o.interleaved;k===null?(p.next=p,Cd(o)):(p.next=k.next,k.next=p),o.interleaved=p;return}}catch{}finally{}l=z_(r,o,p,h),l!==null&&(p=Hn(),Ci(l,r,h,p),hv(l,o,h))}}function cv(r){var o=r.alternate;return r===en||o!==null&&o===en}function uv(r,o){sl=Wc=!0;var l=r.pending;l===null?o.next=o:(o.next=l.next,l.next=o),r.pending=o}function hv(r,o,l){if((l&4194240)!==0){var h=o.lanes;h&=r.pendingLanes,l|=h,o.lanes=l,gn(r,l)}}var jc={readContext:hi,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useInsertionEffect:In,useLayoutEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useMutableSource:In,useSyncExternalStore:In,useId:In,unstable_isNewReconciler:!1},zM={readContext:hi,useCallback:function(r,o){return Wi().memoizedState=[r,o===void 0?null:o],r},useContext:hi,useEffect:ev,useImperativeHandle:function(r,o,l){return l=l!=null?l.concat([r]):null,Xc(4194308,4,iv.bind(null,o,r),l)},useLayoutEffect:function(r,o){return Xc(4194308,4,r,o)},useInsertionEffect:function(r,o){return Xc(4,2,r,o)},useMemo:function(r,o){var l=Wi();return o=o===void 0?null:o,r=r(),l.memoizedState=[r,o],r},useReducer:function(r,o,l){var h=Wi();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},h.queue=r,r=r.dispatch=FM.bind(null,en,r),[h.memoizedState,r]},useRef:function(r){var o=Wi();return r={current:r},o.memoizedState=r},useState:Q_,useDebugValue:Bd,useDeferredValue:function(r){return Wi().memoizedState=r},useTransition:function(){var r=Q_(!1),o=r[0];return r=kM.bind(null,r[1]),Wi().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,l){var h=en,p=Wi();if(Kt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),vn===null)throw Error(t(349));(Bs&30)!==0||j_(h,o,l)}p.memoizedState=l;var v={value:l,getSnapshot:o};return p.queue=v,ev(Y_.bind(null,h,v,r),[r]),h.flags|=2048,ll(9,q_.bind(null,h,v,l,o),void 0,null),l},useId:function(){var r=Wi(),o=vn.identifierPrefix;if(Kt){var l=dr,h=hr;l=(h&~(1<<32-ht(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=ol++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=OM++,o=":"+o+"r"+l.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},HM={readContext:hi,useCallback:sv,useContext:hi,useEffect:Fd,useImperativeHandle:rv,useInsertionEffect:tv,useLayoutEffect:nv,useMemo:ov,useReducer:Od,useRef:Z_,useState:function(){return Od(al)},useDebugValue:Bd,useDeferredValue:function(r){var o=di();return av(o,ln.memoizedState,r)},useTransition:function(){var r=Od(al)[0],o=di().memoizedState;return[r,o]},useMutableSource:X_,useSyncExternalStore:$_,useId:lv,unstable_isNewReconciler:!1},VM={readContext:hi,useCallback:sv,useContext:hi,useEffect:Fd,useImperativeHandle:rv,useInsertionEffect:tv,useLayoutEffect:nv,useMemo:ov,useReducer:kd,useRef:Z_,useState:function(){return kd(al)},useDebugValue:Bd,useDeferredValue:function(r){var o=di();return ln===null?o.memoizedState=r:av(o,ln.memoizedState,r)},useTransition:function(){var r=kd(al)[0],o=di().memoizedState;return[r,o]},useMutableSource:X_,useSyncExternalStore:$_,useId:lv,unstable_isNewReconciler:!1};function Ti(r,o){if(r&&r.defaultProps){o=ie({},o),r=r.defaultProps;for(var l in r)o[l]===void 0&&(o[l]=r[l]);return o}return o}function zd(r,o,l,h){o=r.memoizedState,l=l(h,o),l=l==null?o:ie({},o,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var qc={isMounted:function(r){return(r=r._reactInternals)?zi(r)===r:!1},enqueueSetState:function(r,o,l){r=r._reactInternals;var h=Hn(),p=rs(r),v=pr(h,p);v.payload=o,l!=null&&(v.callback=l),o=es(r,v,p),o!==null&&(Ci(o,r,p,h),zc(o,r,p))},enqueueReplaceState:function(r,o,l){r=r._reactInternals;var h=Hn(),p=rs(r),v=pr(h,p);v.tag=1,v.payload=o,l!=null&&(v.callback=l),o=es(r,v,p),o!==null&&(Ci(o,r,p,h),zc(o,r,p))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var l=Hn(),h=rs(r),p=pr(l,h);p.tag=2,o!=null&&(p.callback=o),o=es(r,p,h),o!==null&&(Ci(o,r,h,l),zc(o,r,h))}};function dv(r,o,l,h,p,v,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,v,T):o.prototype&&o.prototype.isPureReactComponent?!qa(l,h)||!qa(p,v):!0}function fv(r,o,l){var h=!1,p=Jr,v=o.contextType;return typeof v=="object"&&v!==null?v=hi(v):(p=jn(o)?Ls:bn.current,h=o.contextTypes,v=(h=h!=null)?Do(r,p):Jr),o=new o(l,v),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=qc,r.stateNode=o,o._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=p,r.__reactInternalMemoizedMaskedChildContext=v),o}function pv(r,o,l,h){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==r&&qc.enqueueReplaceState(o,o.state,null)}function Hd(r,o,l,h){var p=r.stateNode;p.props=l,p.state=r.memoizedState,p.refs={},Rd(r);var v=o.contextType;typeof v=="object"&&v!==null?p.context=hi(v):(v=jn(o)?Ls:bn.current,p.context=Do(r,v)),p.state=r.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(zd(r,o,v,l),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&qc.enqueueReplaceState(p,p.state,null),Hc(r,l,p,h),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308)}function Ho(r,o){try{var l="",h=o;do l+=de(h),h=h.return;while(h);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:r,source:o,stack:p,digest:null}}function Vd(r,o,l){return{value:r,source:null,stack:l??null,digest:o??null}}function Gd(r,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var GM=typeof WeakMap=="function"?WeakMap:Map;function mv(r,o,l){l=pr(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){tu||(tu=!0,sf=h),Gd(r,o)},l}function gv(r,o,l){l=pr(-1,l),l.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){Gd(r,o)}}var v=r.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Gd(r,o),typeof h!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),l}function _v(r,o,l){var h=r.pingCache;if(h===null){h=r.pingCache=new GM;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),r=iw.bind(null,r,o,l),o.then(r,r))}function vv(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function yv(r,o,l,h,p){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=pr(-1,1),o.tag=2,es(l,o,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=p,r)}var WM=A.ReactCurrentOwner,qn=!1;function zn(r,o,l,h){o.child=r===null?B_(o,null,l,h):ko(o,r.child,l,h)}function Sv(r,o,l,h,p){l=l.render;var v=o.ref;return Bo(o,p),h=Ld(r,o,l,h,v,p),l=Ud(),r!==null&&!qn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~p,mr(r,o,p)):(Kt&&l&&_d(o),o.flags|=1,zn(r,o,h,p),o.child)}function Ev(r,o,l,h,p){if(r===null){var v=l.type;return typeof v=="function"&&!df(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=v,xv(r,o,v,h,p)):(r=au(l.type,null,h,o,o.mode,p),r.ref=o.ref,r.return=o,o.child=r)}if(v=r.child,(r.lanes&p)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:qa,l(T,h)&&r.ref===o.ref)return mr(r,o,p)}return o.flags|=1,r=os(v,h),r.ref=o.ref,r.return=o,o.child=r}function xv(r,o,l,h,p){if(r!==null){var v=r.memoizedProps;if(qa(v,h)&&r.ref===o.ref)if(qn=!1,o.pendingProps=h=v,(r.lanes&p)!==0)(r.flags&131072)!==0&&(qn=!0);else return o.lanes=r.lanes,mr(r,o,p)}return Wd(r,o,l,h,p)}function Tv(r,o,l){var h=o.pendingProps,p=h.children,v=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Go,si),si|=l;else{if((l&1073741824)===0)return r=v!==null?v.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,Gt(Go,si),si|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,Gt(Go,si),si|=h}else v!==null?(h=v.baseLanes|l,o.memoizedState=null):h=l,Gt(Go,si),si|=h;return zn(r,o,p,l),o.child}function Mv(r,o){var l=o.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function Wd(r,o,l,h,p){var v=jn(l)?Ls:bn.current;return v=Do(o,v),Bo(o,p),l=Ld(r,o,l,h,v,p),h=Ud(),r!==null&&!qn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~p,mr(r,o,p)):(Kt&&h&&_d(o),o.flags|=1,zn(r,o,l,p),o.child)}function wv(r,o,l,h,p){if(jn(l)){var v=!0;Nc(o)}else v=!1;if(Bo(o,p),o.stateNode===null)Kc(r,o),fv(o,l,h),Hd(o,l,h,p),h=!0;else if(r===null){var T=o.stateNode,D=o.memoizedProps;T.props=D;var k=T.context,Q=l.contextType;typeof Q=="object"&&Q!==null?Q=hi(Q):(Q=jn(l)?Ls:bn.current,Q=Do(o,Q));var ye=l.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==h||k!==Q)&&pv(o,T,h,Q),Zr=!1;var ge=o.memoizedState;T.state=ge,Hc(o,h,T,p),k=o.memoizedState,D!==h||ge!==k||$n.current||Zr?(typeof ye=="function"&&(zd(o,l,ye,h),k=o.memoizedState),(D=Zr||dv(o,l,D,h,ge,k,Q))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=k),T.props=h,T.state=k,T.context=Q,h=D):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{T=o.stateNode,H_(r,o),D=o.memoizedProps,Q=o.type===o.elementType?D:Ti(o.type,D),T.props=Q,Ee=o.pendingProps,ge=T.context,k=l.contextType,typeof k=="object"&&k!==null?k=hi(k):(k=jn(l)?Ls:bn.current,k=Do(o,k));var Le=l.getDerivedStateFromProps;(ye=typeof Le=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==Ee||ge!==k)&&pv(o,T,h,k),Zr=!1,ge=o.memoizedState,T.state=ge,Hc(o,h,T,p);var Ge=o.memoizedState;D!==Ee||ge!==Ge||$n.current||Zr?(typeof Le=="function"&&(zd(o,l,Le,h),Ge=o.memoizedState),(Q=Zr||dv(o,l,Q,h,ge,Ge,k)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,Ge,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,Ge,k)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||D===r.memoizedProps&&ge===r.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===r.memoizedProps&&ge===r.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=Ge),T.props=h,T.state=Ge,T.context=k,h=Q):(typeof T.componentDidUpdate!="function"||D===r.memoizedProps&&ge===r.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===r.memoizedProps&&ge===r.memoizedState||(o.flags|=1024),h=!1)}return Xd(r,o,l,h,v,p)}function Xd(r,o,l,h,p,v){Mv(r,o);var T=(o.flags&128)!==0;if(!h&&!T)return p&&I_(o,l,!1),mr(r,o,v);h=o.stateNode,WM.current=o;var D=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,r!==null&&T?(o.child=ko(o,r.child,null,v),o.child=ko(o,null,D,v)):zn(r,o,D,v),o.memoizedState=h.state,p&&I_(o,l,!0),o.child}function Cv(r){var o=r.stateNode;o.pendingContext?A_(r,o.pendingContext,o.pendingContext!==o.context):o.context&&A_(r,o.context,!1),Ad(r,o.containerInfo)}function Rv(r,o,l,h,p){return Oo(),Ed(p),o.flags|=256,zn(r,o,l,h),o.child}var $d={dehydrated:null,treeContext:null,retryLane:0};function jd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Av(r,o,l){var h=o.pendingProps,p=Zt.current,v=!1,T=(o.flags&128)!==0,D;if((D=T)||(D=r!==null&&r.memoizedState===null?!1:(p&2)!==0),D?(v=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(p|=1),Gt(Zt,p&1),r===null)return Sd(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(T=h.children,r=h.fallback,v?(h=o.mode,v=o.child,T={mode:"hidden",children:T},(h&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=lu(T,h,0,null),r=Ws(r,h,l,null),v.return=o,r.return=o,v.sibling=r,o.child=v,o.child.memoizedState=jd(l),o.memoizedState=$d,r):qd(o,T));if(p=r.memoizedState,p!==null&&(D=p.dehydrated,D!==null))return XM(r,o,T,h,D,p,l);if(v){v=h.fallback,T=o.mode,p=r.child,D=p.sibling;var k={mode:"hidden",children:h.children};return(T&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=k,o.deletions=null):(h=os(p,k),h.subtreeFlags=p.subtreeFlags&14680064),D!==null?v=os(D,v):(v=Ws(v,T,l,null),v.flags|=2),v.return=o,h.return=o,h.sibling=v,o.child=h,h=v,v=o.child,T=r.child.memoizedState,T=T===null?jd(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=r.childLanes&~l,o.memoizedState=$d,h}return v=r.child,r=v.sibling,h=os(v,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,r!==null&&(l=o.deletions,l===null?(o.deletions=[r],o.flags|=16):l.push(r)),o.child=h,o.memoizedState=null,h}function qd(r,o){return o=lu({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function Yc(r,o,l,h){return h!==null&&Ed(h),ko(o,r.child,null,l),r=qd(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function XM(r,o,l,h,p,v,T){if(l)return o.flags&256?(o.flags&=-257,h=Vd(Error(t(422))),Yc(r,o,T,h)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(v=h.fallback,p=o.mode,h=lu({mode:"visible",children:h.children},p,0,null),v=Ws(v,p,T,null),v.flags|=2,h.return=o,v.return=o,h.sibling=v,o.child=h,(o.mode&1)!==0&&ko(o,r.child,null,T),o.child.memoizedState=jd(T),o.memoizedState=$d,v);if((o.mode&1)===0)return Yc(r,o,T,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var D=h.dgst;return h=D,v=Error(t(419)),h=Vd(v,h,void 0),Yc(r,o,T,h)}if(D=(T&r.childLanes)!==0,qn||D){if(h=vn,h!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,fr(r,p),Ci(h,r,p,-1))}return hf(),h=Vd(Error(t(421))),Yc(r,o,T,h)}return p.data==="$?"?(o.flags|=128,o.child=r.child,o=rw.bind(null,r),p._reactRetry=o,null):(r=v.treeContext,ri=Yr(p.nextSibling),ii=o,Kt=!0,xi=null,r!==null&&(ci[ui++]=hr,ci[ui++]=dr,ci[ui++]=Us,hr=r.id,dr=r.overflow,Us=o),o=qd(o,h.children),o.flags|=4096,o)}function bv(r,o,l){r.lanes|=o;var h=r.alternate;h!==null&&(h.lanes|=o),wd(r.return,o,l)}function Yd(r,o,l,h,p){var v=r.memoizedState;v===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(v.isBackwards=o,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=p)}function Iv(r,o,l){var h=o.pendingProps,p=h.revealOrder,v=h.tail;if(zn(r,o,h.children,l),h=Zt.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&bv(r,l,o);else if(r.tag===19)bv(r,l,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Gt(Zt,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)r=l.alternate,r!==null&&Vc(r)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),Yd(o,!1,p,l,v);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(r=p.alternate,r!==null&&Vc(r)===null){o.child=p;break}r=p.sibling,p.sibling=l,l=p,p=r}Yd(o,!0,l,null,v);break;case"together":Yd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Kc(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function mr(r,o,l){if(r!==null&&(o.dependencies=r.dependencies),zs|=o.lanes,(l&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,l=os(r,r.pendingProps),o.child=l,l.return=o;r.sibling!==null;)r=r.sibling,l=l.sibling=os(r,r.pendingProps),l.return=o;l.sibling=null}return o.child}function $M(r,o,l){switch(o.tag){case 3:Cv(o),Oo();break;case 5:W_(o);break;case 1:jn(o.type)&&Nc(o);break;case 4:Ad(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;Gt(Fc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(Gt(Zt,Zt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?Av(r,o,l):(Gt(Zt,Zt.current&1),r=mr(r,o,l),r!==null?r.sibling:null);Gt(Zt,Zt.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(r.flags&128)!==0){if(h)return Iv(r,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Gt(Zt,Zt.current),h)break;return null;case 22:case 23:return o.lanes=0,Tv(r,o,l)}return mr(r,o,l)}var Pv,Kd,Nv,Dv;Pv=function(r,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Kd=function(){},Nv=function(r,o,l,h){var p=r.memoizedProps;if(p!==h){r=o.stateNode,Fs(Gi.current);var v=null;switch(l){case"input":p=O(r,p),h=O(r,h),v=[];break;case"select":p=ie({},p,{value:void 0}),h=ie({},h,{value:void 0}),v=[];break;case"textarea":p=Qt(r,p),h=Qt(r,h),v=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=bc)}Ze(l,h);var T;l=null;for(Q in p)if(!h.hasOwnProperty(Q)&&p.hasOwnProperty(Q)&&p[Q]!=null)if(Q==="style"){var D=p[Q];for(T in D)D.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(s.hasOwnProperty(Q)?v||(v=[]):(v=v||[]).push(Q,null));for(Q in h){var k=h[Q];if(D=p?.[Q],h.hasOwnProperty(Q)&&k!==D&&(k!=null||D!=null))if(Q==="style")if(D){for(T in D)!D.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in k)k.hasOwnProperty(T)&&D[T]!==k[T]&&(l||(l={}),l[T]=k[T])}else l||(v||(v=[]),v.push(Q,l)),l=k;else Q==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(v=v||[]).push(Q,k)):Q==="children"?typeof k!="string"&&typeof k!="number"||(v=v||[]).push(Q,""+k):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(s.hasOwnProperty(Q)?(k!=null&&Q==="onScroll"&&Wt("scroll",r),v||D===k||(v=[])):(v=v||[]).push(Q,k))}l&&(v=v||[]).push("style",l);var Q=v;(o.updateQueue=Q)&&(o.flags|=4)}},Dv=function(r,o,l,h){l!==h&&(o.flags|=4)};function cl(r,o){if(!Kt)switch(r.tailMode){case"hidden":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Pn(r){var o=r.alternate!==null&&r.alternate.child===r.child,l=0,h=0;if(o)for(var p=r.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=r,p=p.sibling;else for(p=r.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=r,p=p.sibling;return r.subtreeFlags|=h,r.childLanes=l,o}function jM(r,o,l){var h=o.pendingProps;switch(vd(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(o),null;case 1:return jn(o.type)&&Pc(),Pn(o),null;case 3:return h=o.stateNode,zo(),Xt($n),Xt(bn),Pd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Oc(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,xi!==null&&(lf(xi),xi=null))),Kd(r,o),Pn(o),null;case 5:bd(o);var p=Fs(rl.current);if(l=o.type,r!==null&&o.stateNode!=null)Nv(r,o,l,h,p),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Pn(o),null}if(r=Fs(Gi.current),Oc(o)){h=o.stateNode,l=o.type;var v=o.memoizedProps;switch(h[Vi]=o,h[Za]=v,r=(o.mode&1)!==0,l){case"dialog":Wt("cancel",h),Wt("close",h);break;case"iframe":case"object":case"embed":Wt("load",h);break;case"video":case"audio":for(p=0;p<Ka.length;p++)Wt(Ka[p],h);break;case"source":Wt("error",h);break;case"img":case"image":case"link":Wt("error",h),Wt("load",h);break;case"details":Wt("toggle",h);break;case"input":fn(h,v),Wt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},Wt("invalid",h);break;case"textarea":N(h,v),Wt("invalid",h)}Ze(l,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var D=v[T];T==="children"?typeof D=="string"?h.textContent!==D&&(v.suppressHydrationWarning!==!0&&Ac(h.textContent,D,r),p=["children",D]):typeof D=="number"&&h.textContent!==""+D&&(v.suppressHydrationWarning!==!0&&Ac(h.textContent,D,r),p=["children",""+D]):s.hasOwnProperty(T)&&D!=null&&T==="onScroll"&&Wt("scroll",h)}switch(l){case"input":Lt(h),$e(h,v,!0);break;case"textarea":Lt(h),K(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=bc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ue(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=T.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=T.createElement(l,{is:h.is}):(r=T.createElement(l),l==="select"&&(T=r,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):r=T.createElementNS(r,l),r[Vi]=o,r[Za]=h,Pv(r,o,!1,!1),o.stateNode=r;e:{switch(T=Ae(l,h),l){case"dialog":Wt("cancel",r),Wt("close",r),p=h;break;case"iframe":case"object":case"embed":Wt("load",r),p=h;break;case"video":case"audio":for(p=0;p<Ka.length;p++)Wt(Ka[p],r);p=h;break;case"source":Wt("error",r),p=h;break;case"img":case"image":case"link":Wt("error",r),Wt("load",r),p=h;break;case"details":Wt("toggle",r),p=h;break;case"input":fn(r,h),p=O(r,h),Wt("invalid",r);break;case"option":p=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},p=ie({},h,{value:void 0}),Wt("invalid",r);break;case"textarea":N(r,h),p=Qt(r,h),Wt("invalid",r);break;default:p=h}Ze(l,p),D=p;for(v in D)if(D.hasOwnProperty(v)){var k=D[v];v==="style"?Ue(r,k):v==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&qe(r,k)):v==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&Re(r,k):typeof k=="number"&&Re(r,""+k):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?k!=null&&v==="onScroll"&&Wt("scroll",r):k!=null&&I(r,v,k,T))}switch(l){case"input":Lt(r),$e(r,h,!1);break;case"textarea":Lt(r),K(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Ce(h.value));break;case"select":r.multiple=!!h.multiple,v=h.value,v!=null?ot(r,!!h.multiple,v,!1):h.defaultValue!=null&&ot(r,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(r.onclick=bc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Pn(o),null;case 6:if(r&&o.stateNode!=null)Dv(r,o,r.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=Fs(rl.current),Fs(Gi.current),Oc(o)){if(h=o.stateNode,l=o.memoizedProps,h[Vi]=o,(v=h.nodeValue!==l)&&(r=ii,r!==null))switch(r.tag){case 3:Ac(h.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Ac(h.nodeValue,l,(r.mode&1)!==0)}v&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Vi]=o,o.stateNode=h}return Pn(o),null;case 13:if(Xt(Zt),h=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Kt&&ri!==null&&(o.mode&1)!==0&&(o.flags&128)===0)O_(),Oo(),o.flags|=98560,v=!1;else if(v=Oc(o),h!==null&&h.dehydrated!==null){if(r===null){if(!v)throw Error(t(318));if(v=o.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Vi]=o}else Oo(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Pn(o),v=!1}else xi!==null&&(lf(xi),xi=null),v=!0;if(!v)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(Zt.current&1)!==0?cn===0&&(cn=3):hf())),o.updateQueue!==null&&(o.flags|=4),Pn(o),null);case 4:return zo(),Kd(r,o),r===null&&Ja(o.stateNode.containerInfo),Pn(o),null;case 10:return Md(o.type._context),Pn(o),null;case 17:return jn(o.type)&&Pc(),Pn(o),null;case 19:if(Xt(Zt),v=o.memoizedState,v===null)return Pn(o),null;if(h=(o.flags&128)!==0,T=v.rendering,T===null)if(h)cl(v,!1);else{if(cn!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(T=Vc(r),T!==null){for(o.flags|=128,cl(v,!1),h=T.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)v=l,r=h,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=r,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,r=T.dependencies,v.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Gt(Zt,Zt.current&1|2),o.child}r=r.sibling}v.tail!==null&&q()>Wo&&(o.flags|=128,h=!0,cl(v,!1),o.lanes=4194304)}else{if(!h)if(r=Vc(T),r!==null){if(o.flags|=128,h=!0,l=r.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),cl(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Kt)return Pn(o),null}else 2*q()-v.renderingStartTime>Wo&&l!==1073741824&&(o.flags|=128,h=!0,cl(v,!1),o.lanes=4194304);v.isBackwards?(T.sibling=o.child,o.child=T):(l=v.last,l!==null?l.sibling=T:o.child=T,v.last=T)}return v.tail!==null?(o=v.tail,v.rendering=o,v.tail=o.sibling,v.renderingStartTime=q(),o.sibling=null,l=Zt.current,Gt(Zt,h?l&1|2:l&1),o):(Pn(o),null);case 22:case 23:return uf(),h=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(si&1073741824)!==0&&(Pn(o),o.subtreeFlags&6&&(o.flags|=8192)):Pn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function qM(r,o){switch(vd(o),o.tag){case 1:return jn(o.type)&&Pc(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return zo(),Xt($n),Xt(bn),Pd(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return bd(o),null;case 13:if(Xt(Zt),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Oo()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return Xt(Zt),null;case 4:return zo(),null;case 10:return Md(o.type._context),null;case 22:case 23:return uf(),null;case 24:return null;default:return null}}var Jc=!1,Nn=!1,YM=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Vo(r,o){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){tn(r,o,h)}else l.current=null}function Jd(r,o,l){try{l()}catch(h){tn(r,o,h)}}var Lv=!1;function KM(r,o){if(cd=_c,r=d_(),td(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,D=-1,k=-1,Q=0,ye=0,Ee=r,ge=null;t:for(;;){for(var Le;Ee!==l||p!==0&&Ee.nodeType!==3||(D=T+p),Ee!==v||h!==0&&Ee.nodeType!==3||(k=T+h),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(Le=Ee.firstChild)!==null;)ge=Ee,Ee=Le;for(;;){if(Ee===r)break t;if(ge===l&&++Q===p&&(D=T),ge===v&&++ye===h&&(k=T),(Le=Ee.nextSibling)!==null)break;Ee=ge,ge=Ee.parentNode}Ee=Le}l=D===-1||k===-1?null:{start:D,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(ud={focusedElem:r,selectionRange:l},_c=!1,Be=o;Be!==null;)if(o=Be,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,Be=r;else for(;Be!==null;){o=Be;try{var Ge=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var We=Ge.memoizedProps,sn=Ge.memoizedState,j=o.stateNode,V=j.getSnapshotBeforeUpdate(o.elementType===o.type?We:Ti(o.type,We),sn);j.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Y=o.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){tn(o,o.return,Me)}if(r=o.sibling,r!==null){r.return=o.return,Be=r;break}Be=o.return}return Ge=Lv,Lv=!1,Ge}function ul(r,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&r)===r){var v=p.destroy;p.destroy=void 0,v!==void 0&&Jd(o,l,v)}p=p.next}while(p!==h)}}function Qc(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&r)===r){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Qd(r){var o=r.ref;if(o!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof o=="function"?o(r):o.current=r}}function Uv(r){var o=r.alternate;o!==null&&(r.alternate=null,Uv(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[Vi],delete o[Za],delete o[pd],delete o[NM],delete o[DM])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Ov(r){return r.tag===5||r.tag===3||r.tag===4}function kv(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Ov(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Zd(r,o,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(r,o):l.insertBefore(r,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(r,l)):(o=l,o.appendChild(r)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=bc));else if(h!==4&&(r=r.child,r!==null))for(Zd(r,o,l),r=r.sibling;r!==null;)Zd(r,o,l),r=r.sibling}function ef(r,o,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,o?l.insertBefore(r,o):l.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(ef(r,o,l),r=r.sibling;r!==null;)ef(r,o,l),r=r.sibling}var Mn=null,Mi=!1;function ts(r,o,l){for(l=l.child;l!==null;)Fv(r,o,l),l=l.sibling}function Fv(r,o,l){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(it,l)}catch{}switch(l.tag){case 5:Nn||Vo(l,o);case 6:var h=Mn,p=Mi;Mn=null,ts(r,o,l),Mn=h,Mi=p,Mn!==null&&(Mi?(r=Mn,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Mn.removeChild(l.stateNode));break;case 18:Mn!==null&&(Mi?(r=Mn,l=l.stateNode,r.nodeType===8?fd(r.parentNode,l):r.nodeType===1&&fd(r,l),Va(r)):fd(Mn,l.stateNode));break;case 4:h=Mn,p=Mi,Mn=l.stateNode.containerInfo,Mi=!0,ts(r,o,l),Mn=h,Mi=p;break;case 0:case 11:case 14:case 15:if(!Nn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&Jd(l,o,T),p=p.next}while(p!==h)}ts(r,o,l);break;case 1:if(!Nn&&(Vo(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(D){tn(l,o,D)}ts(r,o,l);break;case 21:ts(r,o,l);break;case 22:l.mode&1?(Nn=(h=Nn)||l.memoizedState!==null,ts(r,o,l),Nn=h):ts(r,o,l);break;default:ts(r,o,l)}}function Bv(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new YM),o.forEach(function(h){var p=sw.bind(null,r,h);l.has(h)||(l.add(h),h.then(p,p))})}}function wi(r,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var v=r,T=o,D=T;e:for(;D!==null;){switch(D.tag){case 5:Mn=D.stateNode,Mi=!1;break e;case 3:Mn=D.stateNode.containerInfo,Mi=!0;break e;case 4:Mn=D.stateNode.containerInfo,Mi=!0;break e}D=D.return}if(Mn===null)throw Error(t(160));Fv(v,T,p),Mn=null,Mi=!1;var k=p.alternate;k!==null&&(k.return=null),p.return=null}catch(Q){tn(p,o,Q)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)zv(o,r),o=o.sibling}function zv(r,o){var l=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(wi(o,r),Xi(r),h&4){try{ul(3,r,r.return),Qc(3,r)}catch(We){tn(r,r.return,We)}try{ul(5,r,r.return)}catch(We){tn(r,r.return,We)}}break;case 1:wi(o,r),Xi(r),h&512&&l!==null&&Vo(l,l.return);break;case 5:if(wi(o,r),Xi(r),h&512&&l!==null&&Vo(l,l.return),r.flags&32){var p=r.stateNode;try{Re(p,"")}catch(We){tn(r,r.return,We)}}if(h&4&&(p=r.stateNode,p!=null)){var v=r.memoizedProps,T=l!==null?l.memoizedProps:v,D=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{D==="input"&&v.type==="radio"&&v.name!=null&&Et(p,v),Ae(D,T);var Q=Ae(D,v);for(T=0;T<k.length;T+=2){var ye=k[T],Ee=k[T+1];ye==="style"?Ue(p,Ee):ye==="dangerouslySetInnerHTML"?qe(p,Ee):ye==="children"?Re(p,Ee):I(p,ye,Ee,Q)}switch(D){case"input":Pt(p,v);break;case"textarea":w(p,v);break;case"select":var ge=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Le=v.value;Le!=null?ot(p,!!v.multiple,Le,!1):ge!==!!v.multiple&&(v.defaultValue!=null?ot(p,!!v.multiple,v.defaultValue,!0):ot(p,!!v.multiple,v.multiple?[]:"",!1))}p[Za]=v}catch(We){tn(r,r.return,We)}}break;case 6:if(wi(o,r),Xi(r),h&4){if(r.stateNode===null)throw Error(t(162));p=r.stateNode,v=r.memoizedProps;try{p.nodeValue=v}catch(We){tn(r,r.return,We)}}break;case 3:if(wi(o,r),Xi(r),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Va(o.containerInfo)}catch(We){tn(r,r.return,We)}break;case 4:wi(o,r),Xi(r);break;case 13:wi(o,r),Xi(r),p=r.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(rf=q())),h&4&&Bv(r);break;case 22:if(ye=l!==null&&l.memoizedState!==null,r.mode&1?(Nn=(Q=Nn)||ye,wi(o,r),Nn=Q):wi(o,r),Xi(r),h&8192){if(Q=r.memoizedState!==null,(r.stateNode.isHidden=Q)&&!ye&&(r.mode&1)!==0)for(Be=r,ye=r.child;ye!==null;){for(Ee=Be=ye;Be!==null;){switch(ge=Be,Le=ge.child,ge.tag){case 0:case 11:case 14:case 15:ul(4,ge,ge.return);break;case 1:Vo(ge,ge.return);var Ge=ge.stateNode;if(typeof Ge.componentWillUnmount=="function"){h=ge,l=ge.return;try{o=h,Ge.props=o.memoizedProps,Ge.state=o.memoizedState,Ge.componentWillUnmount()}catch(We){tn(h,l,We)}}break;case 5:Vo(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Gv(Ee);continue}}Le!==null?(Le.return=ge,Be=Le):Gv(Ee)}ye=ye.sibling}e:for(ye=null,Ee=r;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{p=Ee.stateNode,Q?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(D=Ee.stateNode,k=Ee.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=ve("display",T))}catch(We){tn(r,r.return,We)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=Q?"":Ee.memoizedProps}catch(We){tn(r,r.return,We)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===r)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===r)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===r)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:wi(o,r),Xi(r),h&4&&Bv(r);break;case 21:break;default:wi(o,r),Xi(r)}}function Xi(r){var o=r.flags;if(o&2){try{e:{for(var l=r.return;l!==null;){if(Ov(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Re(p,""),h.flags&=-33);var v=kv(r);ef(r,v,p);break;case 3:case 4:var T=h.stateNode.containerInfo,D=kv(r);Zd(r,D,T);break;default:throw Error(t(161))}}catch(k){tn(r,r.return,k)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function JM(r,o,l){Be=r,Hv(r)}function Hv(r,o,l){for(var h=(r.mode&1)!==0;Be!==null;){var p=Be,v=p.child;if(p.tag===22&&h){var T=p.memoizedState!==null||Jc;if(!T){var D=p.alternate,k=D!==null&&D.memoizedState!==null||Nn;D=Jc;var Q=Nn;if(Jc=T,(Nn=k)&&!Q)for(Be=p;Be!==null;)T=Be,k=T.child,T.tag===22&&T.memoizedState!==null?Wv(p):k!==null?(k.return=T,Be=k):Wv(p);for(;v!==null;)Be=v,Hv(v),v=v.sibling;Be=p,Jc=D,Nn=Q}Vv(r)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Be=v):Vv(r)}}function Vv(r){for(;Be!==null;){var o=Be;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Nn||Qc(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Nn)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:Ti(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=o.updateQueue;v!==null&&G_(o,v,h);break;case 3:var T=o.updateQueue;if(T!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}G_(o,T,l)}break;case 5:var D=o.stateNode;if(l===null&&o.flags&4){l=D;var k=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var Q=o.alternate;if(Q!==null){var ye=Q.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&Va(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Nn||o.flags&512&&Qd(o)}catch(ge){tn(o,o.return,ge)}}if(o===r){Be=null;break}if(l=o.sibling,l!==null){l.return=o.return,Be=l;break}Be=o.return}}function Gv(r){for(;Be!==null;){var o=Be;if(o===r){Be=null;break}var l=o.sibling;if(l!==null){l.return=o.return,Be=l;break}Be=o.return}}function Wv(r){for(;Be!==null;){var o=Be;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{Qc(4,o)}catch(k){tn(o,l,k)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(k){tn(o,p,k)}}var v=o.return;try{Qd(o)}catch(k){tn(o,v,k)}break;case 5:var T=o.return;try{Qd(o)}catch(k){tn(o,T,k)}}}catch(k){tn(o,o.return,k)}if(o===r){Be=null;break}var D=o.sibling;if(D!==null){D.return=o.return,Be=D;break}Be=o.return}}var QM=Math.ceil,Zc=A.ReactCurrentDispatcher,tf=A.ReactCurrentOwner,fi=A.ReactCurrentBatchConfig,wt=0,vn=null,on=null,wn=0,si=0,Go=Kr(0),cn=0,hl=null,zs=0,eu=0,nf=0,dl=null,Yn=null,rf=0,Wo=1/0,gr=null,tu=!1,sf=null,ns=null,nu=!1,is=null,iu=0,fl=0,of=null,ru=-1,su=0;function Hn(){return(wt&6)!==0?q():ru!==-1?ru:ru=q()}function rs(r){return(r.mode&1)===0?1:(wt&2)!==0&&wn!==0?wn&-wn:UM.transition!==null?(su===0&&(su=Ht()),su):(r=Mt,r!==0||(r=window.event,r=r===void 0?16:$g(r.type)),r)}function Ci(r,o,l,h){if(50<fl)throw fl=0,of=null,Error(t(185));mn(r,l,h),((wt&2)===0||r!==vn)&&(r===vn&&((wt&2)===0&&(eu|=l),cn===4&&ss(r,wn)),Kn(r,h),l===1&&wt===0&&(o.mode&1)===0&&(Wo=q()+500,Dc&&Qr()))}function Kn(r,o){var l=r.callbackNode;Bn(r,o);var h=pn(r,r===vn?wn:0);if(h===0)l!==null&&C(l),r.callbackNode=null,r.callbackPriority=0;else if(o=h&-h,r.callbackPriority!==o){if(l!=null&&C(l),o===1)r.tag===0?LM($v.bind(null,r)):P_($v.bind(null,r)),IM(function(){(wt&6)===0&&Qr()}),l=null;else{switch(Hi(h)){case 1:l=Te;break;case 4:l=Ie;break;case 16:l=Fe;break;case 536870912:l=rt;break;default:l=Fe}l=ey(l,Xv.bind(null,r))}r.callbackPriority=o,r.callbackNode=l}}function Xv(r,o){if(ru=-1,su=0,(wt&6)!==0)throw Error(t(327));var l=r.callbackNode;if(Xo()&&r.callbackNode!==l)return null;var h=pn(r,r===vn?wn:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||o)o=ou(r,h);else{o=h;var p=wt;wt|=2;var v=qv();(vn!==r||wn!==o)&&(gr=null,Wo=q()+500,Vs(r,o));do try{tw();break}catch(D){jv(r,D)}while(!0);Td(),Zc.current=v,wt=p,on!==null?o=0:(vn=null,wn=0,o=cn)}if(o!==0){if(o===2&&(p=lr(r),p!==0&&(h=p,o=af(r,p))),o===1)throw l=hl,Vs(r,0),ss(r,h),Kn(r,q()),l;if(o===6)ss(r,h);else{if(p=r.current.alternate,(h&30)===0&&!ZM(p)&&(o=ou(r,h),o===2&&(v=lr(r),v!==0&&(h=v,o=af(r,v))),o===1))throw l=hl,Vs(r,0),ss(r,h),Kn(r,q()),l;switch(r.finishedWork=p,r.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Gs(r,Yn,gr);break;case 3:if(ss(r,h),(h&130023424)===h&&(o=rf+500-q(),10<o)){if(pn(r,0)!==0)break;if(p=r.suspendedLanes,(p&h)!==h){Hn(),r.pingedLanes|=r.suspendedLanes&p;break}r.timeoutHandle=dd(Gs.bind(null,r,Yn,gr),o);break}Gs(r,Yn,gr);break;case 4:if(ss(r,h),(h&4194240)===h)break;for(o=r.eventTimes,p=-1;0<h;){var T=31-ht(h);v=1<<T,T=o[T],T>p&&(p=T),h&=~v}if(h=p,h=q()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*QM(h/1960))-h,10<h){r.timeoutHandle=dd(Gs.bind(null,r,Yn,gr),h);break}Gs(r,Yn,gr);break;case 5:Gs(r,Yn,gr);break;default:throw Error(t(329))}}}return Kn(r,q()),r.callbackNode===l?Xv.bind(null,r):null}function af(r,o){var l=dl;return r.current.memoizedState.isDehydrated&&(Vs(r,o).flags|=256),r=ou(r,o),r!==2&&(o=Yn,Yn=l,o!==null&&lf(o)),r}function lf(r){Yn===null?Yn=r:Yn.push.apply(Yn,r)}function ZM(r){for(var o=r;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],v=p.getSnapshot;p=p.value;try{if(!Ei(v(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ss(r,o){for(o&=~nf,o&=~eu,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var l=31-ht(o),h=1<<l;r[l]=-1,o&=~h}}function $v(r){if((wt&6)!==0)throw Error(t(327));Xo();var o=pn(r,0);if((o&1)===0)return Kn(r,q()),null;var l=ou(r,o);if(r.tag!==0&&l===2){var h=lr(r);h!==0&&(o=h,l=af(r,h))}if(l===1)throw l=hl,Vs(r,0),ss(r,o),Kn(r,q()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,Gs(r,Yn,gr),Kn(r,q()),null}function cf(r,o){var l=wt;wt|=1;try{return r(o)}finally{wt=l,wt===0&&(Wo=q()+500,Dc&&Qr())}}function Hs(r){is!==null&&is.tag===0&&(wt&6)===0&&Xo();var o=wt;wt|=1;var l=fi.transition,h=Mt;try{if(fi.transition=null,Mt=1,r)return r()}finally{Mt=h,fi.transition=l,wt=o,(wt&6)===0&&Qr()}}function uf(){si=Go.current,Xt(Go)}function Vs(r,o){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,bM(l)),on!==null)for(l=on.return;l!==null;){var h=l;switch(vd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Pc();break;case 3:zo(),Xt($n),Xt(bn),Pd();break;case 5:bd(h);break;case 4:zo();break;case 13:Xt(Zt);break;case 19:Xt(Zt);break;case 10:Md(h.type._context);break;case 22:case 23:uf()}l=l.return}if(vn=r,on=r=os(r.current,null),wn=si=o,cn=0,hl=null,nf=eu=zs=0,Yn=dl=null,ks!==null){for(o=0;o<ks.length;o++)if(l=ks[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,v=l.pending;if(v!==null){var T=v.next;v.next=p,h.next=T}l.pending=h}ks=null}return r}function jv(r,o){do{var l=on;try{if(Td(),Gc.current=jc,Wc){for(var h=en.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Wc=!1}if(Bs=0,_n=ln=en=null,sl=!1,ol=0,tf.current=null,l===null||l.return===null){cn=1,hl=o,on=null;break}e:{var v=r,T=l.return,D=l,k=o;if(o=wn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var Q=k,ye=D,Ee=ye.tag;if((ye.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ge=ye.alternate;ge?(ye.updateQueue=ge.updateQueue,ye.memoizedState=ge.memoizedState,ye.lanes=ge.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Le=vv(T);if(Le!==null){Le.flags&=-257,yv(Le,T,D,v,o),Le.mode&1&&_v(v,Q,o),o=Le,k=Q;var Ge=o.updateQueue;if(Ge===null){var We=new Set;We.add(k),o.updateQueue=We}else Ge.add(k);break e}else{if((o&1)===0){_v(v,Q,o),hf();break e}k=Error(t(426))}}else if(Kt&&D.mode&1){var sn=vv(T);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),yv(sn,T,D,v,o),Ed(Ho(k,D));break e}}v=k=Ho(k,D),cn!==4&&(cn=2),dl===null?dl=[v]:dl.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,o&=-o,v.lanes|=o;var j=mv(v,k,o);V_(v,j);break e;case 1:D=k;var V=v.type,Y=v.stateNode;if((v.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(ns===null||!ns.has(Y)))){v.flags|=65536,o&=-o,v.lanes|=o;var Me=gv(v,D,o);V_(v,Me);break e}}v=v.return}while(v!==null)}Kv(l)}catch(je){o=je,on===l&&l!==null&&(on=l=l.return);continue}break}while(!0)}function qv(){var r=Zc.current;return Zc.current=jc,r===null?jc:r}function hf(){(cn===0||cn===3||cn===2)&&(cn=4),vn===null||(zs&268435455)===0&&(eu&268435455)===0||ss(vn,wn)}function ou(r,o){var l=wt;wt|=2;var h=qv();(vn!==r||wn!==o)&&(gr=null,Vs(r,o));do try{ew();break}catch(p){jv(r,p)}while(!0);if(Td(),wt=l,Zc.current=h,on!==null)throw Error(t(261));return vn=null,wn=0,cn}function ew(){for(;on!==null;)Yv(on)}function tw(){for(;on!==null&&!X();)Yv(on)}function Yv(r){var o=Zv(r.alternate,r,si);r.memoizedProps=r.pendingProps,o===null?Kv(r):on=o,tf.current=null}function Kv(r){var o=r;do{var l=o.alternate;if(r=o.return,(o.flags&32768)===0){if(l=jM(l,o,si),l!==null){on=l;return}}else{if(l=qM(l,o),l!==null){l.flags&=32767,on=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{cn=6,on=null;return}}if(o=o.sibling,o!==null){on=o;return}on=o=r}while(o!==null);cn===0&&(cn=5)}function Gs(r,o,l){var h=Mt,p=fi.transition;try{fi.transition=null,Mt=1,nw(r,o,l,h)}finally{fi.transition=p,Mt=h}return null}function nw(r,o,l,h){do Xo();while(is!==null);if((wt&6)!==0)throw Error(t(327));l=r.finishedWork;var p=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var v=l.lanes|l.childLanes;if(Tn(r,v),r===vn&&(on=vn=null,wn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||nu||(nu=!0,ey(Fe,function(){return Xo(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=fi.transition,fi.transition=null;var T=Mt;Mt=1;var D=wt;wt|=4,tf.current=null,KM(r,l),zv(l,r),xM(ud),_c=!!cd,ud=cd=null,r.current=l,JM(l),Z(),wt=D,Mt=T,fi.transition=v}else r.current=l;if(nu&&(nu=!1,is=r,iu=p),v=r.pendingLanes,v===0&&(ns=null),ft(l.stateNode),Kn(r,q()),o!==null)for(h=r.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(tu)throw tu=!1,r=sf,sf=null,r;return(iu&1)!==0&&r.tag!==0&&Xo(),v=r.pendingLanes,(v&1)!==0?r===of?fl++:(fl=0,of=r):fl=0,Qr(),null}function Xo(){if(is!==null){var r=Hi(iu),o=fi.transition,l=Mt;try{if(fi.transition=null,Mt=16>r?16:r,is===null)var h=!1;else{if(r=is,is=null,iu=0,(wt&6)!==0)throw Error(t(331));var p=wt;for(wt|=4,Be=r.current;Be!==null;){var v=Be,T=v.child;if((Be.flags&16)!==0){var D=v.deletions;if(D!==null){for(var k=0;k<D.length;k++){var Q=D[k];for(Be=Q;Be!==null;){var ye=Be;switch(ye.tag){case 0:case 11:case 15:ul(8,ye,v)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,Be=Ee;else for(;Be!==null;){ye=Be;var ge=ye.sibling,Le=ye.return;if(Uv(ye),ye===Q){Be=null;break}if(ge!==null){ge.return=Le,Be=ge;break}Be=Le}}}var Ge=v.alternate;if(Ge!==null){var We=Ge.child;if(We!==null){Ge.child=null;do{var sn=We.sibling;We.sibling=null,We=sn}while(We!==null)}}Be=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,Be=T;else e:for(;Be!==null;){if(v=Be,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ul(9,v,v.return)}var j=v.sibling;if(j!==null){j.return=v.return,Be=j;break e}Be=v.return}}var V=r.current;for(Be=V;Be!==null;){T=Be;var Y=T.child;if((T.subtreeFlags&2064)!==0&&Y!==null)Y.return=T,Be=Y;else e:for(T=V;Be!==null;){if(D=Be,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Qc(9,D)}}catch(je){tn(D,D.return,je)}if(D===T){Be=null;break e}var Me=D.sibling;if(Me!==null){Me.return=D.return,Be=Me;break e}Be=D.return}}if(wt=p,Qr(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(it,r)}catch{}h=!0}return h}finally{Mt=l,fi.transition=o}}return!1}function Jv(r,o,l){o=Ho(l,o),o=mv(r,o,1),r=es(r,o,1),o=Hn(),r!==null&&(mn(r,1,o),Kn(r,o))}function tn(r,o,l){if(r.tag===3)Jv(r,r,l);else for(;o!==null;){if(o.tag===3){Jv(o,r,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(ns===null||!ns.has(h))){r=Ho(l,r),r=gv(o,r,1),o=es(o,r,1),r=Hn(),o!==null&&(mn(o,1,r),Kn(o,r));break}}o=o.return}}function iw(r,o,l){var h=r.pingCache;h!==null&&h.delete(o),o=Hn(),r.pingedLanes|=r.suspendedLanes&l,vn===r&&(wn&l)===l&&(cn===4||cn===3&&(wn&130023424)===wn&&500>q()-rf?Vs(r,0):nf|=l),Kn(r,o)}function Qv(r,o){o===0&&((r.mode&1)===0?o=1:(o=Ot,Ot<<=1,(Ot&130023424)===0&&(Ot=4194304)));var l=Hn();r=fr(r,o),r!==null&&(mn(r,o,l),Kn(r,l))}function rw(r){var o=r.memoizedState,l=0;o!==null&&(l=o.retryLane),Qv(r,l)}function sw(r,o){var l=0;switch(r.tag){case 13:var h=r.stateNode,p=r.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),Qv(r,l)}var Zv;Zv=function(r,o,l){if(r!==null)if(r.memoizedProps!==o.pendingProps||$n.current)qn=!0;else{if((r.lanes&l)===0&&(o.flags&128)===0)return qn=!1,$M(r,o,l);qn=(r.flags&131072)!==0}else qn=!1,Kt&&(o.flags&1048576)!==0&&N_(o,Uc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;Kc(r,o),r=o.pendingProps;var p=Do(o,bn.current);Bo(o,l),p=Ld(null,o,h,r,p,l);var v=Ud();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,jn(h)?(v=!0,Nc(o)):v=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Rd(o),p.updater=qc,o.stateNode=p,p._reactInternals=o,Hd(o,h,r,l),o=Xd(null,o,h,!0,v,l)):(o.tag=0,Kt&&v&&_d(o),zn(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(Kc(r,o),r=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=aw(h),r=Ti(h,r),p){case 0:o=Wd(null,o,h,r,l);break e;case 1:o=wv(null,o,h,r,l);break e;case 11:o=Sv(null,o,h,r,l);break e;case 14:o=Ev(null,o,h,Ti(h.type,r),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Ti(h,p),Wd(r,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Ti(h,p),wv(r,o,h,p,l);case 3:e:{if(Cv(o),r===null)throw Error(t(387));h=o.pendingProps,v=o.memoizedState,p=v.element,H_(r,o),Hc(o,h,null,l);var T=o.memoizedState;if(h=T.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=v,o.memoizedState=v,o.flags&256){p=Ho(Error(t(423)),o),o=Rv(r,o,h,l,p);break e}else if(h!==p){p=Ho(Error(t(424)),o),o=Rv(r,o,h,l,p);break e}else for(ri=Yr(o.stateNode.containerInfo.firstChild),ii=o,Kt=!0,xi=null,l=B_(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Oo(),h===p){o=mr(r,o,l);break e}zn(r,o,h,l)}o=o.child}return o;case 5:return W_(o),r===null&&Sd(o),h=o.type,p=o.pendingProps,v=r!==null?r.memoizedProps:null,T=p.children,hd(h,p)?T=null:v!==null&&hd(h,v)&&(o.flags|=32),Mv(r,o),zn(r,o,T,l),o.child;case 6:return r===null&&Sd(o),null;case 13:return Av(r,o,l);case 4:return Ad(o,o.stateNode.containerInfo),h=o.pendingProps,r===null?o.child=ko(o,null,h,l):zn(r,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Ti(h,p),Sv(r,o,h,p,l);case 7:return zn(r,o,o.pendingProps,l),o.child;case 8:return zn(r,o,o.pendingProps.children,l),o.child;case 12:return zn(r,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,v=o.memoizedProps,T=p.value,Gt(Fc,h._currentValue),h._currentValue=T,v!==null)if(Ei(v.value,T)){if(v.children===p.children&&!$n.current){o=mr(r,o,l);break e}}else for(v=o.child,v!==null&&(v.return=o);v!==null;){var D=v.dependencies;if(D!==null){T=v.child;for(var k=D.firstContext;k!==null;){if(k.context===h){if(v.tag===1){k=pr(-1,l&-l),k.tag=2;var Q=v.updateQueue;if(Q!==null){Q=Q.shared;var ye=Q.pending;ye===null?k.next=k:(k.next=ye.next,ye.next=k),Q.pending=k}}v.lanes|=l,k=v.alternate,k!==null&&(k.lanes|=l),wd(v.return,l,o),D.lanes|=l;break}k=k.next}}else if(v.tag===10)T=v.type===o.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,D=T.alternate,D!==null&&(D.lanes|=l),wd(T,l,o),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===o){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}zn(r,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,Bo(o,l),p=hi(p),h=h(p),o.flags|=1,zn(r,o,h,l),o.child;case 14:return h=o.type,p=Ti(h,o.pendingProps),p=Ti(h.type,p),Ev(r,o,h,p,l);case 15:return xv(r,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Ti(h,p),Kc(r,o),o.tag=1,jn(h)?(r=!0,Nc(o)):r=!1,Bo(o,l),fv(o,h,p),Hd(o,h,p,l),Xd(null,o,h,!0,r,l);case 19:return Iv(r,o,l);case 22:return Tv(r,o,l)}throw Error(t(156,o.tag))};function ey(r,o){return pc(r,o)}function ow(r,o,l,h){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(r,o,l,h){return new ow(r,o,l,h)}function df(r){return r=r.prototype,!(!r||!r.isReactComponent)}function aw(r){if(typeof r=="function")return df(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ae)return 11;if(r===pe)return 14}return 2}function os(r,o){var l=r.alternate;return l===null?(l=pi(r.tag,o,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=o,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,o=r.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function au(r,o,l,h,p,v){var T=2;if(h=r,typeof r=="function")df(r)&&(T=1);else if(typeof r=="string")T=5;else e:switch(r){case U:return Ws(l.children,p,v,o);case W:T=8,p|=8;break;case b:return r=pi(12,l,o,p|2),r.elementType=b,r.lanes=v,r;case ee:return r=pi(13,l,o,p),r.elementType=ee,r.lanes=v,r;case he:return r=pi(19,l,o,p),r.elementType=he,r.lanes=v,r;case ce:return lu(l,p,v,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case R:T=10;break e;case B:T=9;break e;case ae:T=11;break e;case pe:T=14;break e;case se:T=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=pi(T,l,o,p),o.elementType=r,o.type=h,o.lanes=v,o}function Ws(r,o,l,h){return r=pi(7,r,h,o),r.lanes=l,r}function lu(r,o,l,h){return r=pi(22,r,h,o),r.elementType=ce,r.lanes=l,r.stateNode={isHidden:!1},r}function ff(r,o,l){return r=pi(6,r,null,o),r.lanes=l,r}function pf(r,o,l){return o=pi(4,r.children!==null?r.children:[],r.key,o),o.lanes=l,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function lw(r,o,l,h,p){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=An(0),this.expirationTimes=An(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function mf(r,o,l,h,p,v,T,D,k){return r=new lw(r,o,l,D,k),o===1?(o=1,v===!0&&(o|=8)):o=0,v=pi(3,null,null,o),r.current=v,v.stateNode=r,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rd(v),r}function cw(r,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:h==null?null:""+h,children:r,containerInfo:o,implementation:l}}function ty(r){if(!r)return Jr;r=r._reactInternals;e:{if(zi(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(jn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(jn(l))return b_(r,l,o)}return o}function ny(r,o,l,h,p,v,T,D,k){return r=mf(l,h,!0,r,p,v,T,D,k),r.context=ty(null),l=r.current,h=Hn(),p=rs(l),v=pr(h,p),v.callback=o??null,es(l,v,p),r.current.lanes=p,mn(r,p,h),Kn(r,h),r}function cu(r,o,l,h){var p=o.current,v=Hn(),T=rs(p);return l=ty(l),o.context===null?o.context=l:o.pendingContext=l,o=pr(v,T),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=es(p,o,T),r!==null&&(Ci(r,p,T,v),zc(r,p,T)),T}function uu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function iy(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<o?l:o}}function gf(r,o){iy(r,o),(r=r.alternate)&&iy(r,o)}function uw(){return null}var ry=typeof reportError=="function"?reportError:function(r){console.error(r)};function _f(r){this._internalRoot=r}hu.prototype.render=_f.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));cu(r,o,null,null)},hu.prototype.unmount=_f.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;Hs(function(){cu(null,r,null,null)}),o[cr]=null}};function hu(r){this._internalRoot=r}hu.prototype.unstable_scheduleHydration=function(r){if(r){var o=Hg();r={blockedOn:null,target:r,priority:o};for(var l=0;l<$r.length&&o!==0&&o<$r[l].priority;l++);$r.splice(l,0,r),l===0&&Wg(r)}};function vf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function du(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function sy(){}function hw(r,o,l,h,p){if(p){if(typeof h=="function"){var v=h;h=function(){var Q=uu(T);v.call(Q)}}var T=ny(o,h,r,0,null,!1,!1,"",sy);return r._reactRootContainer=T,r[cr]=T.current,Ja(r.nodeType===8?r.parentNode:r),Hs(),T}for(;p=r.lastChild;)r.removeChild(p);if(typeof h=="function"){var D=h;h=function(){var Q=uu(k);D.call(Q)}}var k=mf(r,0,!1,null,null,!1,!1,"",sy);return r._reactRootContainer=k,r[cr]=k.current,Ja(r.nodeType===8?r.parentNode:r),Hs(function(){cu(o,k,l,h)}),k}function fu(r,o,l,h,p){var v=l._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var D=p;p=function(){var k=uu(T);D.call(k)}}cu(o,T,r,p)}else T=hw(l,o,r,p,h);return uu(T)}Bg=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var l=pt(o.pendingLanes);l!==0&&(gn(o,l|1),Kn(o,q()),(wt&6)===0&&(Wo=q()+500,Qr()))}break;case 13:Hs(function(){var h=fr(r,1);if(h!==null){var p=Hn();Ci(h,r,1,p)}}),gf(r,1)}},Vh=function(r){if(r.tag===13){var o=fr(r,134217728);if(o!==null){var l=Hn();Ci(o,r,134217728,l)}gf(r,134217728)}},zg=function(r){if(r.tag===13){var o=rs(r),l=fr(r,o);if(l!==null){var h=Hn();Ci(l,r,o,h)}gf(r,o)}},Hg=function(){return Mt},Vg=function(r,o){var l=Mt;try{return Mt=r,o()}finally{Mt=l}},be=function(r,o,l){switch(o){case"input":if(Pt(r,l),o=l.name,l.type==="radio"&&o!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==r&&h.form===r.form){var p=Ic(h);if(!p)throw Error(t(90));Vt(h),Pt(h,p)}}}break;case"textarea":w(r,l);break;case"select":o=l.value,o!=null&&ot(r,!!l.multiple,o,!1)}},ct=cf,Ut=Hs;var dw={usingClientEntryPoint:!1,Events:[el,Po,Ic,fe,He,cf]},pl={findFiberByHostInstance:Ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fw={bundleType:pl.bundleType,version:pl.version,rendererPackageName:pl.rendererPackageName,rendererConfig:pl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=dc(r),r===null?null:r.stateNode},findFiberByHostInstance:pl.findFiberByHostInstance||uw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{it=pu.inject(fw),Ve=pu}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dw,Jn.createPortal=function(r,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vf(o))throw Error(t(200));return cw(r,o,null,l)},Jn.createRoot=function(r,o){if(!vf(r))throw Error(t(299));var l=!1,h="",p=ry;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=mf(r,1,!1,null,null,l,!1,h,p),r[cr]=o.current,Ja(r.nodeType===8?r.parentNode:r),new _f(o)},Jn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=dc(o),r=r===null?null:r.stateNode,r},Jn.flushSync=function(r){return Hs(r)},Jn.hydrate=function(r,o,l){if(!du(o))throw Error(t(200));return fu(null,r,o,!0,l)},Jn.hydrateRoot=function(r,o,l){if(!vf(r))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,v="",T=ry;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),o=ny(o,null,r,1,l??null,p,!1,v,T),r[cr]=o.current,Ja(r),h)for(r=0;r<h.length;r++)l=h[r],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new hu(o)},Jn.render=function(r,o,l){if(!du(o))throw Error(t(200));return fu(null,r,o,!1,l)},Jn.unmountComponentAtNode=function(r){if(!du(r))throw Error(t(40));return r._reactRootContainer?(Hs(function(){fu(null,null,r,!1,function(){r._reactRootContainer=null,r[cr]=null})}),!0):!1},Jn.unstable_batchedUpdates=cf,Jn.unstable_renderSubtreeIntoContainer=function(r,o,l,h){if(!du(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return fu(r,o,l,!1,h)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var fy;function Tw(){if(fy)return Ef.exports;fy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ef.exports=xw(),Ef.exports}var py;function Mw(){if(py)return mu;py=1;var n=Tw();return mu.createRoot=n.createRoot,mu.hydrateRoot=n.hydrateRoot,mu}var ww=Mw();/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var my="popstate";function Cw(n={}){function e(s,a){let{pathname:c="/",search:u="",hash:d=""}=_o(s.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Sp("",{pathname:c,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){let c=s.document.querySelector("base"),u="";if(c&&c.getAttribute("href")){let d=s.location.href,f=d.indexOf("#");u=f===-1?d:d.slice(0,f)}return u+"#"+(typeof a=="string"?a:Ll(a))}function i(s,a){yi(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return Aw(e,t,i,n)}function Jt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function yi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Rw(){return Math.random().toString(36).substring(2,10)}function gy(n,e){return{usr:n.state,key:n.key,idx:e}}function Sp(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?_o(e):e,state:t,key:e&&e.key||i||Rw()}}function Ll({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function _o(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function Aw(n,e,t,i={}){let{window:s=document.defaultView,v5Compat:a=!1}=i,c=s.history,u="POP",d=null,f=m();f==null&&(f=0,c.replaceState({...c.state,idx:f},""));function m(){return(c.state||{idx:null}).idx}function g(){u="POP";let S=m(),y=S==null?null:S-f;f=S,d&&d({action:u,location:M.location,delta:y})}function _(S,y){u="PUSH";let P=Sp(M.location,S,y);t&&t(P,S),f=m()+1;let I=gy(P,f),A=M.createHref(P);try{c.pushState(I,"",A)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;s.location.assign(A)}a&&d&&d({action:u,location:M.location,delta:1})}function E(S,y){u="REPLACE";let P=Sp(M.location,S,y);t&&t(P,S),f=m();let I=gy(P,f),A=M.createHref(P);c.replaceState(I,"",A),a&&d&&d({action:u,location:M.location,delta:0})}function x(S){return bw(S)}let M={get action(){return u},get location(){return n(s,c)},listen(S){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(my,g),d=S,()=>{s.removeEventListener(my,g),d=null}},createHref(S){return e(s,S)},createURL:x,encodeLocation(S){let y=x(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:E,go(S){return c.go(S)}};return M}function bw(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:Ll(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function PS(n,e,t="/"){return Iw(n,e,t,!1)}function Iw(n,e,t,i){let s=typeof e=="string"?_o(e):e,a=Nr(s.pathname||"/",t);if(a==null)return null;let c=NS(n);Pw(c);let u=null;for(let d=0;u==null&&d<c.length;++d){let f=Vw(a);u=zw(c[d],f,i)}return u}function NS(n,e=[],t=[],i=""){let s=(a,c,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};d.relativePath.startsWith("/")&&(Jt(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length));let f=br([i,d.relativePath]),m=t.concat(d);a.children&&a.children.length>0&&(Jt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),NS(a.children,e,m,f)),!(a.path==null&&!a.index)&&e.push({path:f,score:Fw(f,a.index),routesMeta:m})};return n.forEach((a,c)=>{if(a.path===""||!a.path?.includes("?"))s(a,c);else for(let u of DS(a.path))s(a,c,u)}),e}function DS(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return s?[a,""]:[a];let c=DS(i.join("/")),u=[];return u.push(...c.map(d=>d===""?a:[a,d].join("/"))),s&&u.push(...c),u.map(d=>n.startsWith("/")&&d===""?"/":d)}function Pw(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Bw(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var Nw=/^:[\w-]+$/,Dw=3,Lw=2,Uw=1,Ow=10,kw=-2,_y=n=>n==="*";function Fw(n,e){let t=n.split("/"),i=t.length;return t.some(_y)&&(i+=kw),e&&(i+=Lw),t.filter(s=>!_y(s)).reduce((s,a)=>s+(Nw.test(a)?Dw:a===""?Uw:Ow),i)}function Bw(n,e){return n.length===e.length&&n.slice(0,-1).every((i,s)=>i===e[s])?n[n.length-1]-e[e.length-1]:0}function zw(n,e,t=!1){let{routesMeta:i}=n,s={},a="/",c=[];for(let u=0;u<i.length;++u){let d=i[u],f=u===i.length-1,m=a==="/"?e:e.slice(a.length)||"/",g=nh({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},m),_=d.route;if(!g&&f&&t&&!i[i.length-1].route.index&&(g=nh({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!g)return null;Object.assign(s,g.params),c.push({params:s,pathname:br([a,g.pathname]),pathnameBase:$w(br([a,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(a=br([a,g.pathnameBase]))}return c}function nh(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=Hw(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let a=s[0],c=a.replace(/(.)\/+$/,"$1"),u=s.slice(1);return{params:i.reduce((f,{paramName:m,isOptional:g},_)=>{if(m==="*"){let x=u[_]||"";c=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const E=u[_];return g&&!E?f[m]=void 0:f[m]=(E||"").replace(/%2F/g,"/"),f},{}),pathname:a,pathnameBase:c,pattern:n}}function Hw(n,e=!1,t=!0){yi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,d)=>(i.push({paramName:u,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function Vw(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return yi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Nr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function Gw(n,e="/"){let{pathname:t,search:i="",hash:s=""}=typeof n=="string"?_o(n):n;return{pathname:t?t.startsWith("/")?t:Ww(t,e):e,search:jw(i),hash:qw(s)}}function Ww(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Mf(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Xw(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pm(n){let e=Xw(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Nm(n,e,t,i=!1){let s;typeof n=="string"?s=_o(n):(s={...n},Jt(!s.pathname||!s.pathname.includes("?"),Mf("?","pathname","search",s)),Jt(!s.pathname||!s.pathname.includes("#"),Mf("#","pathname","hash",s)),Jt(!s.search||!s.search.includes("#"),Mf("#","search","hash",s)));let a=n===""||s.pathname==="",c=a?"/":s.pathname,u;if(c==null)u=t;else{let g=e.length-1;if(!i&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),g-=1;s.pathname=_.join("/")}u=g>=0?e[g]:"/"}let d=Gw(s,u),f=c&&c!=="/"&&c.endsWith("/"),m=(a||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(f||m)&&(d.pathname+="/"),d}var br=n=>n.join("/").replace(/\/\/+/g,"/"),$w=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),jw=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,qw=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Yw(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var LS=["POST","PUT","PATCH","DELETE"];new Set(LS);var Kw=["GET",...LS];new Set(Kw);var Aa=oe.createContext(null);Aa.displayName="DataRouter";var wh=oe.createContext(null);wh.displayName="DataRouterState";oe.createContext(!1);var US=oe.createContext({isTransitioning:!1});US.displayName="ViewTransition";var Jw=oe.createContext(new Map);Jw.displayName="Fetchers";var Qw=oe.createContext(null);Qw.displayName="Await";var Bi=oe.createContext(null);Bi.displayName="Navigation";var $l=oe.createContext(null);$l.displayName="Location";var rr=oe.createContext({outlet:null,matches:[],isDataRoute:!1});rr.displayName="Route";var Dm=oe.createContext(null);Dm.displayName="RouteError";function Zw(n,{relative:e}={}){Jt(ba(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=oe.useContext(Bi),{hash:s,pathname:a,search:c}=jl(n,{relative:e}),u=a;return t!=="/"&&(u=a==="/"?t:br([t,a])),i.createHref({pathname:u,search:c,hash:s})}function ba(){return oe.useContext($l)!=null}function bs(){return Jt(ba(),"useLocation() may be used only in the context of a <Router> component."),oe.useContext($l).location}var OS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kS(n){oe.useContext(Bi).static||oe.useLayoutEffect(n)}function FS(){let{isDataRoute:n}=oe.useContext(rr);return n?dC():eC()}function eC(){Jt(ba(),"useNavigate() may be used only in the context of a <Router> component.");let n=oe.useContext(Aa),{basename:e,navigator:t}=oe.useContext(Bi),{matches:i}=oe.useContext(rr),{pathname:s}=bs(),a=JSON.stringify(Pm(i)),c=oe.useRef(!1);return kS(()=>{c.current=!0}),oe.useCallback((d,f={})=>{if(yi(c.current,OS),!c.current)return;if(typeof d=="number"){t.go(d);return}let m=Nm(d,JSON.parse(a),s,f.relative==="path");n==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:br([e,m.pathname])),(f.replace?t.replace:t.push)(m,f.state,f)},[e,t,a,s,n])}oe.createContext(null);function jl(n,{relative:e}={}){let{matches:t}=oe.useContext(rr),{pathname:i}=bs(),s=JSON.stringify(Pm(t));return oe.useMemo(()=>Nm(n,JSON.parse(s),i,e==="path"),[n,s,i,e])}function tC(n,e){return BS(n,e)}function BS(n,e,t,i){Jt(ba(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=oe.useContext(Bi),{matches:a}=oe.useContext(rr),c=a[a.length-1],u=c?c.params:{},d=c?c.pathname:"/",f=c?c.pathnameBase:"/",m=c&&c.route;{let y=m&&m.path||"";zS(d,!m||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let g=bs(),_;if(e){let y=typeof e=="string"?_o(e):e;Jt(f==="/"||y.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${y.pathname}" was given in the \`location\` prop.`),_=y}else _=g;let E=_.pathname||"/",x=E;if(f!=="/"){let y=f.replace(/^\//,"").split("/");x="/"+E.replace(/^\//,"").split("/").slice(y.length).join("/")}let M=PS(n,{pathname:x});yi(m||M!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),yi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=oC(M&&M.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:br([f,s.encodeLocation?s.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?f:br([f,s.encodeLocation?s.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),a,t,i);return e&&S?oe.createElement($l.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},S):S}function nC(){let n=hC(),e=Yw(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=oe.createElement(oe.Fragment,null,oe.createElement("p",null,"💿 Hey developer 👋"),oe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",oe.createElement("code",{style:a},"ErrorBoundary")," or"," ",oe.createElement("code",{style:a},"errorElement")," prop on your route.")),oe.createElement(oe.Fragment,null,oe.createElement("h2",null,"Unexpected Application Error!"),oe.createElement("h3",{style:{fontStyle:"italic"}},e),t?oe.createElement("pre",{style:s},t):null,c)}var iC=oe.createElement(nC,null),rC=class extends oe.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?oe.createElement(rr.Provider,{value:this.props.routeContext},oe.createElement(Dm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function sC({routeContext:n,match:e,children:t}){let i=oe.useContext(Aa);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),oe.createElement(rr.Provider,{value:n},t)}function oC(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let s=n,a=t?.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&a?.[f.route.id]!==void 0);Jt(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(t)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:g}=t,_=f.route.loader&&!m.hasOwnProperty(f.route.id)&&(!g||g[f.route.id]===void 0);if(f.route.lazy||_){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,m)=>{let g,_=!1,E=null,x=null;t&&(g=a&&f.route.id?a[f.route.id]:void 0,E=f.route.errorElement||iC,c&&(u<0&&m===0?(zS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,x=null):u===m&&(_=!0,x=f.route.hydrateFallbackElement||null)));let M=e.concat(s.slice(0,m+1)),S=()=>{let y;return g?y=E:_?y=x:f.route.Component?y=oe.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,oe.createElement(sC,{match:f,routeContext:{outlet:d,matches:M,isDataRoute:t!=null},children:y})};return t&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?oe.createElement(rC,{location:t.location,revalidation:t.revalidation,component:E,error:g,children:S(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):S()},null)}function Lm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function aC(n){let e=oe.useContext(Aa);return Jt(e,Lm(n)),e}function lC(n){let e=oe.useContext(wh);return Jt(e,Lm(n)),e}function cC(n){let e=oe.useContext(rr);return Jt(e,Lm(n)),e}function Um(n){let e=cC(n),t=e.matches[e.matches.length-1];return Jt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function uC(){return Um("useRouteId")}function hC(){let n=oe.useContext(Dm),e=lC("useRouteError"),t=Um("useRouteError");return n!==void 0?n:e.errors?.[t]}function dC(){let{router:n}=aC("useNavigate"),e=Um("useNavigate"),t=oe.useRef(!1);return kS(()=>{t.current=!0}),oe.useCallback(async(s,a={})=>{yi(t.current,OS),t.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:e,...a}))},[n,e])}var vy={};function zS(n,e,t){!e&&!vy[n]&&(vy[n]=!0,yi(!1,t))}oe.memo(fC);function fC({routes:n,future:e,state:t}){return BS(n,void 0,t,e)}function pC({to:n,replace:e,state:t,relative:i}){Jt(ba(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=oe.useContext(Bi);yi(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=oe.useContext(rr),{pathname:c}=bs(),u=FS(),d=Nm(n,Pm(a),c,i==="path"),f=JSON.stringify(d);return oe.useEffect(()=>{u(JSON.parse(f),{replace:e,state:t,relative:i})},[u,f,i,e,t]),null}function Cl(n){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mC({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:s,static:a=!1}){Jt(!ba(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),u=oe.useMemo(()=>({basename:c,navigator:s,static:a,future:{}}),[c,s,a]);typeof t=="string"&&(t=_o(t));let{pathname:d="/",search:f="",hash:m="",state:g=null,key:_="default"}=t,E=oe.useMemo(()=>{let x=Nr(d,c);return x==null?null:{location:{pathname:x,search:f,hash:m,state:g,key:_},navigationType:i}},[c,d,f,m,g,_,i]);return yi(E!=null,`<Router basename="${c}"> is not able to match the URL "${d}${f}${m}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:oe.createElement(Bi.Provider,{value:u},oe.createElement($l.Provider,{children:e,value:E}))}function gC({children:n,location:e}){return tC(Ep(n),e)}function Ep(n,e=[]){let t=[];return oe.Children.forEach(n,(i,s)=>{if(!oe.isValidElement(i))return;let a=[...e,s];if(i.type===oe.Fragment){t.push.apply(t,Ep(i.props.children,a));return}Jt(i.type===Cl,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Ep(i.props.children,a)),t.push(c)}),t}var Gu="get",Wu="application/x-www-form-urlencoded";function Ch(n){return n!=null&&typeof n.tagName=="string"}function _C(n){return Ch(n)&&n.tagName.toLowerCase()==="button"}function vC(n){return Ch(n)&&n.tagName.toLowerCase()==="form"}function yC(n){return Ch(n)&&n.tagName.toLowerCase()==="input"}function SC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function EC(n,e){return n.button===0&&(!e||e==="_self")&&!SC(n)}var gu=null;function xC(){if(gu===null)try{new FormData(document.createElement("form"),0),gu=!1}catch{gu=!0}return gu}var TC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wf(n){return n!=null&&!TC.has(n)?(yi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wu}"`),null):n}function MC(n,e){let t,i,s,a,c;if(vC(n)){let u=n.getAttribute("action");i=u?Nr(u,e):null,t=n.getAttribute("method")||Gu,s=wf(n.getAttribute("enctype"))||Wu,a=new FormData(n)}else if(_C(n)||yC(n)&&(n.type==="submit"||n.type==="image")){let u=n.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=n.getAttribute("formaction")||u.getAttribute("action");if(i=d?Nr(d,e):null,t=n.getAttribute("formmethod")||u.getAttribute("method")||Gu,s=wf(n.getAttribute("formenctype"))||wf(u.getAttribute("enctype"))||Wu,a=new FormData(u,n),!xC()){let{name:f,type:m,value:g}=n;if(m==="image"){let _=f?`${f}.`:"";a.append(`${_}x`,"0"),a.append(`${_}y`,"0")}else f&&a.append(f,g)}}else{if(Ch(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Gu,i=null,s=Wu,c=n}return a&&s==="text/plain"&&(c=a,a=void 0),{action:i,method:t.toLowerCase(),encType:s,formData:a,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Om(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function wC(n,e,t){let i=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i.pathname==="/"?i.pathname=`_root.${t}`:e&&Nr(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${t}`,i}async function CC(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function RC(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function AC(n,e,t){let i=await Promise.all(n.map(async s=>{let a=e.routes[s.route.id];if(a){let c=await CC(a,t);return c.links?c.links():[]}return[]}));return NC(i.flat(1).filter(RC).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function yy(n,e,t,i,s,a){let c=(d,f)=>t[f]?d.route.id!==t[f].route.id:!0,u=(d,f)=>t[f].pathname!==d.pathname||t[f].route.path?.endsWith("*")&&t[f].params["*"]!==d.params["*"];return a==="assets"?e.filter((d,f)=>c(d,f)||u(d,f)):a==="data"?e.filter((d,f)=>{let m=i.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,f)||u(d,f))return!0;if(d.route.shouldRevalidate){let g=d.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function bC(n,e,{includeHydrateFallback:t}={}){return IC(n.map(i=>{let s=e.routes[i.route.id];if(!s)return[];let a=[s.module];return s.clientActionModule&&(a=a.concat(s.clientActionModule)),s.clientLoaderModule&&(a=a.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(a=a.concat(s.hydrateFallbackModule)),s.imports&&(a=a.concat(s.imports)),a}).flat(1))}function IC(n){return[...new Set(n)]}function PC(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function NC(n,e){let t=new Set;return new Set(e),n.reduce((i,s)=>{let a=JSON.stringify(PC(s));return t.has(a)||(t.add(a),i.push({key:a,link:s})),i},[])}function HS(){let n=oe.useContext(Aa);return Om(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function DC(){let n=oe.useContext(wh);return Om(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var km=oe.createContext(void 0);km.displayName="FrameworkContext";function VS(){let n=oe.useContext(km);return Om(n,"You must render this element inside a <HydratedRouter> element"),n}function LC(n,e){let t=oe.useContext(km),[i,s]=oe.useState(!1),[a,c]=oe.useState(!1),{onFocus:u,onBlur:d,onMouseEnter:f,onMouseLeave:m,onTouchStart:g}=e,_=oe.useRef(null);oe.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let M=y=>{y.forEach(P=>{c(P.isIntersecting)})},S=new IntersectionObserver(M,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[n]),oe.useEffect(()=>{if(i){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[i]);let E=()=>{s(!0)},x=()=>{s(!1),c(!1)};return t?n!=="intent"?[a,_,{}]:[a,_,{onFocus:gl(u,E),onBlur:gl(d,x),onMouseEnter:gl(f,E),onMouseLeave:gl(m,x),onTouchStart:gl(g,E)}]:[!1,_,{}]}function gl(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function UC({page:n,...e}){let{router:t}=HS(),i=oe.useMemo(()=>PS(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?oe.createElement(kC,{page:n,matches:i,...e}):null}function OC(n){let{manifest:e,routeModules:t}=VS(),[i,s]=oe.useState([]);return oe.useEffect(()=>{let a=!1;return AC(n,e,t).then(c=>{a||s(c)}),()=>{a=!0}},[n,e,t]),i}function kC({page:n,matches:e,...t}){let i=bs(),{manifest:s,routeModules:a}=VS(),{basename:c}=HS(),{loaderData:u,matches:d}=DC(),f=oe.useMemo(()=>yy(n,e,d,s,i,"data"),[n,e,d,s,i]),m=oe.useMemo(()=>yy(n,e,d,s,i,"assets"),[n,e,d,s,i]),g=oe.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let x=new Set,M=!1;if(e.forEach(y=>{let P=s.routes[y.route.id];!P||!P.hasLoader||(!f.some(I=>I.route.id===y.route.id)&&y.route.id in u&&a[y.route.id]?.shouldRevalidate||P.hasClientLoader?M=!0:x.add(y.route.id))}),x.size===0)return[];let S=wC(n,c,"data");return M&&x.size>0&&S.searchParams.set("_routes",e.filter(y=>x.has(y.route.id)).map(y=>y.route.id).join(",")),[S.pathname+S.search]},[c,u,i,s,f,e,n,a]),_=oe.useMemo(()=>bC(m,s),[m,s]),E=OC(m);return oe.createElement(oe.Fragment,null,g.map(x=>oe.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),_.map(x=>oe.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),E.map(({key:x,link:M})=>oe.createElement("link",{key:x,nonce:t.nonce,...M})))}function FC(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var GS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{GS&&(window.__reactRouterVersion="7.8.0")}catch{}function BC({basename:n,children:e,window:t}){let i=oe.useRef();i.current==null&&(i.current=Cw({window:t,v5Compat:!0}));let s=i.current,[a,c]=oe.useState({action:s.action,location:s.location}),u=oe.useCallback(d=>{oe.startTransition(()=>c(d))},[c]);return oe.useLayoutEffect(()=>s.listen(u),[s,u]),oe.createElement(mC,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:s})}var WS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ih=oe.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:s,reloadDocument:a,replace:c,state:u,target:d,to:f,preventScrollReset:m,viewTransition:g,..._},E){let{basename:x}=oe.useContext(Bi),M=typeof f=="string"&&WS.test(f),S,y=!1;if(typeof f=="string"&&M&&(S=f,GS))try{let b=new URL(window.location.href),R=f.startsWith("//")?new URL(b.protocol+f):new URL(f),B=Nr(R.pathname,x);R.origin===b.origin&&B!=null?f=B+R.search+R.hash:y=!0}catch{yi(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let P=Zw(f,{relative:s}),[I,A,G]=LC(i,_),F=GC(f,{replace:c,state:u,target:d,preventScrollReset:m,relative:s,viewTransition:g});function U(b){e&&e(b),b.defaultPrevented||F(b)}let W=oe.createElement("a",{..._,...G,href:S||P,onClick:y||a?e:U,ref:FC(E,A),target:d,"data-discover":!M&&t==="render"?"true":void 0});return I&&!M?oe.createElement(oe.Fragment,null,W,oe.createElement(UC,{page:P})):W});ih.displayName="Link";var zC=oe.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:s=!1,style:a,to:c,viewTransition:u,children:d,...f},m){let g=jl(c,{relative:f.relative}),_=bs(),E=oe.useContext(wh),{navigator:x,basename:M}=oe.useContext(Bi),S=E!=null&&qC(g)&&u===!0,y=x.encodeLocation?x.encodeLocation(g).pathname:g.pathname,P=_.pathname,I=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;t||(P=P.toLowerCase(),I=I?I.toLowerCase():null,y=y.toLowerCase()),I&&M&&(I=Nr(I,M)||I);const A=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let G=P===y||!s&&P.startsWith(y)&&P.charAt(A)==="/",F=I!=null&&(I===y||!s&&I.startsWith(y)&&I.charAt(y.length)==="/"),U={isActive:G,isPending:F,isTransitioning:S},W=G?e:void 0,b;typeof i=="function"?b=i(U):b=[i,G?"active":null,F?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(U):a;return oe.createElement(ih,{...f,"aria-current":W,className:b,ref:m,style:R,to:c,viewTransition:u},typeof d=="function"?d(U):d)});zC.displayName="NavLink";var HC=oe.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:s,state:a,method:c=Gu,action:u,onSubmit:d,relative:f,preventScrollReset:m,viewTransition:g,..._},E)=>{let x=$C(),M=jC(u,{relative:f}),S=c.toLowerCase()==="get"?"get":"post",y=typeof u=="string"&&WS.test(u),P=I=>{if(d&&d(I),I.defaultPrevented)return;I.preventDefault();let A=I.nativeEvent.submitter,G=A?.getAttribute("formmethod")||c;x(A||I.currentTarget,{fetcherKey:e,method:G,navigate:t,replace:s,state:a,relative:f,preventScrollReset:m,viewTransition:g})};return oe.createElement("form",{ref:E,method:S,action:M,onSubmit:i?d:P,..._,"data-discover":!y&&n==="render"?"true":void 0})});HC.displayName="Form";function VC(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function XS(n){let e=oe.useContext(Aa);return Jt(e,VC(n)),e}function GC(n,{target:e,replace:t,state:i,preventScrollReset:s,relative:a,viewTransition:c}={}){let u=FS(),d=bs(),f=jl(n,{relative:a});return oe.useCallback(m=>{if(EC(m,e)){m.preventDefault();let g=t!==void 0?t:Ll(d)===Ll(f);u(n,{replace:g,state:i,preventScrollReset:s,relative:a,viewTransition:c})}},[d,u,f,t,i,e,n,s,a,c])}var WC=0,XC=()=>`__${String(++WC)}__`;function $C(){let{router:n}=XS("useSubmit"),{basename:e}=oe.useContext(Bi),t=uC();return oe.useCallback(async(i,s={})=>{let{action:a,method:c,encType:u,formData:d,body:f}=MC(i,e);if(s.navigate===!1){let m=s.fetcherKey||XC();await n.fetch(m,t,s.action||a,{preventScrollReset:s.preventScrollReset,formData:d,body:f,formMethod:s.method||c,formEncType:s.encType||u,flushSync:s.flushSync})}else await n.navigate(s.action||a,{preventScrollReset:s.preventScrollReset,formData:d,body:f,formMethod:s.method||c,formEncType:s.encType||u,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,e,t])}function jC(n,{relative:e}={}){let{basename:t}=oe.useContext(Bi),i=oe.useContext(rr);Jt(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),a={...jl(n||".",{relative:e})},c=bs();if(n==null){a.search=c.search;let u=new URLSearchParams(a.search),d=u.getAll("index");if(d.some(m=>m==="")){u.delete("index"),d.filter(g=>g).forEach(g=>u.append("index",g));let m=u.toString();a.search=m?`?${m}`:""}}return(!n||n===".")&&s.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:br([t,a.pathname])),Ll(a)}function qC(n,{relative:e}={}){let t=oe.useContext(US);Jt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=XS("useViewTransitionState"),s=jl(n,{relative:e});if(!t.isTransitioning)return!1;let a=Nr(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Nr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return nh(s.pathname,c)!=null||nh(s.pathname,a)!=null}const YC=()=>{};var Sy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=function(n,e){if(!n)throw Ia(e)},Ia=function(n){return new Error("Firebase Database ("+$S.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},KC=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],c=n[t++],u=n[t++],d=((s&7)<<18|(a&63)<<12|(c&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Fm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const a=n[s],c=s+1<n.length,u=c?n[s+1]:0,d=s+2<n.length,f=d?n[s+2]:0,m=a>>2,g=(a&3)<<4|u>>4;let _=(u&15)<<2|f>>6,E=f&63;d||(E=64,c||(_=64)),i.push(t[m],t[g],t[_],t[E])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(jS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):KC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||u==null||f==null||g==null)throw new JC;const _=a<<2|u>>4;if(i.push(_),f!==64){const E=u<<4&240|f>>2;if(i.push(E),g!==64){const x=f<<6&192|g;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class JC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qS=function(n){const e=jS(n);return Fm.encodeByteArray(e,!0)},rh=function(n){return qS(n).replace(/\./g,"")},sh=function(n){try{return Fm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(n){return YS(void 0,n)}function YS(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ZC(t)||(n[t]=YS(n[t],e[t]));return n}function ZC(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=()=>eR().__FIREBASE_DEFAULTS__,nR=()=>{if(typeof process>"u"||typeof Sy>"u")return;const n=Sy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},iR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&sh(n[1]);return e&&JSON.parse(e)},Bm=()=>{try{return YC()||tR()||nR()||iR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},KS=n=>Bm()?.emulatorHosts?.[n],JS=n=>{const e=KS(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},QS=()=>Bm()?.config,ZS=n=>Bm()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zm(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[rh(JSON.stringify(t)),rh(JSON.stringify(c)),""].join(".")}const Al={};function rR(){const n={prod:[],emulator:[]};for(const e of Object.keys(Al))Al[e]?n.emulator.push(e):n.prod.push(e);return n}function sR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ey=!1;function Hm(n,e){if(typeof window>"u"||typeof document>"u"||!vo(window.location.host)||Al[n]===e||Al[n]||Ey)return;Al[n]=e;function t(_){return`__firebase__banner__${_}`}const i="__firebase__banner",a=rR().prod.length>0;function c(){const _=document.getElementById(i);_&&_.remove()}function u(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function d(_,E){_.setAttribute("width","24"),_.setAttribute("id",E),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function f(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Ey=!0,c()},_}function m(_,E){_.setAttribute("id",E),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function g(){const _=sR(i),E=t("text"),x=document.getElementById(E)||document.createElement("span"),M=t("learnmore"),S=document.getElementById(M)||document.createElement("a"),y=t("preprendIcon"),P=document.getElementById(y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const I=_.element;u(I),m(S,M);const A=f();d(P,y),I.append(P,x,S,A),document.body.appendChild(I)}a?(x.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(P.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wn())}function oR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function tE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lR(){const n=Wn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cR(){return $S.NODE_ADMIN===!0}function uR(){try{return typeof indexedDB=="object"}catch{return!1}}function hR(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR="FirebaseError";class Fr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=dR,Object.setPrototypeOf(this,Fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ql.prototype.create)}}class ql{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],c=a?fR(a,i):"Error",u=`${this.serviceName}: ${c} (${s}).`;return new Fr(s,u,i)}}function fR(n,e){return n.replace(pR,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const pR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(n){return JSON.parse(n)}function Rn(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=function(n){let e={},t={},i={},s="";try{const a=n.split(".");e=Ul(sh(a[0])||""),t=Ul(sh(a[1])||""),s=a[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},mR=function(n){const e=nE(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},gR=function(n){const e=nE(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ya(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function xp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function oh(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function lo(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const a=n[s],c=e[s];if(xy(a)&&xy(c)){if(!lo(a,c))return!1}else if(a!==c)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function xy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let g=0;g<16;g++)i[g]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let g=0;g<16;g++)i[g]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let g=16;g<80;g++){const _=i[g-3]^i[g-8]^i[g-14]^i[g-16];i[g]=(_<<1|_>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],c=this.chain_[2],u=this.chain_[3],d=this.chain_[4],f,m;for(let g=0;g<80;g++){g<40?g<20?(f=u^a&(c^u),m=1518500249):(f=a^c^u,m=1859775393):g<60?(f=a&c|u&(a|c),m=2400959708):(f=a^c^u,m=3395469782);const _=(s<<5|s>>>27)+f+d+m+i[g]&4294967295;d=u,u=c,c=(a<<30|a>>>2)&4294967295,a=s,s=_}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const a=this.buf_;let c=this.inbuf_;for(;s<t;){if(c===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[c]=e.charCodeAt(s),++c,++s,c===this.blockSize){this.compress_(a),c=0;break}}else for(;s<t;)if(a[c]=e[s],++c,++s,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[i]=this.chain_[s]>>a&255,++i;return e}}function vR(n,e){const t=new yR(n,e);return t.subscribe.bind(t)}class yR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");SR(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Cf),s.error===void 0&&(s.error=Cf),s.complete===void 0&&(s.complete=Cf);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Cf(){}function Gm(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const a=s-55296;i++,Ne(i<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(i)-56320;s=65536+(a<<10)+c}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ah=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n){return n&&n._delegate?n._delegate:n}class ws{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Rh;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MR(e))try{this.getOrInitializeService({instanceIdentifier:Js})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(e=Js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Js){return this.instances.has(e)}getOptions(e=Js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);i===u&&c.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:TR(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Js){return this.component?this.component.multipleInstances?e:Js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TR(n){return n===Js?void 0:n}function MR(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ft||(Ft={}));const CR={debug:Ft.DEBUG,verbose:Ft.VERBOSE,info:Ft.INFO,warn:Ft.WARN,error:Ft.ERROR,silent:Ft.SILENT},RR=Ft.INFO,AR={[Ft.DEBUG]:"log",[Ft.VERBOSE]:"log",[Ft.INFO]:"info",[Ft.WARN]:"warn",[Ft.ERROR]:"error"},bR=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=AR[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wm{constructor(e){this.name=e,this._logLevel=RR,this._logHandler=bR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ft))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ft.DEBUG,...e),this._logHandler(this,Ft.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ft.VERBOSE,...e),this._logHandler(this,Ft.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ft.INFO,...e),this._logHandler(this,Ft.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ft.WARN,...e),this._logHandler(this,Ft.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ft.ERROR,...e),this._logHandler(this,Ft.ERROR,...e)}}const IR=(n,e)=>e.some(t=>n instanceof t);let Ty,My;function PR(){return Ty||(Ty=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NR(){return My||(My=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iE=new WeakMap,Tp=new WeakMap,rE=new WeakMap,Rf=new WeakMap,Xm=new WeakMap;function DR(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Ss(n.result)),s()},c=()=>{i(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&iE.set(t,n)}).catch(()=>{}),Xm.set(e,n),e}function LR(n){if(Tp.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),s()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Tp.set(n,e)}let Mp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rE.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ss(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function UR(n){Mp=n(Mp)}function OR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Af(this),e,...t);return rE.set(i,e.sort?e.sort():[e]),Ss(i)}:NR().includes(n)?function(...e){return n.apply(Af(this),e),Ss(iE.get(this))}:function(...e){return Ss(n.apply(Af(this),e))}}function kR(n){return typeof n=="function"?OR(n):(n instanceof IDBTransaction&&LR(n),IR(n,PR())?new Proxy(n,Mp):n)}function Ss(n){if(n instanceof IDBRequest)return DR(n);if(Rf.has(n))return Rf.get(n);const e=kR(n);return e!==n&&(Rf.set(n,e),Xm.set(e,n)),e}const Af=n=>Xm.get(n);function FR(n,e,{blocked:t,upgrade:i,blocking:s,terminated:a}={}){const c=indexedDB.open(n,e),u=Ss(c);return i&&c.addEventListener("upgradeneeded",d=>{i(Ss(c.result),d.oldVersion,d.newVersion,Ss(c.transaction),d)}),t&&c.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),u.then(d=>{a&&d.addEventListener("close",()=>a()),s&&d.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const BR=["get","getKey","getAll","getAllKeys","count"],zR=["put","add","delete","clear"],bf=new Map;function wy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bf.get(e))return bf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=zR.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||BR.includes(t)))return;const a=async function(c,...u){const d=this.transaction(c,s?"readwrite":"readonly");let f=d.store;return i&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),s&&d.done]))[0]};return bf.set(e,a),a}UR(n=>({...n,get:(e,t,i)=>wy(e,t)||n.get(e,t,i),has:(e,t)=>!!wy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(VR(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function VR(n){return n.getComponent()?.type==="VERSION"}const wp="@firebase/app",Cy="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Wm("@firebase/app"),GR="@firebase/app-compat",WR="@firebase/analytics-compat",XR="@firebase/analytics",$R="@firebase/app-check-compat",jR="@firebase/app-check",qR="@firebase/auth",YR="@firebase/auth-compat",KR="@firebase/database",JR="@firebase/data-connect",QR="@firebase/database-compat",ZR="@firebase/functions",eA="@firebase/functions-compat",tA="@firebase/installations",nA="@firebase/installations-compat",iA="@firebase/messaging",rA="@firebase/messaging-compat",sA="@firebase/performance",oA="@firebase/performance-compat",aA="@firebase/remote-config",lA="@firebase/remote-config-compat",cA="@firebase/storage",uA="@firebase/storage-compat",hA="@firebase/firestore",dA="@firebase/ai",fA="@firebase/firestore-compat",pA="firebase",mA="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="[DEFAULT]",gA={[wp]:"fire-core",[GR]:"fire-core-compat",[XR]:"fire-analytics",[WR]:"fire-analytics-compat",[jR]:"fire-app-check",[$R]:"fire-app-check-compat",[qR]:"fire-auth",[YR]:"fire-auth-compat",[KR]:"fire-rtdb",[JR]:"fire-data-connect",[QR]:"fire-rtdb-compat",[ZR]:"fire-fn",[eA]:"fire-fn-compat",[tA]:"fire-iid",[nA]:"fire-iid-compat",[iA]:"fire-fcm",[rA]:"fire-fcm-compat",[sA]:"fire-perf",[oA]:"fire-perf-compat",[aA]:"fire-rc",[lA]:"fire-rc-compat",[cA]:"fire-gcs",[uA]:"fire-gcs-compat",[hA]:"fire-fst",[fA]:"fire-fst-compat",[dA]:"fire-vertex","fire-js":"fire-js",[pA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new Map,_A=new Map,Rp=new Map;function Ry(n,e){try{n.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function co(n){const e=n.name;if(Rp.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Rp.set(e,n);for(const t of Ol.values())Ry(t,n);for(const t of _A.values())Ry(t,n);return!0}function bh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ii(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Es=new ql("app","Firebase",vA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Es.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=mA;function sE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Cp,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Es.create("bad-app-name",{appName:String(s)});if(t||(t=QS()),!t)throw Es.create("no-options");const a=Ol.get(s);if(a){if(lo(t,a.options)&&lo(i,a.config))return a;throw Es.create("duplicate-app",{appName:s})}const c=new wR(s);for(const d of Rp.values())c.addComponent(d);const u=new yA(t,i,c);return Ol.set(s,u),u}function $m(n=Cp){const e=Ol.get(n);if(!e&&n===Cp&&QS())return sE();if(!e)throw Es.create("no-app",{appName:n});return e}function SA(){return Array.from(Ol.values())}function Ki(n,e,t){let i=gA[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(c.join(" "));return}co(new ws(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="firebase-heartbeat-database",xA=1,kl="firebase-heartbeat-store";let If=null;function oE(){return If||(If=FR(EA,xA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Es.create("idb-open",{originalErrorMessage:n.message})})),If}async function TA(n){try{const t=(await oE()).transaction(kl),i=await t.objectStore(kl).get(aE(n));return await t.done,i}catch(e){if(e instanceof Fr)Dr.warn(e.message);else{const t=Es.create("idb-get",{originalErrorMessage:e?.message});Dr.warn(t.message)}}}async function Ay(n,e){try{const i=(await oE()).transaction(kl,"readwrite");await i.objectStore(kl).put(e,aE(n)),await i.done}catch(t){if(t instanceof Fr)Dr.warn(t.message);else{const i=Es.create("idb-set",{originalErrorMessage:t?.message});Dr.warn(i.message)}}}function aE(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=1024,wA=30;class CA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new AA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=by();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>wA){const s=bA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Dr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=by(),{heartbeatsToSend:t,unsentEntries:i}=RA(this._heartbeatsCache.heartbeats),s=rh(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Dr.warn(e),""}}}function by(){return new Date().toISOString().substring(0,10)}function RA(n,e=MA){const t=[];let i=n.slice();for(const s of n){const a=t.find(c=>c.agent===s.agent);if(a){if(a.dates.push(s.date),Iy(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Iy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class AA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uR()?hR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await TA(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ay(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ay(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Iy(n){return rh(JSON.stringify({version:2,heartbeats:n})).length}function bA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(n){co(new ws("platform-logger",e=>new HR(e),"PRIVATE")),co(new ws("heartbeat",e=>new CA(e),"PRIVATE")),Ki(wp,Cy,n),Ki(wp,Cy,"esm2020"),Ki("fire-js","")}IA("");function lE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PA=lE,cE=new ql("auth","Firebase",lE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new Wm("@firebase/auth");function NA(n,...e){ah.logLevel<=Ft.WARN&&ah.warn(`Auth (${yo}): ${n}`,...e)}function Xu(n,...e){ah.logLevel<=Ft.ERROR&&ah.error(`Auth (${yo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n,...e){throw jm(n,...e)}function Ji(n,...e){return jm(n,...e)}function uE(n,e,t){const i={...PA(),[e]:t};return new ql("auth","Firebase",i).create(e,{appName:n.name})}function ao(n){return uE(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jm(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return cE.create(n,...e)}function lt(n,e,...t){if(!n)throw jm(e,...t)}function Mr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xu(e),new Error(e)}function Ur(n,e){n||Mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(){return typeof self<"u"&&self.location?.href||""}function DA(){return Py()==="http:"||Py()==="https:"}function Py(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DA()||aR()||"connection"in navigator)?navigator.onLine:!0}function UA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ur(t>e,"Short delay should be less than long delay!"),this.isMobile=Vm()||tE()}get(){return LA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(n,e){Ur(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],FA=new Yl(3e4,6e4);function Ym(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Na(n,e,t,i,s={}){return dE(n,s,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const u=Pa({key:n.config.apiKey,...c}).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:d,...a};return oR()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&vo(n.emulatorConfig.host)&&(f.credentials="include"),hE.fetch()(await fE(n,n.config.apiHost,t,u),f)})}async function dE(n,e,t){n._canInitEmulator=!1;const i={...OA,...e};try{const s=new zA(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw _u(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const u=a.ok?c.errorMessage:c.error.message,[d,f]=u.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw _u(n,"credential-already-in-use",c);if(d==="EMAIL_EXISTS")throw _u(n,"email-already-in-use",c);if(d==="USER_DISABLED")throw _u(n,"user-disabled",c);const m=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw uE(n,m,f);Lr(n,m)}}catch(s){if(s instanceof Fr)throw s;Lr(n,"network-request-failed",{message:String(s)})}}async function BA(n,e,t,i,s={}){const a=await Na(n,e,t,i,s);return"mfaPendingCredential"in a&&Lr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function fE(n,e,t,i){const s=`${e}${t}?${i}`,a=n,c=a.config.emulator?qm(n.config,s):`${n.config.apiScheme}://${s}`;return kA.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}class zA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ji(this.auth,"network-request-failed")),FA.get())})}}function _u(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ji(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(n,e){return Na(n,"POST","/v1/accounts:delete",e)}async function lh(n,e){return Na(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VA(n,e=!1){const t=li(n),i=await t.getIdToken(e),s=Km(i);lt(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,c=a?.sign_in_provider;return{claims:s,token:i,authTime:bl(Pf(s.auth_time)),issuedAtTime:bl(Pf(s.iat)),expirationTime:bl(Pf(s.exp)),signInProvider:c||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Pf(n){return Number(n)*1e3}function Km(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Xu("JWT malformed, contained fewer than 3 sections"),null;try{const s=sh(t);return s?JSON.parse(s):(Xu("Failed to decode base64 JWT payload"),null)}catch(s){return Xu("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ny(n){const e=Km(n);return lt(e,"internal-error"),lt(typeof e.exp<"u","internal-error"),lt(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Fr&&GA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function GA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bl(this.lastLoginAt),this.creationTime=bl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ch(n){const e=n.auth,t=await n.getIdToken(),i=await Fl(n,lh(e,{idToken:t}));lt(i?.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=s.providerUserInfo?.length?pE(s.providerUserInfo):[],c=$A(n.providerData,a),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!c?.length,f=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new bp(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function XA(n){const e=li(n);await ch(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $A(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function pE(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(n,e){const t=await dE(n,{},async()=>{const i=Pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,c=await fE(n,s,"/v1/token",`key=${a}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:u,body:i};return n.emulatorConfig&&vo(n.emulatorConfig.host)&&(d.credentials="include"),hE.fetch()(c,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qA(n,e){return Na(n,"POST","/v2/accounts:revokeToken",Ym(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){lt(e.idToken,"internal-error"),lt(typeof e.idToken<"u","internal-error"),lt(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ny(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){lt(e.length!==0,"internal-error");const t=Ny(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(lt(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:a}=await jA(e,t);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:a}=t,c=new ha;return i&&(lt(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),s&&(lt(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),a&&(lt(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ha,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n,e){lt(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Di{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new WA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Fl(this,this.stsTokenManager.getToken(this.auth,e));return lt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VA(this,e)}reload(){return XA(this)}_assign(e){this!==e&&(lt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Di({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){lt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ch(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ii(this.auth.app))return Promise.reject(ao(this.auth));const e=await this.getIdToken();return await Fl(this,HA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,a=t.phoneNumber??void 0,c=t.photoURL??void 0,u=t.tenantId??void 0,d=t._redirectEventId??void 0,f=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:_,isAnonymous:E,providerData:x,stsTokenManager:M}=t;lt(g&&M,e,"internal-error");const S=ha.fromJSON(this.name,M);lt(typeof g=="string",e,"internal-error"),ls(i,e.name),ls(s,e.name),lt(typeof _=="boolean",e,"internal-error"),lt(typeof E=="boolean",e,"internal-error"),ls(a,e.name),ls(c,e.name),ls(u,e.name),ls(d,e.name),ls(f,e.name),ls(m,e.name);const y=new Di({uid:g,auth:e,email:s,emailVerified:_,displayName:i,isAnonymous:E,photoURL:c,phoneNumber:a,tenantId:u,stsTokenManager:S,createdAt:f,lastLoginAt:m});return x&&Array.isArray(x)&&(y.providerData=x.map(P=>({...P}))),d&&(y._redirectEventId=d),y}static async _fromIdTokenResponse(e,t,i=!1){const s=new ha;s.updateFromServerResponse(t);const a=new Di({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ch(a),a}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];lt(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?pE(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!a?.length,u=new ha;u.updateFromIdToken(i);const d=new Di({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:c}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!a?.length};return Object.assign(d,f),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=new Map;function wr(n){Ur(n instanceof Function,"Expected a class definition");let e=Dy.get(n);return e?(Ur(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mE.type="NONE";const Ly=mE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n,e,t){return`firebase:${n}:${e}:${t}`}class da{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=$u(this.userKey,s.apiKey,a),this.fullPersistenceKey=$u("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await lh(this.auth,{idToken:e}).catch(()=>{});return t?Di._fromGetAccountInfoResponse(this.auth,t,e):null}return Di._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new da(wr(Ly),e,i);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let a=s[0]||wr(Ly);const c=$u(i,e.config.apiKey,e.name);let u=null;for(const f of t)try{const m=await f._get(c);if(m){let g;if(typeof m=="string"){const _=await lh(e,{idToken:m}).catch(()=>{});if(!_)break;g=await Di._fromGetAccountInfoResponse(e,_,m)}else g=Di._fromJSON(e,m);f!==a&&(u=g),a=f;break}}catch{}const d=s.filter(f=>f._shouldAllowMigration);return!a._shouldAllowMigration||!d.length?new da(a,e,i):(a=d[0],u&&await a._set(c,u.toJSON()),await Promise.all(t.map(async f=>{if(f!==a)try{await f._remove(c)}catch{}})),new da(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(EE(e))return"Blackberry";if(xE(e))return"Webos";if(_E(e))return"Safari";if((e.includes("chrome/")||vE(e))&&!e.includes("edge/"))return"Chrome";if(SE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function gE(n=Wn()){return/firefox\//i.test(n)}function _E(n=Wn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vE(n=Wn()){return/crios\//i.test(n)}function yE(n=Wn()){return/iemobile/i.test(n)}function SE(n=Wn()){return/android/i.test(n)}function EE(n=Wn()){return/blackberry/i.test(n)}function xE(n=Wn()){return/webos/i.test(n)}function Jm(n=Wn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function YA(n=Wn()){return Jm(n)&&!!window.navigator?.standalone}function KA(){return lR()&&document.documentMode===10}function TE(n=Wn()){return Jm(n)||SE(n)||xE(n)||EE(n)||/windows phone/i.test(n)||yE(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n,e=[]){let t;switch(n){case"Browser":t=Uy(Wn());break;case"Worker":t=`${Uy(Wn())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,u)=>{try{const d=e(a);c(d)}catch(d){u(d)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(n,e={}){return Na(n,"GET","/v2/passwordPolicy",Ym(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=6;class e1{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ZA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oy(this),this.idTokenSubscription=new Oy(this),this.beforeStateQueue=new JA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await da.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lh(this,{idToken:e}),i=await Di._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ii(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,c=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return lt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ch(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ii(this.app))return Promise.reject(ao(this));const t=e?li(e):null;return t&&lt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&lt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ii(this.app)?Promise.reject(ao(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ii(this.app)?Promise.reject(ao(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QA(this),t=new e1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ql("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await qA(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wr(e)||this._popupRedirectResolver;lt(t,this,"argument-error"),this.redirectPersistenceManager=await da.create(this,[wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(lt(u,this,"internal-error"),u.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,i,s);return()=>{c=!0,d()}}else{const d=e.addObserver(t);return()=>{c=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return lt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ME(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(Ii(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&NA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Qm(n){return li(n)}class Oy{constructor(e){this.auth=e,this.observer=null,this.addObserver=vR(t=>this.observer=t)}get next(){return lt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function n1(n){Zm=n}function i1(n){return Zm.loadJS(n)}function r1(){return Zm.gapiScript}function s1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(n,e){const t=bh(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(lo(a,e??{}))return s;Lr(s,"already-initialized")}return t.initialize({options:e})}function a1(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(wr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function l1(n,e,t){const i=Qm(n);lt(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,a=wE(e),{host:c,port:u}=c1(e),d=u===null?"":`:${u}`,f={url:`${a}//${c}${d}/`},m=Object.freeze({host:c,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){lt(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),lt(lo(f,i.config.emulator)&&lo(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=f,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,vo(c)?(zm(`${a}//${c}${d}`),Hm("Auth",!0)):u1()}function wE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function c1(n){const e=wE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const a=s[1];return{host:a,port:ky(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:ky(c)}}}function ky(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function u1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mr("not implemented")}_getIdTokenResponse(e){return Mr("not implemented")}_linkToIdToken(e,t){return Mr("not implemented")}_getReauthenticationResolver(e){return Mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(n,e){return BA(n,"POST","/v1/accounts:signInWithIdp",Ym(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="http://localhost";class uo extends CE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new uo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...a}=t;if(!i||!s)return null;const c=new uo(i,s);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return fa(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,fa(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fa(e,t)}buildRequest(){const e={requestUri:h1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends RE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Kl{constructor(){super("facebook.com")}static credential(e){return uo._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.FACEBOOK_SIGN_IN_METHOD="facebook.com";ms.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return uo._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return gs.credential(t,i)}catch{return null}}}gs.GOOGLE_SIGN_IN_METHOD="google.com";gs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Kl{constructor(){super("github.com")}static credential(e){return uo._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _s.credential(e.oauthAccessToken)}catch{return null}}}_s.GITHUB_SIGN_IN_METHOD="github.com";_s.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Kl{constructor(){super("twitter.com")}static credential(e,t){return uo._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return vs.credential(t,i)}catch{return null}}}vs.TWITTER_SIGN_IN_METHOD="twitter.com";vs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const a=await Di._fromIdTokenResponse(e,i,s),c=Fy(i);return new Sa({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Fy(i);return new Sa({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Fy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends Fr{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,uh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new uh(e,t,i,s)}}function AE(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?uh._fromErrorAndOperation(n,a,e,i):a})}async function d1(n,e,t=!1){const i=await Fl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Sa._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(n,e,t=!1){const{auth:i}=n;if(Ii(i.app))return Promise.reject(ao(i));const s="reauthenticate";try{const a=await Fl(n,AE(i,s,e,n),t);lt(a.idToken,i,"internal-error");const c=Km(a.idToken);lt(c,i,"internal-error");const{sub:u}=c;return lt(n.uid===u,i,"user-mismatch"),Sa._forOperation(n,s,a)}catch(a){throw a?.code==="auth/user-not-found"&&Lr(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(n,e,t=!1){if(Ii(n.app))return Promise.reject(ao(n));const i="signIn",s=await AE(n,i,e),a=await Sa._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(a.user),a}function m1(n,e,t,i){return li(n).onIdTokenChanged(e,t,i)}function g1(n,e,t){return li(n).beforeAuthStateChanged(e,t)}function _1(n,e,t,i){return li(n).onAuthStateChanged(e,t,i)}const hh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hh,"1"),this.storage.removeItem(hh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=1e3,y1=10;class IE extends bE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=TE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,u,d)=>{this.notifyListeners(c,d)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);KA()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,y1):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},v1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}IE.type="LOCAL";const S1=IE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE extends bE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}PE.type="SESSION";const NE=PE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Ih(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:a}=t.data,c=this.handlersMap[s];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const u=Array.from(c).map(async f=>f(t.origin,a)),d=await E1(u);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ih.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,c;return new Promise((u,d)=>{const f=eg("",20);s.port1.start();const m=setTimeout(()=>{d(new Error("unsupported_event"))},i);c={messageChannel:s,onMessage(g){const _=g;if(_.data.eventId===f)switch(_.data.status){case"ack":clearTimeout(m),a=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(_.data.response);break;default:clearTimeout(m),clearTimeout(a),d(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(){return window}function T1(n){Qi().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(){return typeof Qi().WorkerGlobalScope<"u"&&typeof Qi().importScripts=="function"}async function M1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function w1(){return navigator?.serviceWorker?.controller||null}function C1(){return DE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="firebaseLocalStorageDb",R1=1,dh="firebaseLocalStorage",UE="fbase_key";class Jl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ph(n,e){return n.transaction([dh],e?"readwrite":"readonly").objectStore(dh)}function A1(){const n=indexedDB.deleteDatabase(LE);return new Jl(n).toPromise()}function Ip(){const n=indexedDB.open(LE,R1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(dh,{keyPath:UE})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(dh)?e(i):(i.close(),await A1(),e(await Ip()))})})}async function By(n,e,t){const i=Ph(n,!0).put({[UE]:e,value:t});return new Jl(i).toPromise()}async function b1(n,e){const t=Ph(n,!1).get(e),i=await new Jl(t).toPromise();return i===void 0?null:i.value}function zy(n,e){const t=Ph(n,!0).delete(e);return new Jl(t).toPromise()}const I1=800,P1=3;class OE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ip(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>P1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ih._getInstance(C1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await M1(),!this.activeServiceWorker)return;this.sender=new x1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||w1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ip();return await By(e,hh,"1"),await zy(e,hh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>By(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>b1(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Ph(s,!1).getAll();return new Jl(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OE.type="LOCAL";const N1=OE;new Yl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(n,e){return e?wr(e):(lt(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg extends CE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function L1(n){return p1(n.auth,new tg(n),n.bypassAuthState)}function U1(n){const{auth:e,user:t}=n;return lt(t,e,"internal-error"),f1(t,new tg(n),n.bypassAuthState)}async function O1(n){const{auth:e,user:t}=n;return lt(t,e,"internal-error"),d1(t,new tg(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:a,error:c,type:u}=e;if(c){this.reject(c);return}const d={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(d))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return L1;case"linkViaPopup":case"linkViaRedirect":return O1;case"reauthViaPopup":case"reauthViaRedirect":return U1;default:Lr(this.auth,"internal-error")}}resolve(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=new Yl(2e3,1e4);class la extends kE{constructor(e,t,i,s,a){super(e,t,s,a),this.provider=i,this.authWindow=null,this.pollId=null,la.currentPopupAction&&la.currentPopupAction.cancel(),la.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return lt(e,this.auth,"internal-error"),e}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const e=eg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ji(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ji(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,la.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ji(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k1.get())};e()}}la.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="pendingRedirect",ju=new Map;class B1 extends kE{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ju.get(this.auth._key());if(!e){try{const i=await z1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ju.set(this.auth._key(),e)}return this.bypassAuthState||ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z1(n,e){const t=G1(e),i=V1(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function H1(n,e){ju.set(n._key(),e)}function V1(n){return wr(n._redirectPersistence)}function G1(n){return $u(F1,n.config.apiKey,n.name)}async function W1(n,e,t=!1){if(Ii(n.app))return Promise.reject(ao(n));const i=Qm(n),s=D1(i,e),c=await new B1(i,s,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=600*1e3;class $1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!j1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!FE(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Ji(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hy(e))}saveEventToCache(e){this.cachedEventUids.add(Hy(e)),this.lastProcessedEventTime=Date.now()}}function Hy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function FE({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function j1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return FE(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(n,e={}){return Na(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,K1=/^https?/;async function J1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await q1(n);for(const t of e)try{if(Q1(t))return}catch{}Lr(n,"unauthorized-domain")}function Q1(n){const e=Ap(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!K1.test(t))return!1;if(Y1.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=new Yl(3e4,6e4);function Vy(){const n=Qi().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function eb(n){return new Promise((e,t)=>{function i(){Vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vy(),t(Ji(n,"network-request-failed"))},timeout:Z1.get()})}if(Qi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Qi().gapi?.load)i();else{const s=s1("iframefcb");return Qi()[s]=()=>{gapi.load?i():t(Ji(n,"network-request-failed"))},i1(`${r1()}?onload=${s}`).catch(a=>t(a))}}).catch(e=>{throw qu=null,e})}let qu=null;function tb(n){return qu=qu||eb(n),qu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=new Yl(5e3,15e3),ib="__/auth/iframe",rb="emulator/auth/iframe",sb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ob=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ab(n){const e=n.config;lt(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qm(e,rb):`https://${n.config.authDomain}/${ib}`,i={apiKey:e.apiKey,appName:n.name,v:yo},s=ob.get(n.config.apiHost);s&&(i.eid=s);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Pa(i).slice(1)}`}async function lb(n){const e=await tb(n),t=Qi().gapi;return lt(t,n,"internal-error"),e.open({where:document.body,url:ab(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sb,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const c=Ji(n,"network-request-failed"),u=Qi().setTimeout(()=>{a(c)},nb.get());function d(){Qi().clearTimeout(u),s(i)}i.ping(d).then(d,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ub=500,hb=600,db="_blank",fb="http://localhost";class Gy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pb(n,e,t,i=ub,s=hb){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const d={...cb,width:i.toString(),height:s.toString(),top:a,left:c},f=Wn().toLowerCase();t&&(u=vE(f)?db:t),gE(f)&&(e=e||fb,d.scrollbars="yes");const m=Object.entries(d).reduce((_,[E,x])=>`${_}${E}=${x},`,"");if(YA(f)&&u!=="_self")return mb(e||"",u),new Gy(null);const g=window.open(e||"",u,m);lt(g,n,"popup-blocked");try{g.focus()}catch{}return new Gy(g)}function mb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="__/auth/handler",_b="emulator/auth/handler",vb=encodeURIComponent("fac");async function Wy(n,e,t,i,s,a){lt(n.config.authDomain,n,"auth-domain-config-required"),lt(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:yo,eventId:s};if(e instanceof RE){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",xp(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))c[m]=g}if(e instanceof Kl){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(c.scopes=m.join(","))}n.tenantId&&(c.tid=n.tenantId);const u=c;for(const m of Object.keys(u))u[m]===void 0&&delete u[m];const d=await n._getAppCheckToken(),f=d?`#${vb}=${encodeURIComponent(d)}`:"";return`${yb(n)}?${Pa(u).slice(1)}${f}`}function yb({config:n}){return n.emulator?qm(n,_b):`https://${n.authDomain}/${gb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="webStorageSupport";class Sb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NE,this._completeRedirectFn=W1,this._overrideRedirectResult=H1}async _openPopup(e,t,i,s){Ur(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await Wy(e,t,i,Ap(),s);return pb(e,a,eg())}async _openRedirect(e,t,i,s){await this._originValidation(e);const a=await Wy(e,t,i,Ap(),s);return T1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Ur(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await lb(e),i=new $1(e);return t.register("authEvent",s=>(lt(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Nf,{type:Nf},s=>{const a=s?.[0]?.[Nf];a!==void 0&&t(!!a),Lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=J1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return TE()||_E()||Jm()}}const Eb=Sb;var Xy="@firebase/auth",$y="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){lt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Mb(n){co(new ws("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:u}=i.options;lt(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const d={apiKey:c,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ME(n)},f=new t1(i,s,a,d);return a1(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),co(new ws("auth-internal",e=>{const t=Qm(e.getProvider("auth").getImmediate());return(i=>new xb(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ki(Xy,$y,Tb(n)),Ki(Xy,$y,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=300,Cb=ZS("authIdTokenMaxAge")||wb;let jy=null;const Rb=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Cb)return;const s=t?.token;jy!==s&&(jy=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ab(n=$m()){const e=bh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=o1(n,{popupRedirectResolver:Eb,persistence:[N1,S1,NE]}),i=ZS("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=Rb(a.toString());g1(t,c,()=>c(t.currentUser)),m1(t,u=>c(u))}}const s=KS("auth");return s&&l1(t,`http://${s}`),t}function bb(){return document.getElementsByTagName("head")?.[0]??document}n1({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const a=Ji("internal-error");a.customData=s,t(a)},i.type="text/javascript",i.charset="UTF-8",bb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Mb("Browser");var Ib="firebase",Pb="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ki(Ib,Pb,"app");var qy={};const Yy="@firebase/database",Ky="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BE="";function Nb(n){BE=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Rn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ul(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Br(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Db(e)}}catch{}return new Lb},io=zE("localStorage"),Ub=zE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Wm("@firebase/database"),Ob=function(){let n=1;return function(){return n++}}(),HE=function(n){const e=ER(n),t=new _R;t.update(e);const i=t.digest();return Fm.encodeByteArray(i)},Ql=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ql.apply(null,i):typeof i=="object"?e+=Rn(i):e+=i,e+=" "}return e};let Il=null,Jy=!0;const kb=function(n,e){Ne(!0,"Can't turn on custom loggers persistently."),pa.logLevel=Ft.VERBOSE,Il=pa.log.bind(pa)},Un=function(...n){if(Jy===!0&&(Jy=!1,Il===null&&Ub.get("logging_enabled")===!0&&kb()),Il){const e=Ql.apply(null,n);Il(e)}},Zl=function(n){return function(...e){Un(n,...e)}},Pp=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ql(...n);pa.error(e)},Or=function(...n){const e=`FIREBASE FATAL ERROR: ${Ql(...n)}`;throw pa.error(e),new Error(e)},ei=function(...n){const e="FIREBASE WARNING: "+Ql(...n);pa.warn(e)},Fb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ei("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},VE=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Bb=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ea="[MIN_NAME]",ho="[MAX_NAME]",Da=function(n,e){if(n===e)return 0;if(n===Ea||e===ho)return-1;if(e===Ea||n===ho)return 1;{const t=Qy(n),i=Qy(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},zb=function(n,e){return n===e?0:n<e?-1:1},_l=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Rn(e))},ng=function(n){if(typeof n!="object"||n===null)return Rn(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Rn(e[i]),t+=":",t+=ng(n[e[i]]);return t+="}",t},GE=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Si(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const WE=function(n){Ne(!VE(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,a,c,u,d;n===0?(a=0,c=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(u=Math.min(Math.floor(Math.log(n)/Math.LN2),i),a=u+i,c=Math.round(n*Math.pow(2,t-u)-Math.pow(2,t))):(a=0,c=Math.round(n/Math.pow(2,1-i-t))));const f=[];for(d=t;d;d-=1)f.push(c%2?1:0),c=Math.floor(c/2);for(d=e;d;d-=1)f.push(a%2?1:0),a=Math.floor(a/2);f.push(s?1:0),f.reverse();const m=f.join("");let g="";for(d=0;d<64;d+=8){let _=parseInt(m.substr(d,8),2).toString(16);_.length===1&&(_="0"+_),g=g+_}return g.toLowerCase()},Hb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Gb=new RegExp("^-?(0*)\\d{1,10}$"),Wb=-2147483648,Xb=2147483647,Qy=function(n){if(Gb.test(n)){const e=Number(n);if(e>=Wb&&e<=Xb)return e}return null},La=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ei("Exception was thrown by user callback.",t),e},Math.floor(0))}},$b=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pl=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ii(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){ei(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Un("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ei(e)}}class Yu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="5",XE="v",$E="s",jE="r",qE="f",YE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,KE="ls",JE="p",Np="ac",QE="websocket",ZE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t,i,s,a=!1,c="",u=!1,d=!1,f=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=u,this.isUsingEmulator=d,this.emulatorOptions=f,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=io.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&io.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Yb(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function tx(n,e,t){Ne(typeof e=="string","typeof type must == string"),Ne(typeof t=="object","typeof params must == object");let i;if(e===QE)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ZE)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Yb(n)&&(t.ns=n.namespace);const s=[];return Si(t,(a,c)=>{s.push(a+"="+c)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.counters_={}}incrementCounter(e,t=1){Br(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return QC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df={},Lf={};function rg(n){const e=n.toString();return Df[e]||(Df[e]=new Kb),Df[e]}function Jb(n,e){const t=n.toString();return Lf[t]||(Lf[t]=e()),Lf[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&La(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="start",Zb="close",eI="pLPCommand",tI="pRTLPCB",nx="id",ix="pw",rx="ser",nI="cb",iI="seg",rI="ts",sI="d",oI="dframe",sx=1870,ox=30,aI=sx-ox,lI=25e3,cI=3e4;class ca{constructor(e,t,i,s,a,c,u){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=a,this.transportSessionId=c,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zl(e),this.stats_=rg(t),this.urlFn=d=>(this.appCheckToken&&(d[Np]=this.appCheckToken),tx(t,ZE,d))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Qb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cI)),Bb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sg((...a)=>{const[c,u,d,f,m]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Zy)this.id=u,this.password=d;else if(c===Zb)u?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(u,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,u]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,u)},()=>{this.onClosed_()},this.urlFn);const i={};i[Zy]="t",i[rx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[nI]=this.scriptTagHolder.uniqueCallbackIdentifier),i[XE]=ig,this.transportSessionId&&(i[$E]=this.transportSessionId),this.lastSessionId&&(i[KE]=this.lastSessionId),this.applicationId&&(i[JE]=this.applicationId),this.appCheckToken&&(i[Np]=this.appCheckToken),typeof location<"u"&&location.hostname&&YE.test(location.hostname)&&(i[jE]=qE);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ca.forceAllow_=!0}static forceDisallow(){ca.forceDisallow_=!0}static isAvailable(){return ca.forceAllow_?!0:!ca.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hb()&&!Vb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Rn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=qS(t),s=GE(i,aI);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[oI]="t",i[nx]=e,i[ix]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Rn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class sg{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ob(),window[eI+this.uniqueCallbackIdentifier]=e,window[tI+this.uniqueCallbackIdentifier]=t,this.myIFrame=sg.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(u){Un("frame writing exception"),u.stack&&Un(u.stack),Un(u)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Un("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[nx]=this.myID,e[ix]=this.myPW,e[rx]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ox+i.length<=sx;){const c=this.pendingSegs.shift();i=i+"&"+iI+s+"="+c.seg+"&"+rI+s+"="+c.ts+"&"+sI+s+"="+c.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(lI)),a=()=>{clearTimeout(s),i()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Un("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=16384,hI=45e3;let fh=null;typeof MozWebSocket<"u"?fh=MozWebSocket:typeof WebSocket<"u"&&(fh=WebSocket);class Pi{constructor(e,t,i,s,a,c,u){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zl(this.connId),this.stats_=rg(t),this.connURL=Pi.connectionURL_(t,c,u,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,a){const c={};return c[XE]=ig,typeof location<"u"&&location.hostname&&YE.test(location.hostname)&&(c[jE]=qE),t&&(c[$E]=t),i&&(c[KE]=i),s&&(c[Np]=s),a&&(c[JE]=a),tx(e,QE,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,io.set("previous_websocket_failure",!0);try{let i;cR(),this.mySock=new fh(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Pi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&fh!==null&&!Pi.forceDisallow_}static previouslyFailed(){return io.isInMemoryStorage||io.get("previous_websocket_failure")===!0}markConnectionHealthy(){io.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Ul(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Rn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=GE(t,uI);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hI))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pi.responsesRequiredToBeHealthy=2;Pi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{static get ALL_TRANSPORTS(){return[ca,Pi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Pi&&Pi.isAvailable();let i=t&&!Pi.previouslyFailed();if(e.webSocketOnly&&(t||ei("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Pi];else{const s=this.transports_=[];for(const a of Bl.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Bl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=6e4,fI=5e3,pI=10*1024,mI=100*1024,Uf="t",e0="d",gI="s",t0="r",_I="e",n0="o",i0="a",r0="n",s0="p",vI="h";class yI{constructor(e,t,i,s,a,c,u,d,f,m){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=c,this.onReady_=u,this.onDisconnect_=d,this.onKill_=f,this.lastSessionId=m,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zl("c:"+this.id+":"),this.transportManager_=new Bl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Pl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>mI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Uf in e){const t=e[Uf];t===i0?this.upgradeIfSecondaryHealthy_():t===t0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===n0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=_l("t",e),i=_l("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:s0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:i0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:r0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=_l("t",e),i=_l("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=_l(Uf,e);if(e0 in e){const i=e[e0];if(t===vI){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===r0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===gI?this.onConnectionShutdown_(i):t===t0?this.onReset_(i):t===_I?Pp("Server Error: "+i):t===n0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pp("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ig!==i&&ei("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Pl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:s0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(io.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.allowedEvents_=e,this.listeners_={},Ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!i||i===s[a].context)){s.splice(a,1);return}}validateEventType_(e){Ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph extends lx{static getInstance(){return new ph}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=32,a0=768;class qt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Bt(){return new qt("")}function vt(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Cs(n){return n.pieces_.length-n.pieceNum_}function jt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new qt(n.pieces_,e)}function cx(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function SI(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ux(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function hx(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new qt(e,0)}function un(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof qt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new qt(t,0)}function St(n){return n.pieceNum_>=n.pieces_.length}function vi(n,e){const t=vt(n),i=vt(e);if(t===null)return e;if(t===i)return vi(jt(n),jt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function dx(n,e){if(Cs(n)!==Cs(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Li(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Cs(n)>Cs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class EI{constructor(e,t){this.errorPrefix_=t,this.parts_=ux(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ah(this.parts_[i]);fx(this)}}function xI(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ah(e),fx(n)}function TI(n){const e=n.parts_.pop();n.byteLength_-=Ah(e),n.parts_.length>0&&(n.byteLength_-=1)}function fx(n){if(n.byteLength_>a0)throw new Error(n.errorPrefix_+"has a key path longer than "+a0+" bytes ("+n.byteLength_+").");if(n.parts_.length>o0)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+o0+") or object contains a cycle "+Qs(n))}function Qs(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og extends lx{static getInstance(){return new og}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return Ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=1e3,MI=300*1e3,l0=30*1e3,wI=1.3,CI=3e4,RI="server_kill",c0=3;class Ir extends ax{constructor(e,t,i,s,a,c,u,d){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=u,this.authOverride_=d,this.id=Ir.nextPersistentConnectionId_++,this.log_=Zl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vl,this.maxReconnectDelay_=MI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");og.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ph.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Rn(a)),Ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Rh,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const u=c.d;c.s==="ok"?t.resolve(u):t.reject(u)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,i,s){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),Ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Ne(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const u={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(c).set(a,u),this.connected_&&this.sendListen_(u)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const a={p:i},c="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,u=>{const d=u.d,f=u.s;Ir.warnOnListenWarnings_(d,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",u),f!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(f,d))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Br(e,"w")){const i=ya(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();ei(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=l0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=mR(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const a=s.s,c=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),Ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},c="n";s&&(a.q=i,a.t=s),this.sendRequest(c,a)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const a={p:t,d:i};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{s&&setTimeout(()=>{s(c.s,c.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,a){this.initConnection_();const c={p:t,d:i};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:s}),this.outstandingPutCount_++;const u=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(u):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const a=i.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Rn(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Pp("Unrecognized action received from server: "+Rn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CI&&(this.reconnectDelay_=vl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ir.nextConnectionId_++,a=this.lastSessionId;let c=!1,u=null;const d=function(){u?u.close():(c=!0,i())},f=function(g){Ne(u,"sendRequest call when we're not connected not allowed."),u.sendRequest(g)};this.realtime_={close:d,sendRequest:f};const m=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[g,_]=await Promise.all([this.authTokenProvider_.getToken(m),this.appCheckTokenProvider_.getToken(m)]);c?Un("getToken() completed but was canceled"):(Un("getToken() completed. Creating connection."),this.authToken_=g&&g.accessToken,this.appCheckToken_=_&&_.token,u=new yI(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,E=>{ei(E+" ("+this.repoInfo_.toString()+")"),this.interrupt(RI)},a))}catch(g){this.log_("Failed to get token: "+g),c||(this.repoInfo_.nodeAdmin&&ei(g),d())}}}interrupt(e){Un("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Un("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xp(this.interruptReasons_)&&(this.reconnectDelay_=vl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(a=>ng(a)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new qt(e).toString();let s;if(this.listens.has(i)){const a=this.listens.get(i);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Un("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=c0&&(this.reconnectDelay_=l0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Un("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=c0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+BE.replace(/\./g,"-")]=1,Vm()?e["framework.cordova"]=1:tE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ph.getInstance().currentlyOnline();return xp(this.interruptReasons_)&&e}}Ir.nextPersistentConnectionId_=0;Ir.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new xt(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new xt(Ea,e),s=new xt(Ea,t);return this.compare(i,s)!==0}minPost(){return xt.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu;class px extends Nh{static get __EMPTY_NODE(){return vu}static set __EMPTY_NODE(e){vu=e}compare(e,t){return Da(e.name,t.name)}isDefinedOn(e){throw Ia("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return xt.MIN}maxPost(){return new xt(ho,vu)}makePost(e,t){return Ne(typeof e=="string","KeyIndex indexValue must always be a string."),new xt(e,vu)}toString(){return".key"}}const ma=new px;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,t,i,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?i(e.key,t):1,s&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xn{constructor(e,t,i,s,a){this.key=e,this.value=t,this.color=i??xn.RED,this.left=s??Zn.EMPTY_NODE,this.right=a??Zn.EMPTY_NODE}copy(e,t,i,s,a){return new xn(e??this.key,t??this.value,i??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const a=i(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Zn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Zn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xn.RED=!0;xn.BLACK=!1;class AI{copy(e,t,i,s,a){return this}insert(e,t,i){return new xn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Zn{constructor(e,t=Zn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Zn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,xn.BLACK,null,null))}remove(e){return new Zn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xn.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new yu(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new yu(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new yu(this.root_,null,this.comparator_,!0,e)}}Zn.EMPTY_NODE=new AI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(n,e){return Da(n.name,e.name)}function ag(n,e){return Da(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dp;function II(n){Dp=n}const mx=function(n){return typeof n=="number"?"number:"+WE(n):"string:"+n},gx=function(n){if(n.isLeafNode()){const e=n.val();Ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Br(e,".sv"),"Priority must be a string or number.")}else Ne(n===Dp||n.isEmpty(),"priority of unexpected type.");Ne(n===Dp||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u0;class En{static set __childrenNodeConstructor(e){u0=e}static get __childrenNodeConstructor(){return u0}constructor(e,t=En.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gx(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new En(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:En.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return St(e)?this:vt(e)===".priority"?this.priorityNode_:En.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:En.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=vt(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(Ne(i!==".priority"||Cs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,En.__childrenNodeConstructor.EMPTY_NODE.updateChild(jt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+mx(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=WE(this.value_):e+=this.value_,this.lazyHash_=HE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===En.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof En.__childrenNodeConstructor?-1:(Ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=En.VALUE_TYPE_ORDER.indexOf(t),a=En.VALUE_TYPE_ORDER.indexOf(i);return Ne(s>=0,"Unknown leaf type: "+t),Ne(a>=0,"Unknown leaf type: "+i),s===a?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}En.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _x,vx;function PI(n){_x=n}function NI(n){vx=n}class DI extends Nh{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),a=i.compareTo(s);return a===0?Da(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return xt.MIN}maxPost(){return new xt(ho,new En("[PRIORITY-POST]",vx))}makePost(e,t){const i=_x(e);return new xt(t,new En("[PRIORITY-POST]",i))}toString(){return".priority"}}const On=new DI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=Math.log(2);class UI{constructor(e){const t=a=>parseInt(Math.log(a)/LI,10),i=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const mh=function(n,e,t,i){n.sort(e);const s=function(d,f){const m=f-d;let g,_;if(m===0)return null;if(m===1)return g=n[d],_=t?t(g):g,new xn(_,g.node,xn.BLACK,null,null);{const E=parseInt(m/2,10)+d,x=s(d,E),M=s(E+1,f);return g=n[E],_=t?t(g):g,new xn(_,g.node,xn.BLACK,x,M)}},a=function(d){let f=null,m=null,g=n.length;const _=function(x,M){const S=g-x,y=g;g-=x;const P=s(S+1,y),I=n[S],A=t?t(I):I;E(new xn(A,I.node,M,null,P))},E=function(x){f?(f.left=x,f=x):(m=x,f=x)};for(let x=0;x<d.count;++x){const M=d.nextBitIsOne(),S=Math.pow(2,d.count-(x+1));M?_(S,xn.BLACK):(_(S,xn.BLACK),_(S,xn.RED))}return m},c=new UI(n.length),u=a(c);return new Zn(i||e,u)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Of;const $o={};class Cr{static get Default(){return Ne($o&&On,"ChildrenNode.ts has not been loaded"),Of=Of||new Cr({".priority":$o},{".priority":On}),Of}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ya(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Zn?t:null}hasIndex(e){return Br(this.indexSet_,e.toString())}addIndex(e,t){Ne(e!==ma,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const a=t.getIterator(xt.Wrap);let c=a.getNext();for(;c;)s=s||e.isDefinedOn(c.node),i.push(c),c=a.getNext();let u;s?u=mh(i,e.getCompare()):u=$o;const d=e.toString(),f={...this.indexSet_};f[d]=e;const m={...this.indexes_};return m[d]=u,new Cr(m,f)}addToIndexes(e,t){const i=oh(this.indexes_,(s,a)=>{const c=ya(this.indexSet_,a);if(Ne(c,"Missing index implementation for "+a),s===$o)if(c.isDefinedOn(e.node)){const u=[],d=t.getIterator(xt.Wrap);let f=d.getNext();for(;f;)f.name!==e.name&&u.push(f),f=d.getNext();return u.push(e),mh(u,c.getCompare())}else return $o;else{const u=t.get(e.name);let d=s;return u&&(d=d.remove(new xt(e.name,u))),d.insert(e,e.node)}});return new Cr(i,this.indexSet_)}removeFromIndexes(e,t){const i=oh(this.indexes_,s=>{if(s===$o)return s;{const a=t.get(e.name);return a?s.remove(new xt(e.name,a)):s}});return new Cr(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class Nt{static get EMPTY_NODE(){return yl||(yl=new Nt(new Zn(ag),null,Cr.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&gx(this.priorityNode_),this.children_.isEmpty()&&Ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yl}updatePriority(e){return this.children_.isEmpty()?this:new Nt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?yl:t}}getChild(e){const t=vt(e);return t===null?this:this.getImmediateChild(t).getChild(jt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new xt(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(i,this.children_));const c=s.isEmpty()?yl:this.priorityNode_;return new Nt(s,c,a)}}updateChild(e,t){const i=vt(e);if(i===null)return t;{Ne(vt(e)!==".priority"||Cs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(jt(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,a=!0;if(this.forEachChild(On,(c,u)=>{t[c]=u.val(e),i++,a&&Nt.INTEGER_REGEXP_.test(c)?s=Math.max(s,Number(c)):a=!1}),!e&&a&&s<2*i){const c=[];for(const u in t)c[u]=t[u];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+mx(this.getPriority().val())+":"),this.forEachChild(On,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":HE(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const a=s.getPredecessorKey(new xt(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new xt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new xt(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,xt.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,xt.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ec?-1:0}withIndex(e){if(e===ma||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Nt(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ma||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(On),s=t.getIterator(On);let a=i.getNext(),c=s.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=i.getNext(),c=s.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===ma?null:this.indexMap_.get(e.toString())}}Nt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class OI extends Nt{constructor(){super(new Zn(ag),Nt.EMPTY_NODE,Cr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Nt.EMPTY_NODE}isEmpty(){return!1}}const ec=new OI;Object.defineProperties(xt,{MIN:{value:new xt(Ea,Nt.EMPTY_NODE)},MAX:{value:new xt(ho,ec)}});px.__EMPTY_NODE=Nt.EMPTY_NODE;En.__childrenNodeConstructor=Nt;II(ec);NI(ec);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=!0;function Cn(n,e=null){if(n===null)return Nt.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),Ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new En(t,Cn(e))}if(!(n instanceof Array)&&kI){const t=[];let i=!1;if(Si(n,(c,u)=>{if(c.substring(0,1)!=="."){const d=Cn(u);d.isEmpty()||(i=i||!d.getPriority().isEmpty(),t.push(new xt(c,d)))}}),t.length===0)return Nt.EMPTY_NODE;const a=mh(t,bI,c=>c.name,ag);if(i){const c=mh(t,On.getCompare());return new Nt(a,Cn(e),new Cr({".priority":c},{".priority":On}))}else return new Nt(a,Cn(e),Cr.Default)}else{let t=Nt.EMPTY_NODE;return Si(n,(i,s)=>{if(Br(n,i)&&i.substring(0,1)!=="."){const a=Cn(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(i,a))}}),t.updatePriority(Cn(e))}}PI(Cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI extends Nh{constructor(e){super(),this.indexPath_=e,Ne(!St(e)&&vt(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),a=i.compareTo(s);return a===0?Da(e.name,t.name):a}makePost(e,t){const i=Cn(e),s=Nt.EMPTY_NODE.updateChild(this.indexPath_,i);return new xt(t,s)}maxPost(){const e=Nt.EMPTY_NODE.updateChild(this.indexPath_,ec);return new xt(ho,e)}toString(){return ux(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI extends Nh{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Da(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return xt.MIN}maxPost(){return xt.MAX}makePost(e,t){const i=Cn(e);return new xt(t,i)}toString(){return".value"}}const zI=new BI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(n){return{type:"value",snapshotNode:n}}function VI(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function GI(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function h0(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function WI(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=On}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ea}hasEnd(){return this.endSet_}getIndexEndValue(){return Ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ho}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===On}copy(){const e=new lg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function d0(n){const e={};if(n.isDefault())return e;let t;if(n.index_===On?t="$priority":n.index_===zI?t="$value":n.index_===ma?t="$key":(Ne(n.index_ instanceof FI,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Rn(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Rn(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Rn(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Rn(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Rn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function f0(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==On&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends ax{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Zl("p:rest:"),this.listens_={}}listen(e,t,i,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=gh.getListenId_(e,i),u={};this.listens_[c]=u;const d=d0(e._queryParams);this.restRequest_(a+".json",d,(f,m)=>{let g=m;if(f===404&&(g=null,f=null),f===null&&this.onDataUpdate_(a,g,!1,i),ya(this.listens_,c)===u){let _;f?f===401?_="permission_denied":_="rest_error:"+f:_="ok",s(_,null)}})}unlisten(e,t){const i=gh.getListenId_(e,t);delete this.listens_[i]}get(e){const t=d0(e._queryParams),i=e._path.toString(),s=new Rh;return this.restRequest_(i+".json",t,(a,c)=>{let u=c;a===404&&(u=null,a=null),a===null?(this.onDataUpdate_(i,u,!1,null),s.resolve(u)):s.reject(new Error(u))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Pa(t);this.log_("Sending REST request for "+c);const u=new XMLHttpRequest;u.onreadystatechange=()=>{if(i&&u.readyState===4){this.log_("REST Response for "+c+" received. status:",u.status,"response:",u.responseText);let d=null;if(u.status>=200&&u.status<300){try{d=Ul(u.responseText)}catch{ei("Failed to parse JSON response for "+c+": "+u.responseText)}i(null,d)}else u.status!==401&&u.status!==404&&ei("Got unsuccessful REST response for "+c+" Status: "+u.status),i(u.status);i=null}},u.open("GET",c,!0),u.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.rootNode_=Nt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(){return{value:null,children:new Map}}function yx(n,e,t){if(St(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=vt(e);n.children.has(i)||n.children.set(i,_h());const s=n.children.get(i);e=jt(e),yx(s,e,t)}}function Lp(n,e,t){n.value!==null?t(e,n.value):$I(n,(i,s)=>{const a=new qt(e.toString()+"/"+i);Lp(s,a,t)})}function $I(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Si(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=10*1e3,qI=30*1e3,YI=300*1e3;class KI{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new jI(e);const i=p0+(qI-p0)*Math.random();Pl(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Si(e,(s,a)=>{a>0&&Br(this.statsToReport_,s)&&(t[s]=a,i=!0)}),i&&this.server_.reportStats(t),Pl(this.reportStats_.bind(this),Math.floor(Math.random()*2*YI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ji;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ji||(ji={}));function Sx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ex(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xx(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ji.ACK_USER_WRITE,this.source=Sx()}operationForChild(e){if(St(this.path)){if(this.affectedTree.value!=null)return Ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new qt(e));return new vh(Bt(),t,this.revert)}}else return Ne(vt(this.path)===e,"operationForChild called for unrelated child."),new vh(jt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ji.OVERWRITE}operationForChild(e){return St(this.path)?new fo(this.source,Bt(),this.snap.getImmediateChild(e)):new fo(this.source,jt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ji.MERGE}operationForChild(e){if(St(this.path)){const t=this.children.subtree(new qt(e));return t.isEmpty()?null:t.value?new fo(this.source,Bt(),t.value):new zl(this.source,Bt(),t)}else return Ne(vt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zl(this.source,jt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(St(e))return this.isFullyInitialized()&&!this.filtered_;const t=vt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function JI(n,e,t,i){const s=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(WI(c.childName,c.snapshotNode))}),Sl(n,s,"child_removed",e,i,t),Sl(n,s,"child_added",e,i,t),Sl(n,s,"child_moved",a,i,t),Sl(n,s,"child_changed",e,i,t),Sl(n,s,"value",e,i,t),s}function Sl(n,e,t,i,s,a){const c=i.filter(u=>u.type===t);c.sort((u,d)=>ZI(n,u,d)),c.forEach(u=>{const d=QI(n,u,a);s.forEach(f=>{f.respondsTo(u.type)&&e.push(f.createEvent(d,n.query_))})})}function QI(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ZI(n,e,t){if(e.childName==null||t.childName==null)throw Ia("Should only compare child_ events.");const i=new xt(e.childName,e.snapshotNode),s=new xt(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(n,e){return{eventCache:n,serverCache:e}}function Nl(n,e,t,i){return Tx(new cg(e,t,i),n.serverCache)}function Mx(n,e,t,i){return Tx(n.eventCache,new cg(e,t,i))}function Up(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function po(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kf;const eP=()=>(kf||(kf=new Zn(zb)),kf);class $t{static fromObject(e){let t=new $t(null);return Si(e,(i,s)=>{t=t.set(new qt(i),s)}),t}constructor(e,t=eP()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Bt(),value:this.value};if(St(e))return null;{const i=vt(e),s=this.children.get(i);if(s!==null){const a=s.findRootMostMatchingPathAndValue(jt(e),t);return a!=null?{path:un(new qt(i),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(St(e))return this;{const t=vt(e),i=this.children.get(t);return i!==null?i.subtree(jt(e)):new $t(null)}}set(e,t){if(St(e))return new $t(t,this.children);{const i=vt(e),a=(this.children.get(i)||new $t(null)).set(jt(e),t),c=this.children.insert(i,a);return new $t(this.value,c)}}remove(e){if(St(e))return this.children.isEmpty()?new $t(null):new $t(null,this.children);{const t=vt(e),i=this.children.get(t);if(i){const s=i.remove(jt(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new $t(null):new $t(this.value,a)}else return this}}get(e){if(St(e))return this.value;{const t=vt(e),i=this.children.get(t);return i?i.get(jt(e)):null}}setTree(e,t){if(St(e))return t;{const i=vt(e),a=(this.children.get(i)||new $t(null)).setTree(jt(e),t);let c;return a.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,a),new $t(this.value,c)}}fold(e){return this.fold_(Bt(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,a)=>{i[s]=a.fold_(un(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Bt(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(St(e))return null;{const a=vt(e),c=this.children.get(a);return c?c.findOnPath_(jt(e),un(t,a),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Bt(),t)}foreachOnPath_(e,t,i){if(St(e))return this;{this.value&&i(t,this.value);const s=vt(e),a=this.children.get(s);return a?a.foreachOnPath_(jt(e),un(t,s),i):new $t(null)}}foreach(e){this.foreach_(Bt(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(un(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.writeTree_=e}static empty(){return new ki(new $t(null))}}function Dl(n,e,t){if(St(e))return new ki(new $t(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let a=i.value;const c=vi(s,e);return a=a.updateChild(c,t),new ki(n.writeTree_.set(s,a))}else{const s=new $t(t),a=n.writeTree_.setTree(e,s);return new ki(a)}}}function m0(n,e,t){let i=n;return Si(t,(s,a)=>{i=Dl(i,un(e,s),a)}),i}function g0(n,e){if(St(e))return ki.empty();{const t=n.writeTree_.setTree(e,new $t(null));return new ki(t)}}function Op(n,e){return So(n,e)!=null}function So(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(vi(t.path,e)):null}function _0(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(On,(i,s)=>{e.push(new xt(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new xt(i,s.value))}),e}function xs(n,e){if(St(e))return n;{const t=So(n,e);return t!=null?new ki(new $t(t)):new ki(n.writeTree_.subtree(e))}}function kp(n){return n.writeTree_.isEmpty()}function xa(n,e){return wx(Bt(),n.writeTree_,e)}function wx(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(Ne(a.value!==null,"Priority writes must always be leaf nodes"),i=a.value):t=wx(un(n,s),a,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(un(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(n,e){return Px(e,n)}function tP(n,e,t,i,s){Ne(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Dl(n.visibleWrites,e,t)),n.lastWriteId=i}function nP(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function iP(n,e){const t=n.allWrites.findIndex(u=>u.writeId===e);Ne(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,a=!1,c=n.allWrites.length-1;for(;s&&c>=0;){const u=n.allWrites[c];u.visible&&(c>=t&&rP(u,i.path)?s=!1:Li(i.path,u.path)&&(a=!0)),c--}if(s){if(a)return sP(n),!0;if(i.snap)n.visibleWrites=g0(n.visibleWrites,i.path);else{const u=i.children;Si(u,d=>{n.visibleWrites=g0(n.visibleWrites,un(i.path,d))})}return!0}else return!1}function rP(n,e){if(n.snap)return Li(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Li(un(n.path,t),e))return!0;return!1}function sP(n){n.visibleWrites=Rx(n.allWrites,oP,Bt()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function oP(n){return n.visible}function Rx(n,e,t){let i=ki.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const c=a.path;let u;if(a.snap)Li(t,c)?(u=vi(t,c),i=Dl(i,u,a.snap)):Li(c,t)&&(u=vi(c,t),i=Dl(i,Bt(),a.snap.getChild(u)));else if(a.children){if(Li(t,c))u=vi(t,c),i=m0(i,u,a.children);else if(Li(c,t))if(u=vi(c,t),St(u))i=m0(i,Bt(),a.children);else{const d=ya(a.children,vt(u));if(d){const f=d.getChild(jt(u));i=Dl(i,Bt(),f)}}}else throw Ia("WriteRecord should have .snap or .children")}}return i}function Ax(n,e,t,i,s){if(!i&&!s){const a=So(n.visibleWrites,e);if(a!=null)return a;{const c=xs(n.visibleWrites,e);if(kp(c))return t;if(t==null&&!Op(c,Bt()))return null;{const u=t||Nt.EMPTY_NODE;return xa(c,u)}}}else{const a=xs(n.visibleWrites,e);if(!s&&kp(a))return t;if(!s&&t==null&&!Op(a,Bt()))return null;{const c=function(f){return(f.visible||s)&&(!i||!~i.indexOf(f.writeId))&&(Li(f.path,e)||Li(e,f.path))},u=Rx(n.allWrites,c,e),d=t||Nt.EMPTY_NODE;return xa(u,d)}}}function aP(n,e,t){let i=Nt.EMPTY_NODE;const s=So(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(On,(a,c)=>{i=i.updateImmediateChild(a,c)}),i;if(t){const a=xs(n.visibleWrites,e);return t.forEachChild(On,(c,u)=>{const d=xa(xs(a,new qt(c)),u);i=i.updateImmediateChild(c,d)}),_0(a).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}else{const a=xs(n.visibleWrites,e);return _0(a).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}}function lP(n,e,t,i,s){Ne(i||s,"Either existingEventSnap or existingServerSnap must exist");const a=un(e,t);if(Op(n.visibleWrites,a))return null;{const c=xs(n.visibleWrites,a);return kp(c)?s.getChild(t):xa(c,s.getChild(t))}}function cP(n,e,t,i){const s=un(e,t),a=So(n.visibleWrites,s);if(a!=null)return a;if(i.isCompleteForChild(t)){const c=xs(n.visibleWrites,s);return xa(c,i.getNode().getImmediateChild(t))}else return null}function uP(n,e){return So(n.visibleWrites,e)}function hP(n,e,t,i,s,a,c){let u;const d=xs(n.visibleWrites,e),f=So(d,Bt());if(f!=null)u=f;else if(t!=null)u=xa(d,t);else return[];if(u=u.withIndex(c),!u.isEmpty()&&!u.isLeafNode()){const m=[],g=c.getCompare(),_=a?u.getReverseIteratorFrom(i,c):u.getIteratorFrom(i,c);let E=_.getNext();for(;E&&m.length<s;)g(E,i)!==0&&m.push(E),E=_.getNext();return m}else return[]}function dP(){return{visibleWrites:ki.empty(),allWrites:[],lastWriteId:-1}}function Fp(n,e,t,i){return Ax(n.writeTree,n.treePath,e,t,i)}function bx(n,e){return aP(n.writeTree,n.treePath,e)}function v0(n,e,t,i){return lP(n.writeTree,n.treePath,e,t,i)}function yh(n,e){return uP(n.writeTree,un(n.treePath,e))}function fP(n,e,t,i,s,a){return hP(n.writeTree,n.treePath,e,t,i,s,a)}function ug(n,e,t){return cP(n.writeTree,n.treePath,e,t)}function Ix(n,e){return Px(un(n.treePath,e),n.writeTree)}function Px(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;Ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Ne(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(i,h0(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(i,GI(i,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(i,VI(i,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(i,h0(i,e.snapshotNode,s.oldSnap));else throw Ia("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Nx=new mP;class hg{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new cg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ug(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:po(this.viewCache_),a=fP(this.writes_,s,t,1,i,e);return a.length===0?null:a[0]}}function gP(n,e){Ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),Ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function _P(n,e,t,i,s){const a=new pP;let c,u;if(t.type===ji.OVERWRITE){const f=t;f.source.fromUser?c=Bp(n,e,f.path,f.snap,i,s,a):(Ne(f.source.fromServer,"Unknown source."),u=f.source.tagged||e.serverCache.isFiltered()&&!St(f.path),c=Sh(n,e,f.path,f.snap,i,s,u,a))}else if(t.type===ji.MERGE){const f=t;f.source.fromUser?c=yP(n,e,f.path,f.children,i,s,a):(Ne(f.source.fromServer,"Unknown source."),u=f.source.tagged||e.serverCache.isFiltered(),c=zp(n,e,f.path,f.children,i,s,u,a))}else if(t.type===ji.ACK_USER_WRITE){const f=t;f.revert?c=xP(n,e,f.path,i,s,a):c=SP(n,e,f.path,f.affectedTree,i,s,a)}else if(t.type===ji.LISTEN_COMPLETE)c=EP(n,e,t.path,i,a);else throw Ia("Unknown operation type: "+t.type);const d=a.getChanges();return vP(e,c,d),{viewCache:c,changes:d}}function vP(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),a=Up(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(a)||!i.getNode().getPriority().equals(a.getPriority()))&&t.push(HI(Up(e)))}}function Dx(n,e,t,i,s,a){const c=e.eventCache;if(yh(i,t)!=null)return e;{let u,d;if(St(t))if(Ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const f=po(e),m=f instanceof Nt?f:Nt.EMPTY_NODE,g=bx(i,m);u=n.filter.updateFullNode(e.eventCache.getNode(),g,a)}else{const f=Fp(i,po(e));u=n.filter.updateFullNode(e.eventCache.getNode(),f,a)}else{const f=vt(t);if(f===".priority"){Ne(Cs(t)===1,"Can't have a priority with additional path components");const m=c.getNode();d=e.serverCache.getNode();const g=v0(i,t,m,d);g!=null?u=n.filter.updatePriority(m,g):u=c.getNode()}else{const m=jt(t);let g;if(c.isCompleteForChild(f)){d=e.serverCache.getNode();const _=v0(i,t,c.getNode(),d);_!=null?g=c.getNode().getImmediateChild(f).updateChild(m,_):g=c.getNode().getImmediateChild(f)}else g=ug(i,f,e.serverCache);g!=null?u=n.filter.updateChild(c.getNode(),f,g,m,s,a):u=c.getNode()}}return Nl(e,u,c.isFullyInitialized()||St(t),n.filter.filtersNodes())}}function Sh(n,e,t,i,s,a,c,u){const d=e.serverCache;let f;const m=c?n.filter:n.filter.getIndexedFilter();if(St(t))f=m.updateFullNode(d.getNode(),i,null);else if(m.filtersNodes()&&!d.isFiltered()){const E=d.getNode().updateChild(t,i);f=m.updateFullNode(d.getNode(),E,null)}else{const E=vt(t);if(!d.isCompleteForPath(t)&&Cs(t)>1)return e;const x=jt(t),S=d.getNode().getImmediateChild(E).updateChild(x,i);E===".priority"?f=m.updatePriority(d.getNode(),S):f=m.updateChild(d.getNode(),E,S,x,Nx,null)}const g=Mx(e,f,d.isFullyInitialized()||St(t),m.filtersNodes()),_=new hg(s,g,a);return Dx(n,g,t,s,_,u)}function Bp(n,e,t,i,s,a,c){const u=e.eventCache;let d,f;const m=new hg(s,e,a);if(St(t))f=n.filter.updateFullNode(e.eventCache.getNode(),i,c),d=Nl(e,f,!0,n.filter.filtersNodes());else{const g=vt(t);if(g===".priority")f=n.filter.updatePriority(e.eventCache.getNode(),i),d=Nl(e,f,u.isFullyInitialized(),u.isFiltered());else{const _=jt(t),E=u.getNode().getImmediateChild(g);let x;if(St(_))x=i;else{const M=m.getCompleteChild(g);M!=null?cx(_)===".priority"&&M.getChild(hx(_)).isEmpty()?x=M:x=M.updateChild(_,i):x=Nt.EMPTY_NODE}if(E.equals(x))d=e;else{const M=n.filter.updateChild(u.getNode(),g,x,_,m,c);d=Nl(e,M,u.isFullyInitialized(),n.filter.filtersNodes())}}}return d}function y0(n,e){return n.eventCache.isCompleteForChild(e)}function yP(n,e,t,i,s,a,c){let u=e;return i.foreach((d,f)=>{const m=un(t,d);y0(e,vt(m))&&(u=Bp(n,u,m,f,s,a,c))}),i.foreach((d,f)=>{const m=un(t,d);y0(e,vt(m))||(u=Bp(n,u,m,f,s,a,c))}),u}function S0(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function zp(n,e,t,i,s,a,c,u){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,f;St(t)?f=i:f=new $t(null).setTree(t,i);const m=e.serverCache.getNode();return f.children.inorderTraversal((g,_)=>{if(m.hasChild(g)){const E=e.serverCache.getNode().getImmediateChild(g),x=S0(n,E,_);d=Sh(n,d,new qt(g),x,s,a,c,u)}}),f.children.inorderTraversal((g,_)=>{const E=!e.serverCache.isCompleteForChild(g)&&_.value===null;if(!m.hasChild(g)&&!E){const x=e.serverCache.getNode().getImmediateChild(g),M=S0(n,x,_);d=Sh(n,d,new qt(g),M,s,a,c,u)}}),d}function SP(n,e,t,i,s,a,c){if(yh(s,t)!=null)return e;const u=e.serverCache.isFiltered(),d=e.serverCache;if(i.value!=null){if(St(t)&&d.isFullyInitialized()||d.isCompleteForPath(t))return Sh(n,e,t,d.getNode().getChild(t),s,a,u,c);if(St(t)){let f=new $t(null);return d.getNode().forEachChild(ma,(m,g)=>{f=f.set(new qt(m),g)}),zp(n,e,t,f,s,a,u,c)}else return e}else{let f=new $t(null);return i.foreach((m,g)=>{const _=un(t,m);d.isCompleteForPath(_)&&(f=f.set(m,d.getNode().getChild(_)))}),zp(n,e,t,f,s,a,u,c)}}function EP(n,e,t,i,s){const a=e.serverCache,c=Mx(e,a.getNode(),a.isFullyInitialized()||St(t),a.isFiltered());return Dx(n,c,t,i,Nx,s)}function xP(n,e,t,i,s,a){let c;if(yh(i,t)!=null)return e;{const u=new hg(i,e,s),d=e.eventCache.getNode();let f;if(St(t)||vt(t)===".priority"){let m;if(e.serverCache.isFullyInitialized())m=Fp(i,po(e));else{const g=e.serverCache.getNode();Ne(g instanceof Nt,"serverChildren would be complete if leaf node"),m=bx(i,g)}m=m,f=n.filter.updateFullNode(d,m,a)}else{const m=vt(t);let g=ug(i,m,e.serverCache);g==null&&e.serverCache.isCompleteForChild(m)&&(g=d.getImmediateChild(m)),g!=null?f=n.filter.updateChild(d,m,g,jt(t),u,a):e.eventCache.getNode().hasChild(m)?f=n.filter.updateChild(d,m,Nt.EMPTY_NODE,jt(t),u,a):f=d,f.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Fp(i,po(e)),c.isLeafNode()&&(f=n.filter.updateFullNode(f,c,a)))}return c=e.serverCache.isFullyInitialized()||yh(i,Bt())!=null,Nl(e,f,c,n.filter.filtersNodes())}}function TP(n,e){const t=po(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!St(e)&&!t.getImmediateChild(vt(e)).isEmpty())?t.getChild(e):null}function E0(n,e,t,i){e.type===ji.MERGE&&e.source.queryId!==null&&(Ne(po(n.viewCache_),"We should always have a full cache before handling merges"),Ne(Up(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=_P(n.processor_,s,e,t,i);return gP(n.processor_,a.viewCache),Ne(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,MP(n,a.changes,a.viewCache.eventCache.getNode())}function MP(n,e,t,i){const s=n.eventRegistrations_;return JI(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x0;function wP(n){Ne(!x0,"__referenceConstructor has already been defined"),x0=n}function dg(n,e,t,i){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return Ne(a!=null,"SyncTree gave us an op for an invalid query."),E0(a,e,t,i)}else{let a=[];for(const c of n.views.values())a=a.concat(E0(c,e,t,i));return a}}function fg(n,e){let t=null;for(const i of n.views.values())t=t||TP(i,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T0;function CP(n){Ne(!T0,"__referenceConstructor has already been defined"),T0=n}class M0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $t(null),this.pendingWriteTree_=dP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Lx(n,e,t,i,s){return tP(n.pendingWriteTree_,e,t,i,s),s?Lh(n,new fo(Sx(),e,t)):[]}function ro(n,e,t=!1){const i=nP(n.pendingWriteTree_,e);if(iP(n.pendingWriteTree_,e)){let a=new $t(null);return i.snap!=null?a=a.set(Bt(),!0):Si(i.children,c=>{a=a.set(new qt(c),!0)}),Lh(n,new vh(i.path,a,t))}else return[]}function Dh(n,e,t){return Lh(n,new fo(Ex(),e,t))}function RP(n,e,t){const i=$t.fromObject(t);return Lh(n,new zl(Ex(),e,i))}function AP(n,e,t,i){const s=kx(n,i);if(s!=null){const a=Fx(s),c=a.path,u=a.queryId,d=vi(c,e),f=new fo(xx(u),d,t);return Bx(n,c,f)}else return[]}function bP(n,e,t,i){const s=kx(n,i);if(s){const a=Fx(s),c=a.path,u=a.queryId,d=vi(c,e),f=$t.fromObject(t),m=new zl(xx(u),d,f);return Bx(n,c,m)}else return[]}function pg(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(c,u)=>{const d=vi(c,e),f=fg(u,d);if(f)return f});return Ax(s,e,a,t,!0)}function Lh(n,e){return Ux(e,n.syncPointTree_,null,Cx(n.pendingWriteTree_,Bt()))}function Ux(n,e,t,i){if(St(n.path))return Ox(n,e,t,i);{const s=e.get(Bt());t==null&&s!=null&&(t=fg(s,Bt()));let a=[];const c=vt(n.path),u=n.operationForChild(c),d=e.children.get(c);if(d&&u){const f=t?t.getImmediateChild(c):null,m=Ix(i,c);a=a.concat(Ux(u,d,f,m))}return s&&(a=a.concat(dg(s,n,i,t))),a}}function Ox(n,e,t,i){const s=e.get(Bt());t==null&&s!=null&&(t=fg(s,Bt()));let a=[];return e.children.inorderTraversal((c,u)=>{const d=t?t.getImmediateChild(c):null,f=Ix(i,c),m=n.operationForChild(c);m&&(a=a.concat(Ox(m,u,d,f)))}),s&&(a=a.concat(dg(s,n,i,t))),a}function kx(n,e){return n.tagToQueryMap.get(e)}function Fx(n){const e=n.indexOf("$");return Ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new qt(n.substr(0,e))}}function Bx(n,e,t){const i=n.syncPointTree_.get(e);Ne(i,"Missing sync point for query tag that we're tracking");const s=Cx(n.pendingWriteTree_,e);return dg(i,t,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new mg(t)}node(){return this.node_}}class gg{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=un(this.path_,e);return new gg(this.syncTree_,t)}node(){return pg(this.syncTree_,this.path_)}}const IP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},w0=function(n,e,t){if(!n||typeof n!="object")return n;if(Ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return PP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return NP(n[".sv"],e);Ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},PP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:Ne(!1,"Unexpected server value: "+n)}},NP=function(n,e,t){n.hasOwnProperty("increment")||Ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&Ne(!1,"Unexpected increment value: "+i);const s=e.node();if(Ne(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const c=s.getValue();return typeof c!="number"?i:c+i},DP=function(n,e,t,i){return _g(e,new gg(t,n),i)},zx=function(n,e,t){return _g(n,new mg(e),t)};function _g(n,e,t){const i=n.getPriority().val(),s=w0(i,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const c=n,u=w0(c.getValue(),e,t);return u!==c.getValue()||s!==c.getPriority().val()?new En(u,Cn(s)):n}else{const c=n;return a=c,s!==c.getPriority().val()&&(a=a.updatePriority(new En(s))),c.forEachChild(On,(u,d)=>{const f=_g(d,e.getImmediateChild(u),t);f!==d&&(a=a.updateImmediateChild(u,f))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function yg(n,e){let t=e instanceof qt?e:new qt(e),i=n,s=vt(t);for(;s!==null;){const a=ya(i.node.children,s)||{children:{},childCount:0};i=new vg(s,i,a),t=jt(t),s=vt(t)}return i}function Ua(n){return n.node.value}function Hx(n,e){n.node.value=e,Hp(n)}function Vx(n){return n.node.childCount>0}function LP(n){return Ua(n)===void 0&&!Vx(n)}function Uh(n,e){Si(n.node.children,(t,i)=>{e(new vg(t,n,i))})}function Gx(n,e,t,i){t&&e(n),Uh(n,s=>{Gx(s,e,!0)})}function UP(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function tc(n){return new qt(n.parent===null?n.name:tc(n.parent)+"/"+n.name)}function Hp(n){n.parent!==null&&OP(n.parent,n.name,n)}function OP(n,e,t){const i=LP(t),s=Br(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Hp(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Hp(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=/[\[\].#$\/\u0000-\u001F\u007F]/,FP=/[\[\].#$\u0000-\u001F\u007F]/,Ff=10*1024*1024,Wx=function(n){return typeof n=="string"&&n.length!==0&&!kP.test(n)},Xx=function(n){return typeof n=="string"&&n.length!==0&&!FP.test(n)},BP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xx(n)},zP=function(n,e,t,i){Sg(Gm(n,"value"),e,t)},Sg=function(n,e,t){const i=t instanceof qt?new EI(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Qs(i));if(typeof e=="function")throw new Error(n+"contains a function "+Qs(i)+" with contents = "+e.toString());if(VE(e))throw new Error(n+"contains "+e.toString()+" "+Qs(i));if(typeof e=="string"&&e.length>Ff/3&&Ah(e)>Ff)throw new Error(n+"contains a string greater than "+Ff+" utf8 bytes "+Qs(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(Si(e,(c,u)=>{if(c===".value")s=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!Wx(c)))throw new Error(n+" contains an invalid key ("+c+") "+Qs(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);xI(i,c),Sg(n,u,i),TI(i)}),s&&a)throw new Error(n+' contains ".value" child '+Qs(i)+" in addition to actual children.")}},$x=function(n,e,t,i){if(!Xx(t))throw new Error(Gm(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},HP=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$x(n,e,t)},VP=function(n,e){if(vt(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},GP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!BP(t))throw new Error(Gm(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jx(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],a=s.getPath();t!==null&&!dx(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function kr(n,e,t){jx(n,t),XP(n,i=>Li(i,e)||Li(e,i))}function XP(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const a=s.path;e(a)?($P(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function $P(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Il&&Un("event: "+t.toString()),La(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="repo_interrupt",qP=25;class YP{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_h(),this.transactionQueueTree_=new vg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function KP(n,e,t){if(n.stats_=rg(n.repoInfo_),n.forceRestClient_||$b())n.server_=new gh(n.repoInfo_,(i,s,a,c)=>{C0(n,i,s,a,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>R0(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Rn(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ir(n.repoInfo_,e,(i,s,a,c)=>{C0(n,i,s,a,c)},i=>{R0(n,i)},i=>{QP(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Jb(n.repoInfo_,()=>new KI(n.stats_,n.server_)),n.infoData_=new XI,n.infoSyncTree_=new M0({startListening:(i,s,a,c)=>{let u=[];const d=n.infoData_.getNode(i._path);return d.isEmpty()||(u=Dh(n.infoSyncTree_,i._path,d),setTimeout(()=>{c("ok")},0)),u},stopListening:()=>{}}),xg(n,"connected",!1),n.serverSyncTree_=new M0({startListening:(i,s,a,c)=>(n.server_.listen(i,a,s,(u,d)=>{const f=c(u,d);kr(n.eventQueue_,i._path,f)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function JP(n){const t=n.infoData_.getNode(new qt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Eg(n){return IP({timestamp:JP(n)})}function C0(n,e,t,i,s){n.dataUpdateCount++;const a=new qt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(s)if(i){const d=oh(t,f=>Cn(f));c=bP(n.serverSyncTree_,a,d,s)}else{const d=Cn(t);c=AP(n.serverSyncTree_,a,d,s)}else if(i){const d=oh(t,f=>Cn(f));c=RP(n.serverSyncTree_,a,d)}else{const d=Cn(t);c=Dh(n.serverSyncTree_,a,d)}let u=a;c.length>0&&(u=Oh(n,a)),kr(n.eventQueue_,u,c)}function R0(n,e){xg(n,"connected",e),e===!1&&eN(n)}function QP(n,e){Si(e,(t,i)=>{xg(n,t,i)})}function xg(n,e,t){const i=new qt("/.info/"+e),s=Cn(t);n.infoData_.updateSnapshot(i,s);const a=Dh(n.infoSyncTree_,i,s);kr(n.eventQueue_,i,a)}function qx(n){return n.nextWriteId_++}function ZP(n,e,t,i,s){Tg(n,"set",{path:e.toString(),value:t,priority:i});const a=Eg(n),c=Cn(t,i),u=pg(n.serverSyncTree_,e),d=zx(c,u,a),f=qx(n),m=Lx(n.serverSyncTree_,e,d,f,!0);jx(n.eventQueue_,m),n.server_.put(e.toString(),c.val(!0),(_,E)=>{const x=_==="ok";x||ei("set at "+e+" failed: "+_);const M=ro(n.serverSyncTree_,f,!x);kr(n.eventQueue_,e,M),nN(n,s,_,E)});const g=Zx(n,e);Oh(n,g),kr(n.eventQueue_,g,[])}function eN(n){Tg(n,"onDisconnectEvents");const e=Eg(n),t=_h();Lp(n.onDisconnect_,Bt(),(s,a)=>{const c=DP(s,a,n.serverSyncTree_,e);yx(t,s,c)});let i=[];Lp(t,Bt(),(s,a)=>{i=i.concat(Dh(n.serverSyncTree_,s,a));const c=Zx(n,s);Oh(n,c)}),n.onDisconnect_=_h(),kr(n.eventQueue_,Bt(),i)}function tN(n){n.persistentConnection_&&n.persistentConnection_.interrupt(jP)}function Tg(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Un(t,...e)}function nN(n,e,t,i){e&&La(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;i&&(a+=": "+i);const c=new Error(a);c.code=s,e(c)}})}function Yx(n,e,t){return pg(n.serverSyncTree_,e,t)||Nt.EMPTY_NODE}function Mg(n,e=n.transactionQueueTree_){if(e||kh(n,e),Ua(e)){const t=Jx(n,e);Ne(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&iN(n,tc(e),t)}else Vx(e)&&Uh(e,t=>{Mg(n,t)})}function iN(n,e,t){const i=t.map(f=>f.currentWriteId),s=Yx(n,e,i);let a=s;const c=s.hash();for(let f=0;f<t.length;f++){const m=t[f];Ne(m.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),m.status=1,m.retryCount++;const g=vi(e,m.path);a=a.updateChild(g,m.currentOutputSnapshotRaw)}const u=a.val(!0),d=e;n.server_.put(d.toString(),u,f=>{Tg(n,"transaction put response",{path:d.toString(),status:f});let m=[];if(f==="ok"){const g=[];for(let _=0;_<t.length;_++)t[_].status=2,m=m.concat(ro(n.serverSyncTree_,t[_].currentWriteId)),t[_].onComplete&&g.push(()=>t[_].onComplete(null,!0,t[_].currentOutputSnapshotResolved)),t[_].unwatcher();kh(n,yg(n.transactionQueueTree_,e)),Mg(n,n.transactionQueueTree_),kr(n.eventQueue_,e,m);for(let _=0;_<g.length;_++)La(g[_])}else{if(f==="datastale")for(let g=0;g<t.length;g++)t[g].status===3?t[g].status=4:t[g].status=0;else{ei("transaction at "+d.toString()+" failed: "+f);for(let g=0;g<t.length;g++)t[g].status=4,t[g].abortReason=f}Oh(n,e)}},c)}function Oh(n,e){const t=Kx(n,e),i=tc(t),s=Jx(n,t);return rN(n,s,i),i}function rN(n,e,t){if(e.length===0)return;const i=[];let s=[];const c=e.filter(u=>u.status===0).map(u=>u.currentWriteId);for(let u=0;u<e.length;u++){const d=e[u],f=vi(t,d.path);let m=!1,g;if(Ne(f!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)m=!0,g=d.abortReason,s=s.concat(ro(n.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=qP)m=!0,g="maxretry",s=s.concat(ro(n.serverSyncTree_,d.currentWriteId,!0));else{const _=Yx(n,d.path,c);d.currentInputSnapshot=_;const E=e[u].update(_.val());if(E!==void 0){Sg("transaction failed: Data returned ",E,d.path);let x=Cn(E);typeof E=="object"&&E!=null&&Br(E,".priority")||(x=x.updatePriority(_.getPriority()));const S=d.currentWriteId,y=Eg(n),P=zx(x,_,y);d.currentOutputSnapshotRaw=x,d.currentOutputSnapshotResolved=P,d.currentWriteId=qx(n),c.splice(c.indexOf(S),1),s=s.concat(Lx(n.serverSyncTree_,d.path,P,d.currentWriteId,d.applyLocally)),s=s.concat(ro(n.serverSyncTree_,S,!0))}else m=!0,g="nodata",s=s.concat(ro(n.serverSyncTree_,d.currentWriteId,!0))}kr(n.eventQueue_,t,s),s=[],m&&(e[u].status=2,function(_){setTimeout(_,Math.floor(0))}(e[u].unwatcher),e[u].onComplete&&(g==="nodata"?i.push(()=>e[u].onComplete(null,!1,e[u].currentInputSnapshot)):i.push(()=>e[u].onComplete(new Error(g),!1,null))))}kh(n,n.transactionQueueTree_);for(let u=0;u<i.length;u++)La(i[u]);Mg(n,n.transactionQueueTree_)}function Kx(n,e){let t,i=n.transactionQueueTree_;for(t=vt(e);t!==null&&Ua(i)===void 0;)i=yg(i,t),e=jt(e),t=vt(e);return i}function Jx(n,e){const t=[];return Qx(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Qx(n,e,t){const i=Ua(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Uh(e,s=>{Qx(n,s,t)})}function kh(n,e){const t=Ua(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Hx(e,t.length>0?t:void 0)}Uh(e,i=>{kh(n,i)})}function Zx(n,e){const t=tc(Kx(n,e)),i=yg(n.transactionQueueTree_,e);return UP(i,s=>{Bf(n,s)}),Bf(n,i),Gx(i,s=>{Bf(n,s)}),t}function Bf(n,e){const t=Ua(e);if(t){const i=[];let s=[],a=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(Ne(a===c-1,"All SENT items should be at beginning of queue."),a=c,t[c].status=3,t[c].abortReason="set"):(Ne(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),s=s.concat(ro(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&i.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?Hx(e,void 0):t.length=a+1,kr(n.eventQueue_,tc(e),s);for(let c=0;c<i.length;c++)La(i[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function oN(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ei(`Invalid query segment '${t}' in query '${n}'`)}return e}const A0=function(n,e){const t=aN(n),i=t.namespace;t.domain==="firebase.com"&&Or(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Or("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Fb();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ex(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new qt(t.pathString)}},aN=function(n){let e="",t="",i="",s="",a="",c=!0,u="https",d=443;if(typeof n=="string"){let f=n.indexOf("//");f>=0&&(u=n.substring(0,f-1),n=n.substring(f+2));let m=n.indexOf("/");m===-1&&(m=n.length);let g=n.indexOf("?");g===-1&&(g=n.length),e=n.substring(0,Math.min(m,g)),m<g&&(s=sN(n.substring(m,g)));const _=oN(n.substring(Math.min(n.length,g)));f=e.indexOf(":"),f>=0?(c=u==="https"||u==="wss",d=parseInt(e.substring(f+1),10)):f=e.length;const E=e.slice(0,f);if(E.toLowerCase()==="localhost")t="localhost";else if(E.split(".").length<=2)t=E;else{const x=e.indexOf(".");i=e.substring(0,x).toLowerCase(),t=e.substring(x+1),a=i}"ns"in _&&(a=_.ns)}return{host:e,port:d,domain:t,subdomain:i,secure:c,scheme:u,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return St(this._path)?null:cx(this._path)}get ref(){return new Eo(this._repo,this._path)}get _queryIdentifier(){const e=f0(this._queryParams),t=ng(e);return t==="{}"?"default":t}get _queryObject(){return f0(this._queryParams)}isEqual(e){if(e=li(e),!(e instanceof wg))return!1;const t=this._repo===e._repo,i=dx(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+SI(this._path)}}class Eo extends wg{constructor(e,t){super(e,t,new lg,!1)}get parent(){const e=hx(this._path);return e===null?null:new Eo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function lN(n,e){return n=li(n),n._checkNotDeleted("ref"),e!==void 0?cN(n._root,e):n._root}function cN(n,e){return n=li(n),vt(n._path)===null?HP("child","path",e):$x("child","path",e),new Eo(n._repo,un(n._path,e))}function uN(n,e){n=li(n),VP("set",n._path),zP("set",e,n._path);const t=new Rh;return ZP(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}wP(Eo);CP(Eo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN="FIREBASE_DATABASE_EMULATOR_HOST",Vp={};let dN=!1;function fN(n,e,t,i){const s=e.lastIndexOf(":"),a=e.substring(0,s),c=vo(a);n.repoInfo_=new ex(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function pN(n,e,t,i,s){let a=i||n.options.databaseURL;a===void 0&&(n.options.projectId||Or("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Un("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=A0(a,s),u=c.repoInfo,d;typeof process<"u"&&qy&&(d=qy[hN]),d?(a=`http://${d}?ns=${u.namespace}`,c=A0(a,s),u=c.repoInfo):c.repoInfo.secure;const f=new qb(n.name,n.options,e);GP("Invalid Firebase Database URL",c),St(c.path)||Or("Database URL must point to the root of a Firebase Database (not including a child path).");const m=gN(u,n,f,new jb(n,t));return new _N(m,n)}function mN(n,e){const t=Vp[e];(!t||t[n.key]!==n)&&Or(`Database ${e}(${n.repoInfo_}) has already been deleted.`),tN(n),delete t[n.key]}function gN(n,e,t,i){let s=Vp[e.name];s||(s={},Vp[e.name]=s);let a=s[n.toURLString()];return a&&Or("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new YP(n,dN,t,i),s[n.toURLString()]=a,a}class _N{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(KP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Eo(this._repo,Bt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Or("Cannot call "+e+" on a deleted database.")}}function eT(n=$m(),e){const t=bh(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=JS("database");i&&vN(t,...i)}return t}function vN(n,e,t,i={}){n=li(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&lo(i,a.repoInfo_.emulatorOptions))return;Or("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(a.repoInfo_.nodeAdmin)i.mockUserToken&&Or('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Yu(Yu.OWNER);else if(i.mockUserToken){const u=typeof i.mockUserToken=="string"?i.mockUserToken:eE(i.mockUserToken,n.app.options.projectId);c=new Yu(u)}vo(e)&&(zm(e),Hm("Database",!0)),fN(a,s,i,c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(n){Nb(yo),co(new ws("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return pN(i,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Ki(Yy,Ky,n),Ki(Yy,Ky,"esm2020")}Ir.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ir.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};yN();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="firebasestorage.googleapis.com",SN="storageBucket",EN=120*1e3,xN=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Fr{constructor(e,t,i=0){super(zf(e),`Firebase Storage: ${t} (${zf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,sr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var tr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(tr||(tr={}));function zf(n){return"storage/"+n}function TN(){const n="An unknown error occurred, please check the error payload for server response.";return new sr(tr.UNKNOWN,n)}function MN(){return new sr(tr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wN(){return new sr(tr.CANCELED,"User canceled the upload/download.")}function CN(n){return new sr(tr.INVALID_URL,"Invalid URL '"+n+"'.")}function RN(n){return new sr(tr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function b0(n){return new sr(tr.INVALID_ARGUMENT,n)}function nT(){return new sr(tr.APP_DELETED,"The Firebase app was deleted.")}function AN(n){return new sr(tr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Ui.makeFromUrl(e,t)}catch{return new Ui(e,"")}if(i.path==="")return i;throw RN(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function a(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const c="(/(.*))?$",u=new RegExp("^gs://"+s+c,"i"),d={bucket:1,path:3};function f(A){A.path_=decodeURIComponent(A.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",E=new RegExp(`^https?://${g}/${m}/b/${s}/o${_}`,"i"),x={bucket:1,path:3},M=t===tT?"(?:storage.googleapis.com|storage.cloud.google.com)":t,S="([^?#]*)",y=new RegExp(`^https?://${M}/${s}/${S}`,"i"),I=[{regex:u,indices:d,postModify:a},{regex:E,indices:x,postModify:f},{regex:y,indices:{bucket:1,path:2},postModify:f}];for(let A=0;A<I.length;A++){const G=I[A],F=G.regex.exec(e);if(F){const U=F[G.indices.bucket];let W=F[G.indices.path];W||(W=""),i=new Ui(U,W),G.postModify(i);break}}if(i==null)throw CN(e);return i}}class bN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(n,e,t){let i=1,s=null,a=null,c=!1,u=0;function d(){return u===2}let f=!1;function m(...S){f||(f=!0,e.apply(null,S))}function g(S){s=setTimeout(()=>{s=null,n(E,d())},S)}function _(){a&&clearTimeout(a)}function E(S,...y){if(f){_();return}if(S){_(),m.call(null,S,...y);return}if(d()||c){_(),m.call(null,S,...y);return}i<64&&(i*=2);let I;u===1?(u=2,I=0):I=(i+Math.random())*1e3,g(I)}let x=!1;function M(S){x||(x=!0,_(),!f&&(s!==null?(S||(u=2),clearTimeout(s),g(0)):S||(u=1)))}return g(0),a=setTimeout(()=>{c=!0,M(!0)},t),M}function PN(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(n){return n!==void 0}function I0(n,e,t,i){if(i<e)throw b0(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw b0(`Invalid value for '${n}'. Expected ${t} or less.`)}function DN(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Eh;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Eh||(Eh={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,t,i,s,a,c,u,d,f,m,g,_=!0,E=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=u,this.errorCallback_=d,this.timeout_=f,this.progressCallback_=m,this.connectionFactory_=g,this.retry=_,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,M)=>{this.resolve_=x,this.reject_=M,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Su(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=u=>{const d=u.loaded,f=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,f)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const u=a.getErrorCode()===Eh.NO_ERROR,d=a.getStatus();if(!u||LN(d,this.additionalRetryCodes_)&&this.retry){const m=a.getErrorCode()===Eh.ABORT;i(!1,new Su(!1,null,m));return}const f=this.successCodes_.indexOf(d)!==-1;i(!0,new Su(f,a))})},t=(i,s)=>{const a=this.resolve_,c=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const d=this.callback_(u,u.getResponse());NN(d)?a(d):a()}catch(d){c(d)}else if(u!==null){const d=TN();d.serverResponse=u.getErrorText(),this.errorCallback_?c(this.errorCallback_(u,d)):c(d)}else if(s.canceled){const d=this.appDelete_?nT():wN();c(d)}else{const d=MN();c(d)}};this.canceled_?t(!1,new Su(!1,null,!0)):this.backoffId_=IN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Su{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function ON(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function kN(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function FN(n,e){e&&(n["X-Firebase-GMPID"]=e)}function BN(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function zN(n,e,t,i,s,a,c=!0,u=!1){const d=DN(n.urlParams),f=n.url+d,m=Object.assign({},n.headers);return FN(m,e),ON(m,t),kN(m,a),BN(m,i),new UN(f,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,c,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function VN(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t){this._service=e,t instanceof Ui?this._location=t:this._location=Ui.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new xh(e,t)}get root(){const e=new Ui(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return VN(this._location.path)}get storage(){return this._service}get parent(){const e=HN(this._location.path);if(e===null)return null;const t=new Ui(this._location.bucket,e);return new xh(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw AN(e)}}function P0(n,e){const t=e?.[SN];return t==null?null:Ui.makeFromBucketSpec(t,n)}function GN(n,e,t,i={}){n.host=`${e}:${t}`;const s=vo(e);s&&(zm(`https://${n.host}/b`),Hm("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:a}=i;a&&(n._overrideAuthToken=typeof a=="string"?a:eE(a,n.app.options.projectId))}class WN{constructor(e,t,i,s,a,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=a,this._isUsingEmulator=c,this._bucket=null,this._host=tT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=EN,this._maxUploadRetryTime=xN,this._requests=new Set,s!=null?this._bucket=Ui.makeFromBucketSpec(s,this._host):this._bucket=P0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ui.makeFromBucketSpec(this._url,e):this._bucket=P0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){I0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){I0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ii(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xh(this,e)}_makeRequest(e,t,i,s,a=!0){if(this._deleted)return new bN(nT());{const c=zN(e,this._appId,i,s,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const N0="@firebase/storage",D0="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="storage";function XN(n=$m(),e){n=li(n);const i=bh(n,iT).getImmediate({identifier:e}),s=JS("storage");return s&&$N(i,...s),i}function $N(n,e,t,i={}){GN(n,e,t,i)}function jN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new WN(t,i,s,e,yo)}function qN(){co(new ws(iT,jN,"PUBLIC").setMultipleInstances(!0)),Ki(N0,D0,""),Ki(N0,D0,"esm2020")}qN();const YN={apiKey:"AIzaSyBT7P7DAfV-I9ESe6f9Jdp5ioCyGIK0d9A",authDomain:"hashhumanity-58b9a.firebaseapp.com",databaseURL:"https://hashhumanity-58b9a-default-rtdb.firebaseio.com",projectId:"hashhumanity-58b9a",storageBucket:"hashhumanity-58b9a.appspot.com",messagingSenderId:"886745899016",appId:"1:886745899016:web:2b0f7e043c2434379d71bd",measurementId:"G-3ZTCXL4374"};SA().length||sE(YN);const rT=Ab();eT();XN();const sT=oe.createContext({user:null}),oT=({children:n})=>{const[e,t]=oe.useState(null),[i,s]=oe.useState(!0);return oe.useEffect(()=>{const a=_1(rT,c=>{t(c||null),s(!1)});return()=>a()},[]),Rt.jsx(sT.Provider,{value:{user:e},children:!i&&n})},KN=()=>oe.useContext(sT);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cg="178",JN=0,L0=1,QN=2,aT=1,ZN=2,xr=3,Rs=0,ti=1,Tr=2,Ts=0,ga=1,U0=2,O0=3,k0=4,eD=5,to=100,tD=101,nD=102,iD=103,rD=104,sD=200,oD=201,aD=202,lD=203,Gp=204,Wp=205,cD=206,uD=207,hD=208,dD=209,fD=210,pD=211,mD=212,gD=213,_D=214,Xp=0,$p=1,jp=2,Ta=3,qp=4,Yp=5,Kp=6,Jp=7,lT=0,vD=1,yD=2,Ms=0,SD=1,ED=2,xD=3,TD=4,MD=5,wD=6,CD=7,cT=300,Ma=301,wa=302,Qp=303,Zp=304,Fh=306,em=1e3,so=1001,tm=1002,Fi=1003,RD=1004,Eu=1005,qi=1006,Hf=1007,oo=1008,nr=1009,uT=1010,hT=1011,Hl=1012,Rg=1013,mo=1014,Rr=1015,nc=1016,Ag=1017,bg=1018,Vl=1020,dT=35902,fT=1021,pT=1022,Oi=1023,Gl=1026,Wl=1027,mT=1028,Ig=1029,gT=1030,Pg=1031,Ng=1033,Ku=33776,Ju=33777,Qu=33778,Zu=33779,nm=35840,im=35841,rm=35842,sm=35843,om=36196,am=37492,lm=37496,cm=37808,um=37809,hm=37810,dm=37811,fm=37812,pm=37813,mm=37814,gm=37815,_m=37816,vm=37817,ym=37818,Sm=37819,Em=37820,xm=37821,eh=36492,Tm=36494,Mm=36495,_T=36283,wm=36284,Cm=36285,Rm=36286,AD=3200,bD=3201,vT=0,ID=1,ys="",gi="srgb",Ca="srgb-linear",Th="linear",kt="srgb",jo=7680,F0=519,PD=512,ND=513,DD=514,yT=515,LD=516,UD=517,OD=518,kD=519,B0=35044,z0="300 es",Ar=2e3,Mh=2001;class Oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vf=Math.PI/180,Am=180/Math.PI;function ic(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function FD(n,e){return(n%e+e)%e}function Gf(n,e,t){return(1-t)*n+t*e}function El(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class It{constructor(e=0,t=0){It.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rc{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let d=i[s+0],f=i[s+1],m=i[s+2],g=i[s+3];const _=a[c+0],E=a[c+1],x=a[c+2],M=a[c+3];if(u===0){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=E,e[t+2]=x,e[t+3]=M;return}if(g!==M||d!==_||f!==E||m!==x){let S=1-u;const y=d*_+f*E+m*x+g*M,P=y>=0?1:-1,I=1-y*y;if(I>Number.EPSILON){const G=Math.sqrt(I),F=Math.atan2(G,y*P);S=Math.sin(S*F)/G,u=Math.sin(u*F)/G}const A=u*P;if(d=d*S+_*A,f=f*S+E*A,m=m*S+x*A,g=g*S+M*A,S===1-u){const G=1/Math.sqrt(d*d+f*f+m*m+g*g);d*=G,f*=G,m*=G,g*=G}}e[t]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],d=i[s+1],f=i[s+2],m=i[s+3],g=a[c],_=a[c+1],E=a[c+2],x=a[c+3];return e[t]=u*x+m*g+d*E-f*_,e[t+1]=d*x+m*_+f*g-u*E,e[t+2]=f*x+m*E+u*_-d*g,e[t+3]=m*x-u*g-d*_-f*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,f=u(i/2),m=u(s/2),g=u(a/2),_=d(i/2),E=d(s/2),x=d(a/2);switch(c){case"XYZ":this._x=_*m*g+f*E*x,this._y=f*E*g-_*m*x,this._z=f*m*x+_*E*g,this._w=f*m*g-_*E*x;break;case"YXZ":this._x=_*m*g+f*E*x,this._y=f*E*g-_*m*x,this._z=f*m*x-_*E*g,this._w=f*m*g+_*E*x;break;case"ZXY":this._x=_*m*g-f*E*x,this._y=f*E*g+_*m*x,this._z=f*m*x+_*E*g,this._w=f*m*g-_*E*x;break;case"ZYX":this._x=_*m*g-f*E*x,this._y=f*E*g+_*m*x,this._z=f*m*x-_*E*g,this._w=f*m*g+_*E*x;break;case"YZX":this._x=_*m*g+f*E*x,this._y=f*E*g+_*m*x,this._z=f*m*x-_*E*g,this._w=f*m*g-_*E*x;break;case"XZY":this._x=_*m*g-f*E*x,this._y=f*E*g-_*m*x,this._z=f*m*x+_*E*g,this._w=f*m*g+_*E*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],d=t[9],f=t[2],m=t[6],g=t[10],_=i+u+g;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(m-d)*E,this._y=(a-f)*E,this._z=(c-s)*E}else if(i>u&&i>g){const E=2*Math.sqrt(1+i-u-g);this._w=(m-d)/E,this._x=.25*E,this._y=(s+c)/E,this._z=(a+f)/E}else if(u>g){const E=2*Math.sqrt(1+u-i-g);this._w=(a-f)/E,this._x=(s+c)/E,this._y=.25*E,this._z=(d+m)/E}else{const E=2*Math.sqrt(1+g-i-u);this._w=(c-s)/E,this._x=(a+f)/E,this._y=(d+m)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,d=t._y,f=t._z,m=t._w;return this._x=i*m+c*u+s*f-a*d,this._y=s*m+c*d+a*u-i*f,this._z=a*m+c*f+i*d-s*u,this._w=c*m-i*u-s*d-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const E=1-t;return this._w=E*c+t*this._w,this._x=E*i+t*this._x,this._y=E*s+t*this._y,this._z=E*a+t*this._z,this.normalize(),this}const f=Math.sqrt(d),m=Math.atan2(f,u),g=Math.sin((1-t)*m)/f,_=Math.sin(t*m)/f;return this._w=c*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,i=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(H0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(H0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,d=e.w,f=2*(c*s-u*i),m=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+d*f+c*g-u*m,this.y=i+d*m+u*f-a*g,this.z=s+d*g+a*m-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=s*d-a*u,this.y=a*c-i*d,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wf.copy(this).projectOnVector(e),this.sub(Wf)}reflect(e){return this.sub(Wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wf=new te,H0=new rc;class ut{constructor(e,t,i,s,a,c,u,d,f){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,d,f)}set(e,t,i,s,a,c,u,d,f){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=a,m[5]=d,m[6]=i,m[7]=c,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],f=i[1],m=i[4],g=i[7],_=i[2],E=i[5],x=i[8],M=s[0],S=s[3],y=s[6],P=s[1],I=s[4],A=s[7],G=s[2],F=s[5],U=s[8];return a[0]=c*M+u*P+d*G,a[3]=c*S+u*I+d*F,a[6]=c*y+u*A+d*U,a[1]=f*M+m*P+g*G,a[4]=f*S+m*I+g*F,a[7]=f*y+m*A+g*U,a[2]=_*M+E*P+x*G,a[5]=_*S+E*I+x*F,a[8]=_*y+E*A+x*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],m=e[8];return t*c*m-t*u*f-i*a*m+i*u*d+s*a*f-s*c*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=m*c-u*f,_=u*d-m*a,E=f*a-c*d,x=t*g+i*_+s*E;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=g*M,e[1]=(s*f-m*i)*M,e[2]=(u*i-s*c)*M,e[3]=_*M,e[4]=(m*t-s*d)*M,e[5]=(s*a-u*t)*M,e[6]=E*M,e[7]=(i*d-f*t)*M,e[8]=(c*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const d=Math.cos(a),f=Math.sin(a);return this.set(i*d,i*f,-i*(d*c+f*u)+c+e,-s*f,s*d,-s*(-f*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Xf.makeScale(e,t)),this}rotate(e){return this.premultiply(Xf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xf=new ut;function ST(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function BD(){const n=Xl("canvas");return n.style.display="block",n}const V0={};function _a(n){n in V0||(V0[n]=!0,console.warn(n))}function zD(n,e,t){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function HD(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function VD(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const G0=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W0=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GD(){const n={enabled:!0,workingColorSpace:Ca,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===kt&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(s.r=va(s.r),s.g=va(s.g),s.b=va(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ys?Th:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return _a("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return _a("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ca]:{primaries:e,whitePoint:i,transfer:Th,toXYZ:G0,fromXYZ:W0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:G0,fromXYZ:W0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),n}const At=GD();function Pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function va(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qo;class WD{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qo===void 0&&(qo=Xl("canvas")),qo.width=e.width,qo.height=e.height;const s=qo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=qo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Pr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pr(t[i]/255)*255):t[i]=Pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XD=0;class Dg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XD++}),this.uuid=ic(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push($f(s[c].image)):a.push($f(s[c]))}else a=$f(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function $f(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?WD.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $D=0;const jf=new te;class Gn extends Oa{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,i=so,s=so,a=qi,c=oo,u=Oi,d=nr,f=Gn.DEFAULT_ANISOTROPY,m=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$D++}),this.uuid=ic(),this.name="",this.source=new Dg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jf).x}get height(){return this.source.getSize(jf).y}get depth(){return this.source.getSize(jf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cT)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case em:e.x=e.x-Math.floor(e.x);break;case so:e.x=e.x<0?0:1;break;case tm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case em:e.y=e.y-Math.floor(e.y);break;case so:e.y=e.y<0?0:1;break;case tm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=cT;Gn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,i=0,s=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,f=d[0],m=d[4],g=d[8],_=d[1],E=d[5],x=d[9],M=d[2],S=d[6],y=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-M)<.01&&Math.abs(x-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+M)<.1&&Math.abs(x+S)<.1&&Math.abs(f+E+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(f+1)/2,A=(E+1)/2,G=(y+1)/2,F=(m+_)/4,U=(g+M)/4,W=(x+S)/4;return I>A&&I>G?I<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(I),s=F/i,a=U/i):A>G?A<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(A),i=F/s,a=W/s):G<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(G),i=U/a,s=W/a),this.set(i,s,a,t),this}let P=Math.sqrt((S-x)*(S-x)+(g-M)*(g-M)+(_-m)*(_-m));return Math.abs(P)<.001&&(P=1),this.x=(S-x)/P,this.y=(g-M)/P,this.z=(_-m)/P,this.w=Math.acos((f+E+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jD extends Oa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);const s={width:e,height:t,depth:i.depth},a=new Gn(s);this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:qi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dg(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class go extends jD{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ET extends Gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fi,this.minFilter=Fi,this.wrapR=so,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qD extends Gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fi,this.minFilter=Fi,this.wrapR=so,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sc{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Ri):Ri.fromBufferAttribute(a,c),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xu.copy(i.boundingBox)),xu.applyMatrix4(e.matrixWorld),this.union(xu)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xl),Tu.subVectors(this.max,xl),Yo.subVectors(e.a,xl),Ko.subVectors(e.b,xl),Jo.subVectors(e.c,xl),cs.subVectors(Ko,Yo),us.subVectors(Jo,Ko),Xs.subVectors(Yo,Jo);let t=[0,-cs.z,cs.y,0,-us.z,us.y,0,-Xs.z,Xs.y,cs.z,0,-cs.x,us.z,0,-us.x,Xs.z,0,-Xs.x,-cs.y,cs.x,0,-us.y,us.x,0,-Xs.y,Xs.x,0];return!qf(t,Yo,Ko,Jo,Tu)||(t=[1,0,0,0,1,0,0,0,1],!qf(t,Yo,Ko,Jo,Tu))?!1:(Mu.crossVectors(cs,us),t=[Mu.x,Mu.y,Mu.z],qf(t,Yo,Ko,Jo,Tu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _r=[new te,new te,new te,new te,new te,new te,new te,new te],Ri=new te,xu=new sc,Yo=new te,Ko=new te,Jo=new te,cs=new te,us=new te,Xs=new te,xl=new te,Tu=new te,Mu=new te,$s=new te;function qf(n,e,t,i,s){for(let a=0,c=n.length-3;a<=c;a+=3){$s.fromArray(n,a);const u=s.x*Math.abs($s.x)+s.y*Math.abs($s.y)+s.z*Math.abs($s.z),d=e.dot($s),f=t.dot($s),m=i.dot($s);if(Math.max(-Math.max(d,f,m),Math.min(d,f,m))>u)return!1}return!0}const YD=new sc,Tl=new te,Yf=new te;class Lg{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):YD.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const t=Tl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Tl,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(Yf)),this.expandByPoint(Tl.copy(e.center).sub(Yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vr=new te,Kf=new te,wu=new te,hs=new te,Jf=new te,Cu=new te,Qf=new te;class KD{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Kf.copy(e).add(t).multiplyScalar(.5),wu.copy(t).sub(e).normalize(),hs.copy(this.origin).sub(Kf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(wu),u=hs.dot(this.direction),d=-hs.dot(wu),f=hs.lengthSq(),m=Math.abs(1-c*c);let g,_,E,x;if(m>0)if(g=c*d-u,_=c*u-d,x=a*m,g>=0)if(_>=-x)if(_<=x){const M=1/m;g*=M,_*=M,E=g*(g+c*_+2*u)+_*(c*g+_+2*d)+f}else _=a,g=Math.max(0,-(c*_+u)),E=-g*g+_*(_+2*d)+f;else _=-a,g=Math.max(0,-(c*_+u)),E=-g*g+_*(_+2*d)+f;else _<=-x?(g=Math.max(0,-(-c*a+u)),_=g>0?-a:Math.min(Math.max(-a,-d),a),E=-g*g+_*(_+2*d)+f):_<=x?(g=0,_=Math.min(Math.max(-a,-d),a),E=_*(_+2*d)+f):(g=Math.max(0,-(c*a+u)),_=g>0?a:Math.min(Math.max(-a,-d),a),E=-g*g+_*(_+2*d)+f);else _=c>0?-a:a,g=Math.max(0,-(c*_+u)),E=-g*g+_*(_+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Kf).addScaledVector(wu,_),E}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const i=vr.dot(this.direction),s=vr.dot(vr)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,d;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return f>=0?(i=(e.min.x-_.x)*f,s=(e.max.x-_.x)*f):(i=(e.max.x-_.x)*f,s=(e.min.x-_.x)*f),m>=0?(a=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||u>s)||((u>i||i!==i)&&(i=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,i,s,a){Jf.subVectors(t,e),Cu.subVectors(i,e),Qf.crossVectors(Jf,Cu);let c=this.direction.dot(Qf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;hs.subVectors(this.origin,e);const d=u*this.direction.dot(Cu.crossVectors(hs,Cu));if(d<0)return null;const f=u*this.direction.dot(Jf.cross(hs));if(f<0||d+f>c)return null;const m=-u*hs.dot(Qf);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,t,i,s,a,c,u,d,f,m,g,_,E,x,M,S){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,d,f,m,g,_,E,x,M,S)}set(e,t,i,s,a,c,u,d,f,m,g,_,E,x,M,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=s,y[1]=a,y[5]=c,y[9]=u,y[13]=d,y[2]=f,y[6]=m,y[10]=g,y[14]=_,y[3]=E,y[7]=x,y[11]=M,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Qo.setFromMatrixColumn(e,0).length(),a=1/Qo.setFromMatrixColumn(e,1).length(),c=1/Qo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(s),f=Math.sin(s),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=c*m,E=c*g,x=u*m,M=u*g;t[0]=d*m,t[4]=-d*g,t[8]=f,t[1]=E+x*f,t[5]=_-M*f,t[9]=-u*d,t[2]=M-_*f,t[6]=x+E*f,t[10]=c*d}else if(e.order==="YXZ"){const _=d*m,E=d*g,x=f*m,M=f*g;t[0]=_+M*u,t[4]=x*u-E,t[8]=c*f,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=E*u-x,t[6]=M+_*u,t[10]=c*d}else if(e.order==="ZXY"){const _=d*m,E=d*g,x=f*m,M=f*g;t[0]=_-M*u,t[4]=-c*g,t[8]=x+E*u,t[1]=E+x*u,t[5]=c*m,t[9]=M-_*u,t[2]=-c*f,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const _=c*m,E=c*g,x=u*m,M=u*g;t[0]=d*m,t[4]=x*f-E,t[8]=_*f+M,t[1]=d*g,t[5]=M*f+_,t[9]=E*f-x,t[2]=-f,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,E=c*f,x=u*d,M=u*f;t[0]=d*m,t[4]=M-_*g,t[8]=x*g+E,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-f*m,t[6]=E*g+x,t[10]=_-M*g}else if(e.order==="XZY"){const _=c*d,E=c*f,x=u*d,M=u*f;t[0]=d*m,t[4]=-g,t[8]=f*m,t[1]=_*g+M,t[5]=c*m,t[9]=E*g-x,t[2]=x*g-E,t[6]=u*m,t[10]=M*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JD,e,QD)}lookAt(e,t,i){const s=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ds.crossVectors(i,oi),ds.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ds.crossVectors(i,oi)),ds.normalize(),Ru.crossVectors(oi,ds),s[0]=ds.x,s[4]=Ru.x,s[8]=oi.x,s[1]=ds.y,s[5]=Ru.y,s[9]=oi.y,s[2]=ds.z,s[6]=Ru.z,s[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],f=i[12],m=i[1],g=i[5],_=i[9],E=i[13],x=i[2],M=i[6],S=i[10],y=i[14],P=i[3],I=i[7],A=i[11],G=i[15],F=s[0],U=s[4],W=s[8],b=s[12],R=s[1],B=s[5],ae=s[9],ee=s[13],he=s[2],pe=s[6],se=s[10],ce=s[14],z=s[3],le=s[7],ie=s[11],L=s[15];return a[0]=c*F+u*R+d*he+f*z,a[4]=c*U+u*B+d*pe+f*le,a[8]=c*W+u*ae+d*se+f*ie,a[12]=c*b+u*ee+d*ce+f*L,a[1]=m*F+g*R+_*he+E*z,a[5]=m*U+g*B+_*pe+E*le,a[9]=m*W+g*ae+_*se+E*ie,a[13]=m*b+g*ee+_*ce+E*L,a[2]=x*F+M*R+S*he+y*z,a[6]=x*U+M*B+S*pe+y*le,a[10]=x*W+M*ae+S*se+y*ie,a[14]=x*b+M*ee+S*ce+y*L,a[3]=P*F+I*R+A*he+G*z,a[7]=P*U+I*B+A*pe+G*le,a[11]=P*W+I*ae+A*se+G*ie,a[15]=P*b+I*ee+A*ce+G*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],d=e[9],f=e[13],m=e[2],g=e[6],_=e[10],E=e[14],x=e[3],M=e[7],S=e[11],y=e[15];return x*(+a*d*g-s*f*g-a*u*_+i*f*_+s*u*E-i*d*E)+M*(+t*d*E-t*f*_+a*c*_-s*c*E+s*f*m-a*d*m)+S*(+t*f*g-t*u*E-a*c*g+i*c*E+a*u*m-i*f*m)+y*(-s*u*m-t*d*g+t*u*_+s*c*g-i*c*_+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=e[9],_=e[10],E=e[11],x=e[12],M=e[13],S=e[14],y=e[15],P=g*S*f-M*_*f+M*d*E-u*S*E-g*d*y+u*_*y,I=x*_*f-m*S*f-x*d*E+c*S*E+m*d*y-c*_*y,A=m*M*f-x*g*f+x*u*E-c*M*E-m*u*y+c*g*y,G=x*g*d-m*M*d-x*u*_+c*M*_+m*u*S-c*g*S,F=t*P+i*I+s*A+a*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=P*U,e[1]=(M*_*a-g*S*a-M*s*E+i*S*E+g*s*y-i*_*y)*U,e[2]=(u*S*a-M*d*a+M*s*f-i*S*f-u*s*y+i*d*y)*U,e[3]=(g*d*a-u*_*a-g*s*f+i*_*f+u*s*E-i*d*E)*U,e[4]=I*U,e[5]=(m*S*a-x*_*a+x*s*E-t*S*E-m*s*y+t*_*y)*U,e[6]=(x*d*a-c*S*a-x*s*f+t*S*f+c*s*y-t*d*y)*U,e[7]=(c*_*a-m*d*a+m*s*f-t*_*f-c*s*E+t*d*E)*U,e[8]=A*U,e[9]=(x*g*a-m*M*a-x*i*E+t*M*E+m*i*y-t*g*y)*U,e[10]=(c*M*a-x*u*a+x*i*f-t*M*f-c*i*y+t*u*y)*U,e[11]=(m*u*a-c*g*a-m*i*f+t*g*f+c*i*E-t*u*E)*U,e[12]=G*U,e[13]=(m*M*s-x*g*s+x*i*_-t*M*_-m*i*S+t*g*S)*U,e[14]=(x*u*s-c*M*s-x*i*d+t*M*d+c*i*S-t*u*S)*U,e[15]=(c*g*s-m*u*s+m*i*d-t*g*d-c*i*_+t*u*_)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,f=a*c,m=a*u;return this.set(f*c+i,f*u-s*d,f*d+s*u,0,f*u+s*d,m*u+i,m*d-s*c,0,f*d-s*u,m*d+s*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,f=a+a,m=c+c,g=u+u,_=a*f,E=a*m,x=a*g,M=c*m,S=c*g,y=u*g,P=d*f,I=d*m,A=d*g,G=i.x,F=i.y,U=i.z;return s[0]=(1-(M+y))*G,s[1]=(E+A)*G,s[2]=(x-I)*G,s[3]=0,s[4]=(E-A)*F,s[5]=(1-(_+y))*F,s[6]=(S+P)*F,s[7]=0,s[8]=(x+I)*U,s[9]=(S-P)*U,s[10]=(1-(_+M))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Qo.set(s[0],s[1],s[2]).length();const c=Qo.set(s[4],s[5],s[6]).length(),u=Qo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ai.copy(this);const f=1/a,m=1/c,g=1/u;return Ai.elements[0]*=f,Ai.elements[1]*=f,Ai.elements[2]*=f,Ai.elements[4]*=m,Ai.elements[5]*=m,Ai.elements[6]*=m,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,t.setFromRotationMatrix(Ai),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=Ar){const d=this.elements,f=2*a/(t-e),m=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let E,x;if(u===Ar)E=-(c+a)/(c-a),x=-2*c*a/(c-a);else if(u===Mh)E=-c/(c-a),x=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=x,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=Ar){const d=this.elements,f=1/(t-e),m=1/(i-s),g=1/(c-a),_=(t+e)*f,E=(i+s)*m;let x,M;if(u===Ar)x=(c+a)*g,M=-2*g;else if(u===Mh)x=a*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-E,d[2]=0,d[6]=0,d[10]=M,d[14]=-x,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qo=new te,Ai=new rn,JD=new te(0,0,0),QD=new te(1,1,1),ds=new te,Ru=new te,oi=new te,X0=new rn,$0=new rc;class ir{constructor(e=0,t=0,i=0,s=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],d=s[1],f=s[5],m=s[9],g=s[2],_=s[6],E=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,E),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,E),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,E));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return X0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(X0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $0.setFromEuler(this),this.setFromQuaternion($0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class xT{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZD=0;const j0=new te,Zo=new rc,yr=new rn,Au=new te,Ml=new te,eL=new te,tL=new rc,q0=new te(1,0,0),Y0=new te(0,1,0),K0=new te(0,0,1),J0={type:"added"},nL={type:"removed"},ea={type:"childadded",child:null},Zf={type:"childremoved",child:null};class kn extends Oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZD++}),this.uuid=ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new te,t=new ir,i=new rc,s=new te(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rn},normalMatrix:{value:new ut}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xT,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.multiply(Zo),this}rotateOnWorldAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.premultiply(Zo),this}rotateX(e){return this.rotateOnAxis(q0,e)}rotateY(e){return this.rotateOnAxis(Y0,e)}rotateZ(e){return this.rotateOnAxis(K0,e)}translateOnAxis(e,t){return j0.copy(e).applyQuaternion(this.quaternion),this.position.add(j0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(q0,e)}translateY(e){return this.translateOnAxis(Y0,e)}translateZ(e){return this.translateOnAxis(K0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Au.copy(e):Au.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(Ml,Au,this.up):yr.lookAt(Au,Ml,this.up),this.quaternion.setFromRotationMatrix(yr),s&&(yr.extractRotation(s.matrixWorld),Zo.setFromRotationMatrix(yr),this.quaternion.premultiply(Zo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(J0),ea.child=e,this.dispatchEvent(ea),ea.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nL),Zf.child=e,this.dispatchEvent(Zf),Zf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld)),e.applyMatrix4(yr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(J0),ea.child=e,this.dispatchEvent(ea),ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,e,eL),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,tL,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,m=d.length;f<m;f++){const g=d[f];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(a(e.materials,this.material[d]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),f=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),E=c(e.animations),x=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),E.length>0&&(i.animations=E),x.length>0&&(i.nodes=x)}return i.object=s,i;function c(u){const d=[];for(const f in u){const m=u[f];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}kn.DEFAULT_UP=new te(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new te,Sr=new te,ep=new te,Er=new te,ta=new te,na=new te,Q0=new te,tp=new te,np=new te,ip=new te,rp=new nn,sp=new nn,op=new nn;class Ni{constructor(e=new te,t=new te,i=new te){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bi.subVectors(e,t),s.cross(bi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){bi.subVectors(s,t),Sr.subVectors(i,t),ep.subVectors(e,t);const c=bi.dot(bi),u=bi.dot(Sr),d=bi.dot(ep),f=Sr.dot(Sr),m=Sr.dot(ep),g=c*f-u*u;if(g===0)return a.set(0,0,0),null;const _=1/g,E=(f*d-u*m)*_,x=(c*m-u*d)*_;return a.set(1-E-x,x,E)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,i,s,a,c,u,d){return this.getBarycoord(e,t,i,s,Er)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Er.x),d.addScaledVector(c,Er.y),d.addScaledVector(u,Er.z),d)}static getInterpolatedAttribute(e,t,i,s,a,c){return rp.setScalar(0),sp.setScalar(0),op.setScalar(0),rp.fromBufferAttribute(e,t),sp.fromBufferAttribute(e,i),op.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(rp,a.x),c.addScaledVector(sp,a.y),c.addScaledVector(op,a.z),c}static isFrontFacing(e,t,i,s){return bi.subVectors(i,t),Sr.subVectors(e,t),bi.cross(Sr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),Sr.subVectors(this.a,this.b),bi.cross(Sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Ni.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;ta.subVectors(s,i),na.subVectors(a,i),tp.subVectors(e,i);const d=ta.dot(tp),f=na.dot(tp);if(d<=0&&f<=0)return t.copy(i);np.subVectors(e,s);const m=ta.dot(np),g=na.dot(np);if(m>=0&&g<=m)return t.copy(s);const _=d*g-m*f;if(_<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(i).addScaledVector(ta,c);ip.subVectors(e,a);const E=ta.dot(ip),x=na.dot(ip);if(x>=0&&E<=x)return t.copy(a);const M=E*f-d*x;if(M<=0&&f>=0&&x<=0)return u=f/(f-x),t.copy(i).addScaledVector(na,u);const S=m*x-E*g;if(S<=0&&g-m>=0&&E-x>=0)return Q0.subVectors(a,s),u=(g-m)/(g-m+(E-x)),t.copy(s).addScaledVector(Q0,u);const y=1/(S+M+_);return c=M*y,u=_*y,t.copy(i).addScaledVector(ta,c).addScaledVector(na,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const TT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},bu={h:0,s:0,l:0};function ap(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=At.workingColorSpace){if(e=FD(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=ap(c,a,e+1/3),this.g=ap(c,a,e),this.b=ap(c,a,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=gi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gi){const i=TT[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return At.workingToColorSpace(Ln.copy(this),e),Math.round(yt(Ln.r*255,0,255))*65536+Math.round(yt(Ln.g*255,0,255))*256+Math.round(yt(Ln.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,a=Ln.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let d,f;const m=(u+c)/2;if(u===c)d=0,f=0;else{const g=c-u;switch(f=m<=.5?g/(c+u):g/(2-c-u),c){case i:d=(s-a)/g+(s<a?6:0);break;case s:d=(a-i)/g+2;break;case a:d=(i-s)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=m,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=gi){At.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,i=Ln.g,s=Ln.b;return e!==gi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(bu);const i=Gf(fs.h,bu.h,t),s=Gf(fs.s,bu.s,t),a=Gf(fs.l,bu.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new bt;bt.NAMES=TT;let iL=0;class oc extends Oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iL++}),this.uuid=ic(),this.name="",this.type="Material",this.blending=ga,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gp,this.blendDst=Wp,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ga&&(i.blending=this.blending),this.side!==Rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gp&&(i.blendSrc=this.blendSrc),this.blendDst!==Wp&&(i.blendDst=this.blendDst),this.blendEquation!==to&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MT extends oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=lT,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new te,Iu=new It;let rL=0;class Zi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rL++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=B0,this.updateRanges=[],this.gpuType=Rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Iu.fromBufferAttribute(this,t),Iu.applyMatrix3(e),this.setXY(t,Iu.x,Iu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=El(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=El(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=El(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=El(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=El(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array),s=Qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array),s=Qn(s,this.array),a=Qn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==B0&&(e.usage=this.usage),e}}class wT extends Zi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class CT extends Zi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class er extends Zi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sL=0;const mi=new rn,lp=new kn,ia=new te,ai=new sc,wl=new sc,Sn=new te;class Is extends Oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sL++}),this.uuid=ic(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ST(e)?CT:wT)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ut().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,i){return mi.makeTranslation(e,t,i),this.applyMatrix4(mi),this}scale(e,t,i){return mi.makeScale(e,t,i),this.applyMatrix4(mi),this}lookAt(e){return lp.lookAt(e),lp.updateMatrix(),this.applyMatrix4(lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new er(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ai.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lg);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const i=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];wl.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(ai.min,wl.min),ai.expandByPoint(Sn),Sn.addVectors(ai.max,wl.max),ai.expandByPoint(Sn)):(ai.expandByPoint(wl.min),ai.expandByPoint(wl.max))}ai.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)Sn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Sn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let f=0,m=u.count;f<m;f++)Sn.fromBufferAttribute(u,f),d&&(ia.fromBufferAttribute(e,f),Sn.add(ia)),s=Math.max(s,i.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let W=0;W<i.count;W++)u[W]=new te,d[W]=new te;const f=new te,m=new te,g=new te,_=new It,E=new It,x=new It,M=new te,S=new te;function y(W,b,R){f.fromBufferAttribute(i,W),m.fromBufferAttribute(i,b),g.fromBufferAttribute(i,R),_.fromBufferAttribute(a,W),E.fromBufferAttribute(a,b),x.fromBufferAttribute(a,R),m.sub(f),g.sub(f),E.sub(_),x.sub(_);const B=1/(E.x*x.y-x.x*E.y);isFinite(B)&&(M.copy(m).multiplyScalar(x.y).addScaledVector(g,-E.y).multiplyScalar(B),S.copy(g).multiplyScalar(E.x).addScaledVector(m,-x.x).multiplyScalar(B),u[W].add(M),u[b].add(M),u[R].add(M),d[W].add(S),d[b].add(S),d[R].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let W=0,b=P.length;W<b;++W){const R=P[W],B=R.start,ae=R.count;for(let ee=B,he=B+ae;ee<he;ee+=3)y(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const I=new te,A=new te,G=new te,F=new te;function U(W){G.fromBufferAttribute(s,W),F.copy(G);const b=u[W];I.copy(b),I.sub(G.multiplyScalar(G.dot(b))).normalize(),A.crossVectors(F,b);const B=A.dot(d[W])<0?-1:1;c.setXYZW(W,I.x,I.y,I.z,B)}for(let W=0,b=P.length;W<b;++W){const R=P[W],B=R.start,ae=R.count;for(let ee=B,he=B+ae;ee<he;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,E=i.count;_<E;_++)i.setXYZ(_,0,0,0);const s=new te,a=new te,c=new te,u=new te,d=new te,f=new te,m=new te,g=new te;if(e)for(let _=0,E=e.count;_<E;_+=3){const x=e.getX(_+0),M=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,S),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),u.fromBufferAttribute(i,x),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),u.add(m),d.add(m),f.add(m),i.setXYZ(x,u.x,u.y,u.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(S,f.x,f.y,f.z)}else for(let _=0,E=t.count;_<E;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(u,d){const f=u.array,m=u.itemSize,g=u.normalized,_=new f.constructor(d.length*m);let E=0,x=0;for(let M=0,S=d.length;M<S;M++){u.isInterleavedBufferAttribute?E=d[M]*u.data.stride+u.offset:E=d[M]*m;for(let y=0;y<m;y++)_[x++]=f[E++]}return new Zi(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Is,i=this.index.array,s=this.attributes;for(const u in s){const d=s[u],f=e(d,i);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const d=[],f=a[u];for(let m=0,g=f.length;m<g;m++){const _=f[m],E=e(_,i);d.push(E)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const f=i[d];e.data.attributes[d]=f.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],m=[];for(let g=0,_=f.length;g<_;g++){const E=f[g];m.push(E.toJSON(e.data))}m.length>0&&(s[d]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const f in s){const m=s[f];this.setAttribute(f,m.clone(t))}const a=e.morphAttributes;for(const f in a){const m=[],g=a[f];for(let _=0,E=g.length;_<E;_++)m.push(g[_].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,m=c.length;f<m;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Z0=new rn,js=new KD,Pu=new Lg,eS=new te,Nu=new te,Du=new te,Lu=new te,cp=new te,Uu=new te,tS=new te,Ou=new te;class Yi extends kn{constructor(e=new Is,t=new MT){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Uu.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const m=u[d],g=a[d];m!==0&&(cp.fromBufferAttribute(g,e),c?Uu.addScaledVector(cp,m):Uu.addScaledVector(cp.sub(t),m))}t.add(Uu)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pu.copy(i.boundingSphere),Pu.applyMatrix4(a),js.copy(e.ray).recast(e.near),!(Pu.containsPoint(js.origin)===!1&&(js.intersectSphere(Pu,eS)===null||js.origin.distanceToSquared(eS)>(e.far-e.near)**2))&&(Z0.copy(a).invert(),js.copy(e.ray).applyMatrix4(Z0),!(i.boundingBox!==null&&js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,E=a.drawRange;if(u!==null)if(Array.isArray(c))for(let x=0,M=_.length;x<M;x++){const S=_[x],y=c[S.materialIndex],P=Math.max(S.start,E.start),I=Math.min(u.count,Math.min(S.start+S.count,E.start+E.count));for(let A=P,G=I;A<G;A+=3){const F=u.getX(A),U=u.getX(A+1),W=u.getX(A+2);s=ku(this,y,e,i,f,m,g,F,U,W),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const x=Math.max(0,E.start),M=Math.min(u.count,E.start+E.count);for(let S=x,y=M;S<y;S+=3){const P=u.getX(S),I=u.getX(S+1),A=u.getX(S+2);s=ku(this,c,e,i,f,m,g,P,I,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let x=0,M=_.length;x<M;x++){const S=_[x],y=c[S.materialIndex],P=Math.max(S.start,E.start),I=Math.min(d.count,Math.min(S.start+S.count,E.start+E.count));for(let A=P,G=I;A<G;A+=3){const F=A,U=A+1,W=A+2;s=ku(this,y,e,i,f,m,g,F,U,W),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const x=Math.max(0,E.start),M=Math.min(d.count,E.start+E.count);for(let S=x,y=M;S<y;S+=3){const P=S,I=S+1,A=S+2;s=ku(this,c,e,i,f,m,g,P,I,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function oL(n,e,t,i,s,a,c,u){let d;if(e.side===ti?d=i.intersectTriangle(c,a,s,!0,u):d=i.intersectTriangle(s,a,c,e.side===Rs,u),d===null)return null;Ou.copy(u),Ou.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(Ou);return f<t.near||f>t.far?null:{distance:f,point:Ou.clone(),object:n}}function ku(n,e,t,i,s,a,c,u,d,f){n.getVertexPosition(u,Nu),n.getVertexPosition(d,Du),n.getVertexPosition(f,Lu);const m=oL(n,e,t,i,Nu,Du,Lu,tS);if(m){const g=new te;Ni.getBarycoord(tS,Nu,Du,Lu,g),s&&(m.uv=Ni.getInterpolatedAttribute(s,u,d,f,g,new It)),a&&(m.uv1=Ni.getInterpolatedAttribute(a,u,d,f,g,new It)),c&&(m.normal=Ni.getInterpolatedAttribute(c,u,d,f,g,new te),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:u,b:d,c:f,normal:new te,materialIndex:0};Ni.getNormal(Nu,Du,Lu,_.normal),m.face=_,m.barycoord=g}return m}class ac extends Is{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],f=[],m=[],g=[];let _=0,E=0;x("z","y","x",-1,-1,i,t,e,c,a,0),x("z","y","x",1,-1,i,t,-e,c,a,1),x("x","z","y",1,1,e,i,t,s,c,2),x("x","z","y",1,-1,e,i,-t,s,c,3),x("x","y","z",1,-1,e,t,i,s,a,4),x("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new er(f,3)),this.setAttribute("normal",new er(m,3)),this.setAttribute("uv",new er(g,2));function x(M,S,y,P,I,A,G,F,U,W,b){const R=A/U,B=G/W,ae=A/2,ee=G/2,he=F/2,pe=U+1,se=W+1;let ce=0,z=0;const le=new te;for(let ie=0;ie<se;ie++){const L=ie*B-ee;for(let ne=0;ne<pe;ne++){const Oe=ne*R-ae;le[M]=Oe*P,le[S]=L*I,le[y]=he,f.push(le.x,le.y,le.z),le[M]=0,le[S]=0,le[y]=F>0?1:-1,m.push(le.x,le.y,le.z),g.push(ne/U),g.push(1-ie/W),ce+=1}}for(let ie=0;ie<W;ie++)for(let L=0;L<U;L++){const ne=_+L+pe*ie,Oe=_+L+pe*(ie+1),J=_+(L+1)+pe*(ie+1),de=_+(L+1)+pe*ie;d.push(ne,Oe,de),d.push(Oe,J,de),z+=6}u.addGroup(E,z,b),E+=z,_+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ra(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const i=Ra(n[t]);for(const s in i)e[s]=i[s]}return e}function aL(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function RT(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const lL={clone:Ra,merge:Vn};var cL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class As extends oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cL,this.fragmentShader=uL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ra(e.uniforms),this.uniformsGroups=aL(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class AT extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ps=new te,nS=new It,iS=new It;class _i extends AT{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Am*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Am*2*Math.atan(Math.tan(Vf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,nS,iS),t.subVectors(iS,nS)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vf*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;a+=c.offsetX*s/d,t-=c.offsetY*i/f,s*=c.width/d,i*=c.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ra=-90,sa=1;class hL extends kn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _i(ra,sa,e,t);s.layers=this.layers,this.add(s);const a=new _i(ra,sa,e,t);a.layers=this.layers,this.add(a);const c=new _i(ra,sa,e,t);c.layers=this.layers,this.add(c);const u=new _i(ra,sa,e,t);u.layers=this.layers,this.add(u);const d=new _i(ra,sa,e,t);d.layers=this.layers,this.add(d);const f=new _i(ra,sa,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,d]=t;for(const f of t)this.remove(f);if(e===Ar)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Mh)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,f,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,f),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(g,_,E),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class bT extends Gn{constructor(e=[],t=Ma,i,s,a,c,u,d,f,m){super(e,t,i,s,a,c,u,d,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dL extends go{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new bT(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ac(5,5,5),a=new As({name:"CubemapFromEquirect",uniforms:Ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Ts});a.uniforms.tEquirect.value=t;const c=new Yi(s,a),u=t.minFilter;return t.minFilter===oo&&(t.minFilter=qi),new hL(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}class Fu extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fL={type:"move"};class up{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),y=this._getHandJoint(f,M);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],_=m.position.distanceTo(g.position),E=.02,x=.005;f.inputState.pinching&&_>E+x?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=E-x&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(fL)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pL extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hp=new te,mL=new te,gL=new ut;class Zs{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=hp.subVectors(i,t).cross(mL.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(hp),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gL.getNormalMatrix(e),s=this.coplanarPoint(hp).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Lg,_L=new It(.5,.5),Bu=new te;class Ug{constructor(e=new Zs,t=new Zs,i=new Zs,s=new Zs,a=new Zs,c=new Zs){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ar){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],d=s[3],f=s[4],m=s[5],g=s[6],_=s[7],E=s[8],x=s[9],M=s[10],S=s[11],y=s[12],P=s[13],I=s[14],A=s[15];if(i[0].setComponents(d-a,_-f,S-E,A-y).normalize(),i[1].setComponents(d+a,_+f,S+E,A+y).normalize(),i[2].setComponents(d+c,_+m,S+x,A+P).normalize(),i[3].setComponents(d-c,_-m,S-x,A-P).normalize(),i[4].setComponents(d-u,_-g,S-M,A-I).normalize(),t===Ar)i[5].setComponents(d+u,_+g,S+M,A+I).normalize();else if(t===Mh)i[5].setComponents(u,g,M,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);const t=_L.distanceTo(e.center);return qs.radius=.7071067811865476+t,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Bu.x=s.normal.x>0?e.max.x:e.min.x,Bu.y=s.normal.y>0?e.max.y:e.min.y,Bu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class IT extends Gn{constructor(e,t,i=mo,s,a,c,u=Fi,d=Fi,f,m=Gl,g=1){if(m!==Gl&&m!==Wl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:g};super(_,s,a,c,u,d,m,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bh extends Is{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(s),f=u+1,m=d+1,g=e/u,_=t/d,E=[],x=[],M=[],S=[];for(let y=0;y<m;y++){const P=y*_-c;for(let I=0;I<f;I++){const A=I*g-a;x.push(A,-P,0),M.push(0,0,1),S.push(I/u),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let P=0;P<u;P++){const I=P+f*y,A=P+f*(y+1),G=P+1+f*(y+1),F=P+1+f*y;E.push(I,A,F),E.push(A,G,F)}this.setIndex(E),this.setAttribute("position",new er(x,3)),this.setAttribute("normal",new er(M,3)),this.setAttribute("uv",new er(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bh(e.width,e.height,e.widthSegments,e.heightSegments)}}class Og extends Is{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(c+u,Math.PI);let f=0;const m=[],g=new te,_=new te,E=[],x=[],M=[],S=[];for(let y=0;y<=i;y++){const P=[],I=y/i;let A=0;y===0&&c===0?A=.5/t:y===i&&d===Math.PI&&(A=-.5/t);for(let G=0;G<=t;G++){const F=G/t;g.x=-e*Math.cos(s+F*a)*Math.sin(c+I*u),g.y=e*Math.cos(c+I*u),g.z=e*Math.sin(s+F*a)*Math.sin(c+I*u),x.push(g.x,g.y,g.z),_.copy(g).normalize(),M.push(_.x,_.y,_.z),S.push(F+A,1-I),P.push(f++)}m.push(P)}for(let y=0;y<i;y++)for(let P=0;P<t;P++){const I=m[y][P+1],A=m[y][P],G=m[y+1][P],F=m[y+1][P+1];(y!==0||c>0)&&E.push(I,A,F),(y!==i-1||d<Math.PI)&&E.push(A,G,F)}this.setIndex(E),this.setAttribute("position",new er(x,3)),this.setAttribute("normal",new er(M,3)),this.setAttribute("uv",new er(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Og(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vL extends oc{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vT,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yL extends oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SL extends oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dp={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class EL{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){u++,a===!1&&s.onStart!==void 0&&s.onStart(m,c,u),a=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return f.push(m,g),this},this.removeHandler=function(m){const g=f.indexOf(m);return g!==-1&&f.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=f.length;g<_;g+=2){const E=f[g],x=f[g+1];if(E.global&&(E.lastIndex=0),E.test(m))return x}return null}}}const xL=new EL;class kg{constructor(e){this.manager=e!==void 0?e:xL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}kg.DEFAULT_MATERIAL_NAME="__DEFAULT";const oa=new WeakMap;class TL extends kg{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=dp.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);else{let g=oa.get(c);g===void 0&&(g=[],oa.set(c,g)),g.push({onLoad:t,onError:s})}return c}const u=Xl("img");function d(){m(),t&&t(this);const g=oa.get(this)||[];for(let _=0;_<g.length;_++){const E=g[_];E.onLoad&&E.onLoad(this)}oa.delete(this),a.manager.itemEnd(e)}function f(g){m(),s&&s(g),dp.remove(`image:${e}`);const _=oa.get(this)||[];for(let E=0;E<_.length;E++){const x=_[E];x.onError&&x.onError(g)}oa.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){u.removeEventListener("load",d,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),dp.add(`image:${e}`,u),a.manager.itemStart(e),u.src=e,u}}class ML extends kg{constructor(e){super(e)}load(e,t,i,s){const a=new Gn,c=new TL(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class wL extends kn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const fp=new rn,rS=new te,sS=new te;class CL{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=nr,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ug,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rS.setFromMatrixPosition(e.matrixWorld),t.position.copy(rS),sS.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sS),t.updateMatrixWorld(),fp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class PT extends AT{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class RL extends CL{constructor(){super(new PT(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AL extends wL{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new RL}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bL extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function oS(n,e,t,i){const s=IL(i);switch(t){case fT:return n*e;case mT:return n*e/s.components*s.byteLength;case Ig:return n*e/s.components*s.byteLength;case gT:return n*e*2/s.components*s.byteLength;case Pg:return n*e*2/s.components*s.byteLength;case pT:return n*e*3/s.components*s.byteLength;case Oi:return n*e*4/s.components*s.byteLength;case Ng:return n*e*4/s.components*s.byteLength;case Ku:case Ju:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qu:case Zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case im:case sm:return Math.max(n,16)*Math.max(e,8)/4;case nm:case rm:return Math.max(n,8)*Math.max(e,8)/2;case om:case am:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case um:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gm:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _m:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ym:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Sm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Em:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case eh:case Tm:case Mm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _T:case wm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Cm:case Rm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function IL(n){switch(n){case nr:case uT:return{byteLength:1,components:1};case Hl:case hT:case nc:return{byteLength:2,components:1};case Ag:case bg:return{byteLength:2,components:4};case mo:case Rg:case Rr:return{byteLength:4,components:1};case dT:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cg);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function NT(){let n=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function PL(n){const e=new WeakMap;function t(u,d){const f=u.array,m=u.usage,g=f.byteLength,_=n.createBuffer();n.bindBuffer(d,_),n.bufferData(d,f,m),u.onUploadCallback();let E;if(f instanceof Float32Array)E=n.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)E=n.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?E=n.HALF_FLOAT:E=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)E=n.SHORT;else if(f instanceof Uint32Array)E=n.UNSIGNED_INT;else if(f instanceof Int32Array)E=n.INT;else if(f instanceof Int8Array)E=n.BYTE;else if(f instanceof Uint8Array)E=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)E=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:E,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,d,f){const m=d.array,g=d.updateRanges;if(n.bindBuffer(f,u),g.length===0)n.bufferSubData(f,0,m);else{g.sort((E,x)=>E.start-x.start);let _=0;for(let E=1;E<g.length;E++){const x=g[_],M=g[E];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++_,g[_]=M)}g.length=_+1;for(let E=0,x=g.length;E<x;E++){const M=g[E];n.bufferSubData(f,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,d),f.version=u.version}}return{get:s,remove:a,update:c}}var NL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DL=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zL=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,HL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$L=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,t2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,n2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,i2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,r2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l2="gl_FragColor = linearToOutputTexel( gl_FragColor );",c2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,h2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,m2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,S2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,w2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,N2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,q2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,K2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eU=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oU=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fU=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pU=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gU=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_U=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vU=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SU=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MU=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wU=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CU=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NU=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FU=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BU=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GU=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$U=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KU=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eO=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tO=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nO=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iO=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rO=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sO=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aO=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lO=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cO=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:NL,alphahash_pars_fragment:DL,alphamap_fragment:LL,alphamap_pars_fragment:UL,alphatest_fragment:OL,alphatest_pars_fragment:kL,aomap_fragment:FL,aomap_pars_fragment:BL,batching_pars_vertex:zL,batching_vertex:HL,begin_vertex:VL,beginnormal_vertex:GL,bsdfs:WL,iridescence_fragment:XL,bumpmap_pars_fragment:$L,clipping_planes_fragment:jL,clipping_planes_pars_fragment:qL,clipping_planes_pars_vertex:YL,clipping_planes_vertex:KL,color_fragment:JL,color_pars_fragment:QL,color_pars_vertex:ZL,color_vertex:e2,common:t2,cube_uv_reflection_fragment:n2,defaultnormal_vertex:i2,displacementmap_pars_vertex:r2,displacementmap_vertex:s2,emissivemap_fragment:o2,emissivemap_pars_fragment:a2,colorspace_fragment:l2,colorspace_pars_fragment:c2,envmap_fragment:u2,envmap_common_pars_fragment:h2,envmap_pars_fragment:d2,envmap_pars_vertex:f2,envmap_physical_pars_fragment:M2,envmap_vertex:p2,fog_vertex:m2,fog_pars_vertex:g2,fog_fragment:_2,fog_pars_fragment:v2,gradientmap_pars_fragment:y2,lightmap_pars_fragment:S2,lights_lambert_fragment:E2,lights_lambert_pars_fragment:x2,lights_pars_begin:T2,lights_toon_fragment:w2,lights_toon_pars_fragment:C2,lights_phong_fragment:R2,lights_phong_pars_fragment:A2,lights_physical_fragment:b2,lights_physical_pars_fragment:I2,lights_fragment_begin:P2,lights_fragment_maps:N2,lights_fragment_end:D2,logdepthbuf_fragment:L2,logdepthbuf_pars_fragment:U2,logdepthbuf_pars_vertex:O2,logdepthbuf_vertex:k2,map_fragment:F2,map_pars_fragment:B2,map_particle_fragment:z2,map_particle_pars_fragment:H2,metalnessmap_fragment:V2,metalnessmap_pars_fragment:G2,morphinstance_vertex:W2,morphcolor_vertex:X2,morphnormal_vertex:$2,morphtarget_pars_vertex:j2,morphtarget_vertex:q2,normal_fragment_begin:Y2,normal_fragment_maps:K2,normal_pars_fragment:J2,normal_pars_vertex:Q2,normal_vertex:Z2,normalmap_pars_fragment:eU,clearcoat_normal_fragment_begin:tU,clearcoat_normal_fragment_maps:nU,clearcoat_pars_fragment:iU,iridescence_pars_fragment:rU,opaque_fragment:sU,packing:oU,premultiplied_alpha_fragment:aU,project_vertex:lU,dithering_fragment:cU,dithering_pars_fragment:uU,roughnessmap_fragment:hU,roughnessmap_pars_fragment:dU,shadowmap_pars_fragment:fU,shadowmap_pars_vertex:pU,shadowmap_vertex:mU,shadowmask_pars_fragment:gU,skinbase_vertex:_U,skinning_pars_vertex:vU,skinning_vertex:yU,skinnormal_vertex:SU,specularmap_fragment:EU,specularmap_pars_fragment:xU,tonemapping_fragment:TU,tonemapping_pars_fragment:MU,transmission_fragment:wU,transmission_pars_fragment:CU,uv_pars_fragment:RU,uv_pars_vertex:AU,uv_vertex:bU,worldpos_vertex:IU,background_vert:PU,background_frag:NU,backgroundCube_vert:DU,backgroundCube_frag:LU,cube_vert:UU,cube_frag:OU,depth_vert:kU,depth_frag:FU,distanceRGBA_vert:BU,distanceRGBA_frag:zU,equirect_vert:HU,equirect_frag:VU,linedashed_vert:GU,linedashed_frag:WU,meshbasic_vert:XU,meshbasic_frag:$U,meshlambert_vert:jU,meshlambert_frag:qU,meshmatcap_vert:YU,meshmatcap_frag:KU,meshnormal_vert:JU,meshnormal_frag:QU,meshphong_vert:ZU,meshphong_frag:eO,meshphysical_vert:tO,meshphysical_frag:nO,meshtoon_vert:iO,meshtoon_frag:rO,points_vert:sO,points_frag:oO,shadow_vert:aO,shadow_frag:lO,sprite_vert:cO,sprite_frag:uO},Pe={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},$i={basic:{uniforms:Vn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Vn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Vn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Vn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Vn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Vn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Vn([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Vn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Vn([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Vn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Vn([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Vn([Pe.common,Pe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Vn([Pe.lights,Pe.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};$i.physical={uniforms:Vn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const zu={r:0,b:0,g:0},Ys=new ir,hO=new rn;function dO(n,e,t,i,s,a,c){const u=new bt(0);let d=a===!0?0:1,f,m,g=null,_=0,E=null;function x(I){let A=I.isScene===!0?I.background:null;return A&&A.isTexture&&(A=(I.backgroundBlurriness>0?t:e).get(A)),A}function M(I){let A=!1;const G=x(I);G===null?y(u,d):G&&G.isColor&&(y(G,1),A=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(I,A){const G=x(A);G&&(G.isCubeTexture||G.mapping===Fh)?(m===void 0&&(m=new Yi(new ac(1,1,1),new As({name:"BackgroundCubeMaterial",uniforms:Ra($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,U,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),Ys.copy(A.backgroundRotation),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),m.material.uniforms.envMap.value=G,m.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(hO.makeRotationFromEuler(Ys)),m.material.toneMapped=At.getTransfer(G.colorSpace)!==kt,(g!==G||_!==G.version||E!==n.toneMapping)&&(m.material.needsUpdate=!0,g=G,_=G.version,E=n.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null)):G&&G.isTexture&&(f===void 0&&(f=new Yi(new Bh(2,2),new As({name:"BackgroundMaterial",uniforms:Ra($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=G,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.toneMapped=At.getTransfer(G.colorSpace)!==kt,G.matrixAutoUpdate===!0&&G.updateMatrix(),f.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||_!==G.version||E!==n.toneMapping)&&(f.material.needsUpdate=!0,g=G,_=G.version,E=n.toneMapping),f.layers.enableAll(),I.unshift(f,f.geometry,f.material,0,0,null))}function y(I,A){I.getRGB(zu,RT(n)),i.buffers.color.setClear(zu.r,zu.g,zu.b,A,c)}function P(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,A=1){u.set(I),d=A,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,y(u,d)},render:M,addToRenderList:S,dispose:P}}function fO(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,c=!1;function u(R,B,ae,ee,he){let pe=!1;const se=g(ee,ae,B);a!==se&&(a=se,f(a.object)),pe=E(R,ee,ae,he),pe&&x(R,ee,ae,he),he!==null&&e.update(he,n.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,A(R,B,ae,ee),he!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function d(){return n.createVertexArray()}function f(R){return n.bindVertexArray(R)}function m(R){return n.deleteVertexArray(R)}function g(R,B,ae){const ee=ae.wireframe===!0;let he=i[R.id];he===void 0&&(he={},i[R.id]=he);let pe=he[B.id];pe===void 0&&(pe={},he[B.id]=pe);let se=pe[ee];return se===void 0&&(se=_(d()),pe[ee]=se),se}function _(R){const B=[],ae=[],ee=[];for(let he=0;he<t;he++)B[he]=0,ae[he]=0,ee[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ae,attributeDivisors:ee,object:R,attributes:{},index:null}}function E(R,B,ae,ee){const he=a.attributes,pe=B.attributes;let se=0;const ce=ae.getAttributes();for(const z in ce)if(ce[z].location>=0){const ie=he[z];let L=pe[z];if(L===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),ie===void 0||ie.attribute!==L||L&&ie.data!==L.data)return!0;se++}return a.attributesNum!==se||a.index!==ee}function x(R,B,ae,ee){const he={},pe=B.attributes;let se=0;const ce=ae.getAttributes();for(const z in ce)if(ce[z].location>=0){let ie=pe[z];ie===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const L={};L.attribute=ie,ie&&ie.data&&(L.data=ie.data),he[z]=L,se++}a.attributes=he,a.attributesNum=se,a.index=ee}function M(){const R=a.newAttributes;for(let B=0,ae=R.length;B<ae;B++)R[B]=0}function S(R){y(R,0)}function y(R,B){const ae=a.newAttributes,ee=a.enabledAttributes,he=a.attributeDivisors;ae[R]=1,ee[R]===0&&(n.enableVertexAttribArray(R),ee[R]=1),he[R]!==B&&(n.vertexAttribDivisor(R,B),he[R]=B)}function P(){const R=a.newAttributes,B=a.enabledAttributes;for(let ae=0,ee=B.length;ae<ee;ae++)B[ae]!==R[ae]&&(n.disableVertexAttribArray(ae),B[ae]=0)}function I(R,B,ae,ee,he,pe,se){se===!0?n.vertexAttribIPointer(R,B,ae,he,pe):n.vertexAttribPointer(R,B,ae,ee,he,pe)}function A(R,B,ae,ee){M();const he=ee.attributes,pe=ae.getAttributes(),se=B.defaultAttributeValues;for(const ce in pe){const z=pe[ce];if(z.location>=0){let le=he[ce];if(le===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const ie=le.normalized,L=le.itemSize,ne=e.get(le);if(ne===void 0)continue;const Oe=ne.buffer,J=ne.type,de=ne.bytesPerElement,we=J===n.INT||J===n.UNSIGNED_INT||le.gpuType===Rg;if(le.isInterleavedBufferAttribute){const Se=le.data,Ce=Se.stride,Je=le.offset;if(Se.isInstancedInterleavedBuffer){for(let Xe=0;Xe<z.locationSize;Xe++)y(z.location+Xe,Se.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Xe=0;Xe<z.locationSize;Xe++)S(z.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Xe=0;Xe<z.locationSize;Xe++)I(z.location+Xe,L/z.locationSize,J,ie,Ce*de,(Je+L/z.locationSize*Xe)*de,we)}else{if(le.isInstancedBufferAttribute){for(let Se=0;Se<z.locationSize;Se++)y(z.location+Se,le.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Se=0;Se<z.locationSize;Se++)S(z.location+Se);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Se=0;Se<z.locationSize;Se++)I(z.location+Se,L/z.locationSize,J,ie,L*de,L/z.locationSize*Se*de,we)}}else if(se!==void 0){const ie=se[ce];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(z.location,ie);break;case 3:n.vertexAttrib3fv(z.location,ie);break;case 4:n.vertexAttrib4fv(z.location,ie);break;default:n.vertexAttrib1fv(z.location,ie)}}}}P()}function G(){W();for(const R in i){const B=i[R];for(const ae in B){const ee=B[ae];for(const he in ee)m(ee[he].object),delete ee[he];delete B[ae]}delete i[R]}}function F(R){if(i[R.id]===void 0)return;const B=i[R.id];for(const ae in B){const ee=B[ae];for(const he in ee)m(ee[he].object),delete ee[he];delete B[ae]}delete i[R.id]}function U(R){for(const B in i){const ae=i[B];if(ae[R.id]===void 0)continue;const ee=ae[R.id];for(const he in ee)m(ee[he].object),delete ee[he];delete ae[R.id]}}function W(){b(),c=!0,a!==s&&(a=s,f(a.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:W,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:S,disableUnusedAttributes:P}}function pO(n,e,t){let i;function s(f){i=f}function a(f,m){n.drawArrays(i,f,m),t.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawArraysInstanced(i,f,m,g),t.update(m,i,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,m,0,g);let E=0;for(let x=0;x<g;x++)E+=m[x];t.update(E,i,1)}function d(f,m,g,_){if(g===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let x=0;x<f.length;x++)c(f[x],m[x],_[x]);else{E.multiDrawArraysInstancedWEBGL(i,f,0,m,0,_,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M]*_[M];t.update(x,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function mO(n,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(U){return!(U!==Oi&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const W=U===nc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==nr&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Rr&&!W)}function d(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=d(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),E=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),G=x>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:E,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:P,maxVaryings:I,maxFragmentUniforms:A,vertexTextures:G,maxSamples:F}}function gO(n){const e=this;let t=null,i=0,s=!1,a=!1;const c=new Zs,u=new ut,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const E=g.length!==0||_||i!==0||s;return s=_,i=g.length,E},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,E){const x=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,y=n.get(g);if(!s||x===null||x.length===0||a&&!S)a?m(null):f();else{const P=a?0:i,I=P*4;let A=y.clippingState||null;d.value=A,A=m(x,_,I,E);for(let G=0;G!==I;++G)A[G]=t[G];y.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,E,x){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=d.value,x!==!0||S===null){const y=E+M*4,P=_.matrixWorldInverse;u.getNormalMatrix(P),(S===null||S.length<y)&&(S=new Float32Array(y));for(let I=0,A=E;I!==M;++I,A+=4)c.copy(g[I]).applyMatrix4(P,u),c.normal.toArray(S,A),S[A+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function _O(n){let e=new WeakMap;function t(c,u){return u===Qp?c.mapping=Ma:u===Zp&&(c.mapping=wa),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Qp||u===Zp)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const f=new dL(d.height);return f.fromEquirectangularTexture(n,c),e.set(c,f),c.addEventListener("dispose",s),t(f.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const ua=4,aS=[.125,.215,.35,.446,.526,.582],no=20,pp=new PT,lS=new bt;let mp=null,gp=0,_p=0,vp=!1;const eo=(1+Math.sqrt(5))/2,aa=1/eo,cS=[new te(-eo,aa,0),new te(eo,aa,0),new te(-aa,0,eo),new te(aa,0,eo),new te(0,eo,-aa),new te(0,eo,aa),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)],vO=new te;class uS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,a={}){const{size:c=256,position:u=vO}=a;mp=this._renderer.getRenderTarget(),gp=this._renderer.getActiveCubeFace(),_p=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,s,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mp,gp,_p),this._renderer.xr.enabled=vp,e.scissorTest=!1,Hu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ma||e.mapping===wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mp=this._renderer.getRenderTarget(),gp=this._renderer.getActiveCubeFace(),_p=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:nc,format:Oi,colorSpace:Ca,depthBuffer:!1},s=hS(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hS(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yO(a)),this._blurMaterial=SO(a,e,t)}return s}_compileMaterial(e){const t=new Yi(this._lodPlanes[0],e);this._renderer.compile(t,pp)}_sceneToCubeUV(e,t,i,s,a){const d=new _i(90,1,t,i),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,E=g.toneMapping;g.getClearColor(lS),g.toneMapping=Ms,g.autoClear=!1;const x=new MT({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),M=new Yi(new ac,x);let S=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,S=!0):(x.color.copy(lS),S=!0);for(let P=0;P<6;P++){const I=P%3;I===0?(d.up.set(0,f[P],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+m[P],a.y,a.z)):I===1?(d.up.set(0,0,f[P]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+m[P],a.z)):(d.up.set(0,f[P],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+m[P]));const A=this._cubeSize;Hu(s,I*A,P>2?A:0,A,A),g.setRenderTarget(s),S&&g.render(M,d),g.render(e,d)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=E,g.autoClear=_,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ma||e.mapping===wa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dS());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Yi(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Hu(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,pp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=cS[(s-a-1)%cS.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Yi(this._lodPlanes[s],f),_=f.uniforms,E=this._sizeLods[i]-1,x=isFinite(a)?Math.PI/(2*E):2*Math.PI/(2*no-1),M=a/x,S=isFinite(a)?1+Math.floor(m*M):no;S>no&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${no}`);const y=[];let P=0;for(let U=0;U<no;++U){const W=U/M,b=Math.exp(-W*W/2);y.push(b),U===0?P+=b:U<S&&(P+=2*b)}for(let U=0;U<y.length;U++)y[U]=y[U]/P;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:I}=this;_.dTheta.value=x,_.mipInt.value=I-i;const A=this._sizeLods[s],G=3*A*(s>I-ua?s-I+ua:0),F=4*(this._cubeSize-A);Hu(t,G,F,3*A,2*A),d.setRenderTarget(t),d.render(g,pp)}}function yO(n){const e=[],t=[],i=[];let s=n;const a=n-ua+1+aS.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let d=1/u;c>n-ua?d=aS[c-n+ua-1]:c===0&&(d=0),i.push(d);const f=1/(u-2),m=-f,g=1+f,_=[m,m,g,m,g,g,m,m,g,g,m,g],E=6,x=6,M=3,S=2,y=1,P=new Float32Array(M*x*E),I=new Float32Array(S*x*E),A=new Float32Array(y*x*E);for(let F=0;F<E;F++){const U=F%3*2/3-1,W=F>2?0:-1,b=[U,W,0,U+2/3,W,0,U+2/3,W+1,0,U,W,0,U+2/3,W+1,0,U,W+1,0];P.set(b,M*x*F),I.set(_,S*x*F);const R=[F,F,F,F,F,F];A.set(R,y*x*F)}const G=new Is;G.setAttribute("position",new Zi(P,M)),G.setAttribute("uv",new Zi(I,S)),G.setAttribute("faceIndex",new Zi(A,y)),e.push(G),s>ua&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hS(n,e,t){const i=new go(n,e,t);return i.texture.mapping=Fh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hu(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function SO(n,e,t){const i=new Float32Array(no),s=new te(0,1,0);return new As({name:"SphericalGaussianBlur",defines:{n:no,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function dS(){return new As({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function fS(){return new As({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Fg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function EO(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,f=d===Qp||d===Zp,m=d===Ma||d===wa;if(f||m){let g=e.get(u);const _=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new uS(n)),g=f?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const E=u.image;return f&&E&&E.height>0||m&&E&&s(E)?(t===null&&(t=new uS(n)),g=f?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let d=0;const f=6;for(let m=0;m<f;m++)u[m]!==void 0&&d++;return d===f}function a(u){const d=u.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function xO(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&_a("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function TO(n,e,t,i){const s={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const x in _.attributes)e.remove(_.attributes[x]);_.removeEventListener("dispose",c),delete s[_.id];const E=a.get(_);E&&(e.remove(E),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const E in _)e.update(_[E],n.ARRAY_BUFFER)}function f(g){const _=[],E=g.index,x=g.attributes.position;let M=0;if(E!==null){const P=E.array;M=E.version;for(let I=0,A=P.length;I<A;I+=3){const G=P[I+0],F=P[I+1],U=P[I+2];_.push(G,F,F,U,U,G)}}else if(x!==void 0){const P=x.array;M=x.version;for(let I=0,A=P.length/3-1;I<A;I+=3){const G=I+0,F=I+1,U=I+2;_.push(G,F,F,U,U,G)}}else return;const S=new(ST(_)?CT:wT)(_,1);S.version=M;const y=a.get(g);y&&e.remove(y),a.set(g,S)}function m(g){const _=a.get(g);if(_){const E=g.index;E!==null&&_.version<E.version&&f(g)}else f(g);return a.get(g)}return{get:u,update:d,getWireframeAttribute:m}}function MO(n,e,t){let i;function s(_){i=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function d(_,E){n.drawElements(i,E,a,_*c),t.update(E,i,1)}function f(_,E,x){x!==0&&(n.drawElementsInstanced(i,E,a,_*c,x),t.update(E,i,x))}function m(_,E,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,E,0,a,_,0,x);let S=0;for(let y=0;y<x;y++)S+=E[y];t.update(S,i,1)}function g(_,E,x,M){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)f(_[y]/c,E[y],M[y]);else{S.multiDrawElementsInstancedWEBGL(i,E,0,a,_,0,M,0,x);let y=0;for(let P=0;P<x;P++)y+=E[P]*M[P];t.update(y,i,1)}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function wO(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function CO(n,e,t){const i=new WeakMap,s=new nn;function a(c,u,d){const f=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(u);if(_===void 0||_.count!==g){let R=function(){W.dispose(),i.delete(u),u.removeEventListener("dispose",R)};var E=R;_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let A=0;x===!0&&(A=1),M===!0&&(A=2),S===!0&&(A=3);let G=u.attributes.position.count*A,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const U=new Float32Array(G*F*4*g),W=new ET(U,G,F,g);W.type=Rr,W.needsUpdate=!0;const b=A*4;for(let B=0;B<g;B++){const ae=y[B],ee=P[B],he=I[B],pe=G*F*4*B;for(let se=0;se<ae.count;se++){const ce=se*b;x===!0&&(s.fromBufferAttribute(ae,se),U[pe+ce+0]=s.x,U[pe+ce+1]=s.y,U[pe+ce+2]=s.z,U[pe+ce+3]=0),M===!0&&(s.fromBufferAttribute(ee,se),U[pe+ce+4]=s.x,U[pe+ce+5]=s.y,U[pe+ce+6]=s.z,U[pe+ce+7]=0),S===!0&&(s.fromBufferAttribute(he,se),U[pe+ce+8]=s.x,U[pe+ce+9]=s.y,U[pe+ce+10]=s.z,U[pe+ce+11]=he.itemSize===4?s.w:1)}}_={count:g,texture:W,size:new It(G,F)},i.set(u,_),u.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let x=0;for(let S=0;S<f.length;S++)x+=f[S];const M=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",f)}d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:a}}function RO(n,e,t,i){let s=new WeakMap;function a(d){const f=i.render.frame,m=d.geometry,g=e.get(d,m);if(s.get(g)!==f&&(e.update(g),s.set(g,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),s.get(d)!==f&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),s.set(d,f))),d.isSkinnedMesh){const _=d.skeleton;s.get(_)!==f&&(_.update(),s.set(_,f))}return g}function c(){s=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}const DT=new Gn,pS=new IT(1,1),LT=new ET,UT=new qD,OT=new bT,mS=[],gS=[],_S=new Float32Array(16),vS=new Float32Array(9),yS=new Float32Array(4);function ka(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let a=mS[s];if(a===void 0&&(a=new Float32Array(s),mS[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zh(n,e){let t=gS[e];t===void 0&&(t=new Int32Array(e),gS[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function AO(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function IO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function PO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function NO(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;yS.set(i),n.uniformMatrix2fv(this.addr,!1,yS),dn(t,i)}}function DO(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;vS.set(i),n.uniformMatrix3fv(this.addr,!1,vS),dn(t,i)}}function LO(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;_S.set(i),n.uniformMatrix4fv(this.addr,!1,_S),dn(t,i)}}function UO(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function OO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function kO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function FO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function BO(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function HO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function VO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function GO(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(pS.compareFunction=yT,a=pS):a=DT,t.setTexture2D(e||a,s)}function WO(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||UT,s)}function XO(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||OT,s)}function $O(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||LT,s)}function jO(n){switch(n){case 5126:return AO;case 35664:return bO;case 35665:return IO;case 35666:return PO;case 35674:return NO;case 35675:return DO;case 35676:return LO;case 5124:case 35670:return UO;case 35667:case 35671:return OO;case 35668:case 35672:return kO;case 35669:case 35673:return FO;case 5125:return BO;case 36294:return zO;case 36295:return HO;case 36296:return VO;case 35678:case 36198:case 36298:case 36306:case 35682:return GO;case 35679:case 36299:case 36307:return WO;case 35680:case 36300:case 36308:case 36293:return XO;case 36289:case 36303:case 36311:case 36292:return $O}}function qO(n,e){n.uniform1fv(this.addr,e)}function YO(n,e){const t=ka(e,this.size,2);n.uniform2fv(this.addr,t)}function KO(n,e){const t=ka(e,this.size,3);n.uniform3fv(this.addr,t)}function JO(n,e){const t=ka(e,this.size,4);n.uniform4fv(this.addr,t)}function QO(n,e){const t=ka(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ZO(n,e){const t=ka(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ek(n,e){const t=ka(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tk(n,e){n.uniform1iv(this.addr,e)}function nk(n,e){n.uniform2iv(this.addr,e)}function ik(n,e){n.uniform3iv(this.addr,e)}function rk(n,e){n.uniform4iv(this.addr,e)}function sk(n,e){n.uniform1uiv(this.addr,e)}function ok(n,e){n.uniform2uiv(this.addr,e)}function ak(n,e){n.uniform3uiv(this.addr,e)}function lk(n,e){n.uniform4uiv(this.addr,e)}function ck(n,e,t){const i=this.cache,s=e.length,a=zh(t,s);hn(i,a)||(n.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||DT,a[c])}function uk(n,e,t){const i=this.cache,s=e.length,a=zh(t,s);hn(i,a)||(n.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||UT,a[c])}function hk(n,e,t){const i=this.cache,s=e.length,a=zh(t,s);hn(i,a)||(n.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||OT,a[c])}function dk(n,e,t){const i=this.cache,s=e.length,a=zh(t,s);hn(i,a)||(n.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||LT,a[c])}function fk(n){switch(n){case 5126:return qO;case 35664:return YO;case 35665:return KO;case 35666:return JO;case 35674:return QO;case 35675:return ZO;case 35676:return ek;case 5124:case 35670:return tk;case 35667:case 35671:return nk;case 35668:case 35672:return ik;case 35669:case 35673:return rk;case 5125:return sk;case 36294:return ok;case 36295:return ak;case 36296:return lk;case 35678:case 36198:case 36298:case 36306:case 35682:return ck;case 35679:case 36299:case 36307:return uk;case 35680:case 36300:case 36308:case 36293:return hk;case 36289:case 36303:case 36311:case 36292:return dk}}class pk{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jO(t.type)}}class mk{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fk(t.type)}}class gk{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const yp=/(\w+)(\])?(\[|\.)?/g;function SS(n,e){n.seq.push(e),n.map[e.id]=e}function _k(n,e,t){const i=n.name,s=i.length;for(yp.lastIndex=0;;){const a=yp.exec(i),c=yp.lastIndex;let u=a[1];const d=a[2]==="]",f=a[3];if(d&&(u=u|0),f===void 0||f==="["&&c+2===s){SS(t,f===void 0?new pk(u,n,e):new mk(u,n,e));break}else{let g=t.map[u];g===void 0&&(g=new gk(u),SS(t,g)),t=g}}}class th{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);_k(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function ES(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vk=37297;let yk=0;function Sk(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const xS=new ut;function Ek(n){At._getMatrix(xS,At.workingColorSpace,n);const e=`mat3( ${xS.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(n)){case Th:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function TS(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Sk(n.getShaderSource(e),c)}else return s}function xk(n,e){const t=Ek(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tk(n,e){let t;switch(e){case SD:t="Linear";break;case ED:t="Reinhard";break;case xD:t="Cineon";break;case TD:t="ACESFilmic";break;case wD:t="AgX";break;case CD:t="Neutral";break;case MD:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vu=new te;function Mk(){At.getLuminanceCoefficients(Vu);const n=Vu.x.toFixed(4),e=Vu.y.toFixed(4),t=Vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wk(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rl).join(`
`)}function Ck(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Rk(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(e,s),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Rl(n){return n!==""}function MS(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wS(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ak=/^[ \t]*#include +<([\w\d./]+)>/gm;function bm(n){return n.replace(Ak,Ik)}const bk=new Map;function Ik(n,e){let t=dt[e];if(t===void 0){const i=bk.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bm(t)}const Pk=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function CS(n){return n.replace(Pk,Nk)}function Nk(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function RS(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dk(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===aT?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ZN?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function Lk(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ma:case wa:e="ENVMAP_TYPE_CUBE";break;case Fh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Uk(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case wa:e="ENVMAP_MODE_REFRACTION";break}return e}function Ok(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lT:e="ENVMAP_BLENDING_MULTIPLY";break;case vD:e="ENVMAP_BLENDING_MIX";break;case yD:e="ENVMAP_BLENDING_ADD";break}return e}function kk(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Fk(n,e,t,i){const s=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=Dk(t),f=Lk(t),m=Uk(t),g=Ok(t),_=kk(t),E=wk(t),x=Ck(a),M=s.createProgram();let S,y,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Rl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Rl).join(`
`),y.length>0&&(y+=`
`)):(S=[RS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rl).join(`
`),y=[RS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ms?"#define TONE_MAPPING":"",t.toneMapping!==Ms?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ms?Tk("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,xk("linearToOutputTexel",t.outputColorSpace),Mk(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rl).join(`
`)),c=bm(c),c=MS(c,t),c=wS(c,t),u=bm(u),u=MS(u,t),u=wS(u,t),c=CS(c),u=CS(u),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===z0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===z0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=P+S+c,A=P+y+u,G=ES(s,s.VERTEX_SHADER,I),F=ES(s,s.FRAGMENT_SHADER,A);s.attachShader(M,G),s.attachShader(M,F),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function U(B){if(n.debug.checkShaderErrors){const ae=s.getProgramInfoLog(M).trim(),ee=s.getShaderInfoLog(G).trim(),he=s.getShaderInfoLog(F).trim();let pe=!0,se=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(pe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,G,F);else{const ce=TS(s,G,"vertex"),z=TS(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ae+`
`+ce+`
`+z)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(ee===""||he==="")&&(se=!1);se&&(B.diagnostics={runnable:pe,programLog:ae,vertexShader:{log:ee,prefix:S},fragmentShader:{log:he,prefix:y}})}s.deleteShader(G),s.deleteShader(F),W=new th(s,M),b=Rk(s,M)}let W;this.getUniforms=function(){return W===void 0&&U(this),W};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,vk)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yk++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=G,this.fragmentShader=F,this}let Bk=0;class zk{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Hk(e),t.set(e,i)),i}}class Hk{constructor(e){this.id=Bk++,this.code=e,this.usedTimes=0}}function Vk(n,e,t,i,s,a,c){const u=new xT,d=new zk,f=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let E=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return f.add(b),b===0?"uv":`uv${b}`}function S(b,R,B,ae,ee){const he=ae.fog,pe=ee.geometry,se=b.isMeshStandardMaterial?ae.environment:null,ce=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),z=ce&&ce.mapping===Fh?ce.image.height:null,le=x[b.type];b.precision!==null&&(E=s.getMaxPrecision(b.precision),E!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",E,"instead."));const ie=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,L=ie!==void 0?ie.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Oe,J,de,we;if(le){const Tt=$i[le];Oe=Tt.vertexShader,J=Tt.fragmentShader}else Oe=b.vertexShader,J=b.fragmentShader,d.update(b),de=d.getVertexShaderID(b),we=d.getFragmentShaderID(b);const Se=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Je=ee.isInstancedMesh===!0,Xe=ee.isBatchedMesh===!0,Lt=!!b.map,Vt=!!b.matcap,gt=!!ce,O=!!b.aoMap,fn=!!b.lightMap,Et=!!b.bumpMap,Pt=!!b.normalMap,$e=!!b.displacementMap,_t=!!b.emissiveMap,Ke=!!b.metalnessMap,ot=!!b.roughnessMap,Qt=b.anisotropy>0,N=b.clearcoat>0,w=b.dispersion>0,K=b.iridescence>0,ue=b.sheen>0,me=b.transmission>0,re=Qt&&!!b.anisotropyMap,qe=N&&!!b.clearcoatMap,Re=N&&!!b.clearcoatNormalMap,ze=N&&!!b.clearcoatRoughnessMap,Ye=K&&!!b.iridescenceMap,ve=K&&!!b.iridescenceThicknessMap,Ue=ue&&!!b.sheenColorMap,nt=ue&&!!b.sheenRoughnessMap,Ze=!!b.specularMap,Ae=!!b.specularColorMap,st=!!b.specularIntensityMap,H=me&&!!b.transmissionMap,be=me&&!!b.thicknessMap,_e=!!b.gradientMap,De=!!b.alphaMap,xe=b.alphaTest>0,fe=!!b.alphaHash,He=!!b.extensions;let ct=Ms;b.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(ct=n.toneMapping);const Ut={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Oe,fragmentShader:J,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:E,batching:Xe,batchingColor:Xe&&ee._colorsTexture!==null,instancing:Je,instancingColor:Je&&ee.instanceColor!==null,instancingMorph:Je&&ee.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ca,alphaToCoverage:!!b.alphaToCoverage,map:Lt,matcap:Vt,envMap:gt,envMapMode:gt&&ce.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:fn,bumpMap:Et,normalMap:Pt,displacementMap:_&&$e,emissiveMap:_t,normalMapObjectSpace:Pt&&b.normalMapType===ID,normalMapTangentSpace:Pt&&b.normalMapType===vT,metalnessMap:Ke,roughnessMap:ot,anisotropy:Qt,anisotropyMap:re,clearcoat:N,clearcoatMap:qe,clearcoatNormalMap:Re,clearcoatRoughnessMap:ze,dispersion:w,iridescence:K,iridescenceMap:Ye,iridescenceThicknessMap:ve,sheen:ue,sheenColorMap:Ue,sheenRoughnessMap:nt,specularMap:Ze,specularColorMap:Ae,specularIntensityMap:st,transmission:me,transmissionMap:H,thicknessMap:be,gradientMap:_e,opaque:b.transparent===!1&&b.blending===ga&&b.alphaToCoverage===!1,alphaMap:De,alphaTest:xe,alphaHash:fe,combine:b.combine,mapUv:Lt&&M(b.map.channel),aoMapUv:O&&M(b.aoMap.channel),lightMapUv:fn&&M(b.lightMap.channel),bumpMapUv:Et&&M(b.bumpMap.channel),normalMapUv:Pt&&M(b.normalMap.channel),displacementMapUv:$e&&M(b.displacementMap.channel),emissiveMapUv:_t&&M(b.emissiveMap.channel),metalnessMapUv:Ke&&M(b.metalnessMap.channel),roughnessMapUv:ot&&M(b.roughnessMap.channel),anisotropyMapUv:re&&M(b.anisotropyMap.channel),clearcoatMapUv:qe&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Re&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:nt&&M(b.sheenRoughnessMap.channel),specularMapUv:Ze&&M(b.specularMap.channel),specularColorMapUv:Ae&&M(b.specularColorMap.channel),specularIntensityMapUv:st&&M(b.specularIntensityMap.channel),transmissionMapUv:H&&M(b.transmissionMap.channel),thicknessMapUv:be&&M(b.thicknessMap.channel),alphaMapUv:De&&M(b.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(Pt||Qt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!pe.attributes.uv&&(Lt||De),fog:!!he,useFog:b.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ce,skinning:ee.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===kt,decodeVideoTextureEmissive:_t&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Tr,flipSided:b.side===ti,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ut.vertexUv1s=f.has(1),Ut.vertexUv2s=f.has(2),Ut.vertexUv3s=f.has(3),f.clear(),Ut}function y(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)R.push(B),R.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(P(R,b),I(R,b),R.push(n.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function P(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function I(b,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),R.gradientMap&&u.enable(22),b.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reverseDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),b.push(u.mask)}function A(b){const R=x[b.type];let B;if(R){const ae=$i[R];B=lL.clone(ae.uniforms)}else B=b.uniforms;return B}function G(b,R){let B;for(let ae=0,ee=m.length;ae<ee;ae++){const he=m[ae];if(he.cacheKey===R){B=he,++B.usedTimes;break}}return B===void 0&&(B=new Fk(n,R,b,a),m.push(B)),B}function F(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function U(b){d.remove(b)}function W(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:A,acquireProgram:G,releaseProgram:F,releaseShaderCache:U,programs:m,dispose:W}}function Gk(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function s(c,u,d){n.get(c)[u]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function Wk(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function AS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bS(){const n=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,_,E,x,M,S){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:_,material:E,groupOrder:x,renderOrder:g.renderOrder,z:M,group:S},n[e]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=E,y.groupOrder=x,y.renderOrder=g.renderOrder,y.z=M,y.group=S),e++,y}function u(g,_,E,x,M,S){const y=c(g,_,E,x,M,S);E.transmission>0?i.push(y):E.transparent===!0?s.push(y):t.push(y)}function d(g,_,E,x,M,S){const y=c(g,_,E,x,M,S);E.transmission>0?i.unshift(y):E.transparent===!0?s.unshift(y):t.unshift(y)}function f(g,_){t.length>1&&t.sort(g||Wk),i.length>1&&i.sort(_||AS),s.length>1&&s.sort(_||AS)}function m(){for(let g=e,_=n.length;g<_;g++){const E=n[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:d,finish:m,sort:f}}function Xk(){let n=new WeakMap;function e(i,s){const a=n.get(i);let c;return a===void 0?(c=new bS,n.set(i,[c])):s>=a.length?(c=new bS,a.push(c)):c=a[s],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function $k(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new bt};break;case"SpotLight":t={position:new te,direction:new te,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new te,halfWidth:new te,halfHeight:new te};break}return n[e.id]=t,t}}}function jk(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qk=0;function Yk(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Kk(n){const e=new $k,t=jk(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new te);const s=new te,a=new rn,c=new rn;function u(f){let m=0,g=0,_=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let E=0,x=0,M=0,S=0,y=0,P=0,I=0,A=0,G=0,F=0,U=0;f.sort(Yk);for(let b=0,R=f.length;b<R;b++){const B=f[b],ae=B.color,ee=B.intensity,he=B.distance,pe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=ae.r*ee,g+=ae.g*ee,_+=ae.b*ee;else if(B.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(B.sh.coefficients[se],ee);U++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ce=B.shadow,z=t.get(B);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,i.directionalShadow[E]=z,i.directionalShadowMap[E]=pe,i.directionalShadowMatrix[E]=B.shadow.matrix,P++}i.directional[E]=se,E++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(ae).multiplyScalar(ee),se.distance=he,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,i.spot[M]=se;const ce=B.shadow;if(B.map&&(i.spotLightMap[G]=B.map,G++,ce.updateMatrices(B),B.castShadow&&F++),i.spotLightMatrix[M]=ce.matrix,B.castShadow){const z=t.get(B);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,i.spotShadow[M]=z,i.spotShadowMap[M]=pe,A++}M++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(ae).multiplyScalar(ee),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),i.rectArea[S]=se,S++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const ce=B.shadow,z=t.get(B);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,z.shadowCameraNear=ce.camera.near,z.shadowCameraFar=ce.camera.far,i.pointShadow[x]=z,i.pointShadowMap[x]=pe,i.pointShadowMatrix[x]=B.shadow.matrix,I++}i.point[x]=se,x++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(ee),se.groundColor.copy(B.groundColor).multiplyScalar(ee),i.hemi[y]=se,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const W=i.hash;(W.directionalLength!==E||W.pointLength!==x||W.spotLength!==M||W.rectAreaLength!==S||W.hemiLength!==y||W.numDirectionalShadows!==P||W.numPointShadows!==I||W.numSpotShadows!==A||W.numSpotMaps!==G||W.numLightProbes!==U)&&(i.directional.length=E,i.spot.length=M,i.rectArea.length=S,i.point.length=x,i.hemi.length=y,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=A+G-F,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=U,W.directionalLength=E,W.pointLength=x,W.spotLength=M,W.rectAreaLength=S,W.hemiLength=y,W.numDirectionalShadows=P,W.numPointShadows=I,W.numSpotShadows=A,W.numSpotMaps=G,W.numLightProbes=U,i.version=qk++)}function d(f,m){let g=0,_=0,E=0,x=0,M=0;const S=m.matrixWorldInverse;for(let y=0,P=f.length;y<P;y++){const I=f[y];if(I.isDirectionalLight){const A=i.directional[g];A.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),g++}else if(I.isSpotLight){const A=i.spot[E];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),E++}else if(I.isRectAreaLight){const A=i.rectArea[x];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(S),c.identity(),a.copy(I.matrixWorld),a.premultiply(S),c.extractRotation(a),A.halfWidth.set(I.width*.5,0,0),A.halfHeight.set(0,I.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),x++}else if(I.isPointLight){const A=i.point[_];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(S),_++}else if(I.isHemisphereLight){const A=i.hemi[M];A.direction.setFromMatrixPosition(I.matrixWorld),A.direction.transformDirection(S),M++}}}return{setup:u,setupView:d,state:i}}function IS(n){const e=new Kk(n),t=[],i=[];function s(m){f.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function c(m){i.push(m)}function u(){e.setup(t)}function d(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:c}}function Jk(n){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new IS(n),e.set(s,[u])):a>=c.length?(u=new IS(n),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const Qk=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zk=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function e3(n,e,t){let i=new Ug;const s=new It,a=new It,c=new nn,u=new yL({depthPacking:bD}),d=new SL,f={},m=t.maxTextureSize,g={[Rs]:ti,[ti]:Rs,[Tr]:Tr},_=new As({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Qk,fragmentShader:Zk}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const x=new Is;x.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Yi(x,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aT;let y=this.type;this.render=function(F,U,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const b=n.getRenderTarget(),R=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(Ts),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ee=y!==xr&&this.type===xr,he=y===xr&&this.type!==xr;for(let pe=0,se=F.length;pe<se;pe++){const ce=F[pe],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const le=z.getFrameExtents();if(s.multiply(le),a.copy(z.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/le.x),s.x=a.x*le.x,z.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/le.y),s.y=a.y*le.y,z.mapSize.y=a.y)),z.map===null||ee===!0||he===!0){const L=this.type!==xr?{minFilter:Fi,magFilter:Fi}:{};z.map!==null&&z.map.dispose(),z.map=new go(s.x,s.y,L),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ie=z.getViewportCount();for(let L=0;L<ie;L++){const ne=z.getViewport(L);c.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),ae.viewport(c),z.updateMatrices(ce,L),i=z.getFrustum(),A(U,W,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===xr&&P(z,W),z.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(b,R,B)};function P(F,U){const W=e.update(M);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,E.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new go(s.x,s.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(U,null,W,_,M,null),E.uniforms.shadow_pass.value=F.mapPass.texture,E.uniforms.resolution.value=F.mapSize,E.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(U,null,W,E,M,null)}function I(F,U,W,b){let R=null;const B=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)R=B;else if(R=W.isPointLight===!0?d:u,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const ae=R.uuid,ee=U.uuid;let he=f[ae];he===void 0&&(he={},f[ae]=he);let pe=he[ee];pe===void 0&&(pe=R.clone(),he[ee]=pe,U.addEventListener("dispose",G)),R=pe}if(R.visible=U.visible,R.wireframe=U.wireframe,b===xr?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:g[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ae=n.properties.get(R);ae.light=W}return R}function A(F,U,W,b,R){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===xr)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const ee=e.update(F),he=F.material;if(Array.isArray(he)){const pe=ee.groups;for(let se=0,ce=pe.length;se<ce;se++){const z=pe[se],le=he[z.materialIndex];if(le&&le.visible){const ie=I(F,le,b,R);F.onBeforeShadow(n,F,U,W,ee,ie,z),n.renderBufferDirect(W,null,ee,ie,F,z),F.onAfterShadow(n,F,U,W,ee,ie,z)}}}else if(he.visible){const pe=I(F,he,b,R);F.onBeforeShadow(n,F,U,W,ee,pe,null),n.renderBufferDirect(W,null,ee,pe,F,null),F.onAfterShadow(n,F,U,W,ee,pe,null)}}const ae=F.children;for(let ee=0,he=ae.length;ee<he;ee++)A(ae[ee],U,W,b,R)}function G(F){F.target.removeEventListener("dispose",G);for(const W in f){const b=f[W],R=F.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const t3={[Xp]:$p,[jp]:Kp,[qp]:Jp,[Ta]:Yp,[$p]:Xp,[Kp]:jp,[Jp]:qp,[Yp]:Ta};function n3(n,e){function t(){let H=!1;const be=new nn;let _e=null;const De=new nn(0,0,0,0);return{setMask:function(xe){_e!==xe&&!H&&(n.colorMask(xe,xe,xe,xe),_e=xe)},setLocked:function(xe){H=xe},setClear:function(xe,fe,He,ct,Ut){Ut===!0&&(xe*=ct,fe*=ct,He*=ct),be.set(xe,fe,He,ct),De.equals(be)===!1&&(n.clearColor(xe,fe,He,ct),De.copy(be))},reset:function(){H=!1,_e=null,De.set(-1,0,0,0)}}}function i(){let H=!1,be=!1,_e=null,De=null,xe=null;return{setReversed:function(fe){if(be!==fe){const He=e.get("EXT_clip_control");fe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),be=fe;const ct=xe;xe=null,this.setClear(ct)}},getReversed:function(){return be},setTest:function(fe){fe?Se(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(fe){_e!==fe&&!H&&(n.depthMask(fe),_e=fe)},setFunc:function(fe){if(be&&(fe=t3[fe]),De!==fe){switch(fe){case Xp:n.depthFunc(n.NEVER);break;case $p:n.depthFunc(n.ALWAYS);break;case jp:n.depthFunc(n.LESS);break;case Ta:n.depthFunc(n.LEQUAL);break;case qp:n.depthFunc(n.EQUAL);break;case Yp:n.depthFunc(n.GEQUAL);break;case Kp:n.depthFunc(n.GREATER);break;case Jp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=fe}},setLocked:function(fe){H=fe},setClear:function(fe){xe!==fe&&(be&&(fe=1-fe),n.clearDepth(fe),xe=fe)},reset:function(){H=!1,_e=null,De=null,xe=null,be=!1}}}function s(){let H=!1,be=null,_e=null,De=null,xe=null,fe=null,He=null,ct=null,Ut=null;return{setTest:function(Tt){H||(Tt?Se(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(Tt){be!==Tt&&!H&&(n.stencilMask(Tt),be=Tt)},setFunc:function(Tt,Xn,Fn){(_e!==Tt||De!==Xn||xe!==Fn)&&(n.stencilFunc(Tt,Xn,Fn),_e=Tt,De=Xn,xe=Fn)},setOp:function(Tt,Xn,Fn){(fe!==Tt||He!==Xn||ct!==Fn)&&(n.stencilOp(Tt,Xn,Fn),fe=Tt,He=Xn,ct=Fn)},setLocked:function(Tt){H=Tt},setClear:function(Tt){Ut!==Tt&&(n.clearStencil(Tt),Ut=Tt)},reset:function(){H=!1,be=null,_e=null,De=null,xe=null,fe=null,He=null,ct=null,Ut=null}}}const a=new t,c=new i,u=new s,d=new WeakMap,f=new WeakMap;let m={},g={},_=new WeakMap,E=[],x=null,M=!1,S=null,y=null,P=null,I=null,A=null,G=null,F=null,U=new bt(0,0,0),W=0,b=!1,R=null,B=null,ae=null,ee=null,he=null;const pe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ce=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(z)[1]),se=ce>=1):z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),se=ce>=2);let le=null,ie={};const L=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Oe=new nn().fromArray(L),J=new nn().fromArray(ne);function de(H,be,_e,De){const xe=new Uint8Array(4),fe=n.createTexture();n.bindTexture(H,fe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<_e;He++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(be+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return fe}const we={};we[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Se(n.DEPTH_TEST),c.setFunc(Ta),Et(!1),Pt(L0),Se(n.CULL_FACE),O(Ts);function Se(H){m[H]!==!0&&(n.enable(H),m[H]=!0)}function Ce(H){m[H]!==!1&&(n.disable(H),m[H]=!1)}function Je(H,be){return g[H]!==be?(n.bindFramebuffer(H,be),g[H]=be,H===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=be),H===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Xe(H,be){let _e=E,De=!1;if(H){_e=_.get(be),_e===void 0&&(_e=[],_.set(be,_e));const xe=H.textures;if(_e.length!==xe.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,He=xe.length;fe<He;fe++)_e[fe]=n.COLOR_ATTACHMENT0+fe;_e.length=xe.length,De=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,De=!0);De&&n.drawBuffers(_e)}function Lt(H){return x!==H?(n.useProgram(H),x=H,!0):!1}const Vt={[to]:n.FUNC_ADD,[tD]:n.FUNC_SUBTRACT,[nD]:n.FUNC_REVERSE_SUBTRACT};Vt[iD]=n.MIN,Vt[rD]=n.MAX;const gt={[sD]:n.ZERO,[oD]:n.ONE,[aD]:n.SRC_COLOR,[Gp]:n.SRC_ALPHA,[fD]:n.SRC_ALPHA_SATURATE,[hD]:n.DST_COLOR,[cD]:n.DST_ALPHA,[lD]:n.ONE_MINUS_SRC_COLOR,[Wp]:n.ONE_MINUS_SRC_ALPHA,[dD]:n.ONE_MINUS_DST_COLOR,[uD]:n.ONE_MINUS_DST_ALPHA,[pD]:n.CONSTANT_COLOR,[mD]:n.ONE_MINUS_CONSTANT_COLOR,[gD]:n.CONSTANT_ALPHA,[_D]:n.ONE_MINUS_CONSTANT_ALPHA};function O(H,be,_e,De,xe,fe,He,ct,Ut,Tt){if(H===Ts){M===!0&&(Ce(n.BLEND),M=!1);return}if(M===!1&&(Se(n.BLEND),M=!0),H!==eD){if(H!==S||Tt!==b){if((y!==to||A!==to)&&(n.blendEquation(n.FUNC_ADD),y=to,A=to),Tt)switch(H){case ga:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case U0:n.blendFunc(n.ONE,n.ONE);break;case O0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case k0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ga:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case U0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case O0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}P=null,I=null,G=null,F=null,U.set(0,0,0),W=0,S=H,b=Tt}return}xe=xe||be,fe=fe||_e,He=He||De,(be!==y||xe!==A)&&(n.blendEquationSeparate(Vt[be],Vt[xe]),y=be,A=xe),(_e!==P||De!==I||fe!==G||He!==F)&&(n.blendFuncSeparate(gt[_e],gt[De],gt[fe],gt[He]),P=_e,I=De,G=fe,F=He),(ct.equals(U)===!1||Ut!==W)&&(n.blendColor(ct.r,ct.g,ct.b,Ut),U.copy(ct),W=Ut),S=H,b=!1}function fn(H,be){H.side===Tr?Ce(n.CULL_FACE):Se(n.CULL_FACE);let _e=H.side===ti;be&&(_e=!_e),Et(_e),H.blending===ga&&H.transparent===!1?O(Ts):O(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const De=H.stencilWrite;u.setTest(De),De&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),_t(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Et(H){R!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),R=H)}function Pt(H){H!==JN?(Se(n.CULL_FACE),H!==B&&(H===L0?n.cullFace(n.BACK):H===QN?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),B=H}function $e(H){H!==ae&&(se&&n.lineWidth(H),ae=H)}function _t(H,be,_e){H?(Se(n.POLYGON_OFFSET_FILL),(ee!==be||he!==_e)&&(n.polygonOffset(be,_e),ee=be,he=_e)):Ce(n.POLYGON_OFFSET_FILL)}function Ke(H){H?Se(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function ot(H){H===void 0&&(H=n.TEXTURE0+pe-1),le!==H&&(n.activeTexture(H),le=H)}function Qt(H,be,_e){_e===void 0&&(le===null?_e=n.TEXTURE0+pe-1:_e=le);let De=ie[_e];De===void 0&&(De={type:void 0,texture:void 0},ie[_e]=De),(De.type!==H||De.texture!==be)&&(le!==_e&&(n.activeTexture(_e),le=_e),n.bindTexture(H,be||we[H]),De.type=H,De.texture=be)}function N(){const H=ie[le];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{n.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{n.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{n.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{n.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{n.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{n.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{n.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{n.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(H){Oe.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Oe.copy(H))}function nt(H){J.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),J.copy(H))}function Ze(H,be){let _e=f.get(be);_e===void 0&&(_e=new WeakMap,f.set(be,_e));let De=_e.get(H);De===void 0&&(De=n.getUniformBlockIndex(be,H.name),_e.set(H,De))}function Ae(H,be){const De=f.get(be).get(H);d.get(be)!==De&&(n.uniformBlockBinding(be,De,H.__bindingPointIndex),d.set(be,De))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},le=null,ie={},g={},_=new WeakMap,E=[],x=null,M=!1,S=null,y=null,P=null,I=null,A=null,G=null,F=null,U=new bt(0,0,0),W=0,b=!1,R=null,B=null,ae=null,ee=null,he=null,Oe.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Se,disable:Ce,bindFramebuffer:Je,drawBuffers:Xe,useProgram:Lt,setBlending:O,setMaterial:fn,setFlipSided:Et,setCullFace:Pt,setLineWidth:$e,setPolygonOffset:_t,setScissorTest:Ke,activeTexture:ot,bindTexture:Qt,unbindTexture:N,compressedTexImage2D:w,compressedTexImage3D:K,texImage2D:Ye,texImage3D:ve,updateUBOMapping:Ze,uniformBlockBinding:Ae,texStorage2D:Re,texStorage3D:ze,texSubImage2D:ue,texSubImage3D:me,compressedTexSubImage2D:re,compressedTexSubImage3D:qe,scissor:Ue,viewport:nt,reset:st}}function i3(n,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new It,m=new WeakMap;let g;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,w){return E?new OffscreenCanvas(N,w):Xl("canvas")}function M(N,w,K){let ue=1;const me=Qt(N);if((me.width>K||me.height>K)&&(ue=K/Math.max(me.width,me.height)),ue<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const re=Math.floor(ue*me.width),qe=Math.floor(ue*me.height);g===void 0&&(g=x(re,qe));const Re=w?x(re,qe):g;return Re.width=re,Re.height=qe,Re.getContext("2d").drawImage(N,0,0,re,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+re+"x"+qe+")."),Re}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),N;return N}function S(N){return N.generateMipmaps}function y(N){n.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function I(N,w,K,ue,me=!1){if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let re=w;if(w===n.RED&&(K===n.FLOAT&&(re=n.R32F),K===n.HALF_FLOAT&&(re=n.R16F),K===n.UNSIGNED_BYTE&&(re=n.R8)),w===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(re=n.R8UI),K===n.UNSIGNED_SHORT&&(re=n.R16UI),K===n.UNSIGNED_INT&&(re=n.R32UI),K===n.BYTE&&(re=n.R8I),K===n.SHORT&&(re=n.R16I),K===n.INT&&(re=n.R32I)),w===n.RG&&(K===n.FLOAT&&(re=n.RG32F),K===n.HALF_FLOAT&&(re=n.RG16F),K===n.UNSIGNED_BYTE&&(re=n.RG8)),w===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(re=n.RG8UI),K===n.UNSIGNED_SHORT&&(re=n.RG16UI),K===n.UNSIGNED_INT&&(re=n.RG32UI),K===n.BYTE&&(re=n.RG8I),K===n.SHORT&&(re=n.RG16I),K===n.INT&&(re=n.RG32I)),w===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(re=n.RGB8UI),K===n.UNSIGNED_SHORT&&(re=n.RGB16UI),K===n.UNSIGNED_INT&&(re=n.RGB32UI),K===n.BYTE&&(re=n.RGB8I),K===n.SHORT&&(re=n.RGB16I),K===n.INT&&(re=n.RGB32I)),w===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),K===n.UNSIGNED_INT&&(re=n.RGBA32UI),K===n.BYTE&&(re=n.RGBA8I),K===n.SHORT&&(re=n.RGBA16I),K===n.INT&&(re=n.RGBA32I)),w===n.RGB&&K===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),w===n.RGBA){const qe=me?Th:At.getTransfer(ue);K===n.FLOAT&&(re=n.RGBA32F),K===n.HALF_FLOAT&&(re=n.RGBA16F),K===n.UNSIGNED_BYTE&&(re=qe===kt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function A(N,w){let K;return N?w===null||w===mo||w===Vl?K=n.DEPTH24_STENCIL8:w===Rr?K=n.DEPTH32F_STENCIL8:w===Hl&&(K=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===mo||w===Vl?K=n.DEPTH_COMPONENT24:w===Rr?K=n.DEPTH_COMPONENT32F:w===Hl&&(K=n.DEPTH_COMPONENT16),K}function G(N,w){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Fi&&N.minFilter!==qi?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function F(N){const w=N.target;w.removeEventListener("dispose",F),W(w),w.isVideoTexture&&m.delete(w)}function U(N){const w=N.target;w.removeEventListener("dispose",U),R(w)}function W(N){const w=i.get(N);if(w.__webglInit===void 0)return;const K=N.source,ue=_.get(K);if(ue){const me=ue[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&b(N),Object.keys(ue).length===0&&_.delete(K)}i.remove(N)}function b(N){const w=i.get(N);n.deleteTexture(w.__webglTexture);const K=N.source,ue=_.get(K);delete ue[w.__cacheKey],c.memory.textures--}function R(N){const w=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(w.__webglFramebuffer[ue]))for(let me=0;me<w.__webglFramebuffer[ue].length;me++)n.deleteFramebuffer(w.__webglFramebuffer[ue][me]);else n.deleteFramebuffer(w.__webglFramebuffer[ue]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ue])}else{if(Array.isArray(w.__webglFramebuffer))for(let ue=0;ue<w.__webglFramebuffer.length;ue++)n.deleteFramebuffer(w.__webglFramebuffer[ue]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ue=0;ue<w.__webglColorRenderbuffer.length;ue++)w.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ue]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=N.textures;for(let ue=0,me=K.length;ue<me;ue++){const re=i.get(K[ue]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),c.memory.textures--),i.remove(K[ue])}i.remove(N)}let B=0;function ae(){B=0}function ee(){const N=B;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),B+=1,N}function he(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function pe(N,w){const K=i.get(N);if(N.isVideoTexture&&Ke(N),N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){const ue=N.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(K,N,w);return}}t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+w)}function se(N,w){const K=i.get(N);if(N.version>0&&K.__version!==N.version){we(K,N,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+w)}function ce(N,w){const K=i.get(N);if(N.version>0&&K.__version!==N.version){we(K,N,w);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+w)}function z(N,w){const K=i.get(N);if(N.version>0&&K.__version!==N.version){Se(K,N,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+w)}const le={[em]:n.REPEAT,[so]:n.CLAMP_TO_EDGE,[tm]:n.MIRRORED_REPEAT},ie={[Fi]:n.NEAREST,[RD]:n.NEAREST_MIPMAP_NEAREST,[Eu]:n.NEAREST_MIPMAP_LINEAR,[qi]:n.LINEAR,[Hf]:n.LINEAR_MIPMAP_NEAREST,[oo]:n.LINEAR_MIPMAP_LINEAR},L={[PD]:n.NEVER,[kD]:n.ALWAYS,[ND]:n.LESS,[yT]:n.LEQUAL,[DD]:n.EQUAL,[OD]:n.GEQUAL,[LD]:n.GREATER,[UD]:n.NOTEQUAL};function ne(N,w){if(w.type===Rr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===qi||w.magFilter===Hf||w.magFilter===Eu||w.magFilter===oo||w.minFilter===qi||w.minFilter===Hf||w.minFilter===Eu||w.minFilter===oo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,le[w.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,le[w.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,le[w.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,ie[w.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,ie[w.minFilter]),w.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,L[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Fi||w.minFilter!==Eu&&w.minFilter!==oo||w.type===Rr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Oe(N,w){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",F));const ue=w.source;let me=_.get(ue);me===void 0&&(me={},_.set(ue,me));const re=he(w);if(re!==N.__cacheKey){me[re]===void 0&&(me[re]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,K=!0),me[re].usedTimes++;const qe=me[N.__cacheKey];qe!==void 0&&(me[N.__cacheKey].usedTimes--,qe.usedTimes===0&&b(w)),N.__cacheKey=re,N.__webglTexture=me[re].texture}return K}function J(N,w,K){return Math.floor(Math.floor(N/K)/w)}function de(N,w,K,ue){const re=N.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,K,ue,w.data);else{re.sort((ve,Ue)=>ve.start-Ue.start);let qe=0;for(let ve=1;ve<re.length;ve++){const Ue=re[qe],nt=re[ve],Ze=Ue.start+Ue.count,Ae=J(nt.start,w.width,4),st=J(Ue.start,w.width,4);nt.start<=Ze+1&&Ae===st&&J(nt.start+nt.count-1,w.width,4)===Ae?Ue.count=Math.max(Ue.count,nt.start+nt.count-Ue.start):(++qe,re[qe]=nt)}re.length=qe+1;const Re=n.getParameter(n.UNPACK_ROW_LENGTH),ze=n.getParameter(n.UNPACK_SKIP_PIXELS),Ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let ve=0,Ue=re.length;ve<Ue;ve++){const nt=re[ve],Ze=Math.floor(nt.start/4),Ae=Math.ceil(nt.count/4),st=Ze%w.width,H=Math.floor(Ze/w.width),be=Ae,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,st),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,st,H,be,_e,K,ue,w.data)}N.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ye)}}function we(N,w,K){let ue=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=n.TEXTURE_3D);const me=Oe(N,w),re=w.source;t.bindTexture(ue,N.__webglTexture,n.TEXTURE0+K);const qe=i.get(re);if(re.version!==qe.__version||me===!0){t.activeTexture(n.TEXTURE0+K);const Re=At.getPrimaries(At.workingColorSpace),ze=w.colorSpace===ys?null:At.getPrimaries(w.colorSpace),Ye=w.colorSpace===ys||Re===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ve=M(w.image,!1,s.maxTextureSize);ve=ot(w,ve);const Ue=a.convert(w.format,w.colorSpace),nt=a.convert(w.type);let Ze=I(w.internalFormat,Ue,nt,w.colorSpace,w.isVideoTexture);ne(ue,w);let Ae;const st=w.mipmaps,H=w.isVideoTexture!==!0,be=qe.__version===void 0||me===!0,_e=re.dataReady,De=G(w,ve);if(w.isDepthTexture)Ze=A(w.format===Wl,w.type),be&&(H?t.texStorage2D(n.TEXTURE_2D,1,Ze,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Ze,ve.width,ve.height,0,Ue,nt,null));else if(w.isDataTexture)if(st.length>0){H&&be&&t.texStorage2D(n.TEXTURE_2D,De,Ze,st[0].width,st[0].height);for(let xe=0,fe=st.length;xe<fe;xe++)Ae=st[xe],H?_e&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Ue,nt,Ae.data):t.texImage2D(n.TEXTURE_2D,xe,Ze,Ae.width,Ae.height,0,Ue,nt,Ae.data);w.generateMipmaps=!1}else H?(be&&t.texStorage2D(n.TEXTURE_2D,De,Ze,ve.width,ve.height),_e&&de(w,ve,Ue,nt)):t.texImage2D(n.TEXTURE_2D,0,Ze,ve.width,ve.height,0,Ue,nt,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){H&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ze,st[0].width,st[0].height,ve.depth);for(let xe=0,fe=st.length;xe<fe;xe++)if(Ae=st[xe],w.format!==Oi)if(Ue!==null)if(H){if(_e)if(w.layerUpdates.size>0){const He=oS(Ae.width,Ae.height,w.format,w.type);for(const ct of w.layerUpdates){const Ut=Ae.data.subarray(ct*He/Ae.data.BYTES_PER_ELEMENT,(ct+1)*He/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,ct,Ae.width,Ae.height,1,Ue,Ut)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,ve.depth,Ue,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Ze,Ae.width,Ae.height,ve.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,ve.depth,Ue,nt,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Ze,Ae.width,Ae.height,ve.depth,0,Ue,nt,Ae.data)}else{H&&be&&t.texStorage2D(n.TEXTURE_2D,De,Ze,st[0].width,st[0].height);for(let xe=0,fe=st.length;xe<fe;xe++)Ae=st[xe],w.format!==Oi?Ue!==null?H?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Ue,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Ze,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?_e&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Ue,nt,Ae.data):t.texImage2D(n.TEXTURE_2D,xe,Ze,Ae.width,Ae.height,0,Ue,nt,Ae.data)}else if(w.isDataArrayTexture)if(H){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ze,ve.width,ve.height,ve.depth),_e)if(w.layerUpdates.size>0){const xe=oS(ve.width,ve.height,w.format,w.type);for(const fe of w.layerUpdates){const He=ve.data.subarray(fe*xe/ve.data.BYTES_PER_ELEMENT,(fe+1)*xe/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,ve.width,ve.height,1,Ue,nt,He)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ue,nt,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ze,ve.width,ve.height,ve.depth,0,Ue,nt,ve.data);else if(w.isData3DTexture)H?(be&&t.texStorage3D(n.TEXTURE_3D,De,Ze,ve.width,ve.height,ve.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ue,nt,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Ze,ve.width,ve.height,ve.depth,0,Ue,nt,ve.data);else if(w.isFramebufferTexture){if(be)if(H)t.texStorage2D(n.TEXTURE_2D,De,Ze,ve.width,ve.height);else{let xe=ve.width,fe=ve.height;for(let He=0;He<De;He++)t.texImage2D(n.TEXTURE_2D,He,Ze,xe,fe,0,Ue,nt,null),xe>>=1,fe>>=1}}else if(st.length>0){if(H&&be){const xe=Qt(st[0]);t.texStorage2D(n.TEXTURE_2D,De,Ze,xe.width,xe.height)}for(let xe=0,fe=st.length;xe<fe;xe++)Ae=st[xe],H?_e&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ue,nt,Ae):t.texImage2D(n.TEXTURE_2D,xe,Ze,Ue,nt,Ae);w.generateMipmaps=!1}else if(H){if(be){const xe=Qt(ve);t.texStorage2D(n.TEXTURE_2D,De,Ze,xe.width,xe.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,nt,ve)}else t.texImage2D(n.TEXTURE_2D,0,Ze,Ue,nt,ve);S(w)&&y(ue),qe.__version=re.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Se(N,w,K){if(w.image.length!==6)return;const ue=Oe(N,w),me=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+K);const re=i.get(me);if(me.version!==re.__version||ue===!0){t.activeTexture(n.TEXTURE0+K);const qe=At.getPrimaries(At.workingColorSpace),Re=w.colorSpace===ys?null:At.getPrimaries(w.colorSpace),ze=w.colorSpace===ys||qe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,ve=w.image[0]&&w.image[0].isDataTexture,Ue=[];for(let fe=0;fe<6;fe++)!Ye&&!ve?Ue[fe]=M(w.image[fe],!0,s.maxCubemapSize):Ue[fe]=ve?w.image[fe].image:w.image[fe],Ue[fe]=ot(w,Ue[fe]);const nt=Ue[0],Ze=a.convert(w.format,w.colorSpace),Ae=a.convert(w.type),st=I(w.internalFormat,Ze,Ae,w.colorSpace),H=w.isVideoTexture!==!0,be=re.__version===void 0||ue===!0,_e=me.dataReady;let De=G(w,nt);ne(n.TEXTURE_CUBE_MAP,w);let xe;if(Ye){H&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,st,nt.width,nt.height);for(let fe=0;fe<6;fe++){xe=Ue[fe].mipmaps;for(let He=0;He<xe.length;He++){const ct=xe[He];w.format!==Oi?Ze!==null?H?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,0,0,ct.width,ct.height,Ze,ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,st,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,0,0,ct.width,ct.height,Ze,Ae,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,st,ct.width,ct.height,0,Ze,Ae,ct.data)}}}else{if(xe=w.mipmaps,H&&be){xe.length>0&&De++;const fe=Qt(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,st,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ve){H?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ue[fe].width,Ue[fe].height,Ze,Ae,Ue[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,st,Ue[fe].width,Ue[fe].height,0,Ze,Ae,Ue[fe].data);for(let He=0;He<xe.length;He++){const Ut=xe[He].image[fe].image;H?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,0,0,Ut.width,Ut.height,Ze,Ae,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,st,Ut.width,Ut.height,0,Ze,Ae,Ut.data)}}else{H?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ze,Ae,Ue[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,st,Ze,Ae,Ue[fe]);for(let He=0;He<xe.length;He++){const ct=xe[He];H?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,0,0,Ze,Ae,ct.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,st,Ze,Ae,ct.image[fe])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),re.__version=me.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Ce(N,w,K,ue,me,re){const qe=a.convert(K.format,K.colorSpace),Re=a.convert(K.type),ze=I(K.internalFormat,qe,Re,K.colorSpace),Ye=i.get(w),ve=i.get(K);if(ve.__renderTarget=w,!Ye.__hasExternalTextures){const Ue=Math.max(1,w.width>>re),nt=Math.max(1,w.height>>re);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,re,ze,Ue,nt,w.depth,0,qe,Re,null):t.texImage2D(me,re,ze,Ue,nt,0,qe,Re,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),_t(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,me,ve.__webglTexture,0,$e(w)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,me,ve.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(N,w,K){if(n.bindRenderbuffer(n.RENDERBUFFER,N),w.depthBuffer){const ue=w.depthTexture,me=ue&&ue.isDepthTexture?ue.type:null,re=A(w.stencilBuffer,me),qe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=$e(w);_t(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,re,w.width,w.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,re,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,re,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,qe,n.RENDERBUFFER,N)}else{const ue=w.textures;for(let me=0;me<ue.length;me++){const re=ue[me],qe=a.convert(re.format,re.colorSpace),Re=a.convert(re.type),ze=I(re.internalFormat,qe,Re,re.colorSpace),Ye=$e(w);K&&_t(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,ze,w.width,w.height):_t(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,ze,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ze,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=i.get(w.depthTexture);ue.__renderTarget=w,(!ue.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const me=ue.__webglTexture,re=$e(w);if(w.depthTexture.format===Gl)_t(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0);else if(w.depthTexture.format===Wl)_t(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Lt(N){const w=i.get(N),K=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const ue=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){const me=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",me)};ue.addEventListener("dispose",me),w.__depthDisposeCallback=me}w.__boundDepthTexture=ue}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const ue=N.texture.mipmaps;ue&&ue.length>0?Xe(w.__webglFramebuffer[0],N):Xe(w.__webglFramebuffer,N)}else if(K){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=n.createRenderbuffer(),Je(w.__webglDepthbuffer[ue],N,!1);else{const me=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[ue];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,re)}}else{const ue=N.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Je(w.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(N,w,K){const ue=i.get(N);w!==void 0&&Ce(ue.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&Lt(N)}function gt(N){const w=N.texture,K=i.get(N),ue=i.get(w);N.addEventListener("dispose",U);const me=N.textures,re=N.isWebGLCubeRenderTarget===!0,qe=me.length>1;if(qe||(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=w.version,c.memory.textures++),re){K.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[Re]=[];for(let ze=0;ze<w.mipmaps.length;ze++)K.__webglFramebuffer[Re][ze]=n.createFramebuffer()}else K.__webglFramebuffer[Re]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)K.__webglFramebuffer[Re]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(qe)for(let Re=0,ze=me.length;Re<ze;Re++){const Ye=i.get(me[Re]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),c.memory.textures++)}if(N.samples>0&&_t(N)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Re=0;Re<me.length;Re++){const ze=me[Re];K.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[Re]);const Ye=a.convert(ze.format,ze.colorSpace),ve=a.convert(ze.type),Ue=I(ze.internalFormat,Ye,ve,ze.colorSpace,N.isXRRenderTarget===!0),nt=$e(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,Ue,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,K.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(K.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),ne(n.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)Ce(K.__webglFramebuffer[Re][ze],N,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ze);else Ce(K.__webglFramebuffer[Re],N,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let Re=0,ze=me.length;Re<ze;Re++){const Ye=me[Re],ve=i.get(Ye);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),ne(n.TEXTURE_2D,Ye),Ce(K.__webglFramebuffer,N,Ye,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),S(Ye)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let Re=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,ue.__webglTexture),ne(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)Ce(K.__webglFramebuffer[ze],N,w,n.COLOR_ATTACHMENT0,Re,ze);else Ce(K.__webglFramebuffer,N,w,n.COLOR_ATTACHMENT0,Re,0);S(w)&&y(Re),t.unbindTexture()}N.depthBuffer&&Lt(N)}function O(N){const w=N.textures;for(let K=0,ue=w.length;K<ue;K++){const me=w[K];if(S(me)){const re=P(N),qe=i.get(me).__webglTexture;t.bindTexture(re,qe),y(re),t.unbindTexture()}}}const fn=[],Et=[];function Pt(N){if(N.samples>0){if(_t(N)===!1){const w=N.textures,K=N.width,ue=N.height;let me=n.COLOR_BUFFER_BIT;const re=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,qe=i.get(N),Re=w.length>1;if(Re)for(let Ye=0;Ye<w.length;Ye++)t.bindFramebuffer(n.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,qe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const ze=N.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Ye=0;Ye<w.length;Ye++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),Re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,qe.__webglColorRenderbuffer[Ye]);const ve=i.get(w[Ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,K,ue,0,0,K,ue,me,n.NEAREST),d===!0&&(fn.length=0,Et.length=0,fn.push(n.COLOR_ATTACHMENT0+Ye),N.depthBuffer&&N.resolveDepthBuffer===!1&&(fn.push(re),Et.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Et)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let Ye=0;Ye<w.length;Ye++){t.bindFramebuffer(n.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,qe.__webglColorRenderbuffer[Ye]);const ve=i.get(w[Ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,qe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&d){const w=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function $e(N){return Math.min(s.maxSamples,N.samples)}function _t(N){const w=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(N){const w=c.render.frame;m.get(N)!==w&&(m.set(N,w),N.update())}function ot(N,w){const K=N.colorSpace,ue=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==Ca&&K!==ys&&(At.getTransfer(K)===kt?(ue!==Oi||me!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function Qt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(f.width=N.naturalWidth||N.width,f.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(f.width=N.displayWidth,f.height=N.displayHeight):(f.width=N.width,f.height=N.height),f}this.allocateTextureUnit=ee,this.resetTextureUnits=ae,this.setTexture2D=pe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=z,this.rebindTextures=Vt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=_t}function r3(n,e){function t(i,s=ys){let a;const c=At.getTransfer(s);if(i===nr)return n.UNSIGNED_BYTE;if(i===Ag)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dT)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uT)return n.BYTE;if(i===hT)return n.SHORT;if(i===Hl)return n.UNSIGNED_SHORT;if(i===Rg)return n.INT;if(i===mo)return n.UNSIGNED_INT;if(i===Rr)return n.FLOAT;if(i===nc)return n.HALF_FLOAT;if(i===fT)return n.ALPHA;if(i===pT)return n.RGB;if(i===Oi)return n.RGBA;if(i===Gl)return n.DEPTH_COMPONENT;if(i===Wl)return n.DEPTH_STENCIL;if(i===mT)return n.RED;if(i===Ig)return n.RED_INTEGER;if(i===gT)return n.RG;if(i===Pg)return n.RG_INTEGER;if(i===Ng)return n.RGBA_INTEGER;if(i===Ku||i===Ju||i===Qu||i===Zu)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ku)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ku)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ju)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nm||i===im||i===rm||i===sm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===nm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===im)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===om||i===am||i===lm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===om||i===am)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===lm)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cm||i===um||i===hm||i===dm||i===fm||i===pm||i===mm||i===gm||i===_m||i===vm||i===ym||i===Sm||i===Em||i===xm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===cm)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===um)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hm)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dm)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fm)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pm)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mm)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gm)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_m)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vm)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ym)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sm)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Em)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xm)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===eh||i===Tm||i===Mm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===eh)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_T||i===wm||i===Cm||i===Rm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===eh)return a.COMPRESSED_RED_RGTC1_EXT;if(i===wm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const s3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class a3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Gn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new As({vertexShader:s3,fragmentShader:o3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yi(new Bh(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l3 extends Oa{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",d=1,f=null,m=null,g=null,_=null,E=null,x=null;const M=new a3,S=t.getContextAttributes();let y=null,P=null;const I=[],A=[],G=new It;let F=null;const U=new _i;U.viewport=new nn;const W=new _i;W.viewport=new nn;const b=[U,W],R=new bL;let B=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=I[J];return de===void 0&&(de=new up,I[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=I[J];return de===void 0&&(de=new up,I[J]=de),de.getGripSpace()},this.getHand=function(J){let de=I[J];return de===void 0&&(de=new up,I[J]=de),de.getHandSpace()};function ee(J){const de=A.indexOf(J.inputSource);if(de===-1)return;const we=I[de];we!==void 0&&(we.update(J.inputSource,J.frame,f||c),we.dispatchEvent({type:J.type,data:J.inputSource}))}function he(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",he),s.removeEventListener("inputsourceschange",pe);for(let J=0;J<I.length;J++){const de=A[J];de!==null&&(A[J]=null,I[J].disconnect(de))}B=null,ae=null,M.reset(),e.setRenderTarget(y),E=null,_=null,g=null,s=null,P=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){u=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(J){f=J},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return g},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",he),s.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Se=null,Ce=null;S.depth&&(Ce=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=S.stencil?Wl:Gl,Se=S.stencil?Vl:mo);const Je={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(Je),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new go(_.textureWidth,_.textureHeight,{format:Oi,type:nr,depthTexture:new IT(_.textureWidth,_.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const we={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};E=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),P=new go(E.framebufferWidth,E.framebufferHeight,{format:Oi,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await s.requestReferenceSpace(u),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function pe(J){for(let de=0;de<J.removed.length;de++){const we=J.removed[de],Se=A.indexOf(we);Se>=0&&(A[Se]=null,I[Se].disconnect(we))}for(let de=0;de<J.added.length;de++){const we=J.added[de];let Se=A.indexOf(we);if(Se===-1){for(let Je=0;Je<I.length;Je++)if(Je>=A.length){A.push(we),Se=Je;break}else if(A[Je]===null){A[Je]=we,Se=Je;break}if(Se===-1)break}const Ce=I[Se];Ce&&Ce.connect(we)}}const se=new te,ce=new te;function z(J,de,we){se.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(we.matrixWorld);const Se=se.distanceTo(ce),Ce=de.projectionMatrix.elements,Je=we.projectionMatrix.elements,Xe=Ce[14]/(Ce[10]-1),Lt=Ce[14]/(Ce[10]+1),Vt=(Ce[9]+1)/Ce[5],gt=(Ce[9]-1)/Ce[5],O=(Ce[8]-1)/Ce[0],fn=(Je[8]+1)/Je[0],Et=Xe*O,Pt=Xe*fn,$e=Se/(-O+fn),_t=$e*-O;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(_t),J.translateZ($e),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ce[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ke=Xe+$e,ot=Lt+$e,Qt=Et-_t,N=Pt+(Se-_t),w=Vt*Lt/ot*Ke,K=gt*Lt/ot*Ke;J.projectionMatrix.makePerspective(Qt,N,w,K,Ke,ot),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let de=J.near,we=J.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(we=M.depthFar)),R.near=W.near=U.near=de,R.far=W.far=U.far=we,(B!==R.near||ae!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,ae=R.far),U.layers.mask=J.layers.mask|2,W.layers.mask=J.layers.mask|4,R.layers.mask=U.layers.mask|W.layers.mask;const Se=J.parent,Ce=R.cameras;le(R,Se);for(let Je=0;Je<Ce.length;Je++)le(Ce[Je],Se);Ce.length===2?z(R,U,W):R.projectionMatrix.copy(U.projectionMatrix),ie(J,R,Se)};function ie(J,de,we){we===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(we.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Am*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&E===null))return d},this.setFoveation=function(J){d=J,_!==null&&(_.fixedFoveation=J),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let L=null;function ne(J,de){if(m=de.getViewerPose(f||c),x=de,m!==null){const we=m.views;E!==null&&(e.setRenderTargetFramebuffer(P,E.framebuffer),e.setRenderTarget(P));let Se=!1;we.length!==R.cameras.length&&(R.cameras.length=0,Se=!0);for(let Xe=0;Xe<we.length;Xe++){const Lt=we[Xe];let Vt=null;if(E!==null)Vt=E.getViewport(Lt);else{const O=g.getViewSubImage(_,Lt);Vt=O.viewport,Xe===0&&(e.setRenderTargetTextures(P,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(P))}let gt=b[Xe];gt===void 0&&(gt=new _i,gt.layers.enable(Xe),gt.viewport=new nn,b[Xe]=gt),gt.matrix.fromArray(Lt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Lt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Xe===0&&(R.matrix.copy(gt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Se===!0&&R.cameras.push(gt)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){const Xe=g.getDepthInformation(we[0]);Xe&&Xe.isValid&&Xe.texture&&M.init(e,Xe,s.renderState)}}for(let we=0;we<I.length;we++){const Se=A[we],Ce=I[we];Se!==null&&Ce!==void 0&&Ce.update(Se,de,f||c)}L&&L(J,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),x=null}const Oe=new NT;Oe.setAnimationLoop(ne),this.setAnimationLoop=function(J){L=J},this.dispose=function(){}}}const Ks=new ir,c3=new rn;function u3(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,RT(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,P,I,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(S,y):y.isMeshToonMaterial?(a(S,y),g(S,y)):y.isMeshPhongMaterial?(a(S,y),m(S,y)):y.isMeshStandardMaterial?(a(S,y),_(S,y),y.isMeshPhysicalMaterial&&E(S,y,A)):y.isMeshMatcapMaterial?(a(S,y),x(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),M(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?d(S,y,P,I):y.isSpriteMaterial?f(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ti&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ti&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const P=e.get(y),I=P.envMap,A=P.envMapRotation;I&&(S.envMap.value=I,Ks.copy(A),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),S.envMapRotation.value.setFromMatrix4(c3.makeRotationFromEuler(Ks)),S.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,P,I){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*P,S.scale.value=I*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function E(S,y,P){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function x(S,y){y.matcap&&(S.matcap.value=y.matcap)}function M(S,y){const P=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function h3(n,e,t,i){let s={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,I){const A=I.program;i.uniformBlockBinding(P,A)}function f(P,I){let A=s[P.id];A===void 0&&(x(P),A=m(P),s[P.id]=A,P.addEventListener("dispose",S));const G=I.program;i.updateUBOMapping(P,G);const F=e.render.frame;a[P.id]!==F&&(_(P),a[P.id]=F)}function m(P){const I=g();P.__bindingPointIndex=I;const A=n.createBuffer(),G=P.__size,F=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,G,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,I,A),A}function g(){for(let P=0;P<u;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const I=s[P.id],A=P.uniforms,G=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let F=0,U=A.length;F<U;F++){const W=Array.isArray(A[F])?A[F]:[A[F]];for(let b=0,R=W.length;b<R;b++){const B=W[b];if(E(B,F,b,G)===!0){const ae=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value];let he=0;for(let pe=0;pe<ee.length;pe++){const se=ee[pe],ce=M(se);typeof se=="number"||typeof se=="boolean"?(B.__data[0]=se,n.bufferSubData(n.UNIFORM_BUFFER,ae+he,B.__data)):se.isMatrix3?(B.__data[0]=se.elements[0],B.__data[1]=se.elements[1],B.__data[2]=se.elements[2],B.__data[3]=0,B.__data[4]=se.elements[3],B.__data[5]=se.elements[4],B.__data[6]=se.elements[5],B.__data[7]=0,B.__data[8]=se.elements[6],B.__data[9]=se.elements[7],B.__data[10]=se.elements[8],B.__data[11]=0):(se.toArray(B.__data,he),he+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ae,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function E(P,I,A,G){const F=P.value,U=I+"_"+A;if(G[U]===void 0)return typeof F=="number"||typeof F=="boolean"?G[U]=F:G[U]=F.clone(),!0;{const W=G[U];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return G[U]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function x(P){const I=P.uniforms;let A=0;const G=16;for(let U=0,W=I.length;U<W;U++){const b=Array.isArray(I[U])?I[U]:[I[U]];for(let R=0,B=b.length;R<B;R++){const ae=b[R],ee=Array.isArray(ae.value)?ae.value:[ae.value];for(let he=0,pe=ee.length;he<pe;he++){const se=ee[he],ce=M(se),z=A%G,le=z%ce.boundary,ie=z+le;A+=le,ie!==0&&G-ie<ce.storage&&(A+=G-ie),ae.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=ce.storage}}}const F=A%G;return F>0&&(A+=G-F),P.__size=A,P.__cache={},this}function M(P){const I={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(I.boundary=4,I.storage=4):P.isVector2?(I.boundary=8,I.storage=8):P.isVector3||P.isColor?(I.boundary=16,I.storage=12):P.isVector4?(I.boundary=16,I.storage=16):P.isMatrix3?(I.boundary=48,I.storage=48):P.isMatrix4?(I.boundary=64,I.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),I}function S(P){const I=P.target;I.removeEventListener("dispose",S);const A=c.indexOf(I.__bindingPointIndex);c.splice(A,1),n.deleteBuffer(s[I.id]),delete s[I.id],delete a[I.id]}function y(){for(const P in s)n.deleteBuffer(s[P]);c=[],s={},a={}}return{bind:d,update:f,dispose:y}}class d3{constructor(e={}){const{canvas:t=BD(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=c;const x=new Uint32Array(4),M=new Int32Array(4);let S=null,y=null;const P=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let G=!1;this._outputColorSpace=gi;let F=0,U=0,W=null,b=-1,R=null;const B=new nn,ae=new nn;let ee=null;const he=new bt(0);let pe=0,se=t.width,ce=t.height,z=1,le=null,ie=null;const L=new nn(0,0,se,ce),ne=new nn(0,0,se,ce);let Oe=!1;const J=new Ug;let de=!1,we=!1;const Se=new rn,Ce=new rn,Je=new te,Xe=new nn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function gt(){return W===null?z:1}let O=i;function fn(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cg}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",fe,!1),O===null){const X="webgl2";if(O=fn(X,C),O===null)throw fn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Et,Pt,$e,_t,Ke,ot,Qt,N,w,K,ue,me,re,qe,Re,ze,Ye,ve,Ue,nt,Ze,Ae,st,H;function be(){Et=new xO(O),Et.init(),Ae=new r3(O,Et),Pt=new mO(O,Et,e,Ae),$e=new n3(O,Et),Pt.reverseDepthBuffer&&_&&$e.buffers.depth.setReversed(!0),_t=new wO(O),Ke=new Gk,ot=new i3(O,Et,$e,Ke,Pt,Ae,_t),Qt=new _O(A),N=new EO(A),w=new PL(O),st=new fO(O,w),K=new TO(O,w,_t,st),ue=new RO(O,K,w,_t),Ue=new CO(O,Pt,ot),ze=new gO(Ke),me=new Vk(A,Qt,N,Et,Pt,st,ze),re=new u3(A,Ke),qe=new Xk,Re=new Jk(Et),ve=new dO(A,Qt,N,$e,ue,E,d),Ye=new e3(A,ue,Pt),H=new h3(O,_t,Pt,$e),nt=new pO(O,Et,_t),Ze=new MO(O,Et,_t),_t.programs=me.programs,A.capabilities=Pt,A.extensions=Et,A.properties=Ke,A.renderLists=qe,A.shadowMap=Ye,A.state=$e,A.info=_t}be();const _e=new l3(A,O);this.xr=_e,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=Et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(se,ce,!1))},this.getSize=function(C){return C.set(se,ce)},this.setSize=function(C,X,Z=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=C,ce=X,t.width=Math.floor(C*z),t.height=Math.floor(X*z),Z===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(se*z,ce*z).floor()},this.setDrawingBufferSize=function(C,X,Z){se=C,ce=X,z=Z,t.width=Math.floor(C*Z),t.height=Math.floor(X*Z),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,X,Z,q){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,X,Z,q),$e.viewport(B.copy(L).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,X,Z,q){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,X,Z,q),$e.scissor(ae.copy(ne).multiplyScalar(z).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(C){$e.setScissorTest(Oe=C)},this.setOpaqueSort=function(C){le=C},this.setTransparentSort=function(C){ie=C},this.getClearColor=function(C){return C.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,Z=!0){let q=0;if(C){let $=!1;if(W!==null){const Te=W.texture.format;$=Te===Ng||Te===Pg||Te===Ig}if($){const Te=W.texture.type,Ie=Te===nr||Te===mo||Te===Hl||Te===Vl||Te===Ag||Te===bg,Fe=ve.getClearColor(),ke=ve.getClearAlpha(),rt=Fe.r,it=Fe.g,Ve=Fe.b;Ie?(x[0]=rt,x[1]=it,x[2]=Ve,x[3]=ke,O.clearBufferuiv(O.COLOR,0,x)):(M[0]=rt,M[1]=it,M[2]=Ve,M[3]=ke,O.clearBufferiv(O.COLOR,0,M))}else q|=O.COLOR_BUFFER_BIT}X&&(q|=O.DEPTH_BUFFER_BIT),Z&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ve.dispose(),qe.dispose(),Re.dispose(),Ke.dispose(),Qt.dispose(),N.dispose(),ue.dispose(),st.dispose(),H.dispose(),me.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",xo),_e.removeEventListener("sessionend",zr),or.stop()};function De(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const C=_t.autoReset,X=Ye.enabled,Z=Ye.autoUpdate,q=Ye.needsUpdate,$=Ye.type;be(),_t.autoReset=C,Ye.enabled=X,Ye.autoUpdate=Z,Ye.needsUpdate=q,Ye.type=$}function fe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function He(C){const X=C.target;X.removeEventListener("dispose",He),ct(X)}function ct(C){Ut(C),Ke.remove(C)}function Ut(C){const X=Ke.get(C).programs;X!==void 0&&(X.forEach(function(Z){me.releaseProgram(Z)}),C.isShaderMaterial&&me.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,Z,q,$,Te){X===null&&(X=Lt);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,Fe=uc(C,X,Z,q,$);$e.setMaterial(q,Ie);let ke=Z.index,rt=1;if(q.wireframe===!0){if(ke=K.getWireframeAttribute(Z),ke===void 0)return;rt=2}const it=Z.drawRange,Ve=Z.attributes.position;let ft=it.start*rt,ht=(it.start+it.count)*rt;Te!==null&&(ft=Math.max(ft,Te.start*rt),ht=Math.min(ht,(Te.start+Te.count)*rt)),ke!==null?(ft=Math.max(ft,0),ht=Math.min(ht,ke.count)):Ve!=null&&(ft=Math.max(ft,0),ht=Math.min(ht,Ve.count));const Yt=ht-ft;if(Yt<0||Yt===1/0)return;st.setup($,q,Fe,Z,ke);let zt,Dt=nt;if(ke!==null&&(zt=w.get(ke),Dt=Ze,Dt.setIndex(zt)),$.isMesh)q.wireframe===!0?($e.setLineWidth(q.wireframeLinewidth*gt()),Dt.setMode(O.LINES)):Dt.setMode(O.TRIANGLES);else if($.isLine){let Qe=q.linewidth;Qe===void 0&&(Qe=1),$e.setLineWidth(Qe*gt()),$.isLineSegments?Dt.setMode(O.LINES):$.isLineLoop?Dt.setMode(O.LINE_LOOP):Dt.setMode(O.LINE_STRIP)}else $.isPoints?Dt.setMode(O.POINTS):$.isSprite&&Dt.setMode(O.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)_a("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Dt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qe=$._multiDrawStarts,Ot=$._multiDrawCounts,pt=$._multiDrawCount,pn=ke?w.get(ke).bytesPerElement:1,Vr=Ke.get(q).currentProgram.getUniforms();for(let Bn=0;Bn<pt;Bn++)Vr.setValue(O,"_gl_DrawID",Bn),Dt.render(Qe[Bn]/pn,Ot[Bn])}else if($.isInstancedMesh)Dt.renderInstances(ft,Yt,$.count);else if(Z.isInstancedBufferGeometry){const Qe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ot=Math.min(Z.instanceCount,Qe);Dt.renderInstances(ft,Yt,Ot)}else Dt.render(ft,Yt)};function Tt(C,X,Z){C.transparent===!0&&C.side===Tr&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,To(C,X,Z),C.side=Rs,C.needsUpdate=!0,To(C,X,Z),C.side=Tr):To(C,X,Z)}this.compile=function(C,X,Z=null){Z===null&&(Z=C),y=Re.get(Z),y.init(X),I.push(y),Z.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(y.pushLight($),$.castShadow&&y.pushShadow($))}),C!==Z&&C.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(y.pushLight($),$.castShadow&&y.pushShadow($))}),y.setupLights();const q=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Te=$.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){const Fe=Te[Ie];Tt(Fe,Z,$),q.add(Fe)}else Tt(Te,Z,$),q.add(Te)}),y=I.pop(),q},this.compileAsync=function(C,X,Z=null){const q=this.compile(C,X,Z);return new Promise($=>{function Te(){if(q.forEach(function(Ie){Ke.get(Ie).currentProgram.isReady()&&q.delete(Ie)}),q.size===0){$(C);return}setTimeout(Te,10)}Et.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Xn=null;function Fn(C){Xn&&Xn(C)}function xo(){or.stop()}function zr(){or.start()}const or=new NT;or.setAnimationLoop(Fn),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(C){Xn=C,_e.setAnimationLoop(C),C===null?or.stop():or.start()},_e.addEventListener("sessionstart",xo),_e.addEventListener("sessionend",zr),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(X),X=_e.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,X,W),y=Re.get(C,I.length),y.init(X),I.push(y),Ce.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(Ce),we=this.localClippingEnabled,de=ze.init(this.clippingPlanes,we),S=qe.get(C,P.length),S.init(),P.push(S),_e.enabled===!0&&_e.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&ar(Te,X,-1/0,A.sortObjects)}ar(C,X,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(le,ie),Vt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Vt&&ve.addToRenderList(S,C),this.info.render.frame++,de===!0&&ze.beginShadows();const Z=y.state.shadowsArray;Ye.render(Z,C,X),de===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=S.opaque,$=S.transmissive;if(y.setupLights(),X.isArrayCamera){const Te=X.cameras;if($.length>0)for(let Ie=0,Fe=Te.length;Ie<Fe;Ie++){const ke=Te[Ie];Ns(q,$,C,ke)}Vt&&ve.render(C);for(let Ie=0,Fe=Te.length;Ie<Fe;Ie++){const ke=Te[Ie];Ps(S,C,ke,ke.viewport)}}else $.length>0&&Ns(q,$,C,X),Vt&&ve.render(C),Ps(S,C,X);W!==null&&U===0&&(ot.updateMultisampleRenderTarget(W),ot.updateRenderTargetMipmap(W)),C.isScene===!0&&C.onAfterRender(A,C,X),st.resetDefaultState(),b=-1,R=null,I.pop(),I.length>0?(y=I[I.length-1],de===!0&&ze.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function ar(C,X,Z,q){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){q&&Xe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ce);const Ie=ue.update(C),Fe=C.material;Fe.visible&&S.push(C,Ie,Fe,Z,Xe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||J.intersectsObject(C))){const Ie=ue.update(C),Fe=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Xe.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Xe.copy(Ie.boundingSphere.center)),Xe.applyMatrix4(C.matrixWorld).applyMatrix4(Ce)),Array.isArray(Fe)){const ke=Ie.groups;for(let rt=0,it=ke.length;rt<it;rt++){const Ve=ke[rt],ft=Fe[Ve.materialIndex];ft&&ft.visible&&S.push(C,Ie,ft,Z,Xe.z,Ve)}}else Fe.visible&&S.push(C,Ie,Fe,Z,Xe.z,null)}}const Te=C.children;for(let Ie=0,Fe=Te.length;Ie<Fe;Ie++)ar(Te[Ie],X,Z,q)}function Ps(C,X,Z,q){const $=C.opaque,Te=C.transmissive,Ie=C.transparent;y.setupLightsView(Z),de===!0&&ze.setGlobalState(A.clippingPlanes,Z),q&&$e.viewport(B.copy(q)),$.length>0&&Hr($,X,Z),Te.length>0&&Hr(Te,X,Z),Ie.length>0&&Hr(Ie,X,Z),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Ns(C,X,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[q.id]===void 0&&(y.state.transmissionRenderTarget[q.id]=new go(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?nc:nr,minFilter:oo,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Te=y.state.transmissionRenderTarget[q.id],Ie=q.viewport||B;Te.setSize(Ie.z*A.transmissionResolutionScale,Ie.w*A.transmissionResolutionScale);const Fe=A.getRenderTarget(),ke=A.getActiveCubeFace(),rt=A.getActiveMipmapLevel();A.setRenderTarget(Te),A.getClearColor(he),pe=A.getClearAlpha(),pe<1&&A.setClearColor(16777215,.5),A.clear(),Vt&&ve.render(Z);const it=A.toneMapping;A.toneMapping=Ms;const Ve=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),y.setupLightsView(q),de===!0&&ze.setGlobalState(A.clippingPlanes,q),Hr(C,Z,q),ot.updateMultisampleRenderTarget(Te),ot.updateRenderTargetMipmap(Te),Et.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let ht=0,Yt=X.length;ht<Yt;ht++){const zt=X[ht],Dt=zt.object,Qe=zt.geometry,Ot=zt.material,pt=zt.group;if(Ot.side===Tr&&Dt.layers.test(q.layers)){const pn=Ot.side;Ot.side=ti,Ot.needsUpdate=!0,lc(Dt,Z,q,Qe,Ot,pt),Ot.side=pn,Ot.needsUpdate=!0,ft=!0}}ft===!0&&(ot.updateMultisampleRenderTarget(Te),ot.updateRenderTargetMipmap(Te))}A.setRenderTarget(Fe,ke,rt),A.setClearColor(he,pe),Ve!==void 0&&(q.viewport=Ve),A.toneMapping=it}function Hr(C,X,Z){const q=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Te=C.length;$<Te;$++){const Ie=C[$],Fe=Ie.object,ke=Ie.geometry,rt=Ie.group;let it=Ie.material;it.allowOverride===!0&&q!==null&&(it=q),Fe.layers.test(Z.layers)&&lc(Fe,X,Z,ke,it,rt)}}function lc(C,X,Z,q,$,Te){C.onBeforeRender(A,X,Z,q,$,Te),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(A,X,Z,q,C,Te),$.transparent===!0&&$.side===Tr&&$.forceSinglePass===!1?($.side=ti,$.needsUpdate=!0,A.renderBufferDirect(Z,X,q,$,C,Te),$.side=Rs,$.needsUpdate=!0,A.renderBufferDirect(Z,X,q,$,C,Te),$.side=Tr):A.renderBufferDirect(Z,X,q,$,C,Te),C.onAfterRender(A,X,Z,q,$,Te)}function To(C,X,Z){X.isScene!==!0&&(X=Lt);const q=Ke.get(C),$=y.state.lights,Te=y.state.shadowsArray,Ie=$.state.version,Fe=me.getParameters(C,$.state,Te,X,Z),ke=me.getProgramCacheKey(Fe);let rt=q.programs;q.environment=C.isMeshStandardMaterial?X.environment:null,q.fog=X.fog,q.envMap=(C.isMeshStandardMaterial?N:Qt).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",He),rt=new Map,q.programs=rt);let it=rt.get(ke);if(it!==void 0){if(q.currentProgram===it&&q.lightsStateVersion===Ie)return zi(C,Fe),it}else Fe.uniforms=me.getUniforms(C),C.onBeforeCompile(Fe,A),it=me.acquireProgram(Fe,ke),rt.set(ke,it),q.uniforms=Fe.uniforms;const Ve=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=ze.uniform),zi(C,Fe),q.needsLights=Hh(C),q.lightsStateVersion=Ie,q.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMap.value=$.state.directionalShadowMap,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotShadowMap.value=$.state.spotShadowMap,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMap.value=$.state.pointShadowMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix),q.currentProgram=it,q.uniformsList=null,it}function cc(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=th.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function zi(C,X){const Z=Ke.get(C);Z.outputColorSpace=X.outputColorSpace,Z.batching=X.batching,Z.batchingColor=X.batchingColor,Z.instancing=X.instancing,Z.instancingColor=X.instancingColor,Z.instancingMorph=X.instancingMorph,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function uc(C,X,Z,q,$){X.isScene!==!0&&(X=Lt),ot.resetTextureUnits();const Te=X.fog,Ie=q.isMeshStandardMaterial?X.environment:null,Fe=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ca,ke=(q.isMeshStandardMaterial?N:Qt).get(q.envMap||Ie),rt=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,it=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ve=!!Z.morphAttributes.position,ft=!!Z.morphAttributes.normal,ht=!!Z.morphAttributes.color;let Yt=Ms;q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Yt=A.toneMapping);const zt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Dt=zt!==void 0?zt.length:0,Qe=Ke.get(q),Ot=y.state.lights;if(de===!0&&(we===!0||C!==R)){const Tn=C===R&&q.id===b;ze.setState(q,C,Tn)}let pt=!1;q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ot.state.version||Qe.outputColorSpace!==Fe||$.isBatchedMesh&&Qe.batching===!1||!$.isBatchedMesh&&Qe.batching===!0||$.isBatchedMesh&&Qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Qe.instancing===!1||!$.isInstancedMesh&&Qe.instancing===!0||$.isSkinnedMesh&&Qe.skinning===!1||!$.isSkinnedMesh&&Qe.skinning===!0||$.isInstancedMesh&&Qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Qe.instancingMorph===!1&&$.morphTexture!==null||Qe.envMap!==ke||q.fog===!0&&Qe.fog!==Te||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ze.numPlanes||Qe.numIntersection!==ze.numIntersection)||Qe.vertexAlphas!==rt||Qe.vertexTangents!==it||Qe.morphTargets!==Ve||Qe.morphNormals!==ft||Qe.morphColors!==ht||Qe.toneMapping!==Yt||Qe.morphTargetsCount!==Dt)&&(pt=!0):(pt=!0,Qe.__version=q.version);let pn=Qe.currentProgram;pt===!0&&(pn=To(q,X,$));let Vr=!1,Bn=!1,lr=!1;const Ht=pn.getUniforms(),An=Qe.uniforms;if($e.useProgram(pn.program)&&(Vr=!0,Bn=!0,lr=!0),q.id!==b&&(b=q.id,Bn=!0),Vr||R!==C){$e.buffers.depth.getReversed()?(Se.copy(C.projectionMatrix),HD(Se),VD(Se),Ht.setValue(O,"projectionMatrix",Se)):Ht.setValue(O,"projectionMatrix",C.projectionMatrix),Ht.setValue(O,"viewMatrix",C.matrixWorldInverse);const gn=Ht.map.cameraPosition;gn!==void 0&&gn.setValue(O,Je.setFromMatrixPosition(C.matrixWorld)),Pt.logarithmicDepthBuffer&&Ht.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ht.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Bn=!0,lr=!0)}if($.isSkinnedMesh){Ht.setOptional(O,$,"bindMatrix"),Ht.setOptional(O,$,"bindMatrixInverse");const Tn=$.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ht.setValue(O,"boneTexture",Tn.boneTexture,ot))}$.isBatchedMesh&&(Ht.setOptional(O,$,"batchingTexture"),Ht.setValue(O,"batchingTexture",$._matricesTexture,ot),Ht.setOptional(O,$,"batchingIdTexture"),Ht.setValue(O,"batchingIdTexture",$._indirectTexture,ot),Ht.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&Ht.setValue(O,"batchingColorTexture",$._colorsTexture,ot));const mn=Z.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Ue.update($,Z,pn),(Bn||Qe.receiveShadow!==$.receiveShadow)&&(Qe.receiveShadow=$.receiveShadow,Ht.setValue(O,"receiveShadow",$.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(An.envMap.value=ke,An.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&X.environment!==null&&(An.envMapIntensity.value=X.environmentIntensity),Bn&&(Ht.setValue(O,"toneMappingExposure",A.toneMappingExposure),Qe.needsLights&&hc(An,lr),Te&&q.fog===!0&&re.refreshFogUniforms(An,Te),re.refreshMaterialUniforms(An,q,z,ce,y.state.transmissionRenderTarget[C.id]),th.upload(O,cc(Qe),An,ot)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(th.upload(O,cc(Qe),An,ot),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ht.setValue(O,"center",$.center),Ht.setValue(O,"modelViewMatrix",$.modelViewMatrix),Ht.setValue(O,"normalMatrix",$.normalMatrix),Ht.setValue(O,"modelMatrix",$.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Tn=q.uniformsGroups;for(let gn=0,Mt=Tn.length;gn<Mt;gn++){const Hi=Tn[gn];H.update(Hi,pn),H.bind(Hi,pn)}}return pn}function hc(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Hh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,X,Z){const q=Ke.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ke.get(C.texture).__webglTexture=X,Ke.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const Z=Ke.get(C);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0};const dc=O.createFramebuffer();this.setRenderTarget=function(C,X=0,Z=0){W=C,F=X,U=Z;let q=!0,$=null,Te=!1,Ie=!1;if(C){const ke=Ke.get(C);if(ke.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(ke.__webglFramebuffer===void 0)ot.setupRenderTarget(C);else if(ke.__hasExternalTextures)ot.rebindTextures(C,Ke.get(C.texture).__webglTexture,Ke.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ve=C.depthTexture;if(ke.__boundDepthTexture!==Ve){if(Ve!==null&&Ke.has(Ve)&&(C.width!==Ve.image.width||C.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(C)}}const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ie=!0);const it=Ke.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[X])?$=it[X][Z]:$=it[X],Te=!0):C.samples>0&&ot.useMultisampledRTT(C)===!1?$=Ke.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?$=it[Z]:$=it,B.copy(C.viewport),ae.copy(C.scissor),ee=C.scissorTest}else B.copy(L).multiplyScalar(z).floor(),ae.copy(ne).multiplyScalar(z).floor(),ee=Oe;if(Z!==0&&($=dc),$e.bindFramebuffer(O.FRAMEBUFFER,$)&&q&&$e.drawBuffers(C,$),$e.viewport(B),$e.scissor(ae),$e.setScissorTest(ee),Te){const ke=Ke.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,ke.__webglTexture,Z)}else if(Ie){const ke=Ke.get(C.texture),rt=X;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,Z,rt)}else if(C!==null&&Z!==0){const ke=Ke.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ke.__webglTexture,Z)}b=-1},this.readRenderTargetPixels=function(C,X,Z,q,$,Te,Ie,Fe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke){$e.bindFramebuffer(O.FRAMEBUFFER,ke);try{const rt=C.textures[Fe],it=rt.format,Ve=rt.type;if(!Pt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-q&&Z>=0&&Z<=C.height-$&&(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Fe),O.readPixels(X,Z,q,$,Ae.convert(it),Ae.convert(Ve),Te))}finally{const rt=W!==null?Ke.get(W).__webglFramebuffer:null;$e.bindFramebuffer(O.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(C,X,Z,q,$,Te,Ie,Fe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke)if(X>=0&&X<=C.width-q&&Z>=0&&Z<=C.height-$){$e.bindFramebuffer(O.FRAMEBUFFER,ke);const rt=C.textures[Fe],it=rt.format,Ve=rt.type;if(!Pt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.bufferData(O.PIXEL_PACK_BUFFER,Te.byteLength,O.STREAM_READ),C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Fe),O.readPixels(X,Z,q,$,Ae.convert(it),Ae.convert(Ve),0);const ht=W!==null?Ke.get(W).__webglFramebuffer:null;$e.bindFramebuffer(O.FRAMEBUFFER,ht);const Yt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await zD(O,Yt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Te),O.deleteBuffer(ft),O.deleteSync(Yt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,Z=0){const q=Math.pow(2,-Z),$=Math.floor(C.image.width*q),Te=Math.floor(C.image.height*q),Ie=X!==null?X.x:0,Fe=X!==null?X.y:0;ot.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Ie,Fe,$,Te),$e.unbindTexture()};const fc=O.createFramebuffer(),pc=O.createFramebuffer();this.copyTextureToTexture=function(C,X,Z=null,q=null,$=0,Te=null){Te===null&&($!==0?(_a("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=$,$=0):Te=0);let Ie,Fe,ke,rt,it,Ve,ft,ht,Yt;const zt=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(Z!==null)Ie=Z.max.x-Z.min.x,Fe=Z.max.y-Z.min.y,ke=Z.isBox3?Z.max.z-Z.min.z:1,rt=Z.min.x,it=Z.min.y,Ve=Z.isBox3?Z.min.z:0;else{const mn=Math.pow(2,-$);Ie=Math.floor(zt.width*mn),Fe=Math.floor(zt.height*mn),C.isDataArrayTexture?ke=zt.depth:C.isData3DTexture?ke=Math.floor(zt.depth*mn):ke=1,rt=0,it=0,Ve=0}q!==null?(ft=q.x,ht=q.y,Yt=q.z):(ft=0,ht=0,Yt=0);const Dt=Ae.convert(X.format),Qe=Ae.convert(X.type);let Ot;X.isData3DTexture?(ot.setTexture3D(X,0),Ot=O.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ot.setTexture2DArray(X,0),Ot=O.TEXTURE_2D_ARRAY):(ot.setTexture2D(X,0),Ot=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const pt=O.getParameter(O.UNPACK_ROW_LENGTH),pn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Vr=O.getParameter(O.UNPACK_SKIP_PIXELS),Bn=O.getParameter(O.UNPACK_SKIP_ROWS),lr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,zt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,zt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,rt),O.pixelStorei(O.UNPACK_SKIP_ROWS,it),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ve);const Ht=C.isDataArrayTexture||C.isData3DTexture,An=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const mn=Ke.get(C),Tn=Ke.get(X),gn=Ke.get(mn.__renderTarget),Mt=Ke.get(Tn.__renderTarget);$e.bindFramebuffer(O.READ_FRAMEBUFFER,gn.__webglFramebuffer),$e.bindFramebuffer(O.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Hi=0;Hi<ke;Hi++)Ht&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ke.get(C).__webglTexture,$,Ve+Hi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ke.get(X).__webglTexture,Te,Yt+Hi)),O.blitFramebuffer(rt,it,Ie,Fe,ft,ht,Ie,Fe,O.DEPTH_BUFFER_BIT,O.NEAREST);$e.bindFramebuffer(O.READ_FRAMEBUFFER,null),$e.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||Ke.has(C)){const mn=Ke.get(C),Tn=Ke.get(X);$e.bindFramebuffer(O.READ_FRAMEBUFFER,fc),$e.bindFramebuffer(O.DRAW_FRAMEBUFFER,pc);for(let gn=0;gn<ke;gn++)Ht?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,mn.__webglTexture,$,Ve+gn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mn.__webglTexture,$),An?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Tn.__webglTexture,Te,Yt+gn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Tn.__webglTexture,Te),$!==0?O.blitFramebuffer(rt,it,Ie,Fe,ft,ht,Ie,Fe,O.COLOR_BUFFER_BIT,O.NEAREST):An?O.copyTexSubImage3D(Ot,Te,ft,ht,Yt+gn,rt,it,Ie,Fe):O.copyTexSubImage2D(Ot,Te,ft,ht,rt,it,Ie,Fe);$e.bindFramebuffer(O.READ_FRAMEBUFFER,null),$e.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else An?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Ot,Te,ft,ht,Yt,Ie,Fe,ke,Dt,Qe,zt.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(Ot,Te,ft,ht,Yt,Ie,Fe,ke,Dt,zt.data):O.texSubImage3D(Ot,Te,ft,ht,Yt,Ie,Fe,ke,Dt,Qe,zt):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Te,ft,ht,Ie,Fe,Dt,Qe,zt.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Te,ft,ht,zt.width,zt.height,Dt,zt.data):O.texSubImage2D(O.TEXTURE_2D,Te,ft,ht,Ie,Fe,Dt,Qe,zt);O.pixelStorei(O.UNPACK_ROW_LENGTH,pt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Vr),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,lr),Te===0&&X.generateMipmaps&&O.generateMipmap(Ot),$e.unbindTexture()},this.copyTextureToTexture3D=function(C,X,Z=null,q=null,$=0){return _a('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,Z,q,$)},this.initRenderTarget=function(C){Ke.get(C).__webglFramebuffer===void 0&&ot.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ot.setTextureCube(C,0):C.isData3DTexture?ot.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ot.setTexture2DArray(C,0):ot.setTexture2D(C,0),$e.unbindTexture()},this.resetState=function(){F=0,U=0,W=null,$e.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}function f3(){const n=oe.useRef(null),e=oe.useRef(null);return oe.useEffect(()=>{const t=eT(),i=rT.currentUser,s=lN(t,`analytics/landing_visits/${Date.now()}`);uN(s,{timestamp:Date.now(),uid:i?i.uid:"guest",route:"LandingPage"}).catch(a=>console.error("🔥 Error logging visit:",a))},[]),oe.useEffect(()=>{const t=n.current,i=t.getContext("2d");let s=[],a;const c=()=>{t.width=window.innerWidth,t.height=window.innerHeight,s=Array.from({length:300},()=>({x:Math.random()*t.width,y:Math.random()*t.height,r:Math.random()*1.2+.3,base:Math.random()*.5+.2,phase:Math.random()*Math.PI*2}))},u=()=>{i.clearRect(0,0,t.width,t.height);const d=Date.now()*.002;for(const f of s)i.globalAlpha=f.base+Math.sin(d+f.phase)*.1,i.beginPath(),i.arc(f.x,f.y,f.r,0,2*Math.PI),i.fillStyle="#fff",i.fill();a=requestAnimationFrame(u)};return window.addEventListener("resize",c),c(),u(),()=>{window.removeEventListener("resize",c),cancelAnimationFrame(a)}},[]),oe.useEffect(()=>{const t=e.current,i=new d3({canvas:t,alpha:!0,antialias:!0});i.setPixelRatio(window.devicePixelRatio);const s=new pL,a=new _i(50,1,.1,1e3);a.position.z=3.2;const c=new AL(16777215,1);c.position.set(5,5,5),s.add(c),new ML().load("/earthmap1k.jpg",d=>{const f=new Yi(new Og(1,64,64),new vL({map:d}));s.add(f);const m=()=>{f.rotation.y+=.003,i.render(s,a),requestAnimationFrame(m)};m()},void 0,d=>console.error("Globe load error:",d));const u=()=>{const d=t.clientWidth,f=t.clientHeight;i.setSize(d,f,!1),a.aspect=d/f,a.updateProjectionMatrix()};return window.addEventListener("resize",u),u(),()=>window.removeEventListener("resize",u)},[]),Rt.jsxs("div",{className:"landing-container",children:[Rt.jsx("canvas",{ref:n,className:"canvas-stars"}),Rt.jsx("canvas",{ref:e,className:"canvas-globe"}),Rt.jsxs("div",{className:"overlay",children:[Rt.jsx("h1",{className:"brand",children:"#HUMANITY"}),Rt.jsx("p",{className:"tagline",children:"Welcome to the future of verified connection"}),Rt.jsxs("div",{className:"buttons",children:[Rt.jsx(ih,{to:"/register",className:"btn primary",children:"Register"}),Rt.jsx(ih,{to:"/login",className:"btn ghost",children:"Log In"})]})]})]})}function p3(){return Rt.jsx("h2",{style:{color:"white",textAlign:"center",marginTop:"2rem"},children:"Login Page (TODO)"})}function m3(){return Rt.jsx("h2",{style:{color:"white",textAlign:"center",marginTop:"2rem"},children:"Register Page (TODO)"})}function g3(){return Rt.jsxs("main",{children:[Rt.jsx("h1",{children:"#HUMANITY"}),Rt.jsxs("p",{children:["If you can see this on GitHub Pages under ",Rt.jsx("code",{children:"/humanity/"}),", the setup works."]})]})}function _3({children:n}){const{user:e}=KN();return e?n:Rt.jsx(pC,{to:"/login",replace:!0})}function v3(){return Rt.jsx(oT,{children:Rt.jsxs(gC,{children:[Rt.jsx(Cl,{path:"/",element:Rt.jsx(f3,{})}),Rt.jsx(Cl,{path:"/login",element:Rt.jsx(p3,{})}),Rt.jsx(Cl,{path:"/register",element:Rt.jsx(m3,{})}),Rt.jsx(Cl,{path:"/dashboard",element:Rt.jsx(_3,{children:Rt.jsx(g3,{})})})]})})}ww.createRoot(document.getElementById("root")).render(Rt.jsx(yw.StrictMode,{children:Rt.jsx(oT,{children:Rt.jsx(BC,{children:Rt.jsx(v3,{})})})}));
