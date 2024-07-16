"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
import { pages as navItems } from '@/public/page-data';
import { Oswald, Hurricane } from 'next/font/google';
import slugify from 'slugify';
import Link from 'next/link';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;


const inter = Oswald({
  subsets: ['latin'],
  weight: "400"
});

const hurricane = Hurricane({
  subsets: ['latin'],
  weight: '400'
});


export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
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

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={hurricane.className}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" className="appBar">
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

            <Box
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              <Link href={'/'} style={{textDecoration: "none"}}>
                <Typography
                  variant="h6"
                  component="div"
                  className={hurricane.className}
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: "bold", fontSize: "3.5rem", color:"#DECC50"}}
                >
                  Nasser Law
                </Typography>            
              </Link>              
            </Box>


            <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
              {navItems.map((item) => (
                <Link key={item}  href={`/${slugify(item).toLowerCase()}`} >
                  <Button  sx={{ color: '#fff' }} className={inter.className}>
                    {item}
                  </Button>
                </Link>
                
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
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
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>      
    </div>

  );
}
