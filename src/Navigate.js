import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Eden from "./Eden";
import App from "./App";
import Senspa from "./Senspa";
import Legacy from "./Legacy";
import Lincoln from "./Lincoln";
import Beyond1 from "./Beyond1";
import Beyond2 from "./Beyond2";


import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";


export default function BasicExample() {

  const firebaseConfig = {
    apiKey: "AIzaSyAvkHM6A2oSKpqBINqJtmgh2ULhgxLyCLI",
    authDomain: "bookingroomview.firebaseapp.com",
    projectId: "bookingroomview",
    storageBucket: "bookingroomview.appspot.com",
    messagingSenderId: "739963849967",
    appId: "1:739963849967:web:7799cd51a61d49d7575f1a",
    measurementId: "G-7765CTT0RD"
  };

  firebase.initializeApp(firebaseConfig);

  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <App />
        </Route>
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
