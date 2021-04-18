import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/Home/components/Landing";
import Home from "./pages/Home/Home";
import { NavigationRoute } from "./pages/index";
import NotFound from "./pages/NotFound/Notfound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={NavigationRoute.Home} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
