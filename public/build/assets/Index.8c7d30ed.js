import{j as d,a as e,F as c,H as s}from"./app.701c8412.js";import{A as m}from"./AdminLayout.da740535.js";import{T as u}from"./Tab.c8dc8a01.js";import{T as r}from"./Table.5afe908a.js";import{A as h}from"./ActionColumn.330abb1f.js";import{P as p}from"./ProductImage.9596a1e1.js";import{B as g}from"./Button.8e427060.js";import"./ApplicationLogo.195ea916.js";import"./transition.dfaf50e0.js";import"./index.esm.e45dea00.js";import"./tw-merge.25811ea8.js";import"./TextInput.404c8393.js";import"./Pagination.02ccbf5e.js";import"./String.db95b830.js";import"./ActionButton.1e32e0be.js";const x=a=>{let n=a.products.data;function o(t,l){var i=t.split(" ");return i.splice(l,i.length-1),i.join(" ")+(i.length!==t.split(" ").length?"...":"")}return d(r,{route:route("admin.products.index"),children:[e(r.Search,{}),n&&n.length>0?d(c,{children:[d(r.Inner,{children:[d(r.HeaderRow,{children:[e(r.Header,{className:"mr-4",children:"Immagine"}),e(r.Header,{name:"company_id",sortable:!0,children:"Azienda"}),e(r.Header,{name:"sku",sortable:!0,children:"SKU"}),e(r.Header,{name:"name",sortable:!0,children:"Nome"}),e(r.Header,{name:"desc",sortable:!0,children:"Descrizione"}),e(r.Header,{name:"category_id",sortable:!0,children:"Catgeoria"}),e(r.Header,{name:"subcategory_id",sortable:!0,children:"Sottocategoria"}),e(r.Header,{})]}),e(r.Body,{children:n.map(t=>d(r.Row,{children:[e(r.Field,{children:e(p,{name:t.image,className:"h-8 w-8"})}),e(r.Field,{children:t.company.name}),e(r.Field,{children:t.sku}),e(r.Field,{children:o(t.name,5)}),e(r.Field,{children:o(t.desc,5)}),e(r.Field,{children:t.category.name}),e(r.Field,{children:t.subcategory.name}),e(h,{read:route("admin.products.show",t.id),update:route("admin.products.edit",t.id),del:route("admin.products.destroy",t.id)})]},t.id))})]}),e(r.Pagination,{paginated:a.products})]}):e("p",{children:"Nessun prodotto presente"})]})};function B(a){return console.log(a),d(m,{auth:a.auth,errors:a.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Prodotti"}),children:[e(s,{title:"Aziende"}),e("div",{className:"py-12",children:e("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white shadow-sm sm:rounded-lg",children:d(u,{children:[e(x,{products:a.products,inputs:a.inputs}),e(g,{type:"link",href:route("admin.products.create"),children:"Crea nuovo"})]})})})})]})}export{B as default};
