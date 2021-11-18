import { Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { makeStyles } from '@mui/styles';
import MuiButton from '../../../styleComponent/ButtonStyle';

const useStyle = makeStyles({
    socialIcon: {
        color: '#E38194 !important',
        border: '1px solid #E38194 !important',
        margin: '20px 10px 30px 0 !important',
        '&:hover': {
            background: '#E5385A !important',
            color: '#fff !important'
        }
    },
    textColor:{
        color: 'white'
    }
})
const Footer = () => {
    const { socialIcon, textColor} = useStyle();
    return (
        <footer style={{background:'#263238'}}>
            <Container  >
                <Grid container spacing={3} sx={{ my: 3 }}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <List >
                        <Typography variant="h5" sx={{ color: '#E38194', mb: 1 }}>Quick Links</Typography>
                            <ListItemText className={textColor}>Home</ListItemText>
                            <ListItemText className={textColor}>About</ListItemText>
                            <ListItemText className={textColor}>Explore</ListItemText>
                            <ListItemText className={textColor}>Dashboard</ListItemText>
                            <ListItemText className={textColor}>Register</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <List>
                            <Typography variant="h5" sx={{ color: '#E38194', mb: 1 }}>Up Comming</Typography>
                            <ListItemText className={textColor}>Action Cam</ListItemText>
                            <ListItemText className={textColor}>Drones</ListItemText>
                            
                        </List>
                    </Grid>
                   
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <List>
                            <Typography variant="h5" sx={{ color: '#E38194', mb: 1 }}>Our Address</Typography>
                            <ListItemText className={textColor}>69 Frere Road, </ListItemText>
                            <ListItemText className={textColor}>Trust Building, </ListItemText>
                            <ListItemText className={textColor}>East London</ListItemText>
                        </List>
                        <IconButton className={socialIcon}>
                            <GoogleIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <InstagramIcon />
                        </IconButton>
                        <Typography className={textColor}>Send Email</Typography>
                        <MuiButton variant="contained">shutterstock@yahoo.com</MuiButton>
                    </Grid>
                </Grid>
                
            </Container>
            <Typography className={textColor} sx={{ textAlign: 'center', py: 4, background:'black'}} variant="subtitle2"> Copyright &copy; 2021 All Rights Reserved</Typography>
        </footer>
    );
};
// {new Date().getFullYear()}
export default Footer;