import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
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
        
      </ThemeProvider>
    </>
  )
}

export default App