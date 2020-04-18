import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import ProjectExtension from '../pages/ProjectExtension';
import ProjectSearch from '../pages/ProjectSearch';
import Tcc from '../pages/Tcc';
import ProjectById from '../pages/ProjectById';
import Login from '../pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/project-extension" component={ProjectExtension} />
        <Route path="/project-search" component={ProjectSearch} />
        <Route path="/tcc" component={Tcc} />
        <Route path="/login" component={Login} />

        <Route path="/project-By-Id/:id" component={ProjectById} />
      </Switch>
    </BrowserRouter>
  );
}
