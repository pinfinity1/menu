import Image from "next/image";
import icon from "../../app/icon.png";
import { persianPrice } from "@/utils/persianPrice";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";

function MenuItemCard({ productDetails }) {
  const [productImage, setProductImage] = useState(
    `${process.env.NEXT_PUBLIC_API_URL}product/images/${productDetails.id}`
  );
  const [imgSize, setImgSize] = useState({ width: 160, height: 160 });

  const handleError = () => {
    setProductImage(icon);
    setImgSize({ width: 80, height: 80 });
  };

  const { name, price, description } = productDetails;

  return (
    <div dir="rtl" className="w-full flex flex-col p-2 bg-white rounded mb-3">
      <div className="w-40 h-40 rounded overflow-hidden flex items-center justify-center bg-gray-100 border">
        <Image
          priority
          src={productImage}
          onError={handleError}
          width={imgSize.width}
          height={imgSize.height}
          alt="icon"
        />
      </div>
      <div className="w-full mt-2">
        <p className="my-2">{name}</p>
        <div className="text-[12px] flex gap-2 mb-3">
          <p>محتویات:</p>
          <p>{description}</p>
        </div>
        <p className="text-left flex items-center justify-end">
          {persianPrice(price)}
          <span className="text-[10px] px-1 py-0.5 rounded ml-1 text-primaryDark">
            تومان
          </span>
        </p>
      </div>
    </div>
  );
}

export default MenuItemCard;
