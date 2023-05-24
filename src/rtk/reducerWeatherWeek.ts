import {
  GET_WEATHER_WEEK_DATA,
  GET_WEATHER_WEEK_DATA_ERROR,
  GET_WEATHER_WEEK_DATA_SUCCESS,
} from "./types";

interface StateData {
  weatherWeek: any;
  isLoading: boolean;
  errors: string;
}

const initialState: StateData = {
  weatherWeek: null,
  isLoading: false,
  errors: "",
};

export const ReducerWeatherWeek = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_WEATHER_WEEK_DATA:
      return { ...state, loading: false };
    case GET_WEATHER_WEEK_DATA_SUCCESS:
      return { ...state, weatherWeek: action.payload, loading: false };
    case GET_WEATHER_WEEK_DATA_ERROR:
      return { ...state, errors: action.payload, loading: false };
    default:
      return state;
  }
};
