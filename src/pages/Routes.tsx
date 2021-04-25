import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Page } from "./index";
import NotFound from "./NotFound/Notfound";

const Home = React.lazy(() => import("@src/pages/Home/Home"));
const WorkPlace = React.lazy(() => import("@src/pages/WorkPlace/WorkPlace"));
const PublicAppleJuicing = React.lazy(
  () => import("@src/pages/PublicAppleJuicing/PublicAppleJuicing")
);
const Making = React.lazy(() => import("@src/pages/Making/Making"));
const FruitOrchards = React.lazy(
  () => import("@src/pages/FruitOrchards/FruitOrchards")
);
const Contact = React.lazy(() => import("@src/pages/Contact/Contact"));
const WantToFruitPress = React.lazy(
  () => import("@src/pages/WantToFruitPress/WantToFruitPress")
);
const OurProducts = React.lazy(
  () => import("@src/pages/OurProducts/OurProducts")
);
const WhereToBuy = React.lazy(() => import("@src/pages/WhereToBuy/WhereToBuy"));

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
