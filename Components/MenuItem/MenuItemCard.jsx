export const MenuItemCard = () => {
  return (
    <div dir="rtl" className="w-full flex flex-col p-2 bg-white rounded mb-3">
      <div className="w-32 h-32 bg-black rounded-sm"></div>
      <div className="w-full mt-2">
        <p>همبرگر</p>
        <p className="text-sm">
          محتویات محتویات محتویات محتویات محتویات محتویات محتویات محتویات
          محتویات
        </p>
        <p className="text-left flex items-center justify-end">
          <span className="text-[10px] px-1 py-0.5 rounded ml-1 text-primaryDark">
            تومان
          </span>
          ۱۹۲.۰۰۰۰
        </p>
      </div>
    </div>
  );
};
