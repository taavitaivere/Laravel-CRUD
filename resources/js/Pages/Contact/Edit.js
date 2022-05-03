import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, useForm} from '@inertiajs/inertia-react';
import Label from "@/Components/Label";
import {Inertia} from "@inertiajs/inertia";
import TextField from "@mui/material/TextField"
import Checkbox from "@mui/material/Checkbox"

export default function Edit( props ) {
    const { data, setData  } = useForm({
        name: props.contact.name,
        city: props.contact.city,
        phone: props.contact.phone,
        age: props.contact.age,
        country: props.contact.country,
        employee: props.contact.employee
    });

    const onHandleChange = (event) => {
        setData(event.target.name , event.target.value)
    };

    const onCheckboxHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.patch(route('contact.update' ,[props.contact.id]), data)
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contact #{props.contact.id} </h2>}
        >
            <Head title="Edit" />
                <div className="max-w-2xl w-full mx-auto my-8 flex flex-col sm:justify-center items-center pt-6 bg-gray-100">
                        <form className="w-2/4" onSubmit={handleSubmit}>
                            <div className="p-2">
                                <TextField
                                    className="w-full"
                                    id="outlined-basic"
                                    name="name"
                                    value={data.name}
                                    label="name"
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div className="p-2">
                                <TextField
                                    className="w-full"
                                    id="outlined-basic"
                                    name="city"
                                    value={data.city}
                                    label="city"
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div className="p-2">
                                <TextField
                                    className="w-full"
                                    id="outlined-basic"
                                    name="phone"
                                    value={data.phone}
                                    label="phone"
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div className="p-2">
                                <TextField
                                    className="w-full"
                                    id="outlined-basic"
                                    name="age"
                                    value={data.age}
                                    label="age"
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div className="p-2">
                                <TextField
                                    className="w-full"
                                    id="outlined-basic"
                                    name="country"
                                    value={data.country}
                                    label="country"
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div className="p-2">
                                <Label forInput="employee" value="Employee"/>
                                <Checkbox
                                    type="checkbox"
                                    label="employee"
                                    name="employee"
                                    checked={data.employee}
                                    onChange={onCheckboxHandleChange}
                                />
                            </div>
                            <div className="w-max-sm flex items-center justify-center mt-4">
                                <button className="block text-center w-full rounded bg-indigo-600 text-indigo-50 p-2 hover:bg-indigo-400" type="submit">Submit</button>
                            </div>
                        </form>
                   </div>
        </Authenticated>
    );
}
