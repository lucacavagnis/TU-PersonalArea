import {DataGrid, GridActionsCellItem, itIT} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import {capitalize} from "lodash/string";
import {MdDelete} from "react-icons/all";
import React from "react";
import {Apps, Edit} from "@mui/icons-material";
import {Inertia} from "@inertiajs/inertia";

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
        description: 'This column has a value getter and is not sortable.',
        width: 300,
    },
    {
        field: 'desc',
        headerName: 'Descrizione',
        description: 'This column has a value getter and is not sortable.',
        width: 400,
    },
    {
        field: 'category',
        headerName: 'Categoria',
        description: 'This column has a value getter and is not sortable.',
        width: 160,
        valueGetter: (params) =>
            `${params.row.category.name}`,
        valueFormatter: (params) =>
            `${capitalize(params.value)}`,
    },
    {
        field: 'subcategory',
        headerName: 'Sottocategoria',
        description: 'This column has a value getter and is not sortable.',
        width: 160,
        valueGetter: (params) =>
            `${params.row.subcategory.name}`,
        valueFormatter: (params) =>
            `${capitalize(params.value)}`,
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
                    onClick={()=>{Inertia.delete(route('admin.products.destroy',id))}}
                    className="!text-red-700"
                    showInMenu
                />,
            ];
        },
    },
];
export const MUIProductTable=({products})=>{
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
            />
        </Box>
    );
}


