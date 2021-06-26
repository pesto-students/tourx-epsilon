import store from ".";

export interface User {
  username: string;
  password: string;
}
export interface InitState {
  selectedState: string;
  selectedCity: string;
  states: [];
  cities: [];
  category: [];
  selectedCategory: [];
  showSignup: boolean;
  credentials: User;
  showWelcomeModal: boolean;
}

export type RootState = ReturnType<typeof store.getState>;
