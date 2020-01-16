import React from 'react';
import './App.css';
import { Post } from './models/Post';
import { PostActionTypes } from './ducks/post/types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchPostsAction } from './ducks/post/operatios';
import PostComponent from './ui/components/PostComponent';
import { makeStyles } from '@material-ui/core/styles';
import LoginComponent from './ui/components/LoginComponent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomeContainer from './ui/containers/HomeContainer';
import AppBarComponent from './ui/components/AppBarComponent';

const useStyles = makeStyles({
  postComponet: {
    marginBottom: 10
  },
  root: {
    flexGrow: 1
  }
});

const App: React.FC = () => {
  const classes = useStyles();

  const isLogged = (): boolean => {
    return true
  }

  return (
    isLogged()
      ?
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
      :
      <Container maxWidth="md">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12} md={6}>
            <LoginComponent />
          </Grid>
        </Grid>
      </Container>

  )
}

export default App;
