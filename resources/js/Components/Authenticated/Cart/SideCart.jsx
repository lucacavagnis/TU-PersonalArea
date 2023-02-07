import React, {useContext} from 'react';
import Price from "@/Components/Price";
import Button from "@/Components/Buttons/Button";
import CloseButton from "@/Components/Buttons/CloseButton";
import {CartContext} from "@/Layouts/AuthenticatedLayout";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";

export default function SideCart(props){

    const {sideCartActive,closeCart}=useContext(CartContext)

    const cart=props.cart;

    const products=cart.products.length===0?[]:
        Object.entries(cart.products).map((product)=>{
        return(
            <Product product={product} />
        )}
    );

    return(
        <div className={(sideCartActive?"right-0":"right-[-100%]")+" transition-all duration-300 fixed w-1/3 top-0  z-50 bg-white h-screen p-8 shadow flex flex-col justify-between"}>
            <div>
                <CloseButton onClick={(e)=>closeCart(e)}/>
                <h2 className="font-bold mb-8">Carrello</h2>
                {products.length>0?<div>
                    {products}
                </div>:<p>Il carrello è vuoto</p>}
            </div>
            {products.length>0 && (<div className="text-center border-t b-slate-500">
                <Button type="link" href={route('cart.index')} className="w-full text-center py-4 mb-2">Checkout</Button>
                <div><span className="inline">oppure </span><Button kind="tertiary" type="link" href={route('products.dashboard')} className="inline text-base">Continua gli acquisti</Button></div>
            </div>)}
        </div>
    );
}

const Product=(props)=>{
    const product=props.product[1];


    const productsWithServices=(services)=>{
        return (Object.keys(services).length);
    }

    return(
        <div className="flex h-32 mb-4">
            <ProductImage name={product.data.image} className="w-1/4 rounded-lg mr-2 border b-slate-300">

            </ProductImage>
            <div className="w-3/4 flex flex-col justify-between ml-2 pb-4">
                <div>
                    <h3 className="font-bold">{product.data.name}</h3>
                    <span className="text-sm text-indigo-700">{productsWithServices(product.configured_products)+" prodotti configurati"}</span>
                </div>
                <div className="w-full flex justify-between">
                    <span className="text-slate-500">{"Qt.à "+ product.qty}</span>
                    <Price value={product.data.reserved_price*product.qty} className="font-bold"/>
                </div>
            </div>
        </div>
    )
}
