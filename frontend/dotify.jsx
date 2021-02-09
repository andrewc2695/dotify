import Root from "../frontend/components/root"
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { login, logout, signup } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    window.login = login
    window.signup = signup;
    window.logout = logout;

    ReactDOM.render(<Root store={store}/>, root);
});
