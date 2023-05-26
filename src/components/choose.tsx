import { FC, useState } from "react";
const btnA =
  "bg-blue-500 shadow-md rounded-xl  w-40 h-10 text-white font-normal text-lg";
const btn = "shadow-md rounded-xl  w-40 h-10 text-black font-normal text-lg";

type GetData = {
  getDays: (param: number) => void;
};

export const Choose: FC<GetData> = ({ getDays }: GetData) => {
  const [changeButton, setChangeButton] = useState({
    week: true,
    tenDays: false,
    fourteenDays: false,
  });

  return (
    <div className="flex flex-row justify-between pt-10">
      <div>
        <button
          className={changeButton.week ? btnA : btn}
          onClick={() => {
            setChangeButton({
              week: true,
              tenDays: false,
              fourteenDays: false,
            });
            getDays(7);
          }}
        >
          Week
        </button>
        <button
          className={changeButton.tenDays ? btnA : btn}
          onClick={() => {
            setChangeButton({
              week: false,
              tenDays: true,
              fourteenDays: false,
            });
            getDays(10);
          }}
        >
          at 10
        </button>
        <button
          className={changeButton.fourteenDays ? btnA : btn}
          onClick={() => {
            setChangeButton({
              week: false,
              tenDays: false,
              fourteenDays: true,
            });
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
