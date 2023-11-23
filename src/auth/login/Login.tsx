import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import LoadingButton from '@mui/lab/LoadingButton';

import { verifyUser } from "../../services/users.service";
import {  verifyToken } from '../../utils/sesion.utils';
import logo from '../../assets/logo.png'
import { useState } from 'react';


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                StarBook Technology
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#84E8E5',
            light: '#84E8E5',
            dark: '#BAD034',
            contrastText: '#242105',
        },
    },
});

const schema = yup.object().shape({
    u_email: yup.string().required('Email is required'),
    u_password: yup.string().required('Password is required')
});

type FormValues = {
    u_email: string;
    u_password: string;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Login = () => {

    const [openA, setOpenA] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const token = verifyToken()
        console.log(token)
        if(token == false) navigate('/Dashboard');
        
    }, [])


    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log('ento')
        // Lógica para manejar datos después de la validación
        setLoading(true);
        const verify = await verifyUser(data)
        if (verify.status == 200) {
            var session = {
                tokenSession :"true"
            }

            localStorage.setItem('data_session', JSON.stringify(session));
            localStorage.setItem('token', JSON.stringify(verify.data[0].token));
            navigate('/Dashboard');
        }
        setLoading(false);
        handleClick()
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



    return (< div className="clients_container">

        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(../src/assets/images/background/login-register.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img src={logo} width='120'></img>
                        <span className='text_login'>Ludent</span>
                        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                autoFocus
                                {...register('u_email')}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register('u_password')}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <LoadingButton
                                color="primary"
                                loading={loading}
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                fullWidth
                                onClick={handleSubmit(onSubmit)}
                            >
                                <span> Sign In</span>
                            </LoadingButton>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>



        </ThemeProvider>



        <Stack spacing={2} sx={{ width: '100%' }}>

            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openA} autoHideDuration={6000} onClose={handleCloseA}>
                <Alert onClose={handleCloseA} severity="error" sx={{ width: '100%' }}>
                Incorrect email or password!
                </Alert>
            </Snackbar>
        </Stack>
    </div>

    );
};

export default Login;