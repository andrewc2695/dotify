import SessionForm from "./session_form.jsx";
import { connect } from "react-redux"
const { thunkSignup } = require("../../actions/session_actions");


const mapStateToProps = (state) => {
    return{
        formType: 'SIGN UP',
        headerMsg: 'Sign up for free to start listening.',
        otherMsg: "Already have an account?",
        otherButtonMsg: 'LOG IN',
        otherLink: '/login',
        errors: state.errors.session.errors

    };
}

const mapDispatchToProps = dispatch => {
    return{
        action: user => dispatch(thunkSignup(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);