import React from 'react';
// @ts-ignore
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Button  from "@mui/material/Button";
import { Inertia } from "@inertiajs/inertia";
import route from "ziggy-js";

interface ContactInterface {
    age: number;
    city: string;
    country: string;
    created_at: string;
    deleted_at?: string;
    employee: boolean;
    id: number;
    image?: string;
    name: string;
    phone: number;
    updated_at?: string;
    user_id: number;
}

export default function Index( props: React.PropsWithChildren<any> ) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'First name', width: 130 },
        { field: 'city', headerName: 'City', width: 130 },
        { field: 'phone', headerName: 'Phone', type: 'number', width: 90 },
        { field: 'age', headerName: 'Age', type: 'number', width: 90 },
        { field: 'country', headerName: 'Country', width: 130 },
        { field: 'employee', headerName: 'Employee', width: 130 },
        { field: 'showUrl', headerName: 'Show', width: 90, renderCell: (cellValues: any) => {
            const contact: ContactInterface = cellValues.row;

            return <Button variant="contained" href={route('contact.show', [contact.id])}>
                Show
            </Button>;
        }},
        { field: 'editUrl', headerName: 'Edit', width: 90, renderCell: (cellValues: any) => {
            const contact: ContactInterface = cellValues.row;

            if (props.auth.user.id === contact.user_id) {
                return <Button variant="contained" href={route('contact.edit', [contact.id])}>
                    Edit
                </Button>;
            }
        }},
        { field: 'deleteUrl', headerName: 'Delete', width: 90, renderCell: (cellValues: any) => {
            const contact: ContactInterface = cellValues.row;

            if (props.auth.user.id === contact.user_id) {
                return <Button variant="contained" onClick={(event) => onDeleteClick(contact, event)}>
                    Delete
                </Button>;
            }
        }},
    ];

    const onDeleteClick = (contact: ContactInterface, event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        Inertia.delete(route('contact.destroy', [contact.id]))
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight inline-block mr-2"> Contact list</h2>
                <a className="inline-block px-2 py-1 rounded bg-indigo-600 text-sm text-indigo-50  hover:bg-indigo-400 mr-2"
                   href={route('contact.create')}>
                    Create
                </a>
                <a className="inline-block px-2 py-1 rounded bg-indigo-600 text-sm text-indigo-50  hover:bg-indigo-400"
                   href={route('contact.deleted')}>
                    Deleted Contacts
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
