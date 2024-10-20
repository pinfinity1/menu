import {persianPrice} from '@/utils/persianPrice';
import {useQuery} from '@tanstack/react-query';
import {GetProductImage} from '@/api/product';
import Image from 'next/image';


function MenuItemCard({productDetails}) {
  const {name, price, description, id} = productDetails;

  const {data: imageBlob, isLoading, isError} = useQuery({
    queryKey: ['productImage', id],
    queryFn: () => GetProductImage(id),
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  
  const imageUrl = imageBlob ? URL.createObjectURL(imageBlob) : '';

  return (
      <div dir="rtl"
           className="w-full flex flex-col p-2 bg-white rounded text-black">
        <div
            className="w-40 h-40 rounded overflow-hidden flex items-center justify-center shadow">
          {isLoading ? (
              <div
                  className="w-full h-full bg-primaryDark/15 animate-pulse"></div>
          ) : (
              <>
                {isError ? (
                    <>
                      <Image src={'images/sabz.jpg'}
                             width={80}
                             height={80} alt={'icon'}/>
                    </>
                ) : (
                    <Image
                        src={imageUrl}
                        width={160}
                        height={160}
                        alt="Product Image"
                        loading="lazy"
                        onLoad={() => URL.revokeObjectURL(imageUrl)}
                        className={`${isLoading
                            ? 'bg-primaryDark/20 animate-pulse'
                            : 'block'}`}
                    />
                )}
              </>
          )}
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
