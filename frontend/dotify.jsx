import Root from "../frontend/components/root"
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { login, logout, signup } from "./util/session_api_util";
import { thunkFetchArtist, thunkLogin, thunkLogout, thunkSignup } from "./actions/session_actions";
import { fetchArtist } from "./util/artist_api_util";


document.addEventListener("DOMContentLoaded", () => {
    let store;
        if (window.currentUser) {
            const preloadedState = {
                entities: {
                    users: { [window.currentUser.id]: window.currentUser }
                },
                session: { id: window.currentUser.id }
            };
            store = configureStore(preloadedState);
            delete window.currentUser;
        } else {
            store = configureStore();
    }


    const root = document.getElementById("root");
    // const store = configureStore();

    window.login = login
    window.signup = signup;
    window.logout = logout;

    window.fetchArtist = fetchArtist;
    window.thunkFetchArtist = thunkFetchArtist;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.thunkLogin = thunkLogin;
    window.thunkSignup = thunkSignup;
    window.thunkLogout = thunkLogout;


    ReactDOM.render(<Root store={store}/>, root);
});
