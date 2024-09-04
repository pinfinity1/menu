"use client";
import { PostCategory } from "@/api/category";
import { useState } from "react";
import { GoInfo } from "react-icons/go";
import { IoIosCloseCircle } from "react-icons/io";

export default function CategoryForm() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [cateogryName, setCategoryName] = useState({
    name: "",
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  const submitCategory = (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    console.log(cateogryName);

    PostCategory({ ...cateogryName }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div dir="rtl" className="w-full h-full relative">
      <p className="text-right text-sm flex items-center bg-primary/20 text-primaryDark p-4 rounded">
        <GoInfo className="w-8 h-8 ml-6" />
        اگر میخواهید دسته بندی جدیدی از محصولات را وارد کنید لطفا ابتدا دسته
        بندی را اینجا ثبت کرده و سپس به افزودن محصول بروید و محصولات مرتبط با
        این زیرمجموعه را وارد کنید
      </p>

      <div className="flex gap-5 w-full h-[calc(100%_-_92px)] mt-4">
        <form
          onSubmit={submitCategory}
          className="w-1/2 flex flex-col p-4 border rounded"
        >
          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black mr-1">
              افزودن دسته بندی
            </label>
            <div className="relative">
              <input
                onChange={(e) =>
                  setCategoryName({ ...cateogryName, name: e.target.value })
                }
                name="category"
                type="text"
                placeholder="دسته بندی"
                className="w-full text-right rounded-lg border border-stroke shadow-md px-4 py-3 text-black outline-none  "
              />
            </div>
          </div>
          <div className="w-full flex justify-end mt-auto">
            <button
              type="submit"
              // disabled={loading}
              className="cursor-pointer shadow-md px-8 py-2 text-nowrap bg-primaryDark/50 rounded hover:bg-primaryDark/70  transition-all duration-150"
            >
              {/* {!loading ? "ثبت" : <HashLoader size={20} color="#1C2434" />} */}
              ثبت
            </button>
          </div>
        </form>
        <div className="flex-1 h-fit px-4 py-2 border rounded">
          <div className="flex justify-between items-center">
            <p>برای حذف دسته بندی کلیک کنید</p>
            <div
              onClick={() => setShowDeleteModal((prev) => !prev)}
              className="px-4 py-2 rounded bg-red-50 hover:bg-red-100 text-red-500 cursor-pointer text-sm"
            >
              حذف
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <div className="w-full h-full absolute top-0 left-0 bg-black/10 backdrop-blur rounded overflow-hidden">
          <div className="w-full p-4">
            <IoIosCloseCircle
              onClick={() => setShowDeleteModal((prev) => !prev)}
              className="w-6 h-6 mr-auto text-gray-600 hover:text-gray-900 transition-all cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
