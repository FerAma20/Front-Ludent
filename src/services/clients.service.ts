const HOST = 'http://localhost:4210'

export const readAllClients = async () =>{
    const url = `${HOST}/api/readAllClients`
    const response = await fetch(url)
    return await response.json()
}