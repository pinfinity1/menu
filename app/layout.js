import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Green FastFood",
  description: "ُThe First Handmade FastFood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
