import dynamic from "next/dynamic";

const ProductForm = dynamic(async () => await import("./Product/ProductForm"));
const CategoryForm = dynamic(
  async () => await import("./Category/CategoryForm")
);
const ProductImage = dynamic(
  async () => await import("./ProductImage/ProductImage")
);

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
  // if (selectedFromMenu === "image") {
  //   return (
  //     <>
  //       <ProductImage />
  //     </>
  //   );
  // }
};
