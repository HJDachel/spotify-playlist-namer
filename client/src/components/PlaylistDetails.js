import { Typography, makeStyles, Grid, Paper } from '@material-ui/core'
import React from 'react'
import RenameButton from './RenameButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function PlaylistDetails(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <div className={classes.image}>
                            <img className={classes.img} alt="playlist cover" src={props.playlist.images[0].url} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h6">
                                    {props.playlist.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {props.playlist.description}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2">
                                    <RenameButton playlist={props.playlist} setPlaylistName={props.setPlaylistName} api={props.api}/>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2">{props.playlist.owner.display_name}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
