import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import Reducer from "./sliceWeather";
// import Week from "./sliceWeatherWeek";
import { ReducerWeather } from "./reducerWeather";
import { ReducerWeatherWeek } from "./reducerWeatherWeek";

const RootReducer = combineReducers({
  ReducerWeather,
  ReducerWeatherWeek,
});

export const setupStore = () => {
  return configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type RootState = ReturnType<typeof RootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
