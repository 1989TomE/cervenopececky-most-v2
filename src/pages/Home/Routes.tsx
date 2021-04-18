import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavigationRoute } from "../index";
import WorkPlace from "./pages/Home/Home";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import PublicAppleJuicing from "./pages/PublicAppleJuicing/PublicAppleJuicing";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={NavigationRoute.Home} component={Home} />
        <Route path={NavigationRoute.WorkPlace} component={WorkPlace} />
        <Route
          path={NavigationRoute.PublicAppleJuicing}
          component={PublicAppleJuicing}
        />
        <Route path={NavigationRoute.Products} component={Products} />
      </Switch>
    </Router>
  );
};

export default Routes;
