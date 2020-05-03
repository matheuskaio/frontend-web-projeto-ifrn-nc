import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, Form } from './styles';
import img from '../../assets/logo1.png';

export default function Login() {
  return (
    <>
      <Container>
        <Form>
          <h1>Faça seu login</h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu e-mail"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Sua senha secreta"
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link to="/">
            <FiLogIn size={16} color="#24b22a" /> Não tenho cadastro
          </Link>
        </Form>
        <img src={img} alt="" />
      </Container>
    </>
  );
}

// ProjectById.propTypes = {
//   children: PropTypes.element.isRequired,
// };
