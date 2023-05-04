import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from "@/Components/Buttons/Button";
import {Head, useForm} from '@inertiajs/inertia-react';
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import {qtyTextColor} from "@/Helpers/Product";

export default function Index(props) {
    let products=props.products.data;

    const {data,setData,get}=useForm('Filters',{
        search:props.input.search??'',
        order:props.input.order??'name',
    })


    const onOrderChange=(el)=>{
        setData('order',el.value);
    }

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit=(e)=>{
        const route=available?'products.index':'products.history';
        e.preventDefault();
        get(route(route),{
            only:['products']
        });
    }

    products = products.map((product)=>{
        return(
            <Product element={product} available={props.available}/>
        )
    })

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={props.available?"Prodotti":"Storico prodotti"}
        >
            <Head title={props.available?"Prodotti":"Storico prodotti"} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Filters submit={submit} handleChange={onHandleChange} orderChange={onOrderChange} data={data} initialValue={data.order}/>
            {products.length > 0 && (
                <div>

                    <ul className="flex flex-wrap">
                        {products}
                    </ul>
                    <Pagination class="mt-6" links={props.products.links} />
                </div>
            )}


            {products.length <= 0 && (
                <p>Nessun prodotto disponibile</p>
            )}

                </div>
            </div>

        </AuthenticatedLayout>
    );
}

const Filters=(props)=>{
    const orders=[{'name':'Ordina per nome','value':'name'},{'name':'Ordina per quantità','value':'qty_available'},{'name':'Ordina per scadenza','value':'expire_date'},{'name':'Ordina per categoria','value':'category_id'},{'name':'Ordina per protocollo','value':'prot_date'}]

    return(
        <form onSubmit={props.submit} className="mb-4 w-full flex justify-start">
            <TextInput containerClassName="w-1/2 mr-2" className="w-full" type="text" name="search" placeholder="Digita per cercare..." handleChange={props.handleChange} value={props.data.search}/>
            <Select options={orders} selectClassName="ml-2" onChange={props.orderChange} initialValue={props.data.order}/>
            <Button type="submit" className="mt-0 ml-2">Filtra</Button>
        </form>);

}

const Product=({element,available})=>{
    const qtyRemaining=element.qty_available-element.qty_requested;
    return(
        <li key={element.id} className={(available?"":"outline outline-rose-300 outline-2")+" bg-white overflow-hidden shadow-sm sm:rounded-lg w-[calc(25%-2rem)] mr-4 mb-4"}>
            <div className="p-6 bg-white border-b border-gray-200 h-full flex flex-col justify-between">
                <div>
                    <ProductImage name={element.image} className="h-48"/>
                    <h3 className="font-bold text-sm uppercase">{element.name}</h3>
                    <h4 className="uppercase text-sm">{element.prot_number} - {element.prot_date}</h4>
                    <span className={qtyTextColor(element)+" font-bold text-sm uppercase"}>{qtyRemaining} di {element.qty_total}</span>
                </div>
                <Button href={route("products.show",element.id)}>
                    Visualizza
                </Button>
            </div>
        </li>
    )

}
