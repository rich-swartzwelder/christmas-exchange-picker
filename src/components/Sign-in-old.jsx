import React, { useState } from "react";
import { useInput } from "../custom-hooks";
import firebase from "../firebase";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import Backdrop from "@material-ui/core/Backdrop";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
// import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  // paper: {
  //   backgroundColor: theme.palette.background.paper,
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3)
  // },
  // root: {
  //   maxWidth: 400,
  //   flexGrow: 1
  // },
  loginLink: {
    cursor: "pointer",
    fontWeight: "bold"
  },
  signupLink: {
    margin: "0 0 20px 20px"
  },
  passwordLink: {
    cursor: "pointer",
    margin: "0 0 10px 20px"
  },
  modalTitle: {
    flexGrow: 1
  },
  // signupButton: {
  //   margin: "0 30px"
  // },
  signinButton: {
    margin: "0 12px 10px 12px"
  }
}));

export default function Signin(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isUser, setIsUser] = useState(true);

  const {
    value: firstName,
    bind: bindFirstName,
    reset: resetFirstName
  } = useInput("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [newUserFirstName, setNewUserFirstName] = useState("");
  const [newUserLastName, setNewUserLastName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignUpClick = () => {
    setIsUser(false);
  };

  const handleLogInClick = () => {
    setIsUser(true);
  };

  const handleNewUser = e => {
    // const db = firebase.firestore();
    // const ref = db.collection("members").doc();
    const newUser = {
      firstName: newUserFirstName,
      lastName: newUserLastName,
      email: newUserEmail,
      password: newUserPassword
    };
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        disableElevation
        onClick={handleOpen}
      >
        Log In
      </Button>

      {isUser ? (
        // LOG IN FORM
        <Dialog
          aria-labelledby="login-form-title"
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <DialogTitle id="login-form-title" className={classes.modalTitle}>
                Log In
              </DialogTitle>
            </Grid>
            <Grid justify="flex-end">
              <IconButton>
                <Close onClick={handleClose} />
              </IconButton>
            </Grid>
          </Grid>
          <DialogContent>
            <TextField
              margin="normal"
              id="email"
              label="Email"
              type="email"
              fullWidth
            />
            <TextField
              margin="normal"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              disableElevation
              onClick={handleClose}
              className={classes.signinButton}
              fullWidth
            >
              Log In
            </Button>
          </DialogActions>
          <p className={classes.passwordLink}>
            <span onClick={handleSignUpClick}>Forgot password? </span>
          </p>
          <p className={classes.signupLink}>
            Don't have an account?{" "}
            <span onClick={handleSignUpClick} className={classes.loginLink}>
              Sign up here.
            </span>
          </p>
        </Dialog>
      ) : (
        // SIGN UP FORM
        <Dialog
          aria-labelledby="signup-form-title"
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <Grid container direction="row">
            <DialogTitle
              id="signup-form-title"
              // className={classes.modaltitle}
            >
              Sign Up
            </DialogTitle>
            <IconButton>
              <Close onClick={handleClose} />
            </IconButton>
          </Grid>
          <DialogContent>
            <TextField
              autoFocus
              margin="normal"
              id="firstName"
              label="First Name"
              type="text"
              fullWidth
              {...bindFirstName}
              // value={newUserFirstName}
            />
            <TextField
              margin="normal"
              id="lastName"
              label="Last Name"
              type="text"
              fullWidth
              // value={newUserLastName}
              // onChange={e => setNewUserLastName(e.target.value)}
            />
            <TextField
              margin="normal"
              id="email"
              label="Email"
              type="email"
              fullWidth
              // value={newUserEmail}
              // onChange={e => setNewUserEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              id="password"
              label="Password"
              type="password"
              fullWidth
              // value={newUserPassword}
              // onChange={e => setNewUserPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              id="confirmPassword"
              label="Confirm password"
              type="password"
              fullWidth
              // value={newUserConfirmPassword}
              // onChange={e => setNewUserConfirmPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              disableElevation
              onClick={handleClose}
              fullWidth
              className={classes.signinButton}
            >
              Sign Up
            </Button>
          </DialogActions>
          <p className={classes.signupLink}>
            Already have an account?{" "}
            <span onClick={handleLogInClick} className={classes.loginLink}>
              Log in here.
            </span>
          </p>
        </Dialog>
      )}
    </div>
  );
}
