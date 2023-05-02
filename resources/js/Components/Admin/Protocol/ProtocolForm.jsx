import React, {useState} from 'react';
import {Head, useForm} from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import Tab from "@/Components/Tab";
import Button from "@/Components/Buttons/Button";
import TextInput from "@/Components/Inputs/TextInput";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextArea from "@/Components/Inputs/TextArea";
import Select from "@/Components/Inputs/Select";
import {Format_date_input, getTypeText} from "@/Helpers/String";


export const ProtocolForm=({default_value,companies}) =>{
    let initial_value

    const [type]=useState([0,1])

    if(!default_value)
        initial_value={
            referral: "",
            date: Format_date_input(Date()),
            expiring_date: Format_date_input(new Date(new Date().getTime()+(365*24*60*60*1000))),
            company: companies[0],
            type: types[0],
        }
    else
        initial_value=default_value

    const {data,setData,post,put,transform}=useForm({
        referral:initial_value.referral,
        date:initial_value.date,
        expiring_date:initial_value.expiring_date,
        company_id:initial_value.company.id,
        type:initial_value.type,
    })

    console.log(data)


    const onClick=(e)=>{
        default_value?put(route('admin.protocols.update',initial_value.id)):post(route('admin.protocols.store'));
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
        <Form>
            <Form.Row>
                <Form.Field>
                    <InputLabel forInput="referral" value="Riferimento" required={true}/>
                    <TextInput name="referral" handleChange={(e)=>onTextChange(e)} value={data.referral} required={true} className="w-full"/>
                </Form.Field>
            </Form.Row>
            <Form.Row>
                <Form.Field>
                    <InputLabel forInput="date" value="Data" required={true}/>
                    <TextInput type="date" name="date" handleChange={(e)=>onTextChange(e)} value={data.date} required={true} className="w-full"/>
                </Form.Field>
                <Form.Field>
                    <InputLabel forInput="expiring_date" value="Data di scadenza" required={true}/>
                    <TextInput type="date" name="expiring_date" handleChange={(e)=>onTextChange(e)} value={data.expiring_date} required={true} className="w-full"/>
                </Form.Field>
            </Form.Row>
            <Form.Row>
                <Form.Field>
                    <InputLabel forInput="company" value="Azienda" required={true}/>
                    <Select people={companies} onChange={onSelectChange('company_id')} initial={initial_value.company} getName={(company)=>{return company.id+" - "+company.name}}/>
                </Form.Field>
                <Form.Field>
                    <InputLabel forInput="type" value="Tipo" required={true}/>
                    <Select people={type} onChange={onSelectChange('type')} initial={initial_value.type}
                            getValue={(type)=>{
                                return type
                            }}
                            getName={(type)=>{
                                return getTypeText(type)
                            }}
                    />
                </Form.Field>
            </Form.Row>
            {default_value?<Button type="button" onClick={(e)=>onClick(e)}>Modifica</Button>:<Button type="button" onClick={(e)=>onClick(e)}>Aggiungi</Button>}
        </Form>

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
