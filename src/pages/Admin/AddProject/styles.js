import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    select {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
    }
  }
`;

export const EditText = styled.div`
  margin: 10px 0;

  label {
    font-size: 16px;
  }
`;
