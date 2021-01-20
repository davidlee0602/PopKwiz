import React from 'react';
// import axios from 'axios';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../client/store/users/AuthContext';
import { Container, CssBaseline } from '@material-ui/core';
import { SignUp } from './screens/Signup';
import { useStyles } from './styles/useStyles';
import { Dashboard } from './screens/Dashboard';
import { Login } from './screens/Login';
import { Logout } from './screens/Logout';

export const Router = () => {
  const classes = useStyles();
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div>
            <CssBaseline className={classes.root} />
            {/* navbar here */}
            <Container className={classes.paper2} style={{ minHeight: '100vh' }}>
              <div className="w-100" style={{ maxWidth: '400px' }}>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/login" component={Login} />
                  <Route path="/logout" component={Logout} />
                </Switch>
              </div>
            </Container>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};