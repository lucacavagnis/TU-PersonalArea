import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons, itIT,
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {Inertia} from "@inertiajs/inertia";

function EditToolbar(props) {
    const { setRows, setRowModesModel, rows } = props;

    const handleClick = () => {
        const id = rows.find((e)=>e.id===Math.max(...rows.map(o => o.id))).id+1;
        setRows((oldRows) => [...oldRows, { id, name: '', isNew: true }]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<AddIcon />} onClick={handleClick} className="border-1 border-slate-700" sx={{
                border: 1,
                margin: 1,
            }}>
                Nuova categoria
            </Button>
        </GridToolbarContainer>
    );
}

export default function MUICategroiesTable({categories}) {

    const [rows, setRows] = React.useState(categories);
    const [rowModesModel, setRowModesModel] = React.useState({});

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
        Inertia.delete(route("admin.categories.destroy",id),{
            onSuccess: ()=>{
                setSnackbar({ children: 'Categoria eliminata con successo', severity: 'success' });
                setRows(rows.filter((row) => row.id !== id));
            },
            onError:(error)=>setSnackbar({ children: error.message, severity: 'error' })
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

    const processRowUpdate = React.useCallback(
        async (newRow,oldRow) => {
            // Make the HTTP request to save in the backend
            const updatedRow = { ...newRow, isNew: false };
            await axios.post(route("admin.categories.store"),updatedRow);
            /*setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));*/
            setSnackbar({ children: 'Categoria salvata con successo', severity: 'success' });
            return updatedRow;
        },
        [],
    );

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const handleProcessRowUpdateError = React.useCallback((error) => {
        setSnackbar({ children: error.response.data.message, severity: 'error' });
    }, []);

    const columns = [
        { field: 'name', headerName: 'Nome', width: 180, editable: true },
        {
            field: 'parent_id',
            headerName: 'Genitore',
            width: 220,
            editable: true,
            type: 'singleSelect',
            getOptionLabel: (o)=>o.name,
            getOptionValue: (o)=>o.id,
            valueOptions: [...rows,{id: null, name:'--'}],
        },
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
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                        sx={{
                            color: 'red',
                        }}
                    />,
                ];
            },
        },
    ];

    const [snackbar, setSnackbar] = React.useState(null);

    const handleCloseSnackbar = () => setSnackbar(null);

    return (
        <Box
            sx={{
                height: 700,
                width: '100%',
                '& .actions': {
                    color: 'text.secondary',
                },
                '& .textPrimary': {
                    color: 'text.primary',
                },
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                onProcessRowUpdateError={handleProcessRowUpdateError}
                slots={{
                    toolbar: EditToolbar,
                }}
                slotProps={{
                    toolbar: { setRows, setRowModesModel,rows },
                }}
                initialState={{
                    sorting: {
                        sortModel: [{field: 'name', sort: 'asc'}],
                    },
                }}
                localeText={itIT.components.MuiDataGrid.defaultProps.localeText}
                autoPageSize={true}
            />
            {!!snackbar && (
                <Snackbar
                    open
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    onClose={handleCloseSnackbar}
                    autoHideDuration={6000}
                >
                    <Alert {...snackbar} onClose={handleCloseSnackbar} />
                </Snackbar>
            )}
        </Box>
    );
}
