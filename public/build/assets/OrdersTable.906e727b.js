import{a,j as r,F as n}from"./app.b45b0f29.js";import{T as e}from"./Table.f86d7ea8.js";import{B as s}from"./Button.8357217c.js";import{S as l}from"./Status.2380ce67.js";import"./attempt.6b05409a.js";import"./Protocol.1726cfb1.js";function f(t){let i=t.orders.data;return a(e,{route:route("orders.index"),children:[r(e.Search,{}),i&&i.length>0?a(n,{children:[a(e.Inner,{children:[a(e.HeaderRow,{children:[r(e.Header,{name:"ioc",sortable:!0,children:"Codice interno"}),r(e.Header,{name:"status",sortable:!0,children:"Status"}),r(e.Header,{name:"place.address_first_line",sortable:!0,children:"Indirizzo"}),r(e.Header,{name:"date",sortable:!0,children:"Data"}),r(e.Header,{})]}),r(e.Body,{children:i.map(d=>a(e.Row,{children:[r(e.Field,{children:d.ioc}),r(e.Field,{children:r(l,{status:d.status})}),a(e.Field,{children:[d.place.address_first_line," ",r("br",{})," ",d.place.address_second_line]}),r(e.Field,{children:d.date}),r(e.Field,{children:r(s,{href:route("orders.show",d.id),kind:"tertiary",children:"Dettagli"})})]},d.id))})]}),r(e.Pagination,{paginated:t.orders})]}):r("p",{children:"Nessun ordine presente"})]})}export{f as O};
