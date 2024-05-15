import { CREATE_NEW_USER, GET_ERROR, LOGIN_USER } from "../type";

const inital = {
  createUser: [],
  loginUser: [],
  currentUser: [],
  forgetPassword: [],
  verifyPassword: [],
  resetPassword: [],
  errors: [],
  loading: true,
};

const authReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        createUser: action.payload,
        loading: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        errors: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};
export default authReducer;
