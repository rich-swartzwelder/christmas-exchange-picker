import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Navbar from "./components/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MemberList from "./components/MemberList";

function App() {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .onSnapshot(snapshot => {
        const users = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setUsers(users);
      });

    return () => unsubscribe();
  }, []);

  const addNewMember = () => {
    const db = firebase.firestore();
    const ref = db.collection("users").doc();
    db.collection("users").add({ firstName: newUserName, id: ref.id });
    const resetForm = () => {
      setNewUserName("");
    };
    resetForm();
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNewMember();
  };

  const deleteMember = id => {
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .delete();
  };

  return (
    <div className="App">
      <CssBaseline></CssBaseline>
      <Navbar />
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <TextField
                label="New member"
                value={newUserName}
                onChange={e => setNewUserName(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={addNewMember}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* <ul>
          {users.map(user => (
            <li key={user.firstName}>
              {user.firstName}
              <button onClick={() => deleteMember(user.id)}>X</button>
            </li>
          ))}
        </ul> */}
        <MemberList members={users} onDelete={deleteMember} />
      </Container>
    </div>
  );
}

export default App;
