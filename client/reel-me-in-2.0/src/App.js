import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './Componets/Header';
import { Watchlist } from "./Componets/Watchlist";
import { Watched } from "./Componets/Watched";
import { Add } from "./Componets/Add";


import { GlobalProvider } from "./context/GlobaalState";

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
  );
}

export default App;
