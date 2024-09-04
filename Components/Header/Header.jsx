"use client";
import { useEffect } from "react";
import { HeaderItems } from "./HeaderItems";
import { GetCategory } from "@/api/category";

export const Header = () => {
  useEffect(() => {
    GetCategory().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <header className="w-full sticky top-6 z-50 flex flex-row-reverse items-center pr-3 py-3 mt-5 mb-8 rounded-md overflow-x-auto scrollbar-hide bg-primary/25 backdrop-blur-xl drop-shadow-md shadow-lg">
      <HeaderItems title={"همبرگر"} />
      <HeaderItems title={"پیتزا"} />
      <HeaderItems title={"ساندویچ"} />
      <HeaderItems title={"استرامبولی"} />
      <HeaderItems title={"پیش غذا"} />
      <HeaderItems title={"نوشیدنی"} />
    </header>
  );
};
