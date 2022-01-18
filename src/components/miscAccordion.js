import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

import ButtonMailTo from '../hooks/ButtonMailTo';

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

export default function MiscellaneousAccordions() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // remove: depression through talk therapy and place under Tomilyn Ward
  // add contact us page




  return (
    <AccordionContainer sx={{fontFamily: 'Roboto'}} elevation="12" id="workwithus" aria-label='Internships and Careers'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6" aria-label='Internships'>Internships</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant="h4">Counseling Intern</Typography>
            <br/>
            <Typography variant="h6" style={{ textAlign:'left' }}>
                Maya Wellness Center provides therapeutic support to the greater Pittsburgh Community. Our practice is diverse and provides therapy to individuals addressing a wide range of issues including trauma, grief and loss, depression, anxiety, relationships, spirituality, gender identity, and more. 
                <br/>     
                <br/>      
                Master’s level social work and professional counseling students who join our organization are provided the opportunity to grow professionally through great clinical opportunities. The intern counselor's job responsibilities include direct client contact, clinical intake and assessment, public relations, and other administrative tasks. Clinical supervision and training are provided on a regular weekly basis. Intern students are provided with many clinical opportunities in a growing counseling practice.
                <br/>
                <br/>
                The counseling intern positions offers college credit in masters level practicum and internship classes in counseling, social work, marriage and family therapy, or psychology. These positions are highly competitive as we receive a high volume of resumes. If you are interested in completing a combined practicum and internship in 3 semesters (this is our standard training program structure) please submit a cover letter and resume.
                <br/>
                <br/>
                In your cover letter include the following:  indicate the academic term in which you need to initiate your program, summarize your clinical experience, outline your schedule of availability to complete internship hours given your academic and work commitments. Practicum requires 10 hours per week, Internship requires 20 hours per week. Interested applicants must submit a resume with a cover letter. Applicants must be enrolled in a 60-credit counseling, social work, or psychology masters-level program.
            </Typography>
            <br/>
            <br/>
            <Typography variant="h4">
                If you are looking to share your internship experience with a group of like-minded, trauma-informed clinicians please send your resume/CV to 
                <ButtonMailTo label="tomilyn@mayawellness.org" mailto="mailto:tomilyn@mayawellness.org"/>
            </Typography>
            <br/>
            <Typography variant="h5">
                LGBTQIA+ competent, couples/family therapy interns, and adolescent experience preferred.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h6" aria-label='Careers'>Careers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4">
            Part-Time
            <br/>
            Telehealth
            <br/>
            Postiions Available
          </Typography>
            <br/>
          <Typography variant="h6" style={{ textAlign:'left' }}>
            Maya Wellness Center provides therapeutic support to the greater Pittsburgh Community.  Our practice is diverse and therapy to individuals addressing a wide range of issues including trauma, grief and loss, depression, anxiety, relationships, spirituality, gender identity, and more. Maya Wellness Center has open positions for full & part-time Licensed Professional Counselors, Licensed Clinical Social Workers, Licensed Marriage and Family Therapists, and Psychologists in our Pittsburgh Office with telehealth contract options.  As an Independent Contractor, you make your own hours and will be reimbursed a contracted percentage of the fees collected. Individual percentage agreements depend upon experience, specialization, and credentialing status with the major insurance companies.
            <br/>
            This is a great opportunity if you are newly licensed. Referrals come from internal and external networking sources, as well as from your own Psychology Today page.  Weekly Supervision is offered and provides an environment for peer-to-peer consultation. 
          </Typography>
          <br/>
          <Typography variant="h4"> 
            If you are looking to join a group of like-minded, trauma-informed clinicians, please send your resume/CV to 
            <ButtonMailTo label="tomilyn@mayawellness.org" mailto="mailto:tomilyn@mayawellness.org"/>
          </Typography>
            <br/>
            <br/>
          <Typography variant="h5">
            EMDR, LGBTQTIA+ competent, couples/family therapists, and child/adolescent experience preferred.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
}