import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Show(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contact #{props.contact.id} </h2>}
        >
            <Head title="Contact" />
                <div
                    className="max-w-2xl w-full mx-auto my-8 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                    <div className="max-w-2xl w-full border border-gray-300 p-4 mb-4">
                        <div className="border-b border-gray-300 p-2">Name: {props.contact.name}</div>
                        <div className="border-b border-gray-300 p-2">City: {props.contact.city}</div>
                        <div className="border-b border-gray-300 p-2">Phone: {props.contact.phone}</div>
                        <div className="border-b border-gray-300 p-2">Age: {props.contact.age}</div>
                        <div className="border-b border-gray-300 p-2">Country: {props.contact.country}</div>
                        <div className="border-b border-gray-300 p-2">Employee: {props.contact.employee ? 'True' : 'False'}</div>
                    </div>
                </div>
        </Authenticated>
    );
}
