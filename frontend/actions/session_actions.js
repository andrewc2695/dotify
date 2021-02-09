import * as SessionApiUtil from "../util/session_api_util"
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveCurrentUser = user => {
    return{
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return{
        type: LOGOUT_CURRENT_USER,
    }
}

const receiveErrors = (errorArr) => {
    return{
        type: RECEIVE_ERRORS,
        errors
    }
}


export const thunkLogin = (user) => dispatch => SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)));

export const thunkLogout = () => dispatch => SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));

export const thunkSignup = (user) => dispatch => SessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)));

