import{a as i,j as t,H as s}from"./app.363ed9f1.js";import{A as l}from"./AuthenticatedLayout.c4b6d95e.js";import{B as d}from"./Button.340eadde.js";import{T as n}from"./Tab.2e64c000.js";import{S as m}from"./Status.d6bd5ef0.js";import"./ApplicationLogo.64869274.js";import"./transition.13d8f845.js";import"./index.esm.c5a33117.js";import"./ProductImage.01070709.js";import"./BackgorundImage.34bc7331.js";import"./tw-merge.25811ea8.js";function a({title:r,value:e,className:o}){return i("div",{className:"border-b -slate-500 flex justify-between py-2 "+(o||""),children:[t("span",{className:"font-bold ",children:r}),t("span",{className:"text-sm",children:e})]})}function y(r){const e=r.order;return i(l,{auth:r.auth,errors:r.errors,header:"Gestito",children:[t(s,{title:"Ordine gi\xE0 gestito"}),t("div",{className:"py-12",children:t("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t(n,{children:i("div",{className:"w-2/3 text-center mr-auto ml-auto mb-4 pb-4",children:[t("h1",{className:"font-bold",children:"L'ordine \xE8 gi\xE0 stato gestito"}),t(a,{title:"Stato ordine",value:t(m,{status:e.status})}),t(a,{title:"Approvato da",value:e.approver.name}),t(a,{title:"Approvato il",value:e.approved_at}),t("div",{className:"flex justify-center",children:t(d,{type:"link",href:route("orders.show",e.id),children:"Visualizza ordine"})})]})})})})]})}export{y as default};
