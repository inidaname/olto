import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Header } from 'components/';
import { Login } from 'pages/';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
