import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import brain from '../assets/img/brain.png';
import Box from '@mui/material/Box';

const StyledBrain = styled(Box)({
  padding: '0.5rem',
  margin: '0.5rem',
  maxWidth: '100%',
  height: '550px',
  backgroundImage: `url(${brain})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const AccordionContainer = styled(Paper)({
    padding: "20px",
    margin: "20px",
    textAlign: "center"
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <AccordionContainer sx={{fontFamily: 'Roboto'}} elevation="12">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6">EMDR</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant="h4">What is EMDR Therapy?</Typography>
            <br/>
            <Typography variant="h6">EMDR IS NOT TALK THERAPY! EMDR (Eye Movement Desensitization and Reprocessing) is a 
              powerful method of psychotherapy utilized in the treatment and relief of many types of psychological distress.  When an event 
              is stored in short term memory, no matter how long ago the actual event happened, it causes the symptoms associated with 
              ongoing, immediate trauma.  Chronic anxiety,poor concentration, an intensified “startle” response, and  guilt are all 
              symptoms of Post Traumatic Stress Disorder. 
            </Typography>
            <br/>
            <StyledBrain />
            <br/>
            <Typography variant="h6">            
              Although PTSD is often associated with life events, it can also result from 
              recurring memories of childhood abuse, a traumatic car accident, loss of a loved one through death or divorce, or the 
              experience of life threatening illness.  EMDR facilitates the shift of the traumatic issue from short-term to long-term 
              memory.  Clients report an instant shift toward  well being, a sense of release, a feeling of peace and acceptance, and a 
              deep appreciation for their own strength after EMDR therapy.
            </Typography>
            <br/>
            <Typography variant="h4">Is this treatment right for me?</Typography>
            <br/>
            <Typography variant="h6">EMDR is effective in decreasing anxiety and targeting negative or irrational thinking, both of which may get in the 
              way of performance. EMDR can help a person to gain confidence in their ability to perform a task or reach a goal. EMDR 
              installs positive beliefs, while simultaneously decreasing fear, anxiety, or stress. EMDR boosts confidence and helps the 
              brain to think in a healthier, more adaptive way by removing blocks (such as negative self-beliefs) and helping the person 
              to tap intothe treatment of the following:
            </Typography>
            <Typography variant="h6">
            <ul style={{textAlign: 'left'}}>
                <li>Performance Enhancement</li>
                <li>Performance Anxiety</li>
                <li>Stress Reduction</li>
                <li>Stress Inoculation</li>
                <li>Depression</li>
                <li>Anxiety Disorders</li>
                <li>Separation Issues</li>
                <li>Complicated Grief</li>
                <li>Disturbing Memories</li>
                <li>Sexual, Emotional, and/or Physical Abuse</li>
                <li>Phobias</li>
                <li>Panic Attacks</li>
                <li>Pain Disorders</li>
                <li>Addiction</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h6">Perinatal Mood and Anxiety Disorder</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography variant="h6">Depression</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography variant="h6">Anxiety Disorders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography variant="h6">Postpartum Depression</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography variant="h6">Infant Loss</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography variant="h6">Birth Processing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography variant="h6">Traumatic Birth</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography variant="h6">Provider Birth Processing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
          <Typography variant="h6">Parenting</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
          <Typography variant="h6">Talk Therapy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
}