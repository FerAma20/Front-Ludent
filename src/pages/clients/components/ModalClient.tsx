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
import {  DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalClient() {
    const [age, setAge] = React.useState('');
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


    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>

                    {/*Inicia Contenido del modal */}
                    <div className='container modal-client'>

                        <div className='row'>
                            <div className='col-md-6' ><TextField className='textField' id="outlined-basic" label="Name" variant="outlined" /></div>
                            <div className='col-md-6'><TextField className='textField' id="outlined-basic" label="Age" variant="outlined" type='number' /></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6' >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Type Client</InputLabel>
                                    <Select
                                        className='textField'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Type Client"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-md-6'><TextField className='textField' type='number' id="outlined-basic" label="Phone" variant="outlined" /></div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6' >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                     <DemoItem >
                                            <MobileDatePicker className='textField' label="Last Appointment" defaultValue={dayjs('2022-04-17')} />
                                        </DemoItem>
                                </LocalizationProvider>
                            </div>
                            <div className='col-md-6'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                     <DemoItem >
                                            <MobileDatePicker className='textField' label="Next Appointment" defaultValue={dayjs('2022-04-17')} />
                                        </DemoItem>
                                </LocalizationProvider>
                            </div>
                        </div>




                    </div>

                    {/*Finaliza Contenido del modal */}
                </Dialog>
            </ThemeProvider>
        </React.Fragment>
    );
}
