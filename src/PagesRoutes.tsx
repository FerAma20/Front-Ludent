import { StyledEngineProvider } from '@mui/material/styles';
import './App.css'
import { Outlet } from "react-router-dom"
import Navbar from './shared/navbar/Navbar.tsx';
import Footer from './shared/footer/Footer.tsx';


function PagesRoutes() {
  const estilo = {
    paddingTop: '70px'
  };
  return (
    <>
    <div className='app_container' style={estilo}>
      <div className='shared_container'>
      <StyledEngineProvider injectFirst>
        <Navbar></Navbar>
      </StyledEngineProvider>
      </div>
   <Outlet/>
    
    
      <Footer></Footer>

    </div>
    </>
  )
}

export default PagesRoutes