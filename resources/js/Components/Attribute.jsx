import React from "react";

export default function Attribute({title,value,className}){
    return(
        <div className={"border-b -slate-500 flex justify-between py-2 "+(className?className:"")}><span className="font-bold ">{title}</span><span className="text-sm">{value}</span></div>
    )
}
