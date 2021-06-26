import {
  FETCH_FILTER_OPTIONS,
  FETCH_PLACES,
  FILTER_OPTIONS,
  PLACE_LOADING_START,
  PLACE_LOADING_STOP,
  SET_PAGINATION_OBJECT,
  SET_TOTAL_PAGES,
} from "../../containers/CategoryListing/constant";
import {
  FETCH_REVIEW,
  FETCH_SINGLE_PLACE_DETAIL,
} from "../../containers/DetailsPage/constant";
import {
  FETCH_POPULAR_PLACES,
  GET_MOST_VIEWED,
} from "../../containers/Landing/component/CategorySection/constant";

const initialState = {
  popularPlaces: [],
  mostViewed: [],
  searchedPlaces: [],
  loading: false,
  pagination: {},
  totalPages: 3,
  filters: [],
  activePlace: {},
  reviews: [],
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
    case FETCH_PLACES: {
      return {
        ...state,
        searchedPlaces: payload,
      };
    }
    case PLACE_LOADING_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case PLACE_LOADING_STOP: {
      return {
        ...state,
        loading: false,
      };
    }
    case SET_PAGINATION_OBJECT: {
      return {
        ...state,
        pagination: payload,
      };
    }
    case SET_TOTAL_PAGES: {
      return {
        ...state,
        totalPages: payload,
      };
    }
    case FETCH_FILTER_OPTIONS: {
      return {
        ...state,
        filters: payload,
      };
    }
    case FILTER_OPTIONS: {
      return {
        ...state,
        searchedPlaces: payload,
      };
    }
    case FETCH_SINGLE_PLACE_DETAIL: {
      return {
        ...state,
        activePlace: payload,
      };
    }
    case FETCH_REVIEW: {
      return {
        ...state,
        reviews: payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
