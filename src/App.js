import { CssBaseline, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

import CustomizedAccordions from './components/accordion';
import theme from './theme/theme';
import MWPath from './assets/img/MWPath.png';
import TherapistBios from './components/therapistBios';
import PersistentDrawerLeft from './components/appBar';
import Insurances from './components/insurances';
import Contact from './components/contactUs';
import ContactForm from './components/contactForm';

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
            <TherapistBios id="about-us"/>
            <CustomizedAccordions />
            <br />
            <Insurances />
            <br />
            <ContactForm />
          </div>
        </StyledPaper>
      </CssBaseline>
    </ThemeProvider>
    
  );
}

export default App;
