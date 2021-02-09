import SessionForm from "./session_form.jsx";
import { connect } from "react-redux"
const { thunkSignup } = require("../../actions/session_actions");


const mapStateToProps = (state) => {
    return{
        formType: 'Sign Up!'
    };
}

const mapDispatchToProps = dispatch => {
    return{
        action: user => dispatch(thunkSignup(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);