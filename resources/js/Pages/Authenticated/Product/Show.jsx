import React, {useContext} from 'react';
import AuthenticatedLayout, {CartContext} from '@/Layouts/AuthenticatedLayout';
import Tab from "@/Components/Tab";
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import ReservedPrice from "@/Components/Admin/Product/ReservedPrice";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import TextInput from "@/Components/Inputs/TextInput";
import Button from "@/Components/Buttons/Button";
import {Inertia} from "@inertiajs/inertia";
import Quantity from "@/Components/Authenticated/Product/Quantity";
import Table from "@/Components/Table/Table";
import {isCa, isTu} from "@/Helpers/Product";
import {Format_date} from "@/Helpers/String";
export default function Show(props) {

    const product=props.product;

    let processing=false;

    const onClick=()=>{
        Inertia.post(route('products.quotation',product.id),{},{
            onStart: ()=>{
                processing=true;
            },
            onFinish: ()=>{
                processing=false;
            }
        })
    }

    const {data,setData,post,reset} = useForm({
        product_id: product.id,
        qty:0,
    });


    const submit=(e,contextAction)=>{
        e.preventDefault();
        post(route('cart.store'),{
            preserveScroll: true,
            onSuccess: ()=>{
                reset();
                contextAction();
            }
        })
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

    const onSingleChange=(e)=>{
        e.preventDefault()
        setData(e.target.name,parseInt(e.target.value))
    }

    let available_products=[],unavailable_products=[];
        product.lots.forEach((p,i)=>{
            console.log((p.qty_available-p.qty_requested))
        if((p.qty_available-p.qty_requested)>0)
            available_products.push(<PhysicalProduct lot={p} data={data} id={i} onChange={onRangeChange}/>)
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

                    <ProductDataTab product={product} >
                        {(product.qty_available - product.qty_requested)>0?<><div className="flex items-center mt-2">
                                <TextInput name="qty" value={data.qty} type="number" min={0} max={product.qty_available-product.qty_requested} handleChange={(e)=>onSingleChange(e)} className="mr-4"/>
                                <p className="font-bold">{"/ "+ (product.qty_available - product.qty_requested) +" disponibili"}</p>
                            </div>

                                <div className="flex items-center">
                                    <CartButton className="mr-2" submit={submit}/>
                                    <Button  disbaled={processing} pending={processing} type="button" kind="primary" onClick={onClick}>Richiedi nuova qutazione</Button>
                                </div></>:
                            <div><p className="font-bold text-lg text-red-700">Esaurito / Disponibilità da verificare</p>
                                <Button  disbaled={processing} pending={processing} type="button" kind="primary" onClick={onClick}>Richiedi nuova quotazione</Button>
                            </div>}

                    </ProductDataTab>

                    <div className="flex justify-between" id="warehouse">
                        <WarehouseTab title="Lotti in magazzino" position="first">
                            {available_products.length===0?<p>Prodotto non presente in magazzino</p>:<>{available_products}
                            </>}
                        </WarehouseTab>
                        <WarehouseTab title="Storico lotti" position="second">
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

export const ProductDataTab=({children,product})=>{
    return(
        <Tab className="flex justify-between w-full mb-4">
            <div className="w-1/2 mr-4 relative">
                <ProductImage name={product.image} className="h-full"/>
            </div>

            <div className="w-1/2 ml-4">
                <div className="mb-8">
                    <span className="mb-2 block">{product.sku}</span>
                    <h1 className="font-bold hover:underline"><Link href={route('products.show',product.id)}>{product.name}</Link></h1>
                    {product.last_price && <div className="mb-4 flex items-baseline">
                        <ReservedPrice fullPrice={product.qty_available-product.qty_requested>0?product.last_original_price:null} reservedPrice={product.qty_available-product.qty_requested?product.last_price:product.last_original_price} className="text-lg mr-2"/>
                        {product.qty_available-product.qty_requested>0 && <p className="text-sm text-gray-500">Ultima quotazione</p>}

                    </div>}
                    <p className="uppercase font-semibold mb-4 text-slate-500 text-sm">{product.category.name+" / "+product.subcategory.name}</p>
                    <p className="mb-4">{product.desc}</p>
                    {children}
                </div>

            </div>
        </Tab>
    )
}

const PhysicalProduct = ({lot}) => {
    const l=lot;

    return(
        <div className="mb-4 border-b pb-2">
            <div className="flex justify-between">
                <div className="min-w-[50%]">
                    <span className="text-xs text-slate-400 uppercase">{isTu(l)?"Da Tutto Ufficio":"Da terzi"}</span>
                    <p>{isCa(l)?"Conto aperto":"Conto deposito"}</p>
                    {/*<p className="font-bold">{(p.qty_available-p.qty_requested) + " disponibili / " + p.qty_total + " totali"}</p>*/}
                    <Quantity partial={(l.qty_available-l.qty_requested)} total={l.qty_total} size="small"/>
                    {/*<BuyInput name={"products-"+id} product={p} qty={data.products[id].qty} onChange={onChange}/>*/}
                </div>
                <div className="text-right">
                    <span className="text-sm text-slate-700">{Format_date(l.date)}</span>
                    {lot.protocol_lot && <>
                        <Button kind="tertiary" href={route('protocols.show',lot.protocol_lot.protocol_id)} className="flex align-items-center">Vedi protocollo</Button>
                        </>
                    }
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
                <Table.Field>{isTu(product)&&<Button type="link" kind="tertiary" href={route('protocols.show',product.protocol_lot.protocol.id)} className="mt-0 align-middle">Vedi protocollo</Button>}</Table.Field>
            </Table.Row>
    )
}

const HistoryTable = ({children}) => {

    return(
        <Table>
            <Table.Inner>
                <Table.HeaderRow >
                    <Table.Header>Fornitore</Table.Header>
                    <Table.Header>Tipo</Table.Header>
                    <Table.Header>Q.tà</Table.Header>
                    <Table.Header></Table.Header>
                </Table.HeaderRow>
                <Table.Body>
                    {children}
                </Table.Body>
            </Table.Inner>
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

export const BuyInput=({name,product,qty,onChange,})=>{
    return(
        <div>
            {isTu(product) && <ReservedPrice reservedPrice={product.protocol_product.price} fullPrice={product.protocol_product.original_price} />}
            <div className="flex items-center">
                <TextInput name={name} value={qty} type="number" min={0} max={product.qty_available-product.qty_requested} handleChange={(e)=>onChange(e)} className="mr-4"/>
                <span className="text-lg font-bold">{"di "+(product.qty_available-product.qty_requested)+" disponibili"}</span>
            </div>
        </div>

)
}
