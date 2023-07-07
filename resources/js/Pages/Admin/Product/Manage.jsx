import Admin from "@/Layouts/AdminLayout";
import {Head} from "@inertiajs/inertia-react";
import Tab from "@/Components/Tab";
import {ManageLotsForm} from "@/Components/Admin/Product/ManageLotsForm";

export default function Manage(props){
    return(<Admin
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gestisci lotti</h2>}
    >
        <Head title="Gestisci lotti" />

        <div className="py-12">
            <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <Tab containerClassName="mx-auto w-1/3">
                        <h2>Gestisci lotti</h2>
                        <ManageLotsForm />
                    </Tab>
            </div>
        </div>
    </Admin>)
}
