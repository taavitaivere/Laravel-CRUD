import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, useForm} from '@inertiajs/inertia-react';
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";
import {FormControlLabel, TextField} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

export default function Create(props) {
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('contact.store'));
    };

    const { post, processing, errors, data, setData  } = useForm({
        name: '',
        city: '',
        phone: '',
        age: '',
        country: '',
        employee: false,
    });

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create contact</h2>}
        >
            <ValidationErrors errors={errors} />
                <Head title="Create" />
                    <div className="max-w-2xl w-full mx-auto my-8 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 ">
                        <form onSubmit={submit} className="px-5 py-3 w-2/4">
                            <div className="mb-4">
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="Name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    onChange={onHandleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="City"
                                    type="text"
                                    name="city"
                                    value={data.city}
                                    className="mt-1 block w-full"
                                    autoComplete="city"
                                    onChange={onHandleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="Phone"
                                    type="tel"
                                    name="phone"
                                    value={data.phone}
                                    className="mt-1 block w-full"
                                    autoComplete="phone"
                                    onChange={onHandleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="Age"
                                    type="text"
                                    name="age"
                                    value={data.age}
                                    className="mt-1 block w-full"
                                    onChange={onHandleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="Country"
                                    type="text"
                                    name="country"
                                    value={data.country}
                                    className="mt-1 block w-full"
                                    onChange={onHandleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <formGroup>
                                    <FormControlLabel control={<Checkbox name="employee" onChange={onHandleChange} />} label="Employee"/>
                                </formGroup>
                            </div>

                            <div className="mt-5 w-full">
                                <Button className="justify-center w-full rounded bg-indigo-600 text-indigo-50 p-2 hover:bg-indigo-400" type="submit" processing={processing}>
                                    Add
                                </Button>
                            </div>
                        </form>
                    </div>
        </Authenticated>
    );
}
