import './Sidebar.css'

function SideBarButton(props) {
    return (
        <button class='sidebar-button'>{props.text}</button>
    );
}

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
            <SideBarButton text="Connect With Us"/>
            <SideBarButton text="View Upcoming Events"/>
            <SideBarButton text="Meet Our Executive Board"/>
            <SideBarButton text="Explore The Gallery"/>
            <SideBarButton text="Disover Our History"/>
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