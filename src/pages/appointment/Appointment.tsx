import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import moment from 'moment';

import { readAllAppointment, setAppointment } from '../../services/appointment.service';
import { verifyToken } from '../../utils/sesion.utils';
import logo from '../../assets/logo.jpg'

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


type Anchor = 'right';

export default function Appointment() {
  const navigate = useNavigate();

  const [dateInput, setDateInput] = React.useState('')
  const [message, setMessage] = React.useState('');
  const [openA, setOpenA] = React.useState(false);
  const [currentAppointment, setCurrentAppointment] = useState({

    c_age: 0,
    c_lastappointment: "",
    c_name: "",
    c_nextappointment: "",
    c_phone: 0,
    c_type: 0,
    client_id: 0
  });
  const [appointments, setAppointments] = useState([]);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });



  const onSubmit = async () => {
    // Lógica para manejar datos después de la validación
    const datas = {
      client_id: currentAppointment.client_id,
      c_lastappointment: currentAppointment.c_nextappointment,
      c_nextappointment: dateInput
    }

    const result = await setAppointment(datas);

    if (result.status == 200) {
      handleClick("New appointment success!")
      setState({ ...state, ['right']: false });
      getData()

      const sss = new Date()
      setDateInput(sss.toLocaleTimeString())
    }
  };

  const handleInputChange = (event: any) => {

    setDateInput(event)
  }


  const handleClick = (msg: string) => {
    setMessage(msg)
    setOpenA(true);
  };

  const toggleDrawer = (anchor: Anchor, open: boolean, currentAppoint: any) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (open) {
        setCurrentAppointment(currentAppoint)
      }
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };



  useEffect(() => {
    const token = verifyToken()
    if (token) navigate('/');
    getData()
  }, [])


  const handleCloseA = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenA(false);
  };

  const getData = async () => {
    const data = await readAllAppointment()
    if (data.status == 200) {
      setAppointments(data.data)
    }

  }

  const list = () => (
    <Box
      sx={{ width: 325 }}
      role="presentation"
    >
      <div className='title_sidebar'>
        <img src={logo} width='90'></img>
        <h3 className='text_navbar-name'>StarBook
          <span className='text_navbar-name-span'>(Dental)</span>
        </h3>
      </div>
      <Divider />

      <div className='title-info__appointment'>
        <h4 className='text__title-info__appointment'>Appointment information</h4>
      </div>
      <Divider />

      <div className='container-info__appointment'>
        <Typography component="div" className='text_navbar-name' >
          Name
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {currentAppointment.c_name}
        </Typography>
      </div>

      <div className='container-info__appointment'>
        <Typography component="div" className='text_navbar-name' >
          Age
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {currentAppointment.c_age}
        </Typography>
      </div>

      <div className='container-info__appointment'>
        <Typography component="div" className='text_navbar-name' >
          Phone
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          +502 {currentAppointment.c_phone}
        </Typography>
      </div>

      <div className='container-info__appointment'>
        <Typography component="div" className='text_navbar-name' >
          Next Appointment
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {currentAppointment.c_nextappointment != null ? moment(currentAppointment.c_nextappointment).format('D[/]MM[/]YYYY') : '---'}
        </Typography>
      </div>
      <Divider />

      <div className='container-info__appointment' >

        <form >

          <div className="btn__new-appointment" >
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoItem >
                <MobileDatePicker label="New Appointment" defaultValue={dayjs(new Date())} onChange={handleInputChange} />
              </DemoItem>
            </LocalizationProvider>
          </div>

          <div className="btn__new-appointment" >
            <Button variant="contained" onClick={onSubmit}>New Appointment</Button>
          </div>
        </form>
      </div>

    </Box>
  );

  return (

    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <header className='header-title__appointment'>
          <h1 className="title__clients">Next Appointments</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoItem >
                <MobileDatePicker views={['month', 'year']} label="Search" defaultValue={dayjs(new Date())} onChange={handleInputChange} />
              </DemoItem>
            </LocalizationProvider>
        </header>
        <br />
        {/* End hero unit */}
        <Grid container spacing={4}>
          {appointments.map((card: any) => (
            <Grid item key={card.client_id} xs={12} sm={6} md={4}>
              <CardActionArea>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  onClick={toggleDrawer('right', true, card)}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography component="div" className='text_navbar-name' >
                      {card.c_name}
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {card.c_nextappointment != null ? moment(card.c_nextappointment).format('D[/]MM[/]YYYY') : '---'}
                    </Typography>
                  </CardContent>

                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Drawer
        anchor='right'
        open={state['right']}
        onClose={toggleDrawer('right', false, null)}
        className='drawer-infoApp'
      >
        {list()}
      </Drawer>

      <Snackbar open={openA} autoHideDuration={6000} onClose={handleCloseA}>
        <Alert onClose={handleCloseA} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}