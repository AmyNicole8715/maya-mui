import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton, useMediaQuery } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

import MayaWellness from '../assets/img/MayaWellnessOnHover.png';



const MayaWellnessLogo = styled(Box)({
  width: '3.125rem',
  height: '3.125rem',
  backgroundImage: `url(${MayaWellness})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  marginRight: '1rem',
});

const drawerWidth = 350;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({title}) {
  const mobile = useMediaQuery('(max-width: 500px)');
  const desktop = useMediaQuery('(min-width: 500px)');
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (   
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation="12">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          {mobile &&
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontFamily: 'Nova Round'}}>
              {title}
            </Typography>
          }
          {desktop &&
            <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1, fontFamily: 'Nova Round'}}>
              {title}
            </Typography>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxShadow: '0px 0px 10px 0px black',
            boxSizing: 'border-box',
            backgroundColor:'primary.main',
            color: 'white',
            opacity: '.85',
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <HashLink to="#aboutus" style={{ textDecoration: "none" }}>
            <ListItemButton onClick={handleDrawerClose} aria-label='About Us'>
              <MayaWellnessLogo/>
              {mobile &&
                <ListItemText 
                  primaryTypographyProps={{ 
                  variant: 'h6',
                  style: {
                    fontFamily: 'Nova Round',
                    color: 'white',
                    marginLeft: '1rem',
                    flexWrap: 'wrap',
                  }
                  }}>
                  About Us
                </ListItemText>
              }
              {desktop &&
                <ListItemText primaryTypographyProps={{ 
                  variant: 'h5',
                  style: {
                    fontFamily: 'Nova Round',
                    fontSize: '1.5rem',
                    color: 'white',
                    marginLeft: '1rem',
                    flexWrap: 'wrap',
                  }
                }}
                >
                 About Us
                </ListItemText>
              }
            </ListItemButton>
          </HashLink>
          <HashLink to="#meetthem" style={{ textDecoration: "none" }}>
            <ListItemButton onClick={handleDrawerClose} aria-label='Meet The Therapists'>
              <MayaWellnessLogo/>
              {mobile &&
                <ListItemText primaryTypographyProps={{ 
                  variant: 'h6',
                  style: {
                    fontFamily: 'Nova Round',
                    color: 'white',
                    marginLeft: '1rem',
                  }
                }}>
                Therapists
              </ListItemText>
              }
              {desktop &&
                <ListItemText primaryTypographyProps={{ 
                  variant: 'h5',
                  style: {
                    fontFamily: 'Nova Round',
                    color: 'white',
                    marginLeft: '1rem',
                  }
                }}>
                  Therapists
                </ListItemText>
              }
            </ListItemButton>
          </HashLink>
          <HashLink to="#specialties" style={{ textDecoration: "none" }}>
            <ListItemButton onClick={handleDrawerClose} aria-label='Specialties'>
              <MayaWellnessLogo/>
              {mobile &&
                <ListItemText primaryTypographyProps={{ 
                  variant: 'h6',
                  style: {
                    fontFamily: 'Nova Round',
                    color: 'white',
                    marginLeft: '1rem',
                  }
                }}>
                  Specialties
                </ListItemText>
              } 
              {desktop &&
                <ListItemText primaryTypographyProps={{ 
                  variant: 'h5',
                  style: {
                    fontFamily: 'Nova Round',
                    color: 'white',
                    marginLeft: '1rem',
                  }
                }}>
                  Specialties
                </ListItemText>
              }
            </ListItemButton>
          </HashLink>
          <HashLink to="#insurance" style={{ textDecoration: "none" }}>
            <ListItemButton onClick={handleDrawerClose} aria-label='Insurances Accepted'>
              <MayaWellnessLogo/>
              {mobile &&
                <ListItemText primaryTypographyProps={{ 
                  variant: 'body1',
                  style: {
                    fontFamily: 'Nova Round',
                    color: 'white',
                    marginLeft: '1rem',
                  }
                }}>
                  Insurances Accepted
                </ListItemText>
              }
              {desktop &&
                <ListItemText primaryTypographyProps={{ 
                  variant: 'h6',
                  style: {
                    fontFamily: 'Nova Round',
                    color: 'white',
                    marginLeft: '1rem',
                  }
                }}>
                  Insurances Accepted
                </ListItemText>
              }
            </ListItemButton>
          </HashLink>
          <HashLink to="#contactus" style={{ textDecoration: "none" }}>
            <ListItemButton onClick={handleDrawerClose} aria-label='Contact Form'>
              <MayaWellnessLogo/>
              {mobile &&
                <ListItemText primaryTypographyProps={{ 
                  variant: 'h6',
                  style: {
                    fontFamily: 'Nova Round',
                    color: 'white',
                    marginLeft: '1rem',
                  }
                }}>
                  Contact Us
                </ListItemText>
              }
              {desktop &&
                <ListItemText primaryTypographyProps={{ 
                  variant: 'h5',
                  style: {
                    fontFamily: 'Nova Round',
                    color: 'white',
                    marginLeft: '1rem',
                  }
                }}>
                  Contact Us
                </ListItemText>
              }
            </ListItemButton>
          </HashLink>
          <HashLink to="#workwithus" style={{ textDecoration: "none" }}>
            <ListItemButton onClick={handleDrawerClose} aria-label='Positions and internships'>
              <MayaWellnessLogo/>
              {mobile &&
                <ListItemText primaryTypographyProps={{ 
                  variant: 'h6',
                  style: {
                    fontFamily: 'Nova Round',
                    color: 'white',
                    marginLeft: '1rem',
                  }
                }}>
                  Work With Us
                </ListItemText>
              }
              {desktop &&
                <ListItemText primaryTypographyProps={{ 
                  variant: 'h5',
                  style: {
                    fontFamily: 'Nova Round',
                    color: 'white',
                    marginLeft: '1rem',
                  }
                }}>
                  Work With Us
                </ListItemText>
              }
            </ListItemButton>
          </HashLink>
        </List>
      </Drawer>
    </Box>
  );
};