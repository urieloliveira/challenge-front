import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { CityWeather } from './types';

const getWeather = () => 
  api.get<CityWeather>('users/urieloliveira/repos');

export function* load() {
  try {
    const response = yield call(getWeather);

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}