import{r as u,R as i}from"./index.B52nOzfP.js";var y={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=u,O=Symbol.for("react.element"),P=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,_=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,s={},o=null,c=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)w.call(t,n)&&!N.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:O,type:e,key:o,ref:c,props:s,_owner:_.current}}m.Fragment=P;m.jsx=x;m.jsxs=x;y.exports=m;var a=y.exports;const E="https://gql.hashnode.com/";async function S(){return(await(await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({operationName:"Publication",query:`
  query Publication{
  publication(host: "theshanumalik.hashnode.dev") {
    id
    title
  	posts(first: 5) {
      edges {
        node {
          title
          url
          content {
            text
          }
          slug
          publishedAt
          views
          tags {
            id
            name
          }
        }
      }
    }
  }
}
`})})).json()).data.publication.posts.edges}const R=({title:e,url:t,content:r,tags:n,publishedAt:s})=>(console.log(t),a.jsxs("article",{className:"",children:[a.jsx("h2",{className:"text-lg font-bold link-hover",children:a.jsx("a",{href:t,target:"_blank",children:e})}),a.jsx("span",{className:"text-xs font-normal text-gray-600",children:new Date(s).toDateString()}),a.jsx("p",{className:"text-base text-gray-500 line-clamp-3",children:r.text}),a.jsx("div",{className:"mt-2 flex flex-wrap gap-2 justify-normal items-center",children:n.slice(0,6).map(o=>a.jsx("span",{className:"text-xs text-gray-500 border border-gray-500 px-2 py-1 rounded-full",children:o.name},o.id))})]}));var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=i.createContext&&i.createContext(b),C=["attr","size","title"];function D(e,t){if(e==null)return{};var r=I(e,t),n,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function I(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(n){L(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function L(e,t,r){return t=T(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){var t=z(e,"string");return typeof t=="symbol"?t:t+""}function z(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function v(e){return e&&e.map((t,r)=>i.createElement(t.tag,d({key:r},t.attr),v(t.child)))}function A(e){return t=>i.createElement(k,f({attr:d({},e.attr)},t),v(e.child))}function k(e){var t=r=>{var{attr:n,size:s,title:o}=e,c=D(e,C),p=s||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),i.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,c,{className:l,style:d(d({color:e.color||r.color},r.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),o&&i.createElement("title",null,o),e.children)};return h!==void 0?i.createElement(h.Consumer,null,r=>t(r)):t(b)}function q(e){return A({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"},child:[]}]})(e)}const B=()=>{const[e,t]=u.useState([]),[r,n]=u.useState(!0);return u.useEffect(()=>{n(!0),S().then(s=>{t(s)}).finally(()=>{n(!1)})},[]),a.jsxs("div",{className:"max-w-2xl mx-auto my-3",children:[a.jsx("h2",{className:"uppercase max-w-fit border-b pb-2 pr-2 my-3",children:"latest Articles"}),r?a.jsx("div",{className:"flex justify-center items-center h-32",children:a.jsx("span",{className:"loading loading-dots loading-lg"})}):e.length>0&&a.jsx("div",{className:"space-y-4",children:e.map(s=>a.jsx(R,{...s.node},s.node.url))}),a.jsx("hr",{className:"mt-6 border-gray-700"}),a.jsxs("a",{href:"https://theshanumalik.hashnode.dev",className:"btn btn-outline rounded-full w-full my-4 uppercase",children:["See all posts ",a.jsx(q,{})]})]})};export{B as default};
