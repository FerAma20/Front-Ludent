import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeadProfile from './HeadProfile';
import BodyProfile from './BodyProfile';

function SettingsProfile() {
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

  return (
    <>
    
    <ThemeProvider theme={theme}>
      <div className='container__profile'>
      <HeadProfile/>
        <BodyProfile/>
      </div>
        
      </ThemeProvider>
    </>
  )
}

export default SettingsProfile