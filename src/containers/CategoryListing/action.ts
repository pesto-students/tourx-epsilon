import { Dispatch } from "redux";
import { GET, POST } from "../../api";
import {
  FETCH_FILTER_OPTIONS,
  FETCH_PLACES,
  FILTER_OPTIONS,
  PLACE_LOADING_START,
  PLACE_LOADING_STOP,
  SET_PAGINATION_OBJECT,
  SET_TOTAL_PAGES,
} from "./constant";
import { BACKEND_BASE_URL, PLACE_ROUTES } from "../../api/routes";

export const fetchPlaces =
  (
    categoryId: string,
    stateId: string,
    limit?: number,
    page?: number,
    search?: string
  ) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: PLACE_LOADING_START,
    });

    const response = await GET(
      `${BACKEND_BASE_URL}/${PLACE_ROUTES}?catagoryId=${categoryId}&stateId=${stateId}&limit=${
        limit ?? 5
      }&page=${page ?? 1}&search=${search ?? ""}`
    );

    const filters = await GET(
      `${BACKEND_BASE_URL}/${PLACE_ROUTES}/filter?catagoryId=${categoryId}&stateId=${stateId}`
    );

    if (filters.isSuccess) {
      dispatch({
        type: FETCH_FILTER_OPTIONS,
        payload: filters.data,
      });
    }

    if (response.isSuccess) {
      dispatch({
        type: FETCH_PLACES,
        payload: response.data,
      });
      dispatch({
        type: SET_PAGINATION_OBJECT,
        payload: response.pagination,
      });
      dispatch({
        type: SET_TOTAL_PAGES,
        payload: response.totalPages,
      });
      dispatch({
        type: PLACE_LOADING_STOP,
      });
    }
  };

export const filterPlaces =
  (categoryId: string, stateId: string, filters: any) =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: PLACE_LOADING_START,
    });

    const response = await POST(
      `${BACKEND_BASE_URL}/${PLACE_ROUTES}/filterPlace?catagoryId=${categoryId}&stateId=${stateId}`,
      filters
    );

    if (response.isSuccess) {
      dispatch({
        type: FILTER_OPTIONS,
        payload: response.data,
      });
      dispatch({
        type: SET_PAGINATION_OBJECT,
        payload: response.pagination,
      });
      dispatch({
        type: SET_TOTAL_PAGES,
        payload: response.totalPages,
      });
      dispatch({
        type: PLACE_LOADING_STOP,
      });
    }
  };
