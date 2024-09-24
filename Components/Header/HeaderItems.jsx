import CategoryIdContext from "@/context/CategoryIdContext";
import { useContext } from "react";

export const HeaderItems = ({ title, id }) => {
  const { setCategoryId } = useContext(CategoryIdContext);

  const handleContext = () => {
    setCategoryId(id);
  };

  return (
    <div
      onClick={handleContext}
      className="whitespace-nowrap flex flex-col justify-center items-center px-4 py-3 ml-3 rounded bg-white text-primaryDark cursor-pointer"
    >
      <p>{title}</p>
    </div>
  );
};
