import {
  ADD_TO_FAVOURAIT,
  GET_LOGGED_IN_USER,
  GET_TESTINOMIAL,
} from "../../containers/Landing/component/CategorySection/constant";

const initialState = {
  user: {},
  testinomial: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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

    default:
      return {
        ...state,
      };
  }
};
