import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import { getFeatures } from '../utils/TrackAnalysis';

export default function RenameButton(props) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRename = () => {
        handleClose();
        props.setPlaylistName(props.playlist.id, name);
    }

    const generateName = () => {
        getFeatures(props.api, props.playlist.id);
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Rename Playlist
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Generate a new name for ${props.playlist.name}`}</DialogTitle>
                <DialogContent>
                    <TextField label="New Name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={generateName} color="primary">
                        Generate Name
                    </Button>
                    <Button onClick={handleRename} color="primary" autoFocus>
                        Rename
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}