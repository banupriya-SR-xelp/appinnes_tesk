import * as loginAction from "../actions/login.action.js";
const userReducer = (
  state = {
    status: null,
    loading: false,
    error: null,
    userData:null,
    userDetails: null,
    repoDetails: null,
    user: null,
    repoLoader: false,
    dashboard:null
  },
  action
) => {
  switch (action.type) {
    case loginAction.DASHBOARD_SUCESS:
    return Object.assign({}, state, {
      loading: true,
      status: action.status,
      dashboard:action.dasboard,
      error:null
    });

    case loginAction.LOGIN_USER_REQUESTING:
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });
    case loginAction.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        userData: action.userData,
        status: action.status
      });

    case loginAction.LOGIN_USER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: "error",
        status: action.status
      });
    default:
      return state;
  }
};
export default userReducer;
