import React, {useState} from 'react';
import {Link} from "@inertiajs/inertia-react";
import {twMerge} from "tailwind-merge";
import {AiOutlineLoading3Quarters} from "react-icons/all";
import { IconContext } from "react-icons";
import { router } from '@inertiajs/react'

const buttonClass="font-medium text-sm w-fit cursor-pointer block h-fit";
const primaryClass="bg-blue-700 hover:bg-blue-600 rounded-md text-slate-50 py-2 px-4 mt-4 transition-colors";
const tertiaryClass="text-indigo-700 hover:text-indigo-500 transition-colors";

const get_className=(type)=>{
    switch(type){
        case "primary":
            return twMerge(buttonClass,primaryClass)
        case "tertiary":
            return twMerge(buttonClass,tertiaryClass)
    }
}
export function AnchorLink({className,style="primary",disabled,children,loading,onClick,href="#",method="get"}) {

    const [show,setShow]=useState(false)

    const handleOnclick=(e)=>{
        e.preventDefault()

        router.on('start',()=>{
            setShow(true)
        })

        router.on('finish',()=>{
            setShow(false)
        })

        e.dispatch()

        if(onClick)
            onClick(e);
    }

    return(
        <>
            <Link href={disabled?"#":href}  onClick={handleOnclick} className={twMerge(get_className(style),className)} method={method}>
                {children}
                {loading && <Loader active={show}/>}
            </Link>
        </>
    )
}

export const Button=({style="primary",type="submit",disabled,children="Invia",className,onClick,loading})=>{

    const [show,setShow]=useState(false)

    const handleOnclick=(e)=>{
        e.preventDefault();
        router.on('start',()=>{
            setShow(true)
        })

        router.on('finish',()=>{
            setShow(false)
        })
        e.dispatch()
        if(onClick)
            onClick(e);
    }

    return(
        <button type={type} disabled={disabled} className={twMerge(get_className(style),className)} onClick={onClick}>
            {children}
            {loading && <Loader active={show}/>}
        </button>
    )
}

export const SubmitButton=({style="primary",disabled,children="Invia",className,loading})=>{
    return(
        <button disabled={disabled} className={twMerge(get_className(style),className)}>
            {children}
            {loading && <Loader active={show}/>}
        </button>
    )
}

const Loader=({active})=>{

    return(<IconContext.Provider value={{className:"animate-spin ml-2"}}><AiOutlineLoading3Quarters className={(!active && "hidden ")+"ml-2 inline"}/></IconContext.Provider>)
}

