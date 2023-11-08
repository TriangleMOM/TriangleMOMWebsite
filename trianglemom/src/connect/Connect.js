import './Connect.css'

function Header() {
    return (
        <div id="header">
            <h1>Connect With Us</h1>
        </div>
    );
}

function TypeOfContact() {
    return (
        <div id="toc-container">
            <button>Email</button>
            <button>Phone</button>
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