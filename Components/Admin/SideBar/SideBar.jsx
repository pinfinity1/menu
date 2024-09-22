"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideBar = () => {
  const path = usePathname();

  return (
    <div className="w-full md:w-[140px] h-[72px] md:h-full px-4 pt-2 md:pt-4 md:border-l-2">
      <div className="w-full h-full flex flex-row-reverse md:flex-col gap-4 xl:max-h-full px-2 py-2 md:p-0 border rounded-lg bg-primaryDark/5 shadow md:shadow-none md:bg-transparent md:border-none md:rounded-none overflow-x-auto scrollbar-hide">
        <Link
          href={"category"}
          className={`whitespace-nowrap text-right text-sm px-4 py-3 flex items-center justify-end rounded-md drop-shadow border transition-all duration-100 cursor-pointer ${
            path.split("/")[1] === "category"
              ? "bg-primaryDark/50 hover:bg-primaryDark/70"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          دسته‌بندی
        </Link>
        <Link
          href={"product"}
          className={`whitespace-nowrap text-right text-sm px-4 py-3 flex items-center justify-end rounded-md  drop-shadow border transition-all duration-100 cursor-pointer ${
            path.split("/")[1] === "product"
              ? "bg-primaryDark/50 hover:bg-primaryDark/70"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          محصول
        </Link>
      </div>
    </div>
  );
};
