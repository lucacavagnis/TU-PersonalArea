import {React, useContext, useEffect, useRef} from 'react';
import Button from "@/Components/Buttons/Button";
import ProductsServiced from "@/Components/Authenticated/Product/ProductsServiced";
import PopUp from "@/Components/Authenticated/Product/PopUp";
import {CartContext} from "@/Layouts/AuthenticatedLayout";

const ProductPopUp=(props)=>{

    const {product,services,processing,data,setData,onHandleChange,triggerClose,post,...other}=props;

    const {openCart}=useContext(CartContext)

    const submit = (e) => {
        post(route('cart.store'),{
            onSuccess: ()=>{
                triggerClose();
                openCart(e);
            },
        });
    };

    const isFirstRender = useRef(true);

    useEffect(()=>{
        if(isFirstRender.current)
            isFirstRender.current=false;
        else
            submit();
    },[data.redirect])


    const onClick = (e,isRedirect) => {
        e.preventDefault();
        if(isRedirect!==data.redirect)
            setData('redirect',isRedirect);
        else
            submit();
    };


    return(

        <PopUp {...other} triggerClose={triggerClose}>
            <form  className="overflow-auto relative rounded-lg w-5/5 ml-auto mr-auto bg-white px-6 py-8 " >
                <div className="mb-10">
                    <h2 className="font-bold">Configura i tuoi prodotti</h2>
                    <p className="mb-2">Puoi richiedere dei servizi aggiuntivi sui proddoti che stai per acquistare, ottieni così il massimo dai tuoi acquisti e non ti preoccupi più di niente.</p>
                </div>
                <div className=""><ProductsServiced product={product} qty_requested={data.qty} handleChange={onHandleChange} services={services}/></div>
                <div className="flex w-full justify-start">
                    <Button  type="submit" className="mr-4" onClick={(e)=>onClick(e,false)} disabled={processing || data.qty<1}>
                        Aggiungi al carrello
                    </Button>
                    <Button type="submit" onClick={(e)=>onClick(e,true)} disabled={processing || data.qty<1}>
                        Acquista subito
                    </Button>
                </div>
            </form>
    </PopUp>
    );
}



export default ProductPopUp;
