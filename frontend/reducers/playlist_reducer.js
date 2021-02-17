import { RECEIVE_PLAYLIST, RECEIVE_USERS_PLAYLISTS, REMOVE_PLAYLIST } from "../actions/playlist_actions"
import { RESET_STATE } from "../actions/session_actions"
export const playlistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const newState = Object.assign({}, oldState)
    switch(action.type){
        case RECEIVE_USERS_PLAYLISTS:
            return action.playlists.playlist;
        case RECEIVE_PLAYLIST:
            newState[action.playlist.id] = action.playlist
            return newState;
        case REMOVE_PLAYLIST:
            delete newState[action.playlistId];
            return newState;
        case RESET_STATE:
            return {};
        default:
            return oldState;
    };
}

