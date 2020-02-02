import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Post } from '../../models/Post';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Moment from 'moment';
import { deepOrange } from '@material-ui/core/colors';
import firebase from "firebase/app";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            marginBottom: 20
        },
        media: {
            height: 140,
        },
        orange: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],
        },
    })
);


const PostComponent: React.FC<any> = ({ post }) => {

    const classes = useStyles();
    const postAux: Post = post.post;
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={post.user.photoURL} >
                        {post.user.displayName?.charAt(0)}
                    </Avatar>
                }

                title={post.user.displayName}
                subheader=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {postAux.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {postAux.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PostComponent;