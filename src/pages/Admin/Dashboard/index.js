import React from 'react';

import { FaLayerGroup, FaUsers, FaCommentDots } from 'react-icons/fa';
import HedaerAdmin from '../../../components/HedaerAdmin';
import { Container, Content, Cards, Card } from './styles';

export default function Dashboard() {
  return (
    <>
      <HedaerAdmin />
      <Container>
        <Content>
          <Cards>
            <Card>
              <FaLayerGroup size={50} />
              <div>
                <span>Projetos</span>
                <h3>3</h3>
              </div>
            </Card>
            <Card>
              <FaUsers size={50} />
              <div>
                <span>Orientandos</span>
                <h3>3</h3>
              </div>
            </Card>
            <Card>
              <FaCommentDots size={50} />
              <div>
                <span>Comentários</span>
                <h3>3</h3>
              </div>
            </Card>
          </Cards>
        </Content>
      </Container>
    </>
  );
}
