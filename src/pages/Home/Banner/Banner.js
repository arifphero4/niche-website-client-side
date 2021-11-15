import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MuiButton from '../../../styleComponent/ButtonStyle';
import bg from '../../../images/bg.jpg'
import banner from '../../../images/banner.png'

    const style = {
        minHeight: 500,
        height: '100vh', 
        display: 'flex', 
        alignItems:'center',
        background:`url(${bg})`,
        backgroundRpeat: 'no-repeat'

    }
    

const Banner = () => {
    return (
        <div style={style}>
            <Container>
                <Grid container spacing={2} sx={{alignItems: 'center'}}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h4" sx={{fontWeight: 600, color:'white'}}>
                            Welcome to Fujifilm Corner
                        </Typography>
                        <Typography variant="body1" sx={{lineHeight: 1.5, my: 3, color:'white'}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, expedita inventore ullam alias a molestiae. Exercitationem maiores ab consequuntur! Sit.
                        </Typography>
                        <MuiButton variant="contained"> Explore More </MuiButton>
                        
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src={banner} alt="camera" width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;