import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeRoutes from "./pages/Home/Routes";
import { NavigationRoute } from "./pages/index";
import NotFound from "./pages/NotFound/Notfound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={NavigationRoute.Home} component={HomeRoutes} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
