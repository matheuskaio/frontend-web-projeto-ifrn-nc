import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import api from '../../service/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Projects } from './styles';

export default function Tcc() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('/projects-type/TCC');

      const data = response.data.map(project => ({
        id: project.id,
        title: project.nome,
        students: project.students.map(student => `${student.nome}, `),
        // students: project.students[0].nome,
        teachers: project.teachers.map(teacher => `${teacher.nome}, `),
      }));
      setProjects(data);
    }
    loadProjects();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <h2>Projetos de Pesquisa</h2>
        <Projects>
          {projects.map(data => (
            <li key={data.id}>
              <span>Title: {data.title}</span>
              <span>Orientadores: {data.teachers}</span>
              <span>Autores: {data.students}</span>
              <Link to={`/project-By-Id/${data.id}`} target="_blank">
                Mais Detalhes
              </Link>
            </li>
          ))}
        </Projects>
      </Container>
      <Footer />
    </>
  );
}

// ProjectExtension.propTypes = {
//   children: PropTypes.element.isRequired,
// };
