import './DropBar.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Collapse } from 'bootstrap';

function DropBar() {
    var [toggle, setToggle] = useState(false);

    useEffect(() => {
        const collapsibleContent = document.getElementById("collapsibleContent");
        const bsCollapse = new Collapse(collapsibleContent, {toggle:false});
        toggle ? bsCollapse.show() : bsCollapse.hide();
    });

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top m-0 p-0">
            <div className="container-fluid m-0 pb-2 pt-2" id="collapsible-navbar">
                <a className="navbar-brand" href="/">Triangle MOM</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setToggle(!toggle)}>
                    <span className="navbar-toggler-icon navbar-dark"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" onClick={() => setToggle(!toggle)}>
                            <Link className="nav-link active text-white" to="/">Who We Are</Link>
                        </li>
                        <li className="nav-item" onClick={() => setToggle(!toggle)}>
                            <Link className="nav-link active text-white" to="/connect" data>Connect With Us</Link>
                        </li>
                        <li className="nav-item" onClick={() => setToggle(!toggle)}>
                            <Link className="nav-link active text-white" to="/events">Upcoming Events</Link>
                        </li>
                        <li className="nav-item" onClick={() => setToggle(!toggle)}>
                            <Link className="nav-link active text-white" to="/eboard">Meet Our Executive Board</Link>
                        </li>
                        <li className="nav-item" onClick={() => setToggle(!toggle)}>
                            <Link className="nav-link active text-white" to="/album">Explore The Gallery</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default DropBar;