import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
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
            <Card variant="outlined">
                <CardContent>

                    <TextField id="outlined-basic" onChange={handleTextFieldChange} label="Outlined" variant="outlined" />
                </CardContent>
                <CardActions>
                    <Button type="submit" variant="contained" color="primary">Send</Button>
                </CardActions>
            </Card>
        </form>
    )
}


export default NewPostComponent;