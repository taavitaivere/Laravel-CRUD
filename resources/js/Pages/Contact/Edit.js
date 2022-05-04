import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, useForm} from '@inertiajs/inertia-react';
import Label from "@/Components/Label";
import TextField from "@mui/material/TextField"
import Checkbox from "@mui/material/Checkbox"
import ValidationErrors from "@/Components/ValidationErrors";

export default function Edit( props ) {
    const { post, errors, data, setData  } = useForm({
        name: props.contact.name,
        city: props.contact.city,
        phone: props.contact.phone,
        age: props.contact.age,
        country: props.contact.country,
        employee: props.contact.employee,
        image: null,
        _method: 'patch',
    });

    const onHandleChange = (event) => {
        setData(event.target.name , event.target.value)
    };

    const onHandleChangeFile = (event) => {
        setData(event.target.name, event.target.files[0] ?? null);
    };

    const onCheckboxHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value)
    }

    const onRemoveImage = () => {
        setData('removeImage', true);
        props.contact.image = null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.update', [props.contact.id]));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contact #{props.contact.id} </h2>}
        >
            <ValidationErrors errors={errors} />
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
                            <div className="mb-4">
                                <label htmlFor="image">Contact image:</label>
                                <input className="mb-4" type="file" id="image" name="image" onChange={onHandleChangeFile} />

                                { props.contact.image &&
                                    <div className="relative w-1/2 cursor-pointer" onClick={onRemoveImage}>
                                        <img src={"/storage/" + props.contact.image} title={data.name} />

                                        <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 hover:opacity-100 hover:bg-blue-500/50 flex items-center justify-center">
                                            <div className="text-2xl text-yellow-300 font-bold">X</div>
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className="w-max-sm flex items-center justify-center mt-4">
                                <button className="block text-center w-full rounded bg-indigo-600 text-indigo-50 p-2 hover:bg-indigo-400" type="submit">Submit</button>
                            </div>
                        </form>
                   </div>
        </Authenticated>
    );
}
