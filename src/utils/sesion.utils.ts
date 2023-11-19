import { isExpired, decodeToken } from "react-jwt";

export const validateSession = () => {
  const objetoGuardado = localStorage.getItem('data_session');
  if (objetoGuardado) {
    var setMiObjeto = JSON.parse(objetoGuardado)
    return setMiObjeto
  }
}

export const verifyToken = () => {
  const token = localStorage.getItem('token');
  if (token) return isExpired(token);
  return true;
}

export const decodificateToken = () => {
  const token = localStorage.getItem('token');
  if (token) return decodeToken(token);
  return true;
}

export const signOutSession = () =>{
  localStorage.setItem('token',JSON.stringify({token:''}));
}