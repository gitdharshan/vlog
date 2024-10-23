import React from 'react';
import UserList from '../UserList';
const Users = () =>{
  const USERS = [
    {
      id: 1,
      name:'Dharshan',
       image:'https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80',
       places: 3},
        
      ];



  return  <UserList items = {USERS}/>
}
export default Users;