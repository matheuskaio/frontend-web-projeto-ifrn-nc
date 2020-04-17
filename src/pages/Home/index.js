import React from 'react';
// import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Modulos, Dados, UltimosPoster } from './styles';
import logo from '../../assets/logo.png';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <img src={logo} alt="logo" />
        <h2>Modulos</h2>
        <Modulos>
          <Dados>
            <img src="" alt="" />
            <h3>Projeto de Extensão</h3>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </Dados>
          <Dados>
            <img src="" alt="" />
            <h3>Projeto de Pesquisa</h3>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </Dados>
          <Dados>
            <img src="" alt="" />
            <h3>Tcc</h3>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </Dados>
        </Modulos>
        <UltimosPoster />
      </Container>
      <Footer />
    </>
  );
}

// Home.propTypes = {
//   children: PropTypes.element.isRequired,
// };
