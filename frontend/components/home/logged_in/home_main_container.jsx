import { connect } from "react-redux"
import { thunkLogout } from "../../../actions/session_actions"
import HomeMainComponent from "./home_main_component"


const mapStateToProps = state => {
    return{
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(thunkLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMainComponent)