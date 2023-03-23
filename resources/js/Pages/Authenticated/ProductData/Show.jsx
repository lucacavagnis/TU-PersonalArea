import React, {useState, useContext, useRef, useEffect} from 'react';
import AuthenticatedLayout, {CartContext} from '@/Layouts/AuthenticatedLayout';
import Tab from "@/Components/Tab";
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import ProductPopUp from "@/Components/Authenticated/Product/ProductPopUp";
import ReservedPrice from "@/Components/ReservedPrice";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import ProductAttributes from "@/Components/Authenticated/Product/ProductAttributes";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Buttons/Button";
import {Inertia} from "@inertiajs/inertia";
import Quantity from "@/Components/Authenticated/Product/Quantity";
import {TfiZoomIn} from "react-icons/all";
import Table from "@/Components/Table/Table";
import {upperCase} from "lodash/string";
import Status from "@/Components/Authenticated/Order/Status";
import {isCa, isTu} from "@/Helpers/Product";
export default function Show(props) {
    const product=props.product;

    const {data,setData,post,reset} = useForm({
        product_data_id: product.id,
        products: product.products.filter(p => p.qty_available>0).map((p)=>{
                return {id: p.id, qty: 0}
        }),
    });

    const submit=(e,contextAction)=>{
        e.preventDefault();
        post(route('cart.store.many'),{
            preserveScroll: true,
            onSuccess: ()=>{
                reset();
                contextAction();
            }
        })
    }

    const totalSelectedProduct=()=>{
        let t=0;
        console.log(data)
        data.products.forEach((p)=>{
            t+=p.qty;
        })
        return t;
    }

    const onRangeChange=(e)=>{
        e.preventDefault();
        setData(e.target.name.split('-')[0],data[e.target.name.split('-')[0]].map((el,i)=>{
            if(i===parseInt(e.target.name.split('-')[1]))
                return {id: el.id,qty: parseInt(e.target.value)};
            else
                return el;
        }))
    }

    let available_products=[],unavailable_products=[];
        product.products.forEach((p,i)=>{
        if((p.qty_available-p.qty_requested)>0)
            available_products.push(<PhysicalProduct product={p} data={data} id={i} onChange={onRangeChange}/>)
        else
            unavailable_products.push(<HistoryProduct product={p} />);
    })



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

                    <ProductDataTab product={product} />

                    <div className="flex justify-between" id="warehouse">
                        <WarehouseTab title="Ora in magazzino" position="first">
                            {available_products.length===0?<p>Prodotto non presente in magazzino</p>:<>{available_products}
                                <div className="flex items-center mt-8">
                                    <CartButton className="mr-4 mt-0" submit={submit} />
                                    <p className="font-bold"><span className="text-lg">{totalSelectedProduct()}</span> prodotti selezionati</p>
                                </div></>}
                        </WarehouseTab>
                        <WarehouseTab title="Storico" position="second">
                            <HistoryTable>
                                {unavailable_products.length===0?<p>Prodotto non presente in storico</p>:unavailable_products}
                            </HistoryTable>
                        </WarehouseTab>
                    </div>

                </div>
            </div>

        </AuthenticatedLayout>
        </div>
    );
}

