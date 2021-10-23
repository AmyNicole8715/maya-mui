import { createTheme } from "@mui/material";
import "@fontsource/nova-round";
import "@fontsource/roboto"


const theme = createTheme({
    palette: {
        primary: {
          light: '#a35884',
          main: '#8d2f66',
          dark: '#622047',
          background: '#ce87b1',
          contrastText: '#fff',
        },
        secondary: {
          light: '#7b5692',
          main: '#5b2c77',
          dark: '#3f1e53',
          contrastText: '#fff',
        },
        background: {
          default: '#5b2c77',
        }
      },
    typography: {
        fontFamily: ['Roboto',
        'Nova Round'
        ].join(',')
      }
    }
  
);
export default theme
