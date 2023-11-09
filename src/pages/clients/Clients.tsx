import React, { useEffect, useState } from "react";
import TableClients from './components/TableClients'


export default function Clients() {

    const [customerUpdate, setCustomerUpdate] = useState(false)
    const [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState({
        idCustomer: '0',
        nameCustomer: '',
        ageCustomer: '',
        phoneCustomer: '',
        typeCustomer: '',
        lastAppointmentCustomer: '',
        nextAppointmentCustomer: ''
    })

    useEffect(() => {

    }, [])

    const fetchData = async () => {
        //  setCustomers(await readAllCustomers())
    }
    return (
        <div className="clients_container">
            <header>
                <h1 className="title__clients">Clients List</h1>
                
            </header>
            <section className='table_list' >
            <TableClients></TableClients>
            </section>

        </div>
    );
}