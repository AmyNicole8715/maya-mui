import React, { useContext } from "react";
import { styled, Typography, useTheme, Paper, Divider } from "@mui/material";
import Link from '@mui/material/Link';

import SetDisplayedTherapist from "../hooks/setTherapistBio";
import { TherapistContext } from "../context/therapistContext";
import { Text } from "../context/therapistContext";


const MeetTheTherapists = styled(Paper)({
    padding: "1.25rem",
    margin: "1.25rem",
    textAlign: "center",
});

const TherapistInfo = styled(Text)({
    fontFamily: "Roboto",
    color: "secondary.main",
    margin: "0.625rem",
});

const StyledList = styled('li')({
    fontFamily: "Roboto",
    color: "black",
});

const StyledImage = styled('img')({
    padding: '0.5rem',
    margin: '0.5rem',
    maxWidth: '100%',
    height: '50vh',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
});



export default function TherapistBios () {
    const { dictionary } = useContext(TherapistContext);
    const theme = useTheme();
    return (
        <MeetTheTherapists elevation="12" sx={{backgroundColor: theme}} id="aboutus">
            <br/>
            <br/>
            <Typography variant="h3" sx={{fontFamily:'Nova Round'}}>About Us</Typography>
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
            <SetDisplayedTherapist />
            <br/>
            <Link variant="h4" href={dictionary.url} target="_blank" aria-labelledby='Doxy link'>
                <TherapistInfo id='Doxy link' tid={dictionary.name}></TherapistInfo>
            </Link>
            <Typography variant="h5">
                <TherapistInfo tid={dictionary.title}></TherapistInfo>
            </Typography>
            <StyledImage src={dictionary.image} />
            <br/>
            <Typography variant="h6" style={{ textAlign:"left" }}>
                {dictionary.body.map(paragraph => ( 
                    <React.Fragment>
                    <TherapistInfo tid={paragraph}></TherapistInfo>
                    <br/>
                    <br/> 
                    </React.Fragment>
                    ))}
            </Typography>
            <br/>
            <Typography variant="h6">
                <ul style={{textAlign:'left'}}>
                    {dictionary.specialties.map(specialty => (
                        <StyledList>{specialty}</StyledList>
                    ))}
                </ul>
            </Typography>
            <br/>
            <Divider/>
            <br/>
        </MeetTheTherapists>
    );

}