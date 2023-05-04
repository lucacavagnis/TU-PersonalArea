import{a as e,u as C,j as a,L as f,H as w,d as p}from"./app.7ec90238.js";import{T as I,A as q}from"./AuthenticatedLayout.8ecf9796.js";import{T as h}from"./Tab.0482e2d9.js";import{B as b}from"./Button.265d2887.js";import{T as c}from"./TextInput.3875c2b5.js";import{I as i}from"./InputLabel.dd7424ff.js";import{I as d}from"./InputError.7148dab6.js";import{T as k}from"./TextArea.426c790c.js";import{P as F}from"./ProductListDetails.b24ae40c.js";import{P}from"./ProductImage.d34cd59f.js";import{b as T}from"./String.ccfadc51.js";import{I as D}from"./InstantSubmitInput.a4b5ce1f.js";import"./ApplicationLogo.a8defbd8.js";import"./transition.8c82694b.js";import"./tw-merge.25811ea8.js";import"./attempt.0d6344b5.js";import"./Protocol.8a54e017.js";function j(s){const n=(s.disabled?"bg-blue-400 cursor-default":"bg-blue-700 cursor-pointer hover:bg-blue-600")+" block w-fit rounded-md font-medium text-sm text-slate-50 py-2 px-4 mt-4 transition-colors  "+s.className,{className:m,...l}=s;return e(b,{className:n+" "+m,...l,children:s.children})}function Q(s){console.log(s);const n=s.auth.user.cart,{post:m,data:l,setData:v,errors:o}=C({office:"",ioc:"",country:"",province:"",city:"",postal_code:"",address:"",notes:""}),r=t=>{v(t.target.name,t.target.value)},N=t=>{t.preventDefault(),m(route("orders.store"))},y=(t,u)=>{t.preventDefault(),p.Inertia.visit(route("cart.destroy",u),{method:"delete"})},g=t=>{t.preventDefault(),p.Inertia.visit(route("cart.empty"),{method:"delete"})},x=n.products.map(t=>(t.product.id+"",a(h,{className:"relative p-4 flex justify-between ",containerClassName:"mb-4",children:[e("div",{className:"w-1/4 mr-4 min-h-[8em]",children:e(P,{name:t.product.image,className:"w-full h-full rounded-md"})}),a("div",{className:"w-3/5 relative flex flex-col justify-between",children:[a("div",{children:[e(f,{className:"font-semibold hover:underline truncate",href:route("products.show",t.product.id),children:t.product.name}),e("p",{className:"text-sm text-indigo-700",children:"Da "+t.lots.length+" "+T("lotto","lotti",t.lots.length)})]}),a("div",{className:"flex items-center",children:[e(D,{id:t.product.id,defaultValue:t.qty,name:"qty",type:"number",min:0,max:t.product.qty_available,className:"mt-1 block right-0 bottom-0 mr-2",routeName:"cart.update"}),e("p",{children:"/ "+t.product.qty_available+" disponibili"})]})]}),e("div",{className:"w-1/6 relative",children:e(I,{className:"absolute right-0 scale-75 top-0 cursor-pointer",onClick:u=>y(u,t.product.id)})})]},t.product.id)));return a(q,{auth:s.auth,errors:s.errors,header:"Riepilogo ordine",children:[e(w,{title:"Home"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:n.products.length>0?e(F,{products:x,children:a("form",{onSubmit:N,children:[a("div",{className:"mb-2 border-b b-grey-500 pb-5",children:[e("h2",{className:"font-bold mb-4",children:"Dati referente e ordine"}),a("div",{className:"mb-4",children:[e(i,{forInput:"office",value:"Ufficio",required:!0}),e(c,{type:"text",name:"office",value:l.office,className:"mt-1 block w-full",autoComplete:"office",required:!0,isFocused:!1,handleChange:r}),e(d,{message:o.office,className:"mt-2"})]}),a("div",{className:"mb-4",children:[e(i,{forInput:"ioc",value:"Codice ordine (Codice di riferimento interno)"}),e(c,{title:"Codice di riferimento intenro",type:"text",name:"ioc",value:l.ioc,className:"mt-1 block w-full",autoComplete:"ioc",required:!1,isFocused:!1,handleChange:r}),e(d,{message:o.ioc,className:"mt-2"})]})]}),a("div",{className:"mb-2 border-b b-grey-500 py-5",children:[e("h2",{className:"font-bold mb-4",children:"Dati spedizione"}),a("div",{className:"flex justify-between",children:[e("div",{className:"w-1/2 mr-2",children:a("div",{className:"mb-4",children:[e(i,{forInput:"country",value:"Stato",required:!0}),e(c,{type:"text",name:"country",value:l.country,className:"mt-1 block w-full",autoComplete:"country",required:!0,isFocused:!1,handleChange:r}),e(d,{message:o.country,className:"mt-2"})]})}),e("div",{className:"w-1/2 ml-2",children:a("div",{className:"mb-4",children:[e(i,{forInput:"province",value:"Provincia(XX)",required:!0}),e(c,{pattern:"[A-Za-z]{2}",type:"text",name:"province",value:l.province,className:"mt-1 block w-full",autoComplete:"province",required:!0,isFocused:!1,handleChange:r,placeholder:"MI"}),e(d,{message:o.province,className:"mt-2"})]})})]}),a("div",{className:"flex justify-between",children:[e("div",{className:"w-1/2 mr-2",children:a("div",{className:"mb-4",children:[e(i,{forInput:"city",value:"Citt\xE0",required:!0}),e(c,{type:"text",name:"city",value:l.city,className:"mt-1 block w-full",autoComplete:"city",required:!0,isFocused:!1,handleChange:r}),e(d,{message:o.city,className:"mt-2"})]})}),e("div",{className:"w-1/2 ml-2",children:a("div",{className:"mb-4",children:[e(i,{forInput:"postal_code",value:"CAP",required:!0}),e(c,{pattern:"[0-9]{5}",type:"text",name:"postal_code",value:l.postal_code,className:"mt-1 block w-full",autoComplete:"postal_code",required:!0,isFocused:!1,handleChange:r}),e(d,{message:o.postal_code,className:"mt-2"})]})})]}),a("div",{className:"mb-4",children:[e(i,{forInput:"address",value:"Indirizzo (Via e n\xB0 civico)",required:!0}),e(c,{type:"text",name:"address",value:l.address,className:"mt-1 block w-full",autoComplete:"address",required:!1,isFocused:!1,handleChange:r}),e(d,{message:o.address,className:"mt-2"})]})]}),e("div",{className:"mb-2 border-b b-grey-500 py-5",children:a("div",{className:"mb-4",children:[e(i,{forInput:"notes",value:"Note",required:!0}),e(k,{name:"notes",value:l.address,className:"mt-1 block w-full",autoComplete:"address",required:!1,isFocused:!1,handleChange:r})]})}),e(b,{type:"submit",className:"w-full py-4 text-center text-lg",children:"Invia ordine"}),e("div",{className:"w-full text-center py-4",children:e(f,{as:"button",className:"text-center text-indigo-700 font-semibold",onClick:t=>g(t),children:"Svuota il carrello"})})]})}):n.products.length<=0&&a(h,{children:[e("h2",{className:"font-bold",children:"Il tuo carrello \xE8 vuoto"}),e("p",{children:"Aggiungi pordotti al tuo carrello per procedere con l'ordine."}),e(j,{type:"link",href:route("products.dashboard"),children:"Visualizza prodotti"})]})})})]})}export{Q as default};
