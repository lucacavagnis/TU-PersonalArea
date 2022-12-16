import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from "@/Components/Buttons/Button";
import Tab from "@/Components/Tab";
import {Head, useForm} from '@inertiajs/inertia-react';
import TextArea from "@/Components/TextArea";

export default function Pending(props) {
    console.log(props);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={'In attesa'}
        >
            <Head title="Ordine in attesa" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Tab>
                        <div className="w-2/3 text-center mr-auto ml-auto mb-4 pb-4 border-b b-grey-500">
                            <h1 className="font-bold">Ordine in attesa di approvazione</h1>
                            <p className="mb-2">Abbiamo ricevuto il tuo ordine. Riceverai una e-mail appena verrà apporvato, e verrà preso in carico da un membro del nostro staff.</p>
                            <p>Nel frattempo puoi controllare lo stato del tuo ordine.</p>
                            <div className="flex justify-center"><Button type="link"  href={route('orders.index')}>Visualizza ordini</Button></div>
                        </div>
                    </Tab>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
