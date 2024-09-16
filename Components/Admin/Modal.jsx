import { IoIosCloseCircle } from "react-icons/io";

export const Modal = ({ children, closeModal }) => {
  return (
    <div className="w-full h-full absolute top-0 left-0 bg-black/10 backdrop-blur rounded overflow-hidden">
      <div className="w-full p-4">
        <IoIosCloseCircle
          onClick={closeModal}
          className="w-6 h-6 mr-auto text-gray-600 hover:text-gray-900 transition-all cursor-pointer"
        />
      </div>
      <div className="w-full h-full p-4 overflow-x-auto">{children}</div>
    </div>
  );
};
