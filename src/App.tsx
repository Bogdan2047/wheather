import React, { useEffect, useState } from "react";
import "./App.css";
import { Main } from "./page/main";
import { Header } from "./components/header";
import { fetchWeather, fetchWeatherWeek } from "./rtk/actionCreator";
import { useAppDispatch } from "./hooks/hook";

function App() {
  const [city, setCity] = useState<any>("Kiev");
  const [days, setDays] = useState<any>(14);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeather(city));
    dispatch(fetchWeatherWeek({ city, days }));
  }, []);

  const getCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const getDays = (days: number) => {
    setDays(days);
    dispatch(fetchWeatherWeek({ city, days }));
  };

  const sendCity = () => {
    dispatch(fetchWeather(city));
    dispatch(fetchWeatherWeek({ city, days }));
  };

  return (
    <div className="container md:w-4/5 m-auto pt-5 ">
      <Header sendCity={sendCity} getCity={getCity} />
      <Main getDays={getDays} />
    </div>
  );
}

export default App;
