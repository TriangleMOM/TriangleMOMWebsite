import SideBar from './components/sidebar/Sidebar.js'
import ImportBootStrap from './components/Bootstrap.js';
import './App.css'
import Connect from './pages/connect/Connect.js';
import Gallery from './pages/gallery/Gallery.js';
import Eboard from './pages/eboard/Eboard.js';
import Home from './pages/home/Home.js'
import Events from './pages/events/Events.js';

import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState("home")

  const handleActivePageChange = (pageName) => {
    setActivePage(pageName);
  }

  return (
    <div id="body">
      <SideBar activePage={activePage} handleActivePageChange={handleActivePageChange}/>
      <div id="content-container">
        {activePage === 'home' && <Home/>}
        {activePage === 'connect' && <Connect/>}
        {activePage === 'events' && <Events/>}
        {activePage === 'eboard' && <Eboard/>}
        {activePage === 'gallery' && <Gallery/>}
      </div>
      <ImportBootStrap />
    </div>
  );
}

export default App;