export const ProductDataTab=({product})=>{
    return(
        <Tab className="flex justify-between w-full mb-4">
            <div className="w-1/2 mr-4 relative">
                <ProductImage name={product.image} className="h-full"/>
            </div>

            <div className="w-1/2 ml-4">
                <div className="mb-8">
                    <span className="mb-2 block">{product.sku}</span>
                    <h1 className="font-bold hover:underline"><Link href={route('productData.show',product.id)}>{product.name}</Link></h1>
                    <p className="uppercase font-semibold mb-4 text-slate-500 text-sm">{product.category.name+" / "+product.subcategory.name}</p>
                    <p className="mb-4">{product.desc}</p>
                    <div className="flex items-center">
                        <Button type="link" href={route('productData.show',product.id)+"#warehouse"} className="mr-2">Vedi disponibilità </Button>
                        <Button type="link" kind="primary">Richiedi nuova qutazione</Button>
                    </div>

                </div>

                {/*<div className="mb-8 hidden">
                                    {!props.product.property &&
                                        <>
                                            <ReservedPrice fullPrice={product.price} reservedPrice={product.reserved_price} className="text-2xl mb-4 font-semibold"/>
                                            <Quantity product={props.product} />
                                            <ProductAttributes product={props.product} />
                                        </>
                                    }

                                </div>

                                <div className="mb-8 hidden">
                                        {((props.product.qty_available>0 && !expired) || props.product.property || props.product.payed)?
                                            <BuyInput  {...props}/>:
                                            <Button type="link" href="">Ordina di nuovo</Button>
                                        }

                                </div>*/}
            </div>
        </Tab>
    )
}

const PhysicalProduct = ({id,product,data,onChange}) => {
    const p=product;

    return(
        <div className="mb-4 border-b pb-2">
            <div className="flex justify-between">
                <div className="min-w-[50%]">
                    <span className="text-xs text-slate-400 uppercase">{isTu(p)?"Da Tutto Ufficio":"Da terzi"}</span>
                    <p>{isCa(p)?"Conto aperto":"Conto deposito"}</p>
                    <BuyInput name={"products-"+id} product={p} qty={data.products[id].qty} onChange={onChange}/>
                </div>
                <div className="text-right">
                    <Button kind="tertiary" href={route('products.show',product.id)}  className="flex align-items-center">Vedi dettagli</Button>
                </div>
            </div>

        </div>
    )
}

const HistoryProduct = ({product}) => {

    const rowClasses="[&>*]:py-4";


    return (
            <Table.Row key={product.id} className={"border-b border-slate-100 text-sm"+" "+rowClasses}>
                <Table.Field>{isTu(product)?"Tutto Ufficio":"Terzi"}</Table.Field>
                <Table.Field>{isCa(product)?"Conto aperto":"Conto deposito"}</Table.Field>
                <Table.Field>{product.qty_total}</Table.Field>
                <Table.Field><Button type="link" kind="tertiary" href={route('products.show',product.id)} className="mt-0 align-middle">Dettagli</Button></Table.Field>
            </Table.Row>
    )
}

const HistoryTable = ({children}) => {
    const rowClasses="[&>*]:py-4";
    const headerClasses="text-left";

    return(
        <Table>
            <Table.Row className={"text-slate-500 pb-2 pt-2 border-b border-t border-slate-100 "+rowClasses}>
                <Table.Header className={headerClasses}>Fornitore</Table.Header>
                <Table.Header className={headerClasses}>Tipo</Table.Header>
                <Table.Header className={headerClasses}>Q.tà</Table.Header>
                <Table.Header className={headerClasses}></Table.Header>
            </Table.Row>

            {children}
        </Table>
    )
}

const WarehouseTab=({title,children,position})=>{
    return(
        <Tab containerClassName={(position==="first"?"mr-2":"ml-2")+" w-1/2"}>
            <div>
                <h2 className="font-bold mb-4">{title}</h2>
                {children}
            </div>
        </Tab>
    )
}

export const CartButton = ({submit,className}) => {
    const {openCart}=useContext(CartContext)

    return(
        <Button type="submit" className={className} onClick={(e)=>{
            submit(e,openCart);
        }
        }>Aggiungi al carrello</Button>
    )
}

export const BuyInput=({name,product,qty,onChange})=>{
    return(
        <div>
            {isTu(product) && <ReservedPrice reservedPrice={product.protocol_product.price} fullPrice={product.protocol_product.original_price} />}
            <input name={name} value={qty} type="range" min={0} max={product.qty_available-product.qty_requested} className="w-full h-2 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full outline-0 appearance-none" onChange={(e)=>onChange(e)}/>
            <span className="text-lg font-bold">{qty+" / "+(product.qty_available-product.qty_requested)+" disponibili"}</span>
        </div>

)
}
