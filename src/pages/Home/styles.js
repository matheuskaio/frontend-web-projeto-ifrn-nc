import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 1100px;
    height: 400px;
  }

  h2 {
    margin-bottom: 15px;
  }
`;

export const Modulos = styled.ul`
  padding: 0 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const Dados = styled.div`
  /* background: #333;*/
  border-radius: 16px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 0 15px 10px 15px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  span {
    font-size: 15px;
    font-family: 'Roboto';
  }
`;

export const UltimosPoster = styled.div``;
