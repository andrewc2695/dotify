import { RECEIVE_SEARCH } from "../actions/search_actions";

const searchesReducer = (oldState = {songs: {}, artists: {}, albums: {}}, action) => {
    Object.freeze(oldState)
    const newState = Object.assign({}, oldState)
    switch(action.type){
        case RECEIVE_SEARCH:
            debugger
            newState.songs = action.searchRes.search.songs;
            newState.artists = action.searchRes.search.artists;
            newState.albums = action.searchRes.search.albums;
            if(newState.albums === undefined){
                newState.albums = {};
            }
            if(newState.artists === undefined){
                newState.artists = {};
            }
            if (newState.songs === undefined) {
                newState.songs = {};
            }
            return newState
        default:
            return oldState;
    }
}

export default searchesReducer
