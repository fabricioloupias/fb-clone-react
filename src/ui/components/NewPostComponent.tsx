import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const NewPostComponent: React.FC<any> = ({ onNewPostSubmit }) => {

    const classes = useStyles();

    let title: string;
    let description: string;
    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        onNewPostSubmit({ title, description });
    }

    const handleTitleChange = (e: React.FormEvent<EventTarget>) => {
        let target = e.target as HTMLInputElement;
        title = target.value
    }

    const handleDescriptionChange = (e: React.FormEvent<EventTarget>) => {
        let target = e.target as HTMLInputElement;
        description = target.value
    }

    return (
        <div>
            <Typography variant="h5" component="h2">
               New post
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField margin="normal" fullWidth size="small" id="outlined-basic" onChange={handleTitleChange} label="Title" variant="outlined" />
                <TextField margin="normal" multiline rows="3" fullWidth size="small" id="outlined-basic" onChange={handleDescriptionChange} label="Description" variant="outlined" />
                <Button style={{ marginTop: 10 }} type="submit" variant="contained" color="primary">Send</Button>
            </form>
        </div>
    )
}


export default NewPostComponent;