import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Sidebar from '../sidebar/Sidebar';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className='navbar_ludent'>
        <Toolbar>
          
          <Sidebar></Sidebar>
          <span className='text_navbar'>Ludent</span>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}