import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { StrictMode } from 'react'
import PagesRoutes from './PagesRoutes';
import Dashboard from './pages/dashboard/dashboard';
import Clients from './pages/clients/Clients';
import Login from './auth/login/Login';
import SettingsProfile from './pages/users/SettingsProfile';

const router = createBrowserRouter([
  {

    
    path: '/',
    element:<Login/>
  
},
  {
    path: '/',
    element: <PagesRoutes/>,
    children:[
      {
        path: '/Dashboard',
        element:<Dashboard/>
      },
      {
        path: '/Clients',
        element:<Clients/>
      },
      {
        path: '/Profile',
        element:<SettingsProfile/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
 <StrictMode>
<RouterProvider router={router}/>
 </StrictMode>
)
