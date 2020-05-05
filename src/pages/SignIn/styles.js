import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }

    input {
      font: 400 18px Roboto, sans-serif;
      width: 100%;
      height: 60px;
      color: #333;
      border: 1px solid #dcdce6;
      border-radius: 8px;
      padding: 0 24px;

      + input {
        margin-top: 10px;
      }
    }

    button {
      width: 100%;
      height: 60px;
      background: #24b22a;
      border: 0;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      margin-top: 16px;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
      transition: filter 0.2s;
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #41414d;
      font-size: 18px;
      text-decoration: none;
      font-weight: 500;
      transition: filter 0.2s;
      &:hover {
        opacity: 0.8;
      }
      svg {
        margin-right: 8px;
      }
    }
  }
`;
export const Form = styled.div``;
