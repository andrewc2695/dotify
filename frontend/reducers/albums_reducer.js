import { RECEIVE_ARTIST } from "../actions/artist_actions"

const albumsReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState)
    switch(action.type){
        case RECEIVE_ARTIST:
            return action.artist.albums;
        default:
            return oldState;
    }
}

export default albumsReducer;