import { Category } from "../containers/WelcomeGuide/PickPreferences/PickPreferences.interface";

export interface InitState {
  selectedCity: string;
  selectedState: string;
  states: [];
  cities: [];
  category: Category[];
  selectedCategory: Category[];
}

export interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}
