import React from 'react';
import {Head, useForm} from '@inertiajs/inertia-react';
import Admin from "@/Layouts/AdminLayout";
import ProductSummary from "@/Components/Authenticated/Product/ProductSammury";
import {LotsTable} from "@/Components/Admin/Protocol/LotsTable";
import Tab from "@/Components/Tab";
import {DataParagraph} from "@/Pages/Authenticated/Order/Show";
import Protocol from "@/Helpers/Protocol";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import Button from "@/Components/Buttons/Button";
import {Format_date_input} from "@/Helpers/String";
import Select from "@/Components/Inputs/Select";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import {AddNewLine} from "@/Components/Admin/AddNewLine";



export default function Show(props) {

    const protocol=props.protocol

    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Protocollo</h2>}
        >
            <Head title="Protocollo" />
            <div className="py-12">


                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                        <Tab containerClassName="mb-4 w-1/2">
                            <DataParagraph title="Tipo"><span>{Protocol.typeText(protocol)}</span></DataParagraph>
                            <DataParagraph title="Riferimento"><span>{protocol.referral}</span></DataParagraph>
                            <DataParagraph title="Data">{Protocol.getDate(protocol)}</DataParagraph>
                            <DataParagraph title="Scdenza">{Protocol.getExpireDate(protocol)}</DataParagraph>

                        </Tab>

                    <Tab>
                        <h2 className="font-semibold mb-4 border-b">Prodotti del protocolo</h2>
                        <LotsTable protocol={props.protocol} />
                        {props.products.length!=0 && <NewProtocol protocol={props.protocol} products={props.products} />}
                    </Tab>

                </div>
            </div>
        </Admin>
    );
}

const NewProtocol=({protocol,products})=>{
    const {data,setData,post,transform}=useForm(
        {
            id: protocol.id,
            product:products[0],
            lot_id:products[0].lots[0].id,
            original_price: 0.00,
            price: 0.00,
        }
    )

    const addNew=()=>{
        transform((data)=>({
            ...data,
            product:data.product.id
        }))
        post(route('admin.protocol_lots.store'),)
    }

    const handleChange=(e)=>{
        setData(e.target.name,e.target.value)
    }

    const onSelectChange=(name)=>{
        return (value) => {
            setData(name, value);
        };
    }

    return(
        <AddNewLine>
        <div className="flex py-4 pt-4 border-t border-indigo-300 items-end">
            <div className="mr-4">
                <InputLabel forInput="product" value="Prodotto" className="mb-2"/>
                <Select people={products} getName={(product)=>{
                    return <div className="flex items-center"><ProductImage name={product.image} className="w-8 h-8 mr-4 mb-0" /><p>{product.sku}</p> </div>
                }
                } onChange={onSelectChange('product')} getValue={(product)=>(product)}/>
            </div>
            <div className="mr-4">
                <InputLabel forInput="product" value="Lotto (Id - Qt.à)" className="mb-2"/>
                <Select people={data.product.lots} getName={(lot)=>{
                    return lot.id+" - "+lot.qty_total
                }
                } onChange={onSelectChange('lot_id')}/>
            </div>
            <div className="mr-4">
                <InputLabel forInput="date" value="Prezzo originale" className="mb-2"/>
                <TextInput step={0.01} type="number" name="original_price" value={data.original_price} min={0} handleChange={handleChange} className="min-w-[8rem]"/>
            </div>
            <div className="mr-4">
                <InputLabel forInput="date" value="Prezzo riservato" className="mb-2"/>
                <TextInput step={0.01} type="number" name="price" value={data.price} min={0} handleChange={handleChange} className="min-w-[8rem]"/>
            </div>
            <Button type="button" onClick={addNew}>Aggiungi</Button>
        </div>
        </AddNewLine>
    )
}
