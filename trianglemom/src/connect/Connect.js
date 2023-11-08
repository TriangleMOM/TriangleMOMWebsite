import './Connect.css'
import React, { useState } from 'react';

function Header() {
    return (
        <div id="header">
            <h1>Connect With Us</h1>
        </div>
    );
}

function TypeOfContact({ onTypeContactClick, toc }) {
    const [hovered, setHovered] = useState('none');

    const buttonWidth = (button) => {
        let width = "45%";
        if(toc === button || (hovered === button && toc === 'none')) width = "70%";
        else if(toc !== 'none' || hovered !== 'none') width = '20%';
        
        return {
            width: width
        };
    };


    return (
        <div id="toc-container">
            <button
                style={buttonWidth('email')}
                onMouseEnter={() => setHovered('email')}
                onMouseLeave={() => setHovered('none')}
                onClick={() => onTypeContactClick('email')}
                class="modern-button"
            >Email</button>
            <button
                style={buttonWidth('phone')}
                onMouseEnter={() => setHovered('phone')}
                onMouseLeave={() => setHovered('none')}
                onClick={() => onTypeContactClick('phone')}
                class="modern-button"
            >Phone</button>
        </div>
    );
}

function EmailForm({ toc }) {
    if(toc !== 'email') return (<></>);
    
    return (
        <div class='contact-container' id='email-form-container'>
            <input type="text" class="singleline-input"/>
        </div>
    );
}

function PhoneForm({ toc }) {
    if(toc !== 'phone') return (<></>);

    return (
        <div class='contact-container' id='phone-form-container'>
            <input type="text" class="singleline-input"/>
        </div>
    );
}

function SubjectForm() {
    return (
        <div id='subject-form-container'>
            <input type="text" class="singleline-input"/>
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
    const [hovered, setHovered] = useState(0);
    
    const buttonWidth = () => ({
        width: hovered === 1 ? '100%' : '40%'
    });

    return (
        <div id="send-container">
            <button class="modern-button"
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(0)}
            style={buttonWidth()}>Send</button>
        </div>
    );
}

function InputForm() {
    const [typeContact, setTypeContact] = useState('none');

    const handleTypeContactChange = (type) => {
        setTypeContact(type);
    };

    return (
        <div id='input-container'>
            <TypeOfContact 
                onTypeContactClick={handleTypeContactChange}
                toc={typeContact}/>
            <EmailForm toc={typeContact}/>
            <PhoneForm toc={typeContact}/>
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