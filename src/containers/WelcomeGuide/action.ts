import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { GET, POST } from "../../api";
import {
  BACKEND_BASE_URL,
  CITIES_ROUTES,
  CATEGORY_ROUTES,
  REGISTER,
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
  SIGNUP_SUCCESS,
  // LOGIN,
  // LOGOUT,
  AUTH_LOADING_START,

  // AUTH_LOADING_STOP,
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
  (payload: any) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: SET_CURRENT_CITY,
      payload: "",
    });

    const cities = await GET(
      `${BACKEND_BASE_URL}/${CITIES_ROUTES}/${payload.stateId}`
    );

    dispatch({
      type: FETCH_CITIES,
      payload: cities?.data ?? [],
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

export const signupUserSuccess = (payload: any) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signupUser =
  (payload: {
    username?: string;
    password: string;
    selectedCategories: [];
    role?: string;
    email?: string;
  }) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: AUTH_LOADING_START,
    });

    const user = { ...payload };

    const preferences = payload.selectedCategories.map(
      (categories: any) => categories._id
    );

    user.email = user.username;
    delete user.username;

    user.role = "user";

    const response = await POST(`${BACKEND_BASE_URL}/${REGISTER}`, {
      ...user,
      preferences,
    });
    if (response.isSuccess) {
      toast.success("Registered Succesfully");
      dispatch({
        type: SET_SHOW_WELCOME_MODAL,
        payload: false,
      });
      localStorage.setItem("showWelcomeDialog", "true");
    }
  };

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
