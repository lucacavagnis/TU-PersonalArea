import{r as h,j as e,u as w,a,L as b,H as I,d as v}from"./app.b45b0f29.js";import{T as q,A as k}from"./AuthenticatedLayout.22f35c7e.js";import{T as N}from"./Tab.0b6397fc.js";import{B as g}from"./Button.8357217c.js";import{T as n}from"./TextInput.716bcada.js";import{I as i}from"./InputLabel.3443e952.js";import{I as d}from"./InputError.193be85e.js";import{P as F}from"./ProductListDetails.a01fc6bc.js";import{P}from"./ProductImage.a5603c41.js";import{b as D}from"./String.081073ca.js";import{I as T}from"./InstantSubmitInput.bc0d3624.js";import"./ApplicationLogo.bbdd66d7.js";import"./transition.54d2eece.js";import"./index.esm.5d9c0766.js";import"./tw-merge.25811ea8.js";import"./attempt.6b05409a.js";import"./Protocol.1726cfb1.js";import"./BackgorundImage.d3e17cbc.js";function j({name:s,className:c,required:m,isFocused:r,handleChange:u,children:o}){const l=h.exports.useRef();return h.exports.useEffect(()=>{r&&l.current.focus()},[]),e("div",{className:"flex flex-col items-start",children:e("textarea",{name:s,className:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm "+c,ref:l,required:m,onChange:f=>u(f),children:o})})}function z(s){const c=(s.disabled?"bg-blue-400 cursor-default":"bg-blue-700 cursor-pointer hover:bg-blue-600")+" block w-fit rounded-md font-medium text-sm text-slate-50 py-2 px-4 mt-4 transition-colors  "+s.className,{className:m,...r}=s;return e(g,{className:c+" "+m,...r,children:s.children})}function Y(s){console.log(s);const c=s.auth.user.cart,{post:m,data:r,setData:u,errors:o}=w({office:"",ioc:"",country:"",province:"",city:"",postal_code:"",address:"",notes:""}),l=t=>{u(t.target.name,t.target.value)},f=t=>{t.preventDefault(),m(route("orders.store"))},y=(t,p)=>{t.preventDefault(),v.Inertia.visit(route("cart.destroy",p),{method:"delete"})},x=t=>{t.preventDefault(),v.Inertia.visit(route("cart.empty"),{method:"delete"})},C=c.products.map(t=>a(N,{className:"relative p-4 flex justify-between ",containerClassName:"mb-4",children:[e("div",{className:"w-1/4 mr-4 min-h-[8em]",children:e(P,{name:t.product.image,className:"w-full h-full rounded-md"})}),a("div",{className:"w-3/5 relative flex flex-col justify-between",children:[a("div",{children:[e(b,{className:"font-semibold hover:underline truncate",href:route("products.show",t.product.id),children:t.product.name}),e("p",{className:"text-sm text-indigo-700",children:"Da "+t.lots.length+" "+D("lotto","lotti",t.lots.length)})]}),a("div",{className:"flex items-center",children:[e(T,{id:t.product.id,defaultValue:t.qty,name:"qty",type:"number",min:0,max:t.product.qty_available,className:"mt-1 block right-0 bottom-0 mr-2",routeName:"cart.update"}),e("p",{children:"/ "+t.product.qty_available+" disponibili"})]})]}),e("div",{className:"w-1/6 relative",children:e(q,{className:"absolute right-0 scale-75 top-0 cursor-pointer",onClick:p=>y(p,t.product.id)})})]},t.product.id));return a(k,{auth:s.auth,errors:s.errors,header:"Riepilogo ordine",children:[e(I,{title:"Home"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:c.products.length>0?e(F,{products:C,children:a("form",{onSubmit:f,children:[a("div",{className:"mb-2 border-b b-grey-500 pb-5",children:[e("h2",{className:"font-bold mb-4",children:"Dati referente e ordine"}),a("div",{className:"mb-4",children:[e(i,{forInput:"office",value:"Ufficio",required:!0}),e(n,{type:"text",name:"office",value:r.office,className:"mt-1 block w-full",autoComplete:"office",required:!0,isFocused:!1,handleChange:l}),e(d,{message:o.office,className:"mt-2"})]}),a("div",{className:"mb-4",children:[e(i,{forInput:"ioc",value:"Codice ordine (Codice di riferimento interno)"}),e(n,{title:"Codice di riferimento intenro",type:"text",name:"ioc",value:r.ioc,className:"mt-1 block w-full",autoComplete:"ioc",required:!1,isFocused:!1,handleChange:l}),e(d,{message:o.ioc,className:"mt-2"})]})]}),a("div",{className:"mb-2 border-b b-grey-500 py-5",children:[e("h2",{className:"font-bold mb-4",children:"Dati spedizione"}),a("div",{className:"flex justify-between",children:[e("div",{className:"w-1/2 mr-2",children:a("div",{className:"mb-4",children:[e(i,{forInput:"country",value:"Stato",required:!0}),e(n,{type:"text",name:"country",value:r.country,className:"mt-1 block w-full",autoComplete:"country",required:!0,isFocused:!1,handleChange:l}),e(d,{message:o.country,className:"mt-2"})]})}),e("div",{className:"w-1/2 ml-2",children:a("div",{className:"mb-4",children:[e(i,{forInput:"province",value:"Provincia(XX)",required:!0}),e(n,{pattern:"[A-Za-z]{2}",type:"text",name:"province",value:r.province,className:"mt-1 block w-full",autoComplete:"province",required:!0,isFocused:!1,handleChange:l,placeholder:"MI"}),e(d,{message:o.province,className:"mt-2"})]})})]}),a("div",{className:"flex justify-between",children:[e("div",{className:"w-1/2 mr-2",children:a("div",{className:"mb-4",children:[e(i,{forInput:"city",value:"Citt\xE0",required:!0}),e(n,{type:"text",name:"city",value:r.city,className:"mt-1 block w-full",autoComplete:"city",required:!0,isFocused:!1,handleChange:l}),e(d,{message:o.city,className:"mt-2"})]})}),e("div",{className:"w-1/2 ml-2",children:a("div",{className:"mb-4",children:[e(i,{forInput:"postal_code",value:"CAP",required:!0}),e(n,{pattern:"[0-9]{5}",type:"text",name:"postal_code",value:r.postal_code,className:"mt-1 block w-full",autoComplete:"postal_code",required:!0,isFocused:!1,handleChange:l}),e(d,{message:o.postal_code,className:"mt-2"})]})})]}),a("div",{className:"mb-4",children:[e(i,{forInput:"address",value:"Indirizzo (Via e n\xB0 civico)",required:!0}),e(n,{type:"text",name:"address",value:r.address,className:"mt-1 block w-full",autoComplete:"address",required:!1,isFocused:!1,handleChange:l}),e(d,{message:o.address,className:"mt-2"})]})]}),e("div",{className:"mb-2 border-b b-grey-500 py-5",children:a("div",{className:"mb-4",children:[e(i,{forInput:"notes",value:"Note",required:!1}),e(j,{name:"notes",value:r.address,className:"mt-1 block w-full",autoComplete:"address",required:!1,isFocused:!1,handleChange:l})]})}),e(g,{type:"submit",className:"w-full py-4 text-center text-lg",children:"Invia ordine"}),e("div",{className:"w-full text-center py-4",children:e(b,{as:"button",className:"text-center text-indigo-700 font-semibold",onClick:t=>x(t),children:"Svuota il carrello"})})]})}):c.products.length<=0&&a(N,{children:[e("h2",{className:"font-bold",children:"Il tuo carrello \xE8 vuoto"}),e("p",{children:"Aggiungi pordotti al tuo carrello per procedere con l'ordine."}),e(z,{type:"link",href:route("products.dashboard"),children:"Visualizza prodotti"})]})})})]})}export{Y as default};
