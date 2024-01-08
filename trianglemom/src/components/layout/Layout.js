import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import DropBar from "./dropbar/DropBar";
import "./Layout.css";
import { useState, useEffect } from 'react';

const WIDTH_THRESHOLD = 1000;

function Layout() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };


    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const narrowLayout = windowWidth < WIDTH_THRESHOLD;

    return (
        <div>
            {narrowLayout && <DropBar />}
            {!narrowLayout && <SideBar />}
            <div id="layout-outlet">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;