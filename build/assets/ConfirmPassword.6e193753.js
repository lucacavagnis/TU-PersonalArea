import{u,r as d,a as e,j as s,H as c}from"./app.78351115.js";import{G as p,D as f}from"./DefaultButton.d8295e4f.js";import{I as w}from"./InputError.3013fedc.js";import{I as h}from"./InputLabel.3e65c07c.js";import{T as g}from"./TextInput.33b7277f.js";import"./ApplicationLogo.7addb485.js";function y(){const{data:r,setData:t,post:o,processing:m,errors:n,reset:i}=u({password:""});d.exports.useEffect(()=>()=>{i("password")},[]);const l=a=>{t(a.target.name,a.target.value)};return e(p,{children:[s(c,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),e("form",{onSubmit:a=>{a.preventDefault(),o(route("password.confirm"))},children:[e("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(g,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,handleChange:l}),s(w,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(f,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{y as default};
