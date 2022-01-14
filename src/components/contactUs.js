import { styled,  useTheme } from "@mui/material";
import { Paper } from "@mui/material";

import ButtonMailTo from "../hooks/ButtonMailTo";

const ContactUs = styled(Paper)({
    padding: "20px",
    margin: "20px",
    textAlign: "center",
});

export default function Contact () {
    const theme = useTheme();
    return (
        <ContactUs elevation="12" sx={{backgroundColor: theme}}>
            <ButtonMailTo label="Contact Us" mailto="mailto:tomilyn@mayawellness.org"/>
        </ContactUs>
    );

}