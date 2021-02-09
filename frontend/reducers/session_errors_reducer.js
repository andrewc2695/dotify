import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


const SessionErrorsReducer = (oldState = { session: [] }, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch (action.type) {
        case "RECEIVE_SESSION_ERRORS":
            newState.session = action.errors
            return newState
        case RECEIVE_CURRENT_USER:
            newState.errors = [];
            return newState
        default:
            return oldState;
    }
};

export default SessionErrorsReducer;