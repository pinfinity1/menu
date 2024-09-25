"use client";
import Image from "next/image";
import logo from "../../public/images/sabz.jpg";
import { CgUserlane } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { ContactUS } from "./ContactUS";

export const Logo = () => {
  const [aboutUsModal, setAboutUsModal] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const conatctUsRef = useRef();

  const handleScroll = () => {
    const windowHeight = window.scrollY;
    if (prevScrollY <= 160 && windowHeight > 160) {
      setAboutUsModal(false);
    }
    setPrevScrollY(windowHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center relative">
        <div className="w-[160px] h-[160px] rounded-full overflow-hidden bg-primary/20">
          <Image
            priority
            src={logo}
            width={0}
            height={0}
            className="w-full h-full"
            alt="logo"
          />
        </div>
        <div
          onClick={() => setAboutUsModal((prev) => !prev)}
          className="w-10 h-10 absolute top-2 left-0 bg-primary/20 backdrop-blur shadow-lg hover:shadow-xl rounded-md  flex items-center justify-center transition-all duration-150 cursor-pointer"
        >
          <CgUserlane className="text-[20px] text-primaryDark" />
        </div>
      </div>
      {aboutUsModal && (
        <ContactUS
          ref={conatctUsRef}
          closeModal={() => setAboutUsModal((prev) => !prev)}
        />
      )}
    </>
  );
};
