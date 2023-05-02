import React from "react";
import {Inertia} from "@inertiajs/inertia";
import {twMerge} from "tailwind-merge";

export const InstantSubmitInput=({className,type="text",id,name,defaultValue,routeName,...props})=>{
    const onFocusOut=(e)=>{
        if(e.target.value===e.target.defaultValue)
            return;

        const id=e.target.name.split('-')[0];
        const prop=e.target.name.split('-')[1];
        Inertia.put(route(routeName,id),{
            prop:prop,
            value:e.target.value,
        },{
            preserveScroll: true,
        })
    }

    return(
        <div key={id}>
            <input step={props.step} min={props.min} max={props.max} name={id+"-"+name} defaultValue={defaultValue} onBlur={e=>onFocusOut(e)} className={twMerge("border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",className)} type={type}/>
        </div>
    )
}
