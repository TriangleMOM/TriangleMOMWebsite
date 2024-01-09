import Header from './../../components/header/Header.js';
import './Events.css';

function EventCard() {
    return(
    <div className="event-card card">
        <div className="event-date card-header">
            December 12th, 2023
        </div>
        <div className="event-details card-body">
            <p className="event-title h1">Winter Break</p>
            <p className="event-time h6">Friday, 6-8pm</p>
            <p className="event-location h6">1701 Ashwood Drive, Rolla MO</p>
            <p className="event-type">Recruitment Event</p>
        </div>
    </div>
    );
}

function ScrollableEvents() {
    let events = []
    for(var i = 0; i < 20; i++) {
        events.push(<EventCard/>);
    }

    return (
        <div data-bs-spy="scroll" id="event-scroll-container">
            {events}
        </div>
    );
}

function Events() {
    return (
        <div id="event-container">
            <Header>Upcoming Events</Header>
            <ScrollableEvents/>
        </div>
    );
}

export default Events;