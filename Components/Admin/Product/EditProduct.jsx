import { DeleteProductById, UpdateProduct } from "@/api/product";
import { persianPrice } from "@/utils/persianPrice";
import { useState } from "react";
import toast from "react-hot-toast";

export const EditProduct = ({ productDetail }) => {
  const [editedProduct, setEditedProduct] = useState({
    name: productDetail.name,
    description: productDetail.description,
    price: productDetail.price,
    categoryId: productDetail.categoryId,
  });

  const submitEditProduct = () => {
    UpdateProduct(productDetail.id, { ...editedProduct });
  };

  const submitDeleteProduct = () => {
    DeleteProductById(productDetail.id)
      .then((res) => toast.success("با موفقیت حذف شد"))
      .catch((er) => toast("مجدد"));

    window.location.reload();
  };

  const handleEditProductForm = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full">
      <div className="w-full bg-white p-4 rounded-lg border">
        <p className="text-right text-[18px] font-bold mb-4">ویرایش محصول</p>
        <form dir="rtl" className="w-full" onSubmit={submitEditProduct}>
          {/* this is for product name */}
          <div className="w-full mb-4">
            <label className="text-gray-700 text-right w-full font-bold pr-1">
              نام محصول
            </label>
            <div className="relative mt-2">
              <input
                onChange={handleEditProductForm}
                name="name"
                value={editedProduct.name}
                type="text"
                placeholder="نام محصول"
                className="w-full text-right rounded-lg border border-stroke px-4 py-3 text-black bg-transparent outline-none"
              />
            </div>
          </div>

          {/* this is for product details */}
          <div className="w-full mb-4">
            <h2 className="text-gray-700 text-right w-full font-bold pr-1 mb-2">
              محتویات محصول
            </h2>
            <textarea
              onChange={handleEditProductForm}
              name="description"
              value={editedProduct.description}
              placeholder="محتویات محصول را بنویسید"
              rows={4}
              className="w-full px-4 py-3 text-right  border rounded-lg bg-transparent outline-none transition-colors resize-none"
            />
          </div>

          {/* this is for product price */}
          <div className="w-full mb-4">
            <label className="text-gray-700 text-right w-full font-bold pr-1">
              قمیت محصول
            </label>
            <div className="relative mt-2">
              <input
                onChange={handleEditProductForm}
                name="price"
                value={editedProduct.price}
                type="number"
                placeholder="قیمت محصول"
                className=" appearance-none w-full text-right rounded-lg border border-stroke px-4 py-3 text-black bg-transparent outline-none  "
              />
              <p className="absolute left-2 bottom-2 whitespace-nowrap">
                {persianPrice(+editedProduct?.price)}
                <span className="text-[10px] px-1 py-0.5 rounded ml-1 text-primaryDark">
                  تومان
                </span>
              </p>
            </div>
          </div>

          <div className="w-full">
            <button className="w-full px-8 py-2 rounded text-nowrap bg-primaryDark/30 hover:bg-primaryDark/70  transition-all duration-150 cursor-pointer">
              ویرایش
            </button>
          </div>
        </form>
      </div>
      <div className="pt-10">
        <div className="w-full bg-white p-2 border rounded-lg flex items-center justify-between text-xs">
          <span
            onClick={submitDeleteProduct}
            className="p-2 rounded-[6px] bg-red-50 hover:bg-red-100 text-red-500 cursor-pointer border border-red-200"
          >
            حذف
          </span>
          <p>آیا میخواهید این محصول را حذف کنید؟</p>
        </div>
      </div>
    </div>
  );
};
