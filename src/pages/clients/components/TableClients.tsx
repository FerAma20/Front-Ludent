import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';

interface Column {
  id: 'c_name' | 'c_age' | 'c_type' | 'c_phone' | 'c_lastappointment' | 'c_nextappointment' | 'action';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'c_name', label: 'Name', minWidth: 170 },
  { id: 'c_age', label: 'Age', minWidth: 50 },
  {
    id: 'c_type',
    label: 'Type Client',
    minWidth: 110,
  },
  {
    id: 'c_phone',
    label: 'Phone',
    minWidth: 100,
  },
  {
    id: 'c_lastappointment',
    label: 'Last Appointment',
    minWidth: 120,
  },
  {
    id: 'c_nextappointment',
    label: 'Next Appointment',
    minWidth: 120,
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 70,
  },
];


const StickyHeadTable: React.FC<{ customers: any, fetchData: any, setCustomer: any, customerUpdate: any, setCustomerUpdate: any, deleteClientCurrent: any }> = ({ customers, fetchData, setCustomer, customerUpdate, setCustomerUpdate, deleteClientCurrent }) => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const updateCustomer = (customer: any) => {
    setCustomer(customer)
    setCustomerUpdate(true)
  }
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  useEffect(() => {
    //fetchData()
    //setDataTable()
  }, [customers])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {customers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {(() => {
                            switch (column.id) {
                              case 'c_type':
                                return value == 1 ? 'ADULT' : 'CHILD';
                              case 'c_lastappointment':
                                return value != null ? moment(value).format('D[/]MM[/]YYYY') : '---';
                              case 'c_nextappointment':
                                return value != null ? moment(value).format('D[/]MM[/]YYYY') : '---';
                              case 'action':
                                return <div className='content__icon-actions'>
                                  <DeleteIcon className='icon-delete' onClick={() => deleteClientCurrent(row.client_id)}></DeleteIcon>
                                  <EditIcon className='icon-edit'></EditIcon>
                                </div>
                              default:
                                return value;
                            }
                          })()

                          }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={customers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default StickyHeadTable