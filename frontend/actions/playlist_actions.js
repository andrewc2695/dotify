 import * as PlaylistsAPIUtil from "../util/playlist_api_util"

export const RECEIVE_USERS_PLAYLISTS = "RECEIVE_USERS_PLAYLISTS"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST"
export const CREATE_PLAYLIST = "CREATE_PLAYLIST"

const receiveUsersPlaylists = (playlists) => {
    return{
        type: RECEIVE_USERS_PLAYLISTS,
        playlists
    };
}

const receivePlaylist = (playlist) => {
    return{
        type: RECEIVE_PLAYLIST,
        playlist
    }
}


export const thunkFetchUsersPlaylist = (userId) => dispatch => PlaylistsAPIUtil.fetchUsersPlaylists(userId)
    .then(playlists => dispatch(receiveUsersPlaylists(playlists)));

export const thunkFetchPlaylist = playlistId => dispatch => PlaylistsAPIUtil.fetchPlaylist(playlistId)
    .then(playlist => dispatch(receivePlaylist(playlist)));

export const thunkCreatePlaylist = playlist => dispatch => PlaylistsAPIUtil.createPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)));