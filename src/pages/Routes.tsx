import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Page } from "./index";
import NotFound from "./NotFound/Notfound";
import Home from "@src/pages/Home/Home";
import WorkPlace from "@src/pages/WorkPlace/WorkPlace";
import Products from "@src/pages/Products/Products";
import PublicAppleJuicing from "@src/pages/PublicAppleJuicing/PublicAppleJuicing";
import FruitOrchards from "./FruitOrchards/FruitOrchards";
import EShop from "./EShop/EShop";
import Contact from "./Contact/Contact";
import WantToFruitPress from "./WantToFruitPress/WantToFruitPress";
import OurProducts from "./OurProducts/OurProducts";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={Page.Home} component={Home} />

        <Route path={Page.WorkPlace} component={WorkPlace} />
        <Route path={Page.PublicAppleJuicing} component={PublicAppleJuicing} />
        <Route path={Page.Products} component={Products} />
        <Route path={Page.FruitOrchards} component={FruitOrchards} />

        <Route path={Page.WhereToBuy} component={EShop} />
        <Route path={Page.OurProducts} component={OurProducts} />
        <Route path={Page.Contact} component={Contact} />
        <Route path={Page.WantToFruitPress} component={WantToFruitPress} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
