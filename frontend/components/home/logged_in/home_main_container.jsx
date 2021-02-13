import { connect } from "react-redux"
import { thunkFetchArtist } from "../../../actions/artist_actions"
import { thunkLogout } from "../../../actions/session_actions"
import HomeMainComponent from "./home_main_component"


const mapStateToProps = state => {
    return{
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(thunkLogout()),
        fetchArtist: artistId => dispatch(thunkFetchArtist(artistId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMainComponent)