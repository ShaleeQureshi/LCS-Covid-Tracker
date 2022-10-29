import React from "react";
import { Switch, Router, Route, HashRouter } from "react-router-dom";
import LandingView from "../views/landing.jsx";
import CovidStatsView from "../views/covid-stats.jsx";

function App() {
  return (
    <HashRouter basename="/LCS-Covid-Tracker/">
      <Switch>
        <Route
          path={["/", "/home", "/index", "/landing"]}
          exact
          component={LandingView}
        />
        <Route
          path={[
            "/stats",
            "/statistics",
            "/covid-stats",
            "/covid-statistics",
            "/covid",
          ]}
          exact
          component={CovidStatsView}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
