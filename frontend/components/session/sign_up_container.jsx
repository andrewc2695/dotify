import SessionSignupForm from "./session_signup_form.jsx";
import { connect } from "react-redux"
const { thunkSignup } = require("../../actions/session_actions");


const mapStateToProps = (state) => {
    return{
        formType: 'SIGN UP',
        headerMsg: 'Sign up for free to start listening.',
        otherMsg: "Have an account?",
        otherButtonMsg: 'Log in.',
        otherLink: '/login',
        errors: state.errors.session.errors,
    };
}

const mapDispatchToProps = dispatch => {
    return{
        action: user => dispatch(thunkSignup(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionSignupForm);