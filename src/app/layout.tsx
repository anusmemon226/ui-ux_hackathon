import "./globals.css";
import Navbar from "@/app/sections/Navbar";
import { Poppins } from 'next/font/google';
import Footer from "./sections/Footer";
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "500", "600", "700"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
