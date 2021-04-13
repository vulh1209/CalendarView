import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Eden from "./Eden";
import Senspa from "./Senspa";
import Legacy from "./Legacy";
import Lincoln from "./Lincoln";
import Beyond1 from "./Beyond1";
import Beyond2 from "./Beyond2";

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/senspa">
          <Senspa />
        </Route>
        <Route exact path="/legacy">
          <Legacy />
        </Route>
        <Route exact path="/lincoln">
          <Lincoln />
        </Route>
        <Route exact path="/eden">
          <Eden />
        </Route>
        <Route path="/beyond1">
          <Beyond1 />
        </Route>
        <Route path="/beyond2">
          <Beyond2 />
        </Route>
      </Switch>
    </Router>
  );
}
