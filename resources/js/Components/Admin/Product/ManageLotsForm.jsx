import React from 'react';
import {twMerge} from "tailwind-merge";
import {
    Autocomplete,
    Box,
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormControlLabel,
    FormGroup,
    InputAdornment,
    Switch,
    TextField
} from "@mui/material";
import {CloseRounded,RemoveCircleOutline} from "@mui/icons-material";
import Tab from "@/Components/Tab";
import {Inertia} from "@inertiajs/inertia";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


export const ManageLotsForm=({id,lot,protocols,update,remove,error,}) =>{



const default_location={
    slot:{
        rack:"",
        shelf:"",
        pallet:"",
    },
    qty:0,
}



    const onChange=(e)=>{
        const clone={...lot};
        clone[e.target.name]=e.target.type==="checkbox"?e.target.checked:e.target.value;
        update(id,clone)
    }

    const onProtocolPropChange=(e)=>{
        const clone={...lot};
        clone['protocol_lot'][e.target.name]=e.target.type==="checkbox"?e.target.checked:e.target.value;
        update(id,clone)
    }

    const onProtocolChange=(e,v)=>{
        const clone={...lot};

        if(clone['protocol_lot'])
        {
            clone['protocol_lot']['protocol_id']=v.id;
            clone['protocol_lot']['protocol']=v;
        }else
            clone['protocol_lot']={protocol_id:v.id,protocol:v}

        update(id,clone)
    }


    const addSlot=()=>{
        let locations=lot.locations
        if(locations)
            locations.push(default_location)
        else
            locations=[default_location]
        update(id,{...lot,locations: locations})
    }

    const removeSlot=(id)=>{
        const locations=lot.locations
        const deleted = locations.splice(id,1)
        if(deleted[0]["id"])
            Inertia.delete(route("admin.lots.location.destroy",deleted[0]["id"]))
        update(id,{...lot,slots: locations})
    }

    const updateSlot=(e)=>{
        const locations=lot.locations
        const id=e.target.name.split('-')[0]
        const prop=e.target.name.split('-')[1]
        locations.map((l,key)=>{
            if(key==id)
                if(prop==="qty")
                    l["qty"]=e.target.value
                else
                    l['slot'][prop]=e.target.value
            return l;
        })
        update(id,{...lot,locations})
    }


    return (
        <>
            <Tab containerClassName="mb-4 relative" key={id}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    '& .MuiOutlinedInput-input' : {boxShadow: 'none'},
                    '& > div' : { my: "1em"}
                }}
                noValidate
                autoComplete="off"
            >
                <CloseButton remove={()=>remove(id)} />
                <div>
                    <div className="flex mb-8">
                        <TextField id="qty-available" label="Qt.à disponibile" name="qty_available" type='number' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0, max: lot.qty_total}} onChange={(e)=>onChange(e)} value={lot.qty_available} variant="outlined" required={true} error={error&&error[id+".qty_available"]} helperText={error[id+".qty_available"]}/>
                        <TextField id="qty-total" label="Qt.à totale" name="qty_total" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0}} type='number' onChange={(e)=>onChange(e)} value={lot.qty_total} variant="outlined" required={true} error={error&&error[id+".qty_total"]} helperText={error[id+".qty_total"]}/>
                        <TextField id="date" label="Data" name="date" type='date' onChange={(e)=>onChange(e)} value={lot.date} variant="outlined" required={true} helperText={error?error[id+".date"]:"La data del protcollo o di ricezione"} error={error&&error[id+".date"]}/>
                    </div>
                    <div className="border-t py-4 my-2">
                        <FormGroup>
                            <FormControlLabel control={<Switch checked={lot.protocol} onChange={(e)=>onChange(e)} name="protocol"/>} label="Gestire protocollo?" error={error&&error[id+".protocol"]}/>
                        </FormGroup>
                        <div className={(lot.protocol?"opacity-1 h-50 py-4":"opacity-0 h-0 pointer-events-none p-0 m-0") + " transition-all"}>
                            <div className="flex">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={protocols}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Protocollo" name="referral" error={error&&error[id+".protocol_lot.protocol_id"]} helperText={error[id+".protocol_lot.protocol_id"]}/>
                                    }
                                    onChange={(e,v)=>onProtocolChange(e,v)}
                                    value={lot.protocol_lot?lot.protocol_lot.protocol:null}
                                    isOptionEqualToValue={(o,v)=>_.isEqual(o,v)}
                                    getOptionLabel={(o)=>o.referral}
                                />
                                <TextField id="original_price" label="Prezzo" name="original_price" type='number' InputProps={{ startAdornment: <InputAdornment position="start">€</InputAdornment>}} inputProps={{inputMode: 'numeric', pattern: '[0-9]*', min: 0}} onChange={(e)=>onProtocolPropChange(e)} value={lot.protocol_lot?lot.protocol_lot.original_price:null} variant="outlined" required={true} error={error&&error[id+".protocol_lot.original_price"]} helperText={error[id+".protocol_lot.original_price"]}/>
                                <TextField className={(lot.discount?"opacity-1":"opacity-0 pointer-events-none") + " transition-all border-t"} id="price" label="Prezzo scontato" name="price" type='number' InputProps={{ startAdornment: <InputAdornment position="start">€</InputAdornment>}} inputProps={{inputMode: 'numeric', pattern: '[0-9]*', min: 0, max: lot.protocol_lot?lot.protocol_lot.original_price:0}} onChange={(e)=>onProtocolPropChange(e)} value={lot.protocol_lot?lot.protocol_lot.price:null} variant="outlined" required={true} startAdornment={<InputAdornment position="start">$</InputAdornment>} helperText={error?error[id+".protocol_lot.price"]:"Non può superare il prezzo orginale"} error={error&&error[id+".protocol_lot.price"]}/>
                            </div>
                            <div className="flex">
                                <FormGroup className="mt-4">
                                    <FormControlLabel control={<Switch checked={lot.discount} onChange={(e)=>onChange(e)} name="discount"/>} label="Applicare sconto?" labelPlacement="end" error={error&&error[id+".discount"]}/>
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                    <div className="border-t py-4 my-2">
                        <FormGroup>
                            <FormControlLabel control={<Switch checked={lot.warehouse} onChange={(e)=>onChange(e)} name="warehouse"/>} label="Gestire magazzino?" error={error&&error[id+".warehouse"]}/>
                        </FormGroup>
                        <div className={(lot.warehouse?"opacity-1 py-4":"opacity-0 h-0 pointer-events-none p-0 m-0") + " transition-all"}>
                            <Button variant="text" onClick={()=>addSlot()}>Aggiungi slot</Button>
                            {lot.locations && lot.locations.map((location,i)=>
                                <SlotRow id={i} lot_id={id} slot={location.slot} qty={location.qty} remove={removeSlot} update={updateSlot} error={error} max={(()=>{
                                    let max=lot.qty_available
                                    lot.locations.forEach((s)=>{
                                        max-=s.qty
                                    })
                                    max+=Number(lot.locations[i].qty)
                                    return max
                                })()
                                }/>
                            )}
                        </div>
                    </div>
                </div>

            </Box>
            </Tab>
        </>

    );
}

