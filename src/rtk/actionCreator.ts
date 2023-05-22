import axios from "axios";
import { AppDispatch } from "./index";
import {
  getWheatherData,
  getWheatherDataError,
  getWheatherDataSuccess,
} from "./sliceWheather";
import {
  getWheatherDataWeek,
  getWheatherDataWeekError,
  getWheatherDataWeekSuccess,
} from "./sliceWheatherWeek";

interface City {
  city: string;
}

export const fetchWheather = (props: City) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getWheatherData());
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${props}&appid=7f822e46c40ce4e405054e70ffeb1740`
    );
    dispatch(getWheatherDataSuccess(res.data));
  } catch (e: any) {
    dispatch(getWheatherDataError(e.message));
  }
};

export const fetchWheatherWeek =
  (props: City) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getWheatherDataWeek());
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${props}&units=metric&cnt=7&appid=7f822e46c40ce4e405054e70ffeb1740`
      );
      dispatch(getWheatherDataWeekSuccess(res.data));
    } catch (e: any) {
      dispatch(getWheatherDataWeekError(e.message));
    }
  };
