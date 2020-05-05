import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Profile, Content } from './styles';

export default function HedaerAdmin() {
  return (
    <Container>
      <Content>
        <nav>
          <img src="" alt="" />
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/add-projects">Projetos</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Professor</strong>
              <Link to="/">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatar/50/teste.png"
              alt="Matheus Kaio"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
