import { useState } from "react";
import { IconSVG } from "../images/IconSVG";
import { useAppDispatch } from "../hooks/hook";
import { fetchWheather } from "../rtk/actionCreator";

export const Header = () => {
  const [city, setCity] = useState<any>("");
  const dispatch = useAppDispatch();

  const sendCity = () => {
    dispatch(fetchWheather(city));
    setCity("");
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row">
        <IconSVG id="logo-header" />
        <span className="text-3xl font-bold text-blue-500 pt-5 pl-4">
          Wheather
        </span>
      </div>
      <div className="flex flex-row">
        <>
          <IconSVG id="change-color" />
        </>
        <div className="flex flex-row pt-2">
          <div className="h-20 px-5">
            <input
              placeholder="Find city"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCity(e.target.value)
              }
              value={city}
            />
          </div>
          <div>
            <button
              className="bg-blue-500 h-6 w-12 text-white rounded-sm"
              onClick={sendCity}
            >
              Find
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
