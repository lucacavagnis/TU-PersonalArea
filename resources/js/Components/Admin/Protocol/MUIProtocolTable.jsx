import {DataGrid, GridActionsCellItem, GridToolbar, itIT} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";
import {capitalize} from "lodash/string";
import {MdDelete} from "react-icons/all";
import React from "react";
import {Apps, Edit} from "@mui/icons-material";
import {Inertia} from "@inertiajs/inertia";
import moment from "moment";
import Protocol from "@/Helpers/Protocol";
import {getTypeText} from "@/Helpers/String";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'company',
        headerName: 'Azienda',
        width: 150,
        valueGetter: (params) =>
            `${params.row.company.name}`,
    },
    {
        field: 'date',
        headerName: 'Data',
        width: 150,
        valueFormatter: (params) => {
            return moment(params.value).format("DD/MM/YYYY")
        },
    },
    {
        field: 'expiring_date',
        headerName: 'Data scadenza',
        width: 150,
        valueFormatter: (params) => {
            return moment(params.value).format("DD/MM/YYYY")
        },
    },
    {
        field: 'type',
        headerName: 'Tipo',
        width: 200,
        valueFormatter: (params) => {
            return getTypeText(params.value)
        },
    },
    {
        field: 'referral',
        headerName: 'Riferimento',
        flex: 1,
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: 'Azioni',
        width: 100,
        cellClassName: 'actions',
        getActions: ({ id }) => {
            return [
                /*<GridActionsCellItem
                    icon={<Apps/>}
                    label="Lotti e dettagli"
                    color="inherit"
                    onClick={()=>{Inertia.get(route('admin.protocols.show',id))}}
                    showInMenu
                />,*/
                <GridActionsCellItem
                    icon={<Edit/>}
                    label="Modifica"
                    color="inherit"
                    onClick={()=>{Inertia.get(route('admin.protocols.edit',id))}}
                    showInMenu
                />,
                <GridActionsCellItem
                    icon={<MdDelete className="text-red-700"/>}
                    label="Elimina"
                    color="inherit"
                    onClick={()=>{Inertia.delete(route('admin.protocols.destroy',id))}}
                    className="!text-red-700"
                    showInMenu
                />,
            ];
        },
    },
];
export const MUIProtocolTable=({protocols})=>{
    return (
        <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={protocols}
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
                props={{ Toolbar: GridToolbar }}
                autoPageSize={true}
            />
        </Box>
    );
}


