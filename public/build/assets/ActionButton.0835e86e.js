import{R as d,r as a,a as e,j as g,F as p,L as u}from"./app.7ec90238.js";import{t as f}from"./tw-merge.25811ea8.js";import{W as x}from"./transition.8c82694b.js";const c=d.createContext(),i=({children:t})=>{const[n,o]=a.exports.useState(!1),s=()=>{o(r=>!r)};return e(c.Provider,{value:{open:n,setOpen:o,toggleOpen:s},children:e("div",{className:"relative",children:t})})},v=({children:t})=>{const{open:n,setOpen:o,toggleOpen:s}=a.exports.useContext(c);return g(p,{children:[e("div",{onClick:s,className:"cursor-pointer relative",children:t}),n&&e("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)})]})},h=({align:t="right",width:n="w-48",contentClasses:o="p-2 bg-slate-100",children:s})=>{const{open:r,setOpen:m}=a.exports.useContext(c);let l="origin-top";return t==="left"?l="origin-top-left left-0":t==="right"&&(l="origin-top-right right-0"),e(p,{children:e(x,{as:a.exports.Fragment,show:r,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e("div",{className:"absolute z-50 mt-2 rounded-md shadow-lg "+l+" "+n,onClick:()=>m(!1),children:e("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 flex flex-col "+o,children:s})})})})},C=({href:t,method:n="post",as:o="a",children:s,className:r=""})=>e(u,{href:t,method:n,as:o,className:f(" block my-1 w-full px-2 py-2 text-left text-sm leading-5 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-slate-200",r),children:s});i.Trigger=v;i.Content=h;i.Link=C;const N=i;export{N as A};
