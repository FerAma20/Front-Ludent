import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InventoryIcon from '@mui/icons-material/Inventory';

import logo from '../../assets/logo.png'



type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

<div className='title_sidebar'>
<img src={logo} width='100'></img>
<span className='text_navbar'>Ludent</span>
  </div>
<Divider />
      <List>


        <Link to='/Dashboard' key="1">
          <ListItem disablePadding>
            <ListItemButton>
              <HomeIcon className='icon_sidebar'></HomeIcon>
              <ListItemText className='link_sidebar' primary='Dashboard' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to='/Clients' key="1">
          <ListItem disablePadding>
            <ListItemButton>
              <PeopleIcon className='icon_sidebar'></PeopleIcon>
              <ListItemText className='link_sidebar' primary='Clients' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to='#' key="1">
          <ListItem disablePadding>
            <ListItemButton>
              <PermContactCalendarIcon className='icon_sidebar'></PermContactCalendarIcon>
              <ListItemText className='link_sidebar' primary='Appoinment' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to='#' key="1">
          <ListItem disablePadding>
            <ListItemButton>
              <InventoryIcon className='icon_sidebar'></InventoryIcon>
              <ListItemText className='link_sidebar' primary='Products' />
            </ListItemButton>
          </ListItem>
        </Link>

      </List>

      <Divider />
      <List>


      <Link to='/Auth/Login' key="1">
          <ListItem disablePadding>

            <ListItemButton>
              <LoginIcon className='icon_sidebar'></LoginIcon>
              <ListItemText className='link_sidebar' primary='Sign In' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to='#' key="1">
          <ListItem disablePadding>

            <ListItemButton>
              <LogoutIcon className='icon_sidebar'></LogoutIcon>
              <ListItemText className='link_sidebar' primary='Sign Out' />
            </ListItemButton>
          </ListItem>
        </Link>

      </List>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>


          <MenuIcon onClick={toggleDrawer(anchor, true)} className='btn-sidebar'></MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >

            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}