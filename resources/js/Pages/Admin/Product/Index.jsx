import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import {ProductsTable} from "@/Components/Admin/Product/ProductsTable";
import Button from "@/Components/Buttons/Button";



export default function Index(props) {
    console.log(props)

    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Prodotti</h2>}
        >
            <Head title="Aziende" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <Tab>
                            <ProductsTable products={props.products} inputs={props.inputs}/>
                            <Button type="link" href={route('admin.products.create')}>Crea nuovo</Button>
                        </Tab>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
