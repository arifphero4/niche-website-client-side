import {  Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
import MuiButton from '../../../styleComponent/ButtonStyle';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const {user, loginUser,  loading, authError,         signInWithGoogle
    } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn =() => {
        signInWithGoogle(location, history);
    }
    return (
        <Container style={{marginTop: '50px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
                <Grid item sx={{mt: 8}} xs={12} md={6} >
                    <Typography variant='h4' gutterBottom sx={{fontWeight: 700}}>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField 
                            sx={{width:'75%', m: 1}}
                            id="standard-basic" 
                            label="Your Email" 
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField 
                            sx={{width:'75%', m: 1}}
                            id="standard-basic" 
                            label="Your Password" 
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard" />
                        
                        <MuiButton sx={{width:'75%', m: 1}} type="submit" variant="contained">Login</MuiButton>
                        <NavLink 
                        to="/register"
                        style={{textDecoration: 'none'}}>
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {loading && <CircularProgress/> }
                        {user?.email &&  <Alert severity="success"> User Created Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>

                    <MuiButton onClick={handleGoogleSignIn} variant="contained">Google Sign In</MuiButton>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;