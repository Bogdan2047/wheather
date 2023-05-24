import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StateDataWeek {
  weatherWeek: any;
  isLoading: boolean;
  errors: string;
}

const initialState: StateDataWeek = {
  weatherWeek: null,
  isLoading: false,
  errors: "",
};

const wheatherWeek = createSlice({
  name: "weatherWeek",
  initialState,
  reducers: {
    getWeatherDataWeek(state) {
      state.isLoading = true;
    },
    getWeatherDataWeekSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.weatherWeek = action.payload;
    },
    getWeatherDataWeekError(state, action) {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const {
  getWeatherDataWeek,
  getWeatherDataWeekSuccess,
  getWeatherDataWeekError,
} = wheatherWeek.actions;

export default wheatherWeek.reducer;
