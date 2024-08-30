"use client";
import { CategoryForm } from "@/Components/Admin/Category/CategoryForm";
import { ProductForm } from "@/Components/Admin/Product/ProductForm";
import { Loader } from "@/Components/Loader/Loader";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BounceLoader } from "react-spinners";

export default function Admin() {
  const [showForm, setShowFom] = useState("product");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [showForm]);

  return (
    <main className="w-full h-screen max-h-screen bg-primaryDark/30 font-picoopic px-4">
      <div className="h-full flex flex-row-reverse py-16">
        <div className="w-1/3 min-h-[160px] h-fit px-4 pb-4 pt-6 bg-gray-50 rounded-lg shadow-xl">
          <div
            onClick={() => setShowFom("category")}
            className="group text-right bg-gray-200 px-4 py-2 mb-3 rounded-md flex items-center justify-between drop-shadow border hover:bg-gray-300 transition-all duration-100"
          >
            <FaArrowLeft className="w-3 h-3 text-gray-500 group-hover:text-gray-700 group-hover:scale-[110%]" />
            <p>افزودن دسته‌بندی</p>
          </div>
          <div
            onClick={() => setShowFom("product")}
            className="group text-right bg-gray-200 px-4 py-2 mb-3 rounded-md flex items-center justify-between drop-shadow border hover:bg-gray-300 transition-all duration-100"
          >
            <FaArrowLeft className="w-3 h-3 text-gray-500 group-hover:text-gray-700 group-hover:scale-[110%]" />
            <p>افزودن محصول</p>
          </div>
        </div>
        <div className="w-full h-full mr-5 px-4 pb-4 pt-6 rounded-lg bg-gray-50 shadow-xl">
          {loading ? (
            <div className="w-full h-full flex justify-center items-center">
              <BounceLoader color="#015428" />
            </div>
          ) : (
            <>{showForm === "category" ? <CategoryForm /> : <ProductForm />}</>
          )}
        </div>
      </div>
    </main>
  );
}
