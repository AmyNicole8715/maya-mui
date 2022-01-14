import { useState, useRef } from "react";
import axios from "axios";
import { Box, TextField, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";


const ContactUs = styled(Paper)({
    padding: "20px",
    margin: "20px",
    textAlign: "center",
});



export default function ContactForm() {

    const formRef = useRef();

    

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(formRef.current.elements);
        const message = formRef.current.elements.message.value;
        const subject = formRef.current.elements.subject.value;
        const fullName = formRef.current.elements.fullName.value;
        const email = formRef.current.elements.email.value;

        const body = { message, subject, fullName, email };

        axios.post('http://localhost:8080/sendEmail', body)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
            
        
    };

    return (
        <ContactUs elevation="12" >
            <Box
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
                    elevation="12"
                    label="Submit"
                    sx={{
                        height: "50px",
                        width: "200px",
                    }}
                >Submit</Button>
            </Box>
        </ContactUs>
    );


}