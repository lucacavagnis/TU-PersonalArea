import React from 'react';
import Attribute from "@/Components/Admin/Product/Attribute";

export default function ProductAttributes({product}){
    return(
        <div className="mb-4 mt-4">
            <Attribute title="Protocollo TU" value={product.prot_number??'---'} className="border-t"/>
            <Attribute title="Data protocollo" value={product.prot_date??'---'}/>
            <Attribute title="Codice ordine" value={product.order_code??'---'}/>
        </div>
    )
}


