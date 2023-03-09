import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from "@/Components/Buttons/Button";
import {Head, useForm} from '@inertiajs/inertia-react';
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import Pagination from "@/Components/Pagination";
import FilterBar from "@/Components/Authenticated/Product/FilterBar";
import Tags from "@/Components/Authenticated/Product/Tags";
import Quantity from "@/Components/Authenticated/Product/Quantity";
import {isExpired} from "@/Helpers/Product";

export default function Index(props) {
    let products=props.products.data;

    const  [open,setOpen]=useState(false);

    const toggleOpen=(e)=>{
        if(e)
        e.preventDefault();
        setOpen((prev)=>!prev);
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
            header="Prodotti"
        >
            <Head title="Prodotti" />
            <FilterBar open={open} toggleOpen={toggleOpen} input={props.input}></FilterBar>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-end mb-4"><Button onClick={toggleOpen}>Filtra e Ordina</Button></div>


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

const Product=({element})=>{
    console.log(element);
    const qtyRemaining=element.qty_available-element.qty_requested;
    const expired=isExpired(element);
    const outOfStock=qtyRemaining===0;
    return(
        <li key={element.id} className={((!expired&&!outOfStock)||element.payed||element.property?"":"outline outline-rose-300 outline-2")+" bg-white overflow-hidden shadow-sm sm:rounded-lg w-[calc(25%-1rem)] mr-2 ml-2 mb-4"}>
            <div className="p-6 bg-white border-b border-gray-200 h-full flex flex-col justify-between">
                <div>
                    <ProductImage name={element.image} className="h-48"/>
                    <Tags product={element}/>
                    <h3 className="font-bold text-sm uppercase">{element.name}</h3>
                    {/*!element.property && <h4 className="uppercase text-sm">{element.prot_number} - {element.prot_date}</h4>*/}
                </div>
                <div>
                    <Quantity product={element.physical_product} size="small" />
                    <Button href={route("products.show",element.id)}>
                        Visualizza
                    </Button>
                </div>

            </div>
        </li>
    )

}
