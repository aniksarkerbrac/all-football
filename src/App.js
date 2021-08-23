import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ClubDetails from './components/ClubDetails/ClubDetails';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/club/:clubId">
                <ClubDetails></ClubDetails>
            </Route>

            <Route path="*">
                <PageNotFound></PageNotFound>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
