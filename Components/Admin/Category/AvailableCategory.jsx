"use client";
import { GetCategory } from "@/api/category";
import { useContext, useEffect, useState } from "react";
import { PropagateLoader, PuffLoader } from "react-spinners";
import { FiEdit } from "react-icons/fi";
import { Modal } from "../Modal";
import { EditCategory } from "./EditCategory";

export const AvailableCategory = ({ categoryList, Loading }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [modalCategoryDetail, setModalCategoryDetail] = useState();

  return (
    <>
      <div className="w-full py-4">
        <div className="relative w-full h-[2px] bg-primaryDark rounded-full mt-4 mb-8">
          <span className="bg-white text-sm px-4 absolute right-3 -top-3">
            دسته‌بندی‌ها
          </span>
        </div>
        {Loading ? (
          <div className="w-full h-[120px] flex justify-center">
            <PropagateLoader size={15} />
          </div>
        ) : (
          <>
            {categoryList.length == 0 ? (
              <div className="w-full h-[240px] flex justify-center items-center bg-primaryDark/10 rounded-lg">
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
          </>
        )}
      </div>
    </>
  );
};
