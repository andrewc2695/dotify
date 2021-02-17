import { RECEIVE_PLAYLIST, RECEIVE_USERS_PLAYLISTS } from "../actions/playlist_actions"
import { RESET_STATE } from "../actions/session_actions"
export const playlistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type){
        case RECEIVE_USERS_PLAYLISTS:
            return action.playlists.playlist;
        case RECEIVE_PLAYLIST:
            const newState = Object.assign({}, oldState)
            newState[action.playlist.id] = action.playlist
            return newState;
        case RESET_STATE:
            return {};
        default:
            return oldState;
    };
}

