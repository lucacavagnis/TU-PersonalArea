import{j as t,a as r,F as s}from"./app.73e76765.js";import{T as e}from"./Table.b1087b63.js";import{A as l}from"./ActionColumn.19b7e7d4.js";import{I as m}from"./InstantSubmitInput.7b2fb3ee.js";const p=({sub:o=!1,...d})=>{let i=d.categories.data;const n=o?"admin.subcategories.":"admin.categories.";return t(e,{route:route(n+"index"),children:[r(e.Search,{}),i&&i.length>0?t(s,{children:[t(e.Inner,{children:[t(e.HeaderRow,{children:[r(e.Header,{name:"id",sortable:!0,children:"ID"}),r(e.Header,{name:"name",sortable:!0,children:"Nome"}),r(e.Header,{})]}),r(e.Body,{children:i.map(a=>t(e.Row,{children:[r(e.Field,{children:a.id}),r(e.Field,{children:r(m,{id:a.id,routeName:n+"update",name:"name",defaultValue:a.name})}),r(l,{del:route(n+"destroy",a.id)})]},a.id))})]}),r(e.Pagination,{paginated:d.categories})]}):r("p",{children:"Nessuna categoria presente"})]})};export{p as C};