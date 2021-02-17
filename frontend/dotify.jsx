import Root from "../frontend/components/root"
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { login, logout, signup } from "./util/session_api_util";
import { thunkLogin, thunkLogout, thunkSignup } from "./actions/session_actions";
import { thunkFetchArtist, thunkFetchArtists } from "./actions/artist_actions";
import { thunkFetchAlbum } from "./actions/album_actions";
import { search } from "./util/search_api_util";
import { thunkSearch } from "./actions/search_actions";
import { thunkFetchPlaylist } from "./actions/playlist_actions";



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

    window.thunkFetchArtist = thunkFetchArtist;
    window.thunkFetchArtists = thunkFetchArtists;

    window.thunkFetchAlbum = thunkFetchAlbum;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.search = search;
    window.thunkSearch = thunkSearch;

    window.thunkFetchPlaylist = thunkFetchPlaylist;

    window.thunkLogin = thunkLogin;
    window.thunkSignup = thunkSignup;
    window.thunkLogout = thunkLogout;


    ReactDOM.render(<Root store={store}/>, root);
});
