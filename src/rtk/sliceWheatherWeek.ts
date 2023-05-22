import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StateDataWeek {
  wheatherWeek: any;
  isLoading: boolean;
  errors: string;
}

const initialState: StateDataWeek = {
  wheatherWeek: null,
  isLoading: false,
  errors: "",
};

const wheatherWeek = createSlice({
  name: "wheatherWeek",
  initialState,
  reducers: {
    getWheatherDataWeek(state) {
      state.isLoading = true;
    },
    getWheatherDataWeekSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.wheatherWeek = action.payload;
    },
    getWheatherDataWeekError(state, action) {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const {
  getWheatherDataWeek,
  getWheatherDataWeekSuccess,
  getWheatherDataWeekError,
} = wheatherWeek.actions;

export default wheatherWeek.reducer;
