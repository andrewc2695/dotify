import { connect } from "react-redux"
import { thunkLogin, thunkSignup } from "../../actions/session_actions"
import SessionForm from "./session_form.jsx"

export const mapStateToProps = state => {
    return{
        formType: 'Log In!'
    }
}

export const mapDispatchToProps = dispatch => {
    return{
        action: user => dispatch(thunkLogin(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);