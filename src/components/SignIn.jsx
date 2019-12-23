import React, { useState, useEffect } from "react";
// import firebase from "../firebase";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import Backdrop from "@material-ui/core/Backdrop";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  root: {
    maxWidth: 400,
    flexGrow: 1
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignUpClick = () => {
      setSignedIn(true)
  }
  
  const handleSignInClick = () => {
      setSignedIn(false)
  }

  return (
    <div>
      <Button variant="contained" size="small" onClick={handleOpen}>
        Sign In
      </Button>
      {signedIn ? (
        <div>
          <Dialog
            aria-labelledby="signin-form-title"
            open={open}
            onClose={handleClose}
            closeAfterTransition
          >
            <DialogTitle id="signup-form-title">Sign Up</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="normal"
                id="firstName"
                label="First Name"
                type="text"
                fullWidth
              />
              <TextField
                margin="normal"
                id="lastName"
                label="Last Name"
                type="text"
                fullWidth
              />
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
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Sign Up</Button>
              <Button onClick={handleSignInClick}>Sign In</Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        <Dialog
          aria-labelledby="signin-form-title"
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <DialogTitle id="signin-form-title">Sign In</DialogTitle>
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
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Sign In</Button>
            <Button onClick={handleSignUpClick}>Sign Up</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
