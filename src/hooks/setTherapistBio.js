import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import theme from '../theme/theme';
import { therapistBiosList } from '../components/bios';
import { TherapistContext } from '../context/therapistContext';

const StyledButtonGroup = styled(ButtonGroup)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  color: 'white',
  flexWrap: 'wrap',
});

const StyledButton = styled(Button)({
  color: 'white',
  boxShadow: '0px 0px 12px #622047',
  border: '1px solid theme.palette.primary.main',
  padding: '0.5rem',
  '&:hover': {
    backgroundColor: '#7b5692',
  },
});

export default function SetDisplayedTherapist() {
  const mobile = useMediaQuery('(max-width: 500px)');
  const desktop = useMediaQuery('(min-width: 500px)');
  
  const { therapistBio, userTherapistChange} = useContext(TherapistContext);
  
  const handleTherapistChange = (e) => {
    userTherapistChange(e.target.value);
  }


  return (
    <StyledButtonGroup
      value={therapistBio}
    >
      {Object.entries(therapistBiosList).map(([id, name]) => (
        <React.Fragment>
          {mobile && 
            <StyledButton 
              key={id} 
              value={id} 
              elevation 
              sx={{
                fontFamily:'Roboto', 
                backgroundColor: theme.palette.secondary.main, 
                width: '15ch', 
                margin: '0.5rem 0.5rem 0.5rem 0', 
                fontSize: '0.8rem'
              }} 
              onClick={handleTherapistChange}>{name}
            </StyledButton>}
          {desktop && 
            <StyledButton 
              key={id} 
              value={id} 
              elevation 
              sx={{
                fontFamily:'Roboto', 
                backgroundColor: theme.palette.secondary.main, 
                width: '25ch', 
                margin: '0.5rem 0.5rem 0.5rem 0', 
                fontSize: '1.5rem'
              }} 
              onClick={handleTherapistChange}>{name}</StyledButton>}
        </React.Fragment>
      ))}
    </StyledButtonGroup>
  );
};