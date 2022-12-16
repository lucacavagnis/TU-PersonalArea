import React from 'react';
import BackgroundImage from "@/Components/BackgorundImage";

export default function ProductImage({name, className, defaultClassName}){
    return(
        <BackgroundImage className={"w-full mb-4 bg-no-repeat bg-contain bg-center "+(className?className:"")}
                         defaultClassName={"bg-slate-300 "+(defaultClassName?defaultClassName:"")}
                         name={name}
        />
    )
}
