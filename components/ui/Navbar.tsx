"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SideMenu from "@/components/ui/SideMenu";
import Bee from "../../public/images/bee.png";
import Image from "next/image";
import NextTopLoader from "nextjs-toploader";
import Link from "next/link";
import SideMenuMobile from "@/components/ui/SideMenuMobile";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AlbumType } from "@/app/albums/page";

const Navbar = ({
  componentsChildren,
  folders,
}: {
  componentsChildren: React.ReactNode;
  folders: AlbumType[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="border-b">
        <div className="flex h-16 justify-between items-center px-5">
          <Link href="/" className="flex gap-x-2 max-md:gap-x-1">
            <h1 className="md:text-2xl lg:text-3xl font-bold cursor-pointer max-md:text-lg">
              PIXIBEE
            </h1>
            <Image
              src={Bee}
              alt="logo"
              className="w-7 h-[26px] max-md:w-6 max-md:h-6"
            />
          </Link>
          <div className=" flex items-center gap-x-4 max-md:gap-x-3">
            <Avatar className="max-md:w-8 max-md:h-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="max-md:text-sm">CN</AvatarFallback>
            </Avatar>
            {!open ? (
              <Bars3Icon
                className="w-6 h-6 md:w-7 md:h-7 lg:hidden"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <XMarkIcon
                className="w-6 h-6 md:w-7 md:h-7 lg:hidden"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex min-h-screen relative">
        <SideMenu folders={folders} />
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
          {componentsChildren}
        </div>
        <SideMenuMobile open={open} folders={folders} />
      </div>
    </>
  );
};

export default Navbar;
