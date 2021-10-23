import { CssBaseline, Paper } from '@mui/material';
import CustomizedAccordions from './components/accordion';
import PersistentDrawerLeft from './components/appBar';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import MWPath from './assets/img/MWPath.png';
import { styled } from '@mui/material/styles';
import TherapistBios from './components/therapistBios';

const StyledPaper = styled(Paper)`
  margin: 4vw;
`

console.log(theme);
console.log(MWPath)
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <StyledPaper elevation={10}>
          <div>
            <PersistentDrawerLeft title="Maya Wellness"/>
            <div>
              <img 
                width="100%"
                src={MWPath}
                alt="On the path to better Mental Health"
              />
            </div>
            <br />
            <TherapistBios />
            <CustomizedAccordions />
          </div>
        </StyledPaper>
      </CssBaseline>
    </ThemeProvider>
    
  );
}

export default App;
