import React, { useState } from "react";
import Swal from "sweetalert2"
import moment from 'moment';
import TableClients from './components/TableClients'

//import { deleteCustomers } from "../../Services/customer.service";

const ClientList: React.FC<{ customers: any, fetchData:any, setCustomer:any, customerUpdate:any, setCustomerUpdate:any }> = ({ customers, fetchData, setCustomer, customerUpdate, setCustomerUpdate} ) => {

    const updateCustomer = (customer:any) => {
        setCustomer(customer)
        setCustomerUpdate(true)
    }

    const deleteCustomer = async (idCustomer:any) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure you want to delete this customer?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Im sure',
            denyButtonText: `No, cancel`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              //  const deleteC = await deleteCustomers(idCustomer)
                fetchData()
                Swal.fire('Success Delete', '', 'success')
            }
        })

    }
    return (
        <>

   
            <br />
            <br />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-center">
                    <h1 className="font-black text-3xl text-center">Customers List</h1>
                </div>
                <br />
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th className="px-6 py-3 text-center">Name</th>
                            <th className="px-6 py-3 text-center">Age</th>
                            <th className="px-6 py-3 text-center">Phone</th>
                            <th className="px-6 py-3 text-center">Customer Types</th>
                            <th className="px-6 py-3 text-center">Last Appointment</th>
                            <th className="px-6 py-3 text-center">Next Appointmentt</th>
                            <th className="px-6 py-3 text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((item:any, index:any) => {
                            return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                                <td className="px-6 py-4 text-center" >{item.nameCustomer}</td>
                                <td className="px-6 py-4 text-center">{item.ageCustomer}</td>
                                <td className="px-6 py-4 text-center">{item.phoneCustomer}</td>
                                <td className="px-6 py-4 text-center">{item.typeCustomer == 1 ? 'ADULT' : 'CHILD'}</td>
                                <td className="px-6 py-4 text-center">{item.lastAppointmentCustomer != null ? moment(item.lastAppointmentCustomer).format('D[/]MM[/]YYYY') : '---'}</td>
                                <td className="px-6 py-4 text-center">{item.nextAppointmentCustomer != null ? moment(item.nextAppointmentCustomer).format('D[/]MM[/]YYYY') : '---'}</td>
                                <td className="pr-3">

                                    <div className="flex justify-between">

                                        <button onClick={() => updateCustomer(item)}>
                                            <svg className="mr-5 ml-3 cursor-pointer w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                                <path stroke="currentColor" strokeLinejoin="round" d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z" />
                                            </svg>
                                        </button>

                                        <button onClick={() => deleteCustomer(item.idCustomer)}>
                                            <svg className="cursor-pointer w-[18px] h-[18px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20" >
                                                <path stroke="currentColor" strokeLinejoin="round" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                            </svg>
                                        </button>

                                    </div>
                                </td>
                            </tr>
                        })
                        }


                    </tbody>
                </table>

            </div>
            <br />
            <br />

        </>
    )

}

export default ClientList