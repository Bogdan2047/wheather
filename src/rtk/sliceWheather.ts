import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StateData {
  wheather: any;
  isLoading: boolean;
  errors: string;
}

const initialState: StateData = {
  wheather: null,
  isLoading: false,
  errors: "",
};

const state = createSlice({
  name: "wheather",
  initialState,
  reducers: {
    getWheatherData(state) {
      state.isLoading = true;
    },
    getWheatherDataSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.wheather = action.payload;
    },
    getWheatherDataError(state, action) {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const { getWheatherData, getWheatherDataSuccess, getWheatherDataError } =
  state.actions;

export default state.reducer;
