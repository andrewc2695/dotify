import { combineReducers } from "redux"
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import searchesReducer from "./searches_reducer";
import sessionReducer from "./session_reducer";
import { songsReducer } from "./songs_reducer";

const RootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    searches: searchesReducer,
    currentSong: songsReducer,
    errors: errorsReducer,
});

export default RootReducer;