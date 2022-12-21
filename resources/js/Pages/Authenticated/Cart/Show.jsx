import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import Tab from "@/Components/Tab";
import Button from "@/Components/Buttons/Button";
import TextInput from "@/Components/TextInput";
import {TfiClose,MdEast} from "react-icons/all";
import Price from "@/Components/Price";
import {Inertia} from "@inertiajs/inertia";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";

export default function Show(props) {


    const {post,data,setData,errors}=useForm({
        office:'',
        ioc:'',
        country:'',
        province:'',
        city:'',
        postal_code:'',
        address:'',

    });

    const cart=props.cart;

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

    const total =(value=0)=>{
        let totalCost=0;
        cart.products.map((product)=>{
            totalCost+=product.data.reserved_price*product.qty;
        })
        return(
            <Price className="float-right font-bold" value={totalCost+value}/>
        )
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


    const products=cart.products.map((product,id)=>{
                const qty_value_name=id+"-qty_requested";
                const optioned_products=Object.keys(product.configured_products).length;

                return(<Tab className="relative p-4 flex justify-between " containerClassName="mb-4" key={product.data.id}>
                    <div className="w-1/4 mr-4 min-h-[8em]">
                        <ProductImage name={product.data.image} className="w-full h-full rounded-md">

                        </ProductImage>
                    </div>
                    <div className="w-3/5 relative">
                        <Link className="font-semibold hover:underline" href={route('products.show',product.data.id)}>{product.data.name}</Link>
                        <p className="text-sm">{product.data.prot_number} - {product.data.prot_date}</p>
                        <p className="text-sm text-indigo-700">{optioned_products + " prodotti configurati"}</p>
                        <div className="absolute bottom-0 left-0 "><Price value={product.data.reserved_price*product.qty} className="font-bold mr-2"/><span className="text-sm">({product.qty}x<Price value={product.data.reserved_price}/>)</span></div>
                    </div>
                    <div className="w-1/6 relative">
                        <TfiClose className="absolute right-0 scale-75 top-0 cursor-pointer" onClick={(e)=>deleteProduct(e,id)}/>
                        <TextInput
                            type="number"
                            name={qty_value_name}
                            className="mt-1 block absolute right-0 bottom-0"
                            autoComplete="qty_requested"
                            value={product.qty}
                            isFocused={false}
                            max={(product.data.qty_available)}
                            handleChange={onHandleChange}
                            min={0}
                        />
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

                    {cart.products.length>0 && (
                        <div className="flex justify-between">
                            <div className="w-1/2">
                                {products}
                            </div>
                            <div className="w-2/5 ">
                                <Tab>

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


                                        <div className="border-b border-grey-300 mt-5 pb-5 h-16">
                                            <div className="w-full h-8" ><span className="float-left font-bold">Subtotale</span><span>{total()}</span></div>
                                            <p className="float-left">+ Spese di trasporto</p><span><Price value={20} className="float-right"/></span>
                                        </div>
                                        <div className="w-full h-10 mt-5" ><span className="float-left font-bold">Totale</span><span>{total(20)}</span></div>
                                        <Button type="submit" className="w-full py-4 text-center text-lg">Invia ordine</Button>
                                        <div className="w-full text-center py-4"><Link as="button" className="text-center text-indigo-700 font-semibold" onClick={(e)=>emptyCart(e)}>Svuota il carrello</Link></div>
                                    </form>
                                </Tab>
                            </div>
                        </div>
                    )}

                    {(cart.products.length<=0) && (
                        <Tab>
                            <h2 className="font-bold">Il tuo carrello è vuoto</h2>
                            <p>Aggiungi pordotti al tuo carrello per procedere con l'ordine.</p>
                            <PrimaryButton type="link" href={route('products.index')}>
                                Visualizza prodotti
                            </PrimaryButton>
                        </Tab>
                    )}

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
