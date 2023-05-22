import { IconSVG } from "../images/IconSVG";
import { Cards } from "./cards";

type Arr = {
  id: number;
  dayWeek: string;
  date: any;
  img: any;
  tempDay: any;
  tempNigth: any;
  cloudiness: string;
};

const wheatherForecast: Arr[] = [
  {
    id: 1,
    dayWeek: "today",
    date: "20 may",
    img: <IconSVG id="cloudiness" />,
    tempDay: "+18°",
    tempNigth: "+16°",
    cloudiness: "clouds",
  },
  {
    id: 2,
    dayWeek: "tommorow",
    date: "21 may",
    img: <IconSVG id="good" />,
    tempDay: "+18°",
    tempNigth: "+11°",
    cloudiness: "clouds",
  },
  {
    id: 3,
    dayWeek: "mon",
    date: "22 may",
    img: <IconSVG id="cloudiness" />,
    tempDay: "+18°",
    tempNigth: "+18°",
    cloudiness: "clouds",
  },
  {
    id: 4,
    dayWeek: "whu",
    date: "23 may",
    img: <IconSVG id="cloudiness" />,

    tempDay: "+10°",
    tempNigth: "+16°",
    cloudiness: "clouds",
  },
  {
    id: 5,
    dayWeek: "wen",
    date: "24 may",
    img: <IconSVG id="good" />,

    tempDay: "+15°",
    tempNigth: "+14°",
    cloudiness: "clouds",
  },
  {
    id: 6,
    dayWeek: "thur",
    date: "25 may",
    img: <IconSVG id="good" />,

    tempDay: "+19°",
    tempNigth: "+12°",
    cloudiness: "clouds",
  },
  {
    id: 7,
    dayWeek: "fri",
    date: "26 may",
    img: <IconSVG id="cloudiness" />,

    tempDay: "+14°",
    tempNigth: "+16°",
    cloudiness: "clouds",
  },
];

export const TimeForecast = () => {
  return (
    <div className="w-full flex flex-row justify-between pt-10">
      {wheatherForecast.map((item: any) => (
        <Cards
          key={item.id}
          id={item.id}
          dayWeek={item.dayWeek}
          date={item.date}
          img={item.img}
          tempDay={item.tempDay}
          tempNigth={item.tempNigth}
          cloudiness={item.cloudiness}
        />
      ))}
    </div>
  );
};
