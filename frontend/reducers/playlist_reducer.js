import { RECEIVE_PLAYLIST, RECEIVE_USERS_PLAYLISTS, REMOVE_PLAYLIST } from "../actions/playlist_actions"
import { RESET_STATE } from "../actions/session_actions"
import { REMOVE_SONG } from "../actions/songs_on_playlists_action"
export const playlistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const newState = Object.assign({}, oldState)
    switch(action.type){
        case RECEIVE_USERS_PLAYLISTS:
            if(action.playlists.playlist === undefined){
                return oldState;
            }else{
                return action.playlists.playlist;
            }
        case RECEIVE_PLAYLIST:
            newState[action.playlist.id] = action.playlist
            return newState;
        case REMOVE_PLAYLIST:
            delete newState[action.playlistId];
            return newState;
        case REMOVE_SONG:
            const slice = Object.assign({}, oldState[action.payload.playlistId].songs);
            delete slice[action.payload.sapId];
            newState[action.payload.playlistId].songs = slice;
            return newState;
        case RESET_STATE:
            return {};
        default:
            return oldState;
    };
}

