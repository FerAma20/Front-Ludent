
import './App.css'
import { Routes, Route, Navigate  } from "react-router-dom"
import PagesRoutes from './PagesRoutes.tsx';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthRouter from './auth/AuthRoutes.tsx';
import Footer from './shared/footer/Footer.tsx';

function App() {
  const theme = createTheme({
    palette: {
        primary: {
            main: '#84E8E5',
            light: '#84E8E5',
            dark: '#BAD034',
            contrastText: '#242105',
        },
    },
});

  return (
    <>
    
    <ThemeProvider theme={theme}>
     <Routes>
     <Route path="/" element={<AuthRouter/>} />
        <Route path='/Page'  element={<PagesRoutes />} />
        
      </Routes>
      <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

export default App
