import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, REMOVE_ERRORS, RESET_STATE } from "../actions/session_actions";


const SessionErrorsReducer = (oldState = { errors: [] }, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ERRORS:
            newState.errors = action.errorsArr
            return newState
        case RECEIVE_CURRENT_USER:
            newState.errors = [];
            return newState
        case REMOVE_ERRORS:
            newState.errors = [];
            return newState;
        case RESET_STATE:
            return { errors: [] };
        default:
            return oldState;
    }
};

export default SessionErrorsReducer;