import React from "react";
import { fetchPostsAction } from "../../ducks/post/operatios";
import { PostActionTypes } from "../../ducks/post/types";
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import FeedComponent from "../components/FeedComponent";
import NewPostComponent from "../components/NewPostComponent";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

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
                    <NewPostComponent></NewPostComponent>
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

const mapDispatchToProps = (dispatch: Dispatch<PostActionTypes>) => {
    return {
        getPosts: () => fetchPostsAction(dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);