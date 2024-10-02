import Image from "next/image";
import icon from "../../app/icon.png";
import { persianPrice } from "@/utils/persianPrice";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";

function MenuItemCard({ productDetails }) {
  const [imgSize, setImgSize] = useState({ width: 160, height: 160 });

  const handleError = () => {
    setProductImage(icon);
    setImgSize({ width: 80, height: 80 });
  };

  const { name, price, description, image } = productDetails;

  return (
    <div dir="rtl" className="w-full flex flex-col p-2 bg-white rounded mb-3">
      <div className="w-40 h-40 rounded overflow-hidden flex items-center justify-center bg-gray-100 border">
        <Image
          priority
          src={image}
          onError={handleError}
          width={imgSize.width}
          height={imgSize.height}
          alt="icon"
        />
      </div>
      <div className="w-full mt-2">
        <p className="my-2 font-bold text-[16px]">{name}</p>
        <div className="text-[12px] flex gap-2 mb-3">
          <p>محتویات:</p>
          <p>{description}</p>
        </div>
        <p className="text-left text-[16px] flex items-center justify-end">
          {persianPrice(price)}
          <span className="text-[10px] px-1 py-0.5 mt-1 rounded text-primaryDark">
            تومان
          </span>
        </p>
      </div>
    </div>
  );
}

export default MenuItemCard;
