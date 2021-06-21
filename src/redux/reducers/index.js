import { combineReducers } from "redux";
import users from './users';

// Combine reducers. In this case, only one reducer
const rootReducer = combineReducers({
  users: users
});


export default rootReducer;