import {
  GET_WEATHER_DATA,
  GET_WEATHER_DATA_ERROR,
  GET_WEATHER_DATA_SUCCESS,
  GET_WEATHER_WEEK_DATA,
  GET_WEATHER_WEEK_DATA_ERROR,
  GET_WEATHER_WEEK_DATA_SUCCESS,
} from "./types";

export const getWeatherData = () => ({
  type: GET_WEATHER_DATA,
});

export const getWeatherDataSuccess = (payload: any) => ({
  type: GET_WEATHER_DATA_SUCCESS,
  payload,
});

export const getWeatherDataError = (payload: any) => ({
  type: GET_WEATHER_DATA_ERROR,
  payload,
});

export const getWeatherWeekData = () => ({
  type: GET_WEATHER_WEEK_DATA,
});

export const getWeatherWeekDataSuccess = (payload: any) => ({
  type: GET_WEATHER_WEEK_DATA_SUCCESS,
  payload,
});

export const getWeatherWeekDataError = (payload: any) => ({
  type: GET_WEATHER_WEEK_DATA_ERROR,
  payload,
});
