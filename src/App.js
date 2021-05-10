import React from "react";
import Navbar from './Navbar';
import Home from './Home';
import About from "./About";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Fifth Flow TV">
          <Navbar />
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
