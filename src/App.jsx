import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className=' bg-slate-400  h-[100vh]   '>
      <div className="container mx-auto p-4 ">
        <h1 className="text-3xl font-bold mb-4 mt-5 flex items-center justify-center">User Management</h1> 
        <UserForm
          user={editingUser}
          addUser={addUser}
          updateUser={updateUser}
          setEditingUser={setEditingUser}
        />
        <UserList
          users={users}
          setEditingUser={setEditingUser}
          deleteUser={deleteUser}
        />
      </div>
    </div>
  );
};

export default App;
