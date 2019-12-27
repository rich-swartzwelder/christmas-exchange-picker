import React from "react";

export default function AddMember() {
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
  return (
    <div>
      <Paper style={{ margin: 16, padding: 16 }}>
        <form onSubmit={handleSubmit}>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item xs={9} sm={10} style={{ paddingRight: 16 }}>
              <TextField
                label="New member!!"
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
    </div>
  );
}
