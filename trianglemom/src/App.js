import Connect from './pages/connect/Connect.js';
import Album from './pages/album/Album.js';
import Eboard from './pages/eboard/Eboard.js';
import Home from './pages/home/Home.js'
import Events from './pages/events/Events.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { useEffect } from "react";

import Layout from "./components/layout/Layout";

function App() {
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
