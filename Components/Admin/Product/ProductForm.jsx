import { persianPrice } from "@/utils/persianPrice";
import Image from "next/image";
import { useState } from "react";
import Select from "react-dropdown-select";
import { CiImageOff } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

export default function ProductForm() {
  const [productValue, setProductValue] = useState({
    category: "",
    name: "",
    description: "",
    price: 0,
  });
  const [file, setFile] = useState();

  const saveImage = (e) => {
    setFile(e.target.files[0]);
  };
  const removeImage = (e) => {
    setFile();
  };

  const category = [
    { id: 1, title: "همبرگر" },
    { id: 2, title: "پیتزا" },
  ];

  const handleSetProductValue = (e) => {
    e.preventDefault();
    setProductValue({ ...productValue, [e.target.name]: e.target.value });
  };

  return (
    <div dir="rtl" className="w-full h-full flex">
      <form className="w-1/2 p-4 ml-4 border rounded shadow relative">
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
            placeholder="دسته بندی"
            options={category}
            labelField="title"
            valueField="id"
            required
            searchable={false}
            // onChange={(value) => setServerID(value?.[0]?.id)}
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
        {/* this is for product name */}
        <div className="w-full mb-4">
          <label className="text-xs text-gray-700 text-right w-full font-bold pr-1">
            نام محصول
          </label>
          <div className="relative mt-2">
            <input
              onChange={handleSetProductValue}
              name="name"
              type="text"
              placeholder="نام محصول"
              className="w-full text-right text-sm rounded-lg border border-stroke px-4 py-3 text-black bg-transparent outline-none  "
            />
          </div>
        </div>

        {/* this is for product details */}
        <div className="w-full">
          <h2 className="text-xs text-gray-700 text-right w-full font-bold pr-1 mb-2">
            محتویات محصول
          </h2>
          <textarea
            onChange={handleSetProductValue}
            name="description"
            placeholder="محتویات محصول را بنویسید"
            rows={4}
            className="w-full px-4 py-3 text-right  border rounded-lg text-sm bg-transparent outline-none transition-colors resize-none"
          />
        </div>

        {/* this is for product price */}
        <div className="w-1/2">
          <label className="text-xs text-gray-700 text-right w-full font-bold pr-1">
            قمیت محصول
          </label>
          <div className="relative mt-2">
            <input
              onChange={handleSetProductValue}
              name="price"
              type="number"
              placeholder="قیمت محصول"
              className=" appearance-none w-full text-right text-sm rounded-lg border border-stroke px-4 py-3 text-black bg-transparent outline-none  "
            />
          </div>
        </div>

        <div className="w-full p-4 absolute bottom-0 right-0">
          <button className="w-full py-2 rounded text-nowrap bg-primaryDark/50 hover:bg-primaryDark/70  transition-all duration-150 cursor-pointer">
            ثبت
          </button>
        </div>
      </form>

      {/* left section for show form value */}
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
          <div className="flex items-center gap-2 text-sm mb-3">
            <p>دسته بندی:</p>
            <p className="text-primaryDark">{productValue?.category}</p>
          </div>
          <div className="flex items-center gap-2 text-sm mb-3">
            <p>نام محصول:</p>
            <p>{productValue?.name}</p>
          </div>
          <div className="flex gap-2 text-sm text-justify mb-3">
            <p>محتویات:</p>
            <p>{productValue?.description}</p>
          </div>
          <div className="w-1/3 text-sm mr-auto flex items-center justify-between gap-2 text-md mb-3">
            <p>قیمت:</p>
            <p>
              {persianPrice(+productValue?.price)}
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
