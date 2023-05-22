import { FC } from "react";
import { IconSVG } from "../images/IconSVG";

type Main = {
  temp: number;
};

interface Props {
  name: string;
  main: Main;
}

export const Temp: FC<Props> = ({ name, main }) => {
  const x = new Date();

  const { temp } = main;
  return (
    <div className="shadow-md rounded-2xl pl-10 pt-11">
      <div className="flex flex-row justify-between w-11/12">
        <div className="flex flex-col">
          <span className="font-medium text-8xl text-blue-500 ">
            {Math.ceil(temp / 10)}°
          </span>
          <span className="font-normal text-4xl">today</span>
        </div>
        <div>
          <IconSVG id="sun" />
        </div>
      </div>
      <div className="flex flex-col pt-8 pb-5 ">
        <span className="font-normal text-2xl text-stone-500">
          Time: {x.getHours()}:{x.getMinutes()}
        </span>
        <span className="font-normal text-2xl text-stone-500">
          Sity: {name}
        </span>
      </div>
    </div>
  );
};
