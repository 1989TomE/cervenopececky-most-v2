import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import { Page } from "./pages/index";
import NotFound from "./pages/NotFound/Notfound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={Page.Landing} component={Landing}></Route>
        <Route path={Page.Home} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
