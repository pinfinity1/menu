import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Menu",
  description: "This Is Menu For Anyone Who Want It",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
