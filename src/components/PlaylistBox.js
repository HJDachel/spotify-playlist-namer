import { List } from '@material-ui/core';
import React, { Component } from 'react'
import PlaylistListItem from './PlaylistListItem';

export default class PlaylistBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userPlaylists: null
        }
    }

    componentDidMount() {
        if (this.props.userID === null) {
            this.props.getMe();
        }
        if (this.state.userPlaylists === null) {
            this.getUserPlaylists()
        }
    }
    
    getUserPlaylists = () => {
        this.props.spotifyAPI.getUserPlaylists(this.state.currentUserID, {limit: 50})
          .then(data => {
            this.setState({userPlaylists: data.body.items})
          })
          .catch(err => console.error(err));
      }

    render() {
        return (
            <div>
                {(this.state.userPlaylists) ? 
                (<List>
                    {this.state.userPlaylists.map( (obj, index) => {
                        return (<PlaylistListItem playlist={obj} index={index}></PlaylistListItem>)
                    })}
                </List>) : null
                }
            </div>
        )
    }


}
