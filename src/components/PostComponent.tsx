import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Post } from '../models/Post';

import { spacing } from '@material-ui/system';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        marginBottom: 10
    },
    media: {
        height: 140,
    },
});


const PostComponent: React.FC<any> = ({post}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PostComponent;