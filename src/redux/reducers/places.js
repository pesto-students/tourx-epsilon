import {
  FETCH_POPULAR_PLACES,
  GET_MOST_VIEWED,
} from "../../containers/Landing/component/CategorySection/constant";

const initialState = {
  popularPlaces: [],
  mostViewed: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POPULAR_PLACES: {
      return {
        ...state,
        popularPlaces: payload,
      };
    }
    case GET_MOST_VIEWED: {
      return {
        ...state,
        mostViewed: payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
