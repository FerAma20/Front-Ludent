import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';

import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import moment from 'moment';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { readAllAppointment } from '../../services/appointment.service';

import imageBoy from '../../assets/images/clients/boy.jpg'
import imageMan from '../../assets/images/clients/man.jpg'
import AppointmentInfo from './AppointmentInfo';

import logo from '../../assets/logo.jpg'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
type Anchor = 'right';

export default function Appointment() {

  const [appointments, setAppointments] = useState([]);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });



  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
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
    getData()
  }, [])

  const getData = async () => {
    const data = await readAllAppointment()
    console.log(data)
    if (data.status == 200) {
      setAppointments(data.data)
      console.log(appointments)
    }

  }
  const list = (anchor: Anchor) => (
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
        <h3 className='label-info__appointment'>Name</h3>
        <h4 className='text-label-info__appointment'>Fernando Amado Escobar Perez</h4>
      </div>

      <div className='container-info__appointment'>
        <h3 className='label-info__appointment'>Age</h3>
        <h4 className='text-label-info__appointment'>26</h4>
      </div>

      <div className='container-info__appointment'>
        <h3 className='label-info__appointment'>Phone</h3>
        <h4 className='text-label-info__appointment'>+502 47487661</h4>
      </div>

      <div className='container-info__appointment'>
        <h3 className='label-info__appointment'>Mail</h3>
        <h4 className='text-label-info__appointment'>ferama22@gmail.com</h4>
      </div>

      <div className='container-info__appointment'>
        <h3 className='label-info__appointment'>Last Appointment</h3>
        <h4 className='text-label-info__appointment'>12/06/2023</h4>
      </div>

      <div className='container-info__appointment'>
        <h3 className='label-info__appointment'>Next Appointment</h3>
        <h4 className='text-label-info__appointment'>15/12/2023</h4>
      </div>
      <Divider />

      <div className='container-info__appointment' >

      <div className="btn__new-appointment" >
      <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoItem >
            <MobileDatePicker label="Next Appointment" defaultValue={dayjs(new Date())} />
          </DemoItem>
        </LocalizationProvider>
        </div>
        

        <div className="btn__new-appointment" >
        <Button variant="contained">New Appointment</Button>
        </div>
       
      </div>

    </Box>
  );

  return (


<>

      <Container sx={{ py: 8 }} maxWidth="md">
        <h2>Next Appointments</h2>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {appointments.map((card: any) => (
            <Grid item key={card.client_id} xs={12} sm={6} md={4}>
              <CardActionArea>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  onClick={toggleDrawer('right', true)}
                >



                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                      height: '250px'
                    }}
                    image={card.c_type == 1 ? imageMan : imageBoy}

                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" >
                      {card.c_name}
                    </Typography>
                    <Typography>
                      {card.c_nextappointment != null ? moment(card.c_nextappointment).format('D[/]MM[/]YYYY') : '---'}
                    </Typography>
                    <AppointmentInfo />
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
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>

      </>
  );
}