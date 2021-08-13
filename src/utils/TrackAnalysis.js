
const getPlaylistTracks = (api, playlistID, callback) => {
    api.getPlaylistTracks(playlistID, {
        limit: 100,
        fields: 'items(track(id))'
    })
        .then((data) => callback(getIDs(data.body.items)))
        .catch((err) => console.error(err));
}

const getIDs = (items) => {
    //console.log(items)
    let arr = [];
    items.map((item) => {
        arr = [...arr, item.track.id]
        return arr;
    });
    return arr;
}

export const getFeatures = (api, playlistID) => {
    getPlaylistTracks(api, playlistID, (tracks) => {
        api.getAudioFeaturesForTracks(tracks)
            .then(data => console.log(data.body));
    });
}