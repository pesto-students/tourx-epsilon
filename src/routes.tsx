import React from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const Landing = React.lazy(() => import("./containers/Landing/Landing"));
const DetailsPage = React.lazy(
  () => import("./containers/DetailsPage/DetailsPage")
);

const Routes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/category/9023132" component={DetailsPage} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
