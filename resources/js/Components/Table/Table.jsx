import React, {useContext, useEffect, useState} from 'react';
import {twMerge} from "tailwind-merge";
import {BsSortDown, BsSortUp} from "react-icons/all";
import {useStateWithCallbackLazy} from "use-state-with-callback";
import Button from "@/Components/Buttons/Button";
import TextInput from "@/Components/Inputs/TextInput";
import {Inertia} from "@inertiajs/inertia";
import Pagination from "@/Components/Pagination";
import {Placeholder} from "@/Helpers/String";

const rowClassName="border-b border-slate-100 text-sm [&>*]:py-4";
const headerRowClassName="text-slate-500 pb-2 pt-2 border-b border-t border-slate-100 [&>*]:py-4";
const headerClasses="text-left mr-4";

const TableContext = React.createContext();
const Table=({children,route,className})=>{
    const [filters,setFilters]=useState({
        search:'',
        orderDir:'desc',
        orderBy:'id',
    });

    const updateFilter=(name,value)=>{
        const newFilters={...filters,[name]:value}
        setFilters(newFilters)
        console.log(newFilters)
    }

    const submit=(newFilters)=>{
        console.log(newFilters)
        Inertia.get(route,newFilters??filters,{
            preserveState: true,
            preserveScroll: true,
        })
    }


    return(
        <TableContext.Provider value={{filters,updateFilter,submit}}>
            <div className={className}>
            {children}
            </div>
        </TableContext.Provider>
    )
}

const Inner=({className,children})=>{
    return(
        <table className={twMerge("w-full box-content ",className)}>
        {children}
        </table>
    )
}

const Search=({className})=>{
    const {filters,updateFilter,submit}=useContext(TableContext)

    const handleFocusOut=(e)=>{
            submit();
    }

    return(
        <div className={twMerge("flex items-end mb-4",className)}>
            <TextInput placeholder="Cerca..." type="search" name="search" value={filters.search} handleChange={(e)=>updateFilter('search',e.target.value)} handleFocusOut={(e)=>handleFocusOut(e)} className="mr-4"/>
        </div>
    )
}

const TablePagination=({className,paginated,limit=10})=>{
    if(!paginated)
        return;

    const {filters,updateFilter,submit}=useContext(TableContext)

    useEffect(() => {
        updateFilter('page',paginated.current_page)
    }, [paginated.current_page])


    return(
        (paginated && paginated.total>limit && <Pagination links={paginated.links} />)
    )
}



const Body=({className="",children})=>{
    return(<tbody className={twMerge("",className)}>{children}</tbody> )
}

const Row=({className="",children})=>{
    return(<tr className={twMerge(rowClassName,className)}>{children}</tr>)
}

const Field=({className="",children})=>{
    return(<td className={className+" mr-1 capitalize"}>{Placeholder(children)}</td>)
}

const HeaderRow=({className="",children})=> {
    return (<thead><tr className={twMerge(headerRowClassName, className)}>{children}</tr></thead>)
}

const Header=({className="",children,sortable=false,name,onClick,initial,current})=>{
    const {filters,updateFilter,submit}=useContext(TableContext)
    const [order,setOrder]=useState(true)
    const active=filters.orderBy===name
    sortable=sortable&&name

    const update=()=>{
        updateFilter('orderDir',order?'desc':'asc')
        updateFilter('orderBy',name)
        submit({...filters,orderDir:order?'desc':'asc',orderBy:name})
    }

    const change=()=>{
        setOrder((prev)=>!prev)
        updateFilter('orderDir',!order?'desc':'asc')
        submit({...filters,orderDir:!order?'desc':'asc'})
    }

    /*const update=()=>{
        onClick(name,dir==="desc"?"asc":"desc")
    }*/

    return(<th className={(twMerge(headerClasses,className) + (sortable && " cursor-pointer ") + " group")} onClick={sortable ? (active?change:update):undefined}>{children}{sortable && (<div className={"inline "+(active?" ":"opacity-0 group-hover:opacity-100 transition-opacity")}>{(order?<BsSortDown className="inline ml-2"/>:<BsSortUp className="inline ml-2"/>)}</div>)}</th>)
}

Table.Inner=Inner;
Table.Body=Body;
Table.Row=Row;
Table.HeaderRow=HeaderRow;
Table.Field=Field;
Table.Header=Header;
Table.Search=Search;
Table.Pagination=TablePagination;
export default Table;
