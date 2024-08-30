import "./globals.css";

export const metadata = {
  title: "Menu",
  description: "This Is Menu For Anyone Who Want It",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
