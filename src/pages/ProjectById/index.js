import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../service/api';

import { Container, Title, Topicos } from './styles';

export default function ProjectById() {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function loadProject() {
      const response = await api.get(`/projects/${id}`);
      setProject(response.data);
    }
    loadProject();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>{project.nome}</Title>
        <Topicos>Resumo</Topicos>
        <p>{project.resumo}</p>
        <Topicos>Introdução</Topicos>
        <p>{project.introducao}</p>

        <Topicos>Justificativa</Topicos>
        <p>{project.justificativa}</p>

        <Topicos>Fundamentação Teórica</Topicos>
        <p>{project.fundamentacao_teorica}</p>

        <Topicos>Objetivo Geral</Topicos>
        <p>{project.objetivo_geral}</p>

        <Topicos>Metodologia</Topicos>
        <p>{project.metodologia_execucao_projeto}</p>

        <Topicos>Acompanhamento</Topicos>
        <p>{project.acompanhamento_avaliacao_projeto}</p>

        <Topicos>Resultados Esperados</Topicos>
        <p>{project.resultado_esperado}</p>

        <Topicos>Resultados Alcançados</Topicos>
        <p>{project.resultado_alcancado}</p>

        <Topicos>Observações</Topicos>
        <p>{project.observacao}</p>

        <Topicos>Referências</Topicos>
        <p>{project.referencia}</p>
        <hr />
        <div
          className="fb-comments"
          data-href={`http://localhost:3000/project-By-Id/${id}`}
          data-numposts="5"
          data-width=""
        />
      </Container>
      <Footer />
    </>
  );
}

// ProjectById.propTypes = {
//   children: PropTypes.element.isRequired,
// };
