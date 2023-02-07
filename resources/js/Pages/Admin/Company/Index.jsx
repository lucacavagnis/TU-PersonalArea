import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import CompaniesTable from "@/Components/Admin/Company/CompaniesTable";
import { DataGrid} from '@mui/x-data-grid';
import Button from "@/Components/Buttons/Button"
import MuiCompaniesTable from "@/Components/Admin/Company/MuiCompaniesTable";



export default function Dashboard(props) {





    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Aziende</h2>}
        >
            <Head title="Aziende" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <Tab className="h-[70vh]">
                            <MuiCompaniesTable companies={props.companies}/>
                        </Tab>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
