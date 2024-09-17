import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const oswald = Oswald({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Відпочинок у Карпатах | нерухомість, житло, розваги| Мої Карпати",
  description:
    "Якщо ви вирішили влаштувати собі відпочинок у Карпатах, то до ваших послуг нерухомість у Карпатах: будиночки, готелі, відпочинкові комплекси, spa, басейни та багато іншого.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
