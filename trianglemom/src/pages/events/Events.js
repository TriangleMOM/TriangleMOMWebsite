import Header from './../../components/header/Header.js';
import './Events.css';

function EventCard() {
    return(
    <div class="event-card card">
        <div class="event-date card-header">
            December 12th, 2023
        </div>
        <div class="event-details card-body">
            <p class="event-title h1">Winter Break</p>
            <p class="event-time h6">Friday, 6-8pm</p>
            <p class="event-location h6">1701 Ashwood Drive, Rolla MO</p>
            <p class="event-type">Recruitment Event</p>
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
            <Header>Upcoming Events.</Header>
            <ScrollableEvents/>
        </div>
    );
}

export default Events;