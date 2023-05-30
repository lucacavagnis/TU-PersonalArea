import{r as v,R as j,a as p,d as O,j as R}from"./app.aa1f3dfb.js";import"./Button.cff7c94a.js";import{T}from"./TextInput.df6004f3.js";import{P as B}from"./Pagination.a29522d9.js";import{P as _}from"./String.db95b830.js";import{t as x}from"./tw-merge.25811ea8.js";import{b as k,c as D}from"./index.esm.00ca2219.js";var I={exports:{}};(function(s,n){(function(l,o){s.exports=o(v.exports)})(window,function(l){return function(o){var a={};function t(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=o,t.c=a,t.d=function(e,r,d){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:d})},t.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r||4&r&&typeof e=="object"&&e&&e.__esModule)return e;var d=Object.create(null);if(t.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&r&&typeof e!="string")for(var y in e)t.d(d,y,function(c){return e[c]}.bind(null,y));return d},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(o,a){o.exports=l},function(o,a,t){t.r(a),t.d(a,"useStateWithCallbackInstant",function(){return d}),t.d(a,"useStateWithCallbackLazy",function(){return y});var e=t(0);function r(c,f){return function(u){if(Array.isArray(u))return u}(c)||function(u,i){var b=[],m=!0,S=!1,g=void 0;try{for(var P,N=u[Symbol.iterator]();!(m=(P=N.next()).done)&&(b.push(P.value),!i||b.length!==i);m=!0);}catch(w){S=!0,g=w}finally{try{m||N.return==null||N.return()}finally{if(S)throw g}}return b}(c,f)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(c,f){var u=r(e.useState(c),2),i=u[0],b=u[1],m=e.useRef(!1);return e.useLayoutEffect(function(){m.current?f(i):m.current=!0},[i,f]),[i,b]},y=function(c){var f=e.useRef(null),u=r(e.useState(c),2),i=u[0],b=u[1];e.useEffect(function(){f.current&&(f.current(i),f.current=null)},[i]);var m=e.useCallback(function(S,g){return f.current=g,b(S)},[]);return[i,m]};a.default=function(c,f){var u=r(e.useState(c),2),i=u[0],b=u[1],m=e.useRef(!1);return e.useEffect(function(){m.current?f(i):m.current=!0},[i,f]),[i,b]}}])})})(I);const E="border-b border-slate-100 text-sm [&>*]:py-4",F="text-slate-500 pb-2 pt-2 border-b border-t border-slate-100 [&>*]:py-4",M="text-left mr-4",C=j.createContext(),h=({children:s,route:n,className:l})=>{const[o,a]=v.exports.useState({search:"",orderDir:"desc",orderBy:"id"}),t=(r,d)=>{const y={...o,[r]:d};a(y),console.log(y)},e=r=>{console.log(r),O.Inertia.get(n,r!=null?r:o,{preserveState:!0,preserveScroll:!0})};return p(C.Provider,{value:{filters:o,updateFilter:t,submit:e},children:p("div",{className:l,children:s})})},H=({className:s,children:n})=>p("table",{className:x("w-full box-content ",s),children:n}),z=({className:s})=>{const{filters:n,updateFilter:l,submit:o}=v.exports.useContext(C),a=t=>{o()};return p("div",{className:x("flex items-end mb-4",s),children:p(T,{placeholder:"Cerca...",type:"search",name:"search",value:n.search,handleChange:t=>l("search",t.target.value),handleFocusOut:t=>a(),className:"mr-4"})})},A=({className:s,paginated:n,limit:l=10})=>{if(!n)return;const{filters:o,updateFilter:a,submit:t}=v.exports.useContext(C);return v.exports.useEffect(()=>{a("page",n.current_page)},[n.current_page]),n&&n.total>l&&p(B,{links:n.links})},L=({className:s="",children:n})=>p("tbody",{className:x("",s),children:n}),W=({className:s="",children:n})=>p("tr",{className:x(E,s),children:n}),U=({className:s="",children:n})=>p("td",{className:s+" mr-1 capitalize",children:_(n)}),$=({className:s="",children:n})=>p("thead",{children:p("tr",{className:x(F,s),children:n})}),q=({className:s="",children:n,sortable:l=!1,name:o,onClick:a,initial:t,current:e})=>{const{filters:r,updateFilter:d,submit:y}=v.exports.useContext(C),[c,f]=v.exports.useState(!0),u=r.orderBy===o;l=l&&o;const i=()=>{d("orderDir",c?"desc":"asc"),d("orderBy",o),y({...r,orderDir:c?"desc":"asc",orderBy:o})},b=()=>{f(m=>!m),d("orderDir",c?"asc":"desc"),y({...r,orderDir:c?"asc":"desc"})};return R("th",{className:x(M,s)+(l&&" cursor-pointer ")+" group",onClick:l?u?b:i:void 0,children:[n,l&&p("div",{className:"inline "+(u?" ":"opacity-0 group-hover:opacity-100 transition-opacity"),children:c?p(k,{className:"inline ml-2"}):p(D,{className:"inline ml-2"})})]})};h.Inner=H;h.Body=L;h.Row=W;h.HeaderRow=$;h.Field=U;h.Header=q;h.Search=z;h.Pagination=A;const Z=h;export{Z as T};
