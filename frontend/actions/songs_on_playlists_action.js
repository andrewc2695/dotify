import * as SOPAPIutil from "../util/playlist_songs_api_util"

const receivePlaylist = (playlist) => {
    debugger
    return {
        type: "RECEIVE_PLAYLIST",
        playlist
    }
}

export const thunkAddSongToPlaylist = (sapIds) => dispatch => SOPAPIutil.addSongToPlaylist(sapIds)
    .then(playlist => dispatch(receivePlaylist(playlist)))