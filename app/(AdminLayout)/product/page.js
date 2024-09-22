import { AvailableProduct } from "@/Components/Admin/Product/AvailableProduct";
import ProductForm from "@/Components/Admin/Product/ProductForm";

export default function Product() {
  return (
    <div className="w-full h-full p-4">
      <ProductForm />
      <AvailableProduct />
    </div>
  );
}
