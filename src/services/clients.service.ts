const HOST = 'http://localhost:4210'

export const readAllClients = async () =>{
    const url = `https://7dlvv6zq-4210.use2.devtunnels.ms/api/readAllClients`
    const response = await fetch(url)
    return await response.json()
}