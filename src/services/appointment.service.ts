//const HOST = 'https://7dlvv6zq-4210.use2.devtunnels.ms/'
//const HOST = 'https://localhost:4210/'
const HOST = 'https://18.234.24.43:4210/'

export const readAllAppointment = async () =>{
    const url = `${HOST}api/readAllAppointment`
    try {
        const response = await fetch(url)
    return await response.json()
    } catch (error) {
        return error
    }
}

export const createClient = async (datos: any) => {
    try {
      const response = await fetch(`${HOST}api/createClients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      if (!response.ok) {
        throw new Error(`Error al enviar datos: ${response.status}`);
      }
      return await response.json();
    } catch (error: any) {
     return {status:500}
    }
  }

  export const setAppointment = async (datos: any) => {
    try {
      const response = await fetch(`${HOST}api/setAppointment`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      if (!response.ok) {
        throw new Error(`Error al enviar datos: ${response.status}`);
      }
      return await response.json();
    } catch (error: any) {
      console.log(error)
     return {status:500}
    }
  }