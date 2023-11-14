import React, { useEffect, useState } from "react";
import TableClients from './components/TableClients'
import ModalClient from "./components/ModalClient";

import { readAllClients } from "../../services/clients.service";

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

    const handleClick = () => {
        setOpenA(true);
      };
    
      const handleCloseA = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenA(false);
      };

    const handleClickE = () => {
        setOpenE(true);
      };
    
      const handleCloseE = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenE(false);
      };
    //fetchData()
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
                ></TableClients>
            </section>
            <Stack spacing={2} sx={{ width: '100%' }}>
                                
                                <Snackbar open={openA} autoHideDuration={6000} onClose={handleCloseA}>
                                    <Alert onClose={handleCloseA} severity="success" sx={{ width: '100%' }}>
                                        This is a success message!
                                    </Alert>
                                </Snackbar>
                                <Snackbar open={openE} autoHideDuration={6000} onClose={handleCloseE}>
                                    <Alert onClose={handleCloseE} severity="error" sx={{ width: '100%' }}>
                                        This is a error message!
                                    </Alert>
                                </Snackbar>
                            </Stack>
        </div>
    );
}