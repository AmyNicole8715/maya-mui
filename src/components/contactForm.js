import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Box, TextField, Paper, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const ContactUs = styled(Paper)({
    padding: "1.25rem",
    margin: "1.25rem",
    textAlign: "center",
});



export default function ContactForm() {
    const mobile = useMediaQuery('(max-width: 450px)');
    const desktop = useMediaQuery('(min-width: 450px)');
    const formRef = useRef();

    

    const sendEmail = (e) => {

        emailjs.sendForm('service_8ddysun', 'template_dmooh5q', formRef.current, 'user_CDABsZ427RrcgC3ne30u5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
    };

    return (
        <ContactUs elevation="12" id="contactus">
            <br />
            <br />
            {mobile && <Typography variant="h4" sx={{fontFamily:'Nova Round'}}>Contact Us</Typography>}
            {desktop && <Typography variant="h3" sx={{ fontFamily: 'Nova Round'}}>Contact Us</Typography>}
            <br />
            {mobile &&
            <Box
                aria-label="Contact Us Form"
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '16ch' },
                }}
                noValidate
                autoComplete="off"
                ref={formRef} 
                onSubmit={sendEmail}
            >
                <div>
                
                    <TextField
                        required
                        id="outlined-multiline-flexible"
                        color="secondary"
                        focused
                        label="Email"
                        type="email"
                        multiline
                        maxRows={2}
                        name="email"
                        variant="filled"
                        
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-multiline-flexible"
                        color="secondary"
                        focused
                        label="Enter your Full Name"
                        multiline
                        maxRows={2}
                        name="fullName"
                        variant="filled"
                        
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        color="secondary"
                        focused
                        label="Subject"
                        multiline
                        maxRows={2}
                        variant="filled"
                        name="subject"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-multiline-flexible"
                        color="secondary"
                        focused
                        label="Message"
                        multiline
                        maxRows={7}
                        variant="filled"
                        name="message"
                    />
                </div>
                <Button
                    color="secondary" 
                    variant="contained" 
                    type="submit"
                    label="Submit"
                    sx={{
                        height: "50px",
                        width: "10vw",
                    }}   
                >Submit</Button>
            </Box>}
            {desktop &&
            <Box
                aria-label="Contact Us Form"
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                }}
                noValidate
                autoComplete="off"
                ref={formRef} 
                onSubmit={sendEmail}
            >
                <div>
                
                    <TextField
                        required
                        id="outlined-multiline-flexible"
                        color="secondary"
                        focused
                        label="Email"
                        type="email"
                        multiline
                        maxRows={2}
                        name="email"
                        variant="filled"
                        
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-multiline-flexible"
                        color="secondary"
                        focused
                        label="Enter your Full Name"
                        multiline
                        maxRows={2}
                        name="fullName"
                        variant="filled"
                        
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        color="secondary"
                        focused
                        label="Subject"
                        multiline
                        maxRows={2}
                        variant="filled"
                        name="subject"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-multiline-flexible"
                        color="secondary"
                        focused
                        label="Message"
                        multiline
                        maxRows={7}
                        variant="filled"
                        name="message"
                    />
                </div>
                <Button
                    color="secondary" 
                    variant="contained" 
                    type="submit"
                    label="Submit"
                    sx={{
                        height: "50px",
                        width: "30vw",
                    }}   
                >Submit</Button>
            </Box>}
        </ContactUs>
    );


}