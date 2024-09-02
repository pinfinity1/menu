import dynamic from "next/dynamic";

const MenuItemCard = dynamic(async () => await import("./MenuItemCard"));

export const MenuItem = () => {
  return (
    <div className="w-full bg-primaryDark backdrop-blur-xl p-3 mb-4 rounded-md">
      <div className="w-full h-0.5 mt-5 mb-8 bg-white rounded-full relative">
        <span className="absolute right-0 -top-4 bg-white mr-4 pl-4 pr-3 py-1 rounded text-primaryDark">
          همبرگر
        </span>
      </div>
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
    </div>
  );
};
