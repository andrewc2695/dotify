import { connect } from "react-redux"
import { thunkFetchArtists } from "../../../../actions/artist_actions"
import ArtistIndexComponent from "./artist_index_component"



const mapStateToProps = state => {
    return {
        artists: Object.values(state.entities.artists)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArtists: () => dispatch(thunkFetchArtists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndexComponent)