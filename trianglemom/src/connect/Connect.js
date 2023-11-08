function Header() {
    return (
        <h1>Connect With Us</h1>
    );
}

function TypeOfContact() {
    return (
        <div>
            <button>Email</button>
            <button>Phone</button>
        </div>
    );
}

function EmailForm() {
    return (
        <div>Input Email...</div>
    );
}

function PhoneForm() {
    return (
        <div>Phone Number...</div>
    );
}

function SubjectForm() {
    return (
        <div>Subject...</div>
    );
}

function MessageBodyForm() {
    return (
        <div>Message Body...</div>
    );
}

function SendButton() {
    return (
        <button>Send</button>
    );
}

function InputForm() {
    return (
        <div>
            <TypeOfContact/>
            <EmailForm/>
            <PhoneForm/>
            <SubjectForm/>
            <MessageBodyForm/>
            <SendButton/>
        </div>
    );
}

function Connect() {
    return (
        <>
            <Header/>
            <InputForm/>
        </>
    );
}

export default Connect;