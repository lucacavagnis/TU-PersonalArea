import{j as t,a as l,H as d}from"./app.363ed9f1.js";import{A as m}from"./AuthenticatedLayout.c4b6d95e.js";import{P as n}from"./ProductListDetails.0cb4ba46.js";import{P as s,D as e}from"./Show.a85b1460.js";import{P as a}from"./Protocol.1726cfb1.js";import{f as p}from"./String.081073ca.js";import"./ApplicationLogo.64869274.js";import"./transition.13d8f845.js";import"./Button.340eadde.js";import"./tw-merge.25811ea8.js";import"./index.esm.c5a33117.js";import"./ProductImage.01070709.js";import"./BackgorundImage.34bc7331.js";import"./Tab.2e64c000.js";import"./attempt.53acf198.js";import"./moment.9709ab41.js";import"./ReservedPrice.38b5727d.js";import"./Status.d6bd5ef0.js";function T(i){const r=i.protocol,c=r.lots.length>0?r.lots.map(o=>t(s,{product:o.product,original_price:o.protocol_lot.original_price,price:o.protocol_lot.price,qty:o.qty_total})):t("p",{children:"Nessun prodotto presente"});return t("div",{children:l(m,{auth:i.auth,errors:i.errors,header:"Protocollo del "+p(new Date(r.date),"dd/MM/yyyy"),children:[t(d,{children:t("title",{children:"Protocollo del "+p(new Date(r.date),"dd/MM/yyyy")})}),t("div",{className:"py-12",children:t("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:l(n,{products:c,title:"Dettagli protocollo",children:[t(e,{title:"Tipo",children:t("span",{children:a.typeText(r)})}),t(e,{title:"Riferimento",children:t("span",{children:r.referral})}),t(e,{title:"Data",children:a.getDate(r)}),t(e,{title:"Scdenza",children:a.getExpireDate(r)})]})})})]})})}export{T as default};
