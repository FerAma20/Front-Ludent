import React, { useEffect } from 'react';
import { verifyToken } from '../../utils/sesion.utils';
import { useNavigate } from 'react-router-dom';
import HeadProfile from './HeadProfile';
import BodyProfile from './BodyProfile';

function SettingsProfile() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = verifyToken()
    if(token) navigate('/');
    
}, [])
  return (
    <>
    
      <div className='container__profile'>
      <HeadProfile/>
        <BodyProfile/>
      </div>
      
    </>
  )
}

export default SettingsProfile