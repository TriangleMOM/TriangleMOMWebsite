import Header from './../../components/header/Header.js';
import './Events.css';
import EventList from './Events.json';


function EventCard({ event }) {
        return(
    <div className="event-card card">
        <div className="event-date card-header">
            {event.month} {event.day}, {event.year}
        </div>
        <div className="event-details card-body">
            <p className="event-title h1">{event.name}</p>
            <p className="event-time h6">{event.time}</p>
            <p className="event-location h6">{event.address}</p>
            <p className="event-type">{event.type}</p>
        </div>
    </div>
    );
}

function ScrollableEvents() {
    let events = EventList["events"].map((e, i) => {
        return (
            <>
                <EventCard event={e} />
            </>
        );
    });

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