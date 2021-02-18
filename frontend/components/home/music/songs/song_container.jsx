import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import SongComponent from "./song_component"

const mapStateToProps = (state, ownProps) => {
    debugger
    return{
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongComponent))