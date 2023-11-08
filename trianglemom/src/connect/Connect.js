import './Connect.css'
import React, { useState } from 'react';

function Header() {
    return (
        <div id="header">
            <h1>Connect With Us</h1>
        </div>
    );
}

function TypeOfContact() {
    const [hovered, setHovered] = useState(0);


    const buttonStyle = (buttonNumber) => ({
        width: hovered === 0 ? '45%' : hovered === buttonNumber ? '70%' : '20%',
    });


    return (
        <div id="toc-container">
            <button
                style={buttonStyle(1)}
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(0)}
            >Email</button>
            <button
                style={buttonStyle(2)}
                onMouseEnter={() => setHovered(2)}
                onMouseLeave={() => setHovered(0)}
            >Phone</button>
        </div>
    );
}

function EmailForm() {
    return (
        <div class='contact-container' id='email-form-container'>
            <input type="text"/>
        </div>
    );
}

function PhoneForm() {
    return (
        <div>Phone Number...</div>
    );
}

function SubjectForm() {
    return (
        <div id='subject-form-container'>
            <input type="text"/>
        </div>
    );
}

function MessageBodyForm() {
    return (
        <div id='message-form-container'>
            <textarea></textarea>
        </div>
    );
}

function SendButton() {
    return (
        <div id="send-container">
            <button>Send</button>
        </div>
    );
}

function InputForm() {
    return (
        <div id='input-container'>
            <TypeOfContact/>
            <EmailForm/>
            <SubjectForm/>
            <MessageBodyForm/>
            <SendButton/>
        </div>
    );
}

function Connect() {
    return (
        <div id='connect-container'>
            <Header/>
            <InputForm/>
        </div>
    );
}

export default Connect;