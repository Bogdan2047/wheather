import { FC } from "react";

type Cond = {
  icon: string;
};

interface Props {
  name: string;
  localtime: string;
  temp_c: string;
  condition: Cond;
}

export const Temp: FC<Props> = (props: Props) => {
  const { name, localtime, temp_c, condition } = props;
  const { icon } = condition;
  return (
    <div className="shadow-md rounded-2xl pl-10 pt-11">
      <div className="flex flex-row justify-between w-11/12">
        <div className="flex flex-col">
          <span className="font-medium text-8xl text-blue-500 ">{temp_c}°</span>
          <span className="font-normal text-4xl">today</span>
        </div>
        <div>
          <img style={{ width: "100px" }} src={`https://${icon}`} alt="" />
        </div>
      </div>
      <div className="flex flex-col pt-8 pb-5 ">
        <span className="font-normal text-2xl text-stone-500">
          Time: {localtime}
        </span>
        <span className="font-normal text-2xl text-stone-500">
          City: {name}
        </span>
      </div>
    </div>
  );
};
