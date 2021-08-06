import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React, { Component } from 'react'

export default class PlaylistListItem extends Component {
    render() {
        return (
            <ListItem key={this.props.index} button>
                <ListItemAvatar>
                    <Avatar
                        alt="Playlist Photo"
                        src={this.props.playlist.images[0].url}
                    />
                </ListItemAvatar>
                <ListItemText>{this.props.playlist.name}</ListItemText>
            </ListItem>
        )
    }
}
