import React from 'react';
import Tab from "@/Components/Tab";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import {Link} from "@inertiajs/inertia-react";
import Price from "@/Components/Price";

export default function ProductSummary({order_product}){
    console.log(order_product);

    const optioned_products=order_product.order_product_services.length;

    return(<Tab className="relative p-4 flex justify-between " containerClassName="mb-4" key={order_product.id}>
        <div className="w-1/4 mr-4 min-h-[8em]">
            <ProductImage name={order_product.product.image} className="w-full h-full rounded-md">

            </ProductImage>
        </div>
        <div className="w-3/4 relative">
            <Link className="font-semibold hover:underline" href={route('products.show',order_product.product.id)}>{order_product.quantity + " x " + order_product.product.name}</Link>
            {!order_product.product.property &&
                <>
                    <p className="text-sm">{order_product.product.prot_number} - {order_product.product.prot_date}</p>
                    <p className="text-sm text-indigo-700">{optioned_products + " prodotti configurati"}</p>
                    <div className="absolute bottom-0 left-0 font-bold"><span>{order_product.quantity + " x " }</span> <Price value={order_product.product.reserved_price} /> <span> = </span> <Price value={order_product.product.reserved_price*order_product.quantity}/></div>
                </>}
        </div>
    </Tab>);

}
