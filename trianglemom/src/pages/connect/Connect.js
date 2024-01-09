import './Connect.css'
import React, { useState } from 'react';
import Header from './../../components/header/Header.js';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import emailJSKeys from "./emailjs_keys.json";
import emailjs from 'emailjs-com';

function filterPhoneCountryCode(cc) {
    const input = cc.replace(/\D/g, '').substring(0, 3);
    let formattedInput = "+" + input;
    return formattedInput;
}

function filterPhoneNumber(pnNew, pnOrig) {
    const input = pnNew;

    const backspaceHit = input.length < pnOrig.length;
    let cleansedInput;
    if (backspaceHit) {
        cleansedInput = pnOrig.replace(/\D/g, '');
        cleansedInput = cleansedInput.substring(0, cleansedInput.length - 1);
    } else {
        cleansedInput = input.replace(/\D/g, '');
    }

    const numDigits = cleansedInput.length;

    let formattedInput = "";

    if (numDigits > 0) {
        formattedInput += "(" + cleansedInput.substring(0, 3);
    }
    if (numDigits >= 3) {
        formattedInput += ") ";
    }
    if (numDigits > 3) {
        formattedInput += cleansedInput.substring(3, 6);
    }
    if (numDigits >= 6) {
        formattedInput += "-";
    }
    if (numDigits > 6) {
        formattedInput += cleansedInput.substring(6, 10);
    }


    return formattedInput;
}

function filterName(name) {
    let cleansedInput = name.replace(/[^a-zA-Z]/g, '');
    cleansedInput = cleansedInput.charAt(0).toUpperCase() + cleansedInput.slice(1);
    return cleansedInput;
}

function TypeOfContact({ toc, handleTypeContactChange }) {
    const [hovered, setHovered] = useState('none');

    const buttonWidth = (button) => {
        let width = "45%";
        if (toc === button || (hovered === button && toc === 'none')) width = "70%";
        else if (toc !== 'none' || hovered !== 'none') width = '20%';

        return {
            width: width
        };
    };


    return (
        <div id="type-of-contact-form">
            <button
                style={buttonWidth('email')}
                onMouseEnter={() => setHovered('email')}
                onMouseLeave={() => setHovered('none')}
                onClick={() => handleTypeContactChange('email')}
                className="modern-button"
            ><FaEnvelope /></button>
            <button
                style={buttonWidth('phone')}
                onMouseEnter={() => setHovered('phone')}
                onMouseLeave={() => setHovered('none')}
                onClick={() => handleTypeContactChange('phone')}
                className="modern-button"
            ><FaPhone /></button>
        </div>
    );
}

function EmailForm({ toc, email, handleEmailChange }) {
    if (toc !== 'email') return (<></>);

    return (
        <div className='contact-form' id='email-contact-form'>
            <input
                type="text"
                value={email}
                placeholder='johndoe@email.com'
                onChange={(e) => handleEmailChange(e.target.value)} />
        </div>
    );
}

function PhoneForm({ toc,
    phoneCountryCode,
    phoneNumber,
    handlePhoneCountryCodeChange,
    handlePhoneNumberChange }) {

    if (toc !== 'phone') return (<></>);

    return (
        <div className='contact-form' id='phone-contact-form'>
            <input
                type="text"
                id="phone-cc-input"
                value={phoneCountryCode}
                onChange={(e) => handlePhoneCountryCodeChange(e.target.value)} />
            <input
                type="text"
                id="phone-number-input"
                value={phoneNumber}
                placeholder='(111) 222-3333'
                onChange={(e) => handlePhoneNumberChange(e.target.value)} />
        </div>
    );
}

function NameForm({ firstName,
    lastName,
    handleFirstNameChange,
    handleLastNameChange }) {
    return (
        <div id="name-form">
            <input
                type="text"
                value={firstName}
                placeholder='First Name'
                onChange={(e) => handleFirstNameChange(e.target.value)} />
            <input
                type="text"
                value={lastName}
                placeholder='Last Name'
                onChange={(e) => handleLastNameChange(e.target.value)} />
        </div>
    );
}

