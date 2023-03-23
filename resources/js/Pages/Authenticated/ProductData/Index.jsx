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

    console.log(props)

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
    return(
        <li key={product.id} className={(product.products_sum_qty_available>0?"":"outline outline-rose-300 outline-2")+" bg-white overflow-hidden shadow-sm sm:rounded-lg w-[calc(25%-1rem)] mr-2 ml-2 mb-4"}>
            <div className="p-6 bg-white border-b border-gray-200 h-full flex flex-col justify-between">
                <div>
                    <ProductImage name={product.image} className="h-48"/>
                    <span className="tex-sm uppercase text-slate-500">{product.sku}</span>
                    <h3 className="font-bold text-sm uppercase mb-2">{product.name}</h3>
                </div>
                <div>
                    <Quantity partial={product.products_sum_qty_available-product.qty_requested} total={product.products_sum_qty_total} size="small" />
                    <Button href={route("productData.show",product.id)}>
                        Visualizza
                    </Button>
                </div>

            </div>
        </li>
    )

}
