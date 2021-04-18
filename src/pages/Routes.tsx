import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeRoutes from "./Home/Routes";
import { MainRoute } from "./index";
import NotFound from "./NotFound/Notfound";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={MainRoute.Home} component={HomeRoutes} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
