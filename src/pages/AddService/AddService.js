import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

        const url = "http://localhost:5000/service";
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"

            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        });
    }
    return (
        <section className="bg-white">
            <div className="container mx-auto flex items-center justify-center h-screen">
                <div className="w-2/6 bg-blue-400 py-6 px-4 space-y-3 shadow-md rounded">
                    <h3 className="text-center text-2xl ">Add Service</h3>
                    <form className='space-y-2' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Service Name' className='rounded py-1 px-2 w-full block bg-gray-50' {...register("name", { required: true})} />
                        <textarea placeholder='Service Description' className='rounded p-1 px-2 w-full block bg-gray-50 resize-none' name="textarea" id="" cols="30" rows="4"  {...register("description")} ></textarea>
                        <input placeholder='Service Price' type='number' className='rounded p-1 px-2 w-full block bg-gray-50'  {...register("price")} />
                        <input placeholder='Image url' className='rounded p-1 px-2 w-full block bg-gray-50'  {...register("img")} />
                        <input value='Add service' className='rounded py-1 px-2 w-full block text-white  bg-green-400 hover:bg-green-500 cursor-pointer' type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;