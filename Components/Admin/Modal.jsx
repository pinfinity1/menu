import { IoClose } from "react-icons/io5";

export const Modal = ({ children, closeModal }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 bg-black/5 backdrop-blur overflow-hidden">
      <div className="w-full h-[56px] p-4">
        <IoClose
          onClick={closeModal}
          className="text-[28px] mr-auto text-gray-800 hover:text-gray-900 transition-all cursor-pointer"
        />
      </div>
      <div className="w-full h-[calc(100%_-_56px)] p-4 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
