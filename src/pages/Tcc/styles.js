import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  h2 {
    font-size: 35px;
    margin-top: 15px;
    text-align: center;
  }
`;

export const Projects = styled.ul`
  margin-top: 30px;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    width: 800px;
    display: flex;
    flex-direction: column;
    padding: 15px 10px;

    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    span {
      font-size: 14px;
      font-weight: bold;
      color: #333;

      & + span {
        margin-top: 8px;
      }
    }
  }
`;
