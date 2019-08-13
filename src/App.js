import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from "react-router-dom";

import Solution1 from "./pages/Solution1"

function App() {
  return (
    <Switch>
      <Route path="/" component={Solution1} />
    </Switch>
  );
}

export default withRouter(App);
