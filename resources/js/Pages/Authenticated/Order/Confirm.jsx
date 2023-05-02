import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from "@/Components/Buttons/Button";
import Tab from "@/Components/Tab";
import {Head, useForm} from '@inertiajs/inertia-react';
import TextInput from "@/Components/Inputs/TextInput";
import TextArea from "@/Components/Inputs/TextArea";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";

export default function Confirm(props) {


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={'Conferma'}
        >
            <Head title="Prodotti" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Tab>
                        <div className="w-2/3 text-center mr-auto ml-auto mb-4 pb-4 border-b b-grey-500">
                            <h1 className="font-bold">Ordine inviato correttamente</h1>
                            <p>Il tuo ordine è stato inviato correttamente, verra a breve preso in carico da un membro del nostro team. Verrai aggionrato tramite email sullo stato del tuo oridne</p>
                            <div className="flex justify-center"><Button type="link"  href={route('orders.index')}>Visualizza ordini</Button></div>
                        </div>
                    </Tab>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
