import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login.page.jsx";
import Defecation from "./pages/Defecation.page.jsx";
import Drink from "./pages/Drink.page.jsx";
import Infos from "./pages/Infos.page.jsx";
import History from "./pages/History.page.jsx";
import Urination from "./pages/Urination.page.jsx";
import Activity from "./pages/Activity.page.jsx";
import Summary from "./pages/Summary.page.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/events/summary" exact component={Summary} />
          <PrivateRoute
            path="/events/defecation"
            exact
            component={Defecation}
          />
          <PrivateRoute path="/events/drink" exact component={Drink} />
          <PrivateRoute path="/events/urination" exact component={Urination} />
          <PrivateRoute path="/events/activity" exact component={Activity} />
          <PrivateRoute path="/history" exact component={History} />
          <PrivateRoute path="/about" exact component={Infos} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