function MessageBodyForm({ message, handleMessageChange }) {
    return (
        <div id='message-form'>
            <textarea
                value={message}
                onChange={(e) => handleMessageChange(e.target.value)}></textarea>
        </div>
    );
}

function SendButton({ handleSubmit }) {
    const [hovered, setHovered] = useState(0);

    const buttonWidth = () => ({
        width: hovered === 1 ? '100%' : '40%'
    });

    return (
        <div id="send-button">
            <button className="modern-button"
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(0)}
                style={buttonWidth()}
                onClick={handleSubmit}>Send</button>
        </div>
    );
}

function InputForm() {
    const [typeContact, setTypeContact] = useState('none');
    const [email, setEmail] = useState('');
    const [phoneCountryCode, setPhoneCountryCode] = useState('+1');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleTypeContactChange = (type) => { setTypeContact(type); };
    const handleEmailChange = (address) => { setEmail(address); };
    const handleMessageChange = (message) => { setMessage(message); };

    const handlePhoneCountryCodeChange = (cc) => {
        const filteredCC = filterPhoneCountryCode(cc);
        setPhoneCountryCode(filteredCC);
    };
    const handlePhoneNumberChange = (number) => {
        const filteredPhoneNumber = filterPhoneNumber(number, phoneNumber);
        setPhoneNumber(filteredPhoneNumber);
    };

    const handleFirstNameChange = (name) => {
        const filteredName = filterName(name);
        setFirstName(filteredName);
    };

    const handleLastNameChange = (name) => {
        const filteredName = filterName(name);
        setLastName(filteredName);
    };

    const resetFields = () => {
        setEmail("");
        setPhoneCountryCode("+1");
        setPhoneNumber("");
        setFirstName("");
        setLastName("");
        setMessage("");
    }

    const verifyFields = () => {
        if(typeContact == "none") {
            return false;
        }
        
        if(typeContact == "email") {
            if(!email.includes('@') || !email.includes('.') || email.length < 5) {
                return false;
            }
        } else {
            if(phoneCountryCode.length === 1 || phoneNumber.length !== 14) {
                return false;
            }
        }
        
        if(!firstName.length || !lastName.length) {
            return false;
        }

        if(!message.length) {
            return false;
        }

        return true;
    }

    const handleSubmit = () => {
        const templateParams = {
            firstName,
            lastName,
            email,
            phoneCountryCode,
            phoneNumber,
            message
        };

        if(!verifyFields()) return;

        emailjs.send(
            emailJSKeys["SERVICE_ID"],
            emailJSKeys["TEMPLATE_ID"],
            templateParams,
            emailJSKeys["USER_ID"])
            .then(response => {
                console.log('Email successfully sent!', response.status, response.text);
            }, err => {
                console.log('Failed to send email. Error:', err);
            });

        resetFields();
    }

    return (
        <div id='input-form'>
            <TypeOfContact
                toc={typeContact}
                handleTypeContactChange={handleTypeContactChange} />
            <EmailForm
                toc={typeContact}
                email={email}
                handleEmailChange={handleEmailChange} />
            <PhoneForm
                toc={typeContact}
                phoneCountryCode={phoneCountryCode}
                phoneNumber={phoneNumber}
                handlePhoneCountryCodeChange={handlePhoneCountryCodeChange}
                handlePhoneNumberChange={handlePhoneNumberChange} />
            <NameForm
                firstName={firstName}
                lastName={lastName}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange} />
            <MessageBodyForm
                message={message}
                handleMessageChange={handleMessageChange} />
            <SendButton handleSubmit={handleSubmit} />
        </div>
    );
}

function Connect() {
    return (
        <div id='connect-container'>
            <Header>Connect With Us</Header>
            <InputForm />
        </div>
    );
}

export default Connect;