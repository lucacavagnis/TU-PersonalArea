import{a as t,j as l,H as d}from"./app.701c8412.js";import{A as m}from"./AuthenticatedLayout.c6eeb50b.js";import{P as n}from"./ProductListDetails.906d7f4a.js";import{P as s,D as e}from"./Show.74f3d3d8.js";import{P as a}from"./Protocol.5412cada.js";import{f as c}from"./String.db95b830.js";import"./ApplicationLogo.195ea916.js";import"./transition.dfaf50e0.js";import"./Button.8e427060.js";import"./tw-merge.25811ea8.js";import"./ProductImage.9596a1e1.js";import"./Tab.c8dc8a01.js";import"./attempt.42f53801.js";import"./ReservedPrice.432d9723.js";import"./string.7842d782.js";import"./Status.0c9acfad.js";function A(i){const r=i.protocol,p=r.lots.length>0?r.lots.map(o=>t(s,{product:o.product,original_price:o.protocol_lot.original_price,price:o.protocol_lot.price,qty:o.qty_total})):t("p",{children:"Nessun prodotto presente"});return t("div",{children:l(m,{auth:i.auth,errors:i.errors,header:"Protocollo del "+c(new Date(r.date),"dd/MM/yyyy"),children:[t(d,{children:t("title",{children:"Protocollo del "+c(new Date(r.date),"dd/MM/yyyy")})}),t("div",{className:"py-12",children:t("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:l(n,{products:p,title:"Dettagli protocollo",children:[t(e,{title:"Tipo",children:t("span",{children:a.typeText(r)})}),t(e,{title:"Riferimento",children:t("span",{children:r.referral})}),t(e,{title:"Data",children:a.getDate(r)}),t(e,{title:"Scdenza",children:a.getExpireDate(r)})]})})})]})})}export{A as default};
