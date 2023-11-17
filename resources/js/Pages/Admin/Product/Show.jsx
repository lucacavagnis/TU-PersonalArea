import React from 'react';
import {Head} from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import {ProductDataTab} from "@/Pages/Authenticated/Product/Show";
import ManageLotsTable from "@/Components/Admin/Product/ManageLotsTable";



export default function Show(props) {

    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Prodotti</h2>}
        >
            <Head title="Prodotti" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                            <ProductDataTab product={props.product} />
                            <Tab className="h-80" containerClassName="h-80">
                                <h2 className="font-semibold mb-4">Lotti del prodotto</h2>
                                <ManageLotsTable lots={props.product.lots} product={props.product} protocols={props.protocols}/>
                            </Tab>
                </div>
            </div>
        </Admin>
    );
}
