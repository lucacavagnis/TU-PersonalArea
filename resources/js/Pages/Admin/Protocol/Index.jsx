import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import {MUIProtocolTable} from "@/Components/Admin/Protocol/MUIProtocolTable";
import Button from "@/Components/Buttons/Button";



export default function Index(props) {
    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Protocolli</h2>}
        >
            <Head title="Protocolli" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <Tab>
                            <MUIProtocolTable protocols={props.protocols}/>
                            <Button type="link" href={route('admin.protocols.create')}>Crea nuovo</Button>

                        </Tab>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
