import { Temp } from "../components/temp";
import { Metric } from "../components/metric";
import { TimeForecast } from "../components/timeForecast";
import { Choose } from "../components/choose";
import { useAppSelector } from "../hooks/hook";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { FC } from "react";

type GetDays = {
  getDays: (param: number) => void;
};

export const Main: FC<GetDays> = ({ getDays }: GetDays) => {
  const { weather, isLoading, errors } = useAppSelector(
    (state) => state.ReducerWeather
  );

  const { weatherWeek, isLoadingWeek } = useAppSelector(
    (state) => state.ReducerWeatherWeek
  );

  const forecast = weatherWeek?.forecast;
  const current = weather?.current;
  const location = weather?.location;

  console.log(current);
  console.log(location);

  const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;

  return (
    <>
      {isLoading && (
        <div className="2xl:pl-96 md:pl-32 pt-40">
          <div className="pl-96">
            <Spin indicator={antIcon} />;
          </div>
        </div>
      )}
      {errors && (
        <span className="2xl:pl-80 md:pl-20">
          <span className="text-4xl text-red-500 font-medium pl-40">
            {errors}
          </span>
        </span>
      )}
      {weather !== null && (
        <div className="w-full">
          <div className="flex flex-row pt-11">
            <div className=" w-2/5 h-72">
              <Temp {...location} {...current} />
            </div>
            <div className=" w-3/5 pl-10 h-72">
              <Metric {...current} />
            </div>
          </div>
          <div className="w-full">
            <Choose getDays={getDays} />
          </div>
        </div>
      )}
      {isLoadingWeek && (
        <div className="2xl:pl-96 md:pl-32 pt-40">
          <div className="pl-96">
            <Spin indicator={antIcon} />;
          </div>
        </div>
      )}
      {weatherWeek !== null && (
        <div className="w-full">
          <TimeForecast {...forecast} />
        </div>
      )}
    </>
  );
};
