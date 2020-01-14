import React from 'react';
import './App.css';
import { Post } from './models/Post';
import { PostActionTypes } from './constants/postActionType';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchPostsAction } from './actions/postAction';
import PostComponent from './components/PostComponent';
import { makeStyles } from '@material-ui/core/styles';
import LoginComponent from './components/LoginComponent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomeContainer from './components/HomeContainer';
import AppBarComponent from './components/AppBarComponent';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    label: string;
  };

const useStyles = makeStyles({
  postComponet: {
    marginBottom: 10
  },
  root: {
    flexGrow: 1
  }
});

const App: React.FC<any> = (props): any => {
  const classes = useStyles();
  // const posts: Post[] = props.posts;

  // if (props.posts.length == 0) {
  //   props.getPosts();
  // }

  // const showPosts = (): JSX.Element[] => {
  //   return posts.map((post: Post) => {
  //     return <PostComponent className={classes.postComponet} key={post.id} post={post} />
  //   })
  // }

  // const showAlert = (): JSX.Element => {
  //   return <Alert severity="warning">No data.</Alert>
  // }

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

const mapStateToProps = (state: any) => ({
  posts: state.postState.data
});

const mapDispatchToProps = (dispatch: Dispatch<PostActionTypes>) => {
  return {
    getPosts: () => fetchPostsAction(dispatch)
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(App);
