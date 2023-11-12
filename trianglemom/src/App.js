import SideBar from './sidebar/Sidebar.js'
import ImportBootStrap from './Bootstrap.js';
import './App.css'
import Connect from './connect/Connect.js';
import Gallery from './gallery/Gallery.js';
import Eboard from './eboard/Eboard.js';

function App() {
  return (
    <div id="body">
      <SideBar/>
      <div id="content-container">
        {/* <Gallery/> */}
        {/* <Connect/> */}
        <Eboard/>
      </div>
      <ImportBootStrap />
    </div>
  );
}

export default App;