const SlotRow=({id,lot_id,qty,slot,remove,update,max,error})=>{

    return(
        <div className="relative py-8" key={id}>
            <div className="flex">
                <TextField id="rack" label="Armadio" name={id+"-rack"} inputProps={{pattern: '[A-Z+]'}} onChange={(e)=>update(e)} value={slot.rack} variant="outlined" required={true} error={error&&error[lot_id+".locations."+id+".slot.rack"]} helperText={error[lot_id+".locations."+id+".slot.rack"]}/>
                <TextField id="shelf" label="Scaffale" name={id+"-shelf"} inputProps={{pattern: '[1-9+]'}} onChange={(e)=>update(e)} value={slot.shelf} variant="outlined" required={true} error={error&&error[lot_id+".locations."+id+".slot.shelf"]} helperText={error[lot_id+".locations."+id+".slot.shelf"]}/>
                <TextField id="pallet" label="Bancale" name={id+"-pallet"} inputProps={{pattern: '[1-9+]'}} onChange={(e)=>update(e)} value={slot.pallet} variant="outlined" required={true} error={error&&error[lot_id+".locations."+id+".slot.pallet"]} helperText={error[lot_id+".locations."+id+".slot.pallet"]}/>
            </div>
                <TextField id="qty" label="Q.tà" name={id+"-qty"} type='number' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0, max:max}} onChange={(e)=>update(e)} value={qty} variant="outlined" required={true} className="!w-full" error={error&&error[lot_id+".locations."+id+".qty"]} helperText={error[lot_id+".locations."+id+".qty"]}/>
                <RemoveCircleOutline className="absolute top-2 right-2 text-slate-500 hover:cursor-pointer hover:text-red-500 transition-color !text-sm" onClick={()=>remove(id)}/>
        </div>

    )
}

const CloseButton=({remove})=>{
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <>
            <CloseRounded className="absolute top-2 right-2 text-slate-500 hover:cursor-pointer hover:text-red-500 transition-color" fontSize="small" onClick={handleClickOpen}/>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Eliminare il lotto?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Stai per eliminare il lotto definitivamente, non potrai recuperare più i dati.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annulla</Button>
                    <Button sx={{color:"red"}} onClick={()=>{handleClose();remove();}} autoFocus>
                        Elimina
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

const Form=({children})=>{
    return(
        <form>{children}</form>
    )
}
const Row=({children})=> {
    return (
        <div className="flex justify-between w-full [&>first]:ml-0 [&>last]:mr-0 [&>*]:mx-2 [&>*]:w-full mb-4">{children}</div>
    )
}

const Field=({children,widthClass,className})=>{
    return(
        <div className={twMerge(widthClass,className," [&>*]>w-full")}>{children}</div>
    )
}

Form.Row=Row;
Form.Field=Field;
