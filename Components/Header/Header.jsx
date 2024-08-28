import { HeaderItems } from "./HeaderItems";

export const Header = () => {
  return (
    <header className="w-full flex flex-row-reverse items-center pr-3 py-3 mt-5 mb-8 rounded-md overflow-x-auto scrollbar-hide bg-primary/25 backdrop-blur-xl drop-shadow-md shadow-lg">
      <HeaderItems title={"همبرگر"} />
      <HeaderItems title={"پیتزا"} />
      <HeaderItems title={"ساندویچ"} />
      <HeaderItems title={"استرامبولی"} />
      <HeaderItems title={"نوشیدنی"} />
    </header>
  );
};
