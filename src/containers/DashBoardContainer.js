import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getDashboard } from "../actions/login.action";
import Dasboard from "../component/Dasboard.js";

const mapDispatchToProps = dispatch => {
  return {
    getDashboard: () => {
      dispatch(getDashboard());
    }
  };
};
const mapStateToProps = state => {
  return {
    userData: state.dashboard
  };
};
const DashBoardContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dasboard)
);
export default DashBoardContainer;
