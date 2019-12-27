import React, { useState, useCallback } from "react";
import firebase from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useForm } from "react-hook-form";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  signupForm: {
    margin: "25% 0",
    padding: "2rem 1.5rem"
  },
  loginLink: {
    cursor: "pointer",
    fontWeight: "bold"
  },
  signupButton: {
    margin: "2rem 0 3rem 0 "
  }
}));

const SignUp = ({ history }) => {
  const classes = useStyles();
  const [newUserFirstName, setNewUserFirstName] = useState("");
  const [newUserLastName, setNewUserLastName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = useCallback(async () => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(newUserEmail, newUserPassword);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history, newUserEmail, newUserPassword]);

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Paper className={classes.signupForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid>
            <Grid item align="center">
              <AccountCircle fontSize="large" />
            </Grid>
            <Grid item align="center">
              <Typography variant="h4">Sign Up</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                inputRef={register}
                label="First name"
                name="firstName"
                value={newUserFirstName}
                onChange={e => {
                  setNewUserFirstName(e.target.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={register}
                label="Last name"
                name="lastName"
                value={newUserLastName}
                onChange={e => setNewUserLastName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={register}
                label="Email"
                name="email"
                type="email"
                value={newUserEmail}
                onChange={e => setNewUserEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={register}
                label="Password"
                name="password"
                type="password"
                value={newUserPassword}
                onChange={e => setNewUserPassword(e.target.value)}
                fullWidth
              />
            </Grid>
            <Button
              className={classes.signupButton}
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
            <Grid item align="center">
              <Typography
                variant="body1"
                align="center"
                // className={classes.signupLink}
              >
                Already have an account?{" "}
                <Link to="/login" className={classes.loginLink}>
                  Log in here.
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default withRouter(SignUp);
