import { TextField } from '@mui/material';
import React, { useState } from 'react';
import MuiButton from '../../../styleComponent/ButtonStyle';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>make admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField 
                label="Email" 
                type="email"
                onBlur={handleOnBlur}
                variant="standard"/>
                <MuiButton type="submit" variant="contained"> Make Admin</MuiButton>
            </form>
        </div>
    );
};

export default MakeAdmin;