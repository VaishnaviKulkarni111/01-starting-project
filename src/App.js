import React , {useState}from 'react';
import Form from './components/InputForm/Form';
import UsersList from './components/InputForm/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <h2>  User Age Form</h2>
      <Form  onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>

    </div>
  );
}

export default App;
