import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import './config/ReactotronConfig';

import Routes from './routes';

import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
      </Provider>
    </>
  );
}

export default App;
