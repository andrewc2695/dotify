import { thunkSearch } from "../../../actions/search_actions"
import { connect } from "react-redux";
import SearchComponent from "./search_component";

const mapStateToProps = state => {
    return{
        songs: Object.values(state.searches.songs),
        albums: Object.values(state.searches.albums),
        artists: Object.values(state.searches.artists),
    };
}

const mapDispatchToProps = dispatch => {
    return{
        search: searchTerm => dispatch(thunkSearch(searchTerm))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)