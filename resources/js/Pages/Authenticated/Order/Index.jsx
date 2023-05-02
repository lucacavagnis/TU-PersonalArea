import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Tab from "@/Components/Tab";
import { Head } from '@inertiajs/inertia-react';
import OrdersTable from "@/Components/Authenticated/Order/OrdersTable";
import SupervisorOrdersTable from "@/Components/Authenticated/Order/SupervisoOrdersTable";

export default function Index(props) {
    console.log(props);
    let orders=props.orders;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ordini</h2>}
        >
            <Head title="Ordini" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <Tab>
                    {((props.auth.user.role===1 && props.auth.user.company.supervision)?
                        <SupervisorOrdersTable orders={orders} inputs={props.inputs}/>:
                        <OrdersTable orders={orders} inputs={props.inputs}/>
                    )}
                </Tab>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
