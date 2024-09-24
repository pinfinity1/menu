"use client";
import { useContext, useEffect, useState } from "react";
import { HeaderItems } from "./HeaderItems";
import { GetCategory } from "@/api/category";
import CategoryIdContext from "@/context/CategoryIdContext";

export const Header = () => {
  const [category, setCategory] = useState();
  const { setCategoryId } = useContext(CategoryIdContext);

  useEffect(() => {
    GetCategory().then((res) => {
      setCategory(res);
      setCategoryId(res?.[0]?.id);
    });
  }, []);

  return (
    <header className="w-full sticky top-6 z-50 flex flex-row-reverse items-center pr-3 py-4 mt-5 mb-8 rounded-md overflow-x-auto scrollbar-hide bg-primary/25 backdrop-blur-xl drop-shadow-md shadow-lg">
      {category?.map((cat) => {
        return <HeaderItems key={cat.id} title={cat.name} id={cat.id} />;
      })}
    </header>
  );
};
