import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';

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
  fontSize: '1.2rem',
  padding: '0.5rem',
  margin: '0.5rem',
  '&:hover': {
    backgroundColor: '#7b5692',
  },
});

export default function SetDisplayedTherapist() {
  
  const { therapistBio, userTherapistChange} = useContext(TherapistContext);
  
  const handleTherapistChange = (e) => {
    userTherapistChange(e.target.value);
  }


  return (
    <StyledButtonGroup
      value={therapistBio}
    >
      {Object.entries(therapistBiosList).map(([id, name]) => (
        <StyledButton key={id} value={id} elevation sx={{fontFamily:'Roboto', backgroundColor: theme.palette.secondary.main}} onClick={handleTherapistChange}>{name}</StyledButton>
      ))}
    </StyledButtonGroup>
  );
};