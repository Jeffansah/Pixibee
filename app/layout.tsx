import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AlbumType } from "./albums/page";
import cloudinary from "cloudinary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixibee",
  description: "Cloud Photo Gallery",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = (await cloudinary.v2.api.root_folders()) as {
    folders: AlbumType[];
  };

  const { folders } = result;

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar componentsChildren={children} folders={folders} />
      </body>
    </html>
  );
}
