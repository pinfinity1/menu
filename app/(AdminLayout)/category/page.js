"use client";
import { GetCategory } from "@/api/category";
import { AvailableCategory } from "@/Components/Admin/Category/AvailableCategory";
import CategoryForm from "@/Components/Admin/Category/CategoryForm";
import { useEffect, useState } from "react";

export default function Category() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    GetCategory()
      .then((res) => {
        setCategory(res);
      })
      .catch((er) => {
        console.log(er);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="w-full h-full p-4">
      <CategoryForm reFetch={fetchCategory} />
      <AvailableCategory
        categoryList={category}
        Loading={loading}
        reFetch={fetchCategory}
      />
    </div>
  );
}
