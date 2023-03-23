import React from 'react';
import {Head} from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {ProductListDetails} from "@/Components/ProductListDetails";
import {DataParagraph} from "@/Pages/Authenticated/Order/Show";
import { format } from 'date-fns'
export default function Show(props) {
    const protocol=props.protocol;

    console.log(props)

    return (
        <div>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={"Protocollo del "+props.protocol.date}
        >
            <Head><title>{"Protocollo del "+props.protocol.date}</title></Head>

            <div className="py-12">

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <ProductListDetails products={protocol.products} title="Dettagli protocollo" >
                        <DataParagraph title="Tipo"><span>{protocol.type?"Conto aperto":"Conto deposito"}</span></DataParagraph>
                        <DataParagraph title="Riferimento"><span>{protocol.referral}</span></DataParagraph>
                        <DataParagraph title="Data">{format(date(protocol.date),'dd/mm/yyyy')}</DataParagraph>
                    </ProductListDetails>

                </div>
            </div>

        </AuthenticatedLayout>
        </div>
    );
}


