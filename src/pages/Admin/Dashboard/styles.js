import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0 30px;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  max-width: 920px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 10px;
`;

export const Card = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background: #333;
  border-radius: 15px;

  h3 {
    font-size: 32px;
    font-weight: bold;
  }
  div {
    text-align: right;
    display: flex;
    flex-direction: column;

    span {
      font-size: 20px;
    }
  }
`;
