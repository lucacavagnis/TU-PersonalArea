import React from 'react';
import {Head, useForm} from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import {ProtocolForm} from "@/Components/Admin/Protocol/ProtocolForm";


export default function Update(props) {
    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Modifica protocollo</h2>}
        >
            <Head title="Modifica protocollo" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <Tab>
                        <ProtocolForm companies={props.companies} default_value={props.default}/>
                    </Tab>
                </div>
            </div>
        </Admin>        );
}
