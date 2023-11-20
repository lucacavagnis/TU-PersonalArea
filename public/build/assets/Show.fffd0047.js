import{r as A,a as h,j as o,R as y,F as M,d as R,H as q}from"./app.363ed9f1.js";import{A as z}from"./AdminLayout.b4f5157d.js";import{T as S}from"./Tab.2e64c000.js";import{ProductDataTab as G}from"./Show.13e1844f.js";import{F as j}from"./String.081073ca.js";import{g as O,h as E,q as k,l as x,c as n,_ as u,t as N,p as F,k as U,m as H,j as K,i as Q,v as X,w as W}from"./Close.0e3a87e0.js";import{S as J,A as V}from"./Alert.67031798.js";import{B as Y}from"./ClickAwayListener.3bc0bcd2.js";import{D as Z}from"./DataGrid.bb03f3d9.js";import{i as rr,a as er,G as tr}from"./itIT.6fb8bf58.js";import{M as ar}from"./index.esm.c5a33117.js";import"./ApplicationLogo.64869274.js";import"./transition.13d8f845.js";import"./tw-merge.25811ea8.js";import"./AuthenticatedLayout.c4b6d95e.js";import"./Button.340eadde.js";import"./ProductImage.01070709.js";import"./BackgorundImage.34bc7331.js";import"./ReservedPrice.38b5727d.js";import"./TextInput.69fd9cda.js";import"./Product.2753c164.js";import"./Table.6ff21a5f.js";import"./Pagination.23cd9209.js";import"./Box.9f6d6e5f.js";import"./CircularProgress.02bb978b.js";import"./InputAdornment.0011bc57.js";import"./Checkbox.e80ebbbf.js";import"./Switch.eaa593d5.js";function or(r){return O("MuiLinearProgress",r)}E("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const ir=["className","color","value","valueBuffer","variant"];let f=r=>r,I,B,T,_,D,w;const P=4,nr=k(I||(I=f`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),sr=k(B||(B=f`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),lr=k(T||(T=f`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),cr=r=>{const{classes:e,variant:t,color:i}=r,m={root:["root",`color${n(i)}`,t],dashed:["dashed",`dashedColor${n(i)}`],bar1:["bar",`barColor${n(i)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar",t!=="buffer"&&`barColor${n(i)}`,t==="buffer"&&`color${n(i)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return Q(m,or,e)},L=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?X(r.palette[e].main,.62):W(r.palette[e].main,.5),dr=x("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${n(t.color)}`],e[t.variant]]}})(({ownerState:r,theme:e})=>u({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:L(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),mr=x("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${n(t.color)}`]]}})(({ownerState:r,theme:e})=>{const t=L(e,r.color);return u({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},N(_||(_=f`
    animation: ${0} 3s infinite linear;
  `),lr)),ur=x("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${n(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&e.bar1Indeterminate,t.variant==="determinate"&&e.bar1Determinate,t.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>u({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${P}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${P}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&N(D||(D=f`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),nr)),fr=x("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${n(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&e.bar2Indeterminate,t.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>u({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:L(e,r.color),transition:`transform .${P}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&N(w||(w=f`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),sr)),br=A.exports.forwardRef(function(e,t){const i=F({props:e,name:"MuiLinearProgress"}),{className:m,color:b="primary",value:l,valueBuffer:p,variant:s="indeterminate"}=i,$=U(i,ir),a=u({},i,{color:b,variant:s}),c=cr(a),g=H(),v={},C={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&l!==void 0){v["aria-valuenow"]=Math.round(l),v["aria-valuemin"]=0,v["aria-valuemax"]=100;let d=l-100;g.direction==="rtl"&&(d=-d),C.bar1.transform=`translateX(${d}%)`}if(s==="buffer"&&p!==void 0){let d=(p||0)-100;g.direction==="rtl"&&(d=-d),C.bar2.transform=`translateX(${d}%)`}return h(dr,u({className:K(c.root,m),ownerState:a,role:"progressbar"},v,{ref:t},$,{children:[s==="buffer"?o(mr,{className:c.dashed,ownerState:a}):null,o(ur,{className:c.bar1,ownerState:a,style:C.bar1}),s==="determinate"?null:o(fr,{className:c.bar2,ownerState:a,style:C.bar2})]}))}),pr=br;function hr(r){return o(er,{children:o(Y,{color:"primary",startIcon:"+",onClick:()=>{R.Inertia.get(route("admin.products.manage",r.id))},variant:"contained",children:"Gestisci lotti"})})}function gr({lots:r,product:e}){const[t,i]=y.useState(r),[m,b]=y.useState(null),[l]=y.useState(!1),p=()=>b(null),s=a=>()=>{l(!0),axios.delete(route("admin.lots.destroy",a)).then(c=>{l(!1),b({children:c.data.text,severity:c.data.severity}),i(t.filter(g=>g.id!==a))}).catch(()=>{l(!1),b({children:"Errore durante la richiesta. Contatta l'assistenza web@tutto-ufficio.it",severity:"error"})})};return h(M,{children:[o(Z,{rows:t,columns:[{field:"id",headerName:"Id",flex:.5},{field:"qty_available",headerName:"Qt.\xE0 disponbile",flex:1,type:"number",align:"left",headerAlign:"left"},{field:"qty_total",headerName:"Qt.\xE0 totale",flex:1,type:"number",align:"left",headerAlign:"left"},{field:"protocol",headerName:"Protocollo",flex:1,type:"string",valueGetter:a=>a.row.protocolLot&&a.row.protocolLot.protocol?a.row.protocolLot.protocol.referral:"--"},{field:"date",headerName:"Data",flex:1,type:"date",valueFormatter:a=>j(a.value)},{field:"actions",type:"actions",headerName:"Azioni",width:100,cellClassName:"actions",getActions:({id:a})=>[o(tr,{icon:o(ar,{className:"text-red-700"}),label:"Elimina",color:"inherit",onClick:s(a),className:"!text-red-700"})]}],localeText:rr.components.MuiDataGrid.defaultProps.localeText,slots:{toolbar:hr,loadingOverlay:pr},slotProps:{toolbar:{id:e.id}}}),!!m&&o(J,{open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:p,autoHideDuration:5e3,children:o(V,{...m,onClose:p})})]})}function Kr(r){return h(z,{auth:r.auth,errors:r.errors,header:o("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Prodotti"}),children:[o(q,{title:"Prodotti"}),o("div",{className:"py-12",children:h("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:[o(G,{product:r.product}),h(S,{className:"h-80",containerClassName:"h-80",children:[o("h2",{className:"font-semibold mb-4",children:"Lotti del prodotto"}),o(gr,{lots:r.product.lots,product:r.product,protocols:r.protocols})]})]})})]})}export{Kr as default};
