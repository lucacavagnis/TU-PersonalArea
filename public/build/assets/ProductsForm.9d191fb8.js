import{a as t,u as x,j as n}from"./app.7ec90238.js";import{B as v}from"./Button.265d2887.js";import{T as w}from"./TextInput.3875c2b5.js";import{I as o}from"./InputLabel.dd7424ff.js";import{T as I}from"./TextArea.426c790c.js";import{S as p}from"./Select.606d03ce.js";import{P as C}from"./ProductImage.d34cd59f.js";import{t as F}from"./tw-merge.25811ea8.js";const N=({name:i,onChange:l})=>t("input",{className:`text-sm text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded file:border-0 file:text-sm file:font-medium file:bg-indigo-700 file:text-white hover:file:cursor-pointer hover:file:bg-indigo-500 hover:file:text-white
`,type:"file",name:i,onChange:s=>l(s)}),A=({default_value:i,companies:l,categories:s,subcategories:g})=>{let a;i?a=i:a={name:"",sku:"",desc:"",company:l[0],category:s[0],subcategory:g[0],image:null};const{data:c,setData:f,post:h}=x({name:a.name,sku:a.sku,desc:a.desc,company_id:a.company.id,category_id:a.category.id,subcategory_id:a.subcategory.id,image:a.image,_method:i?"put":null});console.log(c);const y=e=>{e.preventDefault,i?h(route("admin.products.update",a.id),{method:"put"}):h(route("admin.products.store"))},u=e=>{e.preventDefault(),f(e.target.name,e.target.type==="file"?e.target.files[0]:e.target.value)},m=e=>d=>{f(e,d)},b=e=>{console.log(e);const d="w-20 h-20";return!e||typeof e=="string"||e instanceof String?t(C,{name:e,className:d}):t("img",{src:URL.createObjectURL(e),className:d,alt:"Product image"})};return n(r,{children:[t(r.Row,{children:n(r.Field,{className:"flex items-center",children:[t("div",{className:"mr-4",children:b(c.image)}),n("div",{children:[t(o,{forInput:"image",value:"Immagine",required:!1,className:"mb-2"}),t(N,{name:"image",onChange:u,value:c.image})]})]})}),n(r.Row,{children:[n(r.Field,{children:[t(o,{forInput:"name",value:"Nome",required:!0}),t(w,{name:"name",handleChange:e=>u(e),value:c.name,required:!0,className:"w-full"})]}),n(r.Field,{children:[t(o,{forInput:"sku",value:"SKU",required:!0}),t(w,{name:"sku",handleChange:e=>u(e),value:c.sku,required:!0,className:"w-full"})]})]}),t(r.Row,{children:n(r.Field,{children:[t(o,{forInput:"desc",value:"Descrizione",required:!1}),t(I,{name:"desc",handleChange:e=>u(e),className:"w-full h-[200px]",children:c.desc})]})}),n(r.Row,{children:[n(r.Field,{children:[t(o,{forInput:"company",value:"Azienda",required:!0}),t(p,{people:l,onChange:m("company_id"),initial:a.company,getName:e=>e.id+" - "+e.name})]}),n(r.Field,{children:[t(o,{forInput:"catgeory",value:"Categeoria",required:!0}),t(p,{people:s,onChange:m("category_id"),initial:a.category})]}),n(r.Field,{children:[t(o,{forInput:"subcategpry",value:"Sottocategeoria",required:!1}),t(p,{people:g,onChange:m("subcategory_id"),initial:a.subcategory})]})]}),i?t(v,{type:"button",onClick:e=>y(e),children:"Modifica"}):t(v,{type:"button",onClick:e=>y(e),children:"Aggiungi"})]})},r=({children:i})=>t("form",{children:i}),k=({children:i})=>t("div",{className:"flex justify-between w-full [&>first]:ml-0 [&>last]:mr-0 [&>*]:mx-2 [&>*]:w-full mb-4",children:i}),q=({children:i,widthClass:l,className:s})=>t("div",{className:F(l,s," [&>*]>w-full"),children:i});r.Row=k;r.Field=q;export{A as P};
