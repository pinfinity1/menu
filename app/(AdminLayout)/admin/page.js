import Image from "next/image";

export default function Admin() {
  return (
    <div className="w-full h-[calc(100vh_-_72px)] md:h-screen max-h-screen flex flex-col justify-center items-center">
      <p className="text-xl md:text-2xl">! خوش آمدید</p>
      <Image
        className="w-3/4 h-3/4"
        src={"images/admin.svg"}
        width={0}
        height={0}
        priority
        alt="admin svg"
      />
    </div>
  );
}
