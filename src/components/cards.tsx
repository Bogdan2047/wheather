import { FC } from "react";

interface Props {
  id: number;
  dayWeek: string;
  date: any;
  img: any;
  tempDay: any;
  tempNigth: any;
  cloudiness: string;
}

export const Cards: FC<Props> = (props: Props) => {
  const { id, dayWeek, date, img, tempDay, tempNigth, cloudiness } = props;
  return (
    <div
      className="bg-blue-100 flex flex-col 2xl:h-60 2xl:w-52 md:w-36 pl-5 pt-2.5 shadow-md rounded-xl mb-5"
      key={id}
    >
      <span className="font-medium text-lg">{dayWeek}</span>
      <span className="font-normal text-sm text-stone-400">{date}</span>
      <span className="h-20 pt-5">{img}</span>
      <span className="font-medium text-lg">{tempDay}</span>
      <span className="font-normal text-ml text-stone-400">{tempNigth}</span>
      <span className="font-normal text-lg text-stone-400">{cloudiness}</span>
    </div>
  );
};
