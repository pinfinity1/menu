import Image from "next/image";
import logo from "../../public/images/sabz.jpg";

export const Logo = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-[160px] h-[160px] rounded-full overflow-hidden bg-primary/20">
        <Image src={logo} width={0} height={0} className="w-full h-full" />
      </div>
    </div>
  );
};
