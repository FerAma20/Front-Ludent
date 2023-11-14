import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';

import 'react-phone-number-input/style.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { createClient } from '../../../services/clients.service';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const schema = yup.object().shape({
    c_name: yup.string().required('Username is required'),
    c_age: yup.string().required('Age is required'),
    c_type: yup.string().required('Type client is required'),
    c_phone: yup.string().required('Phone is required'),
    c_lastappointment: yup.date().required('Last Appointment is required'),
    c_nextappointment: yup.date().required('Next Appointment is required'),
});

type FormValues = {
    c_name: string;
    c_age: string;
    c_type: string;
    c_phone: string;
    c_lastappointment: Date;
    c_nextappointment: Date;
};

export default function ModalClient() {
    const [openA, setOpenA] = React.useState(false);
    const [openE, setOpenE] = React.useState(false);
    
    const theme = createTheme({
        palette: {
            primary: {
                main: '#84E8E5',
                light: '#84E8E5',
                dark: '#BAD034',
                contrastText: '#242105',
            },
        },
    });
    const [open, setOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });


    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        // Lógica para manejar datos después de la validación
        console.log(data);
        const postclient = await createClient(data)
        if(postclient.status == 200){
            handleClick()
            handleClose()
        }else{
            handleClickE()
        }

       
        console.log(postclient)
    };

    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    
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

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <div className="btn_primary btn-modal-client">
                    <Button className="btn-modal-client" variant="contained" onClick={handleClickOpen}>
                        Create Client
                    </Button>
                </div>

                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Create Client
                            </Typography>

                        </Toolbar>
                    </AppBar>

                    {/*Inicia Contenido del modal */}
                    <form className='container modal-client' onSubmit={handleSubmit(onSubmit)}>

                        <div className='row'>
                            <div className='col-md-6 row-input' >
                                <TextField className='textField' id="outlined-basic" label="Name" variant="outlined"  {...register('c_name')} />
                                <p className='text__error-form'>{errors.c_name?.message}</p>
                            </div>
                            <div className='col-md-6 row-input'>
                                <TextField className='textField' id="outlined-basic" label="Age" variant="outlined" type='number' {...register('c_age')} />
                                <p className='text__error-form'>{errors.c_age?.message}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 row-input' >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Type Client</InputLabel>
                                    <Select
                                        className='textField'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Type Client"
                                        {...register('c_type')}
                                    >
                                        <MenuItem value={10}>Adult</MenuItem>
                                        <MenuItem value={20}>Child</MenuItem>
                                    </Select>
                                </FormControl>
                                <p className='text__error-form'>{errors.c_type?.message}</p>
                            </div>
                            <div className='col-md-6 row-input'>
                                <TextField  className='textField' type='number' id="outlined-basic" label="Phone" variant="outlined"  {...register('c_phone')} />
                                <p className='text__error-form'>{errors.c_phone?.message}</p>
                                
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6 row-input' >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoItem >
                                        <MobileDatePicker className='textField' label="Last Appointment"  defaultValue={dayjs(new Date())} { ...register('c_lastappointment') } />
                                    </DemoItem>
                                </LocalizationProvider>
                                <p className='text__error-form'>{errors.c_lastappointment?.message}</p>
                            </div>
                            <div className='col-md-6 row-input'>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoItem >
                                        <MobileDatePicker className='textField' label="Next Appointment" defaultValue={dayjs(new Date())} {...register('c_nextappointment')} />
                                    </DemoItem>
                                </LocalizationProvider>
                                <p className='text__error-form'>{errors.c_nextappointment?.message}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="btn_primary btn-modal-client">
                                <Button className="btn-modal-client" variant="contained" type="submit" onClick={handleSubmit(onSubmit)}>
                                    save
                                </Button>
                            </div>
                        </div>
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
                    </form>
                    {/*Finaliza Contenido del modal */}

                </Dialog>
            </ThemeProvider>
        </React.Fragment>
    );
}
