import {
  GET_WEATHER_WEEK_DATA,
  GET_WEATHER_WEEK_DATA_ERROR,
  GET_WEATHER_WEEK_DATA_SUCCESS,
} from "./types";

interface StateData {
  weatherWeek: any;
  isLoadingWeek: boolean;
  errorsWeek: string;
}

const initialState: StateData = {
  weatherWeek: null,
  isLoadingWeek: false,
  errorsWeek: "",
};

export const ReducerWeatherWeek = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_WEATHER_WEEK_DATA:
      return { ...state, isLoadingWeek: false };
    case GET_WEATHER_WEEK_DATA_SUCCESS:
      return { ...state, weatherWeek: action.payload, isLoadingWeek: false };
    case GET_WEATHER_WEEK_DATA_ERROR:
      return { ...state, errorsWeek: action.payload, isLoadingWeek: false };
    default:
      return state;
  }
};
