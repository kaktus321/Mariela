import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "./img/Logo.png"
import cart from "./img/Cart.svg"
import './styles/NavBar.scss'


const drawerWidth = 240;
const navItems = ['Home', 'About me', 'Products', 'Contact me'];

function DrawerAppBar({setShow, size}, props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background: 'white' }}>
          <div className="cartBTN">
            <span className="myShop" onClick={() => setShow(true)} >
                <Link to='/'><img src={logo} alt="" /></Link>
              </span>
          </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
              
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
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
          <span className="myShop" onClick={() => setShow(true)} >
              <Link to='/'><img src={logo} alt="" /></Link>
            </span>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
            <button className="cart cartButton" onClick={() => setShow(false)}> <Link to='/cart'><img src={cart} alt="" /></Link> </button>
                <span>{size}</span>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;















/* import React from 'react'
import './styles/NavBar.scss'
import logo from "./img/Logo.png"
import cart from "./img/Cart.svg"

const NavBar = ({setShow, size}) => {
  return (
  <>
    <header>
        <div className='columnsWrapper'>
            <div className="leftColumn">
              <span className="myShop" onClick={() => setShow(true)} >
                  <img src={logo} alt="" />
              </span>
            </div>
            <div className="rightColumn">
                <ul>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Products</li>
                    <li>Contact me</li>
                </ul>
                
                <button className="cart cartButton" onClick={() => setShow(false)}> <img src={cart} alt="" /> </button>
                <span>{size}</span>
            </div>
        </div>
    </header>
  </>
  )
}

export default NavBar; */