import{u as v,j as e,a as l,r as g,F as N,H as w}from"./app.b45b0f29.js";import{A as y}from"./AuthenticatedLayout.22f35c7e.js";import{B as m}from"./Button.8357217c.js";import{P as k}from"./ProductImage.a5603c41.js";import{P as C}from"./Pagination.4105353b.js";import{T as _}from"./TextInput.716bcada.js";import{C as P}from"./Checkbox.0dc63e9f.js";import"./ApplicationLogo.bbdd66d7.js";import"./transition.54d2eece.js";import"./index.esm.5d9c0766.js";import"./tw-merge.25811ea8.js";import"./BackgorundImage.d3e17cbc.js";const D=({open:t,toggleOpen:a,input:o})=>{var u,p,b;const{data:r,setData:n,get:i,processing:c}=v("Filters",{search:(u=o.search)!=null?u:"",order:(p=o.search)!=null?p:"name",out_of_stock:(b=o.out_of_stock)!=null?b:!0}),d=s=>{n(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)},x=s=>{s.preventDefault(),i(route("products.dashboard"),{only:["products","input"],preserveState:!0,preserveScroll:!0})};return e("div",{className:(t?"":"opacity-0 pointer-events-none")+" fixed translate-all duration-300 w-full h-screen top-0 left-0 bg-gray-900/30 z-50 cursor-pointer",onClick:s=>a(s),children:l("div",{className:(t?"right-0":"-right-full")+" absolute overflow-y-scroll scrollbar-hide translate-all duration-700 top-0 right-0 w-96 h-screen bg-white py-4 px-8 flex flex-col justify-between cursor-auto",onClick:s=>{s.stopPropagation()},children:[l("div",{className:"",children:[e(h,{name:"Cerca",height:"h-20",children:e(_,{containerClassName:"w-full mt-2",className:"w-full",type:"text",name:"search",placeholder:"Digita per cercare...",handleChange:d,value:r.search})}),l(h,{name:"Ordina per",height:"h-32",children:[e(f,{name:"order",value:"name",label:"Nome",handleChange:d,checked:r.order==="name"}),e(f,{name:"order",value:"sku",label:"Protocollo",handleChange:d,checked:r.order==="prot_number"})]}),e(h,{name:"Disponibilit\xE0",height:"h-24",children:e(F,{name:"out_of_stock",label:"Esauriti",checked:r.out_of_stock,handleChange:d})})]}),e(m,{processing:c,disbaled:c,type:"submit",className:"w-full py-3",onClick:s=>x(s),children:"Filtra"})]})})},F=({name:t,label:a,checked:o,handleChange:r})=>l("label",{className:"block mb-2 pl-2",children:[e(P,{name:t,checked:o,handleChange:r,className:"mr-2"})," ",a]}),f=({name:t,label:a,value:o,checked:r,handleChange:n})=>l("label",{className:"block mb-2 pl-2",children:[e("input",{type:"radio",name:t,value:o,className:"h-3 w-3 mr-2",onChange:n,checked:r})," ",a]}),h=({name:t,height:a,children:o})=>{const[r,n]=g.exports.useState(!1),i=c=>{c.preventDefault(),n(d=>!d)};return l(N,{children:[l("div",{className:"relative py-4",children:[e("span",{children:t}),e("span",{onClick:c=>i(c),className:"absolute right-0 top-1/2 -translate-y-1/2",children:e(j,{open:r})})]}),e("div",{className:(r?a+" py-1":"h-0 opacity-0")+" transition-all overflow-hidden",children:o})]})},j=({open:t})=>l("div",{className:"relative w-4 h-4 cursor-pointer",children:[e("div",{className:(t?"":"rotate-90")+" h-[1px] w-full bg-slate-900 absolute top-1/2 left-0 -translate-y-1/2 transition-all"}),e("div",{className:" h-[1px] w-full bg-slate-900 absolute top-1/2 left-0 -translate-y-1/2 transition-all"})]}),q=D;function J(t){let a=t.products.data;const[o,r]=g.exports.useState(!1),n=i=>{i&&i.preventDefault(),r(c=>!c)};return a=a.map(i=>e(B,{product:i,available:t.available})),l(y,{auth:t.auth,errors:t.errors,header:"Prodotti",children:[e(w,{title:"Prodotti"}),e(q,{open:o,toggleOpen:n,input:t.input}),e("div",{className:"py-12",children:l("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[l("div",{className:"flex justify-between items-center mb-4",children:[e("h3",{className:"font-semibold text-lg mb-2 ",children:t.input.search&&"Risultati per: "+t.input.search}),e(m,{onClick:n,children:"Filtra e Ordina"})]}),a.length>0&&l("div",{children:[e("ul",{className:"flex flex-wrap",children:a}),e(C,{class:"mt-6",links:t.products.links})]}),a.length<=0&&e("p",{children:"Nessun prodotto disponibile"})]})})]})}const B=({product:t})=>{const a=" font-semibold border-2 block rounded p-1 bg-white absolute top-6 w-fit ";return e("li",{className:" bg-white overflow-hidden shadow-sm sm:rounded-lg w-[calc(25%-1rem)] mr-2 ml-2 mb-4",children:l("div",{className:"p-6 bg-white border-b border-gray-200 h-full flex flex-col justify-between relative",children:[l("div",{children:[e(k,{name:t.image,className:"h-48"}),e("span",{className:"tex-sm uppercase text-slate-500",children:t.sku}),e("h3",{className:"font-bold text-sm uppercase mb-2",children:t.name})]}),l("div",{children:[t.qty_available-t.qty_requested>0?e("p",{className:a+" font-semibold text-green-700 border-green-700",children:t.qty_available-t.qty_requested+" Disponbili"}):e("p",{className:a+" text-red-700 font-semibold border-2 border-red-700 block rounded p-1 w-fit",children:"Esaurito"}),e(m,{href:route("products.show",t.id),children:"Visualizza"})]})]})},t.id)};export{J as default};
