import SideBar from './sidebar/Sidebar.js'
import ImportBootStrap from './Bootstrap.js';
import './App.css'
import Connect from './connect/Connect.js';

function App() {
  return (
    <div id="body">
      <SideBar/>
      <div id="content-container">
        <Connect/>
      </div>
      <ImportBootStrap />
    </div>
  );
}

export default App;