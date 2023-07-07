import React from 'react';
import {MdDelete} from "react-icons/all";
import {
    DataGrid,
    GridActionsCellItem, GridEditInputCell,
    GridRowEditStopReasons,
    GridRowModes, GridToolbar,
    GridToolbarContainer,
    itIT
} from "@mui/x-data-grid";
import {Format_date} from "@/Helpers/String";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {Button, LinearProgress, styled, tooltipClasses} from "@mui/material";
import {Tooltip} from "@mui/material";
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
export default function MUILotsTable({lots,product,slots}){

    const [rows, setRows] = React.useState(lots);
    const [rowModesModel, setRowModesModel] = React.useState({})
    const [snackbar, setSnackbar] = React.useState(null);
    const [loading,setLoading] = React.useState(false);

    const handleCloseSnackbar = () => setSnackbar(null);


    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id) => () => {
        setLoading(true)
        axios.delete(route("admin.lots.destroy", id)).then(r  =>{
            setLoading(false)
            setSnackbar({ children: r.data.text, severity: r.data.severity });
            setRows(rows.filter((row) => row.id !== id));
        }).catch(reason => {
            setLoading(false)
            setSnackbar({children: "Errore durante la richiesta. Contatta l'assistenza web@tutto-ufficio.it",severity: "error"})
        })
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow,_method: "put"};
        setLoading(true)

        axios.post(route("admin.lots.update", updatedRow.id), updatedRow).then(r  =>{
            setLoading(false)
            setSnackbar({ children: r.data.text, severity: r.data.severity });
            setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
            return updatedRow
        }).catch(reason => {
            setLoading(false)

        })

        return new Error("Errore durante la richiesta. Contatta l'assistenza web@tutto-ufficio.it")
    };

    const handleProcessRowUpdateError = error => {
        console.log(error)
        setSnackbar({ children: error.message, severity: 'error' });
    }

    const handleRowModesModelChange = (model) => {
        setRowModesModel(model)
    };

    const StyledTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
        },
    }));

    function QtyEditInputCell(props) {
        const { error } = props;

        return (
            <StyledTooltip open={!!error} title={error}>
                <GridEditInputCell {...props} />
            </StyledTooltip>
        );
    }


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




