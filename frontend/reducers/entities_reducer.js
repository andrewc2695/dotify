import { combineReducers } from "redux";
import artistsReducer from "./artists_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    artists: artistsReducer,
})

export default entitiesReducer;