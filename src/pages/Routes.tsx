import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Contact,
  FruitOrchards,
  Home,
  Making,
  OurProducts,
  Page,
  PublicAppleJuicing,
  WantToFruitPress,
  WhereToBuy,
  WorkPlace,
} from "./index";
import NotFound from "./NotFound/Notfound";

const Routes = () => {
  return (
    <Router>
      <React.Suspense fallback={null}>
        <Switch>
          <Route exact path={Page.Home} component={Home} />

          <Route path={Page.WorkPlace} component={WorkPlace} />
          <Route
            path={Page.PublicAppleJuicing}
            component={PublicAppleJuicing}
          />
          <Route path={Page.Making} component={Making} />
          <Route path={Page.FruitOrchards} component={FruitOrchards} />

          <Route path={Page.WhereToBuy} component={WhereToBuy} />
          <Route path={Page.OurProducts} component={OurProducts} />
          <Route path={Page.Contact} component={Contact} />
          <Route path={Page.WantToFruitPress} component={WantToFruitPress} />

          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default Routes;
