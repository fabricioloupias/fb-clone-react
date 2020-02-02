import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import Modal from '@material-ui/core/Modal';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import NewPostComponent from '../components/NewPostComponent';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { postTypes, postOperations } from '../../ducks/post';
import { Post } from '../../models/Post';
import Paper from '@material-ui/core/Paper';
import { AppState } from '../../store/store';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(3),
        },
    }),
);

const NewPostContainer: React.FC<any> = ({ addPost, auth }) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const handlePostSubmit = (post: Post) => {
        addPost(post, auth.currentUser);
    }
    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={openModal}
                onClose={handleClose}
                closeAfterTransition
                className={classes.modal}
                BackdropComponent={Backdrop}
                disableAutoFocus={true}
                BackdropProps={{
                    timeout: 250,
                }}
            >
                <Fade in={openModal}>
                    <Paper style={modalStyle} className={classes.paper}>
                        <NewPostComponent onNewPostSubmit={handlePostSubmit}></NewPostComponent>
                    </Paper>
                </Fade>
            </Modal>
            <Card onClick={handleOpen}>
                <CardContent>

                </CardContent>
            </Card>
        </div>

    )
}

const mapStateToProps = (state: AppState) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch: Dispatch<postTypes.PostActionTypes>) => {
    return {
        addPost: (post: Post, user: firebase.UserInfo) => postOperations.addPostAction(dispatch, post, user)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostContainer);
