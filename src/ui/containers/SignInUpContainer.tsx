import React, { useState } from "react";
import { Dispatch } from "redux";
import LoginComponent from "../components/LoginComponent";
import SignUpComponent from "../components/SignUpComponent";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as firebase from "firebase/app";
import { User } from "../../models/User";
import { authTypes, authOperations } from "../../ducks/auth";
import { connect } from "react-redux";
import CircularProgressComponent from "../components/CircularProgressComponent";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%'
    },
}));

const theme = createMuiTheme({
    props: {
        // Name of the component ⚛️
        MuiTextField: {
            // The default props to change
            size: 'medium',
        },
    },
});

const SingInUpContainer: React.FC<any> = ({ signUp, auth, setShowSignUp }) => {

    const classes = useStyles();

    const onSubmitLogin = (user: any) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(response => {
            })
            .catch(error => {
            })
    }

    const onSubmitSignUp = (user: User) => {
        signUp(user)
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" className={classes.root} alignItems="center" justify="center" direction="row">
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5}>
                    {auth.isLoading ? <CircularProgressComponent /> : null}

                    {!auth.isLoading && auth.showSignUp
                        ?
                        <SignUpComponent setShowSignUp={setShowSignUp} onSubmitSignUp={onSubmitSignUp}></SignUpComponent>
                        :
                        null
                    }
                    {!auth.isLoading && !auth.showSignUp
                        ?
                        <LoginComponent setShowSignUp={setShowSignUp} onSubmitLogin={onSubmitLogin}></LoginComponent>
                        :
                        null
                    }
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

const mapStateToProps = (state: any) => ({
    auth: state.auth
});

const mapDispatchToProps = (dispatch: Dispatch<authTypes.AuthActionTypes>) => {
    return {
        signUp: (user: User) => authOperations.signUpAction(dispatch, user),
        setShowSignUp: (showSignUp: boolean) => authOperations.setShowSignUp(dispatch, showSignUp),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingInUpContainer);