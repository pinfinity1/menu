'use client';
import {useState} from 'react';
import {HashLoader} from 'react-spinners';
import {FiEdit} from 'react-icons/fi';
import {Modal} from '../Modal';
import {EditCategory} from './EditCategory';
import {AiOutlineDelete} from 'react-icons/ai';
import {DeleteCategoryById} from '@/api/category';
import toast from 'react-hot-toast';


export const AvailableCategory = ({categoryList, Loading, reFetch}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [modalCategoryDetail, setModalCategoryDetail] = useState();

  const submitDeleteCategory = async (id) => {
    await DeleteCategoryById(id).then(() => {
      toast.success('حذف موفقیت‌آمیز');
    }).catch(() => {
      toast.error('مجدد');
    });
    await reFetch();
  };

  return (
      <>
        <div className="w-full py-4">
          <div
              className="relative w-full h-[2px] bg-primaryDark rounded-full mt-4 mb-8">
          <span className="bg-white text-sm px-4 absolute right-3 -top-3">
            دسته‌بندی‌ها
          </span>
          </div>
          {Loading ? (
              <div className="w-full h-[120px] flex justify-center">
                <HashLoader size={15}/>
              </div>
          ) : (
              <>
                {categoryList?.length === 0 ? (
                    <div
                        className="w-full h-[240px] flex justify-center items-center bg-primaryDark/10 rounded-lg">
                      <p>دسته‌بندی وجود ندارد</p>
                    </div>
                ) : (
                    <div className="w-full">
                      {categoryList.map((cat) => {
                        const handleClickOnEdit = (data) => {
                          setShowEditModal((prev) => !prev);
                          setModalCategoryDetail(data);
                        };

                        return (
                            <div
                                key={cat.id}
                                className="w-full px-3 py-3 mb-2 flex flex-row-reverse items-center justify-between border rounded-lg bg-primaryDark/5"
                            >
                              {cat.name}
                              <div className="w-fit flex items-center gap-5">
                        <span
                            onClick={() => handleClickOnEdit(cat)}
                            className="cursor-pointer"
                        >
                          <FiEdit
                              className="text-[18px] hover:text-primaryDark"/>
                        </span>
                                <span
                                    onClick={() => {
                                      submitDeleteCategory(cat.id);
                                    }}
                                >
                          <AiOutlineDelete
                              className="text-[22px] hover:fill-red-400 cursor-pointer"/>
                        </span>
                              </div>
                            </div>
                        );
                      })}
                      {showEditModal && (
                          <Modal closeModal={() => setShowEditModal(
                              (prev) => !prev)}>
                            <EditCategory
                                categoryDetail={modalCategoryDetail}
                                reFetch={reFetch}
                                closeModal={() => setShowEditModal(
                                    (prev) => !prev)}
                            />
                          </Modal>
                      )}
                    </div>
                )}
              </>
          )}
        </div>
      </>
  );
};
