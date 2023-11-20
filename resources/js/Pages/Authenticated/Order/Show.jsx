import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Tab from "@/Components/Tab";
import { Head } from '@inertiajs/inertia-react';
import ProductSummary from "@/Components/Authenticated/Product/ProductSammury";
import {capitalize} from "lodash/string";
import Price from "@/Components/Admin/Product/Price";
import Status from "@/Components/Authenticated/Order/Status";
import Button from "@/Components/Buttons/Button";
import {ProductListDetails} from "@/Components/Admin/Product/ProductListDetails";
import Protocol from "@/Helpers/Protocol";
import moment from "moment";

export default function Show(props) {
    console.log(props)
    const order=props.order;

    const products=order.order_products.length>0?order.order_products.map((order_product)=>
        {
            return <ProductSummary product={order_product.lot.product} original_price={order_product.lot.product.last_original_price} price={order_product.lot.product.last_price} qty={order_product.quantity} />
        }
    ):<p>Nessun prodotto presente</p>


    console.log(props)

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ordine #{order.id}</h2>}
        >
            <Head title={"Ordine #"+order.id+" | Ordini"} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex w-full">
                        <ProductListDetails products={products} title="Dettagli ordine" >
                            {order.status && order.approver && order.approved_at && order.status!=="pending"
                                && (
                                    <>
                                        <h2 className="font-bold mb-4">Stato</h2>
                                        <DataParagraph title="stato attuale" >{<Status status={order.status}/>}</DataParagraph>
                                        <DataParagraph title="gestito da" >{order.approver.name}</DataParagraph>
                                        <DataParagraph title="Data gestione" >{moment(order.approved_at).format("DD/MM/YYYY HH:mm:ss")}</DataParagraph>
                                    </>
                                )
                            }

                            <h2 className="font-bold mb-4">Dati</h2>
                            <DataParagraph title="referente"><span>{order.user.name}</span><a className="block text-sm text-indigo-500" href={"mailto:"+order.user.email}> {order.user.email}</a></DataParagraph>
                            <DataParagraph title="ufficio" >{order.office}</DataParagraph>
                            <DataParagraph title="indirizzo"><span>{order.place.address_first_line}</span><span className="block">{order.place.address_second_line}</span></DataParagraph>
                            {/*<DataParagraph title="Totale" ><Price value={total} /></DataParagraph>*/}
                            {order.status && order.status==="pending" && props.auth.user.company.supervision && props.auth.user.role===1 && (
                                    <div className="flex"><Button className="mr-2" href={route('orders.approve',order.id)}>Approva</Button><Button className="bg-white text-rose-700 border border-rose-700 hover:bg-rose-700 hover:text-white" href={route('orders.reject',order.id)}>Rifiuta</Button></div>
                                )
                            }
                        </ProductListDetails>
                    </div>

                </div>
            </div>

        </AuthenticatedLayout>
    );
}

export const DataParagraph=({title, children})=>{
    return(
        <div>
            <h4 className="font-bold">{capitalize(title)}</h4>
            <p className="mb-2 border-b border-slate-300 pb-2 text-slate-700">{children}</p>
        </div>
    )
}
