import { useState } from 'react';
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
  height: '400px',
  backgroundImage: `url(${brain})`,
  backgroundSize: 'contain',
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
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <AccordionContainer sx={{fontFamily: 'Roboto'}} elevation="12" id="specialties" aria-label="EMDR and Perinatal Mood and Anxiety Disorder">
      <br />
      <br />
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6" aria-label='EMDR'>EMDR</Typography>
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
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h6" aria-label="Perinatal Mood and Anxiety Disorder">Perinatal Mood and Anxiety Disorder</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4">What is Perinatal Mood and Anxiety Disorder?</Typography>
          <Typography variant="h6">
            Perinatal Mood Disorder is not postpartum depression.  Perinatal Mood Disorder includes anxiety and depression that can happen during pregnancy and can be screened for during the pregnancy and after the baby is born. For many women seeking help and experiencing Perinatal Mood Disorder symptoms, this is not their first episode of Major Depressive Disorder (MDD), depression, anxiety, bipolar or psychosis.  But for many new parents it may be the first time that these disorders are being recognized or treated.
          </Typography>
          <br/>
          <Typography variant="h6">
            The majority of women experience some kind of “baby blues” (yes that is the technical term) in the first two after having a baby.  It is caused by the sudden change in hormones after delivery.  Couple that with the stress, isolation, sleep deprivation, and fatigue of new parenthood. You might feel more tearful, overwhelmed, and more emotional than normal Generally, this will start within the first couple of days after delivery, peak around one week, and taper off by the end of the second week postpartum.  It is common for women who are feeling really terrible to wait the two-week period before seeking help because they believe it will pass.  If you are experiencing any of these symptoms within the first two weeks seek help immediately, you may have postpartum depression and should not have to wait two weeks to be screened. </Typography>
          <br/>
          <Typography variant="h6">
            <ul style={{textAlign: 'left'}}>
              <li>You might find your anxiety out of control</li>
              <li>You are not able to sleep because of your anxiety—even when your baby is asleep.</li>
              <li>You might find feelings of guilt or worthlessness overwhelming or begin to develop thoughts preoccupied with death or even wish you were not alive.</li>
              <li>Thoughts of hurting the baby</li>
            </ul>
          </Typography>
          <br/>
          <Typography variant="h6">
            Postpartum depression (PPD) is different from Perinatal Mood Disorder (PMD) because it only affects women after giving birth. With postpartum depression, feelings of sadness, loneliness, worthlessness, restlessness, and anxiety last much longer than a few weeks.
          </Typography>
          <Typography variant="h6">
            <ul style={{textAlign: 'left'}}>
              <li>Feeling sad or down often.</li>
              <li>Frequent crying or tearfulness.</li>
              <li>Feeling restless, irritable, or anxious.</li>
              <li>Loss of interest or pleasure in life.</li>
              <li>Loss of appetite.</li>
              <li>Less energy and motivation to do things.</li>
              <li>Difficulty sleeping, including trouble falling asleep, trouble staying asleep, or sleeping more than usual.</li>
              <li>Feeling worthless, hopeless, or guilty.</li>
              <li>Unexplained weight loss or gain.</li>
              <li>Feeling like life isn't worth living.</li>
              <li>Showing little interest in your baby.</li>
            </ul>
          </Typography>
          <br/>
          <Typography variant="h6">
            Having a few symptoms of postpartum depression may mean it’s a good idea to talk to a therapist or social worker, especially if symptoms affect day-to-day life or cause lasting distress If you are experiencing symptoms during pregnancy or after the birth of your baby it is important that you let your healthcare provider know how you are feeling.  It’s important to seek help. Treatment options can include therapy, support groups, family and/or relationship counseling, and in some cases, antidepressants. Perinatal Mood Disorder and Postpartum depression are treatable, and most people feel better soon after beginning treatment.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
}