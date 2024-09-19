"use client";
import { GetCategory } from "@/api/category";
import { useEffect, useState } from "react";
import { PropagateLoader, PuffLoader } from "react-spinners";
import { FiEdit } from "react-icons/fi";
import { Modal } from "../Modal";
import { EditCategory } from "./EditCategory";

export const AvailableCategory = () => {
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [modalCategoryDetail, setModalCategoryDetail] = useState();

  useEffect(() => {
    GetCategory()
      .then((res) => {
        setCategory(res);
        setLoading(false);
      })
      .catch((er) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="w-full pt-4 pb-2">
        <div className="relative w-full h-[2px] bg-primaryDark rounded-full mt-4 mb-8">
          <span className="bg-white text-sm px-4 absolute right-3 -top-3">
            دسته‌بندی‌ها
          </span>
        </div>
        {loading ? (
          <div className="w-full h-[120px] flex justify-center">
            <PropagateLoader size={15} />
          </div>
        ) : (
          <div className="w-full">
            {category.map((cat) => {
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
                  <span
                    onClick={() => handleClickOnEdit(cat)}
                    className="cursor-pointer"
                  >
                    <FiEdit className="text-[18px]" />
                  </span>
                </div>
              );
            })}
            {showEditModal && (
              <Modal closeModal={() => setShowEditModal((prev) => !prev)}>
                <EditCategory categoryDetail={modalCategoryDetail} />
              </Modal>
            )}
          </div>
        )}
      </div>
    </>
  );
};
