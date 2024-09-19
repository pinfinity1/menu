import { DeleteCategoryById, UpdateCategory } from "@/api/category";
import { useState } from "react";

export const EditCategory = ({ categoryDetail }) => {
  const [editedCategory, setEditedCategory] = useState({ ...categoryDetail });

  const submitEditCategory = () => {
    UpdateCategory(editedCategory.id, { ...editedCategory });
  };

  const submitDeleteCategory = () => {
    DeleteCategoryById(editedCategory.id);

    window.location.reload();
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
      <div className="pt-10">
        <div className="w-full bg-white p-2 border rounded-lg flex items-center justify-between text-xs">
          <span
            onClick={submitDeleteCategory}
            className="p-2 rounded-[6px] bg-red-50 hover:bg-red-100 text-red-500 cursor-pointer border border-red-200"
          >
            حذف
          </span>
          <p>آیا میخواهید این دسته بندی را حذف کنید؟</p>
        </div>
      </div>
    </div>
  );
};
