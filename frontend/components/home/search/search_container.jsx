import { thunkSearch } from "../../../actions/search_actions"
import { connect } from "react-redux";
import SearchComponent from "./search_component";

const mapStateToProps = state => {
    return{
        searchRes: state.searches.search
    };
}

const mapDispatchToProps = dispatch => {
    return{
        search: searchTerm => dispatch(thunkSearch(searchTerm))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)