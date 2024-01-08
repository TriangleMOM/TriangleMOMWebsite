import './DropBar.css';
import { Link } from "react-router-dom";

function DropBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top m-0 p-0">
            <div class="container-fluid m-0 pb-2 pt-2" id="collapsible-navbar">
                <a class="navbar-brand">Triangle MOM</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleContent">
                    <span class="navbar-toggler-icon navbar-dark"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active text-white" to="/">Who We Are</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active text-white" to="/connect">Connect With Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active text-white" to="/events">Upcoming Events</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active text-white" to="/eboard">Meet Our Executive Board</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active text-white" to="/album">Explore The Gallery</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default DropBar;