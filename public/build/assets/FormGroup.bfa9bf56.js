import{g as u,h as f,l as w,_ as e,p as F,k as x,j as G,i as d}from"./Close.0e3a87e0.js";import{r as C,j as y}from"./app.363ed9f1.js";import{p as g,q as h}from"./InputAdornment.0011bc57.js";function j(o){return u("MuiFormGroup",o)}f("MuiFormGroup",["root","row","error"]);const M=["className","row"],R=o=>{const{classes:r,row:t,error:s}=o;return d({root:["root",t&&"row",s&&"error"]},j,r)},S=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),U=C.exports.forwardRef(function(r,t){const s=F({props:r,name:"MuiFormGroup"}),{className:a,row:l=!1}=s,c=x(s,M),i=g(),m=h({props:s,muiFormControl:i,states:["error"]}),n=e({},s,{row:l,error:m.error}),p=R(n);return y(S,e({className:G(p.root,a),ownerState:n,ref:t},c))}),D=U;export{D as F};