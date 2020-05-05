/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-multi-str */
import React, { useState, useEffect } from 'react';

import { Form, Input, Select } from '@rocketseat/unform';
import { Editor } from '@tinymce/tinymce-react';
import HedaerAdmin from '../../../components/HedaerAdmin';
import api from '../../../service/api';

import { Container, EditText } from './styles';

export default function AddProject() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const tipos = [
    { id: 'TCC', title: 'TCC' },
    { id: 'Projeto-De-Extensao', title: 'Projeto de Extensão' },
    { id: 'Projeto-De-Pesquisa', title: 'Projeto de Pesquisa' },
  ];
  const campis = [{ id: 'IFRN-NC', title: 'IFRN - Nova Cruz' }];
  useEffect(() => {
    async function loadStudents() {
      const response = await api.get(`/students`);
      const options = response.data.map(student => ({
        id: student.nome,
        title: student.nome,
      }));
      setStudents(options);
    }
    async function loadTeachers() {
      const response = await api.get(`/students`);
      const options = response.data.map(teacher => ({
        id: teacher.nome,
        title: teacher.nome,
      }));
      setTeachers(options);
    }

    loadStudents();
    loadTeachers();
  }, []);

  return (
    <>
      <HedaerAdmin />
      <Container>
        <h2>Cadastrar Projeto</h2>
        <Form>
          <Input name="titulo" placeholder="Titulo" />
          <Select
            name="student"
            label="Alunos"
            placeholder="Selecione"
            options={students}
          />
          <Select
            name="teacher"
            label="Professores"
            placeholder="Selecione"
            options={teachers}
          />
          <Select
            name="tipo"
            label="Tipo"
            placeholder="Selecione"
            options={tipos}
          />
          <Select
            name="campus"
            label="Campus"
            placeholder="Selecione"
            options={campis}
          />

          <EditText>
            <label>Resumo:</label>
            <Editor
              textareaName="resumo"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
              }}
            />
          </EditText>
          <EditText>
            <label>Introdução:</label>
            <Editor
              textareaName="introducao"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
              }}
            />
          </EditText>
          <EditText>
            <label>Objetivos:</label>
            <Editor
              textareaName="objetivo_geral"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
              }}
            />
          </EditText>
          <EditText>
            <label>Justificativa:</label>
            <Editor
              textareaName="justificativa"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
              }}
            />
          </EditText>
          <EditText>
            <label>Metodologia de Execução:</label>
            <Editor
              textareaName="metodologia_execucao_projeto"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
              }}
            />
          </EditText>
          <EditText>
            <label>Fundamentação Teórica:</label>
            <Editor
              textareaName="fundamentacao_teorica"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
              }}
            />
          </EditText>
          <EditText>
            <label>Avaliação de Acompanhamento:</label>
            <Editor
              textareaName="acompanhamento_avaliacao_projeto"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
              }}
            />
          </EditText>
          <EditText>
            <label>Referência:</label>
            <Editor
              textareaName="referencia"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
              }}
            />
          </EditText>
          <EditText>
            <label>Observação:</label>
            <Editor
              textareaName="observacao"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
              }}
            />
          </EditText>
          <EditText>
            <label>Resultado Esperado:</label>
            <Editor
              textareaName="resultado_esperado"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
              }}
            />
          </EditText>
          <EditText>
            <label>Resultados Alcançados:</label>
            <Editor
              textareaName="resultado_alcancado"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
              }}
            />
          </EditText>
          <EditText>
            <label>Resultados Disseminação Esperado:</label>
            <Editor
              textareaName="resultado_disseminacao_esperado"
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
              }}
            />
          </EditText>
        </Form>
      </Container>
    </>
  );
}
