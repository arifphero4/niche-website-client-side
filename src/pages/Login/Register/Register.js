import {  Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
import MuiButton from '../../../styleComponent/ButtonStyle';


const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, loading, authError } = useAuth();  

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your Password did not matched')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container style={{marginTop: '50px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
                <Grid item sx={{mt: 8}} xs={12} md={6} >
                    <Typography variant='h4' gutterBottom sx={{fontWeight: 700}}>
                         Register
                    </Typography>
                    { !loading &&   <form onSubmit={handleLoginSubmit}>
                    <TextField 
                            sx={{width:'75%', m: 1}}
                            id="standard-basic" 
                            label=" Enter Your Name" 
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                    <TextField 
                            sx={{width:'75%', m: 1}}
                            id="standard-basic" 
                            label=" Enter Your Email" 
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField 
                            sx={{width:'75%', m: 1}}
                            id="standard-basic" 
                            label=" Enter Your Password" 
                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard" />
                        <TextField 
                            sx={{width:'75%', m: 1}}
                            id="standard-basic" 
                            label="Re-Type Your Password" 
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard" />
                        
                        <MuiButton sx={{width:'75%', m: 1}} type="submit" variant="contained">Register</MuiButton>
                        <NavLink 
                        to="/login"
                        style={{textDecoration: 'none'}}>
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {loading && <CircularProgress/> }
                    {user?.email &&  <Alert severity="success"> User Created Successfully!</Alert>}
                     {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;