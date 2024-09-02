import Image from "next/image";
import notFound from "../public/images/not-found.svg";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" h-screen bg-primary/30 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Image src={notFound} width={360} height={360} alt="not-found image" />
        <Link
          href={"/"}
          className="bg-gray-50 hover:bg-gray-100 px-4 py-2 mt-5 rounded"
        >
          بازگشت
        </Link>
      </div>
    </div>
  );
}
