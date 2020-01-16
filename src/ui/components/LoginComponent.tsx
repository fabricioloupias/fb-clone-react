import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        padding: 20
    },

});

const LoginComponent: React.FC = () => {
    const classes = useStyles();

    const handleLogin = () => {

    }

    return (
        <Card className={classes.card}>
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" size="small" margin="normal" fullWidth label="Email" variant="outlined" />
                <TextField id="outlined-basic" size="small" margin="normal" fullWidth label="Password" variant="outlined" />
                <Button variant="contained" fullWidth color="primary">
                    Login
                </Button>
            </form>
        </Card>
    )
}

export default LoginComponent;