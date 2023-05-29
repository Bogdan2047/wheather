import { FC } from "react";

interface Props {
  id: number;
  date: string;
  img: string;
  tempDay: number;
  tempNigth: number;
  cloudiness: string;
}

export const Cards: FC<Props> = ({
  id,
  date,
  img,
  tempDay,
  tempNigth,
  cloudiness,
}: Props) => {
  return (
    <div
      className="bg-blue-100 flex flex-col 2xl:h-60 2xl:w-52 md:w-36 pl-5 pt-2.5 shadow-md rounded-xl mb-5"
      key={id}
    >
      <span className="font-normal text-sm text-stone-400">{date}</span>
      <span className="h-24 pt-5 ">
        <img src={`https://${img}`} alt="" />
      </span>
      <span className="font-medium text-lg">{tempDay}</span>
      <span className="font-normal text-ml text-stone-400">{tempNigth}</span>
      <span className="font-normal text-lg text-stone-400 pt-5">
        {cloudiness}
      </span>
    </div>
  );
};
