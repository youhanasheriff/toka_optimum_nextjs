import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Optimum Aqua Environment",
  description: "Optimum Aqua Environment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
