import React from "react";
// import firebase from "./firebase";
import { BrowserRouter, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  const theme = createMuiTheme({});

  return (
    <AuthProvider>
      <main>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <div>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </main>
    </AuthProvider>
  );
}

export default App;
