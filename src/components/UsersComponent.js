import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import CardComponent from './CardComponent';


const UsersComponent = () => {

  // Use hook for dispatching actions in functional components
  const dispatch = useDispatch();

  // Define the state to be passed to props
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);


  useEffect(()=> {
    // Dispatch the getUsers action when component mounts
    dispatch(getUsers())
  },[])

  return (
    <>
    {users.loading && <p>Loading...</p>}
    {users.length && users.map((user)=> {
        return(
          <CardComponent key={user.id} user={user} />
        )
         
      })}
      {!users.length && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
    </>
  )
}

export default UsersComponent;
