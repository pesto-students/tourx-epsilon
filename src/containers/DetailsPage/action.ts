import { Dispatch } from "redux";
import { GET, POST } from "../../api";
import {
  BACKEND_BASE_URL,
  PLACE_ROUTES,
  REVIEW_ROUTES,
} from "../../api/routes";
import { getDefaultHeaders } from "../../Library/helper";
import {
  LOADING_START,
  LOADING_STOP,
  FETCH_SINGLE_PLACE_DETAIL,
  FETCH_REVIEW,
  ADD_REVIEW,
} from "./constant";

export const fetchPlaceDetails =
  (placeId: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: LOADING_START,
    });

    const response = await GET(
      `${BACKEND_BASE_URL}/${PLACE_ROUTES}/${placeId}`
    );

    if (response.isSuccess) {
      dispatch({
        type: FETCH_SINGLE_PLACE_DETAIL,
        payload: response?.data,
      });

      dispatch({
        type: LOADING_STOP,
      });
    }
  };

export const fetchReviews = () => async (dispatch: Dispatch) => {
  dispatch({
    type: LOADING_START,
  });

  const response = await GET(`${BACKEND_BASE_URL}/${REVIEW_ROUTES}`);

  if (response.isSuccess) {
    dispatch({
      type: FETCH_REVIEW,
      payload: response?.data,
    });

    dispatch({
      type: LOADING_STOP,
    });
  }
};

export const addReview =
  (placeId: string, text: string, rating: number, user: string) =>
  async (dispatch: Dispatch) => {
    const response = await POST(
      `${BACKEND_BASE_URL}/${REVIEW_ROUTES}?placeId=${placeId}`,
      {
        rating,
        description: text,
        user,
        placeId,
      },
      getDefaultHeaders()
    );

    if (response.isSuccess) {
      fetchPlaceDetails(placeId);
    }

    dispatch({
      type: ADD_REVIEW,
    });
  };
