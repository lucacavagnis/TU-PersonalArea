import React from 'react';
import {useForm} from '@inertiajs/inertia-react';
import Button from "@/Components/Buttons/Button";
import TextInput from "@/Components/Inputs/TextInput";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextArea from "@/Components/Inputs/TextArea";
import Select from "@/Components/Inputs/Select";
import {ImageUploadInput} from "@/Components/Inputs/ImageUploadInput";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import {twMerge} from "tailwind-merge";
import {Input, styled} from "@mui/material";


export const ManageLotsForm=({default_value,companies,categories,subcategories}) =>{
    /*let initial_value

    if(!default_value)
        initial_value={
            name: "",
            sku: "",
            desc: "",
            company: companies[0],
            category: categories[0],
            subcategory: subcategories[0],
            image: null,
        }
    else
        initial_value=default_value*/

    const {data,setData,post}=useForm({
        qty_available: default_value?default_value.qty_available:0,
        qty_total: default_value?default_value.qty_total:0,
        date: default_value?default_value.date:Date(),
    })

    const onClick=(e)=>{
        e.preventDefault;
        default_value?post(route('admin.products.update',initial_value.id),{method:'put'}):post(route('admin.products.store'));
    }

    const onChange=(e)=>{
        e.preventDefault();
        setData(e.target.name,e.target.type==="file"?e.target.files[0]:e.target.value)
    }

    /*
    const onSelectChange=(name)=>{
        return (value) => {
            setData(name, value);
        };
    }

    const getImage=(image)=>{
        console.log(image)
        const className="w-20 h-20"
        return (!image || typeof image === "string" || image instanceof String )?<ProductImage name={image} className={className}/>:<img src={URL.createObjectURL(image)} className={className} alt="Product image"/>
    }*/



    return (
        <Form>
            <Form.Row>
                <Form.Field>
                    <InputLabel forInput="qty_available" value="Unità disponibli" required={true}/>
                    <TextInput type="number" name="qty_available" handleChange={(e)=>onChange(e)} value={data.qty_available} required={true} className="w-full"/>
                </Form.Field>
                <Form.Field>
                    <InputLabel forInput="qty_total" value="Unità totali" required={true}/>
                    <TextInput type="number" name="qty_total" handleChange={(e)=>onChange(e)} value={data.qty_total} required={true} className="w-full"/>
                </Form.Field>
                <Form.Field>
                    <InputLabel forInput="date" value="Data" required={true}/>
                    <TextInput type="date" name="date" handleChange={(e)=>onChange(e)} value={data.date} required={true} className="w-full"/>
                </Form.Field>
            </Form.Row>
            <Form.Row>
                <Form.Field className="flex items-center">
                    <InputLabel forInput="show_protocol" value="Ha un protocollo?"  className="mr-4"/>
                    <TextInput type="checkbox" name="show_protocol" handleChange={(e)=>onChange(e)} value={data.qty_available}  />
                </Form.Field>
            </Form.Row>
            <Form.Row>
                <Form.Field className="flex items-center">
                    <InputLabel forInput="show_slot" value="Gestisci il magazzino?" className="mr-4"/>
                    <TextInput type="checkbox" name="show_slot" handleChange={(e)=>onChange(e)} value={data.qty_available}  />
                </Form.Field>
            </Form.Row>
            {/*<Form.Row>
                <Form.Field>
                    <InputLabel forInput="desc" value="Descrizione" required={false}/>
                    <TextArea name="desc" handleChange={(e)=>onChange(e)} className="w-full h-[200px]">{data.desc}</TextArea>
                </Form.Field>
            </Form.Row>
            <Form.Row>
                <Form.Field>
                    <InputLabel forInput="company" value="Azienda" required={true}/>
                    <Select people={companies} onChange={onSelectChange('company_id')} initial={initial_value.company} getName={(company)=>{return company.id+" - "+company.name}}/>
                </Form.Field>
                <Form.Field>
                    <InputLabel forInput="catgeory" value="Categeoria" required={true}/>
                    <Select people={categories} onChange={onSelectChange('category_id')} initial={initial_value.category}/>
                </Form.Field>
                <Form.Field>
                    <InputLabel forInput="subcategpry" value="Sottocategeoria" required={false}/>
                    <Select people={subcategories} onChange={onSelectChange('subcategory_id')} initial={initial_value.subcategory}/>
                </Form.Field>
            </Form.Row>*/}
            {<Button type="button" onClick={(e)=>onClick(e)}>Salva</Button>}
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

const Field=({children,widthClass,className})=>{
    return(
        <div className={twMerge(widthClass,className," [&>*]>w-full")}>{children}</div>
    )
}

Form.Row=Row;
Form.Field=Field;
