import{j as a,F as l,a as o,L as d}from"./app.363ed9f1.js";import{t as m}from"./tw-merge.25811ea8.js";import{G as u,I as b}from"./transition.13d8f845.js";function f(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"}}]})(e)}function C(e){var n;const i=(e.disabled?"bg-blue-400 cursor-default":"bg-blue-700 cursor-pointer hover:bg-blue-600")+" block w-fit rounded-md font-medium text-sm text-slate-50 py-2 px-4 mt-4 transition-colors",s="",c=(e.disabled?"text-indigo-300":"text-indigo-700 cursor-pointer hover:text-indigo-500")+" block w-fit font-medium text-sm transition-colors",r="h-fit";let t;switch(e.kind){default:case"primary":t=i;break;case"secondary":t=s;break;case"tertiary":t=c;break}return t=m(t,(n=e.className)!=null?n:"",r),e.type&&e.type!=="link"?a("button",{type:e.type,onMouseEnter:e.onHover,onClick:e.onClick,className:e.className+" "+t,disabled:e.disabled,children:e.children}):a(l,{children:o(d,{href:e.disabled&&e.href?"":e.href,onMouseEnter:e.onHover,onClick:e.onClick,className:e.className+" "+t,children:[e.processing&&a(b.Provider,{value:{className:"animate-spin"},children:a(f,{className:"mr-2 "})}),e.children]})})}C.defaultProps={kind:"primary"};export{C as B};