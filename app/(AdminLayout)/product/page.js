"use client";
import { GetCategory, GetCategoryById } from "@/api/category";
import { AvailableProduct } from "@/Components/Admin/Product/AvailableProduct";
import ProductForm from "@/Components/Admin/Product/ProductForm";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Product() {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);

  const fetchCategory = async () => {
    await GetCategory()
      .then((res) => {
        setCategory(res);
      })
      .catch((er) => {
        toast.error("دسته بندی یافت نشد");
      });
  };

  const fetchProductsForCategory = async (id = null) => {
    await GetCategoryById(id, true)
      .then((res) => {
        setProducts(res.products);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  useEffect(() => {
    fetchCategory();
    fetchProductsForCategory();
  }, []);

  return (
    <div className="w-full h-full p-4">
      <ProductForm
        reFetchCategory={fetchCategory}
        reFetchProducts={fetchProductsForCategory}
      />
      <AvailableProduct
        category={category}
        products={products}
        reFetchCategory={fetchCategory}
        reFetchProducts={fetchProductsForCategory}
      />
    </div>
  );
}
