import React from "react";

import { Route } from "react-router-dom";

import DefaultLayout from "../../pages/_layouts/Default";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
};

export default PrivateRoute;
