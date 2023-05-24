import { FC, useState } from "react";

type GetData = {
  getDays: Function;
};

export const Choose: FC<GetData> = (props: GetData) => {
  const { getDays } = props;

  const [isActive, setIsActive] = useState({
    a: true,
    b: false,
    c: false,
  });

  return (
    <div className="flex flex-row justify-between pt-10">
      <div>
        <button
          className={isActive.a ? btnA : btn}
          onClick={() => {
            setIsActive({ a: true, b: false, c: false });
            getDays(7);
          }}
        >
          Week
        </button>
        <button
          className={isActive.b ? btnA : btn}
          onClick={() => {
            setIsActive({ a: false, b: true, c: false });
            getDays(10);
          }}
        >
          at 10
        </button>
        <button
          className={isActive.c ? btnA : btn}
          onClick={() => {
            setIsActive({ a: false, b: false, c: true });
            getDays(14);
          }}
        >
          at 14 day
        </button>
      </div>
      <div>
        <button className="shadow-md rounded-xl w-40 h-10 font-normal text-lg">
          Cansel
        </button>
      </div>
    </div>
  );
};

const btnA =
  "bg-blue-500 shadow-md rounded-xl  w-40 h-10 text-white font-normal text-lg";
const btn = "shadow-md rounded-xl  w-40 h-10 text-black font-normal text-lg";
