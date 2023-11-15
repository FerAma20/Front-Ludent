import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { StrictMode } from 'react'
import PagesRoutes from './PagesRoutes';
import Dashboard from './pages/dashboard/dashboard';
import Clients from './pages/clients/Clients';
import AuthRouter from './auth/AuthRoutes';
import Login from './auth/login/Login';

const router = createBrowserRouter([
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
      }
    ]
  },
  {

    path: '/Auth',
    element: <AuthRouter/>,
    children:[
      {
        path: '/Auth/Login',
        element:<Login/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
 <StrictMode>
<RouterProvider router={router}/>
 </StrictMode>
)
