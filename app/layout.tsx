import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SideMenu from "@/components/ui/SideMenu";
import Bee from "../public/images/bee.png";
import Image from "next/image";
import NextTopLoader from "nextjs-toploader";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixibee",
  description: "Cloud Photo Gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="border-b">
          <div className="flex h-16 justify-between items-center px-5">
            <Link href="/" className="flex gap-x-2">
              <h1 className="text-3xl font-bold cursor-pointer">PIXIBEE</h1>
              <Image src={Bee} alt="logo" className="w-7 h-[26px]" />
            </Link>
            <div className=" flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex min-h-screen">
          <SideMenu />
          <div className="w-full px-4 py-12">
            <NextTopLoader
              color="#f8ec3b"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
