import {
  FETCH_POPULAR_CATEGORY,
  GET_SINGLE_CATEGORY,
  LOADING_START,
  LOADING_STOP,
} from "../../containers/Landing/component/CategorySection/constant";

const initialState = {
  popularCategory: [],
  loading: false,
  activeCategory: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POPULAR_CATEGORY: {
      return {
        ...state,
        popularCategory: payload,
      };
    }
    case LOADING_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOADING_STOP: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_SINGLE_CATEGORY: {
      return {
        ...state,
        activeCategory: payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
