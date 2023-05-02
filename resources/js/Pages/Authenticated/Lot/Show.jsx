import React, {useState, useContext, useRef, useEffect} from 'react';
import AuthenticatedLayout, {CartContext} from '@/Layouts/AuthenticatedLayout';
import Tab from "@/Components/Tab";
import {Head, useForm} from '@inertiajs/inertia-react';
import ProductPopUp from "@/Components/Authenticated/Product/ProductPopUp";
import ReservedPrice from "@/Components/Admin/Product/ReservedPrice";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import ProductAttributes from "@/Components/Authenticated/Product/ProductAttributes";
import TextInput from "@/Components/Inputs/TextInput";
import Button from "@/Components/Buttons/Button";
import {Inertia} from "@inertiajs/inertia";
import Quantity from "@/Components/Authenticated/Product/Quantity";
import {TfiZoomIn} from "react-icons/all";
import Table from "@/Components/Table/Table";
import {upperCase} from "lodash/string";
import Status from "@/Components/Authenticated/Order/Status";
import {isCa, isTu} from "@/Helpers/Product";
import OrdersTable from "@/Components/Authenticated/Order/OrdersTable";
import {BuyInput, CartButton, ProductDataTab} from "@/Pages/Authenticated/Product/Show";
export default function Show(props) {
    console.log(props)

    const product=props.product;
    const productData=product.data;
    const orders=props.orders;
    const slots=product.warehouse_slots;


    const {data,setData,post,reset} = useForm({
        product_data_id: productData.id,
        product_id: product.id,
        qty: 0,
    });

    console.log(props)

    const submit=(e,contextAction)=>{
        e.preventDefault();
        post(route('cart.store.one'),{
            preserveScroll: true,
            onSuccess: ()=>{
                reset();
                contextAction();
            }
        })
    }

    const totalSelectedProduct=()=>{
        let t=0;
        data.products.forEach((p)=>{
            t+=p.qty;
        })
        return t;
    }

    const onRangeChange=(e)=>{
        e.preventDefault();
        setData(e.target.name,e.target.value)
    }




    return (
        <div>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={props.product.name}
        >
            <Head><title>{props.product.name}</title></Head>

            <div className="py-12">

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="mb-4 flex w-full">
                        <Tab containerClassName="w-5/6 mr-2">
                            <div className="flex jusitfy-between">
                                <div className="w-1/2">
                                    <div className="flex items-center"><h3 className="text-slate-500 uppercase mr-4">{isTu(product)?"Da Tutto Uffico":"Da Terzi"}</h3>{isTu(product) && <Button kind="tertiary" href={route('protocols.show',product.protocol_product.protocol.id)}>Vedi portcollo</Button>}</div>
                                    <p>{isCa(product)?"Conto aperto":"Conto deposito"}</p>
                                    <p>{"Qt.à iniziale: "+ product.qty_total}</p>
                                </div>
                                {/*<div className="w-1/2">
                                    {(product.qty_available-product.qty_requested)>0 && <div>
                                    <BuyInput name="qty" product={product} qty={data.qty} onChange={onRangeChange}/>
                                    <CartButton submit={submit}/></div>}
                                </div>*/}
                            </div>



                        </Tab>
                        <Tab containerClassName="w-1/6 ml-2">
                            <h3 className="font-bold mb-2">Magazzino</h3>
                            {slots.length!==0?slots.map((slot)=>{
                            return(
                                <p className="py-2 my-1 border-b">{slot.product_location.qty + " in " + slot.rack+slot.shelf}</p>
                                )}
                            ):<p>Non presente in magazzino</p>}
                        </Tab>
                    </div>

                    {/*<ProductDataTab product={productData} />*/}

                    <Tab>
                        <h2 className="font-bold mb-4">Ordini di evasione del lotto</h2>
                        <OrdersTable orders={orders} inputs={props.inputs} />
                    </Tab>


                </div>
            </div>

        </AuthenticatedLayout>
        </div>
    );
}


