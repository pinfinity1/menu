"use client";
import { GetCategoryById } from "@/api/category";
import CategoryIdContext from "@/context/CategoryIdContext";
import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const MenuItemCard = dynamic(async () => await import("./MenuItemCard"));

export const MenuItem = () => {
  const [categoryName, setCategoryName] = useState();
  const [categoryProducts, setCategoryProducts] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useContext(CategoryIdContext);

  useEffect(() => {
    setLoading(true);
    GetCategoryById(categoryId, true)
      .then((res) => {
        setCategoryName(res.name);
        setCategoryProducts(res.products);
        setLoading(false);
      })
      .catch((res) => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="w-full bg-primaryDark backdrop-blur-xl p-3 mb-4 rounded-md">
      <div className="w-full h-0.5 mt-5 mb-8 bg-white rounded-full relative">
        <span className="absolute right-0 -top-5 bg-white mr-4 pl-4 pr-4 py-2 rounded text-primaryDark font-bold">
          {categoryName}
        </span>
      </div>
      {loading ? (
        <div className="w-full h-[400px] flex justify-center items-center">
          <BeatLoader size={20} color="#FFF" />
        </div>
      ) : (
        <>
          {categoryProducts?.map((prod) => {
            return <MenuItemCard key={prod?.id} productDetails={prod} />;
          })}
        </>
      )}
    </div>
  );
};
