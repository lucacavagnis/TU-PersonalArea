import{j as l,a as e,H as n}from"./app.8fceedcb.js";import{A as c}from"./AuthenticatedLayout.dde961ca.js";import{T as o}from"./Tab.c7584405.js";import{O as h}from"./OrdersTable.6c48cc49.js";import{T as s}from"./Table.1cc9768a.js";import{B as u}from"./Button.46b3af01.js";import{S as p}from"./Status.06b9d6c8.js";import{s as N}from"./string.e00f2f9d.js";import"./ApplicationLogo.c4759f31.js";import"./transition.9f935d28.js";import"./ProductImage.1ce9d611.js";import"./tw-merge.25811ea8.js";import"./attempt.f798c26e.js";import"./Protocol.8a54e017.js";import"./String.ccfadc51.js";import"./TextInput.33f1910d.js";import"./Pagination.a8f5b8d5.js";import"./index.esm.3388e302.js";function f({orders:t}){const i=["w-1/6","w-1/6","w-1/6","w-1/3","w-1/6","w-1/12","w-1/6"],d="pt-4 pb-4";return l(s,{children:[l(s.Row,{className:"text-slate-500 pb-2 pt-2 border-b border-t border-slate-100",children:[e(s.Field,{className:i[0],children:"Codice interno"}),e(s.Field,{className:i[1],children:"Referente"}),e(s.Field,{className:i[2],children:"Status"}),e(s.Field,{className:i[3],children:"Indirizzo"}),e(s.Field,{className:i[4],children:"Data"}),e(s.Field,{className:i[5],children:"Qt.\xE0"}),e(s.Field,{className:i[6],children:"Azioni"})]}),t.map(a=>{let r=0;return a.order_products.map(m=>{r+=m.quantity}),l(s.Row,{className:"border-b border-slate-100 text-sm "+d,children:[e(s.Field,{className:i[0],children:N.upperCase(a.ioc)}),l(s.Field,{className:i[1]+" text-sm",children:[a.user.name,e("br",{}),e("a",{href:"mailto:"+a.user.email,className:"text-indigo-500",children:a.user.email})]}),e(s.Field,{className:i[2],children:e(p,{status:a.status})}),l(s.Field,{className:i[3],children:[a.place.address_first_line," ",e("br",{})," ",a.place.address_second_line]}),e(s.Field,{className:i[4],children:a.date}),e(s.Field,{className:i[5],children:r}),e(s.Field,{className:i[6],children:e(u,{type:"link",kind:"tertiary",href:route("orders.show",a.id),className:"mt-0 align-middle",children:"Dettagli"})})]},a.id)})]})}function B(t){console.log(t);let i=t.orders;return l(c,{auth:t.auth,errors:t.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Ordini"}),children:[e(n,{title:"Ordini"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e(o,{children:t.auth.user.role===1&&t.auth.user.company.supervision?e(f,{orders:i,inputs:t.inputs}):e(h,{orders:i,inputs:t.inputs})})})})]})}export{B as default};