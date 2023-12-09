import React, { useEffect } from 'react';
import { validateSession, verifyToken } from '../../utils/sesion.utils';
import { useNavigate } from 'react-router-dom';

import imgWelcome from '../../assets/images/background/welcome.svg'

export default function Dashboard() {
 const navigate = useNavigate();

  useEffect(() => {
    const token = verifyToken()
    if(token) navigate('/');
    
}, [])

    return (

      <>
      <div>
       
      </div>
      </>
    );
  }