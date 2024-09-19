import { AvailableProduct } from "@/Components/Admin/Product/AvailableProduct";
import ProductForm from "@/Components/Admin/Product/ProductForm";

export default function Product() {
  return (
    <div className="w-full h-full px-4 pt-4 pb-1">
      <ProductForm />
      <AvailableProduct />
    </div>
  );
}
