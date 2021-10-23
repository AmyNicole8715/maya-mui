import { styled, Typography } from "@mui/material";

const MeetTheTherapists = styled('div')`
    
`

export default function TherapistBios () {
    
    return (
        <MeetTheTherapists>
            <Typography variant="h4">
                Tomilyn Ward, LPC, MPC
            </Typography>
            <Typography variant="h6">
                Founder & CEO
            </Typography>
            <Typography variant="subtitle1">
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
            <Typography variant="h6">
                Associate Therapist
            </Typography>
            <Typography variant="subtitle1">
                Angela has a master’s in professional counseling from Chatham University. She provides holistic, individualized 
                trauma-informed care.  Meeting you where you are at Angela believes in fostering a trusting, non-judgmental therapeutic 
                relationship and will collaborate with you to create the most effective treatment plan for your needs. 
                <br/>
                Angela has experience in Motivational Interviewing, Cognitive Behavioral Therapy, and Mindfulness-Bases Stress Reduction. She develops and facilitates expressive arts therapy, mindfulness and stress reduction programs and will incorporate into individual sessions when appropriate.   
                <br/>
                Angela works with clients who have experienced and need support with:
                <br/>
                <ul>
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