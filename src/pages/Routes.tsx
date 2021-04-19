import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About/About";
import HomeRoutes from "./Home/Routes";
import { MainRoute } from "./index";
import NotFound from "./NotFound/Notfound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={MainRoute.Home} component={HomeRoutes} />
        <Route exact path={MainRoute.About} component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
