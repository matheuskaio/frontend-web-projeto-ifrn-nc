import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { FiLogIn } from 'react-icons/fi';
import * as Yup from 'yup';

import { Container } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

import img from '../../assets/logo1.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatório'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Seu e-mail"
          />
          <Input
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
