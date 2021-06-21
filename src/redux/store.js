// Import general redux related elements
import { createStore, compose, applyMiddleware } from 'redux';

// Import the root reducer
import rootReducer from './reducers/index';

// Import the createMiddleware element from redux saga
import createSagaMiddleware from 'redux-saga';

// Import rootSaga
import rootSaga from './sagas/index';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Redux Store
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);

// Run the saga middleware and pass in rootsaga
sagaMiddleware.run(rootSaga);

// Export the store
export default store;