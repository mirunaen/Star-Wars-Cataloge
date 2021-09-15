import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import CardPage from './components /CardPage';
import CharacterPage from './components /CharacterPage';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CardPage />
        </Route>
        <Route path="/character/:id">
          <CharacterPage />
        </Route>
      </Switch>
    </Router >

  );
}

export default App;

