import CategoryIdContext from '@/context/CategoryIdContext';
import {useContext} from 'react';
import {Button} from '@/Components/ui/button';


export const HeaderItems = ({title, id}) => {
  const {categoryId, setCategoryId} = useContext(CategoryIdContext);

  const handleContext = async () => {
    await window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    await setCategoryId(id);
  };

  return (
      <Button
          onClick={handleContext}
          className={`whitespace-nowrap flex flex-col justify-center items-center px-4 py-3 rounded cursor-pointer transition-all duration-150
        ${
              categoryId === id
                  ? '!bg-primaryDark text-white'
                  : '!bg-white text-primaryDark'
          }`}
      >
        <p>{title}</p>
      </Button>
  );
};
