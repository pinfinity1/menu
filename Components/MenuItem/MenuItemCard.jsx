import Image from "next/image";
import icon from "../../app/icon.png";
import { persianPrice } from "@/utils/persianPrice";
import { useEffect, useState } from "react";
import { GetProductImage } from "@/api/product";

function MenuItemCard({ productDetails }) {
  // console.log(productDetails);
  const [productImage, setProductImage] = useState();

  useEffect(() => {
    GetProductImage(productDetails.id).then((res) => {
      const blob = new Blob([res], { type: "image/jpeg" });
      const objectURL = URL.createObjectURL(blob);
      setProductImage(objectURL);
      // console.log(objectURL);
    });
  }, []);

  // console.log(productImage);

  const { name, price, description } = productDetails;

  return (
    <div dir="rtl" className="w-full flex flex-col p-2 bg-white rounded mb-3">
      <div className="w-40 h-40 rounded overflow-hidden flex items-center justify-center bg-gray-100 border">
        <Image
          // src={productImage}
          src={`${process.env.NEXT_PUBLIC_API_URL}product/images/${productDetails.id}`}
          width={0}
          height={0}
          alt="icon"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full mt-2">
        <p className="my-2">{name}</p>
        <div className="text-[12px] flex gap-2 mb-3">
          <p>محتویات:</p>
          <p>{description}</p>
        </div>
        <p className="text-left flex items-center justify-end">
          <span className="text-[10px] px-1 py-0.5 rounded ml-1 text-primaryDark">
            تومان
          </span>
          {persianPrice(price)}
        </p>
      </div>
    </div>
  );
}

export default MenuItemCard;
