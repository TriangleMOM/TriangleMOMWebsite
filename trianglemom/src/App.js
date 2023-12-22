import SideBar from './components/sidebar/Sidebar.js'
import ImportBootStrap from './components/Bootstrap.js';
import './App.css'
import Connect from './pages/connect/Connect.js';
import Gallery from './pages/gallery/Gallery.js';
import Eboard from './pages/eboard/Eboard.js';
import Home from './pages/home/Home.js'
import Events from './pages/events/Events.js';

function App() {
  return (
    <div id="body">
      <SideBar/>
      <div id="content-container">
        {/* <Gallery/> */}
        {/* <Connect/> */}
        {/* <Eboard/> */}
        {/* <Home/> */}
        <Events/>
      </div>
      <ImportBootStrap />
    </div>
  );
}

export default App;