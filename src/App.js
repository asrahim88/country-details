import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotMatch from './NotMatch/NotMatch';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  return (
    <Router >
      <Switch>
        <Route path = '/home'>
          <Home></Home>
        </Route>
        <Route path = '/country/:countryName'>
          <CountryDetails></CountryDetails>
        </Route>
        <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route path = '*'>
          <NotMatch></NotMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
