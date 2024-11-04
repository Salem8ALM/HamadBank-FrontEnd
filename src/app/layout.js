import localFont from "next/font/local";
import "./globals.css";

import Favicon from "@/app/favicon.ico";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getUser } from "@/lib/token";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bank of Failaka",
  description: "The most insecure investment of your life",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
