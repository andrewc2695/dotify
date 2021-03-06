import { removeSearch, thunkSearch, thunkSearchAll } from "../../../actions/search_actions"
import { connect } from "react-redux";
import SearchAllComponent from "./search_all_component";

const mapStateToProps = (state, ownProps) => {
    return {
        songs: Object.values(state.searches.songs),
        albums: Object.values(state.searches.albums),
        artists: Object.values(state.searches.artists),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        searchAll: () => dispatch(thunkSearchAll()),
        removeSearches: () => dispatch(removeSearch()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAllComponent)