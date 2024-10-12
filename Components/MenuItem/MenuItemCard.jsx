import Image from 'next/image';
import icon from '../../app/icon.png';
import {persianPrice} from '@/utils/persianPrice';
import {useState} from 'react';


function MenuItemCard({productDetails}) {
  const {name, price, description, image} = productDetails;

  const [productImage, setProductImage] = useState(
      image === null ? icon : image,
  );

  return (
      <div dir="rtl"
           className="w-full flex flex-col p-2 bg-white rounded text-black">
        <div
            className="w-40 h-40 rounded overflow-hidden flex items-center justify-center bg-gray-100 border">
          <Image
              src={productImage}
              width={image === null ? 80 : 160}
              height={image === null ? 80 : 160}
              alt="icon"
              loading="lazy"
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
            <span
                className="text-[10px] px-1 py-0.5 mt-1 rounded text-primaryDark">
            تومان
          </span>
          </p>
        </div>
      </div>
  );
}

export default MenuItemCard;
