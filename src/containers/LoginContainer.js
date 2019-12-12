import { getLoginuser } from "../actions/login.action.js";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../component/Login";

const mapDispatchToProps = dispatch => {
  return {
    getLoginuser: (userDetails) => {
      dispatch(getLoginuser(userDetails));
    }
  };
};
const mapStateToProps = state => {
  return {
    userData: state.userData,
    error:state.error
  };
};
const LoginContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);

export default LoginContainer;
