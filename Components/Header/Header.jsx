"use client";
import {useContext, useEffect, useState} from 'react';
import {HeaderItems} from './HeaderItems';
import {GetCategory} from '@/api/category';
import CategoryIdContext from '@/context/CategoryIdContext';


export const Header = () => {
  const [category, setCategory] = useState();
  const {setCategoryId} = useContext(CategoryIdContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
        setLoading(true);
        GetCategory().then((res) => {
          setCategory(res);
          setCategoryId(res?.[0]?.id);
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          setLoading(false);
        });
      },
      [],
  );

  return (<div
      className="w-full sticky top-6 z-30 flex flex-row-reverse items-center pr-3 py-4 mt-5 mb-8 rounded-md overflow-x-auto scrollbar-hide bg-primary/25 backdrop-blur-xl drop-shadow-md shadow-lg will-change-transform"
      style={{transform: 'translateZ(0)', WebkitOverflowScrolling: 'touch'}}
    >
    {loading ?
        (<>
          <div className="flex items-center gap-4">
            <div
                className="w-[56px] h-[48px] bg-gray-100 animate-pulse rounded transition-all duration-150">
            </div>
            <div
                className="w-[64px] h-[48px] bg-gray-100 animate-pulse rounded transition-all duration-150">
            </div>
            <div
                className="w-[48px] h-[48px] bg-gray-100 animate-pulse rounded transition-all duration-150">
            </div>
            <div
                className="w-[96px] h-[48px] bg-gray-100 animate-pulse rounded transition-all duration-150">
            </div>
          </div>
        </>) :
        (<>
          {category?.map((cat) => {
            return <HeaderItems key={cat.id} title={cat.name} id={cat.id}/>;
          })}
        </>)}
  </div>);
};
