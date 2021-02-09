import { connect } from "react-redux"
import { thunkLogin, thunkSignup } from "../../actions/session_actions"
import SessionForm from "./session_form.jsx"

export const mapStateToProps = state => {
    return{
        formType: 'LOG IN',
        headerMsg: 'To Continue, log in to Dotify.',
        otherMsg: "Don't have an account?",
        otherButtonMsg: 'SIGN UP FOR DOTIFY'
    }
}

export const mapDispatchToProps = dispatch => {
    return{
        action: user => dispatch(thunkLogin(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);