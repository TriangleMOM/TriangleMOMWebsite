import SideBar from './components/sidebar/Sidebar.js'
import './App.css'
import Connect from './pages/connect/Connect.js';
import Album from './pages/album/Album.js';
import Eboard from './pages/eboard/Eboard.js';
import Home from './pages/home/Home.js'
import Events from './pages/events/Events.js';

import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar.js';

const WIDTH_THRESHOLD = 1000;

function App() {
  const [activePage, setActivePage] = useState("home");
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

  const narrowLayout = windowWidth < WIDTH_THRESHOLD;

  return (
    <div id="body">
      {narrowLayout && <Navbar activePage={activePage} handleActivePageChange={handleActivePageChange} />}
      {!narrowLayout && <SideBar activePage={activePage} handleActivePageChange={handleActivePageChange} />}
      <div id="content-container">
        {activePage === 'home' && <Home/>}
        {activePage === 'connect' && <Connect/>}
        {activePage === 'events' && <Events/>}
        {activePage === 'eboard' && <Eboard/>}
        {activePage === 'album' && <Album/>}
      </div>
    </div>
  );
}

export default App;