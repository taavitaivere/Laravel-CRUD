import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Button  from "@mui/material/Button";

export default function Index(props) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'First name', width: 130 },
        { field: 'city', headerName: 'City', width: 130 },
        { field: 'phone', headerName: 'Phone', type: 'number', width: 90 },
        { field: 'age', headerName: 'Age', type: 'number', width: 90 },
        { field: 'country', headerName: 'Country', width: 130 },
        { field: 'employee', headerName: 'Employee', width: 130 },
        { field: 'showUrl', headerName: 'Show', width: 90, renderCell: (cellValues) => {
                return <Button variant="contained" href={route('contact.show', cellValues.row.id)}>
                    Show
                </Button>;
            }
        },
        { field: 'editUrl', headerName: 'Edit', width: 90, renderCell: (cellValues) => {
            if (props.auth.user.id === cellValues.row.user_id) {
                    return <Button variant="contained" href={route('contact.edit', cellValues.row.id)}>
                        Edit
                    </Button>;
                }
            }
        },
    ];

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight inline-block mr-2"> Contact list</h2>
                <a className="inline-block px-2 py-1 rounded bg-indigo-600 text-sm text-indigo-50  hover:bg-indigo-400"
                   href={route('contact.create')}>
                    Create
                </a>
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
