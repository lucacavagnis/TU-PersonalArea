import React from 'react';
import {Head, useForm} from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import Button from "@/Components/Buttons/Button";
import {CategoriesTable} from "@/Components/Admin/Category/CategoriesTable";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import {Format_date_input} from "@/Helpers/String";
import {AddNewLine} from "@/Components/Admin/AddNewLine";



export default function Index(props) {
    const {data,setData,post}=useForm(
        {
            name: '',
        }
    )

    const addNew=()=>{
        post(route('admin.subcategories.store'))
    }

    const handleChange=(e)=>{
        setData(e.target.name,e.target.value)
    }

    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Sottocategorie</h2>}
        >
            <Head title="Sottocategorie" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <Tab>
                            <CategoriesTable categories={props.subcategories} sub={true}/>
                            <AddNewLine>
                                <div className="mr-4">
                                    <InputLabel forInput="name" value="Nome" className="mb-2"/>
                                    <TextInput name="name" value={data.name} handleChange={handleChange}/>
                                </div>
                                <Button type="button" onClick={addNew}>Crea nuovo</Button>
                            </AddNewLine>
                        </Tab>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
