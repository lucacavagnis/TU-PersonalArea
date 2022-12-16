import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from "@/Components/Buttons/Button";
import Tab from "@/Components/Tab";
import {Head, useForm} from '@inertiajs/inertia-react';
import TextArea from "@/Components/TextArea";
import Status from "@/Components/Order/Status";

export default function Approved(props) {
    console.log(props);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={'Approvato'}
        >
            <Head title="Ordine approvato" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Tab>
                        <div className="w-2/3 text-center mr-auto ml-auto mb-4 pb-4 border-b b-grey-500">
                            <h1 className="font-bold">Hai approvato l'ordine</h1>
                            <p className="mb-2">L'ordine è stato approvato con successo. Una notifica via mail è stata inviata al referente dell'ordine</p>
                            <div className="flex justify-center"><Button type="link"  href={route('orders.index')}>Visualizza ordini</Button></div>
                        </div>
                    </Tab>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
