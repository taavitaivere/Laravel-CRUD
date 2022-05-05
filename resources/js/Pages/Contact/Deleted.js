import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Button  from "@mui/material/Button";
import { Inertia } from "@inertiajs/inertia";

export default function Index(props) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'First name', width: 130 },
        { field: 'city', headerName: 'City', width: 130 },
        { field: 'phone', headerName: 'Phone', type: 'number', width: 90 },
        { field: 'age', headerName: 'Age', type: 'number', width: 90 },
        { field: 'country', headerName: 'Country', width: 130 },
        { field: 'employee', headerName: 'Employee', width: 130 },
        { field: 'restoreUrl', headerName: 'Restore', width: 90, renderCell: (cellValues) => {
                if (props.auth.user.id === cellValues.row.user_id) {
                    return <Button variant="contained" onClick={(e) => onRestoreClick(cellValues.row.id, e)}>
                        Restore
                    </Button>;
                }
            }
        },
        { field: 'forceDeleteUrl', headerName: 'ForceDelete', width: 90, renderCell: (cellValues) => {
                if (props.auth.user.id === cellValues.row.user_id) {
                    return <Button variant="contained" onClick={(e) => onForceDeleteClick(cellValues.row.id, e)}>
                        Delete Permanently
                    </Button>;
                }
            }
        },
    ];

    const onRestoreClick = (id, e) => {
        e.preventDefault();
        Inertia.post(route('contact.restore', id));
    }

    const onForceDeleteClick = (id, e) => {
        e.preventDefault();
        Inertia.delete(route('contact.forceDelete', id));
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight inline-block mr-2">Deleted Contacts</h2>
            </>}
        >
            <Head title="Contact list" />
            <div className="max-w-7xl w-full mx-auto flex justify-center gap-4 my-8 items-center pt-6 sm:pt-0 bg-gray-100">
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        components={{ Toolbar: GridToolbar }}
                        rows={props.contacts}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        </Authenticated>
    );
}
