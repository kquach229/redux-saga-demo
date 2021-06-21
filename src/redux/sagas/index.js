import { all } from 'redux-saga/effects';
import userSaga from './userSaga';

// Define the rootSaga
export default function* rootSaga() {
  // When we yield an array of effects, the generator is blocked until all the effects are resolved or as soon as one is rejected
  yield all([
    userSaga()
  ])
}