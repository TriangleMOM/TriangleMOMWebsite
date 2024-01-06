import './Sidebar.css'

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

function SideBarButtonContainer({ activePage, handleActivePageChange }) {
    console.log(activePage);
    return (
        <div id="sidebar-button-container">
            <button class={`sidebar-button ${activePage==='home' ? 'sidebar-button-inactive' : 'sidebar-button-active'}`} onClick={() => handleActivePageChange("home")}>Who We Are</button>
            <button class={`sidebar-button ${activePage==='connect' ? 'sidebar-button-inactive' : 'sidebar-button-active'}`} onClick={() => handleActivePageChange("connect")}>Connect With Us</button>
            <button class={`sidebar-button ${activePage==='events' ? 'sidebar-button-inactive' : 'sidebar-button-active'}`} onClick={() => handleActivePageChange("events")}>Upcoming Events</button>
            <button class={`sidebar-button ${activePage==='eboard' ? 'sidebar-button-inactive' : 'sidebar-button-active'}`} onClick={() => handleActivePageChange("eboard")}>Meet Our Executive Board</button>
            <button class={`sidebar-button ${activePage==='album' ? 'sidebar-button-inactive' : 'sidebar-button-active'}`} onClick={() => handleActivePageChange("album")}>Explore The Gallery</button>
        </div>
    );
}

function SideBar({ activePage, handleActivePageChange }) {
    return (
        <div id="sidebar-container">
            <SideBarHeader/>
            <SideBarButtonContainer activePage={activePage} handleActivePageChange={handleActivePageChange}/>
        </div>
    );
}

export default SideBar;