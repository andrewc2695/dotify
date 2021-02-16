import { connect } from "react-redux"
import { thunkFetchArtist } from "../../../actions/artist_actions"
import { thunkSearch } from "../../../actions/search_actions"
import { thunkLogout } from "../../../actions/session_actions"
import HomeMainComponent from "./home_main_component"
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    return{
        currentUser: state.entities.users[state.session.id],
        artists: Object.values(state.entities.artists)
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(thunkLogout()),
        fetchArtist: artistId => dispatch(thunkFetchArtist(artistId)),
        fetchArtists: () => dispatch(thunkFetchArtists()),
        search: searchTerm => dispatch(thunkSearch(searchTerm)),

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeMainComponent));