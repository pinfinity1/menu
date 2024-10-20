'use client';
import {GetCategory} from '@/api/category';
import CategoryIdContext from '@/context/CategoryIdContext';
import dynamic from 'next/dynamic';
import {useContext} from 'react';
import {BeatLoader} from 'react-spinners';
import {useQuery} from '@tanstack/react-query';


const MenuItemCard = dynamic(async () => await import('./MenuItemCard'),
    {ssr: false});

export const MenuItem = () => {
  const {categoryId} = useContext(CategoryIdContext);

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['category'],
    queryFn: () => GetCategory(true),
  });

  let content;

  if (isError) {
    content = <div
        className="w-full h-[400px] flex justify-center items-center">متاسفانه
      لطفا مجددا تلاش فرمایید
    </div>;
  }

  if (isLoading) {
    content =
        <div className="w-full h-[400px] flex justify-center items-center">
          <BeatLoader size={20} color="#fff"/>
        </div>;

  }

  if (data) {
    const filterProducts = data?.filter(
        cat => cat.id === categoryId)?.[0];
    const name = filterProducts?.name;
    const products = filterProducts?.products;
    content =
        <>
          <div className="w-full h-0.5 my-5 bg-white rounded-full relative">
                <span
                    className="absolute right-0 -top-5 bg-white mr-4 pl-4 pr-4 py-2 rounded text-primaryDark font-bold">
                {name}
                </span>
          </div>
          {products?.map((prod) => {
            return (
                <>
                  <MenuItemCard key={prod?.id} productDetails={prod}/>
                </>
            );
          })}
        </>;
  }

  return (
      <div
          className="w-full flex flex-col justify-center gap-3 bg-primaryDark backdrop-blur-xl p-3 rounded-md">
        {content}
      </div>
  );
};
