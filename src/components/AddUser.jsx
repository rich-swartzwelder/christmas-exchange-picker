import React from "react";
import firebase from "../firebase";

const AddUser = () => {
  const handleNewUser = () => {
    const db = firebase.firestore();
    db.collection("users").add({ name: newName });
  };

  return (
    <div>
      <input
        value={newName}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleNewUser}>Submit</button>
    </div>
  );
};

export default AddUser;
