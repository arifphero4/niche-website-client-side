import React from 'react';
import  './MakeProducts.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const MakeProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                console.log(res);
                if(res.data.insertedId){
                    alert('added successfully');
                    reset();
                }
            })
    }   
    return (
        <div className="add-service">
            <h1 style={{textAlign: 'center'}}>Please Add a Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Name" />
                <input type="number" {...register("price")} placeholder="Price" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="Image URL"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default MakeProducts;