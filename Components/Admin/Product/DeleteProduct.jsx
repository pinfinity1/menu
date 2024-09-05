import { GetCategory, GetCategoryById } from "@/api/category";
import { DeleteProductById } from "@/api/product";
import { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import toast from "react-hot-toast";

export const DeleteProduct = () => {
  const [category, setCategory] = useState();
  const [categoryId, setCategoryId] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    GetCategory()
      .then((res) => {
        setCategory(res);
      })
      .catch((er) => {
        toast.error("محصولی یافت نشد");
      });
  }, []);

  useEffect(() => {
    GetCategoryById(categoryId, true)
      .then((res) => {
        setProducts(res.products);
      })
      .catch((er) => {
        console.log(er);
      });
  }, [categoryId]);

  const handleDeleteProduct = (id) => {
    DeleteProductById(id)
      .then((res) => toast.success("با موفقیت حذف شد"))
      .catch((er) => toast("مجدد"));

    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="w-full h-full">
      <div>
        <div className="w-1/2 mb-4">
          <h2 className="text-gray-700 text-right w-full font-bold pr-1 mb-2">
            دسته بندی محصول
          </h2>
          <Select
            direction="rtl"
            style={{
              padding: "12px",
              border: "1px solid rgb(229 231 235)",
              borderRadius: "8px",
            }}
            className="bg-white"
            placeholder="دسته بندی"
            options={category}
            labelField="name"
            valueField="id"
            required
            searchable={false}
            onChange={(value) => setCategoryId(value[0].id)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {products?.map((prod) => {
          return (
            <div
              key={prod.id}
              className="bg-white col-span-1 p-3  border rounded flex items-center justify-between text-sm"
            >
              {prod.name}
              <span
                onClick={() => handleDeleteProduct(prod.id)}
                className="p-2 rounded bg-red-50 hover:bg-red-100 text-xs text-red-500 cursor-pointer border border-red-200"
              >
                حذف
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
