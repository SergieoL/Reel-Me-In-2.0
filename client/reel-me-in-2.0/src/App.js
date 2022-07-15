import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './Componets/Header';
import { Watchlist } from "./Componets/Watchlist";
import { Watched } from "./Componets/Watched";
import { Add } from "./Componets/Add";


import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (

  <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  ),
  <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>;
  
}

export default App;
