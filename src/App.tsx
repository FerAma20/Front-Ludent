import { StyledEngineProvider } from '@mui/material/styles';
import './App.css'

import Navbar from './shared/navbar/Navbar.tsx';
import Footer from './shared/footer/Footer.tsx';

function App() {

  return (
    <div className='app_container'>
     <StyledEngineProvider injectFirst>
     <Navbar></Navbar>
    </StyledEngineProvider>
    
     <Footer></Footer>
      
    </div>
  )
}

export default App
