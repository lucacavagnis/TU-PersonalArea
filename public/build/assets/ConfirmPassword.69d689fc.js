import{u,r as d,j as e,a as s,H as c}from"./app.8fceedcb.js";import{G as p,D as f}from"./DefaultButton.f494d7fc.js";import{I as w}from"./InputError.8a5a20a3.js";import{I as h}from"./InputLabel.0c429293.js";import{T as g}from"./TextInput.33f1910d.js";import"./ApplicationLogo.c4759f31.js";function y(){const{data:r,setData:t,post:o,processing:m,errors:n,reset:i}=u({password:""});d.exports.useEffect(()=>()=>{i("password")},[]);const l=a=>{t(a.target.name,a.target.value)};return e(p,{children:[s(c,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),e("form",{onSubmit:a=>{a.preventDefault(),o(route("password.confirm"))},children:[e("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(g,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,handleChange:l}),s(w,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(f,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{y as default};
