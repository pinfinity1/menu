"use client";
import { MainSection } from "@/Components/Admin/MainSection";
import useIsMobile from "@/utils/useIsMobile";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BounceLoader } from "react-spinners";

const DesktopOnly = ({ children }) => {
  const isMobile = useIsMobile();

  if (isMobile)
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-black/10 backdrop-blur">
        <p>please login with desktop</p>
      </div>
    );

  return <>{children}</>;
};

export default function Admin() {
  const [showForm, setShowFom] = useState("product");
  const [loading, setLoading] = useState(false);
  const [showFormDropDown, setShowFormDropDown] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [showForm]);

  return (
    <main className="w-full min-h-screen  bg-primaryDark/30 px-4">
      <div className="w-full h-full xl:flex xl:flex-row-reverse py-3 md:py-16">
        <div className="w-full h-fit flex flex-row-reverse xl:flex-col gap-4 xl:w-1/3 xl:h-fit xl:max-h-full px-2 py-2 xl:p-4 mb-4 bg-gray-50 rounded-lg shadow overflow-x-auto scrollbar-hide">
          <div
            onClick={() => setShowFom("category")}
            className="group whitespace-nowrap text-right text-sm xl:text-base bg-gray-200 px-4 py-2 rounded-md flex items-center justify-between gap-2 drop-shadow border hover:bg-gray-300 transition-all duration-100 cursor-pointer"
          >
            <FaArrowLeft className="w-3 h-3 mt-0.5 text-gray-500 group-hover:text-gray-700 group-hover:scale-[110%]" />
            <p>دسته‌بندی</p>
          </div>
          <div
            onClick={() => setShowFom("product")}
            className="group whitespace-nowrap text-right text-sm xl:text-base bg-gray-200 px-4 py-2 rounded-md flex items-center justify-between gap-2 drop-shadow border hover:bg-gray-300 transition-all duration-100 cursor-pointer"
          >
            <FaArrowLeft className="w-3 h-3 mt-0.5 text-gray-500 group-hover:text-gray-700 group-hover:scale-[110%]" />
            <p>محصول</p>
          </div>
        </div>
        <div className="w-full h-full mr-5 p-4 rounded-lg bg-gray-50 shadow-xl">
          {loading ? (
            <div className="w-full h-[400px] flex justify-center items-center">
              <BounceLoader color="#6b7280" />
            </div>
          ) : (
            <>
              <MainSection selectedFromMenu={showForm} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
