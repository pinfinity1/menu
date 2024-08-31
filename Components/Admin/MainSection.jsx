import { CategoryForm } from "./Category/CategoryForm";
import { ProductForm } from "./Product/ProductForm";

export const MainSection = ({ selectedFromMenu }) => {
  if (selectedFromMenu === "category") {
    return (
      <>
        <CategoryForm />
      </>
    );
  }
  if (selectedFromMenu === "product") {
    return (
      <>
        <ProductForm />
      </>
    );
  }
};
