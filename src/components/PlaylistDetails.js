import { Card, Typography, makeStyles, CardMedia } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(72),
            height: theme.spacing(32),
        },
    },
    cover: {
        padding: 10,
        width: 256,
        height: 256
      },
}));

export default function PlaylistDetails(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card elevation={3}>
                <CardMedia
                    className={classes.cover}
                    component="img"
                    image={props.playlist.images[0].url}
                    
                    title="Live from space album cover"
                />
            </Card>
        </div>
    )
}
