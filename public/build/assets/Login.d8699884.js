import{u as f,r as h,j as s,a as e,H as g}from"./app.8fceedcb.js";import{C as b}from"./Checkbox.f402a091.js";import{G as x,D as w}from"./DefaultButton.f494d7fc.js";import{I as o}from"./InputError.8a5a20a3.js";import{I as n}from"./InputLabel.0c429293.js";import{T as i}from"./TextInput.33f1910d.js";import"./tw-merge.25811ea8.js";import"./ApplicationLogo.c4759f31.js";function H({status:m,canResetPassword:N}){const{data:t,setData:c,post:d,processing:u,errors:l,reset:p}=f({email:"",password:"",remember:""});h.exports.useEffect(()=>()=>{p("password")},[]);const r=a=>{c(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return s(x,{children:[e(g,{title:"Log in"}),m&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:m}),s("form",{onSubmit:a=>{a.preventDefault(),d(route("login"))},children:[s("div",{children:[e(n,{forInput:"email",value:"Email"}),e(i,{type:"text",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,handleChange:r}),e(o,{message:l.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(n,{forInput:"password",value:"Password"}),e(i,{type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",handleChange:r}),e(o,{message:l.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:s("label",{className:"flex items-center",children:[e(b,{name:"remember",value:t.remember,handleChange:r}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Ricordami"})]})}),e("div",{className:"flex items-center justify-end mt-4",children:e(w,{className:"ml-4",processing:u,children:"Log in"})})]})]})}export{H as default};