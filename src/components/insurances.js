import { styled, Typography, useTheme } from "@mui/material";
import { Paper } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import React from "react";


const Highmark = styled('img')({
    maxWidth: '10em',
    maxHeight: '4.5em',
    backgroundSize: 'contain',
});

const United = styled('img')({
    maxWidth: '10em',
    maxHeight: '3.5em',
    backgroundSize: 'contain',
});

const Upmc = styled('img')({
    maxWidth: '10em',
    maxHeight: '3.5em',
    backgroundSize: 'contain',
});

const Cigna = styled('img')({
    maxWidth: '4em',
    maxHeight: '3.5em',
    backgroundSize: 'contain',
});

const Medicaid = styled('img')({
    maxWidth: '10em',
    maxHeight: '3.5em',
    backgroundSize: 'contain',
});

const InsurancesAccepted = styled(Paper)({
    padding: "1.25rem",
    margin: "1.25rem",
    textAlign: "center",
    flexWrap: "wrap",
});


export default function Insurances () {
    const mobile = useMediaQuery('(max-width: 500px)');
    const desktop = useMediaQuery('(min-width: 500px)');
    const theme = useTheme();
    
    return (
        <InsurancesAccepted elevation="12" sx={{backgroundColor: theme}} id="insurance" aria-label='Insurances Accepted'>
            <br/>
            <br/>
            {mobile && 
                <Typography variant="h6" sx={{fontFamily:'Nova Round'}}>Insurances Accepted</Typography>}
            {desktop &&
                <Typography variant="h4">
                    Insurances Accepted
                </Typography>}
            <br/>
            <br/>
            {mobile &&
                <Typography variant="body1">
                    We accept the following insurances:
                </Typography>}
            {desktop &&
                <Typography variant="h6">
                    We accept the following insurances:
                </Typography>}
            <br/>
            {mobile &&
                <React.Fragment>
                    <a href="https://www.highmark.com/">
                        <Highmark 
                            aria-label="Highmark" 
                            src="https://www.highmark.com/content/dam/digital-marketing/en/highmark/highmarkdotcom/highmark-logo.png" 
                            style={{"maxHeight":"1.5em"}}
                        />
                    </a>
                    <br/>
                    <a href="https://www.uhc.com/">
                        <United 
                            aria-label="United Healthcare" 
                            src="https://www.uhc.com/content/dam/uhcdotcom/website-assets/logo-blue.svg" 
                            style={{"maxHeight":"2em"}}
                        />
                    </a>
                    <br/>
                    <a href="https://upmc.com">
                        <Upmc 
                            aria-label="UPMC" 
                            src="https://cdn.upmc.com/-/media/upmc/logos/upmclogosvg.svg?la=en&rev=86ad2e14e74e4583a2def08e4bd3f94b&la=en&hash=B6BC24EB232E89F9890EAB8A5434893C" 
                            style={{"maxHeight":"2em"}}
                        />
                    </a>
                    <br/>
                    <a href="https://www.cigna.com">
                        <Cigna 
                            aria-label="Cigna" 
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Cigna_logo.svg/1200px-Cigna_logo.svg.png" 
                            style={{"maxHeight":"2em"}}
                        />
                    </a>
                    <br/>
                    <a href="https://www.dhs.pa.gov/Services/Assistance/Pages/Medical-Assistance.aspx">
                        <Medicaid 
                            aria-label="Pennsylvania Medicaid" 
                            src="https://www.dhs.pa.gov/PublishingImages/DHS-logo-title.png" 
                            style={{"maxHeight":"2.5em"}}
                        />
                    </a>
                </React.Fragment>}
            {desktop &&
                <React.Fragment>
                    <a href="https://www.highmark.com/">
                        <Highmark 
                            aria-label="Highmark" 
                            src="https://www.highmark.com/content/dam/digital-marketing/en/highmark/highmarkdotcom/highmark-logo.png" 
                        />
                    </a>
                    <br/>
                    <a href="https://www.uhc.com/">
                        <United 
                            aria-label="United Healthcare" 
                            src="https://www.uhc.com/content/dam/uhcdotcom/website-assets/logo-blue.svg" 
                        />
                    </a>
                    <br/>
                    <a href="https://upmc.com">
                        <Upmc 
                            aria-label="UPMC" 
                            src="https://cdn.upmc.com/-/media/upmc/logos/upmclogosvg.svg?la=en&rev=86ad2e14e74e4583a2def08e4bd3f94b&la=en&hash=B6BC24EB232E89F9890EAB8A5434893C" 
                        />
                    </a>
                    <br/>
                    <a href="https://www.cigna.com">
                        <Cigna 
                            aria-label="Cigna" 
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Cigna_logo.svg/1200px-Cigna_logo.svg.png" 
                        />
                    </a>
                    <br/>
                    <a href="https://www.dhs.pa.gov/Services/Assistance/Pages/Medical-Assistance.aspx">
                        <Medicaid 
                            aria-label="Pennsylvania Medicaid" 
                            src="https://www.dhs.pa.gov/PublishingImages/DHS-logo-title.png" 
                        />
                    </a>
                </React.Fragment>
            }
        </InsurancesAccepted>
    );

}