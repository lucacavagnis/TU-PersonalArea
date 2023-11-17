import Admin from "@/Layouts/AdminLayout";
import {Head, Link, useForm} from "@inertiajs/inertia-react";
import Tab from "@/Components/Tab";
import {ManageLotsForm} from "@/Components/Admin/Product/ManageLotsForm";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import {Button} from "@mui/material";
import {Add,Save} from "@mui/icons-material";
import {Inertia} from "@inertiajs/inertia";
import moment from "moment";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Manage(props){

    const [snackbar, setSnackbar] = React.useState(null);

    const handleCloseSnackbar = () => setSnackbar(null);

    const {data,setData,post,transform} = useForm(props.product.lots.map((lot)=>{
        console.log(lot)
        return {...lot,date:moment(lot.date).format('YYYY-MM-DD'),protocol:lot.protocol_lot!==null,warehouse:lot.locations.length!==0,discount:lot.protocol_lot!==null&&lot.protocol_lot.price!==lot.protocol_lot.original_price}
    }))

    const setLot=(id,lot)=>{
        const clone=[...data]
        clone.splice(id,1,lot)
        setData(clone)
    }

    const addLot=()=>{
        const clone=[...data]
        clone.push({product_id:props.product.id,qty_available:0,date:moment().format('YYYY-MM-DD'),qty_total:0,price:0,original_price:0,protocol_lot:{price:0,original_price:0},locations:[],protocol:false,warehouse:false,discount:false})
        setData(clone)
    }

    const removeLot=(id)=>{
        const lots=[...data]
        const deleted = lots.splice(id,1)
        if(deleted[0]["id"])
            Inertia.delete(route("admin.lots.destroy",deleted[0]["id"]),{
                onSuccess:()=>{
                    setSnackbar({ children: "Lotto eliminato", severity: 'success' });
                },
                onError: (error)=>{
                    setSnackbar({ children: error.response.data.message, severity: 'error' });
                }
            })
        setData(lots)
    }

    const submit=()=>{
        post(route("admin.products.manage.save",props.product.id),{
            onSuccess:()=>{
                setSnackbar({ children: "Lotti salvati", severity: 'success' });
            }
        });
    }

    return(<Admin
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gestisci lotti</h2>}
        breadcrumbs={<div className="flex items-center"><Button href={route("admin.products.index")} className="!capitalize">Prodotti</Button><em className="mx-2">></em><p>{props.product.name}</p></div>}
    >
        <Head title="Gestisci lotti" />

        <div className="py-12">
            <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div className="!mb-4 [&>*:not(:last-child)]:mr-4">
                    <Button variant="contained" endIcon={<Save />} onClick={()=>submit()}>Salva</Button>
                    <Button variant="contained"  endIcon={<Add />} onClick={()=>addLot()}>Aggiungi lotto</Button>
                </div>

                <div className="flex">
                    <div className="mr-4 w-2/3">
                        {
                            data.length>0?
                                data.map((l, id)=>{
                                    return <ManageLotsForm id={id} protocols={props.protocols} lot={l} update={setLot} remove={removeLot} error={props.errors}/>
                                }):<p>Nessun lotto presente</p>
                        }
                    </div>
                    <div className="relative w-1/3">
                        <Tab containerClassName="bg-transparent sticky top-4" className="h-auto">
                            <ProductImage name={props.product.image} className="w-20 h-20"/>
                            <h3 className="uppercase text-blue-700">{props.product.company.name}</h3>
                            <h2>{props.product.name}</h2>
                            <p>{props.product.desc}</p>
                        </Tab>
                    </div>
                </div>
            </div>
            {!!snackbar && (
                <Snackbar
                    open
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    onClose={handleCloseSnackbar}
                    autoHideDuration={6000}
                >
                    <Alert {...snackbar} onClose={handleCloseSnackbar} />
                </Snackbar>
            )}
        </div>
    </Admin>)
}
