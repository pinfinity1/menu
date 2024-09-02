import Image from "next/image";
import logo from "../../public/images/sabz.jpg";

export const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image priority src={logo} width={240} height={240} alt="logo image" />
    </div>
  );
};
