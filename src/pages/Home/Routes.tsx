import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MainRoute } from "../index";
import { HomeRoute } from "./index";
import WorkPlace from "./pages/Home/Home";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import PublicAppleJuicing from "./pages/PublicAppleJuicing/PublicAppleJuicing";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HomeRoute.Home} component={Home} />
        <Route path={HomeRoute.WorkPlace} component={WorkPlace} />
        <Route
          path={HomeRoute.PublicAppleJuicing}
          component={PublicAppleJuicing}
        />
        <Route path={HomeRoute.Products} component={Products} />
      </Switch>
    </Router>
  );
};

export default Routes;
