import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { StrictMode } from 'react'
import PagesRoutes from './PagesRoutes';
import Dashboard from './pages/dashboard/dashboard';
import Clients from './pages/clients/Clients';
import Login from './auth/login/Login';
import SettingsProfile from './pages/users/SettingsProfile';
import Appointment from './pages/appointment/Appointment';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2b5aa2',
      light: '#2b5aa2',
      dark: '#213765',
      contrastText: '#FFFFFF',
    },
  },
});

const router = createBrowserRouter([
  {


    path: '/',
    element: <Login />

  },
  {
    path: '/',
    element: <PagesRoutes />,
    children: [
      {
        path: '/Dashboard',
        element: <Dashboard />
      },
      {
        path: '/Clients',
        element: <Clients />
      },
      {
        path: '/Appointment',
        element: <Appointment />
      },
      {
        path: '/Profile',
        element: <SettingsProfile />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>

  </StrictMode>
)
