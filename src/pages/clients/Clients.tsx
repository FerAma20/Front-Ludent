import React, { useEffect, useState } from "react";
import TableClients from './components/TableClients'
import ModalClient from "./components/ModalClient";

import { readAllClients } from "../../services/clients.service";



interface Data {
    c_name: string;
    c_age: number;
    c_type: number;
    c_phone: number;
    c_lastappointment: Date;
    c_nextappointment: Date;
    action: number;
  }

function createData(
    c_name: string,
    c_age: number,
    c_type: number,
    c_phone: number,
    c_lastappointment:Date,
    c_nextappointment:Date,
    action : number
  
  ): Data {
    return { c_name, c_age, c_type, c_phone, c_lastappointment,c_nextappointment, action };
  }

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

    let rows: any[] = [];

    const setDataTable = (data:any) =>{
        rows = [];
        if(data.length ==0) return
        data.forEach((element:any) => {
          rows.push(createData(element.c_name, element.c_age, element.c_type, element.c_phone, element.c_lastappointment, element.c_nextappointment, element.client_id));
        });
      }

    useEffect(() => {
        console.log('en el useEffect')
        fetchData()
        
    }, [])

    const fetchData = async () => {
        console.log('en el fetch')
        const data = await readAllClients()
        if(data.status ==200){
            setCustomers(data.data)
            setDataTable(rows)
        }
    }
    //fetchData()
    return (
        <div className="clients_container">
            <header>
                <h1 className="title__clients">Clients List</h1>

            </header>

            <section className='table_list' >
                
                <ModalClient ></ModalClient>
                <TableClients
                 customers={customers}
                 fetchData={fetchData}
                 setCustomer={setCustomer}
                 customerUpdate={customerUpdate}
                 setCustomerUpdate={setCustomerUpdate}
                ></TableClients>
            </section>

        </div>
    );
}