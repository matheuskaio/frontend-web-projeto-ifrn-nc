/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src="https://api.adorable.io/avatar/300/carai.png" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project-search">Projeto de Pesquisa</Link>
        </li>
        <li>
          <Link to="/project-extension">Projeto de Extensão</Link>
        </li>
        <li>
          <Link to="/tcc">Tcc</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
      <button to="/">Login</button>
    </Container>
  );
}
