import * as SessionApiUtil from "../util/session_api_util"
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const REMOVE_ERRORS = "REMOVE_ERRORS"

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

const receiveErrors = (errorsArr) => {
    return{
        type: RECEIVE_ERRORS,
        errorsArr
    }
}

export const removeErrors = () => {
    return{
        type: REMOVE_ERRORS,
    }
}

export const thunkLogin = (user) => dispatch => SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const thunkLogout = () => dispatch => SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));

export const thunkSignup = (user) => dispatch => SessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

