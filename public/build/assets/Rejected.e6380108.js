import{j as r,a as e,H as a}from"./app.73e76765.js";import{A as t}from"./AuthenticatedLayout.71b1ea15.js";import{B as o}from"./Button.1ebd24a1.js";import{T as s}from"./Tab.fa1f7e8c.js";import"./ApplicationLogo.63312593.js";import"./transition.f8bd1af7.js";import"./ProductImage.264793d6.js";import"./tw-merge.25811ea8.js";function p(i){return console.log(i),r(t,{auth:i.auth,errors:i.errors,header:"Rifiutato",children:[e(a,{title:"Ordine rifiutato"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e(s,{children:r("div",{className:"w-2/3 text-center mr-auto ml-auto mb-4 pb-4 border-b b-grey-500",children:[e("h1",{className:"font-bold",children:"Hai rifiutato l'ordine"}),e("p",{className:"mb-2",children:"L'ordine \xE8 stato rifiutato con successo. Una notifica via mail \xE8 stata inviata al referente dell'ordine"}),e("div",{className:"flex justify-center",children:e(o,{type:"link",href:route("orders.index"),children:"Visualizza ordini"})})]})})})})]})}export{p as default};