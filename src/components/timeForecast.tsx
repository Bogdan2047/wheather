import { FC } from "react";
import { Cards } from "./cards";

type Cond = {
  text: string;
  icon: string;
};

type DayType = {
  condition: Cond;
  mintemp_c: number;
  maxtemp_c: number;
};

type Forecatsdays = {
  date_epoch: number;
  date: string;
  day: DayType;
};

interface Props {
  forecastday: Forecatsdays[];
}

export const TimeForecast: FC<Props> = ({ forecastday }: Props) => {
  return (
    <div className="w-full flex flex-wrap justify-between pt-10">
      {forecastday.map((item: Forecatsdays) => {
        return (
          <Cards
            key={item.date_epoch}
            id={item.date_epoch}
            date={item.date}
            img={item.day.condition.icon}
            tempDay={item.day.maxtemp_c}
            tempNigth={item.day.mintemp_c}
            cloudiness={item.day.condition.text}
          />
        );
      })}
    </div>
  );
};
