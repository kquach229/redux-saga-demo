// Import necessary saga elements
import { call, put, takeEvery } from "redux-saga/effects";

// Define the url to fetch the request at
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Define the function that will hold the fetch
function getApi() {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .catch((error)=> {
    throw error;
  })
}

// Fetch users
function* fetchUsers(action) {
  try {
    const users = yield call(getApi);
    yield put({
      type: 'GET_USERS_SUCCESS',
      users: users
    })
  } catch (e) {
    yield put({ 
      type: 'GET_USERS_FAILED', 
      message: e.message
  })
  }
}

// Define usersSaga
function* usersSaga() {
  yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

// Export usersSaga
export default usersSaga;