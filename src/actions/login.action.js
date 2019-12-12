//requesting,success,failure
//requesting show loader
//sucesss stop loader and display data
//failure stop loader show error message
export const LOGIN_USER_REQUESTING = "LOGIN_USER_REQUESTING";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const DASHBOARD_SUCESS = "DASHBOARD_SUCESS";
const dasboard = {
  user: [
    {
      id: 1,
      name: "test1",
      age: "11",
      gender: "male",
      email: "test1@gmail.com",
      phoneNo: "9415346313"
    },
    {
      id: 2,
      name: "test2",
      age: "12",
      gender: "male",
      email: "test2@gmail.com",
      phoneNo: "9415346314"
    },
    {
      id: 3,
      name: "test3",
      age: "13",
      gender: "male",
      email: "test3@gmail.com",
      phoneNo: "9415346315"
    },
    {
      id: 4,
      name: "test4",
      age: "14",
      gender: "male",
      email: "test4@gmail.com",
      phoneNo: "9415346316"
    },
    {
      id: 5,
      name: "test5",
      age: "15",
      gender: "male",
      email: "test5@gmail.com",
      phoneNo: "9415346317"
    },
    {
      id: 6,
      name: "test6",
      age: "16",
      gender: "male",
      email: "test6@gmail.com",
      phoneNo: "9415346318"
    }
  ]
};

const credential = {
  username: "hruday@gmail.com",
  password: "hruday123"
};
export function loginuserRequesting() {
  return {
    type: LOGIN_USER_REQUESTING,
    status: "REQUESTING"
  };
}
export function loginuserSucess(data) {
  return {
    type: LOGIN_USER_SUCCESS,
    status: "SUCCESS",
    userData: data
  };
}
export function dashboardSucces(dasboard) {
  return {
    type: DASHBOARD_SUCESS,
    dasboard
  };
}
export function loginuserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    status: "FAILURE",
    error
  };
}

export function getLoginuser(userDetails) {
  return async (dispatch, getState) => {
    dispatch(loginuserRequesting());
    try {
      if (
        userDetails.email === credential.username &&
        userDetails.password == credential.password
      ) {
        return dispatch(loginuserSucess(credential));
      } else {
        dispatch(loginuserFailure("not valid"));
      }
    } catch (e) {
      return dispatch(loginuserFailure(e.message));
    }
  };
}

export function getDashboard(userDetails) {
  return async (dispatch, getState) => {
    dispatch(loginuserRequesting());
    try {
      dispatch(dashboardSucces(dasboard));
    } catch (e) {
      return dispatch(loginuserFailure(e.message));
    }
  };
}
