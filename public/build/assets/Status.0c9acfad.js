import{j as r,a as s}from"./app.701c8412.js";function c({status:t}){let e,a;switch(t){case"pending":e="bg-amber-500",a="In attesa";break;default:case"approved":e="bg-green-500",a="Approvato";break;case"rejected":e="bg-rose-500",a="Rifiutato";break}return r("div",{className:"",children:[s("div",{className:"block w-3 h-3 mr-4 rounded-full inline-block "+e}),a]})}export{c as S};
