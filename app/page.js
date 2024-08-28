"use client";
import { Logo } from "@/Components/Logo/Logo";
import { Header } from "../Components/Header/Header";
import { MenuItem } from "@/Components/MenuItem/MenuItem";
import { useEffect, useState } from "react";
import { Loader } from "@/Components/Loader/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="w-full h-full font-picoopic px-4 pt-4">
          <Logo />
          <Header />
          <MenuItem />
        </main>
      )}
    </>
  );
}
