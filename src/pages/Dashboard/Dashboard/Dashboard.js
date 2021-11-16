import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const drawerWidth = 240;

function Dashboard(props) {
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
    const {user, logOut} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const useStyle = makeStyles({
    navItem:{
        textDecoration:'none'
    }
  })
  const { navItem} = useStyle();

  const drawer = (
    <div style={{marginLeft:'20px'}}>
      <Toolbar />
      <Divider />
      <Link className={navItem} to="/home"><Button>Home</Button></Link>
      <Divider />
      <Link className={navItem} to="/dashboard"><Button> Dashboard</Button> </Link>
      <Divider />
      <Link className={navItem} to="/makeAdmin"><Button> Make Admin </Button> </Link>
      <Divider />
      <Link className={navItem} to="/makeProducts"><Button> Add Products</Button> </Link>
      <Divider />
      <Link className={navItem} to="/manageProducts"><Button>  Manage Products</Button> </Link>
      <Divider />
      <Link className={navItem} to="/manageOrders"><Button> Manage All Orders</Button> </Link>
      <Divider />
      <Link className={navItem} to="/myOrders"><Button> My Orders</Button> </Link>
      <Divider />
      <Link className={navItem} to="/review"><Button> Review</Button> </Link>
      <Divider />
      <Link className={navItem} to="/payment"><Button> Payment</Button> </Link>
      <Divider />

      <Link className={navItem} onClick={logOut} to="/makeProducts"><Button> Logout</Button> </Link>
      <Divider />
      
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard {user.displayName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          content here
        </Typography>
       
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;