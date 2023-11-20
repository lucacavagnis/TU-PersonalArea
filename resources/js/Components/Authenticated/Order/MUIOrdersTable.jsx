import {DataGrid, GridActionsCellItem, GridToolbar, itIT} from "@mui/x-data-grid";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import {capitalize} from "lodash/string";
import {MdDelete} from "react-icons/all";
import React from "react";
import {Apps, CloseRounded, Edit, Person, Visibility} from "@mui/icons-material";
import {Inertia} from "@inertiajs/inertia";
import Status from "@/Components/Authenticated/Order/Status";
import moment from "moment/moment";


export const MUIOrdersTable=({orders,isSupervisor})=>{
    const [open, setOpen] = React.useState(false);
    const [id, setId]=React.useState();

    const handleClickOpen = (id) => {
        setId(id)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            renderCell: (params)=>{
                return <Status status={params.row.status} />
            },
        },
        {
            field: 'address',
            headerName: 'Indirizzo',
            width: 300,
            renderCell: (params)=>{
                return <>{params.row.place.address_first_line} <br /> {params.row.place.address_second_line}</>
            },
        },
        {
            field: 'date',
            headerName: 'Data',
            width: 200,
            valueFormatter: (params) => {
                return moment(params.value).format("DD/MM/YYYY HH:mm:ss")
            },
        },
        {
            field: 'qty',
            headerName: 'N° prodotti',
            width: 150,
            valueGetter: (params) => {
                let qty=0;
                params.row.order_products.map((order_product)=>{
                    qty+=order_product.quantity;
                })
                return qty+" unità"
            },
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Azioni',
            flex: 1,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<Visibility/>}
                        label="Dettagli"
                        color="inherit"
                        onClick={()=>{Inertia.get(route('orders.show',id))}}
                    />,
                ];
            },
        },
    ];

    if(isSupervisor)
        columns.splice(1,0,{
            field: 'user',
            headerName: 'Utente',
            width: 200,
            renderCell: (params)=>{
                return <div className="flex items-center"><Person className="mr-2" fontSize="small"/><div>{params.row.user.name} <br /> <a href={"mailto:"+params.row.user.email} className="text-indigo-700">{params.row.user.email}</a></div></div>
            },
        })

    return (
        <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={orders}
                columns={columns}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                localeText={itIT.components.MuiDataGrid.defaultProps.localeText}
                components={{ Toolbar: GridToolbar }}
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Eliminare il prodotto?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Stai per eliminare il prodotto definitivamente, non potrai recuperare più i dati.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annulla</Button>
                    <Button sx={{color:"red"}} onClick={()=>{handleClose();Inertia.delete(route('admin.products.destroy',id));}} autoFocus>
                        Elimina
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}


