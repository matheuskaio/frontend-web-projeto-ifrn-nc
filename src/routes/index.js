import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import ProjectExtension from '../pages/ProjectExtension';
import ProjectSearch from '../pages/ProjectSearch';
import Tcc from '../pages/Tcc';
import ProjectById from '../pages/ProjectById';
import SignIn from '../pages/SignIn';

// PÁGINAS PRIVADAS

import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/project-extension" component={ProjectExtension} />
        <Route path="/project-search" component={ProjectSearch} />
        <Route path="/tcc" component={Tcc} />
        <Route path="/signIn" component={SignIn} />

        <Route path="/project-By-Id/:id" component={ProjectById} />

        {/* ROTAS PRIVADAS */}

        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
