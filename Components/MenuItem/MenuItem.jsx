'use client';
import {GetCategory} from '@/api/category';
import CategoryIdContext from '@/context/CategoryIdContext';
import dynamic from 'next/dynamic';
import {useContext, useEffect, useState} from 'react';
import {BeatLoader} from 'react-spinners';


const MenuItemCard = dynamic(async () => await import('./MenuItemCard'),
    {ssr: false});

export const MenuItem = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const {categoryId} = useContext(CategoryIdContext);

  useEffect(() => {

    setLoading(true);

    GetCategory(true).then((res) => {
      setAllCategories(res);
    }).catch((er) => {
      console.log(er);
    }).finally(() => {
      setLoading(false);
    });

  }, []);

  const filterProducts = allCategories?.filter(
      cat => cat.id === categoryId)?.[0];
  const name = filterProducts?.name;
  const products = filterProducts?.products;

  if (loading) {
    return (
        <div className="w-full h-[400px] flex justify-center items-center">
          <BeatLoader size={20} color="#015428"/>
        </div>
    );
  }

  return (
      <div
          className="w-full flex flex-col justify-center gap-3 bg-primaryDark backdrop-blur-xl p-3 rounded-md">

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
      </div>
  );
};
