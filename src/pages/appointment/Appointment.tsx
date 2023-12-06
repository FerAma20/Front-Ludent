import { useEffect, useState } from 'react';

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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Appointment() {

  const [appointments, setAppointments] = useState([]);


  useEffect( () => {
    getData()
  }, [])

  const getData = async () =>{
    const data = await readAllAppointment()
    console.log(data)
    if(data.status == 200){
      setAppointments(data.data)
      console.log(appointments)
    }
    
  }

  return (
    <ThemeProvider theme={defaultTheme}>
     
    

       
        <Container sx={{ py: 8 }} maxWidth="md">
          <h2>Next Appointments</h2>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {appointments.map((card:any) => (
              <Grid item key={card.client_id} xs={12} sm={6} md={4}>
                <CardActionArea>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                 

                    
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                      height: '250px'
                    }}
                    image={card.c_type == 1 ? imageMan :imageBoy}

                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" >
                     {card.c_name}
                    </Typography>
                    <Typography>
                      {card.c_nextappointment != null ? moment(card.c_nextappointment).format('D[/]MM[/]YYYY') : '---'}
                    </Typography>
                  </CardContent>
                  
                 
                </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Container>
     
    
    </ThemeProvider>
  );
}