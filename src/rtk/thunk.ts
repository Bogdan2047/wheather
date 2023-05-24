import axios from "axios";
import { AppDispatch } from "./index";
import {
  getWeatherData,
  getWeatherDataError,
  getWeatherDataSuccess,
  getWeatherWeekData,
  getWeatherWeekDataError,
  getWeatherWeekDataSuccess,
} from "./actionType";

interface City {
  defaultCity: string;
}

interface CityDays {
  city: string;
  days?: number;
}

export const fetchWeather = (props: City) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getWeatherData());
    const res = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=8e7c5f78f33543508c571114232305&q=${props}&aqi=no`
    );
    dispatch(getWeatherDataSuccess(res.data));
  } catch (e: any) {
    dispatch(getWeatherDataError(e.message));
  }
};

export const fetchWeatherWeek =
  (props: CityDays) => async (dispatch: AppDispatch) => {
    const { city, days } = props;

    try {
      dispatch(getWeatherWeekData());
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=8e7c5f78f33543508c571114232305&q=${city}&days=${days}&aqi=no&alerts=no`
      );
      dispatch(getWeatherWeekDataSuccess(res.data));
    } catch (e: any) {
      dispatch(getWeatherWeekDataError(e.message));
    }
  };
