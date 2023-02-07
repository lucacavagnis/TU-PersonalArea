import {React, useState} from 'react';
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Buttons/Button";
import {useForm} from "@inertiajs/inertia-react";

const FilterBar=({open,toggleOpen,input})=>{

    const {data,setData,get}=useForm('Filters',{
        search:input.search??'',
        order:input.search??'name',
        owned:input.owned??'',
        nowned:input.nowned??'',
        available:input.available??true,
        out_of_stock:input.out_of_stock??true,
        expired:input.expired??true,

    })

    console.log(data);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };



    const submit=(e)=>{
        e.preventDefault();
        get(route('products.dashboard'),{
            only:['products'],
            preserveState: true,
            preserveScroll: true,
        });
    }


    return(

        <div className={(open?"":"opacity-0 pointer-events-none")+" fixed translate-all duration-300 w-full h-screen top-0 left-0 bg-gray-900/30 z-50 cursor-pointer"} onClick={(e)=>toggleOpen(e)}>
            <div className={(open?"right-0":"-right-full")+" absolute overflow-y-scroll scrollbar-hide translate-all duration-700 top-0 right-0 w-96 h-screen bg-white py-4 px-8 flex flex-col justify-between cursor-auto"} onClick={(e)=>{e.stopPropagation()}}>
                <div className="">
                    <Dropdown name="Cerca" height="h-20">
                        <TextInput containerClassName="w-full mt-2" className="w-full" type="text" name="search" placeholder="Digita per cercare..." handleChange={onHandleChange} value={data.search}/>
                    </Dropdown>
                    <Dropdown name="Ordina per" height="h-32">
                        <CustomRadioButton name="order" value="name" label="Nome"  handleChange={onHandleChange} checked={data.order==="name"}/>
                        <CustomRadioButton name="order" value="qty_available" label="Quantità disponibile" handleChange={onHandleChange} checked={data.order==="qty_available"}/>
                        <CustomRadioButton name="order" value="expire_date" label="Scadenza" handleChange={onHandleChange} checked={data.order==="expire_date"}/>
                        <CustomRadioButton name="order" value="prot_number" label="Protocollo" handleChange={onHandleChange} checked={data.order==="prot_number"}/>
                    </Dropdown>
                    {/*<Dropdown name="Proprietà" height="h-18">
                        <CustomCheckbox name="owned" label="Pre ordine" checked={data.owned} handleChange={onHandleChange}/>
                        <CustomCheckbox name="nowned" label="Fermo deposito" checked={data.nowned} handleChange={onHandleChange}/>
                    </Dropdown>
                    <Dropdown name="Saldo" height="h-18">
                        <CustomCheckbox name="payed" label="Pagato" checked={data.owned} handleChange={onHandleChange}/>
                        <CustomCheckbox name="npayed" label="Non pagato" checked={data.nowned} handleChange={onHandleChange}/>
                    </Dropdown>*/}
                    <Dropdown name="Disponibilità" height="h-24">
                        <CustomCheckbox name="available" label="Disponibili" checked={data.available}  handleChange={onHandleChange}/>
                        <CustomCheckbox name="out_of_stock" label="Esauriti" checked={data.out_of_stock}  handleChange={onHandleChange}/>
                        <CustomCheckbox name="expired" label="Scaduti" checked={data.expired} handleChange={onHandleChange}/>
                    </Dropdown>

                </div>
                <Button type="submit" className="w-full py-3" onClick={(e)=>submit(e)}>Filtra</Button>
            </div>
        </div>
    );
}

const CustomCheckbox=({name,label,checked,handleChange})=>{
    return(
        <label className="block mb-2 pl-2"><Checkbox name={name} checked={checked} handleChange={handleChange} className="mr-2"></Checkbox> {label}</label>
    )
}

const CustomRadioButton=({name,label,value,checked,handleChange})=>{
    return(
        <label className="block mb-2 pl-2"><input type="radio"  name={name} value={value} className="h-3 w-3 mr-2" onChange={handleChange} checked={checked}/> {label}</label>
    )
}

const Dropdown=({name,height, children})=>{
    const  [open,setOpen]=useState(false);

    const toggleOpen=(e)=>{
        e.preventDefault();
        setOpen((prev)=>!prev);
    }

    return(
        <>
            <div className="relative py-4"><span>{name}</span><span onClick={(e)=>toggleOpen(e)} className="absolute right-0 top-1/2 -translate-y-1/2"><ToggleButton open={open}/></span></div>
            <div className={(open?height +" py-1":"h-0 opacity-0") + " transition-all overflow-hidden"}>
                {children}
            </div>
        </>
    )
}

const ToggleButton=({open})=>{
    return(
        <div className="relative w-4 h-4 cursor-pointer">
            <div className={(open?"":"rotate-90")+" h-[1px] w-full bg-slate-900 absolute top-1/2 left-0 -translate-y-1/2 transition-all"}></div>
            <div className={(open?"":"")+" h-[1px] w-full bg-slate-900 absolute top-1/2 left-0 -translate-y-1/2 transition-all"}></div>
        </div>
    )
}


export default FilterBar;
