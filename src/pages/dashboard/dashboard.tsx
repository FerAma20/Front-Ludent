import React, { useEffect } from 'react';
import { validateSession, verifyToken } from '../../utils/sesion.utils';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
 const navigate = useNavigate();

  useEffect(() => {
    const token = verifyToken()
    if(token) navigate('/');
    
}, [])

    return (

      <>
      <h1>dash</h1>
      </>
    );
  }