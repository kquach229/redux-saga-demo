import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import CardComponent from './CardComponent';


const UsersComponent = (props) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(()=> {
    dispatch(getUsers(
      [{
        id: 1,
        name: 'Kenny Quach',
        company: {
          name: 'Quadency',
          catchPhrase: 'Crypto Trading Platform'
        }
    }]))
  },[])

  return (
    <>
      {users.length && users.map((user)=> {
        return(
          <CardComponent key={user.id} user={user} />
        )
         
      })}
      {!users.length && <p>No users available!</p>}
    </>
  )
}

export default UsersComponent;
