'use client';
import {GetCategory} from '@/api/category';
import {AvailableCategory} from '@/Components/Admin/Category/AvailableCategory';
import CategoryForm from '@/Components/Admin/Category/CategoryForm';
import {useEffect, useState} from 'react';
import {HashLoader} from 'react-spinners';


export default function Category() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    setLoading(true);
    GetCategory().then((res) => {
      setCategory(res);
    }).catch((er) => {
      console.log(er);
    }).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
      <div className="w-full h-full p-4">
        {loading ?
            <div
                className="w-full h-[540px] md:h-full flex items-center justify-center">
              <HashLoader/>
            </div> :
            <>
              <CategoryForm
                  reFetch={fetchCategory}/>
              <AvailableCategory
                  categoryList={category}
                  Loading={loading}
                  reFetch={fetchCategory}
              />
            </>}

      </div>
  );
}
