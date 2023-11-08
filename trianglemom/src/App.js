import SideBar from './sidebar/Sidebar.js'
import ImportBootStrap from './Bootstrap.js';
import './App.css'
import Connect from './connect/Connect.js';

function App() {
  return (
    <div id="body">
      <SideBar/>
      <Connect/>
      <ImportBootStrap />
    </div>
  );
}

export default App;