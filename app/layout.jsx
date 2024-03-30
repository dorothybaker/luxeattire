import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "luxeAttire - Luxury Everywhere",
  description: "Where Luxury is Everywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://www.svgrepo.com/show/395704/store-shop-shopping-bag.svg"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css"
        />
      </head>
      <body>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
