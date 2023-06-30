import React from 'react';
import {AiTwotoneEdit, ImCross, IoIosSave, MdDelete} from "react-icons/all";
import {
    DataGrid,
    GridActionsCellItem,
    GridRowEditStopReasons,
    GridRowModes, GridToolbar,
    GridToolbarContainer,
    itIT
} from "@mui/x-data-grid";
import Protocol, {type} from "@/Helpers/Protocol";
import {Format_date} from "@/Helpers/String";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {Button, LinearProgress} from "@mui/material";


function EditToolbar(props) {
    const { setRows, setRowModesModel, rows, companies} = props;

    const handleClick = () => {
        const id=rows[rows.length - 1].id+1
        setRows((oldRows) => [...oldRows, {
            "id": id,
            "date": new Date,
            "type": 0,
            "referral": "",
            "expiring_date": new Date,
            "company_id": companies[0].id,
            "remaining_days": 0,
            "company": companies[0],
            isNew: true
        }]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'company' },
        }));
    };

    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={"+"} onClick={handleClick}>
                Crea protocollo
            </Button>
        </GridToolbarContainer>
    );
}
export default function MUIProtocolTable({protocols,companies}){

    const [rows, setRows] = React.useState(protocols);
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
        axios.delete(route("admin.protocols.destroy", id)).then(r  =>{
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

        axios.post(route("admin.protocols.update", updatedRow.id), updatedRow).then(r  =>{
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


    let columns = [
        { field: 'id', headerName: 'Id' , flex: 0.5},
        { field: 'company', headerName: 'Azienda', flex: 2, editable: true, type: 'singleSelect', valueOptions: companies.map(c=>c.name),
        valueGetter: (params)=>{
            return params.row.company.name
        },
        valueSetter: (params)=>{
            return {...params.row,company: companies.find(c=>c.name===params.value)}
        }},
        { field: 'date', headerName: 'Data', flex: 1, editable: true, type: "date", valueFormatter: (params)=>{
            return Format_date(params.value)
        }},
        { field: 'type', headerName: 'Tipo', flex: 1, editable: true, type: 'singleSelect', valueOptions: Protocol.type,
        valueGetter: (params)=>{
            return Protocol.typeText(params.row)
        },
        valueSetter: (params)=>{
            return {...params.row, type: Array.from(Protocol.type.keys()).find(k=>Protocol.type[k]===params.value)}
        }},
        { field: 'referral', headerName: 'Riferimento', flex: 2, editable: true},
        { field: 'expiring_date', headerName: 'Data di scadenza', flex: 1, editable: true, type: "date", valueFormatter: (params)=>{
            return Format_date(params.value)
        }},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Azioni',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<IoIosSave />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<ImCross />}
                            label="Cancel"
                            className="textPrimary"
                            color="inherit"
                            onClick={handleCancelClick(id)}
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<AiTwotoneEdit />}
                        label="Edit"
                        className="textPrimary"
                        color="inherit"
                        onClick={handleEditClick(id)}
                    />,
                    <GridActionsCellItem
                        icon={<MdDelete />}
                        label="Delete"
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
                  editMode="row"
                  localeText={itIT.components.MuiDataGrid.defaultProps.localeText}
                  rowModesModel={rowModesModel}
                  onRowModesModelChange={handleRowModesModelChange}
                  onRowEditStop={handleRowEditStop}
                  processRowUpdate={processRowUpdate}
                  onProcessRowUpdateError={handleProcessRowUpdateError}
                  loading={loading}
                  slots={{
                      toolbar: EditToolbar,
                      loadingOverlay: LinearProgress,
                  }}
                  slotProps={{
                      toolbar: { setRows, setRowModesModel, rows, companies },
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




