import Connect from './pages/connect/Connect.js';
import Album from './pages/album/Album.js';
import Eboard from './pages/eboard/Eboard.js';
import Home from './pages/home/Home.js'
import Events from './pages/events/Events.js';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css'

import Layout from "./components/layout/Layout";

// const WIDTH_THRESHOLD = 1000;

function App() {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // const narrowLayout = windowWidth < WIDTH_THRESHOLD;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="connect" element={<Connect />} />
          <Route path="events" element={<Events />} />
          <Route path="eboard" element={<Eboard />} />
          <Route path="album" element={<Album />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{/* <div id="body">
        {narrowLayout && <Navbar activePage={activePage} handleActivePageChange={handleActivePageChange} />}
        {!narrowLayout && <SideBar activePage={activePage} handleActivePageChange={handleActivePageChange} />}
        <div id="content-container">
          {activePage === 'home' && <Home />}
          {activePage === 'connect' && <Connect />}
          {activePage === 'events' && <Events />}
          {activePage === 'eboard' && <Eboard />}
          {activePage === 'album' && <Album />}
        </div>
      </div> */}