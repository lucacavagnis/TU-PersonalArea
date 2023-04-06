import React, {useState} from 'react';
import {twMerge} from "tailwind-merge";
import {BsSortDown, BsSortUp} from "react-icons/all";
import {useStateWithCallbackLazy} from "use-state-with-callback";
import Button from "@/Components/Buttons/Button";
import TextInput from "@/Components/TextInput";

const rowClassName="border-b border-slate-100 text-sm [&>*]:py-4";
const headerRowClassName="text-slate-500 pb-2 pt-2 border-b border-t border-slate-100 [&>*]:py-4";
const headerClasses="text-left mr-1";

const Table=({className="",children})=>{
    return(
            <table className={"w-full box-content "+className}>
                {children}
            </table>
    )
}

const Search=({keyword,update,submit})=>{
    return(
        <div className="flex items-end mb-4">
            <TextInput type="text" name="search" value={keyword} handleChange={(e)=>update(e)} className="mr-4"/>
            <Button onClick={submit} type="submit">Cerca</Button>
        </div>
    )
}

const Row=({className="",children})=>{
    return(<tr className={twMerge(rowClassName,className)}>{children}</tr>)
}

const Field=({className="",children})=>{
    return(<td className={className+" mr-1"}>{children}</td>)
}

const HeaderRow=({className="",children})=> {
    return (<tr className={twMerge(headerRowClassName, className)}>{children}</tr>)
}

const Header=({className="",children,sortable=false,name,onClick,initial,current})=>{
    const active=current===name
    const dir=active?initial:"desc";


    const update=()=>{
        onClick(name,dir==="desc"?"asc":"desc")
    }

    return(<th className={(twMerge(headerClasses,className) + (sortable && " cursor-pointer ") + " group")} onClick={sortable ? update:undefined}>{children}{sortable && (<div className={"inline "+(active?" ":"opacity-0 group-hover:opacity-100 transition-opacity")}>{(dir==="desc"?<BsSortDown className="inline ml-2"/>:<BsSortUp className="inline ml-2"/>)}</div>)}</th>)
}

Table.Row=Row;
Table.HeaderRow=HeaderRow;
Table.Field=Field;
Table.Header=Header;
Table.Search=Search;
export default Table;
