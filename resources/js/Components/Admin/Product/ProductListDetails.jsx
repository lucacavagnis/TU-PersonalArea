import Tab from "@/Components/Tab";
import Status from "@/Components/Authenticated/Order/Status";
import Price from "@/Components/Admin/Product/Price";
import Button from "@/Components/Buttons/Button";
import React from "react";
import ProductSummary from "@/Components/Authenticated/Product/ProductSammury";
import {DataParagraph} from "@/Pages/Authenticated/Order/Show";

export const ProductListDetails=({products,title,children})=>{

    return(
        <div className="flex w-full overflow-hidden">
            <div className="w-2/3 mr-4">
                {products}
            </div>
            <div className="w-1/3 ml-4 relative">
                <Tab className="sticky top-20px">
                    <div className="mb-4">
                        <h2 className="font-bold mb-4 text-2xl">{title}</h2>
                        {children}
                    </div>
                </Tab>
            </div>
        </div>

    )
}
