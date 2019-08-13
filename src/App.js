import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from "react-router-dom";

import Solution1 from "./pages/Solution1"
import Solution2 from "./pages/Solution2"
import Solution3 from "./pages/Solution3"

function App() {
  return (
    <Switch>
      <Route exact path="/solution-1" component={Solution1} />
      <Route exact path="/solution-2" component={Solution2} />
      <Route exact path="/solution-3" component={Solution3} />
      <Route path="/" component={Solution1} />
    </Switch>
  );
}

export default withRouter(App);
