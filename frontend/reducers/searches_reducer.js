import { RECEIVE_SEARCH } from "../actions/search_actions";

const searchesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type){
        case RECEIVE_SEARCH:
            return action.searchRes
        default:
            return oldState;
    }
}

export default searchesReducer
