import { AvailableCategory } from "@/Components/Admin/Category/AvailableCategory";
import CategoryForm from "@/Components/Admin/Category/CategoryForm";

export default function Category() {
  return (
    <div className="w-full h-full px-4 pt-4 pb-1">
      <CategoryForm />
      <AvailableCategory />
    </div>
  );
}
