// import {useState} from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuItem from '@mui/material/MenuItem';
//
//  intending to use this for the menu bar
//
// import MayaWellness from '../assets/img/MayaWellnessOnHover.png';
// import Menu from '@mui/material/Menu';

// const MayaWellnessLogo = styled(Box)({
//   width: '50px',
//   height: '50px',
//   backgroundImage: `url(${MayaWellness})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
// });

// const MayaMenu = styled(Menu)({
//     backgroundColor: 'transparent',
//     border: 'none',
//     boxShadow: 'none',
//     padding: '0px',
//     margin: '0px',
//     marginTop: '23px',
//     opacity: '0.9',
// });


// const AppBar = styled(MuiAppBar)({
    
// });  

// export default function MayaTopBar ({title}) {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//       setAnchorEl(null);
//     };

//   return (   
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" elevation="10">
//         <Toolbar>
//           <IconButton
//             id="basic-button"
//             aria-controls="basic-menu"
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//             onClick={handleClick}
//           >
//             <MayaMenu 
//                 id="basic-menu"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 MenuListProps={{
//                     'aria-labelledby': 'basic-button',
//                 }}
//             >
//                 <MenuItem onClick={handleClose}>
//                     <Typography variant="h6" sx={{ fontFamily: 'Nova Round', fontSize: '1.5rem'}}>
//                         About Us
//                     </Typography>
//                 </MenuItem>
//                 <MenuItem onClick={handleClose}>
//                     <Typography variant="h6" sx={{ fontFamily: 'Nova Round', fontSize: '1.5rem'}}>
//                         Specialties
//                     </Typography>
//                 </MenuItem>
//                 <MenuItem onClick={handleClose} >
//                     <Typography variant="h6" sx={{ fontFamily: 'Nova Round', fontSize: '1.5rem'}}>
//                         Meet The Therapists
//                     </Typography>
//                 </MenuItem>
//                 <MenuItem onClick={handleClose} >
//                     <Typography variant="h6" sx={{ fontFamily: 'Nova Round', fontSize: '1.5rem'}}>
//                         Insurances Accepted
//                     </Typography>
//                 </MenuItem>
//                 <MenuItem onClick={handleClose} >
//                     <Typography variant="h6" sx={{ fontFamily: 'Nova Round', fontSize: '1.5rem'}}>
//                         FAQ
//                     </Typography>
//                 </MenuItem>
//                 <MenuItem onClick={handleClose} >
//                     <Typography variant="h6" sx={{ fontFamily: 'Nova Round', fontSize: '1.5rem'}}>
//                         Contact Us
//                     </Typography>
//                 </MenuItem>

//              </MayaMenu>
//           </IconButton>
//           <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontFamily: 'Nova Round', fontSize: '2rem' }}>
//             {title}
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };