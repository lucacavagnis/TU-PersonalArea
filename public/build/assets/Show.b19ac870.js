import{u as n,a as e,j as o,H as m}from"./app.49974c07.js";import{A as h}from"./AuthenticatedLayout.dbe37321.js";import{T as a}from"./Tab.6c9f6a5b.js";import{B as p}from"./Button.fc16965b.js";import{i as d,a as u}from"./Product.2753c164.js";import"./Table.2bc70265.js";import"./attempt.9a3fe2ac.js";import{O as f}from"./OrdersTable.e25da97a.js";import"./ApplicationLogo.50cd55cd.js";import"./transition.90fac48f.js";import"./ProductImage.47385f62.js";import"./tw-merge.25811ea8.js";import"./TextInput.2a5e1393.js";import"./Pagination.212abf77.js";import"./String.db95b830.js";import"./index.esm.fad004f0.js";import"./Status.3f0997f7.js";import"./Protocol.5412cada.js";function H(r){console.log(r);const t=r.product,s=t.data,c=r.orders,l=t.warehouse_slots;return n({product_data_id:s.id,product_id:t.id,qty:0}),console.log(r),e("div",{children:o(h,{auth:r.auth,errors:r.errors,header:r.product.name,children:[e(m,{children:e("title",{children:r.product.name})}),e("div",{className:"py-12",children:o("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[o("div",{className:"mb-4 flex w-full",children:[e(a,{containerClassName:"w-5/6 mr-2",children:e("div",{className:"flex jusitfy-between",children:o("div",{className:"w-1/2",children:[o("div",{className:"flex items-center",children:[e("h3",{className:"text-slate-500 uppercase mr-4",children:d(t)?"Da Tutto Uffico":"Da Terzi"}),d(t)&&e(p,{kind:"tertiary",href:route("protocols.show",t.protocol_product.protocol.id),children:"Vedi portcollo"})]}),e("p",{children:u(t)?"Conto aperto":"Conto deposito"}),e("p",{children:"Qt.\xE0 iniziale: "+t.qty_total})]})})}),o(a,{containerClassName:"w-1/6 ml-2",children:[e("h3",{className:"font-bold mb-2",children:"Magazzino"}),l.length!==0?l.map(i=>e("p",{className:"py-2 my-1 border-b",children:i.product_location.qty+" in "+i.rack+i.shelf})):e("p",{children:"Non presente in magazzino"})]})]}),o(a,{children:[e("h2",{className:"font-bold mb-4",children:"Ordini di evasione del lotto"}),e(f,{orders:c,inputs:r.inputs})]})]})})]})})}export{H as default};