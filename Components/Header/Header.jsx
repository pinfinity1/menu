'use client';
import {useContext, useEffect, useState} from 'react';
import {HeaderItems} from './HeaderItems';
import {GetCategory} from '@/api/category';
import CategoryIdContext from '@/context/CategoryIdContext';


export const Header = () => {
  const [category, setCategory] = useState();
  const {setCategoryId} = useContext(CategoryIdContext);

  useEffect(() => {
        GetCategory().then((res) => {
          setCategory(res);
          setCategoryId(res?.[0]?.id);
        }).catch((err) => {
          console.log(err);
        });
      },
      [],
  );

  return (
      <div
          className="w-full sticky top-6 z-30 flex flex-row-reverse items-center gap-3 px-3 py-4 mt-5 mb-8 rounded-md overflow-x-auto  bg-primary/30 backdrop-blur drop-shadow-md shadow-lg"
      >
        {category?.map((cat) => {
          return <HeaderItems key={cat.id} title={cat.name} id={cat.id}/>;
        })}
      </div>
  );
};
