import{a as t,j as e,F as l,u as c,H as u}from"./app.b45b0f29.js";import{A as h}from"./AdminLayout.42cbd391.js";import{T as g}from"./Tab.0b6397fc.js";import{B as p}from"./Button.8357217c.js";import{T as a}from"./Table.f86d7ea8.js";import{A as f,a as b}from"./AddNewLine.5bc63b3d.js";import{I as x}from"./InstantSubmitInput.bc0d3624.js";import{I as N}from"./InputLabel.3443e952.js";import{T as I}from"./TextInput.716bcada.js";import"./ApplicationLogo.bbdd66d7.js";import"./transition.54d2eece.js";import"./tw-merge.25811ea8.js";import"./Pagination.4105353b.js";import"./String.081073ca.js";import"./ActionButton.ba32aa4d.js";const v=({sub:i=!1,...s})=>{let o=s.categories.data;const n=i?"admin.subcategories.":"admin.categories.";return t(a,{route:route(n+"index"),children:[e(a.Search,{}),o&&o.length>0?t(l,{children:[t(a.Inner,{children:[t(a.HeaderRow,{children:[e(a.Header,{name:"id",sortable:!0,children:"ID"}),e(a.Header,{name:"name",sortable:!0,children:"Nome"}),e(a.Header,{})]}),e(a.Body,{children:o.map(r=>t(a.Row,{children:[e(a.Field,{children:r.id}),e(a.Field,{children:e(x,{id:r.id,routeName:n+"update",name:"name",defaultValue:r.name})}),e(f,{del:route(n+"destroy",r.id)})]},r.id))})]}),e(a.Pagination,{paginated:s.categories})]}):e("p",{children:"Nessuna categoria presente"})]})};function V(i){const{data:s,setData:o,post:n}=c({name:""}),r=()=>{n(route("admin.subcategories.store"))},m=d=>{o(d.target.name,d.target.value)};return t(h,{auth:i.auth,errors:i.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Sottocategorie"}),children:[e(u,{title:"Sottocategorie"}),e("div",{className:"py-12",children:e("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white shadow-sm sm:rounded-lg",children:t(g,{children:[e(v,{categories:i.subcategories,sub:!0}),t(b,{children:[t("div",{className:"mr-4",children:[e(N,{forInput:"name",value:"Nome",className:"mb-2"}),e(I,{name:"name",value:s.name,handleChange:m})]}),e(p,{type:"button",onClick:r,children:"Crea nuovo"})]})]})})})})]})}export{V as default};
