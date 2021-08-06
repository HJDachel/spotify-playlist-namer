import { ListItem, ListItemText } from '@material-ui/core'
import React, { Component } from 'react'

export default class PlaylistListItem extends Component {
    render() {
        return (
            <ListItem>
                <ListItemText>{this.props.playlist.name}</ListItemText>
            </ListItem>
        )
    }
}
