import{r,a as s}from"./app.73e76765.js";function d({name:o,className:t,required:a,isFocused:c,handleChange:i,children:n}){const e=r.exports.useRef();return r.exports.useEffect(()=>{c&&e.current.focus()},[]),s("div",{className:"flex flex-col items-start",children:s("textarea",{name:o,className:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm "+t,ref:e,required:a,onChange:f=>i(f),children:n})})}export{d as T};
