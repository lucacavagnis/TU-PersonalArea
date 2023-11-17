import{u as a,a as t,j as e,H as o,L as l}from"./app.b45b0f29.js";import{G as d,D as m}from"./DefaultButton.474300f0.js";import"./ApplicationLogo.bbdd66d7.js";function g({status:i}){const{post:s,processing:n}=a();return t(d,{children:[e(o,{title:"Email Verification"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),i==="verification-link-sent"&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e("form",{onSubmit:r=>{r.preventDefault(),s(route("verification.send"))},children:t("div",{className:"mt-4 flex items-center justify-between",children:[e(m,{processing:n,children:"Resend Verification Email"}),e(l,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900",children:"Log Out"})]})})]})}export{g as default};
