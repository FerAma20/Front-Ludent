import React, { useEffect, useState } from "react";
import TableClients from './components/TableClients'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ModalClient from "./components/ModalClient";


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
                
                <ModalClient ></ModalClient>
                <TableClients></TableClients>
            </section>

        </div>
    );
}