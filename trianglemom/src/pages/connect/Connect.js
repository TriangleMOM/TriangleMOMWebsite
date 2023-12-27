import './Connect.css'
import React, { useState } from 'react';
import Header from './../../components/header/Header.js';

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
    const [phoneCountryCode, setPhoneCountryCode] = useState("+1");
    const [phoneNumber, setPhoneNumber] = useState("");

    if(toc !== 'phone') return (<></>);

    function handlePhoneCountryCodeChange(event) {
        const input = event.target.value.replace(/\D/g, '').substring(0,3);

        let formattedInput = "+" + input;

        setPhoneCountryCode(formattedInput);
    } 

    function handlePhoneNumberChange(event) {
        const input = event.target.value;

        const backspaceHit = input.length < phoneNumber.length;
        let cleansedInput;
        if(backspaceHit) {
            cleansedInput = phoneNumber.replace(/\D/g, '');
            cleansedInput = cleansedInput.substring(0, cleansedInput.length-1);
        } else {
            cleansedInput = input.replace(/\D/g, '');
        }

        const numDigits = cleansedInput.length;

        let formattedInput = "";

        if(numDigits > 0) {
            formattedInput += "(" + cleansedInput.substring(0, 3);
        }
        if(numDigits >= 3) {
             formattedInput += ") ";
        }
        if(numDigits > 3) {
            formattedInput += cleansedInput.substring(3, 6);
        }
        if(numDigits >= 6) {
            formattedInput += "-";
        }
        if(numDigits > 6) {
            formattedInput += cleansedInput.substring(6, 10);
        }


        setPhoneNumber(formattedInput);
    }

    return (
        <div class='contact-container' id='phone-form-container'>
            <input 
                type="text" 
                class="singleline-input"
                id="pcc-input"
                value={phoneCountryCode}
                onChange={handlePhoneCountryCodeChange}/>
            <input 
                type="text" 
                class="singleline-input"
                id="pn-input"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}/>
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

function NameForm() {
    return (
        <div id="name-form-container">
            <input type="text" class="singleline-input"/>
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
    const [typeContact, setTypeContact] = useState('phone');

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
            {/* <SubjectForm/> */}
            <NameForm/>
            <MessageBodyForm/>
            <SendButton/>
        </div>
    );
}

function Connect() {
    return (
        <div id='connect-container'>
            <Header>Connect With Us</Header>
            <InputForm/>
        </div>
    );
}

export default Connect;