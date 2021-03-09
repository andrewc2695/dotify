import * as SOPAPIutil from "../util/playlist_songs_api_util"

export const REMOVE_SONG = "REMOVE_SONG"

const receivePlaylist = (playlist) => {
    return {
        type: "RECEIVE_PLAYLIST",
        playlist
    };
};

const removeSong = (payload) => {
    return {
        type: REMOVE_SONG,
        payload
    };
};

export const thunkAddSongToPlaylist = (sapIds) => dispatch => SOPAPIutil.addSongToPlaylist(sapIds)
    .then(playlist => dispatch(receivePlaylist(playlist)));

export const thunkRemoveSongFromPlaylist = (sapId) => dispatch => SOPAPIutil.deleteSongFromPlaylist(sapId)
    .then((playlist) => dispatch(receivePlaylist(playlist)));
    // .then((res) => console.log(res));