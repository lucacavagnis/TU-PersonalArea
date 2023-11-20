import{r as d,R as F,j as L,a as j,F as ue}from"./app.363ed9f1.js";import{G as ce,s as ee,a as R,b as de,e as pe,u as D,C as T,$,o as O,S as q,y as k,c as fe,p as B,F as ve,d as W,f as be,m as G,W as xe}from"./transition.13d8f845.js";import{d as me}from"./index.esm.c5a33117.js";function he(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor",ariaHidden:"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z",clipRule:"evenodd"}}]})(e)}function te(e,r){let[n,t]=d.exports.useState(e),o=ee(e);return R(()=>t(o.current),[o,t,...r]),n}var J;let ge=0;function X(){return++ge}let H=(J=F.useId)!=null?J:function(){let e=de(),[r,n]=F.useState(e?X:null);return R(()=>{r===null&&n(X())},[r]),r!=null?""+r:void 0};function re(e){return pe?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Y=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var ye=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(ye||{}),Se=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Se||{}),Re=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Re||{}),K=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(K||{});function ne(e,r=0){var n;return e===((n=re(e))==null?void 0:n.body)?!1:D(r,{[0](){return e.matches(Y)},[1](){let t=e;for(;t!==null;){if(t.matches(Y))return!0;t=t.parentElement}return!1}})}function Oe(e,r=n=>n){return e.slice().sort((n,t)=>{let o=r(n),a=r(t);if(o===null||a===null)return 0;let i=o.compareDocumentPosition(a);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function z(e,r,n){let t=ee(r);d.exports.useEffect(()=>{function o(a){t.current(a)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function we(e,r,n=!0){let t=d.exports.useRef(!1);d.exports.useEffect(()=>{requestAnimationFrame(()=>{t.current=n})},[n]);function o(i,l){if(!t.current||i.defaultPrevented)return;let c=function b(p){return typeof p=="function"?b(p()):Array.isArray(p)||p instanceof Set?p:[p]}(e),u=l(i);if(u!==null&&!!u.getRootNode().contains(u)){for(let b of c){if(b===null)continue;let p=b instanceof HTMLElement?b:b.current;if(p!=null&&p.contains(u))return}return!ne(u,K.Loose)&&u.tabIndex!==-1&&i.preventDefault(),r(i,u)}}let a=d.exports.useRef(null);z("mousedown",i=>{var l,c;t.current&&(a.current=((c=(l=i.composedPath)==null?void 0:l.call(i))==null?void 0:c[0])||i.target)},!0),z("click",i=>{!a.current||(o(i,()=>a.current),a.current=null)},!0),z("blur",i=>o(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Z(e){var r;if(e.type)return e.type;let n=(r=e.as)!=null?r:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Ie(e,r){let[n,t]=d.exports.useState(()=>Z(e));return R(()=>{t(Z(e))},[e.type,e.as]),R(()=>{n||!r.current||r.current instanceof HTMLButtonElement&&!r.current.hasAttribute("type")&&t("button")},[n,r]),n}function Le(e){throw new Error("Unexpected object: "+e)}var P=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(P||{});function Pe(e,r){let n=r.resolveItems();if(n.length<=0)return null;let t=r.resolveActiveIndex(),o=t!=null?t:-1,a=(()=>{switch(e.focus){case 0:return n.findIndex(i=>!r.resolveDisabled(i));case 1:{let i=n.slice().reverse().findIndex((l,c,u)=>o!==-1&&u.length-c-1>=o?!1:!r.resolveDisabled(l));return i===-1?i:n.length-1-i}case 2:return n.findIndex((i,l)=>l<=o?!1:!r.resolveDisabled(i));case 3:{let i=n.slice().reverse().findIndex(l=>!r.resolveDisabled(l));return i===-1?i:n.length-1-i}case 4:return n.findIndex(i=>r.resolveId(i)===e.id);case 5:return null;default:Le(e)}})();return a===-1?t:a}function De(e){let r=e.parentElement,n=null;for(;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(n=r),r=r.parentElement;let t=(r==null?void 0:r.getAttribute("disabled"))==="";return t&&Ee(n)?!1:t}function Ee(e){if(!e)return!1;let r=e.previousElementSibling;for(;r!==null;){if(r instanceof HTMLLegendElement)return!1;r=r.previousElementSibling}return!0}function oe(e={},r=null,n=[]){for(let[t,o]of Object.entries(e))ae(n,ie(r,t),o);return n}function ie(e,r){return e?e+"["+r+"]":r}function ae(e,r,n){if(Array.isArray(n))for(let[t,o]of n.entries())ae(e,ie(r,t.toString()),o);else n instanceof Date?e.push([r,n.toISOString()]):typeof n=="boolean"?e.push([r,n?"1":"0"]):typeof n=="string"?e.push([r,n]):typeof n=="number"?e.push([r,`${n}`]):n==null?e.push([r,""]):oe(n,r,e)}let Ne="div";var le=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(le||{});let Te=T(function(e,r){let{features:n=1,...t}=e,o={ref:r,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return $({ourProps:o,theirProps:t,slot:{},defaultTag:Ne,name:"Hidden"})});var v=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(v||{});function $e(e,r,n){let[t,o]=d.exports.useState(n),a=e!==void 0,i=d.exports.useRef(a),l=d.exports.useRef(!1),c=d.exports.useRef(!1);return a&&!i.current&&!l.current?(l.current=!0,i.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!a&&i.current&&!c.current&&(c.current=!0,i.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[a?e:t,O(u=>(a||o(u),r==null?void 0:r(u)))]}var Ce=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ce||{}),Ae=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ae||{}),Fe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Fe||{}),ke=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.SetDisabled=2]="SetDisabled",e[e.SetOrientation=3]="SetOrientation",e[e.GoToOption=4]="GoToOption",e[e.Search=5]="Search",e[e.ClearSearch=6]="ClearSearch",e[e.RegisterOption=7]="RegisterOption",e[e.UnregisterOption=8]="UnregisterOption",e))(ke||{});function Q(e,r=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=Oe(r(e.options.slice()),a=>a.dataRef.current.domRef.current),o=n?t.indexOf(n):null;return o===-1&&(o=null),{options:t,activeOptionIndex:o}}let Me={[1](e){return e.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.disabled||e.listboxState===0)return e;let r=e.activeOptionIndex,{value:n,mode:t,compare:o}=e.propsRef.current,a=e.options.findIndex(i=>{let l=i.dataRef.current.value;return D(t,{[1]:()=>n.some(c=>o(c,l)),[0]:()=>o(n,l)})});return a!==-1&&(r=a),{...e,listboxState:0,activeOptionIndex:r}},[2](e,r){return e.disabled===r.disabled?e:{...e,disabled:r.disabled}},[3](e,r){return e.orientation===r.orientation?e:{...e,orientation:r.orientation}},[4](e,r){var n;if(e.disabled||e.listboxState===1)return e;let t=Q(e),o=Pe(r,{resolveItems:()=>t.options,resolveActiveIndex:()=>t.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...e,...t,searchQuery:"",activeOptionIndex:o,activationTrigger:(n=r.trigger)!=null?n:1}},[5]:(e,r)=>{if(e.disabled||e.listboxState===1)return e;let n=e.searchQuery!==""?0:1,t=e.searchQuery+r.value.toLowerCase(),o=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(i=>{var l;return!i.dataRef.current.disabled&&((l=i.dataRef.current.textValue)==null?void 0:l.startsWith(t))}),a=o?e.options.indexOf(o):-1;return a===-1||a===e.activeOptionIndex?{...e,searchQuery:t}:{...e,searchQuery:t,activeOptionIndex:a,activationTrigger:1}},[6](e){return e.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[7]:(e,r)=>{let n={id:r.id,dataRef:r.dataRef},t=Q(e,o=>[...o,n]);if(e.activeOptionIndex===null){let{value:o,mode:a,compare:i}=e.propsRef.current,l=r.dataRef.current.value;D(a,{[1]:()=>o.some(c=>i(c,l)),[0]:()=>i(o,l)})&&(t.activeOptionIndex=t.options.indexOf(n))}return{...e,...t}},[8]:(e,r)=>{let n=Q(e,t=>{let o=t.findIndex(a=>a.id===r.id);return o!==-1&&t.splice(o,1),t});return{...e,...n,activationTrigger:1}}},V=d.exports.createContext(null);V.displayName="ListboxContext";function M(e){let r=d.exports.useContext(V);if(r===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,M),n}return r}function Ue(e,r){return D(r.type,Me,e,r)}let He=d.exports.Fragment,je=T(function(e,r){let{value:n,defaultValue:t,name:o,onChange:a,by:i=(h,g)=>h===g,disabled:l=!1,horizontal:c=!1,multiple:u=!1,...b}=e;const p=c?"horizontal":"vertical";let y=k(r),[S,x]=$e(n,a,t),m=d.exports.useReducer(Ue,{listboxState:1,propsRef:{current:{value:S,onChange:x,mode:u?1:0,compare:O(typeof i=="string"?(h,g)=>{let N=i;return(h==null?void 0:h[N])===(g==null?void 0:g[N])}:i)}},labelRef:d.exports.createRef(),buttonRef:d.exports.createRef(),optionsRef:d.exports.createRef(),disabled:l,orientation:p,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:s,propsRef:f,optionsRef:E,buttonRef:C},A]=m;f.current.value=S,f.current.mode=u?1:0,R(()=>{f.current.onChange=h=>D(f.current.mode,{[0](){return x(h)},[1](){let g=f.current.value.slice(),{compare:N}=f.current,_=g.findIndex(se=>N(se,h));return _===-1?g.push(h):g.splice(_,1),x(g)}})},[x,f]),R(()=>A({type:2,disabled:l}),[l]),R(()=>A({type:3,orientation:p}),[p]),we([C,E],(h,g)=>{var N;A({type:1}),ne(g,K.Loose)||(h.preventDefault(),(N=C.current)==null||N.focus())},s===0);let w=d.exports.useMemo(()=>({open:s===0,disabled:l,value:S}),[s,l,S]),I={ref:y};return F.createElement(V.Provider,{value:m},F.createElement(fe,{value:D(s,{[0]:B.Open,[1]:B.Closed})},o!=null&&S!=null&&oe({[o]:S}).map(([h,g])=>F.createElement(Te,{features:le.Hidden,...ve({key:h,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:h,value:g})})),$({ourProps:I,theirProps:b,slot:w,defaultTag:He,name:"Listbox"})))}),ze="button",Qe=T(function(e,r){var n;let[t,o]=M("Listbox.Button"),a=k(t.buttonRef,r),i=`headlessui-listbox-button-${H()}`,l=W(),c=O(m=>{switch(m.key){case v.Space:case v.Enter:case v.ArrowDown:m.preventDefault(),o({type:0}),l.nextFrame(()=>{t.propsRef.current.value||o({type:4,focus:P.First})});break;case v.ArrowUp:m.preventDefault(),o({type:0}),l.nextFrame(()=>{t.propsRef.current.value||o({type:4,focus:P.Last})});break}}),u=O(m=>{switch(m.key){case v.Space:m.preventDefault();break}}),b=O(m=>{if(De(m.currentTarget))return m.preventDefault();t.listboxState===0?(o({type:1}),l.nextFrame(()=>{var s;return(s=t.buttonRef.current)==null?void 0:s.focus({preventScroll:!0})})):(m.preventDefault(),o({type:0}))}),p=te(()=>{if(t.labelRef.current)return[t.labelRef.current.id,i].join(" ")},[t.labelRef.current,i]),y=d.exports.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.propsRef.current.value}),[t]),S=e,x={ref:a,id:i,type:Ie(e,t.buttonRef),"aria-haspopup":!0,"aria-controls":(n=t.optionsRef.current)==null?void 0:n.id,"aria-expanded":t.disabled?void 0:t.listboxState===0,"aria-labelledby":p,disabled:t.disabled,onKeyDown:c,onKeyUp:u,onClick:b};return $({ourProps:x,theirProps:S,slot:y,defaultTag:ze,name:"Listbox.Button"})}),Be="label",We=T(function(e,r){let[n]=M("Listbox.Label"),t=`headlessui-listbox-label-${H()}`,o=k(n.labelRef,r),a=O(()=>{var l;return(l=n.buttonRef.current)==null?void 0:l.focus({preventScroll:!0})}),i=d.exports.useMemo(()=>({open:n.listboxState===0,disabled:n.disabled}),[n]);return $({ourProps:{ref:o,id:t,onClick:a},theirProps:e,slot:i,defaultTag:Be,name:"Listbox.Label"})}),Ge="ul",Ke=q.RenderStrategy|q.Static,Ve=T(function(e,r){var n;let[t,o]=M("Listbox.Options"),a=k(t.optionsRef,r),i=`headlessui-listbox-options-${H()}`,l=W(),c=W(),u=be(),b=(()=>u!==null?u===B.Open:t.listboxState===0)();d.exports.useEffect(()=>{var s;let f=t.optionsRef.current;!f||t.listboxState===0&&f!==((s=re(f))==null?void 0:s.activeElement)&&f.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let p=O(s=>{switch(c.dispose(),s.key){case v.Space:if(t.searchQuery!=="")return s.preventDefault(),s.stopPropagation(),o({type:5,value:s.key});case v.Enter:if(s.preventDefault(),s.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:f}=t.options[t.activeOptionIndex];t.propsRef.current.onChange(f.current.value)}t.propsRef.current.mode===0&&(o({type:1}),G().nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}));break;case D(t.orientation,{vertical:v.ArrowDown,horizontal:v.ArrowRight}):return s.preventDefault(),s.stopPropagation(),o({type:4,focus:P.Next});case D(t.orientation,{vertical:v.ArrowUp,horizontal:v.ArrowLeft}):return s.preventDefault(),s.stopPropagation(),o({type:4,focus:P.Previous});case v.Home:case v.PageUp:return s.preventDefault(),s.stopPropagation(),o({type:4,focus:P.First});case v.End:case v.PageDown:return s.preventDefault(),s.stopPropagation(),o({type:4,focus:P.Last});case v.Escape:return s.preventDefault(),s.stopPropagation(),o({type:1}),l.nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})});case v.Tab:s.preventDefault(),s.stopPropagation();break;default:s.key.length===1&&(o({type:5,value:s.key}),c.setTimeout(()=>o({type:6}),350));break}}),y=te(()=>{var s,f,E;return(E=(s=t.labelRef.current)==null?void 0:s.id)!=null?E:(f=t.buttonRef.current)==null?void 0:f.id},[t.labelRef.current,t.buttonRef.current]),S=d.exports.useMemo(()=>({open:t.listboxState===0}),[t]),x=e,m={"aria-activedescendant":t.activeOptionIndex===null||(n=t.options[t.activeOptionIndex])==null?void 0:n.id,"aria-multiselectable":t.propsRef.current.mode===1?!0:void 0,"aria-labelledby":y,"aria-orientation":t.orientation,id:i,onKeyDown:p,role:"listbox",tabIndex:0,ref:a};return $({ourProps:m,theirProps:x,slot:S,defaultTag:Ge,features:Ke,visible:b,name:"Listbox.Options"})}),_e="li",qe=T(function(e,r){let{disabled:n=!1,value:t,...o}=e,[a,i]=M("Listbox.Option"),l=`headlessui-listbox-option-${H()}`,c=a.activeOptionIndex!==null?a.options[a.activeOptionIndex].id===l:!1,{value:u,compare:b}=a.propsRef.current,p=D(a.propsRef.current.mode,{[1]:()=>u.some(w=>b(w,t)),[0]:()=>b(u,t)}),y=d.exports.useRef(null),S=k(r,y);R(()=>{if(a.listboxState!==0||!c||a.activationTrigger===0)return;let w=G();return w.requestAnimationFrame(()=>{var I,h;(h=(I=y.current)==null?void 0:I.scrollIntoView)==null||h.call(I,{block:"nearest"})}),w.dispose},[y,c,a.listboxState,a.activationTrigger,a.activeOptionIndex]);let x=d.exports.useRef({disabled:n,value:t,domRef:y});R(()=>{x.current.disabled=n},[x,n]),R(()=>{x.current.value=t},[x,t]),R(()=>{var w,I;x.current.textValue=(I=(w=y.current)==null?void 0:w.textContent)==null?void 0:I.toLowerCase()},[x,y]);let m=O(()=>a.propsRef.current.onChange(t));R(()=>(i({type:7,id:l,dataRef:x}),()=>i({type:8,id:l})),[x,l]);let s=O(w=>{if(n)return w.preventDefault();m(),a.propsRef.current.mode===0&&(i({type:1}),G().nextFrame(()=>{var I;return(I=a.buttonRef.current)==null?void 0:I.focus({preventScroll:!0})}))}),f=O(()=>{if(n)return i({type:4,focus:P.Nothing});i({type:4,focus:P.Specific,id:l})}),E=O(()=>{n||c||i({type:4,focus:P.Specific,id:l,trigger:0})}),C=O(()=>{n||!c||i({type:4,focus:P.Nothing})}),A=d.exports.useMemo(()=>({active:c,selected:p,disabled:n}),[c,p,n]);return $({ourProps:{id:l,ref:S,role:"option",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,"aria-selected":p,disabled:void 0,onClick:s,onFocus:f,onPointerMove:E,onMouseMove:E,onPointerLeave:C,onMouseLeave:C},theirProps:o,slot:A,defaultTag:_e,name:"Listbox.Option"})}),U=Object.assign(je,{Button:Qe,Label:We,Options:Ve,Option:qe});function Ze({people:e=[],initial:r,getValue:n=i=>i.id,getName:t=i=>i.name,onChange:o,nullable:a=!1}){const[i,l]=d.exports.useState(r!=null?r:e[0]);return d.exports.useEffect(()=>{l(r!=null?r:e[0])},[e]),e=[...e],!a&&e.length===0?void 0:L("div",{className:"w-72 h-full",children:L(U,{value:i,onChange:u=>{l(u),o&&o(n(u))},name:"order",children:j("div",{className:"relative h-full",children:[j(U.Button,{className:"relative w-full  cursor-default rounded-lg bg-white py-2 px-3 pr-10 text-left shadow border border-gray-300 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300",children:[L("span",{className:"block truncate capitalize",children:t(i)}),L("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:L(he,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),L(xe,{as:d.exports.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:L(U.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50",children:e.map((u,b)=>L(U.Option,{className:({active:p})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${p?"bg-indigo-100 text-blue-900":"text-gray-900"}`,value:u,children:({selected:p})=>j(ue,{children:[L("span",{className:`block truncate capitalize ${p?"font-medium":"font-normal"}`,children:t(u)}),p?L("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600",children:L(me,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},b))})})]})})})}export{Ze as S};