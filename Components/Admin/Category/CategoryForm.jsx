import { GoInfo } from "react-icons/go";

export const CategoryForm = () => {
  return (
    <div dir="rtl" className="w-full h-full">
      <p className="text-right text-sm flex items-center bg-primary/20 text-primaryDark p-4 rounded">
        <GoInfo className="w-8 h-8 ml-6" />
        اگر میخواهید دسته بندی جدیدی از محصولات را وارد کنید لطفا ابتدا دسته
        بندی را اینجا ثبت کرده و سپس به افزودن محصول بروید و محصولات مرتبط با
        این زیرمجموعه را وارد کنید
      </p>

      <form className="mt-4 h-[calc(100%_-_92px)]">
        <div className="w-full h-full flex flex-col p-4 border rounded">
          <div className="w-1/2">
            <label className="mb-2.5 block font-medium text-black mr-1">
              دسته بندی
            </label>
            <div className="relative">
              <input
                // onChange={}
                name="category"
                type="text"
                placeholder="دسته بندی"
                className="w-full text-right rounded-lg border border-stroke bg-white shadow-md px-4 py-3 text-black outline-none  "
              />
            </div>
          </div>
          <div className="w-full flex justify-end mt-auto">
            <button
              type="submit"
              // disabled={loading}
              className="cursor-pointer shadow-md px-8 py-2 text-nowrap bg-primaryDark/50 rounded hover:bg-primaryDark/70  transition-all duration-150"
            >
              {/* {!loading ? "ثبت" : <HashLoader size={20} color="#1C2434" />} */}
              ثبت
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
