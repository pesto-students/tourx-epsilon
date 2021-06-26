/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import MyAccount from "./containers/MyAccount/MyAccount";
import PrivateRoute from "./Library/PrivateRoute";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import NotFoundPage from "./components/404/404Page";
import Landing from "./containers/Landing/Landing";
import { RootState } from "./redux/index.interface";
import { authenticateUser, setIsAuth } from "./redux/commonActions/auth";
import { useNetwork } from "./Library/helper";
import NetworkError from "./components/NetworkError/NetworkError";

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

  const { isAuth } = props;

  const isOnline = useNetwork();

  return (
    <React.Suspense fallback={<Loader />}>
      {isOnline ? (
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/category/9023132" component={DetailsPage} />
          <PrivateRoute
            path="/my-account"
            isAuthenticated={isAuth}
            component={MyAccount}
          />
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
          <Route component={NotFoundPage} />
        </Switch>
      ) : (
        <NetworkError />
      )}

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
