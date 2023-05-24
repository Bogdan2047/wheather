import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Reducer from "./sliceWeather";
import Week from "./sliceWeatherWeek";

const RootReducer = combineReducers({
  Reducer,
  Week,
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
