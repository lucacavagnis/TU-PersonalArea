import React from 'react';
import BackgroundImage from "@/Components/BackgorundImage";
import {twMerge} from "tailwind-merge";

export default function ProductImage({name, className, defaultClassName}){

    return(
        <BackgroundImage className={twMerge("w-full mb-4 bg-no-repeat bg-contain bg-center",(className))}
                         defaultClassName={"bg-slate-300 "+(defaultClassName?defaultClassName:"")}
                         name={name}
        />
    )
}
