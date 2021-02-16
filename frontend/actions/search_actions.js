import * as SearchAPIUtil from "../util/search_api_util"

export const RECEIVE_SEARCH = "RECIEVE_SEARCH"

const receiveSearch = (searchRes) => {
    return{
        type: RECEIVE_SEARCH,
        searchRes
    }
}

export const thunkSearch = (searchTerm) => dispatch => SearchAPIUtil.search(searchTerm)
    .then(searchRes => dispatch(receiveSearch(searchRes)));