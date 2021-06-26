import { Dispatch } from "redux";
import { GET, POST } from "../../../../api";
import {
  ADD_TO_FAVOURAIT,
  FETCH_POPULAR_CATEGORY,
  FETCH_POPULAR_PLACES,
  GET_LOGGED_IN_USER,
  GET_MOST_VIEWED,
  GET_SINGLE_CATEGORY,
  GET_TESTINOMIAL,
  LOADING_START,
  LOADING_STOP,
} from "./constant";
import {
  AUTH_ROUTES,
  BACKEND_BASE_URL,
  CATEGORY_ROUTES,
  PLACE_ROUTES,
  TESTINOMIALS_ROUTES,
  USER_ROUTE,
} from "../../../../api/routes";
import { getDefaultHeaders } from "../../../../Library/helper";

export const fetchPopularCategory =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: LOADING_START,
    });

    const response = await GET(`${BACKEND_BASE_URL}/${CATEGORY_ROUTES}`);

    if (response.isSuccess) {
      dispatch({
        type: FETCH_POPULAR_CATEGORY,
        payload: response.data,
      });
      dispatch({
        type: LOADING_STOP,
      });
    }
  };

export const fetchSingleCategory =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: LOADING_START,
    });

    const response = await GET(`${BACKEND_BASE_URL}/${CATEGORY_ROUTES}/${id}`);

    if (response.isSuccess) {
      dispatch({
        type: GET_SINGLE_CATEGORY,
        payload: response.data,
      });
      dispatch({
        type: LOADING_STOP,
      });
    }
  };

export const fetchPopularPlaces = () => async (dispatch: Dispatch) => {
  const response = await GET(
    `${BACKEND_BASE_URL}/${PLACE_ROUTES}?catagoryId=60ce140465ad147a5d69ca0e`
  );

  if (response.isSuccess) {
    dispatch({
      type: FETCH_POPULAR_PLACES,
      payload: response.data,
    });
  }
};

export const addToFavourait =
  (payload: string) => async (dispatch: Dispatch) => {
    const response = await POST(
      `${BACKEND_BASE_URL}/${USER_ROUTE}/favourite`,
      {
        id: payload,
      },
      getDefaultHeaders()
    );

    if (response.isSuccess) {
      dispatch({
        type: ADD_TO_FAVOURAIT,
        payload: response.data,
      });
    }
  };

export const getMostViewed = () => async (dispatch: Dispatch) => {
  dispatch({
    type: LOADING_START,
  });

  const response = await GET(
    `${BACKEND_BASE_URL}/${PLACE_ROUTES}/most-viewed`,
    {},
    getDefaultHeaders()
  );

  if (response.isSuccess) {
    dispatch({
      type: GET_MOST_VIEWED,
      payload: response.data,
    });
    dispatch({
      type: LOADING_STOP,
    });
  }
};

export const getTestinomial = () => async (dispatch: Dispatch) => {
  dispatch({
    type: LOADING_START,
  });
  const response = await GET(
    `${BACKEND_BASE_URL}/${TESTINOMIALS_ROUTES}`,
    {},
    getDefaultHeaders()
  );

  if (response.isSuccess) {
    dispatch({
      type: GET_TESTINOMIAL,
      payload: response.data,
    });
    dispatch({
      type: LOADING_STOP,
    });
  }
};

export const getLoggedInUser = () => async (dispatch: Dispatch) => {
  const response = await GET(
    `${BACKEND_BASE_URL}/${AUTH_ROUTES}/me`,
    {},
    getDefaultHeaders()
  );

  if (response.isSuccess) {
    dispatch({
      type: GET_LOGGED_IN_USER,
      payload: response.data,
    });
  }
};
