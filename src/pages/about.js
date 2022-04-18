import React, { useState } from "react";
import Typest from 'react-typist';
import './Styles.css';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/19854b80-beca-11ec-a9fe-f9d78fa6da59"; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };
    if (submitted) {
        return (
            <>
                <div class="end">
                    <h2>Thank you!</h2>
                    <div>I'll be in touch soon.</div>
                </div>
            </>
        );
    }

    return (

        <>
        <div class = "aboutPage">
        <div class="about" >
                <h1>Contact me</h1>
            </div>
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <div class = "formBack">
                <div>
                    <input type="text" placeholder="Your name" class = "textBox" name="name" required />
                </div>
                <div>
                    <input type="email" placeholder="Email"  class = "textBox" name="email" required />
                </div>
                <div>
                    <textarea placeholder="Your message"  class = "textArea" name="message" required />
                </div>
                <div>
                    <button type="submit" class = "message"> Send a message </button>
                </div>
            </div>
        </form>
        </div>
        </>
    );
};

export default ContactForm;