import axios from 'axios';

const getPlaylistTracks = (api, playlistID, callback) => {
    api.getPlaylistTracks(playlistID, {
        limit: 100,
        fields: 'items(track(id))'
    })
        .then((data) => callback(getIDs(data.body.items)))
        .then(names => names)
        .catch((err) => console.error(err));
}

const getIDs = (items) => {
    let arr = [];
    items.map((item) => {
        arr = [...arr, item.track.id]
        return arr;
    });
    return arr;
}

export const getFeatures = (api, playlistID, callback) => {
    getPlaylistTracks(api, playlistID, (tracks) => {
        api.getAudioFeaturesForTracks(tracks)
            .then( (data) => {
                axios.post('http://localhost:5000/name', data.body)
                    .then(response => callback(response.data.name.join(' ')));
            });
    });

    
}