import UserForm from './UserForm';
import './App.css';
import UserList from './UserList';
import { useState } from 'react';
function App() {
  const [users, setUsers] = useState([]);
  const onUserAdd = (user) => {
    setUsers([...users, user]);
    console.log(users);
 }

  return (
    <div className="App">
     <UserForm onUserAdd={onUserAdd}/>
     <hr />
     <UserList users= {users}/>
    </div>
  );
}

export default App;
