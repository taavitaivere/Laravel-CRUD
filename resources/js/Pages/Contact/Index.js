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
        { field: 'phone', headerName: 'Phone', type: 'number', width: 90, },
        { field: 'age', headerName: 'Age', type: 'number', width: 90, },
        { field: 'country', headerName: 'Country', width: 130 },
        { field: 'employee', headerName: 'Employee', width: 130 },
        { field: 'showUrl', headerName: 'Show', width: 90, renderCell: (cellValues) => {
                return <Button variant="contained" href={route('contact.show', cellValues.row.id)}>
                    Show
                </Button>;
            }
        },
    ];

    const rows = props.contacts.map(contact => {
        return {
            id: contact.id,
            name: contact.name,
            city: contact.city,
            phone: contact.phone,
            age: contact.age,
            country: contact.country,
            employee: contact.employee,


        }
    });

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"> Contact list</h2>}
        >
            <Head title="Contact list" />
            <div className="max-w-7xl w-full mx-auto flex justify-center gap-4 my-8 items-center pt-6 sm:pt-0 bg-gray-100">
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        components={{ Toolbar: GridToolbar }}
                        rows={rows}
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
