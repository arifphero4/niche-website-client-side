import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import extra1 from '../../../images/extra-1.jpg'
import extra2 from '../../../images/extra-2.jpg'
import extra3 from '../../../images/extra-3.jpeg'

const ExtraPart = () => {
    return (
        <Container>
            <Box sx={{ width: "80%", margin: "0 auto" }}>
                <h1>Best Sell Products</h1>
                <Grid container spacing={2}>
                    <Grid item lg={3} mx={3} md={6} sm={12} xs={12} >
                        
                        <img src={extra1} alt=""  width="100%"/>
                        
                       
                    </Grid>
                    <Grid item lg={3} mx={3} md={6} sm={12} xs={12}>

                         <img src={extra2} alt=""  width="100%"/>
                    </Grid>
                    <Grid item lg={3} mx={3} md={6} sm={12} xs={12} >

                         <img src={extra3} alt=""  width="100%"/>
                    </Grid>

                </Grid>


            </Box >
        </Container >
    );
};

export default ExtraPart;