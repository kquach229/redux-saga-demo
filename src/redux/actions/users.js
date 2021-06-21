import * as type from '../types';

// Define the getUsers action
export function getUsers(users) {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: users,
  }
}