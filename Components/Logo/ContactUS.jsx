import {IoLogoInstagram} from 'react-icons/io5';
import Image from 'next/image';
import {MdOutlinePhoneEnabled} from 'react-icons/md';
import {IoMdTime} from 'react-icons/io';


export const ContactUS = () => {
  return (
      <>
        <div className="w-full h-[520px] flex flex-col items-center pb-10">
          <div className="w-[240px] h-[240px] overflow-hidden rounded">
            <Image
                src={'images/why-green-fast-food.jpeg'}
                width={280}
                height={280}
                className="object-cover rounded-full w-full h-full"
                alt="why green"
            />
          </div>
          <div
              className="w-full bg-white rounded px-6 text-right text-[16px] flex flex-col gap-6">
            <div
                className="relative w-full h-[2px] bg-primaryDark rounded-full my-4">
              <span
                  className="bg-white text-primaryDark px-4 absolute right-3 -top-3">
                درباره‌ ما
              </span>
            </div>

            <div className="flex items-center justify-end gap-4">
              <p>
                <a
                    dir="ltr"
                    className="mr-2 underline "
                    href="tel:+983832226065"
                >
                  ۰۳۸-۳۲۲۲-۶۰۶۵
                </a>
              </p>
              <MdOutlinePhoneEnabled className="text-[24px]"/>
            </div>
            <div className="flex items-center justify-end gap-4">
              <a
                  href="https://www.instagram.com/sabz.fastfood/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" font-bold underline"
              >
                sabz.fastfood
              </a>
              <IoLogoInstagram className="text-[24px]"/>
            </div>
            <div className="flex items-center justify-end gap-4">
              <p>از ۱۲ ظهر تا ۱۲ شب</p>
              <IoMdTime className="text-[24px]"/>
            </div>
          </div>
        </div>
      </>
  );
};
