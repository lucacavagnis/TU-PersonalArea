import{j as r,R as y,a as f,u as q}from"./app.363ed9f1.js";import{B as F}from"./Button.340eadde.js";import{i as U}from"./BackgorundImage.34bc7331.js";import{T as A}from"./Tab.2e64c000.js";import{e as V,h as b,k as P,T as G,A as O,n as Z}from"./InputAdornment.0011bc57.js";import{C as K}from"./Checkbox.e80ebbbf.js";import{r as Y,i as H,a as W,d as J}from"./Close.91e35d50.js";import{l as _,y as Q}from"./Close.0e3a87e0.js";import{B as X}from"./Box.9f6d6e5f.js";import{F as ee}from"./FormGroup.bfa9bf56.js";const M={},te=(t,n)=>{let e={};return t.forEach(a=>{e[a.id]=!!(n&&n.categories&&n.categories.find(l=>l.id===a.id))}),e},ie=(t,n,e)=>{const a=(l,m,o=0)=>{let c=[];return l.map(s=>{if(s.parent_id===m){const p=a(l,s.id,o+30);c.push(r(V,{style:{paddingLeft:o+"px"},value:s.id,control:r(K,{name:s.id.toString(),checked:n[s.id],onChange:e}),label:s.name.charAt(0).toUpperCase()+s.name.slice(1)},s.id)),c.push(p)}}),c};return a(t,null,0)};M.Input=ie;M.Data=te;var N={},ne=H.exports;Object.defineProperty(N,"__esModule",{value:!0});var S=N.default=void 0,ae=ne(Y()),re=W,oe=(0,ae.default)((0,re.jsx)("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");S=N.default=oe;const le=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],se=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],ue=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],ce=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],k=(t,n,e)=>{let a=t;return typeof n=="string"||Array.isArray(n)?a=t.toLocaleString(n,e):(n===!0||e!==void 0)&&(a=t.toLocaleString(void 0,e)),a};function z(t,n){if(!Number.isFinite(t))throw new TypeError(`Expected a finite number, got ${typeof t}: ${t}`);n={bits:!1,binary:!1,space:!0,...n};const e=n.bits?n.binary?ce:ue:n.binary?se:le,a=n.space?" ":"";if(n.signed&&t===0)return` 0${a}${e[0]}`;const l=t<0,m=l?"-":n.signed?"+":"";l&&(t=-t);let o;if(n.minimumFractionDigits!==void 0&&(o={minimumFractionDigits:n.minimumFractionDigits}),n.maximumFractionDigits!==void 0&&(o={maximumFractionDigits:n.maximumFractionDigits,...o}),t<1){const d=k(t,n.locale,o);return m+d+a+e[0]}const c=Math.min(Math.floor(n.binary?Math.log(t)/Math.log(1024):Math.log10(t)/3),e.length-1);t/=(n.binary?1024:1e3)**c,o||(t=t.toPrecision(3));const s=k(Number(t),n.locale,o),p=e[c];return m+s+a+p}const de=_("label")`
  position: relative;
  flex-grow: 1;

  input {
    opacity: 0 !important;
  }

  & > span {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
  }

  span.MuiFileInput-placeholder {
    color: gray;
  }
`,me=_("div")`
  display: flex;
  width: 100%;

  & > span {
    display: block;
  }

  & > span:first-of-type {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & > span:last-of-type {
    flex-shrink: 0;
    display: block;
  }
`,D={Label:de,Filename:me},pe=y.forwardRef((t,n)=>{const{text:e,isPlaceholder:a,placeholder:l,...m}=t,o=y.useId();return f(D.Label,{htmlFor:o,children:[r("input",{...m,ref:n,id:o}),e?r("span",{"aria-placeholder":l,className:a?"MuiFileInput-placeholder":"",children:typeof e=="string"?e:f(D.Filename,{children:[r("span",{children:e.filename}),f("span",{children:[".",e.extension]})]})}):null]})});function fe(t){return t.length>0}function he(t){return t.reduce((n,e)=>n+e.size,0)}function B(t){return typeof window<"u"&&t instanceof File}function ge(t){return Array.from(t)}function be(t){var a;const n=(B(t)?t.name:((a=t[0])==null?void 0:a.name)||"").split("."),e=n.pop();return{filename:n.join("."),extension:e}}const ye=(t,n)=>{var w;const{value:e,onChange:a,disabled:l,getInputText:m,getSizeText:o,placeholder:c,hideSizeText:s,inputProps:p,InputProps:d,multiple:g,className:v,...x}=t,i=y.useRef(null),u=g||(p==null?void 0:p.multiple)||((w=d==null?void 0:d.inputProps)==null?void 0:w.multiple)||!1,R=()=>{const h=i.current;h&&(h.value="")},E=h=>{const I=h.target.files,T=I?ge(I):[];R(),a==null||a(u?T:T[0])},L=h=>{h.preventDefault(),!l&&(a==null||a(g?[]:null))},C=Array.isArray(e)?fe(e):B(e),j=()=>e===null||Array.isArray(e)&&e.length===0?c||"":typeof m=="function"&&e!==void 0?m(e):e&&C?Array.isArray(e)&&e.length>1?`${e.length} files`:be(e):"",$=()=>{if(typeof o=="function"&&e!==void 0)return o(e);if(C){if(Array.isArray(e)){const h=he(e);return z(h)}if(B(e))return z(e.size)}return""};return r(b,{ref:n,type:"file",disabled:l,onChange:E,className:`MuiFileInput-TextField ${v||""}`,InputProps:{startAdornment:r(P,{position:"start",children:r(S,{})}),endAdornment:f(P,{position:"end",style:{visibility:C?"visible":"hidden"},children:[s?null:r(G,{variant:"caption",mr:"2px",className:"MuiFileInput-Typography-size-text",children:$()}),r(Q,{"aria-label":"Clear",title:"Clear",size:"small",disabled:l,className:"MuiFileInput-IconButton",onClick:L,children:r(J,{fontSize:"small"})})]}),...d,inputProps:{text:j(),multiple:u,isPlaceholder:e===null||Array.isArray(e)&&e.length===0,ref:i,placeholder:c,...p,...d==null?void 0:d.inputProps},inputComponent:pe},...x})},ve=y.forwardRef(ye),Pe=({product:t,companies:n,categories:e,subcategories:a})=>{let l;const m=M;t?l={...t}:l={name:"",sku:"",desc:"",company:n[0],category_id:e[0].id,subcategory_id:a[0].id,image:null},l.categories=m.Data(e,t),l._method=t?"put":null;const{data:o,setData:c,post:s}=q(l),p=i=>{i.preventDefault,t?s(route("admin.products.update",t.id),{method:"put"}):s(route("admin.products.store"))},d=i=>{c(i.target.name,i.target.value)},g=(i,u)=>{c(i,u)},v=(i,u)=>{c("company",u)},x=i=>{const u="m-1 mx-auto rounded mb-4 h-64";return i?r("img",{src:!i||typeof i=="string"||i instanceof String?U(i):URL.createObjectURL(i),className:u,alt:"Product image"}):null};return f("div",{className:"flex",children:[f(A,{containerClassName:"w-2/3 mr-4",children:[r("h2",{className:"font-bold",children:"Dettagli prodotto"}),f(X,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"},"& .MuiOutlinedInput-input":{boxShadow:"none"},"& > div":{my:"1em"}},noValidate:!0,autoComplete:"off",children:[r(b,{name:"name",onChange:i=>d(i),value:o.name,required:!0,label:"Name"}),r(b,{name:"sku",onChange:i=>d(i),value:o.sku,required:!0,label:"SKU",pattern:"[A-Za-z0-9]+",helperText:"Lo SKU \xE8 univoco e non pu\xF2 contenere spazi o punti."}),r(O,{className:"inline-flex !mt-0 !mb-0",disablePortal:!0,id:"combo-box-demo",options:n,sx:{width:300},renderInput:i=>r(b,{...i,label:"Azienda",name:"company"}),onChange:(i,u)=>v(i,u),value:o.company,isOptionEqualToValue:(i,u)=>i.id===u.id,getOptionLabel:i=>i.name,disableClearable:!0}),r(Z,{name:"desc",onChange:i=>d(i),className:"w-full h-full m-1 rounded",minRows:5,value:o.desc,placeholder:"Una breve descrizione del prodotto..."}),f("div",{className:"flex items-baseline",children:[t?r(F,{type:"button",onClick:i=>p(i),children:"Modifica"}):r(F,{type:"button",onClick:i=>p(i),children:"Aggiungi"}),r(F,{href:route("admin.products.index"),className:"ml-4 bg-transparent text-blue-900 hover:bg-slate-200",children:"Annulla"})]})]})]}),f("div",{className:"w-1/3 ml-4",children:[f(A,{containerClassName:"mb-4",children:[r("h2",{className:"font-bold",children:"Immagine in evidenza"}),x(o.image),r(ve,{id:"file_input",name:"image",onChange:i=>g("image",i),value:o.image,label:"Image",className:"!w-full"})]}),f(A,{children:[r("h2",{className:"font-bold",children:"Categorie"}),r(ee,{children:m.Input(e,o.categories,i=>{const u={...o};u.categories[i.target.name]=i.target.checked,c(u)})})]})]})]})};export{Pe as P};
