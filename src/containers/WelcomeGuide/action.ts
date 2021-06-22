import { Dispatch } from "redux";
import { GET } from "../../api";
import {
  BACKEND_BASE_URL,
  CATEGORY_ROUTES,
  STATES_ROUTES,
} from "../../api/routes";
import {
  FETCH_CITIES,
  FETCH_STATES,
  REMOVE_ALL_CATEGORY,
  REMOVE_CATEGORY,
  SEARCH_CATEGORIES,
  SET_CURRENT_CITY,
  SET_CURRENT_STATE,
  SET_FORM_VALUES,
  SET_SHOW_WELCOME_MODAL,
  SHOW_SIGNUP_FORM,
  START_LOADING,
  STOP_LOADING,
  UPDATE_SELECTED_CATEGORIES,
} from "./constant";
import { Category } from "./PickPreferences/PickPreferences.interface";
import SignupProps from "./SignUpForm/Signup.interface";

export const fetchStates =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    const states = await GET(`${BACKEND_BASE_URL}/${STATES_ROUTES}`);

    dispatch({
      type: FETCH_STATES,
      payload: states?.data ?? [],
    });
  };

export const fetchCities =
  () =>
  (dispatch: Dispatch): void => {
    const states = [
      {
        id: 1,
        title: "Lucknow",
        value: "lucknow",
      },
      {
        id: 2,
        title: "Kanpur",
        value: "Kanpur",
      },
      {
        id: 3,
        title: "Delhi",
        value: "Delhi",
      },
      {
        id: 4,
        title: "Haryana",
        value: "Haryana",
      },
      {
        id: 5,
        title: "Patna",
        value: "Patna",
      },
    ];

    dispatch({
      type: FETCH_CITIES,
      payload: states,
    });
  };

export const setCurrentState = (value: string) => ({
  type: SET_CURRENT_STATE,
  payload: value,
});

export const setCurrentCity = (value: string) => ({
  type: SET_CURRENT_CITY,
  payload: value,
});

export const searchCategory =
  (query: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: START_LOADING });

    dispatch({
      type: START_LOADING,
    });

    const response = await GET(
      `${BACKEND_BASE_URL}/${CATEGORY_ROUTES}?search=${query}`
    );

    if (response.isSuccess) {
      dispatch({
        type: SEARCH_CATEGORIES,
        payload: response.data,
      });
      dispatch({
        type: STOP_LOADING,
      });
    }
  };

export const updateSelectedCategory = (category: Category) => ({
  type: UPDATE_SELECTED_CATEGORIES,
  payload: category,
});

export const removeCategory = (category: Category) => ({
  type: REMOVE_CATEGORY,
  payload: category,
});

export const removeAllCategory = () => ({
  type: REMOVE_ALL_CATEGORY,
});

export const showSignupForm = () => ({
  type: SHOW_SIGNUP_FORM,
});

export const setFormValues = (credentials: SignupProps) => ({
  type: SET_FORM_VALUES,
  payload: credentials,
});

export const setShowWelcomeModal = (value: boolean) => ({
  type: SET_SHOW_WELCOME_MODAL,
  payload: value,
});
