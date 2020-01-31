import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Post } from '../../models/Post';





const NewPostComponent: React.FC<any> = ({ onNewPostSubmit }) => {

    let description: string;
    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        onNewPostSubmit({ description });
    }

    const handleTextFieldChange = (e: React.FormEvent<EventTarget>) => {
        let target = e.target as HTMLInputElement;
        description = target.value
    }

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField fullWidth size="small" id="outlined-basic" onChange={handleTextFieldChange} label="Outlined" variant="outlined" />
            <Button style={{marginTop: 10}} type="submit" variant="contained" color="primary">Send</Button>
        </form>
    )
}


export default NewPostComponent;