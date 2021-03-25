/* eslint-disable import-helpers/order-imports */
import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";

// Routes builder
import DefaultRoute from "./DefaultRoute";

// Default Routes
import Home from "../pages/Default/Home";
import Game from "../pages/Default/Game";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultRoute path="/" component={Home} exact />
        <DefaultRoute path="/game" component={Game} exact />

        <DefaultRoute path="*" isPrivate component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
