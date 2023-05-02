import React from 'react';
import Tab from "@/Components/Tab";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import {Link} from "@inertiajs/inertia-react";
import Price from "@/Components/Admin/Product/Price";
import ReservedPrice from "@/Components/Admin/Product/ReservedPrice";

export default function ProductSummary({product,original_price,price,qty}){


    return(<Tab className="relative p-4 flex justify-between " containerClassName="mb-4" key={product.id}>
        <div className="w-1/4 mr-4 min-h-[8em]">
            <ProductImage name={product.image} className="w-full h-full rounded-md">

            </ProductImage>
        </div>
        <div className="w-3/4 relative">
            <h3 className="uppercase text-slate-500 text-sm">{product.sku}</h3>
            <h2 className="font-bold hover:underline"><Link href={route('products.show',product.id)}>{product.name}</Link></h2>
            <p className="line-clamp-3 mb-4">{product.desc}</p>
            <div className="flex items-baseline"><span className="font-bold text-indigo-800 mr-4">{qty + " unità"}</span> <ReservedPrice fullPrice={original_price} reservedPrice={price} className="text-lg"/></div>


        </div>
    </Tab>);

}
