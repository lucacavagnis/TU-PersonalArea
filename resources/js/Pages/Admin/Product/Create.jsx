import React from 'react';
import {ProductsForm} from "@/Components/Admin/Product/ProductsForm";
import {Head} from "@inertiajs/inertia-react";
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";



export default function Create(props) {


    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Crea prodootto</h2>}
        >
            <Head title="Crea prodotto" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                        <ProductsForm companies={props.companies} categories={props.categories} subcategories={props.subcategories} />
                </div>
            </div>
        </Admin>
);
}
