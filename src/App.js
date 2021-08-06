import React, { Component } from 'react'
import './App.css';
import hash from './hash';
import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes
} from './config';
import SpotifyWebApi from 'spotify-web-api-node';
import { Button } from '@material-ui/core';
import PlaylistBox from './components/PlaylistBox';
import NavBar from './components/NavBar';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
      spotifyAPI: null,
      currentUserID: null
    };
  }

  componentDidMount() {
    let _token = hash.access_token;
    if (_token) {
      let spotifyAPI = new SpotifyWebApi();
      spotifyAPI.setAccessToken(_token);
      this.setState({
        token: _token,
        spotifyAPI: spotifyAPI
      });
    }
  }

  spotifyLoginLink = () => {
    return (
      <>
        {!this.state.token && (
          <a
            className="btn btn-outline-primary"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        )
        }
      </>
    );
  }

  getMe = () => {
    this.state.spotifyAPI.getMe()
      .then(data => {
        this.setState({currentUserID: data.body.id});
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar titleText="Spotify Playlist Namer"/>
        {this.spotifyLoginLink()}
        {(this.state.token !== null) ? (
          <PlaylistBox getMe={this.getMe} 
            userID={this.state.currentUserID}
            spotifyAPI={this.state.spotifyAPI}/>
        )
          : null}
      </div>
    )
  }
}

