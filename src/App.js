import React, { useState } from 'react';
import './App.css';

import NewUser from './components/User/NewUser/NewUser';

function App() {

  const [users, setUsers] = useState([])

  const addUserHandler = (user) => {
    console.log('APPJS', user);
    setUsers(prevUsers => {
      return [user, ...prevUsers]
    });
  };

  console.log('APPJS', users);
  return (
    <div className="App">
      <NewUser onAddUser={addUserHandler}></NewUser>
    </div>
  );
}

export default App;
