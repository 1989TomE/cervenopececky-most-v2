import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About/About";
import { Page } from "./index";
import NotFound from "./NotFound/Notfound";
import Home from "@src/pages/Home/Home";
import WorkPlace from "@src/pages/WorkPlace/WorkPlace";
import Products from "@src/pages/Products/Products";
import PublicAppleJuicing from "@src/pages/PublicAppleJuicing/PublicAppleJuicing";
import FruitOrchards from "./FruitOrchards/FruitOrchards";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={Page.Home} component={Home} />

        <Route path={Page.WorkPlace} component={WorkPlace} />
        <Route path={Page.PublicAppleJuicing} component={PublicAppleJuicing} />
        <Route path={Page.Products} component={Products} />
        <Route path={Page.FruitOrchards} component={FruitOrchards} />

        <Route path={Page.About} component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
