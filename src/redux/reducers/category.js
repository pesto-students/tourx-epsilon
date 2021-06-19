import { FETCH_POPULAR_CATEGORY } from "../../containers/Landing/component/CategorySection/constant";

const initialState = {
  popularCategory: [],
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

    default:
      return {
        ...state,
      };
  }
};
