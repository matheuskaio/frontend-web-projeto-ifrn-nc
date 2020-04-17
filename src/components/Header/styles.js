import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 46px;
  background: #24b22a;

  img {
    width: 88px;
    height: 34px;
    border-radius: 5px;
  }

  ul {
    display: flex;

    li {
      display: flex;
      align-items: center;

      font-size: 13px;
      color: #667580;
      font-weight: bold;

      /* Colocando o distânciamento em todos os outros, menos no primeiro */
      & + li {
        margin-left: 30px;
      }

      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }

  button {
    height: 34px;
    width: 90px;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    background: #24b22a;
    border: 2px solid #fff;

    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.8;
    }
  }
`;
