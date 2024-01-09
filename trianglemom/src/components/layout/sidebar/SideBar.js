import './SideBar.css'
import { Link } from "react-router-dom";

function SideBarHeader() {
    return (
        <div id="sidebar-header">
            <div id="vert-line-container">
                <div id="vert-line"></div>
            </div>
            <h1>Triangle Fraternity</h1>
            <h4>Missouri Mines Chapter</h4>
        </div>
    );
}

function SideBarButtonContainer() {
    return (
        <div id="sidebar-button-container">
            <Link className="sidebar-button" to="/">Who We Are</Link>
            <Link className="sidebar-button" to="/connect">Connect With Us</Link>
            <Link className="sidebar-button" to="/events">Upcoming Events</Link>
            <Link className="sidebar-button" to="/eboard">Meet Our Executive Board</Link>
            <Link className="sidebar-button" to="/album">Explore The Gallery</Link>
        </div>
    );
}

function SideBar() {
    return (
        <div id="sidebar-container">
            <SideBarHeader/>
            <SideBarButtonContainer/>
        </div>
    );
}

export default SideBar;