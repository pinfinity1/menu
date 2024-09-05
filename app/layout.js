import Head from "next/head";
import "./globals.css";
import { CategoryIdProvider } from "@/context/CategoryIdContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Green FastFood",
  description: "ُThe First Handmade FastFood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <CategoryIdProvider>{children}</CategoryIdProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
