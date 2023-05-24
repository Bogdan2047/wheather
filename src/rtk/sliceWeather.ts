import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StateData {
  weather: any;
  isLoading: boolean;
  errors: string;
}

const initialState: StateData = {
  weather: null,
  isLoading: false,
  errors: "",
};

const state = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeatherData(state) {
      state.isLoading = true;
    },
    getWeatherDataSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.weather = action.payload;
    },
    getWeatherDataError(state, action) {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const { getWeatherData, getWeatherDataSuccess, getWeatherDataError } =
  state.actions;

export default state.reducer;
