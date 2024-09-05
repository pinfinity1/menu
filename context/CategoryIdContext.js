"use client";
import { createContext, useState } from "react";

const CategoryIdContext = createContext();

export const CategoryIdProvider = ({ children }) => {
  const [categoryId, setCategoryId] = useState();

  return (
    <CategoryIdContext.Provider value={{ categoryId, setCategoryId }}>
      {children}
    </CategoryIdContext.Provider>
  );
};

export default CategoryIdContext;
