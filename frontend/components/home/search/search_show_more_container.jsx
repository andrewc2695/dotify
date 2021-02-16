import { connect } from "react-redux";
import SearchShowMore from "./search_show_more_component";

const mapStateToProps = state => {
    return {
        songs: Object.values(state.searches.songs),
        albums: Object.values(state.searches.albums),
        artists: Object.values(state.searches.artists),
    };
}

const mapDispatchToProps = dispatch => {
    return {
        search: searchTerm => dispatch(thunkSearch(searchTerm)),
        removeSearches: () => dispatch(removeSearch()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchShowMore)