"use client";
import { PostCategory } from "@/api/category";
import { useState } from "react";
import { GoInfo } from "react-icons/go";
import { HashLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CategoryForm() {
  const [cateogryName, setCategoryName] = useState({
    name: "",
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  const router = useRouter();

  const submitCategory = (e) => {
    setSubmitLoading(true);
    if (!cateogryName.name) {
      toast.error("لطفا دسته بندی را اضافه کنید");
      setSubmitLoading(false);
      return;
    }

    PostCategory({ ...cateogryName })
      .then((res) => {
        toast.success("موفقیت آمیز");
        setSubmitLoading(false);
      })
      .catch((er) => {
        toast.error("لطفا مجددا تلاش فرمایید");
        setSubmitLoading(false);
      });
    setCategoryName({ ...cateogryName, name: "" });
  };

  return (
    <div dir="rtl" className="w-full">
      <div className="relative w-full h-[2px] bg-primaryDark rounded-full mt-4 mb-8">
        <span className="bg-white text-sm px-4 absolute right-3 -top-3">
          فرم افزودن دسته‌بندی‌
        </span>
      </div>
      <p className="text-right text-xs xl:text-sm flex bg-primary/20 text-primaryDark p-4 rounded">
        <GoInfo className="w-10 mt-1 ml-2" />
        اگر میخواهید دسته بندی جدیدی از محصولات را وارد کنید لطفا ابتدا دسته
        بندی را اینجا ثبت کرده و سپس به افزودن محصول بروید و محصولات مرتبط با
        این زیرمجموعه را وارد کنید
      </p>

      <div className="flex flex-col md:flex-row gap-5 w-full mt-4 bg-white">
        <form
          onSubmit={submitCategory}
          className="w-full flex flex-col p-4 border rounded"
        >
          <div className="w-full mb-8">
            <label className="mb-2.5 block font-bold text-black mr-1">
              افزودن دسته بندی
            </label>
            <div className="relative">
              <input
                onChange={(e) =>
                  setCategoryName({ ...cateogryName, name: e.target.value })
                }
                name="name"
                value={cateogryName.name}
                type="text"
                placeholder="دسته بندی"
                className="w-full text-right rounded-lg border border-stroke px-3 py-3 text-black outline-none  "
              />
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              disabled={submitLoading}
              className="cursor-pointer h-[36px] w-[120px] text-sm xl:text-base shadow-md px-8 py-2 text-nowrap bg-primaryDark/50 rounded hover:bg-primaryDark/70  transition-all duration-150 flex justify-center items-center"
            >
              {!submitLoading ? "ثبت" : <HashLoader size={14} />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
