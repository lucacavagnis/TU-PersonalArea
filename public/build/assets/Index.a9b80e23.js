import{j as t,d as o,a as r,H as l}from"./app.363ed9f1.js";import{A as m}from"./AdminLayout.b4f5157d.js";import{T as d}from"./Tab.2e64c000.js";import"./attempt.53acf198.js";import{h as a}from"./moment.9709ab41.js";import"./Protocol.1726cfb1.js";import{g as n}from"./String.081073ca.js";import{B as s}from"./Box.9f6d6e5f.js";import{E as c}from"./Edit.9354bd3c.js";import{D as p}from"./DataGrid.bb03f3d9.js";import{i as h,G as i}from"./itIT.6fb8bf58.js";import{G as u}from"./GridToolbar.bc4aca3f.js";import{M as f}from"./index.esm.c5a33117.js";import{B as x}from"./Button.340eadde.js";import"./ApplicationLogo.64869274.js";import"./transition.13d8f845.js";import"./tw-merge.25811ea8.js";import"./Close.0e3a87e0.js";import"./InputAdornment.0011bc57.js";import"./ClickAwayListener.3bc0bcd2.js";import"./Checkbox.e80ebbbf.js";import"./Switch.eaa593d5.js";import"./CircularProgress.02bb978b.js";const g=[{field:"id",headerName:"ID",width:90},{field:"company",headerName:"Azienda",width:150,valueGetter:e=>`${e.row.company.name}`},{field:"date",headerName:"Data",width:150,valueFormatter:e=>a(e.value).format("DD/MM/YYYY")},{field:"expiring_date",headerName:"Data scadenza",width:150,valueFormatter:e=>a(e.value).format("DD/MM/YYYY")},{field:"type",headerName:"Tipo",width:200,valueFormatter:e=>n(e.value)},{field:"referral",headerName:"Riferimento",flex:1},{field:"actions",type:"actions",headerName:"Azioni",width:100,cellClassName:"actions",getActions:({id:e})=>[t(i,{icon:t(c,{}),label:"Modifica",color:"inherit",onClick:()=>{o.Inertia.get(route("admin.protocols.edit",e))},showInMenu:!0}),t(i,{icon:t(f,{className:"text-red-700"}),label:"Elimina",color:"inherit",onClick:()=>{o.Inertia.delete(route("admin.protocols.destroy",e))},className:"!text-red-700",showInMenu:!0})]}],w=({protocols:e})=>t(s,{sx:{height:600,width:"100%"},children:t(p,{rows:e,columns:g,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5],disableRowSelectionOnClick:!0,localeText:h.components.MuiDataGrid.defaultProps.localeText,props:{Toolbar:u},autoPageSize:!0})});function U(e){return r(m,{auth:e.auth,errors:e.errors,header:t("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Protocolli"}),children:[t(l,{title:"Protocolli"}),t("div",{className:"py-12",children:t("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:t("div",{className:"bg-white shadow-sm sm:rounded-lg",children:r(d,{children:[t(w,{protocols:e.protocols}),t(x,{type:"link",href:route("admin.protocols.create"),children:"Crea nuovo"})]})})})})]})}export{U as default};