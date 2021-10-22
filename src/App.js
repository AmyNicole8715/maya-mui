import { CssBaseline, Paper } from '@mui/material';
import CustomizedAccordions from './components/accordion';
import ButtonAppBar from './components/appBar';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import MHPath from './assets/img/MHPath.jpg'

console.log(theme);
console.log(MHPath)
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div>
          <ButtonAppBar title="Maya Wellness"/>
          <div>
            <img 
              width="100%"
              src={MHPath}
              alt="On the path to better Mental Health"
            />
          </div>
          <Paper>
            <CustomizedAccordions />
          </Paper>
        </div>
      </CssBaseline>
    </ThemeProvider>
    
  );
}

export default App;
