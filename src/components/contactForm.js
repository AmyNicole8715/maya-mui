import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Box, TextField, Paper, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


const ContactUs = styled(Paper)({
    padding: "1.25rem",
    margin: "1.25rem",
    textAlign: "center",
});



export default function ContactForm() {

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
            <Typography variant="h3" sx={{ fontFamily: 'Nova Round'}}>Contact Us</Typography>
            <br />
            <Box
                aria-label="Contact Us Form"
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
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
                        aria-label="Email"
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
                        aria-label="Full Name"
                        
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
                        aria-label="Subject"
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
                        aria-label="Message"
                    />
                </div>
                <Button
                    color="secondary" 
                    variant="contained" 
                    type="submit"
                    label="Submit"
                    sx={{
                        height: "50px",
                        width: "200px",
                    }}
                    aria-label="Submit Button"
                >Submit</Button>
            </Box>
        </ContactUs>
    );


}