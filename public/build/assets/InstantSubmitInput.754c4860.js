import{a,d as g}from"./app.8fceedcb.js";import{t as l}from"./tw-merge.25811ea8.js";const v=({className:n,type:o="text",id:e,name:s,defaultValue:i,routeName:u,...r})=>{const m=t=>{if(t.target.value===t.target.defaultValue)return;const c=t.target.name.split("-")[0],d=t.target.name.split("-")[1];g.Inertia.put(route(u,c),{prop:d,value:t.target.value},{preserveScroll:!0})};return a("div",{children:a("input",{step:r.step,min:r.min,max:r.max,name:e+"-"+s,defaultValue:i,onBlur:t=>m(t),className:l("border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",n),type:o})},e)};export{v as I};
