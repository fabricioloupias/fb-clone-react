import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CopyrightComponent from "./CopyrightComponent";
import { User } from "../../models/User";

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(3, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        verticalAlign: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUpComponent: React.FC<any> = ({ setShowSignUp, onSubmitSignUp }) => {

    const classes = useStyles();
    
    var user: User = new User();
    var firstName: string = '';
    var lastName: string = '';
    var email: string = '';
    var password: string = '';

    const changeToSignIn = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setShowSignUp(false);
    }

    const handleSubmitForm = (event: React.SyntheticEvent) => {
        event.preventDefault();
        onSubmitSignUp(user);
    }

    const handleFistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        user.firstName = event.target.value;
    }

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        user.lastName = event.target.value;
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        user.email = event.target.value;
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        user.password = event.target.value;
    }

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
        </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmitForm}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="signUpFirstname"
                    label="Firstname"
                    name="signUpFirstname"
                    autoComplete="signUpFirstname"
                    autoFocus
                    onChange={handleFistNameChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="signUpLastname"
                    label="Lastname"
                    name="signUpLastname"
                    autoComplete="signUpLastname"
                    autoFocus
                    onChange={handleLastNameChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="signUpEmail"
                    label="Email Address"
                    name="signUpEmail"
                    autoComplete="signUpEmail"
                    autoFocus
                    onChange={handleEmailChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="signUpPassword"
                    label="Password"
                    type="password"
                    id="signUpPassword"
                    autoComplete="current-password"
                    onChange={handlePasswordChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Register
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="#" onClick={changeToSignIn} variant="body2">
                            {"Do you have an account? Sign In"}
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <CopyrightComponent />
                </Box>
            </form>
        </div>

    )
}

export default SignUpComponent;