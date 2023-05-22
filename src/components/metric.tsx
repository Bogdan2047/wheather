import { FC } from "react";
import cloud from "../images/cloud.png";
import { IconSVG } from "../images/IconSVG";

type Main = {
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
};

type Wind = {
  speed: number;
};

interface Props {
  main: Main;
  wind: Wind;
}

export const Metric: FC<Props> = ({ main, wind }) => {
  const { temp, feels_like, humidity, pressure } = main;
  const { speed } = wind;

  return (
    <div className="shadow-md rounded-2xl flex flex-row justify-between">
      <div className="relative pt-12 pl-8 w-full ">
        <div className="flex pt-0.5">
          <IconSVG id="temp" />
          <span className="pl-5 text-sm text-stone-500">Temperature</span>
          <span className="pl-5 text-sm">
            {Math.ceil(temp / 10)}° - feels like {Math.floor(feels_like / 10)}°
          </span>
        </div>
        <div className="flex pt-5">
          <IconSVG id="press" />
          <span className="pl-7 text-sm text-stone-500">Pressure</span>
          <span className="pl-12 text-sm">{pressure} мм mercury column</span>
        </div>
        <div className="flex pt-5">
          <IconSVG id="presip" />
          <span className="pl-7 text-sm text-stone-500">Humidity</span>
          <span className="pl-12 text-sm">{humidity}</span>
        </div>
        <div className="flex pt-5 pb-24">
          <IconSVG id="wind" />
          <span className="pl-7 text-sm text-stone-500">Wind</span>
          <span className="pl-16 text-sm">
            <span className="pl-3">{speed} м/с</span>
          </span>
        </div>
      </div>
      <div className="w-full absolute 2xl:pl-80 md:pl-28">
        <img className="2xl:pl-32 md:pl-3" src={cloud} alt="" />
      </div>
    </div>
  );
};
