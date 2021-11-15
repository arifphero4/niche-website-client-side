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
    }
})
const Footer = () => {
    const { socialIcon } = useStyle();
    return (
        <footer>
            <Container >
                <Grid container spacing={3} sx={{ my: 3 }}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <List >
                        <Typography variant="h5" sx={{ color: '#E38194', mb: 1 }}>Quick Links</Typography>
                            <ListItemText>Home</ListItemText>
                            <ListItemText>About</ListItemText>
                            <ListItemText>Explore</ListItemText>
                            <ListItemText>Dashboard</ListItemText>
                            <ListItemText>Register</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <List>
                            <Typography variant="h5" sx={{ color: '#E38194', mb: 1 }}>Services</Typography>
                            <ListItemText >Emergency Dental Care</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            
                        </List>
                    </Grid>
                   
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <List>
                            <Typography variant="h5" sx={{ color: '#E38194', mb: 1 }}>Our Address</Typography>
                            <ListItemText>New York - 101010 Hudson</ListItemText>
                            <ListItemText>Yards</ListItemText>
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
                        <Typography>Call Now</Typography>
                        <MuiButton variant="contained">+8065432145</MuiButton>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', py: 4 }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer>
    );
};

export default Footer;