import SideBar from './components/sidebar/Sidebar.js'
import './App.css'
import Connect from './pages/connect/Connect.js';
import Gallery from './pages/gallery/Gallery.js';
import Eboard from './pages/eboard/Eboard.js';
import Home from './pages/home/Home.js'
import Events from './pages/events/Events.js';

import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar.js';

const MOBILE_WIDTH = 1000;

function App() {
  const [activePage, setActivePage] = useState("connect");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleActivePageChange = (pageName) => {
    setActivePage(pageName);
  }

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="body">
      {windowWidth < MOBILE_WIDTH && <Navbar />}
      {windowWidth >= MOBILE_WIDTH && <SideBar activePage={activePage} handleActivePageChange={handleActivePageChange} />}
      <div id="content-container">
        {/* {activePage === 'home' && <Home/>}
        {activePage === 'connect' && <Connect/>}
        {activePage === 'events' && <Events/>}
        {activePage === 'eboard' && <Eboard/>}
        {activePage === 'gallery' && <Gallery/>} */}
      </div>
    </div>
  );
}

export default App;