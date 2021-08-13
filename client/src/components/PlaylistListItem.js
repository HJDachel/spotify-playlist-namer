import React from 'react'
import {
    Avatar,
    ListItem,
    ListItemAvatar, 
    ListItemIcon, 
    ListItemText, 
    Collapse, 
    List
} from '@material-ui/core'
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PlaylistDetails from './PlaylistDetails';

export default function PlaylistListItem(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItem key={props.index} button onClick={handleClick} >
                <ListItemAvatar>
                    <Avatar
                        alt="Playlist Photo"
                        src={props.playlist.images[0].url}
                    />
                </ListItemAvatar>
                <ListItemText primary={props.playlist.name} ></ListItemText>
                {(props.playlist.collaborative) ? (
                    <ListItemIcon>
                        <SupervisorAccountOutlinedIcon />
                    </ListItemIcon>
                ) : ""}
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button >
                        <PlaylistDetails playlist={props.playlist} setPlaylistName={props.setPlaylistName} api={props.api}/>
                    </ListItem>
                </List>
            </Collapse>
        </>
    )
}

