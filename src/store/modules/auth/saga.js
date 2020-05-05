import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../service/history';
import api from '../../../service/api';

import { signInSuccess } from './actions';

export function* singIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (user.type_user === 'Aluno') {
    console.tron.error('Usuário não é Professor');
    return;
  }

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', singIn)]);
