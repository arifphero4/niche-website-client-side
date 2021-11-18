import React from 'react';
import { useForm } from 'react-hook-form';

const inputStyle = {
    border: 'none',
    padding: '8px',
    borderBottom: '1px solid #646C6F',
    marginTop: '9px',
    width:'40%',
    outline:'none'
}

const AddReview = () => {
    const {register, handleSubmit, watch, reset} = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/userReview', {
            method: 'POST',
            headers: { 'content-type' : 'appliction/json'},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result =>{
                if(result?.insertedId){
                    alert('successfully add Review');
                    reset();
                }
            })
            console.log(data);
    }

    console.log(watch("example"));

    return (
        <div>
            <h2>Please Adregisterd Your Review about Products</h2>
            <div className="add-service">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        style={inputStyle}
                        {...register("name",{required: true})}
                        placeholder="Enter Your Name"
                    /> <br />
                    <input 
                        style={inputStyle}
                        {...register("name",{required: true})}
                        placeholder="Enter Your Name"
                    /> <br />
                    <input 
                        style={inputStyle}
                        {...register("description",{required: true})}
                        placeholder="Description"
                    /> <br />
                    <input 
                        style={inputStyle}
                        {...register("img",{required: true})}
                        placeholder="Enter img URL"
                    /> <br />
                    <input 
                        style={inputStyle}
                        {...register("rating",{required: true})}
                        placeholder="Rating min 0 max 5"
                    /> <br />
                    <input 
                       value='Add To Review'
                       type='submit'
                    />
                </form>
            </div>
        </div>
    );
};

export default AddReview;