import{a as r,u as x,j as n}from"./app.aa1f3dfb.js";import{B as v}from"./Button.cff7c94a.js";import{T as w}from"./TextInput.df6004f3.js";import{I as o}from"./InputLabel.c5c71f8d.js";import{T as I}from"./TextArea.c012ee25.js";import{S as p}from"./Select.bfa08357.js";import{P as C}from"./ProductImage.b8f2e0d1.js";import{t as F}from"./tw-merge.25811ea8.js";const N=({name:i,onChange:l})=>r("input",{className:`text-sm text-grey-500\r file:mr-5 file:py-2 file:px-6\r file:rounded file:border-0\r file:text-sm file:font-medium\r file:bg-indigo-700 file:text-white\r hover:file:cursor-pointer hover:file:bg-indigo-500\r hover:file:text-white\r
`,type:"file",name:i,onChange:s=>l(s)}),A=({default_value:i,companies:l,categories:s,subcategories:g})=>{let a;i?a=i:a={name:"",sku:"",desc:"",company:l[0],category:s[0],subcategory:g[0],image:null};const{data:c,setData:f,post:h}=x({name:a.name,sku:a.sku,desc:a.desc,company_id:a.company.id,category_id:a.category.id,subcategory_id:a.subcategory.id,image:a.image,_method:i?"put":null});console.log(c);const y=e=>{e.preventDefault,i?h(route("admin.products.update",a.id),{method:"put"}):h(route("admin.products.store"))},u=e=>{e.preventDefault(),f(e.target.name,e.target.type==="file"?e.target.files[0]:e.target.value)},m=e=>d=>{f(e,d)},b=e=>{console.log(e);const d="w-20 h-20";return!e||typeof e=="string"||e instanceof String?r(C,{name:e,className:d}):r("img",{src:URL.createObjectURL(e),className:d,alt:"Product image"})};return n(t,{children:[r(t.Row,{children:n(t.Field,{className:"flex items-center",children:[r("div",{className:"mr-4",children:b(c.image)}),n("div",{children:[r(o,{forInput:"image",value:"Immagine",required:!1,className:"mb-2"}),r(N,{name:"image",onChange:u,value:c.image})]})]})}),n(t.Row,{children:[n(t.Field,{children:[r(o,{forInput:"name",value:"Nome",required:!0}),r(w,{name:"name",handleChange:e=>u(e),value:c.name,required:!0,className:"w-full"})]}),n(t.Field,{children:[r(o,{forInput:"sku",value:"SKU",required:!0}),r(w,{name:"sku",handleChange:e=>u(e),value:c.sku,required:!0,className:"w-full"})]})]}),r(t.Row,{children:n(t.Field,{children:[r(o,{forInput:"desc",value:"Descrizione",required:!1}),r(I,{name:"desc",handleChange:e=>u(e),className:"w-full h-[200px]",children:c.desc})]})}),n(t.Row,{children:[n(t.Field,{children:[r(o,{forInput:"company",value:"Azienda",required:!0}),r(p,{people:l,onChange:m("company_id"),initial:a.company,getName:e=>e.id+" - "+e.name})]}),n(t.Field,{children:[r(o,{forInput:"catgeory",value:"Categeoria",required:!0}),r(p,{people:s,onChange:m("category_id"),initial:a.category})]}),n(t.Field,{children:[r(o,{forInput:"subcategpry",value:"Sottocategeoria",required:!1}),r(p,{people:g,onChange:m("subcategory_id"),initial:a.subcategory})]})]}),i?r(v,{type:"button",onClick:e=>y(e),children:"Modifica"}):r(v,{type:"button",onClick:e=>y(e),children:"Aggiungi"})]})},t=({children:i})=>r("form",{children:i}),k=({children:i})=>r("div",{className:"flex justify-between w-full [&>first]:ml-0 [&>last]:mr-0 [&>*]:mx-2 [&>*]:w-full mb-4",children:i}),q=({children:i,widthClass:l,className:s})=>r("div",{className:F(l,s," [&>*]>w-full"),children:i});t.Row=k;t.Field=q;export{A as P};