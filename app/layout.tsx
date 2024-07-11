import type { Metadata } from "next";
import { Eczar, Exo, Exo_2, Itim, Waiting_for_the_Sunrise, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/building-blocks/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Oswald({
    subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <Navbar />
        <div className="layout">
          {children}          
        </div>

      </body>

    </html>
  );
}
