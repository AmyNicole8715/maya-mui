import { styled, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Paper } from "@mui/material";
import { fontSize } from "@mui/system";

const MeetTheTherapists = styled(Paper)({
    padding: "20px",
    margin: "20px",
    textAlign: "center",
});


export default function TherapistBios () {
    const theme = useTheme();
    return (
        <MeetTheTherapists elevation="12" sx={{backgroundColor: theme}}>
            <Typography variant="h3" sx={{fontFamily:'Nova Round'}}>About Us</Typography>
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
            <br/>
            <Typography variant="h3" sx={{fontFamily:'Nova Round'}}>Meet the Therapists</Typography>
            <br/>
            <br/>
            <Typography variant="h4">
                Tomilyn Ward, LPC, MPC
            </Typography>
            <Typography variant="h5">
                Founder & CEO
            </Typography>
            <br/>
            <Typography variant="h6">
                Tomilyn has a Master in Professional Counseling Degree from Carlow University and is also a practitioner of Eye Movement 
                Desensitization and Reprocessing (EMDR). Tomilyn works with clients who have experienced traumatic births, adoption 
                ssues, PTSD, grief and loss, anxiety, incarceration, voluntary and involuntary termination of parental rights, and 
                domestic violence. Tomilyn has previously worked as a birth doula and has attended over 30 births.
                Tomilyn is dedicated to the therapeutic process and takes three times the required number of continuing education courses 
                annually. Committed to offering the most effective therapeutic techniques, Tomilyn understands that mind and body are 
                connected.   
            </Typography>
            <br/>
            <br/>
            <Typography variant="h4">
                Angela Angiolieri, MPC
            </Typography>
            <Typography variant="h5">
                Associate Therapist
            </Typography>
            <br/>
            <Typography variant="h6">
                Angela has a master’s in professional counseling from Chatham University. She provides holistic, individualized 
                trauma-informed care.  Meeting you where you are at Angela believes in fostering a trusting, non-judgmental therapeutic 
                relationship and will collaborate with you to create the most effective treatment plan for your needs. 
                <br/>
                Angela has experience in Motivational Interviewing, Cognitive Behavioral Therapy, and Mindfulness-Bases Stress Reduction. She develops and facilitates expressive arts therapy, mindfulness and stress reduction programs and will incorporate into individual sessions when appropriate.   
                <br/>
                Angela works with clients who have experienced and need support with:
                <br/>
                <ul style={{textAlign: "left"}}>
                    <li>Anxiety</li>
                    <li>Depression</li>
                    <li>Divorce</li>
                    <li>Grief and Loss</li>
                    <li>Self-Confidence</li>
                    <li>Substance Use</li>
                </ul>
            </Typography>
        </MeetTheTherapists>
    );

}