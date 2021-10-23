import { CssBaseline, Paper } from '@mui/material';
import CustomizedAccordions from './components/accordion';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import MWPath from './assets/img/MWPath.png';
import { styled } from '@mui/material/styles';
import TherapistBios from './components/therapistBios';
import PersistentDrawerLeft from './components/appBar';

const StyledPaper = styled(Paper)({
  padding: '20px',
  margin: '100px',
  
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

console.log(theme);
console.log(MWPath)
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <StyledPaper elevation={10} sx={{ backgroundColor: theme.palette.secondary.light}}>
          <div>
              <img 
                width="100%"
                src={MWPath}
                alt="On the path to better Mental Health"
              />
            {/* <MayaTopBar title="Maya Wellness"/> */}
            <PersistentDrawerLeft title="Maya Wellness"/>
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
