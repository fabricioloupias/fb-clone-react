import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardContent from "@material-ui/core/CardContent";
import { newsTypes, newsOperations } from "../../ducks/news";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import List from "@material-ui/core/List";
import NewsComponent from "../components/NewsComponent";
import { News } from "../../models/News";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

const NewsContainer: React.FC<any> = ({ news, getNews }) => {
    const classes = useStyles();

    if (news.length == 0)
        getNews();
    return (
        <Card>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="News"
            />
                <div className={classes.root}>
                    <List>
                        {news.map((n: News, index: number) => {
                            return <NewsComponent key={index} data={n}></NewsComponent>
                        })}
                    </List>
                </div>
        </Card>
    )
}

const mapStateToProps = (state: any) => ({
    news: state.news.data
});

const mapDispatchToProps = (dispatch: Dispatch<newsTypes.NewsActionTypes>) => {
    return {
        getNews: () => newsOperations.fetchNewsAction(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);