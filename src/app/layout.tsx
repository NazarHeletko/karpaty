import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const oswald = Oswald({ subsets: ["cyrillic"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
      <body className={oswald.className}>
        
        <Header/>
        {children}
        
        <Footer/>
        </body>
    </html>
  );
}
