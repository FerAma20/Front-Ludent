
import './App.css'
import { Routes, Route, Navigate  } from "react-router-dom"
import PagesRoutes from './PagesRoutes.tsx';
import AuthRouter from './auth/AuthRoutes.tsx';

function App() {

  return (
    <>
    
   
     <Routes>
        <Route path=''  element={<PagesRoutes />} />
        <Route path="/Auth" element={<AuthRouter/>} />
      </Routes>
   
    </>
  )
}

export default App
