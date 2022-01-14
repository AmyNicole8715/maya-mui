import { styled, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Paper } from "@mui/material";
import { fontSize } from "@mui/system";

const Highmark = styled('img')({
    width: '10em',
    height: '2.5em',
});

const United = styled('img')({
    width: '10em',
    height: '2.5em',
});

const Upmc = styled('img')({
    width: '10em',
    height: '2.5em',
});

const Cigna = styled('img')({
    width: '4em',
    height: '2.5em',
});

const Medicaid = styled('img')({
    width: '10em',
    height: '2.5em',
});

const InsurancesAccepted = styled(Paper)({
    padding: "20px",
    margin: "20px",
    textAlign: "center",
});


export default function Insurances () {
    const theme = useTheme();
    return (
        <InsurancesAccepted elevation="12" sx={{backgroundColor: theme}}>
            <Typography variant="h4">
                Insurances Accepted
            </Typography>
            <Typography variant="h6">
                We accept the following insurances:
            </Typography>
            <a href="https://www.highmark.com/">
                <Highmark aria-label="Highmark" src="https://www.highmark.com/content/dam/digital-marketing/en/highmark/highmarkdotcom/highmark-logo.png" />
            </a>
            <a href="https://www.uhc.com/">
                <United aria-label="United Healthcare" src="https://www.uhc.com/content/dam/uhcdotcom/website-assets/logo-blue.svg" />
            </a>
            <a href="https://upmc.com">
                <Upmc aria-label="UPMC" src="https://cdn.upmc.com/-/media/upmc/logos/upmclogosvg.svg?la=en&rev=86ad2e14e74e4583a2def08e4bd3f94b&la=en&hash=B6BC24EB232E89F9890EAB8A5434893C" />
            </a>
            <a href="https://www.cigna.com">
                <Cigna aria-label="Cigna" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Cigna_logo.svg/1200px-Cigna_logo.svg.png" />
            </a>
            <a href="https://www.dhs.pa.gov/Services/Assistance/Pages/Medical-Assistance.aspx">
                <Medicaid aria-label="Pennsylvania Medicaid" src="https://www.dhs.pa.gov/PublishingImages/DHS-logo-title.png" />
            </a>
        </InsurancesAccepted>
    );

}