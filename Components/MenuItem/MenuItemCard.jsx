import Image from 'next/image';
import {persianPrice} from '@/utils/persianPrice';
import {useState} from 'react';


function MenuItemCard({productDetails}) {
  const {name, price, description, image, id} = productDetails;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // const [productImage, setProductImage] = useState(
  //     image === null ? icon : image,
  // );
  const handleErrorImage = () => {
    setIsLoading(false);
    setIsError(true);
  };
  
  return (
      <div dir="rtl"
           className="w-full flex flex-col p-2 bg-white rounded text-black">
        <div
            className="w-40 h-40 rounded overflow-hidden flex items-center justify-center shadow">
          {isError ?
              <>
                <Image src="images/sabz.jpg"
                       alt={'icon'}
                       width={80}
                       height={80}/>
              </> :
              <Image
                  src={`https://greenfastfood.cocoadownload.com/api/v1/product/images/${id}`}
                  width={160}
                  height={160}
                  alt="Product Image"
                  loading="lazy"
                  quality="75"
                  onLoad={() => setIsLoading(false)}
                  onError={handleErrorImage}
                  className={`${isLoading
                      ? 'bg-primaryDark/20 animate-pulse'
                      : 'block'}`}
              />
          }
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
