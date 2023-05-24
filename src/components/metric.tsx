import { FC } from "react";
import cloud from "../images/cloud.png";
import { IconSVG } from "../images/IconSVG";

interface Props {
  temp_c: number;
  feelslike_c: number;
  humidity: number;
  pressure_mb: number;
  wind_kph: number;
}

export const Metric: FC<Props> = (props: Props) => {
  const { temp_c, feelslike_c, humidity, pressure_mb, wind_kph } = props;

  return (
    <div className="shadow-md rounded-2xl flex flex-row justify-between">
      <div className="relative pt-12 pl-8 w-full ">
        <div className="flex pt-0.5">
          <IconSVG id="temp" />
          <span className="pl-5 text-sm text-stone-500">Temperature</span>
          <span className="pl-5 text-sm">
            {temp_c}° - feels like {feelslike_c}°
          </span>
        </div>
        <div className="flex pt-5">
          <IconSVG id="press" />
          <span className="pl-7 text-sm text-stone-500">Pressure</span>
          <span className="pl-12 text-sm">{pressure_mb} мм mercury column</span>
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
            <span className="pl-3">{wind_kph} м/с</span>
          </span>
        </div>
      </div>
      <div className="w-full absolute 2xl:pl-76 md:pl-28">
        <div className="2xl:pl-24">
          <img
            className="md:pl-10"
            style={{ width: "40%" }}
            src={cloud}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
