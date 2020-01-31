import React from "react";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from '@material-ui/icons/Drafts';

const NewsComponent: React.FC<any> = ({ data }) => {

    function ListItemLink(props: ListItemProps<'a', { button?: undefined }>) {
        return <ListItem button component="a" {...props} />;
    }

    return (
        <ListItem>
            <ListItemLink href={data.url}>
                <ListItemText primary={data.title} />
            </ListItemLink>
        </ListItem>
    )
}

export default NewsComponent;