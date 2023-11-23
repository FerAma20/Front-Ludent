//const HOST = 'https://localhost:4210/'
//const HOST = 'https://7dlvv6zq-4210.use2.devtunnels.ms/'
const HOST = 'https://18.234.24.43:4210/'

export const readAllClients = async () =>{
    const url = `${HOST}api/readAllClients`
    const response = await fetch(url)
    return await response.json()
}

export const verifyUser = async (datos: any) => {
    try {
      console.log(datos)
      console.log(`${HOST}api/verifyUser`)
      const response = await fetch(`${HOST}api/verifyUser`, {
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
      console.log(error)
     return {status:500}
    }
  }