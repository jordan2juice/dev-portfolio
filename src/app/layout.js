import { Inter } from "next/font/google";
import "./globals.css";
import "./sass/main.css";
const inter = Inter({ subsets: ["latin"] });
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Jordan Toujouse Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
