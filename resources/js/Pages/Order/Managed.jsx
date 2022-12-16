import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from "@/Components/Buttons/Button";
import Tab from "@/Components/Tab";
import {Head, useForm} from '@inertiajs/inertia-react';
import TextArea from "@/Components/TextArea";
import Status from "@/Components/Order/Status";
import ProductAttributes from "@/Components/Product/ProductAttributes";
import Attribute from "@/Components/Attribute";

export default function Managed(props) {
    const order=props.order;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={'Gestito'}
        >
            <Head title="Ordine già gestito" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Tab>
                        <div className="w-2/3 text-center mr-auto ml-auto mb-4 pb-4">
                            <h1 className="font-bold">L'ordine è già stato gestito</h1>
                            <Attribute title="Stato ordine" value={<Status status={order.status}/>} />
                            <Attribute title="Approvato da" value={order.approver.name} />
                            <Attribute title="Approvato il" value={order.approved_at} />
                            <div className="flex justify-center"><Button type="link"  href={route('orders.show',order.id)}>Visualizza ordine</Button></div>
                        </div>
                    </Tab>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
