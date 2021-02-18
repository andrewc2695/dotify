import { RESET_STATE } from "../actions/session_actions";
import { RECEIVE_CURRENT_SONG } from "../actions/song_actions";


export const songsReducer = (oldState = {songInfo: {}}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_SONG:
            return {songInfo: action.songInfo};
        case RESET_STATE:
            return { songInfo: {} };
        default:
            return oldState;
    }
}