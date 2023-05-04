import{j as a,a as e,L as o,H as d,F as c}from"./app.7ec90238.js";import{A as m}from"./AuthenticatedLayout.8ecf9796.js";import{T as h}from"./Tab.0482e2d9.js";import{P as u}from"./ProductImage.d34cd59f.js";import{R as p}from"./ReservedPrice.055f237b.js";import{s as f}from"./string.919d7112.js";import{S as b}from"./Status.a8a0b7d5.js";import{B as n}from"./Button.265d2887.js";import{P as g}from"./ProductListDetails.b24ae40c.js";import"./Protocol.8a54e017.js";function x({product:r,original_price:t,price:l,qty:s}){return a(h,{className:"relative p-4 flex justify-between ",containerClassName:"mb-4",children:[e("div",{className:"w-1/4 mr-4 min-h-[8em]",children:e(u,{name:r.image,className:"w-full h-full rounded-md"})}),a("div",{className:"w-3/4 relative",children:[e("h3",{className:"uppercase text-slate-500 text-sm",children:r.sku}),e("h2",{className:"font-bold hover:underline",children:e(o,{href:route("products.show",r.id),children:r.name})}),e("p",{className:"line-clamp-3 mb-4",children:r.desc}),a("div",{className:"flex items-baseline",children:[e("span",{className:"font-bold text-indigo-800 mr-4",children:s+" unit\xE0"})," ",e(p,{fullPrice:t,reservedPrice:l,className:"text-lg"})]})]})]},r.id)}function N(r){console.log(r);const t=r.order,l=t.order_products.length>0?t.order_products.map(s=>e(x,{product:s.lot.product,original_price:s.lot.product.last_original_price,price:s.lot.product.last_price,qty:s.quantity})):e("p",{children:"Nessun prodotto presente"});return console.log(r),a(m,{auth:r.auth,errors:r.errors,header:a("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:["Ordine #",t.id]}),children:[e(d,{title:"Ordine #"+t.id+" | Ordini"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"flex w-full",children:a(g,{products:l,title:"Dettagli ordine",children:[t.status&&t.approver&&t.approved_at&&t.status!=="pending"&&a(c,{children:[e("h2",{className:"font-bold mb-4",children:"Stato"}),e(i,{title:"stato attuale",children:e(b,{status:t.status})}),e(i,{title:"gestito da",children:t.approver.name}),e(i,{title:"Data gestione",children:t.approved_at})]}),e("h2",{className:"font-bold mb-4",children:"Dati"}),a(i,{title:"referente",children:[e("span",{children:t.user.name}),a("a",{className:"block text-sm text-indigo-500",href:"mailto:"+t.user.email,children:[" ",t.user.email]})]}),e(i,{title:"ufficio",children:t.office}),a(i,{title:"indirizzo",children:[e("span",{children:t.place.address_first_line}),e("span",{className:"block",children:t.place.address_second_line})]}),t.status&&t.status==="pending"&&r.auth.user.company.supervision&&r.auth.user.role===1&&a("div",{className:"flex",children:[e(n,{className:"mr-2",href:route("orders.approve",t.id),children:"Approva"}),e(n,{className:"bg-white text-rose-700 border border-rose-700 hover:bg-rose-700 hover:text-white",href:route("orders.reject",t.id),children:"Rifiuta"})]})]})})})})]})}const i=({title:r,children:t})=>a("div",{children:[e("h4",{className:"font-bold",children:f.capitalize(r)}),e("p",{className:"mb-2 border-b border-slate-300 pb-2 text-slate-700",children:t})]}),z=Object.freeze(Object.defineProperty({__proto__:null,default:N,DataParagraph:i},Symbol.toStringTag,{value:"Module"}));export{i as D,x as P,z as S};
