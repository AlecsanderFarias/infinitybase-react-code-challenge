import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

//Routes builder
import DefaultRoute from './DefaultRoute';

//Default Routes
import Home from '../pages/Default/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultRoute path="/" component={Home} exact />
        

        <DefaultRoute path="*" isPrivate component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
