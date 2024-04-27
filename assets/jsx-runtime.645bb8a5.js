var l=Object.defineProperty;var s=(o,r)=>l(o,"name",{value:r,configurable:!0});import{r as u}from"./index.c6903119.js";var m={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=u.exports,a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,v=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function i(o,r,_){var e,t={},f=null,p=null;_!==void 0&&(f=""+_),r.key!==void 0&&(f=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)d.call(r,e)&&!x.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:a,type:o,key:f,ref:p,props:t,_owner:v.current}}s(i,"q");n.Fragment=c;n.jsx=i;n.jsxs=i;(function(o){o.exports=n})(m);export{m as j};
//# sourceMappingURL=jsx-runtime.645bb8a5.js.map
