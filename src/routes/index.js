import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import ProjectExtension from '../pages/ProjectExtension';
import ProjectSearch from '../pages/ProjectSearch';
import Tcc from '../pages/Tcc';
import ProjectById from '../pages/ProjectById';
import SignIn from '../pages/SignIn';

// PÁGINAS PRIVADAS

import Dashboard from '../pages/Admin/Dashboard';
import AddProject from '../pages/Admin/AddProject';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/project-extension" component={ProjectExtension} />
      <Route path="/project-search" component={ProjectSearch} />
      <Route path="/tcc" component={Tcc} />
      <Route path="/signIn" component={SignIn} />

      <Route path="/project-By-Id/:id" component={ProjectById} />

      {/* ROTAS PRIVADAS */}

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/add-projects" component={AddProject} isPrivate />
    </Switch>
  );
}
