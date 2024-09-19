"use client";
import { GetCategory, GetCategoryById } from "@/api/category";
import { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import { FiEdit } from "react-icons/fi";
import { Modal } from "../Modal";
import { EditProduct } from "./EditProduct";

export const AvailableProduct = () => {
  const [category, setCategory] = useState();
  const [categoryId, setCategoryId] = useState();
  const [products, setProducts] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [modalProductDetail, setModalProductDetail] = useState();

  useEffect(() => {
    GetCategory()
      .then((res) => {
        setCategory(res);
      })
      .catch((er) => {
        toast.error("محصولی یافت نشد");
      });
  }, []);

  useEffect(() => {
    GetCategoryById(categoryId, true)
      .then((res) => {
        setProducts(res.products);
      })
      .catch((er) => {
        console.log(er);
      });
  }, [categoryId]);

  return (
    <div className="w-full pt-4 pb-2">
      <div className="relative w-full h-[2px] bg-primaryDark rounded-full mt-4 mb-8">
        <span className="bg-white text-sm px-4 absolute right-3 -top-3">
          محصولات
        </span>
      </div>
      <div className="w-full mb-4">
        <h2 className="text-gray-700 text-right w-full font-bold pr-1 mb-2">
          دسته بندی محصول
        </h2>
        <Select
          direction="rtl"
          style={{
            padding: "12px",
            border: "1px solid rgb(229 231 235)",
            borderRadius: "8px",
          }}
          className="bg-white"
          placeholder="دسته بندی"
          options={category}
          labelField="name"
          valueField="id"
          required
          searchable={false}
          onChange={(value) => setCategoryId(value[0]?.id)}
        />
      </div>
      {!categoryId ? (
        <div className="w-full h-[240px] flex justify-center items-center bg-primaryDark/10 rounded-lg">
          <p>لطفا دسته بندی مورد نظر خود را انتخاب نمایید</p>
        </div>
      ) : (
        <>
          {products.length == 0 ? (
            <div className="w-full h-[240px] flex justify-center items-center bg-primaryDark/10 rounded-lg">
              <p>محصولی برای این دسته‌بندی وجود ندارد</p>
            </div>
          ) : (
            <div className="w-full">
              {products.map((prod) => {
                const handleClickOnEdit = (data) => {
                  setShowEditModal((prev) => !prev);
                  setModalProductDetail(data);
                };
                return (
                  <div
                    key={prod.id}
                    className="w-full px-3 py-3 mb-2 flex flex-row-reverse items-center justify-between border rounded-lg bg-primaryDark/5"
                  >
                    <p>{prod.name}</p>
                    <span
                      onClick={() => handleClickOnEdit(prod)}
                      className="cursor-pointer"
                    >
                      <FiEdit className="text-[18px]" />
                    </span>
                  </div>
                );
              })}
              {showEditModal && (
                <Modal closeModal={() => setShowEditModal((prev) => !prev)}>
                  <EditProduct productDetail={modalProductDetail} />
                </Modal>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
