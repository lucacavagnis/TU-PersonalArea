import{a as i,j as e,F as d,H as n}from"./app.363ed9f1.js";import{A as c}from"./AuthenticatedLayout.c4b6d95e.js";import{T as s}from"./Tab.2e64c000.js";import{T as r}from"./Table.6ff21a5f.js";import{B as m}from"./Button.340eadde.js";import"./attempt.53acf198.js";import{P as l}from"./Protocol.1726cfb1.js";import"./ApplicationLogo.64869274.js";import"./transition.13d8f845.js";import"./index.esm.c5a33117.js";import"./ProductImage.01070709.js";import"./BackgorundImage.34bc7331.js";import"./tw-merge.25811ea8.js";import"./TextInput.69fd9cda.js";import"./Pagination.23cd9209.js";import"./String.081073ca.js";const h=t=>{let a=t.protocols.data;return i(r,{route:route("protocols.index"),children:[e(r.Search,{}),a&&a.length>0?i(d,{children:[i(r.Inner,{children:[i(r.HeaderRow,{children:[e(r.Header,{name:"type",sortable:!0,children:"Tipo"}),e(r.Header,{name:"date",sortable:!0,children:"Data"}),e(r.Header,{name:"referral",sortable:!0,children:"Riferimento"}),e(r.Header,{name:"expiring_date",sortable:!0,children:"Data di scadenza"}),e(r.Header,{})]}),e(r.Body,{children:a.map(o=>i(r.Row,{children:[e(r.Field,{children:l.typeText(o)}),e(r.Field,{children:l.getDate(o)}),e(r.Field,{children:o.referral}),e(r.Field,{children:l.getExpireDate(o)}),e(r.Field,{children:e(m,{href:route("protocols.show",o.id),kind:"tertiary",children:"Dettagli"})})]},o.id))})]}),e(r.Pagination,{paginated:t.protocols})]}):e("p",{children:"Nessun protocollo presente"})]})};function R(t){return i(c,{auth:t.auth,errors:t.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Protocolli"}),children:[e(n,{title:"Protocolli"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e(s,{children:e(h,{protocols:t.protocols,inputs:t.inputs})})})})]})}export{R as default};