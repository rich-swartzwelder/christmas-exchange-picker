import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function App() {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState([]);
  // const [userToDelete, setUserToDelete] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const db = firebase.firestore();
      db.collection("users").onSnapshot(snapshot => {
        const users = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setUsers(users);
      });

      // const data = await db.collection("users").get();
      // setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  // end useEffect

  const addNewUser = () => {
    const db = firebase.firestore();
    const ref = db.collection("users").doc();
    db.collection("users").add({ firstName: newUserName, id: ref.id });
    const resetForm = () => {
      setNewUserName("");
    };
    resetForm();
  };

  const deleteUser = id => {
    const db = firebase.firestore();
    db.collection("users")
      .doc(id)
      .delete();
  };

  return (
    <div className="App">
      <h1>Name picker</h1>
      <input
        value={newUserName}
        onChange={e => setNewUserName(e.target.value)}
      />
      <button onClick={addNewUser}>Add</button>
      <ul>
        {users.map(user => (
          <li key={user.firstName}>
            {user.firstName}
            <button onClick={() => deleteUser(user.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
