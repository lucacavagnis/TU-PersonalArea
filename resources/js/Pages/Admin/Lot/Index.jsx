import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import MuiCompaniesTable from "@/Components/Admin/Company/MuiCompaniesTable";
import {Table} from "@/Components/Admin/Product/Table";
import Button from "@/Components/Buttons/Button";
import {Table} from "@/Components/Admin/Lot/Table";



export default function Index(props) {

    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Prodotti</h2>}
        >
            <Head title="Aziende" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <Tab>
                            <Table lots={props.lots} inputs={props.inputs}/>
                            <Button type="submit" >Crea nuovo</Button>
                        </Tab>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
