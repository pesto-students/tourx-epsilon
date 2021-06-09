import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

const Landing = React.lazy(() => import("./containers/Landing/Landing"));
const DetailsPage = React.lazy(
  () => import("./containers/DetailsPage/DetailsPage")
);

const Routes = () => {
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/category/9023132" component={DetailsPage} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
