import {
  GET_WEATHER_DATA,
  GET_WEATHER_DATA_ERROR,
  GET_WEATHER_DATA_SUCCESS,
} from "./types";

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

export const ReducerWeather = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return { ...state, loading: false };
    case GET_WEATHER_DATA_SUCCESS:
      return { ...state, weather: action.payload, loading: false };
    case GET_WEATHER_DATA_ERROR:
      return { ...state, errors: action.payload, loading: false };
    default:
      return state;
  }
};
