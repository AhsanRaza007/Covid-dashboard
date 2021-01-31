import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from './components/TopBar/Topbar'
import Dashboard from "./components/Dashboard/Dashboard";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Report from "./components/Report/Report";
function App() {
  return (
    <Router>  
    <div className="Wrapper" id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <Topbar />
          <Switch>
              <Route exact path="/">
                  <Dashboard />
              </Route>
              <Route exact path="/report">
                  <Report />
              </Route>
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
