import { styled, Typography, useTheme, Paper, Divider, Box } from "@mui/material";
import Link from '@mui/material/Link';
import tomilyn from '../assets/img/tomilyn.jpg';
import Pam from '../assets/img/Pam.jpg';
import Angela from '../assets/img/Angela.jpeg';

const MeetTheTherapists = styled(Paper)({
    padding: "20px",
    margin: "20px",
    textAlign: "center",
});

const StyledTomilyn = styled(Box)({
    padding: '0.5rem',
    margin: '0.5rem',
    maxWidth: '100%',
    height: '550px',
    backgroundImage: `url(${tomilyn})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
});

const StyledPamela = styled(Box)({
    padding: '0.5rem',
    margin: '0.5rem',
    maxWidth: '100%',
    height: '550px',
    backgroundImage: `url(${Pam})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
});

const StyledAngela = styled(Box)({
    padding: '0.5rem',
    margin: '0.5rem',
    maxWidth: '100%',
    height: '550px',
    backgroundImage: `url(${Angela})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
});



export default function TherapistBios () {
    const theme = useTheme();
    return (
        <MeetTheTherapists elevation="12" sx={{backgroundColor: theme}} id="aboutus">
            <br/>
            <br/>
            <Typography variant="h3" sx={{fontFamily:'Nova Round'}} aria-label='About Us'>About Us</Typography>
            <br />
            <Typography variant="h6">
            MAYA Organization in 2009 by Tomilyn Ward. From 2009 to 2014, MAYA operated as a volunteer-run adoption and 
            birth mother advocacy agency, with a focus on fundraising and volunteer recruitment. In these years, MAYA provided pro bono 
            counseling for birthmothers, and was able to extend financial support to several families adopting children with special needs.
            In August of 2014, MAYA Organization grew into a staffed agency focusing on two initiatives: supporting people during pregnancy and beyond. Tomilyn continued to run MAYA Organization until June 2020, when she decided it was best to focus on providing counseling services. MAYA Organization continues to serve the needs of pregnant and parenting people in Pittsburgh, Pennsylvania.
            </Typography>
            <br/>
            <Typography variant="h6">
                Tomilyn opened Maya Wellness Center in 2017 to focus exclusively on provide counseling and consulting services. Today Maya Wellness Center provides trauma informed mental health counseling in Swissvale and North Hills areas of Pittsburgh, Pennsylvania.
            </Typography>
            <br/>
            <Divider id="meetthem"/>
            <br/>
            <br/>
            <br/>
            <Typography variant="h3" sx={{fontFamily:'Nova Round'}} >Meet the Therapists</Typography>
            <br/>
            <Link variant="h4" href="https://mayawellness.doxy.me/tomilyn" aria-label='Tomilyn Ward doxy telehealth'>
                Tomilyn Ward, LPC, MPC
            </Link>
            <Typography variant="h5">
                Founder & CEO
            </Typography>
            <StyledTomilyn />
            <br/>
            <Typography variant="h6" style={{ textAlign:"left" }}>
                Tomilyn has a Master in Professional Counseling Degree from Carlow University and is also a practitioner of Eye Movement 
                Desensitization and Reprocessing (EMDR). Tomilyn works with clients who have experienced traumatic births, adoption 
                ssues, PTSD, grief and loss, anxiety, incarceration, voluntary and involuntary termination of parental rights, and 
                domestic violence. Tomilyn has previously worked as a birth doula and has attended over 30 births.
                <br/>
                <br/>
                Tomilyn is dedicated to the therapeutic process and takes three times the required number of continuing education courses 
                annually. Committed to offering the most effective therapeutic techniques, Tomilyn understands that mind and body are 
                connected.   
            </Typography>
            <br/>
            <Typography variant="h6">
                <ul style={{textAlign:'left'}}>
                    <li>EMDR</li>
                    <li>Perinatal Mood and Anxiety Disorder</li>
                    <li>Depression</li>
                    <li>Anxiety Disorders</li>
                    <li>Postpartum Depression</li>
                    <li>Infant Loss</li>
                    <li>Birth Processing</li>
                    <li>Traumatic Birth</li>
                    <li>Provider Birth Processing</li>
                    <li>Parenting</li>
                    <li>Talk Therapy</li>
                </ul>
            </Typography>
            <br/>
            <Divider/>
            <br/>
            <Link variant="h4" href="https://mayawellness.doxy.me/serenityroom" aria-label='Angela Angiolieri doxy Telehealth'>
                Angela Angiolieri, MPC
            </Link>
            <Typography variant="h5">
                Associate Therapist
            </Typography>
            <StyledAngela />
            <br/>
            <Typography variant="h6" style={{ textAlign:"left" }}>
                Angela has a master’s in counseling psychology from Chatham University. Angela is also trained in EMDR. She provides holistic, individualized, and trauma-informed care. Angela believes in fostering a trusting, non-judgmental therapeutic relationship and will collaborate with you to create the most effective treatment plan for your needs.
                <br/>
                <br/>
                Angela has experience in Motivational Interviewing, Cognitive Behavioral Therapy, and Mindfulness-Based Stress Reduction. She incorporates expressive arts, mindfulness meditation, and stress reduction therapies into individual and group sessions when appropriate.   
                <br/>
                <br/>
                Angela helps individuals through various life transitions to discover new perspectives for planning or adjusting after an expected or unexpected life change. She works with clients who have want support with:
                <br/>
                <br/>
                <ul style={{ textAlign: "left" }}>
                    <li>Anxiety</li>
                    <li>College</li>
                    <li>Empty nest</li>
                    <li>Grief</li>
                    <li>Parenting</li>
                    <li>Retirement</li>
                    <li>Break-up/Divorce</li>
                    <li>Co-parenting</li>
                    <li>Estrangement</li>
                    <li>Job loss</li>
                    <li>Pregnancy</li>
                    <li>Stress Management</li>
                    <li>Career Changes</li>
                    <li>Depression</li>
                    <li>Family Conflict</li>
                    <li>Marriage</li>
                    <li>Relationships</li>
                    <li>Substance use</li>
                </ul>
            </Typography>
            <br/>
            <Divider/>
            <br/>
            <Link variant="h4" href="https://mayawellness.doxy.me/therapysolutions" aria-label='Pamela Keating doxy Telehealth'>
                Pamela Keating 
            </Link>
            <Typography variant="h5">
                Counseling Intern
            </Typography>
            <StyledPamela />
            <br/>
            <Typography variant="h6" style={{ textAlign:"left" }}>
                Pam Keating is a counseling student in the Carlow University Professional Counseling Program.  Her focus throughout her education has been in providing trauma-informed care.  As a survivor, she wishes to work with clients to provide them with counseling services that will allow others to move from seeing themselves as victims of their past to survivors in the present.
                <br/>
                <br/>
                Pam recognizes life is hard, and for those who have experienced trauma, the hardships endured can be debilitating.  These hardships can be processed and resolved through a therapeutic alliance with a skilled counselor. With focus on providing tools for affect regulation and narrative processing, clients will learn the skills necessary to move through their emotions in a safe environment and apply them in their natural environment.
                <br/>
                <br/>
                Pam seeks to help adolescents, young adults and adults who want to begin the process of healing. The sessions include compassion, support, and skill building in addressing issues related to both past and present-day hardships endured.
                <br/>
                <br/>
                Pam is skilled in working with trauma and trauma responses associated with Post Traumatic Stress Disorder (PTSD), relationship issues (interpersonal communicating), family issues (strategic family resolution), and communicating through feelings identification and expression (cognitive and dialectical). 
            </Typography>
            <br/>
        </MeetTheTherapists>
    );

}