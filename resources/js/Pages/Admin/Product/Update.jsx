import React from 'react';
import {Head, useForm} from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import {ProductsForm} from "@/Components/Admin/Product/ProductsForm";


export default function Update(props) {
    console.log(props)
    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Aggiorna prodotto</h2>}
        >
            <Head title="Aggiorna prodotto" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                        <ProductsForm companies={props.companies} categories={props.categories} subcategories={props.subcategories} product={props.product} />
                </div>
            </div>
        </Admin>    );
}
