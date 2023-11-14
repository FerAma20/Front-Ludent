const HOST = 'http://localhost:4210'

export const readAllClients = async () =>{
    const url = `https://7dlvv6zq-4210.use2.devtunnels.ms/api/readAllClients`
    const response = await fetch(url)
    return await response.json()
}

export const createClient = async (datos: any) => {
    try {
      const response = await fetch(`https://7dlvv6zq-4210.use2.devtunnels.ms/api/createClients`, {
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