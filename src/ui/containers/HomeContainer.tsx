import React from "react";
import { postOperations, postTypes } from "../../ducks/post/index";
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import FeedComponent from "../components/FeedComponent";
import NewPostContainer from "../containers/NewPostContainer";
import NewsContainer from "./NewsContainer";
import Container from "@material-ui/core/Container";

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


const HomeContainer: React.FC<any> = ({ posts, getPosts, auth }) => {
    const classes = useStyles();

    if (posts.length == 0 && auth.currentUser) {
        getPosts(auth.currentUser.uid);
    }

    return (
        <div className={classes.root}>
            <Container className={classes.my20}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <NewsContainer></NewsContainer>
                    </Grid>
                    <Grid item xs={6}>
                        <div >
                            <NewPostContainer></NewPostContainer>
                        </div>
                        <FeedComponent posts={posts}></FeedComponent>
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    posts: state.post.data,
    auth: state.auth
});

const mapDispatchToProps = (dispatch: Dispatch<postTypes.PostActionTypes>) => {
    return {
        getPosts: (userId: string) => postOperations.fetchPostsAction(dispatch, userId)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);