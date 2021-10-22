import { CssBaseline, Paper } from '@mui/material';
import CustomizedAccordions from './components/accordion';
import ButtonAppBar from './components/appBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import MHPath from './assets/img/MHPath.jpg'

console.log(theme);
console.log(MHPath)
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <div>
          <ButtonAppBar title="Maya Wellness"/>
          <div>
            <img 
              width="100%"
              source={MHPath}
              alt="On the path to better Mental Health"
            />
          </div>
          <Paper>
            <CustomizedAccordions />
          </Paper>
        </div>
      </CssBaseline>
    </MuiThemeProvider>
    
  );
}

export default App;
