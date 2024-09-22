import { PuffLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <PuffLoader color="#015428" size={100} />
    </div>
  );
};
