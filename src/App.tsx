import React from 'react';
import './App.css';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeContainer from './ui/containers/HomeContainer';
import AppBarComponent from './ui/components/AppBarComponent';
import SingInUpContainer from './ui/containers/SignInUpContainer';
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider, FirebaseAuthConsumer } from "@react-firebase/auth";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { authTypes, authOperations } from './ducks/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyADBm2Hw-EyfXiT-nbWA3gr5DzgClraquk",
  authDomain: "fb-clone-server-373e0.firebaseapp.com",
  databaseURL: "https://fb-clone-server-373e0.firebaseio.com",
  projectId: "fb-clone-server-373e0",
  storageBucket: "fb-clone-server-373e0.appspot.com",
  messagingSenderId: "661210763493",
  appId: "1:661210763493:web:63243e736e4cafdcbd040c",
  measurementId: "G-EXKJENF6QS"
};

const useStyles = makeStyles({
  postComponet: {
    marginBottom: 10
  },
  root: {
    flexGrow: 1
  }
});

const theme = createMuiTheme({
  overrides: {
    MuiCircularProgress: {
      root: {
        display: 'block',
        margin: 'auto'
      }
    },
  },
});

const App: React.FC<any> = ({ signIn, signOut }) => {
  const classes = useStyles();

  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          if (isSignedIn) {
            signIn(user);
            return (
              <Router>
                <div>
                  <AppBarComponent></AppBarComponent>

                  {/* A <Switch> looks through its children <Route>s and
             renders the first one that matches the current URL. */}
                  <Switch>
                    <Route path="/about">

                    </Route>
                    <Route path="/users">

                    </Route>
                    <Route path="/">
                      <HomeContainer />
                    </Route>
                  </Switch>
                </div>
              </Router>
            )
          } else {
            signOut();
            return (
              <SingInUpContainer></SingInUpContainer>
            )
          }
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<authTypes.AuthActionTypes>) => {
  return {
    signIn: (user: firebase.UserInfo) => authOperations.signIn(dispatch, user),
    signOut: () => authOperations.signOut(dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
