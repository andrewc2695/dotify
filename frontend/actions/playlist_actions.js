 import * as PlaylistsAPIUtil from "../util/playlist_api_util"

export const RECEIVE_USERS_PLAYLISTS = "RECEIVE_USERS_PLAYLISTS"

const receiveUsersPlaylists = (playlists) => {
    return{
        type: RECEIVE_USERS_PLAYLISTS,
        playlists
    };
}

export const thunkFetchUsersPlaylist = (userId) => dispatch => PlaylistsAPIUtil.fetchUsersPlaylists(userId)
    .then(playlists => dispatch(receiveUsersPlaylists(playlists)));