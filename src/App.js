import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import Error from "./components/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
