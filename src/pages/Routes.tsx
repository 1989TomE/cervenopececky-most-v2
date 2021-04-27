import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import FruitOrchards from "./FruitOrchards/FruitOrchards";
import Home from "./Home/Home";
import Making from "./Making/Making";
import NotFound from "./NotFound/Notfound";
import OurProducts from "./OurProducts/OurProducts";
import PublicAppleJuicing from "./PublicAppleJuicing/PublicAppleJuicing";
import WantToFruitPress from "./WantToFruitPress/WantToFruitPress";
import WhereToBuy from "./WhereToBuy/WhereToBuy";
import WorkPlace from "./WorkPlace/WorkPlace";
import { Page } from "./index";

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
