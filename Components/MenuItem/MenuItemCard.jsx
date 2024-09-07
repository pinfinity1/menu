import Image from "next/image";
import icon from "../../app/icon.png";
import { persianPrice } from "@/utils/persianPrice";

function MenuItemCard({ productDetails }) {
  console.log(productDetails);

  const { name, price, description } = productDetails;
  return (
    <div dir="rtl" className="w-full flex flex-col p-2 bg-white rounded mb-3">
      <div className="w-40 h-40 rounded overflow-hidden flex items-center justify-center bg-gray-100 border">
        <Image
          src={`http://localhost:9090/api/v1/product/images/${productDetails.id}`}
          width={0}
          height={0}
          alt="icon"
          className="w-12 h-12"
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
