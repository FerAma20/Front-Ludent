import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

function BodyProfile() {
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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <>

            <ThemeProvider theme={theme}>
                <section className='head__profile'>
                    <div className='container__body-profile'>
                        <div className='body-profile__title'>
                            <h3 className='body-profile__title-text'>Basic Information</h3>
                            <hr />
                        </div>
                        <div className='row__profile'>
                            <div className='col-md-6 row-input' >
                                <TextField className='textFieldProfile' id="outlined-basic" label="First Name" variant="outlined"  {...register('c_name')} />
                                <p className='text__error-form'>{errors.c_name?.message}</p>
                            </div>
                            <div className='col-md-6 row-input'>
                                <TextField className='textFieldProfile' id="outlined-basic" label="Last Name" variant="outlined" type='number' {...register('c_age')} />
                                <p className='text__error-form'>{errors.c_age?.message}</p>
                            </div>
                        </div>
                        <div className='row__profile'>
                            <div className='col-md-6 row-input' >
                                <TextField className='textFieldProfile' id="outlined-basic" label="Email" variant="outlined"  {...register('c_name')} />
                                <p className='text__error-form'>{errors.c_name?.message}</p>
                            </div>
                            <div className='col-md-6 row-input'>
                                <TextField className='textFieldProfile' id="outlined-basic" label="Phone" variant="outlined" type='number' {...register('c_age')} />
                                <p className='text__error-form'>{errors.c_age?.message}</p>
                            </div>
                        </div>

                        <div className='row__profile'>
                            <div className='col-md-6 row-input' >
                                <TextField className='textFieldProfile' id="outlined-basic" label="Department" variant="outlined"  {...register('c_name')} />
                                <p className='text__error-form'>{errors.c_name?.message}</p>
                            </div>
                            <div className='col-md-6 row-input'>
                                <TextField className='textFieldProfile' id="outlined-basic" label="City" variant="outlined" type='number' {...register('c_age')} />
                                <p className='text__error-form'>{errors.c_age?.message}</p>
                            </div>
                        </div>

                        <div className='row__profile'>
                            <div className='col-md-6 row-input' >
                                <TextField className='textFieldProfile' id="outlined-basic" label="Address" variant="outlined"  {...register('c_name')} />
                                <p className='text__error-form'>{errors.c_name?.message}</p>
                            </div>
                            <div className='col-md-6 row-input'>
                                <TextField className='textFieldProfile' id="outlined-basic" label="Zip Code" variant="outlined" type='number' {...register('c_age')} />
                                <p className='text__error-form'>{errors.c_age?.message}</p>
                            </div>
                        </div>

                        <div className='row__profile'>
                        <div className="btn_primary btn-modal-client">
                                <Button className="btn-modal-client" variant="contained" type="submit">
                                 Save Change
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </ThemeProvider>
        </>
    )
}

export default BodyProfile