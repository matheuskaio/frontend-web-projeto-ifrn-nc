/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '../store';
// Desestrutura as propriedades que o component recebe
export default function RoutesWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    // Caso tente acessar uma página privada, ele é redirecionado para essa página
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    // Caso o usuário esteja logado e tente acessar a rota para fazer login novamente
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}

RoutesWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RoutesWrapper.propTypes = {
  isPrivate: false,
};
