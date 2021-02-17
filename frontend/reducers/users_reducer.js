import { RECEIVE_CURRENT_USER, RESET_STATE }  from "../actions/session_actions"

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, {[action.user.id]: action.user});
        case RESET_STATE:
            return {}
        default:
            return oldState;
    }
}

export default usersReducer;