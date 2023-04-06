import React from 'react';
import {Head} from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {ProductListDetails} from "@/Components/ProductListDetails";
import {DataParagraph} from "@/Pages/Authenticated/Order/Show";
import { format } from 'date-fns'
import Protocol from "@/Helpers/Protocol";
import ProductSummary from "@/Components/Authenticated/Product/ProductSammury";
export default function Show(props) {
    const protocol=props.protocol;

    const products=protocol.products.length>0?protocol.products.map((product)=>
            {
                return <ProductSummary product={product.data} protocol_product={product.protocol_product} qty={product.qty_total} />
            }
        ):<p>Nessun prodotto presente</p>


    return (
        <div>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={"Protocollo del "+format(new Date(protocol.date),'dd/MM/yyyy')}
        >
            <Head><title>{"Protocollo del "+format(new Date(protocol.date),'dd/MM/yyyy')}</title></Head>

            <div className="py-12">

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <ProductListDetails products={products} title="Dettagli protocollo" >
                        <DataParagraph title="Tipo"><span>{Protocol.typeText(protocol)}</span></DataParagraph>
                        <DataParagraph title="Riferimento"><span>{protocol.referral}</span></DataParagraph>
                        <DataParagraph title="Data">{Protocol.getDate(protocol)}</DataParagraph>
                        <DataParagraph title="Scdenza">{Protocol.getExpireDate(protocol)}</DataParagraph>
                    </ProductListDetails>

                </div>
            </div>

        </AuthenticatedLayout>
        </div>
    );
}


