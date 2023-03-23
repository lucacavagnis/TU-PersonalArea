import React from 'react';
import Tab from "@/Components/Tab";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import {Link} from "@inertiajs/inertia-react";
import Price from "@/Components/Price";
import ReservedPrice from "@/Components/ReservedPrice";

export default function ProductSummary({product,protocol_product,qty}){
    console.log(product);


    return(<Tab className="relative p-4 flex justify-between " containerClassName="mb-4" key={product.id}>
        <div className="w-1/4 mr-4 min-h-[8em]">
            <ProductImage name={product.image} className="w-full h-full rounded-md">

            </ProductImage>
        </div>
        <div className="w-3/4 relative">
            <h3 className="uppercase text-slate-500 text-sm">{product.sku}</h3>
            <h2 className="font-bold">{product.name}</h2>
            <p className="line-clamp-3 mb-4">{product.desc}</p>
            <ReservedPrice fullPrice={protocol_product.original_price} reservedPrice={protocol_product.price} />
            <span className="font-bold text-indigo-800">{qty + " unità"}</span>
        </div>
    </Tab>);

}
