import {
  ADD_TO_FAVOURAIT,
  GET_LOGGED_IN_USER,
  GET_TESTINOMIAL,
  SIGNUP_SUCCESS,
} from "../../containers/Landing/component/CategorySection/constant";
import { SET_ISAUTH } from "../constant/constant";

const initialState = {
  user: {},
  testinomial: [],
  token: localStorage.getItem("AuthToken"),
  isAuth: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    case ADD_TO_FAVOURAIT: {
      return {
        ...state,
        user: payload,
      };
    }
    case GET_LOGGED_IN_USER: {
      return {
        ...state,
        user: payload,
      };
    }
    case GET_TESTINOMIAL: {
      return {
        ...state,
        testinomial: payload,
      };
    }
    case SET_ISAUTH: {
      return {
        ...state,
        isAuth: payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
