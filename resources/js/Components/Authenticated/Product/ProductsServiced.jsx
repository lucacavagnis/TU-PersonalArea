import React, {useState} from 'react'
import {MdExpandLess} from "react-icons/all";
import ServiceCheckBox from "@/Components/Authenticated/Product/ServiceCheckBox";
import ServiceText from "@/Components/Authenticated/Product/ServiceText";

export default function ProductsServiced(props){
    const getServices=(n)=>{
        if(props.services.length===0)
            return <p>Nessun servizio disponibile</p>
        return props.services.map((service)=>{
            switch (service.type){
                default:
                case 'checkbox':
                    return <ServiceCheckBox handleChange={(e)=>props.handleChange(e)} name={n+'-'+service.id} checked={props.data[n+'-'+service.id]}>{service.name}</ServiceCheckBox>
                case 'ip':
                    return <ServiceText handleChange={(e)=>props.handleChange(e)} name={n+'-'+service.id} placeholder="127.0.0.1">{service.name}</ServiceText>
            }
        });
    }

    const get_optioned_products=()=>{
        var products=[];
        for(let i=0;i<props.qty_requested;i++)
        {products.push(
            <OptionsDropDown title={props.product.name} key={i}>
                {getServices(i)}
            </OptionsDropDown>
        )}
        return products;
    }

    return(
        <div>
            {get_optioned_products()}
        </div>
    );
}

function OptionsDropDown(props){
    const [open,setOpen]=useState(true);

    const toggleOpen=()=>{
        setOpen((prev)=>!prev);
        console.log(open);
    }

    return(
        <div className="relative mb-4 pb-2 border-b-gray-200 border-b">
            <h3 className="pb-1 font-semibold">{props.title}<MdExpandLess className={(open?"rotate-180 ":" ")+" transition-transform cursor-pointer float-right"} onClick={toggleOpen}/></h3>
            <div className={(open?" ":"h-0 ")+"overflow-hidden transition-all flex flex-wrap"}>
                {props.children}
            </div>
        </div>
    )
}
