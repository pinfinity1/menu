import { SideBar } from "@/Components/Admin/SideBar/SideBar";

export default function AdminLayout({ children }) {
  return (
    <div className="w-full h-screen max-h-screen flex flex-grow justify-center items-center">
      <div className="w-full h-full md:max-w-[680px] xl:max-w-[800px] md:max-h-[90%] xl:max-h-[80%] md:border-2 md:rounded-2xl md:shadow-xl flex flex-col md:flex-row relative overflow-hidden">
        <div className="md:flex-1 w-full h-[calc(100svh_-_72px)] md:h-auto overflow-y-auto">
          {children}
        </div>
        <SideBar />
      </div>
    </div>
  );
}
