import React, {useState, useContext, useRef, useEffect} from 'react';
import AuthenticatedLayout, {CartContext} from '@/Layouts/AuthenticatedLayout';
import Tab from "@/Components/Tab";
import {Head, useForm} from '@inertiajs/inertia-react';
import ProductPopUp from "@/Components/Authenticated/Product/ProductPopUp";
import ReservedPrice from "@/Components/ReservedPrice";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import ProductAttributes from "@/Components/Authenticated/Product/ProductAttributes";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Buttons/Button";
import {lightColor} from "@/Helpers/Product";
import {Inertia} from "@inertiajs/inertia";
import Tags from "@/Components/Authenticated/Product/Tags";
import Quantity from "@/Components/Authenticated/Product/Quantity";
export default function Show(props) {

    const expired=!props.product.property?props.product.remaining_days===0:false;

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

                    <Tab className="flex justify-between w-full">
                        <div className="w-1/2 mr-4 relative">
                            <div className="absolute top-1 left-1">
                                {!props.product.property && <span className={(expired?"bg-rose-500":"bg-slate-500")+" uppercase text-sm p-2 rounded font-bold text-white"}>{!expired?"Scade il "+props.product.expire_date:"Scaduto"}</span>}
                            </div>
                           <ProductImage name={props.product.image} className="h-full"/>
                        </div>

                        <div className="w-1/2 ml-4">
                            <div className="mb-8">
                                <Tags product={props.product}  extended={true}/>
                                <h1 className="font-bold">{props.product.name}</h1>
                                <span className="mb-2 block text-sm">{props.product.sku}</span>
                                <ReservedPrice fullPrice={props.product.price} reservedPrice={props.product.reserved_price} className="text-2xl mb-4 font-semibold"/>
                                <Quantity product={props.product} />
                            </div>

                            <div className="mb-8">
                                {!props.product.property &&
                                    <ProductAttributes product={props.product} />
                                }
                                <p className="mb-4">{props.product.desc}</p>
                            </div>

                            <div className="mb-8">
                                    {props.product.qty_available>0 && !expired && <BuyInput  {...props}/>}

                                    {(props.product.qty_available===0 || expired ) && props.auth.user.role===1 && props.product.property &&
                                        <Button type="link" href="">Ordina di nuovo</Button>
                                        }
                            </div>
                        </div>
                    </Tab>
                </div>
            </div>

        </AuthenticatedLayout>
        </div>
    );
}

const BuyInput = (props) => {

    const {openCart}=useContext(CartContext)

    const { data, setData, post, processing, transform} = useForm({
        qty: 0,
        product_id: props.product.id,
        redirect: '',
    });


    const redirect = useRef(false);

    const inertiaSubmit = (e) => {
        e.preventDefault()
        Inertia.post(route('cart.store'),{...data, redirect: redirect.current},{
            onSuccess: ()=>{
                triggerClose();
                openCart(e);
            },
        })
    }

    const submit = (e) => {
        if(!props.product.property)
            triggerOpen()
        else
            inertiaSubmit(e)

    };

    const onClick = (e,isRedirect) => {
        e.preventDefault();
        redirect.current=isRedirect;
        submit(e);
    };

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
        if(e)
            e.preventDefault();

        if(data.qty>0)
            setOpen(true);
    }

    return(
        <>
            <ProductPopUp
                product={props.product}
                services={props.services}
                onHandleChange={onHandleChange}
                data={data}
                processing={processing}
                open={open}
                triggerClose={triggerClose}
                submit={inertiaSubmit}
            />

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

            <div className="flex w-full justify-start">
                <Button  type="submit" className="mr-4" onClick={(e)=>onClick(e,false)} disabled={processing || data.qty<1}>
                    Aggiungi al carrello
                </Button>

                <Button type="submit" onClick={(e)=>onClick(e,true)} disabled={processing || data.qty<1}>
                    Acquista subito
                </Button>
            </div>
     </>
    )

}
