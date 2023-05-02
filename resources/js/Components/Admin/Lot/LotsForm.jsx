import React from 'react';
import {Head, useForm} from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import Button from "@/Components/Buttons/Button";
import TextInput from "@/Components/Inputs/TextInput";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextArea from "@/Components/Inputs/TextArea";
import Select from "@/Components/Inputs/Select";


export default function LotsForm({props,default_value,companies,categories,subcategories}) {

    console.log(props)

    const {data,setData,post,put}=useForm({
        name:default_value?default_value.name:"",
        sku:default_value?default_value.sku:'',
        desc:default_value?default_value.desc:'',
        company_id:default_value?default_value.company.id:props.companies[0].id,
        category_id:default_value?default_value.category.id:props.categories[0].id,
        subcategory_id:default_value?default_value.subcategory.id:props.subcategories[0].id,
    })


    const onClick=(e)=>{
        console.log(e)
        e.preventDefault;
        default_value?put(route('admin.lots.update',default_value.id)):post(route('admin.lots.store'));
    }

    const onTextChange=(e)=>{
        e.preventDefault();
        setData(e.target.name,e.target.value)
    }

    const onSelectChange=(name)=>{
        return (value) => {
            setData(name, value);
        };
    }


    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Crea lotto</h2>}
        >
            <Head title="Aziende" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <Tab>
                        <LotsForm>
                            <LotsForm.Row>
                                <LotsForm.Field>
                                    <InputLabel forInput="name" value="Nome" required={true}/>
                                    <TextInput name="name" handleChange={(e)=>onTextChange(e)} value={data.name} required={true} className="w-full"/>
                                </LotsForm.Field>
                                <LotsForm.Field>
                                    <InputLabel forInput="sku" value="SKU" required={true}/>
                                    <TextInput name="sku" handleChange={(e)=>onTextChange(e)} value={data.sku} required={true} className="w-full"/>
                                </LotsForm.Field>
                            </LotsForm.Row>
                            <LotsForm.Row>
                                <LotsForm.Field>
                                    <InputLabel forInput="desc" value="Descrizione" required={false}/>
                                    <TextArea name="desc" handleChange={(e)=>onTextChange(e)} className="w-full h-[200px]">{data.desc}</TextArea>
                                </LotsForm.Field>
                            </LotsForm.Row>
                            <LotsForm.Row>
                                <LotsForm.Field>
                                    <InputLabel forInput="company" value="Azienda" required={true}/>
                                    <Select options={props.companies} onChange={onSelectChange('company_id')} initialValue={default_value?default_value.company:null}/>
                                </LotsForm.Field>
                                <LotsForm.Field>
                                    <InputLabel forInput="catgeory" value="Catgeoria" required={true}/>
                                    <Select options={props.categories} onChange={onSelectChange('category_id')} initialValue={default_value?default_value.category:null}/>
                                </LotsForm.Field>
                                <LotsForm.Field>
                                    <InputLabel forInput="subcategpry" value="Sottocatgeoria" required={false}/>
                                    <Select options={props.subcategories} onChange={onSelectChange('subcategory_id')} initialValue={default_value?default_value.subcatgeory:null}/>
                                </LotsForm.Field>
                            </LotsForm.Row>
                            {default_value?<Button type="button" onClick={(e)=>onClick(e)}>Modifica</Button>:<Button type="button" onClick={(e)=>onClick(e)}>Aggiungi</Button>}
                        </LotsForm>
                    </Tab>
                </div>
            </div>
        </Admin>
    );
}

const Form=({children})=>{
    return(
        <form>{children}</form>
    )
}
const Row=({children})=> {
    return (
        <div className="flex justify-between w-full [&>first]:ml-0 [&>last]:mr-0 [&>*]:mx-2 [&>*]:w-full mb-4">{children}</div>
    )
}

const Field=({children,widthClass})=>{
    return(
        <div className={widthClass+" [&>*]>w-full"}>{children}</div>
    )
}

Form.Row=Row;
Form.Field=Field;
