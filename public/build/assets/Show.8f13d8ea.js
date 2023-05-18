import{j as r,a as t,F as h,u as b,H as y}from"./app.9cf53d96.js";import{A as f}from"./AdminLayout.cdcab52c.js";import{T as v}from"./Tab.4553dcd7.js";import{B as x}from"./Button.aeed048a.js";import{ProductDataTab as _}from"./Show.d649580b.js";import{T as e}from"./Table.b8327e0c.js";import{A as N}from"./ActionColumn.67fbbe54.js";import{a as c}from"./String.ccfadc51.js";import{I as n}from"./InstantSubmitInput.4abf0c1e.js";import{T as m}from"./TextInput.404d7ca3.js";import{I as s}from"./InputLabel.b1193c5c.js";import"./ApplicationLogo.255706c0.js";import"./transition.7ecc9aaa.js";import"./index.esm.ccc05c29.js";import"./tw-merge.25811ea8.js";import"./AuthenticatedLayout.71bc2f5c.js";import"./ProductImage.9b221e88.js";import"./ReservedPrice.6d37e2aa.js";import"./Product.6202ec26.js";import"./Pagination.490ae011.js";import"./ActionButton.6b4d2f32.js";const g=o=>{console.log(o);let d=o.lots.data,i=o.product;return r(e,{route:route("admin.products.show",i.id),children:[t(e.Search,{}),d&&d.length>0?r(h,{children:[r(e.Inner,{children:[r(e.HeaderRow,{children:[t(e.Header,{name:"id",sortable:!0,children:"ID"}),t(e.Header,{name:"date",sortable:!0,children:"Data"}),t(e.Header,{name:"qty_total",sortable:!0,children:"Qt.\xE0 totale"}),t(e.Header,{name:"qty_available",sortable:!0,children:"Qt.\xE0 disponibile"}),t(e.Header,{children:"Protocollo"}),t(e.Header,{})]}),t(e.Body,{children:d.map(a=>r(e.Row,{children:[r(e.Field,{children:[a.id,"                                        "]}),"                            ",t(e.Field,{children:t(n,{defaultValue:c(a.date),type:"date",id:a.id,name:"date",routeName:"admin.lots.update"})}),t(e.Field,{children:t(n,{min:0,defaultValue:a.qty_total,type:"number",id:a.id,name:"qty_total",routeName:"admin.lots.update"})}),t(e.Field,{children:t(n,{min:0,max:a.qty_total,defaultValue:a.qty_available,type:"number",id:a.id,name:"qty_available",routeName:"admin.lots.update"})}),t(e.Field,{children:a.protocol_lot?a.protocol_lot.protocol.referral:void 0}),t(N,{del:route("admin.lots.destroy",a.id)})]},a.id))})]}),t(e.Pagination,{paginated:o.lots})]}):t("p",{children:"Nessun lotto presente"})]})};function J(o){const{data:d,setData:i,post:a}=b({id:o.product.id,protocol_id:null,date:c(Date()),qty_available:0,qty_total:0}),p=()=>{a(route("admin.lots.store"))},l=u=>{i(u.target.name,u.target.value)};return r(f,{auth:o.auth,errors:o.errors,header:t("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Prodotti"}),children:[t(y,{title:"Aziende"}),t("div",{className:"py-12",children:r("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:[t(_,{product:o.product}),r(v,{children:[t("h2",{className:"font-semibold mb-4 border-b ",children:"Lotti del prodotto"}),t(g,{lots:o.lots,product:o.product}),r("div",{className:"flex py-4 pt-4 border-t border-indigo-300",children:[r("div",{className:"mr-4",children:[t(s,{forInput:"date",value:"Data",className:"mb-2"}),t(m,{type:"date",name:"date",value:d.date,handleChange:l})]}),r("div",{className:"mr-4",children:[t(s,{forInput:"date",value:"Qt.\xE0 totale",className:"mb-2"}),t(m,{type:"number",name:"qty_total",value:d.qty_total,min:0,handleChange:l})]}),r("div",{className:"mr-4",children:[t(s,{forInput:"date",value:"Qt.\xE0 disponibile",className:"mb-2"}),t(m,{type:"number",name:"qty_available",value:d.qty_available,min:0,max:d.qty_total,handleChange:l,className:"min-w-[8rem]"})]}),t(x,{type:"button",onClick:p,children:"Aggiungi"})]})]})]})})]})}export{J as default};