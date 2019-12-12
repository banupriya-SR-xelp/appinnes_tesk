import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import Dasboard from "./component/Dasboard";
import DashBoardContainer from "./containers/DashBoardContainer";
function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route path="/" component={LoginContainer} exact />
        <Route path="/dashboard" component={DashBoardContainer} exact />
      </Switch>
    </div>
  );
}

export default App;
