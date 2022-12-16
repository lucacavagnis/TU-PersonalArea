import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Tab from "@/Components/Tab";
import { Head } from '@inertiajs/inertia-react';
import OrdersTable from "@/Components/Order/OrdersTable";
import SupervisorOrdersTable from "@/Components/Order/SupervisoOrdersTable";

export default function Index(props) {
    console.log(props);
    let orders=props.orders;

    const filters=(<div className="mb-4 w-full"><Tab className="w-1/3"><input className="w-full border-0 border-b border-grey-500" type="text" name="search_input" /></Tab></div>);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ordini</h2>}
        >
            <Head title="Ordini" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

            {orders.length > 0 &&
                <Tab>
                    {((props.auth.user.role===1 && props.auth.user.company.supervision)?
                        <SupervisorOrdersTable orders={orders} />:
                        <OrdersTable orders={orders} />
                    )}
                </Tab>
            }


            {orders.length <= 0 && (
                <p>Nessun ordine eseguito</p>
            )}

                </div>
            </div>

        </AuthenticatedLayout>
    );
}
