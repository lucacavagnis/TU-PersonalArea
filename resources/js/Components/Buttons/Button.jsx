import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import {twMerge} from "tailwind-merge";
import {AiOutlineLoading3Quarters} from "react-icons/all";
import { IconContext } from "react-icons";

export default function Button(props) {
    const primaryClass=(props.disabled?"bg-blue-400 cursor-default":"bg-blue-700 cursor-pointer hover:bg-blue-600") + " block w-fit rounded-md font-medium text-sm text-slate-50 py-2 px-4 mt-4 transition-colors";
    const secondaryClass="";
    const tertiaryClass=(props.disabled?"text-indigo-300":"text-indigo-700 cursor-pointer hover:text-indigo-500") + " block w-fit font-medium text-sm transition-colors";
    const commonClass="h-fit"
    let buttonClass;

    switch(props.kind){
        default:
        case "primary":
                buttonClass=primaryClass;
                break;
        case "secondary":
                buttonClass=secondaryClass;
                break;
        case "tertiary":
                buttonClass=tertiaryClass;
                break;
        }

    buttonClass = twMerge(buttonClass,(props.className??""),commonClass)

    if(props.type && props.type!=="link"){
        return(
            <button type={props.type} onMouseEnter={props.onHover} onClick={props.onClick} className={props.className+" "+buttonClass} disabled={props.disabled}>
                {props.children}
            </button>
        )
    }

        return(
            <>

            <Link href={(props.disabled && props.href)?"":props.href} onMouseEnter={props.onHover} onClick={props.onClick} className={props.className+" "+buttonClass} method={props.method??"get"}>
                {props.processing && <IconContext.Provider value={{className:"animate-spin"}}><AiOutlineLoading3Quarters className="mr-2 "/></IconContext.Provider>}
                {props.children}
            </Link>
            </>
        )

}

Button.defaultProps={
    kind:'primary',
}

