import { CssBaseline, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

import { TherapistProvider } from './context/therapistContext';
import CustomizedAccordions from './components/accordion';
import theme from './theme/theme';
import MWPath from './assets/img/MWPath.png';
import TherapistBios from './components/therapistBios';
import PersistentDrawerLeft from './components/appBar';
import Insurances from './components/insurances';
import ContactForm from './components/contactForm';
import MiscellaneousAccordions from './components/miscAccordion';

const StyledPaper = styled(Paper)({
  padding: '1.25rem',
  height: '100%',
  width: '100%',
  display: 'inline-block',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledImage = styled('img')({
  width: '100%',
  boxShadow: '0 0 0.75rem #000000',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <TherapistProvider>
          <StyledPaper elevation={12} sx={{ backgroundColor: theme.palette.secondary.light}}>
            <div>
              <StyledImage src={MWPath}/>
              <PersistentDrawerLeft title="Maya Wellness"/>
              <br />
              <TherapistBios id="about-us"/>
              <CustomizedAccordions />
              <br />
              <Insurances />
              <br />
              <ContactForm />
              <br />
              <br />
              <MiscellaneousAccordions />
            </div>
          </StyledPaper>
        </TherapistProvider>
      </CssBaseline>
    </ThemeProvider>
    
  );
}

export default App;
