import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Portada from '../../assets/images/background/profile-portada.jpg';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import { styled } from '@mui/material/styles';

import Perfil from '../../assets/images/fotoPerfil.jpg';

function HeadProfile() {
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
                    <div className='container__head'>
                        <div className='container__img'>
                            <img src={Portada} className='head__img' />
                        </div>
                        <div className='head__body-profile'>
                            <div className='head__profile-photo'>
                                <Stack direction="row" spacing={2}>
                                    <Avatar
                                        className='avatar__profile'
                                        alt="Fernando Escobar"
                                        src={Perfil}
                                        sx={{ width: 120, height: 120 }}
                                    />
                                    <div className='icon-addphoto'>
                                        
                                        <label htmlFor="file-input" >
                                            <div className="upload-icon">
                                                <AddAPhotoIcon fontSize='small' className='icon' />
                                            </div>
                                            <input
                                                type="file"
                                                id="file-input"
                                                style={{ display: 'none' }}
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                    </div>
                                </Stack>
                            </div>

                            <h1 className='head__body-name'>Fernando Amado Escobar Perez</h1>
                            <div className='head__profile-body-container'>

                                <div className='head__profile-properties'>
                                    <BusinessIcon fontSize='small' />
                                    <label className='head__body-properties'>Departament</label>
                                </div>

                                <div className='head__profile-properties'>
                                    <LocationOnIcon fontSize='small' />
                                    <label className='head__body-properties'>Departament</label>
                                </div>
                                <div className='head__profile-properties'>
                                    <CalendarMonthIcon fontSize='small' />
                                    <label className='head__body-properties'>Departament</label>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </ThemeProvider>
        </>
    )
}

export default HeadProfile