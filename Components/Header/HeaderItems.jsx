import CategoryIdContext from "@/context/CategoryIdContext";
import { useContext } from "react";

export const HeaderItems = ({ title, id }) => {
  const { categoryId, setCategoryId } = useContext(CategoryIdContext);

  const handleContext = () => {
    setCategoryId(id);
  };

  return (
    <div
      onClick={handleContext}
      className={`whitespace-nowrap flex flex-col justify-center items-center px-4 py-3 ml-3 rounded  cursor-pointer transition-all duration-150
        ${
          categoryId === id
            ? "bg-primaryDark text-white"
            : "bg-white text-primaryDark"
        }`}
    >
      <p>{title}</p>
    </div>
  );
};
