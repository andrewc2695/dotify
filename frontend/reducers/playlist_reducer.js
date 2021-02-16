import { RECEIVE_USERS_PLAYLISTS } from "../actions/playlist_actions"

export const playlistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type){
        case RECEIVE_USERS_PLAYLISTS:
            debugger
            return action.playlists.playlist;
        default:
            return oldState;
    };
}

