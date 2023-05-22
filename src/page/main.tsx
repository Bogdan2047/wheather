import { Temp } from "../components/temp";
import { Metric } from "../components/metric";
import { TimeForecast } from "../components/timeForecast";
import { Choose } from "../components/choose";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { fetchWheather, fetchWheatherWeek } from "../rtk/actionCreator";
import { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export const Main = () => {
  const { wheather, isLoading, errors } = useAppSelector(
    (state) => state.Reducer
  );

  // const { wheatherWeek } = useAppSelector((state) => state.Week);

  const dispatch = useAppDispatch();
  const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;

  useEffect(() => {
    const defaultCity: any = "kyiv";
    dispatch(fetchWheather(defaultCity));
    dispatch(fetchWheatherWeek(defaultCity));
  }, []);

  console.log(wheather);
  // console.log(wheatherWeek);

  return (
    <>
      {isLoading && (
        <div className="pl-96 pt-40">
          <div className="pl-96">
            <Spin indicator={antIcon} />;
          </div>
        </div>
      )}
      {errors && (
        <span className="pl-80">
          <span className="text-4xl text-red-500 font-medium pl-40">
            {errors}
          </span>
        </span>
      )}
      {wheather !== null && (
        <div className="w-full">
          <div className="flex flex-row pt-11">
            <div className=" w-2/5 h-72">
              <Temp {...wheather} />
            </div>
            <div className=" w-3/5 pl-10 h-72">
              <Metric {...wheather} />
            </div>
          </div>
          <div className="w-full">
            <Choose />
          </div>
          <div className="w-full">
            <TimeForecast {...wheather} />
          </div>
        </div>
      )}
    </>
  );
};
