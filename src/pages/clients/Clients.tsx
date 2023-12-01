import React, { useEffect, useState } from "react";
import TableClients from './components/TableClients'
import ModalClient from "./components/ModalClient";

import { verifyToken } from '../../utils/sesion.utils';
import { useNavigate } from 'react-router-dom';

import { readAllClients, deleteClient } from "../../services/clients.service";

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


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
  const navigate = useNavigate();

  const [message, setMessage] = React.useState('');
    const [openA, setOpenA] = React.useState(false);
    const [openE, setOpenE] = React.useState(false);
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
      const token = verifyToken()
      if(token) navigate('/');

        fetchData()
        
    }, [])

    const fetchData = async () => {
        const data = await readAllClients()
        if(data.status ==200){
            setCustomers(data.data)
            setDataTable(rows)
        }
    }

    const handleClick = (msg:string) => {
      setMessage(msg)
        setOpenA(true);
      };
    
      const handleCloseA = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenA(false);
      };

    const handleClickE = (msg:string) => {
      setMessage(msg)
        setOpenE(true);
      };
    
      const handleCloseE = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenE(false);
      };

      
  const deleteClientCurrent = async (client_id: any) => {
    const deleteUser = await deleteClient({client_id})
    console.log(deleteUser)
    if(deleteUser.status == 200){
      handleClick('Successful removal!')
    }else{
      handleClickE('Incorrect removal!')
  }
  }

    return (
        <div className="clients_container">
            <header>
                <h1 className="title__clients">Clients List</h1>

            </header>

            <section className='table_list' >
                
                <ModalClient
                handleClick = {handleClick}
                handleClickE = {handleClickE}
                ></ModalClient>
                <TableClients
                 customers={customers}
                 fetchData={fetchData}
                 setCustomer={setCustomer}
                 customerUpdate={customerUpdate}
                 setCustomerUpdate={setCustomerUpdate}
                 deleteClientCurrent = {deleteClientCurrent}
                ></TableClients>
            </section>
            <Stack spacing={2} sx={{ width: '100%' }}>
                                
                                <Snackbar open={openA} autoHideDuration={6000} onClose={handleCloseA}>
                                    <Alert onClose={handleCloseA} severity="success" sx={{ width: '100%' }}>
                                    {message}
                                    </Alert>
                                </Snackbar>
                                <Snackbar open={openE} autoHideDuration={6000} onClose={handleCloseE}>
                                    <Alert onClose={handleCloseE} severity="error" sx={{ width: '100%' }}>
                                    {message}
                                    </Alert>
                                </Snackbar>
                            </Stack>
        </div>
    );
}