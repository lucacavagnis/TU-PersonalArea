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
import Tab from "@/Components/Tab";
import {Autocomplete, Box, Checkbox, FormControlLabel, FormGroup, TextareaAutosize, TextField} from "@mui/material";
import CategoriesDataManager from "@/Components/Admin/Product/CategoriesDataManager";
import {MuiFileInput} from "mui-file-input";
import _ from "lodash";
import {imageUrl} from "@/Components/BackgorundImage";


export const ProductsForm=({product,companies,categories,subcategories}) =>{

    let initial_values
    const categoriesDataManager=CategoriesDataManager

    if(!product)
        initial_values={
            name: "",
            sku: "",
            desc: "",
            company: companies[0],
            category_id: categories[0].id,
            subcategory_id: subcategories[0].id,
            image: null,
        }
    else{
        initial_values={...product}
    }


    initial_values.categories=categoriesDataManager.Data(categories,product)
    initial_values._method=product?'put':null


    const {data,setData,post}=useForm(initial_values)


    const onClick=(e)=>{
        e.preventDefault;
        product?post(route('admin.products.update',product.id),{method:'put'}):post(route('admin.products.store'));
    }

    const onChange=(e)=>{
        setData(e.target.name,e.target.value)
    }

    const onFileChange=(name,value)=>{
        setData(name,value)
    }

    const onAutocompleteChange=(e,v)=>{
        setData("company",v)
    }

    const onSelectChange=(name)=>{
        return (value) => {
            setData(name, value);
        };
    }

    const getImage=(image)=>{
        const className="m-1 mx-auto rounded mb-4 h-64"
        return image?<img src={(!image || typeof image === "string" || image instanceof String )?imageUrl(image):URL.createObjectURL(image)} className={className} alt="Product image"/>:null
    }

    function loadURLToInputFiled(product){
        getImgURL(imageUrl(product.image), (imgBlob)=>{
            // Load img blob to input
            // WIP: UTF8 character error
            console.log(product.image)
            let fileName = product.image
            let file = new File([imgBlob], fileName,{type:product.image.split(".")[1], lastModified:new Date().getTime()}, 'utf-8');
            let container = new DataTransfer();
            container.items.add(file);
            document.querySelector('[type=file]').files = container.files;

        })
    }
// xmlHTTP return blob respond
    function getImgURL(url, callback){
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            callback(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }




    return (
        <div className="flex">
            <Tab containerClassName="w-2/3 mr-4">
                <h2 className="font-bold">Dettagli prodotto</h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        '& .MuiOutlinedInput-input' : {boxShadow: 'none'},
                        '& > div' : { my: "1em"}
                    }}
                    noValidate
                    autoComplete="off"
                >
                            <TextField name="name" onChange={(e)=>onChange(e)} value={data.name} required={true} label="Name"></TextField>
                            <TextField name="sku" onChange={(e)=>onChange(e)} value={data.sku} required={true} label="SKU" pattern="[A-Za-z0-9]+" helperText="Lo SKU è univoco e non può contenere spazi o punti."></TextField>
                            <Autocomplete
                                className="inline-flex !mt-0 !mb-0"
                                disablePortal
                                id="combo-box-demo"
                                options={companies}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Azienda" name="company" /*error={error&&error[id+".protocol_lot.protocol_id"]} helperText={error[id+".protocol_lot.protocol_id"]}*//>
                                }
                                onChange={(e,v)=>onAutocompleteChange(e,v)}
                                value={data.company}
                                isOptionEqualToValue={(o,v)=>o.id===v.id}
                                getOptionLabel={(o)=>o.name}
                                disableClearable={true}

                            />
                            <TextareaAutosize name="desc" onChange={(e)=>onChange(e)} className="w-full h-full m-1 rounded" minRows={5} value={data.desc} placeholder="Una breve descrizione del prodotto..."/>

                        <div className="flex items-baseline">
                            {product?<Button type="button" onClick={(e)=>onClick(e)}>Modifica</Button>:<Button type="button" onClick={(e)=>onClick(e)}>Aggiungi</Button>}
                            <Button href={route("admin.products.index")} className="ml-4 bg-transparent text-blue-900 hover:bg-slate-200">Annulla</Button>
                        </div>
                </Box>
            </Tab>
            <div className="w-1/3 ml-4">
                <Tab containerClassName="mb-4">
                    <h2 className="font-bold">Immagine in evidenza</h2>
                    {getImage(data.image)}
                    <MuiFileInput id="file_input" name="image" onChange={(e)=>onFileChange("image",e)} value={data.image} label="Image" className="!w-full"/>
                </Tab>
                <Tab>
                    <h2 className="font-bold">Categorie</h2>
                    <FormGroup>
                        {categoriesDataManager.Input(categories,data.categories,(e)=>{
                            const clone={...data}
                            clone["categories"][e.target.name]=e.target.checked
                            setData(clone)
                        })}
                    </FormGroup>
                </Tab>
            </div>

        </div>


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
