import React, {useContext, useState} from 'react';
import Table from "@/Components/Table/Table";
import ActionButton from "@/Components/Admin/Company/ActionButton";
import {BiEdit, BsThreeDotsVertical, FaTrash, FiEye} from "react-icons/all";
import {Link} from "@inertiajs/inertia-react";
import Button from "@/Components/Buttons/Button";
import Tab from "@/Components/Tab";
import {Inertia} from "@inertiajs/inertia";
import {PopUpMessageContext} from "@/Layouts/AdminLayout";

const CrudActionColumn=({className,read,update,del})=>{
    return(
            <Table.Field className="max-w-none">
                <div className="flex flex-row-reverse items-center">
                {/*<ActionButton>
                    <ActionButton.Trigger><div className="flex items-center justify-end bg-slate-400 py-2 px-4 rounded-full w-fit text-white ml-auto"><p className="mr-4 text-xs uppercase">Gestisci</p> <BsThreeDotsVertical></BsThreeDotsVertical></div></ActionButton.Trigger>
                    <ActionButton.Content>
                        {read && <ActionButton.Link href={read} method="get">Dettagli</ActionButton.Link>}
                        {update && <ActionButton.Link href={update} method="get">Modifica</ActionButton.Link>}
                        {del && <ActionButton.Link href={del} method="delete" className="bg-red-700 text-white hover:bg-red-500">Elimina</ActionButton.Link>}
                    </ActionButton.Content>
                </ActionButton>*/}
                    <div className="flex items-center h-full mr-4">
                        {read && <Link href={read} method={"get"} className="text-slate-300 group-hover:text-slate-700 mr-2 transition-colors"><FiEye /></Link>}
                        {update && <Link href={update} method={"get"} className="text-slate-300 group-hover:text-slate-700 mr-2 transition-colors"><BiEdit /></Link>}
                        {del && <DelButton link={del} />}
                    </div>
                </div>
            </Table.Field>
    )
}
export default CrudActionColumn;

const DelButton=({link})=>{
    const [open,setOpen]=useState(false)

    const showMessage=useContext(PopUpMessageContext);

    const changeOpen=(e, val)=>{
        e.preventDefault()
        setOpen(val)
    }

    const submit=(e)=>{
        e.preventDefault()
        Inertia.delete(link,{
            preserveScroll: true,
            /*onSuccess: ()=>{
                const content=(
                    <>
                        <h3 className="font-semibold">Elemento eliminato</h3>
                        <p>L'elemento è stato eliminato con successo</p>
                    </>
                )
                showMessage(content)
            },
            onError: ()=>{
                const content=(
                    <>
                        <h3 className="font-semibold">Ops.. Qualcosa è andato storto</h3>
                        <p>Non è stato possibile eliminare l'elemento, contatta l'amminstratore</p>
                    </>
                )
                showMessage(content,"",false)
            }*/
        })
    }

    const PopUp=()=>{
        return(
            <div className={"transition-opacity "+(!open && "opacity-0 pointer-events-none")}>
                <div className={"fixed w-full h-full top-0 left-0 bg-black/10 z-40 "}></div>
                <Tab containerClassName="fixed top-1/2 left-1/2 normal-case -translate-x-1/2 -translate-y-1/2 z-50">
                    <h2 className="font-semibold text-2xl">Sei sicuro?</h2>
                    <p>Procedendo l'elemento verrà eliminato definitvamente e non potrà essere più recuperato</p>
                    <div className="flex"><Button herf={link} className="bg-red-700 mr-4 hover:bg-red-800" onClick={(e)=>submit(e)}>Conferma</Button><Button onClick={(e)=>changeOpen(e,false) }>Annulla</Button></div>
                </Tab>
            </div>
        )
    }
    return(
        <>
            <PopUp/>
            <Link href={link} method="delete" className="text-slate-300 group-hover:text-red-700 mr-2 transition-colors" onClick={(e)=>changeOpen(e,true)}><FaTrash /></Link>
        </>
    )
}

