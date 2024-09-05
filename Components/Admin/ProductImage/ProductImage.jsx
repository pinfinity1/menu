"use client";

import { GetCategory } from "@/api/category";
import { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import { CiImageOff } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import toast from "react-hot-toast";
import { persianPrice } from "@/utils/persianPrice";
import { PostProductImage } from "@/api/product";

export default function ProductImage() {
  const [category, setCategory] = useState();
  const [categoryProduct, setCategoryProduct] = useState();
  const [productId, setProductId] = useState();
  const [file, setFile] = useState();

  const saveImage = (e) => {
    setFile(e.target.files[0]);
  };
  const removeImage = (e) => {
    setFile();
  };

  useEffect(() => {
    GetCategory(true).then((res) => {
      setCategory(res);
    });
  }, []);

  const handleSubmitProductImage = (e) => {
    e.preventDefault();
    if (!productId) return toast.error("لطفا محصول مورد نظر را انتخاب کنید");
    if (!file) return toast.error("لطفا تصویر مورد نظر را وارد کنید");

    const formData = new FormData();
    formData.append("image", file);

    PostProductImage(productId.id, formData)
      .then((res) => {
        toast.success("موفقیت‌آمیز");
      })
      .catch((er) => {
        console.log(er);
      });
  };

  console.log(productId);

  return (
    <div dir="rtl" className="w-full h-full flex">
      <div className="w-1/2 p-4 ml-4 border rounded shadow relative">
        <div className="w-full mb-4">
          <h2 className="text-xs text-gray-700 text-right w-full font-bold pr-1 mb-2">
            دسته بندی محصول
          </h2>
          <Select
            direction="rtl"
            style={{
              padding: "12px",
              border: "1px solid rgb(229 231 235)",
              borderRadius: "8px",
            }}
            className="text-sm"
            placeholder="دسته بندی"
            options={category}
            labelField="name"
            valueField="id"
            required
            searchable={false}
            onChange={(value) => setCategoryProduct(value[0])}
          />
        </div>
        <div className="w-full mb-4">
          <h2 className="text-xs text-gray-700 text-right w-full font-bold pr-1 mb-2">
            محصول
          </h2>
          <Select
            direction="rtl"
            style={{
              padding: "12px",
              border: "1px solid rgb(229 231 235)",
              borderRadius: "8px",
            }}
            className="text-sm"
            placeholder="محصول مورد نظر"
            options={categoryProduct?.products}
            labelField="name"
            valueField="id"
            required
            searchable={false}
            onChange={(value) => setProductId(value[0])}
          />
        </div>
        {/* this is for product image */}
        <div className="w-full mb-3">
          <h2 className="text-xs text-gray-700 text-right w-full font-bold pr-1 mb-2">
            تصویر محصول
          </h2>
          {file ? (
            <div
              className="grid grid-cols-4 gap-2 items-center border p-3 rounded"
              dir="rtl"
            >
              <span className="col-span-3 text-green-400 text-xs text-center">
                تصویر با موفقیت بارگزاری شد
              </span>
              <div
                onClick={removeImage}
                className="text-xs text-center py-2 rounded text-red-500 bg-red-50 hover:bg-red-200 cursor-pointer"
              >
                <p>حذف تصویر</p>
              </div>
            </div>
          ) : (
            <div className="w-full h-[64px] border p-3 rounded-lg">
              <div className="flex items-center justify-center w-full h-full">
                <label
                  htmlFor="upload"
                  className="border border-dashed hover:bg-slate-100 transition-colors text-slate-400 py-3 w-full rounded cursor-pointer flex gap-1 justify-center items-center "
                >
                  <FaPlus />
                  <span className="text-xs">تصویر</span>
                </label>
                <input
                  type="file"
                  id="upload"
                  accept="image/*"
                  className="hidden"
                  onChange={saveImage}
                />
              </div>
            </div>
          )}
        </div>
        <div className="w-full p-4 absolute bottom-0 right-0">
          <button
            onClick={handleSubmitProductImage}
            className="w-full py-2 rounded text-nowrap bg-primaryDark/50 hover:bg-primaryDark/70  transition-all duration-150 cursor-pointer"
          >
            ثبت
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center rounded border shadow p-4">
        {file ? (
          <div className="w-[280px] h-[280px] mx-auto overflow-hidden">
            <Image
              src={URL.createObjectURL(file)}
              alt={"product image"}
              className="w-full h-full"
              width={0}
              height={0}
            />
          </div>
        ) : (
          <div className="w-[280px] h-[280px] mx-auto overflow-hidden bg-gray-100 border rounded-lg flex items-center justify-center">
            <CiImageOff className="w-28 h-28 text-gray-300" />
          </div>
        )}
        <div className="w-full bg-gray-100 rounded drop-shadow p-4 mt-4">
          <div className="flex items-center gap-2 text-sm mb-5">
            <p>دسته بندی:</p>
            <p className="text-primaryDark">{categoryProduct?.name}</p>
          </div>
          <div className="flex items-center gap-2 text-sm mb-5">
            <p>نام محصول:</p>
            <p>{productId?.name}</p>
          </div>
          <div className="flex gap-2 text-sm text-justify mb-5">
            <p>محتویات:</p>
            <p>{productId?.description}</p>
          </div>
          <div className="w-1/3 text-sm mr-auto flex items-center justify-between gap-2 text-md mb-5">
            <p>قیمت:</p>
            <p>
              {productId && persianPrice(+productId?.price)}
              <span className="text-[10px] px-1 py-0.5 rounded ml-1 text-primaryDark">
                تومان
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
