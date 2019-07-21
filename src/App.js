import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Results from "./components/Results";
import Game from "./components/Game";
import Final from "./components/Final"
import Error from "./components/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Game} />
          {/* <Route path="/game" component={Game} /> */}
          <Route path="/results" component={Results} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
