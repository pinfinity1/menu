import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobileCheck = /iPhone|iPad|iPod|Android/i.test(userAgent);
    setIsMobile(mobileCheck);
  }, []);

  return isMobile;
};

export default useIsMobile;
