"use client";
import { PostCategory } from "@/api/category";
import { useState } from "react";
import { GoInfo } from "react-icons/go";
import { Modal } from "../Modal";
import { DeleteCategory } from "./DeleteCategory";
import { HashLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function CategoryForm() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [cateogryName, setCategoryName] = useState({
    name: "",
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  const submitCategory = (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    if (!cateogryName.name) {
      toast.error("لطفا دسته بندی را اضافه کنید");
      setSubmitLoading(false);
      return;
    }

    PostCategory({ ...cateogryName }).then((res) => {
      toast.success("موفقیت آمیز");
      setSubmitLoading(false);
    });
    setCategoryName({ ...cateogryName, name: "" });
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
                name="name"
                value={cateogryName.name}
                type="text"
                placeholder="دسته بندی"
                className="w-full text-right rounded-lg border border-stroke shadow-md px-4 py-3 text-black outline-none  "
              />
            </div>
          </div>
          <div className="w-full flex justify-end mt-auto">
            <button
              type="submit"
              disabled={submitLoading}
              className="cursor-pointer shadow-md px-8 py-2 text-nowrap bg-primaryDark/50 rounded hover:bg-primaryDark/70  transition-all duration-150 flex justify-center items-center"
            >
              {!submitLoading ? "ثبت" : <HashLoader size={18} />}
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
        <Modal closeModal={() => setShowDeleteModal((prev) => !prev)}>
          <DeleteCategory />
        </Modal>
      )}
    </div>
  );
}
