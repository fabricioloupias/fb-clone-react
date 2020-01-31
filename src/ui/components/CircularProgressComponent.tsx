import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'block',
        margin: 'auto'
    }
});

const CircularProgressComponent: React.FC = () => {
    const classes = useStyles();

    return (
        <CircularProgress className={classes.root} />
    )
}

export default CircularProgressComponent;