import {DataGrid, GridActionsCellItem, GridToolbar, itIT} from "@mui/x-data-grid";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import {capitalize} from "lodash/string";
import {MdDelete} from "react-icons/all";
import React from "react";
import {Apps, CloseRounded, Edit} from "@mui/icons-material";
import {Inertia} from "@inertiajs/inertia";


export const MUIProductTable=({products})=>{
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
            field: 'image',
            headerName: 'Immagine',
            width: 150,
            renderCell: (params)=>{
                return <ProductImage name={params.row.image} className="w-full h-full m-4 rounded bg-contain"/>
            },
        },
        {
            field: 'company',
            headerName: 'Azienda',
            width: 150,
            valueGetter: (params) =>
                `${params.row.company.name}`,
        },
        {
            field: 'sku',
            headerName: 'SKU',
            width: 110,
        },
        {
            field: 'name',
            headerName: 'Nome',
            width: 300,
        },
        {
            field: 'desc',
            headerName: 'Descrizione',
            flex:1,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Azioni',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<Apps/>}
                        label="Lotti e dettagli"
                        color="inherit"
                        onClick={()=>{Inertia.get(route('admin.products.manage',id))}}
                        showInMenu
                    />,
                    <GridActionsCellItem
                        icon={<Edit/>}
                        label="Modifica"
                        color="inherit"
                        onClick={()=>{Inertia.get(route('admin.products.edit',id))}}
                        showInMenu
                    />,
                    <GridActionsCellItem
                        icon={<MdDelete className="text-red-700"/>}
                        label="Elimina"
                        color="inherit"
                        onClick={()=>handleClickOpen(id)}
                        className="!text-red-700"
                        showInMenu
                    />,
                ];
            },
        },
    ];

    return (
        <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={products}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                localeText={itIT.components.MuiDataGrid.defaultProps.localeText}
                components={{ Toolbar: GridToolbar }}
                autoPageSize={true}
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


