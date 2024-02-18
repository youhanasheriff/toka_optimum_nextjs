import { Inter } from "next/font/google";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Optimum Aqua Environment",
  description: "Optimum Aqua Environment",
};

export default function RootLayout({ children }) {
  const isLoggedIn = false;

  if (isLoggedIn) {
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
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
