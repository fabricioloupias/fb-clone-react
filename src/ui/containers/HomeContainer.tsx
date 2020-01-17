import React from "react";
import { postOperations, postTypes } from "../../ducks/post/index";
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import FeedComponent from "../components/FeedComponent";
import NewPostComponent from "../components/NewPostComponent";
import { Post } from "../../models/Post";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        my20: {
            marginTop: 20,
            marginBottom: 20
        }
    }),
);

const handleNewPostSubmit = (post: Object) => {
    // Do something with the form values
    console.log(post);
}

const HomeContainer: React.FC<any> = ({ posts, getPosts }) => {
    const classes = useStyles();

    if (posts.length == 0) {
        getPosts();
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    <div className={classes.my20}>
                        <NewPostComponent onNewPostSubmit={handleNewPostSubmit}></NewPostComponent>
                    </div>
                    <FeedComponent posts={posts}></FeedComponent>
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    posts: state.post.data
});

const mapDispatchToProps = (dispatch: Dispatch<postTypes.PostActionTypes>) => {
    return {
        getPosts: () => postOperations.fetchPostsAction(dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);