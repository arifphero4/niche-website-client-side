import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../../hooks/useAuth';




const Navbar = () => {
    const {user, logOut} = useAuth();

    const theme = useTheme();
    const useStyle = makeStyles({
        navItem:{
            color: 'white',
            textDecoration:'none'
        },
        navIcon:{
            [theme.breakpoints.up('sm')]: {
               display: 'none !important'
              }
        },
        navItemContainer:{
            [theme.breakpoints.down('sm')]: {
                display: 'none'
               }
        },
        navLogo:{
            [theme.breakpoints.down('sm')]: {
                textAlign: 'left'
               }
        },
        mobileItem:{
            textDecoration: 'none',
            color: 'green'

        },
        navColor:{
        backgroundColor:'#263238'
        }
    })
    const {navItem, navIcon, navItemContainer, navLogo, mobileItem} = useStyle();


    ///////////////////
    const [state, setState] = React.useState(false);
    
    

    return (
       <>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar   position="static">
        <Toolbar>
          <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shutter Stock
          </Typography>
            <Box className={navItemContainer}>
                <Link className={navItem} to="/home"><Button color="inherit">Home</Button></Link>
                <Link className={navItem} to="/explore"><Button color="inherit">Explore</Button></Link>
                
                
                {
                    user?.email? 
                    <>
                    <Link className={navItem} to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
                    <Button color="secondary"> {user.displayName}</Button>
                    <Button onClick={logOut} color="inherit">Logout</Button>
                    </>
                    :
                    <NavLink className={navItem} to="/login"><Button color="inherit">Login</Button></ NavLink>
                }
            </Box>
            
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={() => setState(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
        <div>
       
        <React.Fragment >
           
            <Drawer
            
            open={state}
            onClose={() => setState(false)}
            >
             <Box
                sx={{ width:250 }}
                role="presentation">
                <List>
                    <ListItem button >
                        <ListItemText> <Link className={mobileItem}  to="/home">Home</Link> </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button >
                        <ListItemText> <Link className={mobileItem}  to="/explore">Explore</Link> </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button >
                        <ListItemText> <Link className={mobileItem}  to="/dashboard">Dashboard</Link> </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button >
                        <ListItemText> <Button className={mobileItem} onClick={logOut} color="inherit">Logout</Button></ListItemText>
                    </ListItem>
                    <Divider />
                </List>
                
                
            </Box>
            </Drawer>
            </React.Fragment>
            
        </div>
     </>
    );
};

export default Navbar;














