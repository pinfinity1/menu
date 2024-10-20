'use client';
import {useContext, useLayoutEffect} from 'react';
import {HeaderItems} from './HeaderItems';
import {GetCategory} from '@/api/category';
import CategoryIdContext from '@/context/CategoryIdContext';
import {useQuery} from '@tanstack/react-query';


export const Header = () => {
  const {setCategoryId} = useContext(CategoryIdContext);

  const {data} = useQuery({
    queryKey: ['category', false],
    queryFn: () => GetCategory(false),
  });

  useLayoutEffect(() => {
    if (data) {
      setCategoryId(data[0].id);
    }
  }, [data, setCategoryId]);
  
  return (
      <div
          className="w-full sticky top-6 z-30 flex flex-row-reverse items-center gap-3 px-3 py-4 mt-5 mb-8 rounded-md overflow-x-auto  bg-primary/30 backdrop-blur drop-shadow-md shadow-lg"
      >
        {data?.map((cat) => {
          return <HeaderItems key={cat.id} title={cat.name} id={cat.id}/>;
        })}
      </div>
  );
};
