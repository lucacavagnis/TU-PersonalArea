import{u as d,j as t,a as e,H as l}from"./app.701c8412.js";import{A as c}from"./AdminLayout.da740535.js";import{T as p}from"./Tab.c8dc8a01.js";import{B as u}from"./Button.8e427060.js";import{C as h}from"./CategoriesTable.763c39bc.js";import{I as g}from"./InputLabel.161bbc3d.js";import{T as x}from"./TextInput.404c8393.js";import{A as f}from"./AddNewLine.4b244247.js";import"./ApplicationLogo.195ea916.js";import"./transition.dfaf50e0.js";import"./index.esm.e45dea00.js";import"./tw-merge.25811ea8.js";import"./Table.5afe908a.js";import"./Pagination.02ccbf5e.js";import"./String.db95b830.js";import"./ActionColumn.330abb1f.js";import"./ActionButton.1e32e0be.js";import"./InstantSubmitInput.0ae4c421.js";function z(a){const{data:o,setData:m,post:i}=d({name:""}),s=()=>{i(route("admin.subcategories.store"))},n=r=>{m(r.target.name,r.target.value)};return t(c,{auth:a.auth,errors:a.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Sottocategorie"}),children:[e(l,{title:"Sottocategorie"}),e("div",{className:"py-12",children:e("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white shadow-sm sm:rounded-lg",children:t(p,{children:[e(h,{categories:a.subcategories,sub:!0}),t(f,{children:[t("div",{className:"mr-4",children:[e(g,{forInput:"name",value:"Nome",className:"mb-2"}),e(x,{name:"name",value:o.name,handleChange:n})]}),e(u,{type:"button",onClick:s,children:"Crea nuovo"})]})]})})})})]})}export{z as default};
