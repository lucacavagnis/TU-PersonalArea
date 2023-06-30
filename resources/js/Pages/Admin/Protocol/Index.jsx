import React, {useContext} from 'react';
import { Head } from '@inertiajs/inertia-react';
import Admin, {PopUpMessageContext} from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import {ProtocolsTable} from "@/Components/Admin/Protocol/ProtocolsTable";
import MUIProtocolTable from "@/Components/Admin/Protocol/MUIProtocolTable";



export default function Index(props) {

    console.log(props)

    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Protocolli</h2>}
            msg={props.message}
        >
            <Head title="Protocolli" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <Tab className="h-[70vh]">
                            {/*<ProtocolsTable protocols={props.protocols}/>*/}
                            <MUIProtocolTable protocols={props.protocols} companies={props.companies}/>
                        </Tab>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
