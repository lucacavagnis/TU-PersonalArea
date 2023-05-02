import React,{ useContext, useEffect, useRef} from 'react';
import Button from "@/Components/Buttons/Button";
import ProductsServiced from "@/Components/Authenticated/Product/ProductsServiced";
import PopUp from "@/Components/Authenticated/Product/PopUp";
import {CartContext} from "@/Layouts/AuthenticatedLayout";

const ProductPopUp=(props)=>{

    const {product,services,processing,data,onHandleChange,triggerClose,submit,...other}=props;

    return(

        <PopUp {...other} triggerClose={triggerClose}>
            <form  className="overflow-auto relative rounded-lg w-5/5 ml-auto mr-auto bg-white px-6 py-8 " >
                <div className="mb-10">
                    <h2 className="font-bold">Configura i tuoi prodotti</h2>
                    <p className="mb-2">Puoi richiedere dei servizi aggiuntivi sui proddoti che stai per acquistare, ottieni così il massimo dai tuoi acquisti e non ti preoccupi più di niente.</p>
                </div>
                <div className=""><ProductsServiced product={product} qty_requested={data.qty} handleChange={onHandleChange} services={services} data={data}/></div>
                <Button onClick={(e)=>submit(e)}>Continua</Button>
            </form>
    </PopUp>
    );
}



export default ProductPopUp;
