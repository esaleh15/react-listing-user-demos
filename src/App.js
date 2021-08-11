import React, { useState } from 'react';
import Users from './components/User/Users/Users';
import './App.css';

import NewUser from './components/User/NewUser/NewUser';

function App() {

  const [users, setUsers] = useState([])

  const addUserHandler = (user) => {
    setUsers(prevUsers => {
      return [user, ...prevUsers]
    });
  };

  return (
    <div className="App">
      <NewUser onAddUser={addUserHandler}></NewUser>
      <Users users={users}></Users>
    </div>
  );
}

export default App;
