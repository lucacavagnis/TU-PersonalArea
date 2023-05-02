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
    console.log(props)
    let products=props.products.data;

    const  [open,setOpen]=useState(false);

    const toggleOpen=(e)=>{
        if(e)
        e.preventDefault();
        setOpen((prev)=>!prev);
    }

    products = products.map((product)=>{
        return(
            <Product product={product} available={props.available}/>
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
                    <div className="flex justify-between items-center mb-4"><h3 className="font-semibold text-lg mb-2 ">{props.input.search && ("Risultati per: "+props.input.search)}</h3><Button onClick={toggleOpen}>Filtra e Ordina</Button></div>



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

const Product=({product})=>{
    const tag_class=" font-semibold border-2 block rounded p-1 bg-white absolute top-6 w-fit "
    return(
        <li key={product.id} className=" bg-white overflow-hidden shadow-sm sm:rounded-lg w-[calc(25%-1rem)] mr-2 ml-2 mb-4">
            <div className="p-6 bg-white border-b border-gray-200 h-full flex flex-col justify-between relative">
                <div>
                    <ProductImage name={product.image} className="h-48"/>
                    <span className="tex-sm uppercase text-slate-500">{product.sku}</span>
                    <h3 className="font-bold text-sm uppercase mb-2">{product.name}</h3>
                </div>
                <div>
                    {product.qty_available-product.qty_requested>0?
                        <p className={tag_class+" font-semibold text-green-700 border-green-700"}>{product.qty_available-product.qty_requested + " Disponbili"}</p>:
                        <p className={tag_class+" text-red-700 font-semibold border-2 border-red-700 block rounded p-1 w-fit"}>Esaurito</p>


                    }
                    <Button href={route("products.show",product.id)}>
                        Visualizza
                    </Button>
                </div>

            </div>
        </li>
    )

}
