import {IoClose, IoLogoInstagram} from 'react-icons/io5';
import WhyGreenFastFoodImg from '../../public/images/why-green-fast-food.jpeg';
import Image from 'next/image';
import {MdOutlinePhoneEnabled} from 'react-icons/md';
import {IoMdTime} from 'react-icons/io';


export const ContactUS = ({ closeModal, ref }) => {
  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 w-full h-screen z-50 p-2 overflow-hidden text-black"
    >
      <div className="w-full h-full bg-primaryDark/50 backdrop-blur relative rounded-2xl py-[80px]">
        <div className="absolute top-2 left-2 bg-white rounded-xl shadow border border-white w-9 h-9 flex justify-center items-center text-center cursor-pointer">
          <IoClose
            onClick={closeModal}
            className="text-[24px] text-gray-800 hover:text-gray-900 transition-all"
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-[280px] h-[280px] overflow-hidden rounded mb-4">
            <Image
              src={WhyGreenFastFoodImg}
              width={280}
              height={280}
              alt="why green"
            />
          </div>
          <div className="w-[90%] mx-auto bg-white rounded py-8 px-6 text-right text-[16px]">
            <div className="relative w-full h-[2px] bg-primaryDark rounded-full mt-4 mb-8">
              <span className="bg-white text-primaryDark px-4 absolute right-3 -top-3">
                درباره‌ ما
              </span>
            </div>
            <div className="flex items-center justify-end gap-4 mb-6">
              <p>از ۱۲ ظهر تا ۱۲ شب</p>
              <IoMdTime className="text-[24px]" />
            </div>
            <div className="flex items-center justify-end gap-4 mb-6">
              <p>
                <a
                  dir="ltr"
                  className="mr-2 underline "
                  href="tel:+983832226065"
                >
                  ۰۳۸-۳۲۲۲-۶۰۶۵
                </a>
              </p>
              <MdOutlinePhoneEnabled className="text-[24px]" />
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
              <IoLogoInstagram className="text-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
