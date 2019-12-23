import React, { useState, useEffect } from "react";
import firebase from "./firebase";
// import BrowserRouter from "react-router-dom";
import Navbar from "./components/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MemberList from "./components/MemberList";
import SignIn from "./components/SignIn";

function App() {
  const [members, setMembers] = useState([]);
  const [newMemberName, setNewMemberName] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("members")
      .onSnapshot(snapshot => {
        const members = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }));
        setMembers(members);
      });

    return () => unsubscribe();
  }, []);

  const addNewMember = () => {
    const db = firebase.firestore();
    const ref = db.collection("members").doc();
    db.collection("members").add({ firstName: newMemberName, id: ref.id });
    const resetForm = () => {
      setNewMemberName("");
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
      .collection("members")
      .doc(id)
      .delete();
  };

  return (
    <div className="App">
      <CssBaseline></CssBaseline>
      <Navbar />
      <Container maxWidth="sm">
        <Paper style={{ margin: 16, padding: 16 }}>
          <form onSubmit={handleSubmit}>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item xs={9} sm={10} style={{ paddingRight: 16 }}>
                <TextField
                  label="New member"
                  value={newMemberName}
                  onChange={e => setNewMemberName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={addNewMember}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>

        <MemberList members={members} onDelete={deleteMember} />
      </Container>
    </div>
  );
}

export default App;
