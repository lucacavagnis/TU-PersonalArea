import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Tab from "@/Components/Tab";
import { Head } from '@inertiajs/inertia-react';
import OrdersTable from "@/Components/Authenticated/Order/OrdersTable";
import SupervisorOrdersTable from "@/Components/Authenticated/Order/SupervisoOrdersTable";
import {ProtocolTable} from "@/Components/Authenticated/Protocol/PortocolTable";

export default function Index(props) {


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Protocolli</h2>}
        >
            <Head title="Protocolli" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <Tab>
                        <ProtocolTable protocols={props.protocols} inputs={props.inputs} />
                    </Tab>

                </div>
            </div>

        </AuthenticatedLayout>
    );
}
