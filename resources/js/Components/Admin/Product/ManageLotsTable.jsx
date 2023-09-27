import React from 'react';
import {MdDelete} from "react-icons/all";
import {
    DataGrid,
    GridActionsCellItem,
    GridToolbarContainer,
    itIT
} from "@mui/x-data-grid";
import {Format_date} from "@/Helpers/String";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {Button, LinearProgress} from "@mui/material";
import {Inertia} from "@inertiajs/inertia";


function EditToolbar(props) {
    const handleClick = () => {
        Inertia.get(route("admin.products.manage",props.id))
    };

    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={"+"} onClick={handleClick}  variant="contained">
                Gestisci lotti
            </Button>
        </GridToolbarContainer>
    );
}
export default function ManageLotsTable({lots,product}){

    const [rows, setRows] = React.useState(lots);
    const [snackbar, setSnackbar] = React.useState(null);
    const [setLoading] = React.useState(false);

    const handleCloseSnackbar = () => setSnackbar(null);


    const handleDeleteClick = (id) => () => {
        setLoading(true)
        axios.delete(route("admin.lots.destroy", id)).then(r  =>{
            setLoading(false)
            setSnackbar({ children: r.data.text, severity: r.data.severity });
            setRows(rows.filter((row) => row.id !== id));
        }).catch(() => {
            setLoading(false)
            setSnackbar({children: "Errore durante la richiesta. Contatta l'assistenza web@tutto-ufficio.it",severity: "error"})
        })
    };


    let columns = [
        { field: 'id', headerName: 'Id' , flex: 0.5},
        { field: 'qty_available', headerName: 'Qt.à disponbile', flex: 1, type: 'number', align: "left",headerAlign: "left"},
        { field: 'qty_total', headerName: 'Qt.à totale', flex: 1, type: 'number',align: "left",headerAlign: "left",},
        { field: 'protocol', headerName: 'Protocollo', flex: 1, type: "string",
            valueGetter: (params)=>{
                return params.row.protocolLot&&params.row.protocolLot.protocol?params.row.protocolLot.protocol.referral:"--"
            }
        },
        { field: 'date', headerName: 'Data', flex: 1, type: "date", valueFormatter: (params)=>{
                return Format_date(params.value)
            }},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Azioni',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<MdDelete className="text-red-700"/>}
                        label="Elimina"
                        color="inherit"
                        onClick={handleDeleteClick(id)}
                        className="!text-red-700"
                    />,
                ];
            },
        },
    ];

    return(
        <>
            <DataGrid
                rows={rows}
                columns={columns}
                localeText={itIT.components.MuiDataGrid.defaultProps.localeText}
                slots={{
                    toolbar: EditToolbar,
                    loadingOverlay: LinearProgress,
                }}
                slotProps={{
                    toolbar: { id: product.id },
                }}
            />
            {!!snackbar && (
                <Snackbar
                    open
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    onClose={handleCloseSnackbar}
                    autoHideDuration={5000}
                >
                    <Alert {...snackbar} onClose={handleCloseSnackbar} />
                </Snackbar>
            )}
        </>
    )
}




