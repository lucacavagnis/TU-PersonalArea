import{u as d,j as a,a as e,H as l}from"./app.73e76765.js";import{A as c}from"./AdminLayout.9d374397.js";import{T as p}from"./Tab.fa1f7e8c.js";import{B as u}from"./Button.1ebd24a1.js";import{C as h}from"./CategoriesTable.e2c598c2.js";import{I as g}from"./InputLabel.2e8ef07d.js";import{T as x}from"./TextInput.7cea473b.js";import{A as f}from"./AddNewLine.902eb09e.js";import"./ApplicationLogo.63312593.js";import"./transition.f8bd1af7.js";import"./index.esm.e717573f.js";import"./tw-merge.25811ea8.js";import"./Table.b1087b63.js";import"./Pagination.36c02ab2.js";import"./String.ccfadc51.js";import"./ActionColumn.19b7e7d4.js";import"./ActionButton.0fbbfeff.js";import"./InstantSubmitInput.7b2fb3ee.js";function E(t){const{data:o,setData:m,post:i}=d({name:""}),s=()=>{i(route("admin.categories.store"))},n=r=>{m(r.target.name,r.target.value)};return a(c,{auth:t.auth,errors:t.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Catgeorie"}),children:[e(l,{title:"Aziende"}),e("div",{className:"py-12",children:e("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white shadow-sm sm:rounded-lg",children:a(p,{children:[e(h,{categories:t.categories,inputs:t.inputs}),a(f,{children:[a("div",{className:"mr-4",children:[e(g,{forInput:"name",value:"Nome",className:"mb-2"}),e(x,{name:"name",value:o.name,handleChange:n})]}),e(u,{type:"button",onClick:s,children:"Crea nuovo"})]})]})})})})]})}export{E as default};