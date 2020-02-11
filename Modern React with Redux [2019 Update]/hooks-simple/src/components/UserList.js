import React from 'react';
import useResources from './useResources';

const UserList = () => {
    const users = useResources('users');
    
    return <ul>{users.map(item => <li key={item.id}>{item.name}</li>)}</ul>
}

export default UserList;