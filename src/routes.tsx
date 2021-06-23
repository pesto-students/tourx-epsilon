/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { RootState } from "./redux/index.interface";
import { authenticateUser, setIsAuth } from "./redux/commonActions/auth";

const Landing = React.lazy(() => import("./containers/Landing/Landing"));
const DetailsPage = React.lazy(
  () => import("./containers/DetailsPage/DetailsPage")
);
const CategoryListing = React.lazy(
  () => import("./containers/CategoryListing/CategoryListing")
);

const Routes = (props: any) => {
  useEffect(() => {
    const token = localStorage.getItem("AuthToken");
    if (token) {
      props.authenticateUser(token);
    } else {
      props.setIsAuth(false);
    }
  }, []);
  return (
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/places/:place_name/:place_id"
          component={DetailsPage}
        />
        <Route
          exact
          path="/category/:ct_name/:ct_id"
          component={CategoryListing}
        />
      </Switch>
      <Footer />
    </React.Suspense>
  );
};

export const mapStateToProps = (state: RootState) => ({
  isAuth: state.auth.isAuth,
  user: state.auth.token,
});

export default connect(mapStateToProps, { authenticateUser, setIsAuth })(
  Routes
);
