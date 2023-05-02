import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import Tab from "@/Components/Tab";
import Button from "@/Components/Buttons/Button";
import TextInput from "@/Components/Inputs/TextInput";
import {Inertia} from "@inertiajs/inertia";
import InputLabel from "@/Components/Inputs/InputLabel";
import InputError from "@/Components/Inputs/InputError";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import TextArea from "@/Components/Inputs/TextArea";
import {ProductListDetails} from "@/Components/Admin/Product/ProductListDetails";
import ProductSummary from "@/Components/Authenticated/Product/ProductSammury";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import Price from "@/Components/Admin/Product/Price";
import {TfiClose} from "react-icons/all";
import {Pluralize} from "@/Helpers/String";
import {InstantSubmitInput} from "@/Components/Inputs/InstantSubmitInput";

export default function Show(props) {
    console.log(props)
    const cart=props.auth.user.cart;

    const {post,data,setData,errors}=useForm({
        office:'',
        ioc:'',
        country:'',
        province:'',
        city:'',
        postal_code:'',
        address:'',
        notes:'',
    });

    const onTextChange = (e) => {
        setData(e.target.name,e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('orders.store'));
    };

    const deleteProduct=(e,id)=>{
        e.preventDefault();
        Inertia.visit(route('cart.destroy',id),{
            method:'delete',
        });
    }

    const emptyCart = (e) => {
        e.preventDefault();
        Inertia.visit(route('cart.empty'),{
            method:'delete',
        });
    }

    const onHandleChange = (event) => {
        Inertia.visit(route('cart.update',event.target.name.split('-')[0]),{
            method: 'put',
            data: {
                qty: event.target.value,
            },
            preserveScroll: true,
        })
    };


    const products=cart.products.map((cart_product)=>{
                const qty_value_name=cart_product.product.id+"-qty_requested";

                return(<Tab className="relative p-4 flex justify-between " containerClassName="mb-4" key={cart_product.product.id}>
                    <div className="w-1/4 mr-4 min-h-[8em]">
                        <ProductImage name={cart_product.product.image} className="w-full h-full rounded-md">

                        </ProductImage>
                    </div>
                    <div className="w-3/5 relative flex flex-col justify-between">
                        <div>
                            <Link className="font-semibold hover:underline truncate" href={route('products.show',cart_product.product.id)}>{cart_product.product.name}</Link>
                            <p className="text-sm text-indigo-700">{"Da "+cart_product.lots.length+" "+Pluralize("lotto","lotti",cart_product.lots.length)}</p>
                        </div>
                        <div className="flex items-center">
                            <InstantSubmitInput id={cart_product.product.id} defaultValue={cart_product.qty} name="qty" type="number" min={0} max={cart_product.product.qty_available} className="mt-1 block right-0 bottom-0 mr-2" routeName="cart.update" />
                            <p>{"/ "+cart_product.product.qty_available+" disponibili"}</p></div>
                    </div>
                    <div className="w-1/6 relative">
                        <TfiClose className="absolute right-0 scale-75 top-0 cursor-pointer" onClick={(e)=>deleteProduct(e,cart_product.product.id)}/>

                    </div>
                </Tab>);
            })


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={"Riepilogo ordine"}
        >
            <Head title="Home" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">



                    {cart.products.length>0?(
                        <ProductListDetails products={products} >

                                    <form onSubmit={submit}>
                                    <div className="mb-2 border-b b-grey-500 pb-5" >
                                        <h2 className="font-bold mb-4">Dati referente e ordine</h2>

                                        <div className="mb-4">
                                            <InputLabel forInput="office" value="Ufficio" required={true}/>

                                            <TextInput
                                                type="text"
                                                name="office"
                                                value={data.office}
                                                className="mt-1 block w-full"
                                                autoComplete="office"
                                                required={true}
                                                isFocused={false}
                                                handleChange={onTextChange}
                                            />

                                            <InputError message={errors.office} className="mt-2" />
                                        </div>

                                        <div className="mb-4">
                                            <InputLabel forInput="ioc" value="Codice ordine (Codice di riferimento interno)" />

                                            <TextInput
                                                title="Codice di riferimento intenro"
                                                type="text"
                                                name="ioc"
                                                value={data.ioc}
                                                className="mt-1 block w-full"
                                                autoComplete="ioc"
                                                required={false}
                                                isFocused={false}
                                                handleChange={onTextChange}
                                            />

                                            <InputError message={errors.ioc} className="mt-2" />
                                        </div>
                                    </div>
                                        <div className="mb-2 border-b b-grey-500 py-5">

                                            <h2 className="font-bold mb-4">Dati spedizione</h2>

                                            <div className="flex justify-between">
                                                <div className="w-1/2 mr-2">
                                                    <div className="mb-4">
                                                        <InputLabel forInput="country" value="Stato" required={true}/>

                                                        <TextInput
                                                            type="text"
                                                            name="country"
                                                            value={data.country}
                                                            className="mt-1 block w-full"
                                                            autoComplete="country"
                                                            required={true}
                                                            isFocused={false}
                                                            handleChange={onTextChange}
                                                        />

                                                        <InputError message={errors.country} className="mt-2" />
                                                    </div>
                                                </div>
                                                <div className="w-1/2 ml-2">
                                                    <div className="mb-4">
                                                        <InputLabel forInput="province" value="Provincia(XX)" required={true}/>

                                                        <TextInput
                                                            pattern="[A-Za-z]{2}"
                                                            type="text"
                                                            name="province"
                                                            value={data.province}
                                                            className="mt-1 block w-full"
                                                            autoComplete="province"
                                                            required={true}
                                                            isFocused={false}
                                                            handleChange={onTextChange}
                                                            placeholder="MI"
                                                        />

                                                        <InputError message={errors.province} className="mt-2" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex justify-between">
                                                <div className="w-1/2 mr-2">
                                                    <div className="mb-4">
                                                        <InputLabel forInput="city" value="Città" required={true}/>

                                                        <TextInput
                                                            type="text"
                                                            name="city"
                                                            value={data.city}
                                                            className="mt-1 block w-full"
                                                            autoComplete="city"
                                                            required={true}
                                                            isFocused={false}
                                                            handleChange={onTextChange}
                                                        />

                                                        <InputError message={errors.city} className="mt-2" />
                                                    </div>
                                                </div>
                                                <div className="w-1/2 ml-2">
                                                    <div className="mb-4">
                                                        <InputLabel forInput="postal_code" value="CAP" required={true}/>

                                                        <TextInput
                                                            pattern="[0-9]{5}"
                                                            type="text"
                                                            name="postal_code"
                                                            value={data.postal_code}
                                                            className="mt-1 block w-full"
                                                            autoComplete="postal_code"
                                                            required={true}
                                                            isFocused={false}
                                                            handleChange={onTextChange}
                                                        />

                                                        <InputError message={errors.postal_code} className="mt-2" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <InputLabel forInput="address" value="Indirizzo (Via e n° civico)" required={true}/>

                                                <TextInput
                                                    type="text"
                                                    name="address"
                                                    value={data.address}
                                                    className="mt-1 block w-full"
                                                    autoComplete="address"
                                                    required={false}
                                                    isFocused={false}
                                                    handleChange={onTextChange}
                                                />

                                                <InputError message={errors.address} className="mt-2" />
                                            </div>

                                        </div>

                                        <div className="mb-2 border-b b-grey-500 py-5">
                                            <div className="mb-4">
                                                <InputLabel forInput="notes" value="Note" required={true}/>

                                                <TextArea
                                                    name="notes"
                                                    value={data.address}
                                                    className="mt-1 block w-full"
                                                    autoComplete="address"
                                                    required={false}
                                                    isFocused={false}
                                                    handleChange={onTextChange}
                                                />
                                            </div>

                                        </div>

                                        {/*<div className="border-b border-grey-300 mt-5 pb-5 h-16">
                                            <div className="w-full h-8" ><span className="float-left font-bold">Subtotale</span><span>{0}</span></div>
                                            <p className="float-left">+ Spese di trasporto</p><span><Price value={20} className="float-right"/></span>
                                        </div>
                                        <div className="w-full h-10 mt-5" ><span className="float-left font-bold">Totale</span><span>{0}</span></div>
                                        {needApproval() && <div className="w-full mt-5"><p className="text-rose-500">Attenzione: nel carrello ci sono prodotti che richiedono approvazione da un superiore. Per urgenze esegui un ordine separato senza prodotti che devono ancora essere fatturati.</p></div>*/}
                                        <Button type="submit" className="w-full py-4 text-center text-lg">Invia ordine</Button>
                                        <div className="w-full text-center py-4"><Link as="button" className="text-center text-indigo-700 font-semibold" onClick={(e)=>emptyCart(e)}>Svuota il carrello</Link></div>
                                    </form>
                        </ProductListDetails>
                    ):(cart.products.length<=0) && (
                        <Tab>
                            <h2 className="font-bold">Il tuo carrello è vuoto</h2>
                            <p>Aggiungi pordotti al tuo carrello per procedere con l'ordine.</p>
                            <PrimaryButton type="link" href={route('products.dashboard')}>
                                Visualizza prodotti
                            </PrimaryButton>
                        </Tab>
                    )}

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
