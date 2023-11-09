import { StyledEngineProvider } from '@mui/material/styles';
import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './shared/navbar/Navbar.tsx';
import Footer from './shared/footer/Footer.tsx';
import Clients from './pages/clients/Clients.tsx';
import Dashboard from './pages/dashboard/dashboard.tsx';

function App() {

  return (
    <>
    <div className='app_container'>
      <div className='shared_container'>
      <StyledEngineProvider injectFirst>
        <Navbar></Navbar>
      </StyledEngineProvider>
      </div>
   
     <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path="/Clients" element={<Clients />} />
      </Routes>
    
      <Footer></Footer>

    </div>
    </>
  )
}

export default App
