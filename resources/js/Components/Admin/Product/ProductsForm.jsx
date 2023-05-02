import React from 'react';
import {useForm} from '@inertiajs/inertia-react';
import Tab from "@/Components/Tab";
import Button from "@/Components/Buttons/Button";
import TextInput from "@/Components/Inputs/TextInput";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextArea from "@/Components/Inputs/TextArea";
import Select from "@/Components/Inputs/Select";
import {ImageUploadInput} from "@/Components/Inputs/ImageUploadInput";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import {twMerge} from "tailwind-merge";
import BackgroundImage from "@/Components/BackgorundImage";


export const ProductsForm=({default_value,companies,categories,subcategories}) =>{
    let initial_value

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
        initial_value=default_value

    const {data,setData,post,put}=useForm({
        name:initial_value.name,
        sku:initial_value.sku,
        desc:initial_value.desc,
        company_id:initial_value.company.id,
        category_id:initial_value.category.id,
        subcategory_id:initial_value.subcategory.id,
        image:initial_value.image,
    })

    console.log(data)


    const onClick=(e)=>{
        e.preventDefault;
        default_value?put(route('admin.products.update',initial_value.id),{_method:'put'}):post(route('admin.products.store'));
    }

    const onChange=(e)=>{
        e.preventDefault();
        setData(e.target.name,e.target.type==="file"?e.target.files[0]:e.target.value)
    }

    const onSelectChange=(name)=>{
        return (value) => {
            setData(name, value);
        };
    }

    const getImage=(image)=>{
        console.log(image)
        const className="w-20 h-20"
        return (typeof image === "string" || image instanceof String)?<ProductImage name={image} className={className}/>:<img src={URL.createObjectURL(image)} className={className} />
    }


    return (
        <Form>
            <Form.Row>
                <Form.Field className="flex items-center">
                    <div className="mr-4">{getImage(data.image)}</div>
                    <div>
                        <InputLabel forInput="image" value="Immagine" required={false} className="mb-2"/>
                        <ImageUploadInput name="image" onChange={onChange} value={data.image}/>
                    </div>
                </Form.Field>

            </Form.Row>
            <Form.Row>
                <Form.Field>
                    <InputLabel forInput="name" value="Nome" required={true}/>
                    <TextInput name="name" handleChange={(e)=>onChange(e)} value={data.name} required={true} className="w-full"/>
                </Form.Field>
                <Form.Field>
                    <InputLabel forInput="sku" value="SKU" required={true}/>
                    <TextInput name="sku" handleChange={(e)=>onChange(e)} value={data.sku} required={true} className="w-full"/>
                </Form.Field>
            </Form.Row>
            <Form.Row>
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

const Field=({children,widthClass,className})=>{
    return(
        <div className={twMerge(widthClass,className," [&>*]>w-full")}>{children}</div>
    )
}

Form.Row=Row;
Form.Field=Field;
