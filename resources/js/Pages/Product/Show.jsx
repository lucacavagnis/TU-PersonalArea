import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Tab from "@/Components/Tab";
import {Head, useForm} from '@inertiajs/inertia-react';
import ProductPopUp from "@/Components/Product/ProductPopUp";
import ReservedPrice from "@/Components/ReservedPrice";
import ProductImage from "@/Components/Product/ProductImage";
import ProductAttributes from "@/Components/Product/ProductAttributes";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Buttons/Button";
import {lightColor} from "@/Helpers/Product";

export default function Show(props) {

    const { data, setData, post, processing } = useForm({
        qty: 0,
        product_id: props.product.id,
        redirect: false,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const [open, setOpen] = useState(false);

    const triggerClose = (e) => {
        if(e)
            e.preventDefault();
        setOpen(false);
    }

    const triggerOpen = (e) => {
        e.preventDefault();
        if(data.qty>0)
            setOpen(true);
    }

    const expired=props.product.remaining_days===0;

    const qtyRemaining=props.product.qty_available-props.product.qty_requested;


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
                    <ProductPopUp product={props.product}  services={props.services} onHandleChange={onHandleChange} data={data} setData={setData} processing={processing} open={open} post={post} triggerClose={triggerClose}/>

                    <Tab className="flex justify-between w-full">
                        <div className="w-1/2 mr-4 relative">
                            <div className="absolute top-1 left-1">
                                <span className={(expired?"bg-rose-500":"bg-slate-500")+" uppercase text-sm p-2 rounded font-bold text-white"}>{!expired?"Scade il "+props.product.expire_date:"Scaduto"}</span>
                            </div>
                           <ProductImage name={props.product.image} className="h-full"/>
                        </div>

                        <div className="w-1/2 ml-4">
                            <h1 className="font-bold">{props.product.name}</h1>
                            <ReservedPrice fullPrice={props.product.price} reservedPrice={props.product.reserved_price} className="text-xl mb-4 font-semibold"/>
                            <h3 className="uppercase font-bold mb-2"><span className={lightColor(props.product)+" h-3 w-3 inline-block rounded-full mr-2"}></span><span className="align-middle">{qtyRemaining} disponibile su {props.product.qty_total}</span></h3>
                            <ProductAttributes product={props.product} />
                            <p className="mb-4">{props.product.desc}</p>
                            <div>
                                <div>


                                    {props.product.qty_available>0 && !expired && <>
                                                <TextInput
                                                    type="number"
                                                    name="qty"
                                                    className="mt-1 block w-full"
                                                    autoComplete="qty"
                                                    value={data.qty}
                                                    isFocused={true}
                                                    max={(props.product.qty_available-props.cart_qta)}
                                                    handleChange={onHandleChange}
                                                    min={0}
                                                />
                                            <div onClick={(e) => triggerOpen(e)}>
                                                <Button type="button" disabled={data.qty < 1}>Acquista</Button>
                                            </div>
                                            </>}
                                    {(props.product.qty_available===0 || expired ) && props.auth.user.role===1 &&
                                            <Button type="link" href="">Ordina di nuovo</Button>
                                        }
                                </div>
                            </div>
                        </div>
                    </Tab>
                </div>
            </div>

        </AuthenticatedLayout>
        </div>
    );
}
