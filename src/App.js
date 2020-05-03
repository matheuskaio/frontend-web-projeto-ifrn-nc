import React from 'react';
import GlobalStyle from './styles/global';

import './config/ReactotronConfig';

import Routes from './routes';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
