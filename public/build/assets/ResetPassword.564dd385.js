import{u as w,r as h,j as a,a as s,H as v}from"./app.701c8412.js";import{G as g,D as N}from"./DefaultButton.c55049c8.js";import{I as m}from"./InputError.1af7c138.js";import{I as n}from"./InputLabel.161bbc3d.js";import{T as l}from"./TextInput.404c8393.js";import"./ApplicationLogo.195ea916.js";function y({token:i,email:d}){const{data:t,setData:p,post:u,processing:c,errors:o,reset:f}=w({token:i,email:d,password:"",password_confirmation:""});h.exports.useEffect(()=>()=>{f("password","password_confirmation")},[]);const r=e=>{p(e.target.name,e.target.value)};return a(g,{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),u(route("password.update"))},children:[a("div",{children:[s(n,{forInput:"email",value:"Email"}),s(l,{type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:r}),s(m,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{forInput:"password",value:"Password"}),s(l,{type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:r}),s(m,{message:o.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{forInput:"password_confirmation",value:"Confirm Password"}),s(l,{type:"password",name:"password_confirmation",value:t.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:r}),s(m,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(N,{className:"ml-4",processing:c,children:"Reset Password"})})]})]})}export{y as default};