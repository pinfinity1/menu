import { UpdateCategory } from "@/api/category";
import { useState } from "react";
import toast from "react-hot-toast";

export const EditCategory = ({ categoryDetail, closeModal, reFetch }) => {
  const [editedCategory, setEditedCategory] = useState({ ...categoryDetail });

  const submitEditCategory = async (e) => {
    e.preventDefault();
    await UpdateCategory(editedCategory.id, { ...editedCategory })
      .then((res) => {
        toast.success("موفقیت‌آمیز");
      })
      .catch((er) => {
        toast.error("لطفا مجددا تلاش فرمایید");
      });
    await reFetch();
    await closeModal();
  };

  return (
    <div className="w-full">
      <div className="w-full bg-white p-4 rounded-lg border">
        <form onSubmit={submitEditCategory} dir="rtl" className="w-full">
          <div className="w-full mb-8 text-sm md:text-base">
            <label className="mb-2.5 block font-medium text-black mr-1">
              ویرایش دسته‌بندی‌
            </label>
            <div className="relative">
              <input
                onChange={(e) =>
                  setEditedCategory({
                    ...editedCategory,
                    [e.target.name]: e.target.value,
                  })
                }
                name="name"
                value={editedCategory.name}
                type="text"
                placeholder="دسته بندی"
                className="w-full text-right rounded-lg border border-stroke px-3 py-3 text-black outline-none "
              />
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              onSubmit={submitEditCategory}
              className="cursor-pointer h-[36px] w-[120px] text-sm xl:text-base shadow-md px-8 py-2 text-nowrap bg-primaryDark/50 rounded hover:bg-primaryDark/70  transition-all duration-150 flex justify-center items-center"
            >
              ویرایش
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
