import { DeleteCategoryById, GetCategory } from "@/api/category";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const DeleteCategory = () => {
  const [category, setCategory] = useState();

  const fetchCategories = () => {
    GetCategory().then((res) => {
      setCategory(res);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDeleteCategory = (id) => {
    DeleteCategoryById(id).then((res) => {
      toast.success("با موفقیت حذف شد");
    });
    setCategory((prevCategory) =>
      prevCategory.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
      {category?.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-white col-span-1 p-3  border rounded flex items-center justify-between text-sm"
          >
            {item.name}
            <span
              onClick={() => handleDeleteCategory(item.id)}
              className="p-2 rounded bg-red-50 hover:bg-red-100 text-xs text-red-500 cursor-pointer border border-red-200"
            >
              حذف
            </span>
          </div>
        );
      })}
    </div>
  );
};
