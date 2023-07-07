import React from 'react';
import {Head, useForm} from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import Button from "@/Components/Buttons/Button";
import {ProductDataTab} from "@/Pages/Authenticated/Product/Show";
import {LotsTable} from "@/Components/Admin/Product/LotsTable";
import {Inertia} from "@inertiajs/inertia";
import TextInput from "@/Components/Inputs/TextInput";
import InputLabel from "@/Components/Inputs/InputLabel";
import {Format_date_input} from "@/Helpers/String";
import Select from "@/Components/Inputs/Select";
import MUILotsTable from "@/Components/Admin/Protocol/MUILotsTable";



export default function Show(props) {
    const {data,setData,post}=useForm(
        {
            id: props.product.id,
            protocol_id:null,
            date: Format_date_input(Date()),
            qty_available: 0,
            qty_total:0,
        }
    )

    const addNew=()=>{
        post(route('admin.lots.store'))
    }

    const handleChange=(e)=>{
        setData(e.target.name,e.target.value)
    }

    const onSelectChange=(name)=>{
        return (value) => {
            setData(name, value);
        };
    }

    console.log(props)

    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Prodotti</h2>}
        >
            <Head title="Prodotti" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                            <ProductDataTab product={props.product} />
                            <Tab className="h-100">
                                <h2 className="font-semibold mb-4">Lotti del prodotto</h2>
                                <MUILotsTable lots={props.product.lots} product={props.product} protocols={props.protocols}/>
                                {/*<div className="flex py-4 pt-4 border-t border-indigo-300">
                                    <div className="mr-4">
                                        <InputLabel forInput="date" value="Data" className="mb-2"/>
                                        <TextInput type="date" name="date" value={data.date} handleChange={handleChange}/>
                                    </div>
                                    <div className="mr-4">
                                        <InputLabel forInput="date" value="Qt.à totale" className="mb-2"/>
                                        <TextInput type="number" name="qty_total" value={data.qty_total} min={0} handleChange={handleChange}/>
                                    </div>
                                    <div className="mr-4">
                                        <InputLabel forInput="date" value="Qt.à disponibile" className="mb-2"/>
                                        <TextInput type="number" name="qty_available" value={data.qty_available} min={0} max={data.qty_total} handleChange={handleChange} className="min-w-[8rem]"/>
                                    </div>
                                    <Button type="button" onClick={addNew}>Aggiungi</Button>
                                </div>*/}
                            </Tab>
                </div>
            </div>
        </Admin>
    );
}
