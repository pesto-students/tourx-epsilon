import { Dispatch } from "redux";
import { GET } from "../../api";
import { BACKEND_BASE_URL, STATES_ROUTES } from "../../api/routes";
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
  () =>
  (dispatch: Dispatch): void => {
    const category = [
      {
        id: 1,
        title: "Hotels",
        options: "1200",
        img: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 2,
        title: "Hospitals",
        options: "400",
        img: "https://images.unsplash.com/photo-1543968332-f99478b1ebdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        title: "Restraunt",
        options: "200",
        img: "https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        title: "Entertainment",
        options: "1500",
        img: "https://images.unsplash.com/photo-1574691250077-03a929faece5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      },
    ];

    dispatch({
      type: SEARCH_CATEGORIES,
      payload: category,
    });
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
