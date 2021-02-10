import { connect } from "react-redux";
import { thunkLogin, thunkLogout } from "../../actions/session_actions"
import homeComponent from "./home_component";



const mapStateToProps = state => {
    return{
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(thunkLogout()),
        Login: (user) =>dispatch(thunkLogin(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(homeComponent);