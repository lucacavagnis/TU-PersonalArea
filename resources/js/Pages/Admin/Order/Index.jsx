import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import {ProtocolsTable} from "@/Components/Admin/Protocol/ProtocolsTable";
import {OrdersTable} from "@/Components/Admin/Order/OrdersTable";



export default function Index(props) {

    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ordini</h2>}
        >
            <Head title="Ordini" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <Tab>
                            <OrdersTable orders={props.orders}/>
                        </Tab>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
