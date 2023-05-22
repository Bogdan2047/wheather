export const Choose = () => {
  return (
    <div className="flex flex-row justify-between pt-10">
      <div>
        <button className="shadow-md rounded-xl bg-blue-500 w-40 h-10 text-white font-normal text-lg">
          Week
        </button>
        <button className=" w-40 h-10 shadow-md rounded-xl mx-5 font-normal text-lg">
          Month
        </button>
        <button className="shadow-md rounded-xl w-40 h-10 font-normal text-lg">
          at 10 day
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
