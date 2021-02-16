import { RECEIVE_SEARCH } from "../actions/search_actions";

const searchesReducer = (oldState = {songs: {}, artist: {}, albums: {}}, action) => {
    Object.freeze(oldState)
    const newState = Object.assign({}, oldState);
    switch(action.type){
        case RECEIVE_SEARCH:
            return action.searchRes
        default:
            return oldState;
    }
}

export default searchesReducer
