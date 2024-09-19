import { IoIosCloseCircle } from "react-icons/io";

export const Modal = ({ children, closeModal }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 bg-black/10 backdrop-blur overflow-hidden">
      <div className="w-full h-[56px] p-4">
        <IoIosCloseCircle
          onClick={closeModal}
          className="w-6 h-6 mr-auto text-gray-600 hover:text-gray-900 transition-all cursor-pointer"
        />
      </div>
      <div className="w-full h-[calc(100%_-_56px)] p-4 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
