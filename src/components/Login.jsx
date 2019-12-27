import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  signupForm: {
    margin: "25% 0",
    padding: "2rem 1.5rem"
  },
  signupLink: {
    cursor: "pointer",
    fontWeight: "bold"
  },
  passwordLink: {
    cursor: "pointer",
    // fontWeight: "bold",
    padding: "0 0 .5rem 0"
  },
  signupButton: {
    margin: "2rem 0 3rem 0 "
  }
}));

export default function Login() {
  const classes = useStyles();
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

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
              <Typography variant="h4">Log In</Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoFocus
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
              Log in
            </Button>
            <Grid item align="center" className={classes.passwordLink}>
              <Typography variant="body1" align="center">
                Forgot your password?{" "}
              </Typography>
            </Grid>
            <Grid item align="center">
              <Typography
                variant="body1"
                align="center"
                // className={classes.signupLink}
              >
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className={classes.signupLink}>Create one.</span>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
