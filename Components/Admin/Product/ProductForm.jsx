'use client';
import {GetCategory} from '@/api/category';
import {PostProduct, PostProductImage} from '@/api/product';
import {persianPrice} from '@/utils/persianPrice';
import {useEffect, useState} from 'react';
import Select from 'react-dropdown-select';
import toast from 'react-hot-toast';
import {FaPlus} from 'react-icons/fa';
import Image from 'next/image';


export default function ProductForm({reFetchCategory, reFetchProducts}) {
  const [productValue, setProductValue] = useState({
    name: '',
    description: '',
    price: null,
    categoryId: 0,
  });
  const [category, setCategory] = useState();
  const [file, setFile] = useState();

  const saveImage = (e) => {
    setFile(e.target.files[0]);
  };
  const removeImage = (e) => {
    setFile();
  };

  useEffect(() => {
    GetCategory().then((res) => {
      setCategory(res);
    });
  }, []);

  const handleSetProductValue = (e) => {
    e.preventDefault();
    setProductValue({...productValue, [e.target.name]: e.target.value});
  };

  const setProductValueEmpty = (e) => {
    setProductValue({
      name: '',
      description: '',
      price: null,
    });
    removeImage(e);
  };

  const submitProductForm = (e) => {
    e.preventDefault();
    if (
        !productValue.name ||
        !productValue.description ||
        !productValue.categoryId ||
        !productValue.price
    ) {
      toast.error('لطفا فیلد های مربوط را کامل نمایید');
      return;
    }
    PostProduct({...productValue}).then((res) => {
      if (file) {
        const formData = new FormData();
        formData.append('image', file);
        PostProductImage(res.id, formData).then((res) => {
          toast.success('موفقیت آمیز');
          setProductValueEmpty(e);
        }).catch((er) => {
          console.log('Image Error : ' + er);
          toast.success('موفقیت آمیز اما عکس محصول ارسال نشد .');
          setProductValueEmpty(e);
        }).finally(() => {
          reFetchCategory();
          reFetchProducts();
        });
      } else {
        toast.success('موفقیت آمیز اما عکس محصول ارسال نشد .');
        setProductValueEmpty(e);
      }
    }).catch((er) => {
      console.log('Product Error : ' + er);
      toast.error('لطفا مجددا تلاش فرمایید');
    }).finally(() => {
      reFetchCategory();
      reFetchProducts();
    });
  };

  return (
      <div dir="rtl" className="w-full">
        <div
            className="relative w-full h-[2px] bg-primaryDark rounded-full mt-4 mb-8">
        <span className="bg-white text-sm px-4 absolute right-3 -top-3">
          فرم افزودن محصول
        </span>
        </div>
        <form
            onSubmit={submitProductForm}
            className="w-full p-4 border rounded bg-white relative"
        >
          <div className="w-full mb-3">
            <h2 className="text-gray-700 text-xs text-right w-full font-bold pr-1 mb-2">
              دسته بندی محصول
            </h2>
            <Select
                direction="rtl"
                style={{
                  padding: '12px',
                  border: '1px solid rgb(229 231 235)',
                  borderRadius: '8px',
                  backgroundColor: '#fff',
                }}
                placeholder="دسته بندی"
                options={category}
                labelField="name"
                valueField="id"
                required
                searchable={false}
                onClearAll={() => console.log(1)}
                onChange={(value) =>
                    setProductValue({...productValue, categoryId: value[0]?.id})
                }
            />
          </div>

          {/* this is for product name */}
          <div className="w-full mb-3">
            <label
                className="text-gray-700 text-xs text-right w-full font-bold pr-1">
              نام محصول
            </label>
            <div className="relative mt-2">
              <input
                  onChange={handleSetProductValue}
                  name="name"
                  value={productValue.name}
                  type="text"
                  placeholder="نام محصول"
                  className="w-full text-right rounded-lg border border-stroke px-4 py-3 text-black bg-transparent outline-none"
              />
            </div>
          </div>

          {/* this is for product image */}
          <div className="w-full mb-3">
            <h2 className="text-gray-700 text-xs text-right w-full font-bold pr-1 mb-2">
              تصویر محصول
            </h2>
            {file ? (
                <div className="flex items-center border p-3 rounded" dir="rtl">
                  <div className="w-[96px] h-[96px] mx-auto overflow-hidden">
                    <Image
                        src={URL.createObjectURL(file)}
                        alt={'product image'}
                        className="w-full h-full"
                        width={0}
                        height={0}
                    />
                  </div>
                  <div
                      className="flex-1 flex flex-col items-center justify-center gap-4">
                <span className="flex-1 text-green-400 text-xs text-center">
                  تصویر با موفقیت بارگزاری شد
                </span>
                    <div
                        onClick={removeImage}
                        className="w-fit text-center py-1 px-2 rounded text-red-500 bg-red-50 hover:bg-red-200 cursor-pointer"
                    >
                      <p>حذف تصویر</p>
                    </div>
                  </div>
                </div>
            ) : (
                <div className="w-full h-[64px] border p-3 rounded-lg">
                  <div
                      className="flex items-center justify-center w-full h-full">
                    <label
                        htmlFor="upload"
                        className="border border-dashed hover:bg-slate-100 transition-colors text-slate-400 py-3 w-full rounded cursor-pointer flex gap-1 justify-center items-center "
                    >
                      <FaPlus/>
                      <span>تصویر</span>
                    </label>
                    <input
                        type="file"
                        id="upload"
                        accept=".jpg,.jpeg,.png"
                        className="hidden"
                        onChange={saveImage}
                    />
                  </div>
                </div>
            )}
          </div>

          {/* this is for product details */}
          <div className="w-full mb-3">
            <h2 className="text-gray-700 text-xs text-right w-full font-bold pr-1 mb-2">
              محتویات محصول
            </h2>
            <textarea
                onChange={handleSetProductValue}
                name="description"
                value={productValue.description}
                placeholder="محتویات محصول را بنویسید"
                rows={4}
                className="w-full px-4 py-3 text-right  border rounded-lg bg-transparent outline-none transition-colors resize-none"
            />
          </div>

          {/* this is for product price */}
          <div className="w-full mb-4">
            <label
                className="text-gray-700 text-xs text-right w-full font-bold pr-1">
              قمیت محصول
            </label>
            <div className="relative mt-2">
              <input
                  onChange={handleSetProductValue}
                  name="price"
                  value={productValue.price}
                  type="number"
                  placeholder="قیمت محصول"
                  className=" appearance-none w-full text-right rounded-lg border border-stroke px-4 py-3 text-black bg-transparent outline-none  "
              />
              <p className="absolute left-2 bottom-2 whitespace-nowrap">
                {persianPrice(+productValue?.price)}
                <span
                    className="text-[10px] px-1 py-0.5 rounded ml-1 text-primaryDark">
                تومان
              </span>
              </p>
            </div>
          </div>

          <div className="w-fit mr-auto">
            <button
                className="w-full px-8 py-2 rounded text-nowrap bg-primaryDark/30 hover:bg-primaryDark/70  transition-all duration-150 cursor-pointer">
              ثبت
            </button>
          </div>
        </form>
      </div>
  );
}
