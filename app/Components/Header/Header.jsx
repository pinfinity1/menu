import {
  GiDrinking,
  GiFullPizza,
  GiHamburger,
  GiSandwich,
} from "react-icons/gi";

export const Header = () => {
  return (
    <header className="flex flex-row-reverse items-centerpr-4 pr-3 py-3 mx-4 mt-10 rounded-xl overflow-x-auto scrollbar-hide bg-white/20 backdrop-blur-xl drop-shadow-md shadow-lg">
      <div className="whitespace-nowrap flex flex-col justify-center items-center px-3 py-2 ml-3 rounded-lg bg-white">
        <GiHamburger className="w-6 h-6" />
        <p>Hamburger</p>
      </div>
      <div className="  whitespace-nowrap flex flex-col justify-center items-center px-3 py-2 ml-3 rounded-lg bg-white">
        <GiFullPizza className="w-6 h-6" />
        <p>Pizza</p>
      </div>
      <div className="  whitespace-nowrap flex flex-col justify-center items-center px-3 py-2 ml-3 rounded-lg bg-white">
        <GiSandwich className="w-6 h-6" />
        <p>Sandwitch</p>
      </div>
      <div className="  whitespace-nowrap flex flex-col justify-center items-center px-3 py-2 ml-3 rounded-lg bg-white">
        <GiDrinking className="w-6 h-6" />
        <p>Drink</p>
      </div>
      {/* <div className="  whitespace-nowrap flex flex-col justify-center items-center  px-3 py-2 ml-4 rounded-lg">
        item5
      </div> */}
    </header>
  );
};
