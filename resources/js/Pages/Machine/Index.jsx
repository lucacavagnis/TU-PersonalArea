import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Tab from "@/Components/Tab";
import { Head } from '@inertiajs/inertia-react';
import OrdersTable from "@/Components/Order/OrdersTable";
import MachinesTable from "@/Components/Machine/MachinesTable";

export default function Index(props) {
    let machines=props.machines;

    console.log(props);

    const filters=(<div className="mb-4 w-full"><Tab className="w-1/3"><input className="w-full border-0 border-b border-grey-500" type="text" name="search_input" /></Tab></div>);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Macchine a noleggio</h2>}
        >
            <Head title="Cespiti a noleggio" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    {machines.length > 0 ?
                        (<Tab>
                            <MachinesTable machines={machines} />
                        </Tab>)
                        :
                        (
                        <p>Non hai macchine a noleggio</p>
                        )
                    }



                </div>
            </div>

        </AuthenticatedLayout>
    );
}
