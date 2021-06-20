import React from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const Landing = React.lazy(() => import("./containers/Landing/Landing"));
const DetailsPage = React.lazy(
  () => import("./containers/DetailsPage/DetailsPage")
);
const CategoryListing = React.lazy(
  () => import("./containers/CategoryListing/CategoryListing")
);

const Routes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/places/:place_id" component={DetailsPage} />
        <Route
          exact
          path="/category/:ct_name/:ct_id"
          component={CategoryListing}
        />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
