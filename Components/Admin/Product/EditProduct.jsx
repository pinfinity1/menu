import {
  DeleteProductById,
  PostProductImage,
  UpdateProduct,
} from "@/api/product";
import { persianPrice } from "@/utils/persianPrice";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

export const EditProduct = ({ productDetail }) => {
  const [editedProduct, setEditedProduct] = useState({
    name: productDetail.name,
    description: productDetail.description,
    price: productDetail.price,
    categoryId: productDetail.categoryId,
  });
  const [productImage, setProductImage] = useState(
    `${process.env.NEXT_PUBLIC_API_URL}product/images/${productDetail.id}`
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgFile, setImgFile] = useState();

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

  const handleImageChange = (e) => {
    setImgFile(e.target.files[0]);

    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const editProductNewImage = () => {
    if (imgFile) {
      const formData = new FormData();
      formData.append("image", imgFile);
      PostProductImage(productDetail.id, formData)
        .then((res) => {
          toast.success("موفقیت آمیز");
          window.location.reload();
        })
        .catch((er) => {
          console.log("Image Error : " + er);
          toast.error("عکس محصول ارسال نشد");
        });
    } else {
      toast.error("ابتدا باید تصویر مورد نظر را وارد نمایید");
    }
  };

  return (
    <>
      {/* edit product details */}
      <div className="w-full bg-white p-4 rounded-lg border mb-4">
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
            <button
              onSubmit={submitEditProduct}
              className="w-full px-8 py-2 rounded text-nowrap bg-primaryDark/30 hover:bg-primaryDark/70  transition-all duration-150 cursor-pointer"
            >
              ویرایش
            </button>
          </div>
        </form>
      </div>

      {/* edit product image */}
      <div className="w-full bg-white p-4 rounded-lg border mb-4">
        <p className="text-right text-[18px] font-bold mb-4">
          ویرایش عکس محصول
        </p>
        <div className="w-full flex flex-row-reverse justify-between gap-2">
          <div className="w-56 h-56 flex items-center justify-center overflow-hidden">
            <Image
              priority
              src={selectedImage || productImage}
              width={224}
              height={224}
              alt="icon"
            />
          </div>
          <div className="w-1/2 h-56 flex flex-col justify-between text-right">
            <div className="w-full h-fit">
              <p className="mb-2">:بارگزاری تصویر محصول</p>
              <div className="flex items-center justify-center">
                <label
                  htmlFor="upload"
                  className="border border-dashed hover:bg-gray-100 transition-colors text-gray-400 py-3 w-full rounded cursor-pointer flex gap-1 justify-center items-center "
                >
                  <FaPlus />
                  <span>تصویر</span>
                </label>
                <input
                  type="file"
                  id="upload"
                  accept=".jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div
              onClick={editProductNewImage}
              className="w-fit bg-primaryDark/30 hover:bg-primaryDark/70 rounded text-center px-8 py-2 cursor-pointer  transition-all duration-150"
            >
              ویرایش تصویر
            </div>
          </div>
        </div>
      </div>

      {/* delete product */}
      <div className="w-full bg-white p-2 border rounded-lg flex items-center justify-between text-xs">
        <span
          onClick={submitDeleteProduct}
          className="p-2 rounded-[6px] bg-red-50 hover:bg-red-100 text-red-500 cursor-pointer border border-red-200"
        >
          حذف
        </span>
        <p>آیا میخواهید این محصول را حذف کنید؟</p>
      </div>
    </>
  );
};
